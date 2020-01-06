import React, {Component} from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Page2 from "../component/page2";
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class AboutMe extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Page2/>
                <Footer/>
            </div>
        );
    }
}

export default AboutMe;