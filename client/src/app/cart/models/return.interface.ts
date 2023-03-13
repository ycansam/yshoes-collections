import CartProduct from "@/models/cart-product.interface";
export default interface CartReturns {
    cart: CartProduct[];
    isLoading: boolean;
}