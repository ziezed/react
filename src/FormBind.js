import React, { Component } from 'react';

class FormBind extends Component {
    state = { 
        nama: 'Budi',
        umur: 22
    }

    handleChange = (e) =>{
        this.setState({
            nama: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.nama)
    }

    render() { 
        return (
            <div className="form">
                <h3>nama saya: {this.state.nama}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
          );
    }
}
 
export default FormBind;