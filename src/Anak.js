import React from 'react'

const Anak = ({anak, hapusAnak}) => {
    const daftarAnak = anak.map(anak => {
        return(
            <div className="anak" key={anak.id}>
                <div>nama : {anak.nama}</div>
                <div>umur : {anak.umur}</div>
                <div>kelas : {anak.kelas}</div>
                <button onClick={() => {hapusAnak(anak.id)}} >Hapus</button>
            </div>
        )
    })
    return(
        <div className="daftar-anak">
            {daftarAnak}
        </div>
    );
}

export default Anak;