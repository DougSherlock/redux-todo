import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import CatContainer from './containers/CatContainer'
import AddCat from './containers/AddCat'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <AddCat />
    <CatContainer />
  </div>
)

export default App