import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom"
<Link to="Index">BLOCK</Link>

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      
      <nav className="NavbarItems">
        
        <h1 className="navbar-logo">Đông Trang</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        {/* // calss ko để dấu chấm,js ko nhận */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {
            // tạo component menuitems để dùng các button item linh động theo map
            MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })
          }
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
