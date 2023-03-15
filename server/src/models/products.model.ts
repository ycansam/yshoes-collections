
import mongoose from 'mongoose';
import idValidator from 'mongoose-id-validator';
const { Schema } = mongoose;

// Requiere que sea entero y que no sean negativas
const validateUnitsIntegerAndPositive = (units: number): boolean => {
    console.log(units)
    return Number.isInteger(units) && units >= 0;
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
const SizeSchema = new Schema({
    name: { type: String, required: true }, units: {
        type: Number,
        min: 0,
        validate: {
            validator: validateUnitsIntegerAndPositive,
            message: (props: any) => `${props.value} is not valid`
        }
    }
});

// Cada color puede tener tallas distintas con distintas unides en el stock
const ColorSchema = new Schema({ name: { type: String, required: true }, images: { type: Array<String> }, sizes: { type: [SizeSchema] } });

const ProductModel = new Schema({
    name: { type: String, required: true }, // nombre
    description: { type: String }, // descripcion
    extended_description: { type: String }, // descripcion extendida
    colors: {
        type: [ColorSchema], validate: {
            validator: (a) => { console.log(a) }
        }
    }, // colores
    price: { type: Number, set: setPrice, required: true, min: 0 }, // precio
    image: { type: String, default: 'https://i8.amplience.net/i/jpl/jd_027536_a?qlt=92' },
    currency: { type: String, enum: ['EUR', 'USD'] }
});

// Add a custom validator to ensure that units are not less than zero
ProductModel.path('colors').validate(function (colors: Array<any>) {
    const arr = colors.map(color => {
        return color.sizes.map((size: any) => {
            console.log(size);
            return size.units <= 0
        })
    })
    console.log(arr);
    if (arr.length > 0) {
        return new Error("asdasd");
    }

}, 'Units must be greater than or equal to zero.');
ProductModel.plugin(idValidator);
export default mongoose.model('Product', ProductModel);