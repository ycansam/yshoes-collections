export default class CProduct {

    public name: string;
    public description: string;
    public extended_description: string;
    public colors: Array<any>;
    public price: string;
    public image: string;
    public currency: string;

    constructor({ name, description, extended_description, colors, price, image, currency }) {
        this.name = name;
        this.description = description;
        this.extended_description = extended_description;
        this.colors = colors;
        this.price = price;
        this.image = image;
        this.currency = currency;
    }

}