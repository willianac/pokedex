export const setColorType = (arrayIndex) => {
    let typeColor
    switch (arrayIndex) {
        case 'Fire':
            typeColor = 'type-color-fire'
            break
        case 'Water':
            typeColor = 'type-color-water'
            break
        case 'Grass':
            typeColor = 'type-color-grass'
            break
        case 'Poison':
            typeColor = 'type-color-poison'
            break
        case 'Flying':
            typeColor = 'type-color-flying'
            break
        case 'Bug':
            typeColor = 'type-color-bug'
            break
        case 'Electric':
            typeColor = 'type-color-electric'
            break
        case 'Normal':
            typeColor = 'type-color-normal'
            break 
        case 'Ground':
            typeColor = 'type-color-ground'
            break
        case 'Fighting':
            typeColor = 'type-color-fighting'
            break
        case 'Psychic':
            typeColor = 'type-color-psychic'
            break
        case 'Rock':
            typeColor = 'type-color-rock'
            break       
        case 'Ice':
            typeColor = 'type-color-ice'
            break
        case 'Dragon':
            typeColor = 'type-color-dragon'
            break
        case 'Dark':
            typeColor = 'type-color-dark'
            break    
        default:
            typeColor = 'type-color-default'
            break
    }
    return typeColor
}