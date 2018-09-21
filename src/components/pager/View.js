import React from 'react';
import { PAGINATION_LIMIT } from '../../constants';

const View = ({ current, total, term, paginate }) => (
    <div>
        { current > 1 && <span onClick={(e) => paginate(term, --current)}>prev</span> }
        { total / PAGINATION_LIMIT > current && <span onClick={(e) => paginate(term, ++current)}>next</span> }
    </div>
)

export default View