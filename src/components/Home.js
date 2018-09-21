import React, { Component } from 'react';
import SearchBox from './searchbox/Hoc';
import List from './list/Hoc';

class Home extends Component {

    render() {

        return (
            <div>
                <SearchBox />
                <List />
            </div>
        )
    }
}

export default Home