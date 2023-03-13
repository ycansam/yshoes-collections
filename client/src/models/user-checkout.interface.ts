import UserShipping from "@/components/Forms/FormUserShippingInfo/models/UserShipping.interface";
import CartProduct from "./cart-product.interface";

export default interface UserCheckout {
    amount: number;
    cart: CartProduct[];
    currency: string;
    saved_at: string;
    userInfo: UserShipping;
}