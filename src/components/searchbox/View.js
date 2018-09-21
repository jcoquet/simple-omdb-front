import React, { Component } from 'react'

class View extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value,
            error: false
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value.length > 0) {
            this.props.fetchMovies(this.state.value);
        } else {
            this.setState({error: true});
        }
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Movie title..." value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Search</button>
                {this.state.error && <span>Ho please...</span>}
            </form>
        )
    }
}

export default View