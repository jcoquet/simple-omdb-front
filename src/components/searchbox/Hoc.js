import { connect } from 'react-redux'
import View from './View'
import { } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: needle => {
            alert('Search for ' + needle);
        }
    }
}

const SearchBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default SearchBox