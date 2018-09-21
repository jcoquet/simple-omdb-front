import { connect } from 'react-redux'
import View from './View'
import { fetchMovies } from '../../actions'
const mapStateToProps = (state, ownProps) => {
    
    // les props current et total permettront d'afficher ou non les liens prev/newt
    // elle permettent aussi de déterminer les pages adjacentes
    // couplées à la prop term, on garde le contexte de recherche
    // cf. mapDispatchToProps

    return {
        current: state.ui.currentPage,
        total: state.ui.totalResults,
        term: state.ui.term
    }
}

const mapDispatchToProps = dispatch => {
    return {
        paginate: (term, to) => {
            dispatch(fetchMovies(term, to));
        }
    }
}

const Pager = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default Pager