
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;

const CollectionModel = new Schema({
    name: { type: String, required: [true, 'Falta el nombre de la coleccion'] },
    description: { type: String },
    products: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }]
    }
});


CollectionModel.plugin(idValidator);
// exportando modelo
export default mongoose.model('Collection', CollectionModel);