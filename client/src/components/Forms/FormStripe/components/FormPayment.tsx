import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';
import CheckoutsService from '@/services/checkouts.service';

const FormPayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!stripe) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements?.getElement(CardElement) as any
        }) as any;

        if (!error) {
            CheckoutsService.addCheckout({ amount: 100, id: paymentMethod.id, currency: 'EUR' }).then(res => {
                console.log(paymentMethod);
            }).catch(err => {
                console.log(err);
            })
        }

    };
    return (
        <form onSubmit={handleSubmit} style={{ width: '30rem' }}>
            <CardElement />
            <button type='submit' disabled={!stripe}>Submit</button>
        </form>
    )
}

export default FormPayment;