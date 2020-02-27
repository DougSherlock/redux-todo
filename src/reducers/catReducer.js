const catReducer = (cats = [], action) => {
    switch (action.type) {
      case 'ADD_CAT':
        console.log('catReducer: adding cat')
        return [
          ...cats,
          {
            breed: action.payload.breed,
            id: action.payload.id,
            selected: false
          }
        ]
      case 'TOGGLE_CAT':
        console.log('catReducer: toggling cat with id ' + action.payload.id)
        // return a copy of the array but change the state of the toggle item
        return cats.map((cat, index) => {
          if (cat.id === action.payload.id) {
             // return a copy of the cat with the selected state toggled
            return Object.assign({}, cat, {selected: !cat.selected})
          } else {
            return cat
          }
        })
      default:
        return cats
    }
  }
  
  export default catReducer