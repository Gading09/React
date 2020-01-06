import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";


class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-2 foot1">
                            <a href="kwkww">
                                <img src={require("../img/page2/logo.png")} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-2 col-1">

                        </div>
                        <div className="col-md-4 col-5 foot2">
                            <p className="social">
                                Social Media
                            </p>
                            <p>
                                <a href="huahaha">
                                        <img className="img-f" src={require("../img/footer/sm-fb.png")}alt=""/>
                                    </a>
                                <a href="eea">
                                        <img className="img-f" src={require("../img/footer/sm-tw.png")}alt=""/>
                                    </a>
                                <a href="lol">
                                        <img className="img-f" src={require("../img/footer/sm-ig.png")}alt=""/>
                                    </a>
                                <a href="lmao">
                                        <img className="img-f" src={require("../img/footer/sm-in.png")}alt=""/>
                                    </a>
                            </p> 
                        </div>
                        <div className="col-md-4 col-4 foot3">
                            <p>
                                copyright @ 2019 Alterra
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;