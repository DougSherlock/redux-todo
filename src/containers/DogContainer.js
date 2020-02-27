import { connect } from 'react-redux'
import AnimalList from '../components/AnimalList'
import { toggleDog } from '../actions'

const mapStateToProps = (state, ownProps) => {
    console.log('DogContainer.mapStateToProps')
    return {
        animals: state.dogReducer //state.dogs
    }
}


const mapDispatchToProps = dispatch => {
    console.log('DogContainer.mapDispatchToProps')
    return {
        onClickAnimal: index => {
            console.log('DogContainer.mapDispatchToProps.onClickAnimal - index:' + index)
            dispatch(toggleDog(index))
        }
    }
}


const DogContainer = connect(
    mapStateToProps
    , mapDispatchToProps
)(AnimalList)

export default DogContainer