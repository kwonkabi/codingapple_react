import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import data from "./data";

import catImg from "./img/kitty.jpeg";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        style={{
          backgroundImage: `url(${catImg})`,
        }}
      ></div>

      <Row>
        {data.map((el) => (
          <Col xs={6} md={4}>
            {el.title}
            <br />
            {el.price}원
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
