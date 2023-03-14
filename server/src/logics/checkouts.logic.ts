
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET);
import CheckoutsModel from "../models/checkouts.model";
import Checkout from "../models/interfaces/checkout.interface";
import productsLogic from "./products.logic";
class CheckoutsLogic {
    public addCheckout = async ({ id, id_user, cart, amount, currency, userInfo, card }): Promise<any> => {
        const checkout: Checkout = {
            id_payment: id,
            id_user,
            cart,
            card,
            total: amount,
            user_shipping_info: userInfo,
        }
        return new Promise(async (resolve, reject) => {
            try {

                await this.completeCheckout(checkout, true)

                await productsLogic.substractStocksFromCartCheckout(checkout.cart);

                const payment = await stripe.paymentIntents.create({
                    amount: parseInt(amount),
                    currency,
                    payment_method: id,
                    confirm: true,
                })

                resolve({ payment, message: 'Payment Success' })
            } catch (err) {
                const added = this.completeCheckout(checkout, false)
                if (!added) reject(added)
                if (err?.raw?.message) reject(err.raw.message);
                reject(err);
            }
        })
    }


    private completeCheckout = async (checkout: Checkout, completed: boolean): Promise<boolean> => {
        return await this.addToDatabase({ ...checkout, completed });

    }

    private addToDatabase = async (checkout: Checkout): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await CheckoutsModel.create(checkout);
                resolve(true);
            } catch (err) {
                reject(err)
            }
        })
    }
}

const checkoutsLogic = new CheckoutsLogic();
export default checkoutsLogic;