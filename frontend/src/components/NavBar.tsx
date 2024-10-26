//import cart from "./assets/iconmonstr-shopping-cart-thin-240.png";
import heart from "../assets/iconmonstr-heart-lined.svg";
import menu from "../assets/iconmonstr-menu-lined.svg";
import user from "../assets/iconmonstr-user-circle-thin.svg";
import cartIcon from "../assets/iconmonstr-shopping-cart-thin.svg";
import home from "../assets/iconmonstr-home-7.svg";
import { useCart } from "../context/cartProvider";
import { Link } from "react-router-dom";





export default function NavBar(): JSX.Element {

  const { name } = useCart()

  console.log(name);
  


  
  return (
    <>
    
        <nav className="navbar">
            <div className="logo">
              <Link to=".">
                <img src={home} alt="" />
              </Link>
            </div>
            <div>
              <Link to="favorites">
                <img src={heart} alt="" />
              </Link>
            </div>
            <div>
              <Link to="cart">
                <img src={cartIcon} alt="" />
              </Link>
            </div>
            <div>
              <a href="">
               <img src={user} alt="user" className="user" />
              </a>
            </div>
        </nav>
    </>
  );
}
