
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;

// Requiere que sea entero y que no sean negativas
const validateUnitsIntegerAndPositive = (units: number): boolean => {
    return Number.isInteger(units);
}

const isNumber = (n: number): boolean => {
    return typeof n === 'number';
}

const setPrice = (n: number): any => {
    if (isNumber(n)) {
        return parseFloat(n.toFixed(2));
    }
    return new Error("price is not a number");
}

// Talla Schema para cada uno de los colores
const SizeSchema = new Schema({ name: { type: String, required: true }, units: { type: Number, validate: [validateUnitsIntegerAndPositive, "unit is not a number"] } });

// Cada color puede tener tallas distintas con distintas unides en el stock
const ColorSchema = new Schema({ name: { type: String, required: true }, images: { type: Array<String> }, sizes: { type: [SizeSchema] } });

const ProductModel = new Schema({
    name: { type: String, required: true }, // nombre
    description: { type: String }, // descripcion
    extended_description: { type: String }, // descripcion extendida
    colors: { type: [ColorSchema] }, // colores
    price: { type: Number, set: setPrice, required: true }, // precio
    image: { type: String, default: 'https://i8.amplience.net/i/jpl/jd_027536_a?qlt=92' },
    currency: { type: String, enum: ['EUR', 'USD'] }
});

ProductModel.plugin(idValidator);
module.exports = mongoose.model('Product', ProductModel);