import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";


class Page4 extends Component{
    render(){
        return(
            <div className="page4">
                <body>
                    <div className="experience1">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <p className="experience">
                                        EXPERIENCE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1 st-line">

                                </div>
                                <div className="col-md-1 col-3">

                                </div>
                                <div className="col-md-10 col-9">
                                    <article>
                                        <h4>FULL-STACK ENGINEER - ALTERRA ACADEMY</h4>
                                        <h5> May, 2019 - Present </h5> 
                                        <p className="linetop">
                                            - Write modern, performant, maintainable code for a diverse array of client and internal projects
                                        </p>
                                        <p className="line"> 
                                            - Work with a veriety of di different languages, platforms, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic and Netilfy
                                        </p>
                                        <div className="dot"></div>
                                    </article>
                                    <article>
                                        <h4>FRONTEND ENGINEER - APPLE</h4>
                                        <h5> May, 2018 - May, 2019 </h5>
                                        <p className="linetop">
                                            Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaSript
                                        </p>
                                        <div className="dot"></div>
                                    </article>
                                    <article>
                                        <h4>UI/DX DESIGN - SCOUT </h4>
                                        <h5> January, 2018 - April,2018 </h5>
                                        <p className="linetop">
                                            - Developed and shipped highly interactive web applications for Apple Music using Emer.js
                                        </p>
                                        <p className="line">
                                            - Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browse
                                        </p>
                                        <div className="dot"></div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

export default Page4;