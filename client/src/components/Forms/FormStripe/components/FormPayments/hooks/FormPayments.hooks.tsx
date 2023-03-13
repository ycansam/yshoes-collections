import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { FormEvent } from 'react';
import FormPaymentReturns from '../models/returns.interface';
import { Stripe } from '@stripe/stripe-js';
import proccedCheckout from '../services/proccedCheckout.service';
const FormPaymentHooks = (): FormPaymentReturns => {
    const stripe = useStripe() as Stripe;
    const elements = useElements();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!stripe) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements?.getElement(CardElement) as any
        }) as any;

        if (!error) {
            proccedCheckout(paymentMethod)
        }

    };


    return { handleSubmit, stripe }
}

export default FormPaymentHooks;