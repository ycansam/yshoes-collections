import TrCartProductProps from "./models/props.interface";

const TrCartProduct: React.FC<TrCartProductProps> = ({ image, name, price, color, size, currency, quantity }): JSX.Element => {

    return (<tr >
        <td>{image}</td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
    </tr>)
}
export default TrCartProduct;