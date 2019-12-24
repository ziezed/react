import React, {Component} from 'react'
import './App.css';

import Ponakan from './Ponakan';
import Sepupu from './Sepupu';
import FormBind from './FormBind';
import TambahAnak from './TambahAnak';
import Hela from './component/Hello';
import NameList from './component/NameList';

class App extends Component {
    state = {
        anaks : [
            {nama: 'budi', umur: 23, kelas: 7, id: 1},
            {nama: 'wati', umur: 11, kelas: 3, id: 2},
            {nama: 'rudi', umur: 20, kelas: 6, id: 3}
        ],
        ponakan: {nama: 'ponakan 1', umur: 44},
        sepupu: "saya anak sepupu"
    }

    tambahAnak = (anak) => {
        anak.id = Math.random();
        let anaks = [...this.state.anaks, anak]
        this.setState({
            anaks: anaks
        })
    }

    hapusAnak = (id) => {
        let anaks = this.state.anaks.filter(anak => {
            return anak.id !== id
        });
        this.setState({
            anaks: anaks
        })
    }

    render() {
        return(
            <div className="App">
                <NameList />

                {/* <Hela nama='jhon' akhir='doe'>
                    <p>ini anak props 1</p>
                    <p>ini anak props 2</p>
                </Hela> */}

                {/* menampilkan data banyak object dalam array class component */}
                {/* <AnakClasses anak={this.state.anaks} /> <br />  */}

                {/* menampilkan banyak object */}
                {/* <Ponakan ponakan={this.state.ponakan} /> <br /> */}

                {/* menampilkan variabel langsung */}
                {/* <Sepupu sepupu={this.state.sepupu} /> <br/>  */}

                {/* form data binding   */}
                {/* <FormBind />  */}

                {/* menampilkan data banyak object dalam array function component */}
                {/* <Anak hapusAnak={this.hapusAnak} anak={this.state.anaks} /> <br /> */}

                {/* tambah anak */}
                {/* <TambahAnak tambahAnak={this.tambahAnak} /> */}
            </div>
        );
    }
}

export default App;
