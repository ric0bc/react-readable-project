export function replaceObjectInArray(array, newIndex, object) {
  return array.map((item, index) => {
    if(index !== newIndex){
      return item
    }
    return {...item, ...object}
  })
}
