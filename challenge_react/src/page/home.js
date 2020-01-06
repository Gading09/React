import React, {Component} from "react";
import Header from "../component/header";
import Page1 from "../component/page1";
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Page1/>
            </div>
        );
    }
}

export default Home;