import { connect } from 'react-redux'
import AnimalList from '../components/AnimalList'
import { toggleCat } from '../actions'

const mapStateToProps = (state, ownProps) => {
    console.log('CatContainer.mapStateToProps')
    return {
        animals: state.catReducer //state.cats
    }
}


const mapDispatchToProps = dispatch => {
    console.log('CatContainer.mapDispatchToProps')
    return {
        onClickAnimal: index => {
            console.log('CatContainer.mapDispatchToProps.onClickAnimal - index:' + index)
            dispatch(toggleCat(index))
        }
    }
}


const CatContainer = connect(
    mapStateToProps
    , mapDispatchToProps
)(AnimalList)

export default CatContainer