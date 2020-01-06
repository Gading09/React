import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Header extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <a href="kwkw">
                                <img src={require("../img/page1/logo.png")} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-4"></div>
                        <nav className="col-md-5">
                            <nav className="button1">
                                <ul className="nav-list list-unstyled">
                                    <li>
                                        <a href="page1.html">HOME</a>
                                    </li>
                                    <li>
                                        <a className="about" href="kwkw">ABOUT</a>
                                    </li>
                                    <li>
                                        <a href="page4.html">EXPERIENCE</a>
                                    </li>
                                    <li>
                                        <a href="page3.html">CONTACT</a>
                                    </li>
                                </ul>
                            </nav>
                        </nav>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;