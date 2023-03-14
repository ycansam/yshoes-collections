
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;
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
        name: { type: String, required: true },
        surnames: { type: String, required: true },
        country: { type: String, required: true },
        address: { type: String, required: true },
        postal_code: { type: Number, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        phone: { type: String, required: true },
    }
)

const CheckoutsModel = new Schema({
    payment_id: { type: String, required: true },
    last_digits_card: { type: Number },
    user_shipping_info: { type: UserShippingSchema },
    total: { type: Number, required: true },
    cart: { type: [ProductCartSchema] },
    completed: { type: Boolean, required: true }
},
    {
        timestamps: true
    }
);

CheckoutsModel.plugin(idValidator);
// exportando modelo
export default mongoose.model('Checkout', CheckoutsModel);