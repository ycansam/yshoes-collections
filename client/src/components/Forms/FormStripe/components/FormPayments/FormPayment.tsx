import { CardElement } from '@stripe/react-stripe-js';
import FormPaymentHooks from './hooks/FormPayments.hooks';
import FormPaymentReturns from './models/returns.interface';

const FormPayment: React.FC = (): JSX.Element => {

    const { handleSubmit, stripe }: FormPaymentReturns = FormPaymentHooks();
    
    return (
        <form onSubmit={handleSubmit} style={{ width: '30rem' }}>
            <CardElement />
            <button type='submit' disabled={!stripe}>Submit</button>
        </form>
    )
}

export default FormPayment;