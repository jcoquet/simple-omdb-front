import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = (state, ownProps) => {
    return {
        movie: ownProps.movie
    }
}

const Movie = connect(
    mapStateToProps
)(View)

export default Movie