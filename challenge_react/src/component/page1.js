import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";


class Page1 extends Component{
    render(){
        return(
            <div className="page1">
                <body>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-12 photo">
                                    <a href="kwkwkw">
                                        <img src={require("../img/page1/photo.png")} alt=""/>
                                    </a>
                                </div>
                                <div className="col-lg-7">
                                    <p className="intro">
                                        Hi, my name is 
                                    </p>
                                    <p className="intro1">
                                        Anne Sullivan 
                                    </p>
                                    <p className="intro2"> 
                                        I build things for the web
                                        
                                    </p>
                                    <p>
                                        <a className="button" href="page3.html" target="">Get In Touch</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}
export default Page1;