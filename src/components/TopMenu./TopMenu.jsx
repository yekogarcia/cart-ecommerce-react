import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { Cart } from "../Cart/Cart";
import "./TopMenu.scss";

export const TopMenu = ({ productsCart, getProductsCart, products }) => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BradNav />
        <MenuNav />
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );

  function BradNav() {
    return (
      <Navbar.Brand>
        <Logo />
        <h2>The Ice Cream House</h2>
      </Navbar.Brand>
    );
  }

  function MenuNav() {
    return (
      <Nav className="mr-auto">
        <Nav.Link href="#">Aperitivos</Nav.Link>
        <Nav.Link href="#">Helados</Nav.Link>
        <Nav.Link href="#">Mascotas</Nav.Link>
      </Nav>
    );
  }
};
