
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET);
import CheckoutsModel from "../models/checkouts.model";
import Checkout from "../models/interfaces/checkout.interface";
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
                const added = this.completeCheckout(checkout, true)
                if (!added) reject(added)

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
                reject(err.raw.message);
            }
        })
    }


    private completeCheckout = async (checkout: Checkout, completed: boolean) => {
        return await this.addToDatabase({ ...checkout, completed });
    }

    private addToDatabase = async (checkout: Checkout) => {
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