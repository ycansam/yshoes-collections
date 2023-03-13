import { Stripe } from "@stripe/stripe-js";
import { FormEvent } from "react";
export default
    interface FormPaymentReturns {
    handleSubmit: (event: FormEvent) => Promise<void>
    stripe: Stripe;
}