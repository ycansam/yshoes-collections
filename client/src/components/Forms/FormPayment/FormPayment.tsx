/* eslint-disable react-hooks/rules-of-hooks */
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';

const stripePromise = loadStripe('pk_test_51MlE64CyY7m2qJfNU2JHgAbtuFUyV1LcKbjVzloocg7miUlCMrDgLY2F3NarKV0Ppycta35HyARdlBzMkbsnmK6B00IvDjf8Jp');

const Form = () => {
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
            console.log(paymentMethod);
        }

    };
    return (
        <form onSubmit={handleSubmit} style={{ width: '30rem' }}>
            <CardElement />
            <button type='submit'>Submit</button>
        </form>
    )
}


const FormPayment: React.FC = () => {


    return (
        <Elements stripe={stripePromise}  >
            <Form />
        </Elements>
    )
}
export default FormPayment;