import { connect } from 'react-redux'
import View from './View'
import {  } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        movies: Object.values(state.movies),
        message: state.ui.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default List