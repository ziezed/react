import React, {Component} from 'react'

class Sepupu extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="sepupu">
                {this.props.sepupu}
            </div>
        );
    }
}

export default Sepupu;