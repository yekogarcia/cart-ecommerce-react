export const countDuplicatesItemsArray = (value, array) => {
    let count = 0;
    array.forEach(arrayValue => {
        if (arrayValue == value) {
            count++;
        }
    });
    return count;
}

export const removeArrayDuplicates = array => {
    return Array.from(new Set(array));
}

export const removeItemArray = (array, item) => {
    const index = array.indexOf(item);
    console.log(index);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
} 