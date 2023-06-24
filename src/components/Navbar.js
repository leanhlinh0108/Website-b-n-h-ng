import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./Menuitems";
import {link} from "react-router-dom";


class Navbar extends Component{
    state = {clicked : false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Đông Trang</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div>
                </div>

                <ul className="nav-menu">
                    {
                        // tạo component menuitems để dùng các button item linh động theo map
                        MenuItems.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href="/">
                                    <i className={item.icon}></i>{item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;