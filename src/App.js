import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import CatContainer from './containers/CatContainer'
import DogContainer from './containers/DogContainer'
import AddCat from './containers/AddCat'
import AddDog from './containers/AddDog'

const App = () => (
  <div style={{fontFamily:"Segoe UI"}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <div>
      <div><h2>This element tree connects the AnimalList component to the catReducer reducer</h2></div>      
      <AddCat />
      <CatContainer species="cat" />
    </div>
    <hr />
    <div>
      <div><h2>This element tree connects the AnimalList component to the dogReducer reducer</h2></div>      
      <AddDog />
      <DogContainer species="dog"/>
    </div>
  </div>
)

export default App