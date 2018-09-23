import React from 'react';
import { PAGINATION_LIMIT } from '../../constants';

const View = ({ current, total, term, paginate }) => (
    <div className="pager">
        { current > 1 && <span className="secondary prev" onClick={(e) => paginate(term, --current)}>prev</span> }
        { total / PAGINATION_LIMIT > current && <span className="secondary next" onClick={(e) => paginate(term, ++current)}>next</span> }
    </div>
)

export default View