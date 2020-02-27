let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextCatId = 0
export const addCat = breed => ({
  type: 'ADD_CAT',
  payload : {
    breed: breed,
    id: nextCatId++
  }
})

export const toggleCat = id => ({
  type: 'TOGGLE_CAT',
  payload: {
    id : id
  }
})

