/**Encargado que se haga la referencia con la base de datos */

import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
};

export { insertItem };