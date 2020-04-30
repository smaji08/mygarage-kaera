import React, { Component } from "react"
import { Col, Row, Container, Card } from "reactstrap";
import PartsDetail from "../components/PartsDetailAPI/PartsDetail"
import PartsSearch from "../components/PartsSearchAPI/PartsSearch";
import API from "../utils/partsData.json";


class PartsCatalog extends Component {
    state = {
        result: {},
        search: ""
    };

    // componentDidMount() {
    //     this.searchParts("Brake Pads")
    // }

    searchParts = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchParts(this.state.search);
      };

    render() {
        return (
        <>
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card 
                            heading={this.state.result.PartName || "Search for a part to Begin"}
                        >
                            {this.state.result.PartName ? (
                                <PartsDetail 
                                    partName={this.state.result.PartName}
                                    make={this.state.result.Make}
                                    model={this.state.result.Model}
                                    year={this.state.result.Year}
                                    partCat={this.state.result.PartCat}
                                    price={this.state.result.Price}
                                />
                            ) : (
                                <h3>No Parts Available</h3>
                            )}
                        </Card> 
                    </Col>
                    <Col size="md-4">
                        <Card heading="Search">
                            <PartsSearch 
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}

export default PartsCatalog