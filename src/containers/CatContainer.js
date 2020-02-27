import { connect } from 'react-redux'
//import { addCat } from '../actions/index.js'
import CatList from '../components/CatList'
import { toggleCat } from '../actions'

const mapStateToProps = (state, ownProps) => {
    console.log('CatContainer.mapStateToProps')
    return {
        // active: ownProps.filter === state.visibilityFilter
        cats: state.catReducer //state.cats
    }
}


const mapDispatchToProps = dispatch => {
    console.log('CatContainer.mapDispatchToProps')
    return {
        onClickCat: index => {
            console.log('CatContainer.mapDispatchToProps.onClickCat - index:' + index)
            dispatch(toggleCat(index))
        }
    }
}


const CatContainer = connect(
    mapStateToProps
    , mapDispatchToProps
)(CatList)

export default CatContainer