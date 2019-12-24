import React, {Component} from 'react'

class Ponakan extends Component {
    render() {
        const ponakan = this.props.ponakan
        return(
            <div className="ponakan">
                nama : {ponakan.nama} <br />
                umur : {ponakan.umur}
            </div>
        );
    }
}

export default Ponakan;