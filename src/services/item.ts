/**Encargado que se haga la referencia con la base de datos */

import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
};

const getCars = async () => {
    const responseItems = await ItemModel.find({});
    return responseItems;
}

const getCar = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
}

const updateCar = async (id:string, data: Car) => {
    const responseItem = await ItemModel.findByIdAndUpdate({_id: id}, data, {new:true}); /**
    El new true sirve porque por defecto la función findOneAnd Update retorna el documento que está ANTES de que la actualización
    se aplique, entonces si ponemos en true nos responderá el de después (el ya actualizado) */
    return responseItem;
}

const deleteCar = async (id:string) => {
    const responseItem = await ItemModel.findOneAndDelete({_id: id});
    return responseItem;
}

export { insertCar, getCars, getCar, updateCar, deleteCar };