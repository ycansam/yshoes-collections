import TableCartProductsProps from "./models/props.interface";
import TrCartProduct from "./components/TrCartProduct/TrCartProduct";

const Theads: string[] = ['producto', 'cantidad', 'total']

const TableCartProducts: React.FC<TableCartProductsProps> = ({ products }) => {

    return <table >
        <thead>
            <tr>
                {Theads.map((thead, index) => {
                    return <th key={index}>{thead}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {products.map((cartProduct, index) => {
                return <TrCartProduct key={index}
                    image={cartProduct.id_product.image}
                    name={cartProduct.id_product.name}
                    price={cartProduct.id_product.price}
                    color={cartProduct.color}
                    size={cartProduct.size}
                    currency={cartProduct.id_product.currency}
                    quantity={cartProduct.quantity}
                />
            })}
        </tbody>
    </table>
}
export default TableCartProducts;