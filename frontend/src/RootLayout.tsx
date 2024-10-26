// src/components/ProductList.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { CartProvider } from "./context/cartProvider";
import { Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <CartProvider>
        <div className="banner">
          <p>
            Cria uma conta e obtenha 20% de desconto.{" "}
            <a href="#">Criar uma Conta</a>
          </p>
        </div>

        <header>
           <div className="logo">
           <Link to="products">
           <h1>Logo</h1></Link>
           </div>

           <div>
              <button className="login-btn">Entrar</button>
           </div>
        </header>
        <NavBar />
        <SearchBar />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}
