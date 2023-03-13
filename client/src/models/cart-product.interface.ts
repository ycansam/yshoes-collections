export default interface CartProduct {
    _id: string;
    id_product: | {
        _id: string;
        name: string;
        price: number;
        image: string;
        currency: number;
    };
    quantity: number;
    color: string;
    size: string;
}