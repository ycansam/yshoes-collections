
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET);

class CheckoutsLogic {
    public addCheckout = async ({ id, cart, amount, currency, userInfo }: any): Promise<any> => {

        return new Promise(async (resolve, reject) => {
            try {
                const payment = await stripe.paymentIntents.create({
                    amount,
                    currency,
                    payment_method: id,
                    confirm: true,
                    cart,
                    userInfo
                })
                console.log(payment)
                resolve({ payment, message: 'Payment Success' })
            } catch (err) {
                console.log(err);
                reject(err.raw.message);
            }

        })
    }
}

const checkoutsLogic = new CheckoutsLogic();
export default checkoutsLogic;