import React, { Component } from "react"
import { Col, Row, Container, Card } from "reactstrap";
import PartsDetail from "../components/PartsDetailJSON/PartsDetail"
// import PartsSearch from "../components/PartsSearchJSON/PartsSearch";
import parts from "../utils/partsData.json";


class PartsCatalog extends Component {
    state = {
        parts
    };

    removePart = id => {
        // Filter this.state.parts for parts with an id not equal to the id being removed
        const parts = this.state.parts.filter(part => part.id !== id);
        // Set this.state.parts equal to the new parts array
        this.setState({ parts });
    }

    // componentDidMount() {
    //     this.searchParts("Brake Pads")
    // }

    // searchParts = query => {
    //     API.search(query)
    //         .then(res => this.setState({ result: res.data }))
    //         .catch(err => console.log(err));
    // }

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchParts(this.state.search);
    //   };

    render() {
        return (
        <>
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card 
                            heading="Search for a part to Begin"
                        >
                            {this.state.parts.map(part => (
                                <PartsDetail
                                    removePart={this.removePart}
                                    id={part.id} 
                                    partName={part.partName}
                                    make={part.make}
                                    model={part.model}
                                    year={part.year}
                                    partCat={part.partCat}
                                    price={part.price}
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
        </>
        )
    };
}


export default PartsCatalog;