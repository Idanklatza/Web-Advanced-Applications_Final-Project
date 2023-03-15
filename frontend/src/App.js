import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { createContext, useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import { Login } from "./screens/LoginScreen";
import { Register } from "./screens/RegisterScreen";
import React from "react";
import CatalogScreen from "./screens/CatalogScreen";
import AdminScreen from "./screens/AdminScreen";
import InformationScreen from "./screens/InformaitonScreen";
import PurchaseScreen from "./screens/PurchaseScreen"
import { AuthProvider } from "./components/AuthContext";
function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>Premuim Wine Site</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/catalog" className="nav-link">
                    Catalog
                  </Link>
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  <Link to="/tip" className="nav-link">
                    Information
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/product/:slug" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/catalog" element={<CatalogScreen />} />
                <Route path="/admin" element={<AdminScreen />} />
                <Route path="/tip" element={<InformationScreen />} />
                <Route path="/history" element={<PurchaseScreen />} />
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
