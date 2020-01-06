import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Berita2 extends Component{
    render(){
        return(
            <div className="berita">
            <link href="http://fonts.googleapis.com/css?family=Muli" rel='stylesheet'/>
            <link href="https://fonts.google.com/specimen/Roboto" rel='stylesheet'/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

            <div className="col-md-7">
                <div className="col-md-12 kotak">
                    <div className="col-md-12 profil">
                        <img src={require("../img/logo192.png")} alt=""/>
                        <p>Hedy Gading</p>
                    </div>
                    <div className="col-md-12 gambar">
                        <img src={require("../img/g.png")} alt=""/>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-12 judul">
                            <p>Kisa Sedih Di Hari Libur</p>
                        </div>
                        <div className="col-md-12 pendek">
                            <p>Mantee alterra tidak dapat berlibur dihari libur dikarenakan tugas tak kunjung kelar kelar</p>
                        </div>
                        <div className="col-md-12 waktu">
                            <p className="waktu">6 Januari 2020, 17:00</p>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4 apapun">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </div>
                            <div className="col-md-4 apapun">
                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </div>
                            <div className="col-md-4 apapun">
                            <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Berita2;