import React, { Component } from "react";
import { Col, Row, Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import PartsDetail from "../components/PartsDetailJSON/PartsDetail";
// import PartsSearch from "../components/PartsSearchJSON/PartsSearch";
import parts from "../utils/partsData.json";
import PartsPic from "../images/parts.jpg";
import Input from "../components/Input/index";
import SimpleForm from "../utils/SimpleForm";
import './style.css'

class PartsCatalog extends Component {
  state = {
    parts,
    search: "",
  };

  removePart = (id) => {
    // Filter this.state.parts for parts with an id not equal to the id being removed
    const parts = this.state.parts.filter((part) => part.id !== id);
    // Set this.state.parts equal to the new parts array
    this.setState({ parts });
  };

  searchParts = () => {
    const filterParts = parts.filter(
      (part) =>
        this.state.search === part.partName.toLowerCase() ||
        this.state.search === part.partsCat.toLowerCase() ||
        this.state.search === part.image.toLowerCase() ||
        this.state.search === part.make.toLowerCase() ||
        this.state.search === part.model.toLowerCase() ||
        this.state.search === part.year.toLowerCase()
        // this.state.search === part.price.toLowerCase()
    );
    this.setState({ parts: filterParts });
  };

  handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      search: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchParts();
  };

  render() {
    return (
      <div
      id='partsDiv'
        className="partsDiv"
        style={{ background: `url(${PartsPic})`}}
      >
        <Container>
          <Row>
            <Col size="md-4">
              <Input
                id="partsInput"
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
            <Col sixe="md-8">
              <div className="buttons">
                {/* <h6 style={{ fontWeight: "bold", marginLeft: "5px" }}></h6> */}
                {/* <Link to="/vehicle" className="btn btn-primary vinbtn">
                  Add Cars
                </Link>
                <Link to="/schedule" className="btn btn-primary vinbtn">
                  Book an Appointment
                </Link> */}
                <Link to="/mygarage-kaera" className="btn btn-primary vinbtn">
                  Logout
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-8">
              <Card id="partsCard" heading="Search for a part to Begin">
                {this.state.parts.map((part) => (
                  <PartsDetail
                    key={part.id}
                    stripeToken="pk_test_92Vf2fZkIX4IGVrM4gHk2kCn00VxkTzS7e"
                    part={part}
                    removePart={this.removePart}
                    id={part.id}
                    image={part.image}
                    partName={part.partName}
                    make={part.make}
                    model={part.model}
                    year={part.year}
                    partCat={part.partCat}
                    price={part.price}
                    quantity={part.quantity}
                  />
                ))}
              </Card>
            </Col>
            {/* <Col size="md-4">
                        <Card heading="Search">
                            <PartsSearch 
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col> */}
          </Row>
        </Container>
        <SimpleForm name="NAME"></SimpleForm>
      </div>
    );
  }
}

export default PartsCatalog;
