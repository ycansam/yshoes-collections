
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;

// Requiere de 1 minimo de length 1;
const minimumColorsLength = (colors: Array<any>) => {
    return colors.length > 0;
}

// Requiere que sea entero y que no sean negativas
const validateUnitsIntegerAndPositive = (units: number) => {
    return Number.isInteger(units);
}

// Talla Schema para cada uno de los colores
const SizeSchema = new Schema({ name: { type: String, required: true }, units: { type: Number, validate: { validateUnitsIntegerAndPositive } } });

// Cada color puede tener tallas distintas con distintas unides en el stock
const ColorSchema = new Schema({ name: { type: String, required: true }, images: { type: String }, sizes: { type: [SizeSchema] } });

const ProductModel = new Schema({
    name: { type: String, required: true }, // nombre
    description: { type: String }, // descripcion
    extended_description: { type: String }, // descripcion extendida
    colors: { type: [ColorSchema], validate: { minimumColorsLength } }, // colores
    price: { type: Number, set: (p: Number) => p.toFixed(2) }, // precio
    image: { type: String, default: 'https://i8.amplience.net/i/jpl/jd_027536_a?qlt=92' },
    currency: { type: String, enum: ['EUR', 'USD'] }
});



ProductModel.plugin(idValidator);
export default mongoose.model('Product', ProductModel);