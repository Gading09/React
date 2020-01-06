import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";


class Page2 extends Component{
    render(){
        return(
            <div className="page2">
                <div className="container-fluid pertama">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>ABOUT ME.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="kedua">
                                <nav>
                                    <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce<br/>sites and internal frameworks. Specializes in Angular JS<br/>and responsive design.</p>
                                </nav>
                                <h3>Education</h3>
                                <ul className="list-study">
                                    <li>
                                        <div>
                                            <p>2014</p>
                                            <p>DIPLOMA</p>
                                        </div>
                                        <p>Computer Engineering - University of Chocago</p>
                                    </li>
                                    <li>
                                        <div>
                                            <p>2018</p>
                                            <p>BACHELOR DEGREE</p>
                                        </div>
                                        <p>Computer Engineering - University of Chocago</p>
                                    </li>
                                </ul>
                                <div className="start-table">
                                    <p>Here's few technologies I've been working with recently :</p>
                                </div>
                                <table>
                                    <tr>
                                        <th className="one">HTML & CSS</th>
                                        <th className="two">Serverless</th>
                                        <th className="three">Scrum</th>
                                    </tr>
                                    <tr className="tr2">
                                        <td className="one">Programming</td>
                                        <td className="two">Restful API</td>
                                        <td>Test-Driven Dev</td>
                                    </tr>
                                    <tr className="tr3">
                                        <td>Database</td>
                                        <td>Javascript</td>
                                        <td>Software Testing</td>
                                    </tr>
                                    <tr>
                                        <td>Git & Github</td>
                                        <td>Single Page App</td>
                                        <td>UX/UI Designer</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="ketiga">
                                <img src={require("../img/page2/photo.jpg")} alt=""/>
                            </div>
                            <div className="keempat">
                                <img src={require("../img/page2/line.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page2;