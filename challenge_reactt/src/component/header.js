import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Header extends Component{
    render(){
        return(
            <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 logo">
                         <img src={require("../img/logo192.png")} alt=""/>
                         <p>KabarKabar</p>
                    </div>
                    <div class="col-md-4">
                         <ul>
                             <li>
                                 <a href="page1.html">Sepakbola</a>
                             </li>
                             <li>
                                 <a className="about" href="kwkw">Ekonomi</a>
                             </li>
                             <li>
                                 <a href="page4.html">Politik</a>
                             </li>
                             <li>
                                 <a href="page3.html">Hiburan</a>
                             </li>
                             <li>
                                 <a href="page3.html">Lainnya</a>
                             </li>
                         </ul>
                     </div>
                     <div class="col-md-4 searching">
                         <form class="form-inline">
                             <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
                         </form>
                         <span class="glyphicon glyphicon-search"></span>
                     </div>
                     <div class="col-md-2 akun">
                         <ul>
                             <li>
                                 <a href="page1.html">Masuk</a>
                             </li>
                             <li>
                                 <a className="about" href="kwkw">Daftar</a>
                             </li>
                         </ul>
                     </div>
                </div>
            </div>
         </header>
        );
    }
}

export default Header;