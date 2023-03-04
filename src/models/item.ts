import {Schema, Types, model, Model} from "mongoose";
import { Car } from "../interface/car.interface";

const ItemSchema = new Schema<Car>(
    {
        /**Propiedades que nosotros vamos a utilizar */
        color:{type:String, required:true},
        gas:{type:String, enum:["gasoline","electric"], required:true},
        year:{type:Number, required:true},
        description:{type:String, required:true},
        price:{type:Number, required:true},
        name:{type:String, required:true}
    },

    {
       timestamps:true,
       versionKey:false,
       /**
        * Esto es solo para configuración, el versionKey es porque mongoose tiene la capacidad de guardar un dato por versión
        * pero en este caso no lo vamos a utilizar.
        * 
        * El timestamp quiere decir que cuando se guarde un dato en la BBDD, automaticamente se creen dos datos, uno es la fecha de 
        * creación y la otra es la fecha de modificación.*/ 
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;