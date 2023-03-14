import CartProduct from "./cart-product.interface";

export default interface Checkout {
    id_payment: string;
    id_user: string;
    user_shipping_info: UserShipping;
    card: Card;
    cart: CartProduct[];
    total: number;
    completed?: boolean;
}

interface UserShipping {
    name: string;
    surnames: string;
    country: string;
    address: string;
    postal_code: number;
    city: string;
    state: string;
    phone: string;
}

interface Card {
    brand: string;
    checks: object;
    country: string;
    exp_month: number;
    exp_year: number;
    last4: string;
}