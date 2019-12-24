import React, { Component } from 'react'

export class TambahAnak extends Component {
    state = {
        nama: '',
        umur: '',
        kelas: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.tambahAnak(this.state)
        this.setState({
            nama: '',
            umur: '',
            kelas: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="nama"> Nama :</label>
                    <input type="text" id="nama" onChange={this.handleChange} value={this.state.nama} />
                    <label htmlFor="umur"> Umur :</label>
                    <input type="text" id="umur" onChange={this.handleChange} value={this.state.umur}/>
                    <label htmlFor="kelas"> Kelas :</label>
                    <input type="text" id="kelas" onChange={this.handleChange} value={this.state.kelas}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default TambahAnak
