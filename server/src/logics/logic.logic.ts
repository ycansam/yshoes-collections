import { Model } from "mongoose";

export default class Logic {

    public model: Model<any>;
    constructor(model: Model<any>) {
        this.model = model;
    }
    
}