import React, { Component } from 'react';
import ListQuotes from './ListQuotes';

class GetQuotes extends Component {
    constructor(props) {
    super(props);
    this.state = {
        toggle: false
    }
    this.toggleValue = this.toggleValue.bind(this);
    }
        
    toggleValue() {
        this.setState({toggle: true});
    }
        
    render() {
          return(
            <div className="align-items-center">
                <button className="btn btn-primary mt-3" onClick={this.toggleValue}>Get All Quotes</button>
                {this.state.toggle && <ListQuotes />}
            </div>
          );
         }
}

export default GetQuotes;