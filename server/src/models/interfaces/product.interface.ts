export default interface Product {
    _id: string;
    name: string;
    description: string;
    extended_description: string;
    colors: ProductColor[]
    price: number;
    image: string;
    currency: string;
}

interface ProductColor{
    name: string;
    images: string[];
    sizes: ProductSize[]
}

interface ProductSize {
    name: string;
    units: number;
}