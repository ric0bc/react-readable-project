export function replaceObjectInArray(array, newIndex, object) {
  return array.map((item, index) => {
    if(index !== newIndex){
      return item
    }
    return {...item, ...object}
  })
}

export function uniqueId () {
  return Math.random().toString(36).substr(2, 15)
}
