export default interface CartProduct {
    _id: string;
    id_product: {
        _id: string;
        name: string;
        price: number;
        image: string;
        currency: string;
    };
    quantity: number;
    color: string;
    size: string;
}