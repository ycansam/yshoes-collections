import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import FormPayment from './components/FormPayments/FormPayment';
const stripePromise = loadStripe('pk_test_51MlE64CyY7m2qJfNU2JHgAbtuFUyV1LcKbjVzloocg7miUlCMrDgLY2F3NarKV0Ppycta35HyARdlBzMkbsnmK6B00IvDjf8Jp');

const FormStripe: React.FC = () => {

    return (
        <Elements stripe={stripePromise}  >
            <FormPayment />
        </Elements>
    )
}
export default FormStripe;