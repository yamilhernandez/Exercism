/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
    let obj = time !== undefined ? time : -1
    switch(obj){
        case 0:
            return 'Lasagna is done.'
        case -1:
            return 'You forgot to set the timer.'
        default:
            return 'Not done, please wait.'
    }
}


export function preparationTime(layers, avgTime){
    let time = avgTime !== undefined ? avgTime : 2
    return layers.length * time

}

export function quantities(layers){
    let noodles = 0
    let sauce = 0
    for (const key in layers) {
        if (layers[key] === 'sauce'){
            sauce+=0.2
        } else if(layers[key] ==='noodles') {
            noodles+=50
        }
    }
    let obj = {
        noodles,
        sauce
    }
    return obj
}

export function addSecretIngredient(list, ingredients){
    ingredients.push(list[list.length-1])
}

export function scaleRecipe(recipe,x){
    let obj = {}
    for (const key in recipe){
        obj[key] = recipe[key]/2
        obj[key] = obj[key] * x
    }
    return obj
}