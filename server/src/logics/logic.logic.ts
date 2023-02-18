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
    private ClassRef: any;
    private nameRef: string;


    constructor(model: Model<any>, ClassRef: any, nameRef: string) {
        this.model = model;
        this.ClassRef = ClassRef;
        this.nameRef = nameRef;
    }

    /**
     * busca cualquier objeto en la base de datos y lo devuelve
     * @param id id del objeto a buscar
     * @returns devuelve un objeto de la clase referencia
     */
    public getByIdAny = (id: string) => {
        return new Promise(async (resolve, reject): Promise<any> => {
            try {
                const doc = await this.model.findById(id);

                // Si encuentra el documento lo recrea con la clase y lo envia
                if (doc) {
                    const obtained = new this.ClassRef(doc);
                    resolve(obtained);
                } else {
                    reject(new Error(this.nameRef + " does not exist"));
                }
            } catch (err) {
                reject(err);
            }

        })
    }

    /**
     * crea cualquier tipo de objeto y lo añade a la base de datos
     * @returns devuelve true
     */

    public createAny = (body: any): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await this.model.create(body);
                resolve(true);
            } catch (err) {
                reject(err)
            }
        })

    }

    /**
     * Busca y edita una entrada de un modelo cualquiera
     * @param id Id del objeto a editar
     * @param body todo el contenido del objeto
     * @returns devuelve true si lo añade
     */
    public updateAny = async (id: string, body: any): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                // Lo busca y lo actualiza. Si no lo encuentra tira un nuevo error
                const doc = await this.model.findByIdAndUpdate(id, body);

                doc ? resolve(true) : reject(new Error(this.nameRef + " does not exist"));
            } catch (err) {
                reject(err)
            }
        })

    }
    /**
     * Busca y elimina una entrada de un modelo cualquiera
     * @param id 
     * @returns devuelve true si lo ha eliminado
     */
    public deleteAnyById = async (id: String) => {
        return new Promise(async (resolve, reject) => {
            try {
                // Lo busca y lo elimina. Si no lo encuentra tira un nuevo error
                const doc = await this.model.findByIdAndDelete(id);
                doc ? resolve(true) : reject(new Error(this.nameRef + " does not exist"));
            } catch (err) {
                reject(err);
            }
        })
    }

}