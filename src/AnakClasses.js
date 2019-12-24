import React, {Component} from 'react'

class AnakClasses extends Component {
    state = {bapak: 'bapak budi'}
    render() {
        const anak = this.props.anak;
        const daftarAnak = anak.map(anak => {
            return(
                <div className="anak" key={anak.id}>
                    <div>nama : {anak.nama}</div>
                    <div>umur : {anak.umur}</div>
                    <div>kelas : {anak.kelas}</div>
                </div>
            )
        })
        return(
            <div className="daftar-anak">
                {daftarAnak}
            </div>
        );
    }
}

export default AnakClasses;