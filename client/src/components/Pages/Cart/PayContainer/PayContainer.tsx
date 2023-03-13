import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import RedirectToCheckout from "./services/RedirectToCheckout.service";
import PayContainerProps from "./models/PayContainerProps.interface";

const PayContainer: React.FC<PayContainerProps> = ({ subtotal, currency, cart }): JSX.Element => {
    const router = useRouter();
    const redirectToCheckout = () => { RedirectToCheckout(router, { currency, cart, subtotal }) }
    return (
        <div>
            <p>Subtotal: {subtotal} {currency}</p>
            <p>Los impuestos y gastos de envio se calculan en la pantalla de pago</p>
            <Button text={'Pagar pedido'} className='btn-2' type="button" onClick={redirectToCheckout} />
            <button>Boton paypal</button>
        </div>
    )

}

export default PayContainer;