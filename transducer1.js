// inspired by @mpjme in https://www.youtube.com/watch?v=xcGbhU_DtRg
// The video went a bit abstract a difficult for me to follow
//
// here I converted a map to a reduce  and abtracted the function for each transform to be utilized in either one.

const dragons = [
    { name: 'fluffykins', size: 1 },
    { name: 'wargle', size: 3 }
]

const dragonDescriber = dragon => dragon.size > 1 ? `${dragon.name} the great` : `${dragon.name} the tiny`
const dragonCoster = dragon => dragon.name.length * dragon.size

const descriptiveMap = (dragon) => {
    return {
        ...dragon,
        description: dragonDescriber(dragon)
    }
}

const costMap = dragon => {
    return {
        ...dragon,
        cost: dragonCoster(dragon)
    }
}

const mappedDescriptiveDragons = dragons.map(descriptiveMap).map(costMap)

mappedDescriptiveDragons //



const descriptiveReducer = (target, dragon) => {
        dragon.description = dragonDescriber(dragon)
        return [...target, dragon] }

const costReducer =  (target, dragon) => {
    dragon.cost = dragonCoster(dragon)
    return [...target, dragon]
}

const reducedDescriptiveDragons = dragons.reduce(descriptiveReducer, [] ).reduce(costReducer, [])

reducedDescriptiveDragons //
