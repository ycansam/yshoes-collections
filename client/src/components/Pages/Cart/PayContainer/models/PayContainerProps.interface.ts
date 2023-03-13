import CartProduct from "@/models/cart-product.interface";
export default interface PayContainerProps {
    subtotal: number;
    currency: string;
    cart: CartProduct[];
}