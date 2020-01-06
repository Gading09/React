import React, {Component} from "react";
import Header from "../component/header";
import BeritaTerkini from "../component/berita_terkini";
import Berita1 from "../component/berita1"
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class News extends Component{
    render(){
        return(
            <div>
                <Header/>
                <BeritaTerkini/>
                <Berita1/>
            </div>
        );
    }
}

export default News;