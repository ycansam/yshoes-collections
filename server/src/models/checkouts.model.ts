
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;

const setPostalCode = (n: string): any => {
    return parseInt(n);
}

const ProductCartSchema = new Schema(
    {
        id_product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true }
    }
);
const UserShippingSchema = new Schema(
    {
        name: { type: String, required: false },
        surnames: { type: String, required: false },
        country: { type: String, required: [true, 'Country is missing'] },
        address: { type: String, required: [true, 'Address is missing'] },
        postal_code: { type: Number, required: true, set: setPostalCode },
        city: { type: String, required: [true, 'City is missing'] },
        state: { type: String, required: [true, 'State is missing'] },
        phone: { type: String, required: false },
    }
)

const CardSchema = new Schema({
    brand: { type: String },
    country: { type: String },
    exp_month: { type: Number },
    exp_year: { type: Number },
    last4: { type: String },
})

const CheckoutsModel = new Schema({
    id_payment: { type: String, required: true },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    card: { type: CardSchema },
    user_shipping_info: { type: UserShippingSchema },
    total: { type: Number, required: true },
    cart: { type: [ProductCartSchema] },
    completed: { type: Boolean, required: true, default: false }
},
    {
        timestamps: true
    }
);

CheckoutsModel.plugin(idValidator);
// exportando modelo
export default mongoose.model('Checkout', CheckoutsModel);