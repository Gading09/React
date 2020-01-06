import React, {Component} from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Page4 from "../component/page4";
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Experience extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Page4/>
                <Footer/>
            </div>
        );
    }
}

export default Experience;