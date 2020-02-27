const dogReducer = (dogs = [], action) => {
    switch (action.type) {
      case 'ADD_DOG':
        console.log('dogReducer: adding dog')
        return [
          ...dogs,
          {
            breed: action.payload.breed,
            id: action.payload.id,
            selected: false
          }
        ]
      case 'TOGGLE_DOG':
        console.log('dogReducer: toggling dog with id ' + action.payload.id)
        // return a copy of the array but change the state of the toggle item
        return dogs.map((dog, index) => {
          if (dog.id === action.payload.id) {
             // return a copy of the dog with the selected state toggled
            return Object.assign({}, dog, {selected: !dog.selected})
          } else {
            return dog
          }
        })
      default:
        return dogs
    }
  }
  
  export default dogReducer