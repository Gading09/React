import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";


class Page3 extends Component{
    render(){
        return(
            <div className="page3">
                <body>
                    <div className="container-fluid">
                        <div className="gambar">
                            <div className="row h-100">
                                <div className="col-5">
                                    <div className="img-logo">
                                        <div className="overlay"></div>
                                        <img src={require("../img/page3/logo1.png")}alt=""/>
                                    </div>
                                </div>
                                <form action="page1.html">
                                    <div className="col-7">
                                        <div className="kedua">
                                            <h5>Contant Us</h5>
                                            <div className="input">
                                                <div>
                                                    <label for="fullname">Full Name<sup className="star">*</sup></label><br/>
                                                    <input type="text" name="fullname" placeholder="Full Name..." required/><br/>
                                                </div>
                                                <div>
                                                    <label for="email">Email Address<sup className="star">*</sup></label><br/>
                                                    <input type="email" name="email" placeholder="example@alterra.id" required/><br/>
                                                </div>
                                                <div>
                                                    <label for="phone">Phone Number<sup className="star">*</sup></label><br/>
                                                    <input type="tel" name="phone" pattern="^[0][0-9]{6,12}" placeholder="085554447900" required/><br/>
                                                </div>  
                                            </div>
                                            <div>
                                                <label for="role">Role:</label><br/>
                                                <select name="role" className="role">
                                                    <option value="select" disabled>selected..</option>
                                                    <option value="fullsatck">FULL-STACK ENGINEER</option>
                                                    <option value="fronten">FRONTEND ENGINEER</option>
                                                    <option value="uiuxdesigner">UI/UX Designer</option>
                                                </select>
                                            </div>
                                            <div className="bio">
                                                <label for="message">Message:</label><br/>
                                                <input type="text" name="message"/><br/>
                                            </div>
                                            <div className="submit"><br/>
                                                <input type="submit" value="Submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Page3;