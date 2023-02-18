import { Model } from "mongoose";

// Clase logica padre de toda la logica
// tiene los cruds basicos y los modelos los cuales son todos iguales
/**
 * @param model: modelo de la base de datos
 * @param classRef: clase de referencia del modelo
 * @param nameRef: Nombre de referencia para mostrar errores
 */
export default class Logic {

    public model: Model<any>;
    private classRef: any;
    private nameRef: string;


    constructor(model: Model<any>, classRef: any, nameRef: string) {
        this.model = model;
        this.classRef = classRef;
        this.nameRef = nameRef;
    }

    public getByIdAny = (id: string) => {
        return new Promise(async (resolve, reject): Promise<any> => {
            try {
                const doc = await this.model.findById(id);

                // Si encuentra el documento lo recrea con la clase y lo envia
                if (doc) {
                    const obtained = new this.classRef(doc);
                    resolve(obtained);
                } else {
                    reject(new Error(this.nameRef + " does not exist"));
                }
            } catch (err) {
                reject(err);
            }

        })
    }

}