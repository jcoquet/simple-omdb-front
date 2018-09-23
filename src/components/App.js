import React, { Component } from 'react';
import Loader from './Loader';
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="layout">
                <header>
                    <Link to='/'>BlablaMovie</Link>
                </header>
                {this.props.children && React.cloneElement(this.props.children)}
                <footer>
                    2018 - <a target="_blank" href="https://github.com/jcoquet/simple-omdb-front">Github</a>
                </footer>
                <Loader />
            </div>
        );
    }
}

export default App;