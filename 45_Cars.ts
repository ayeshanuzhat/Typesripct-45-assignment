

import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ): object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};


let answare = storeCarInfo('Honda', 'Civic', {color:'black'}, {features: ['Navigation', 'Power window']})

console.log(answare)
