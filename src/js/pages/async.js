import React from 'react';
import {Spinner,Container,Row,Col} from 'react-bootstrap';



class Async extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        let star = {};
        getPerson()
            .then(artist => star = artist[0].strArtist)
            .then(artist => this.setState({ name: star, isLoading: false }));
    }



    render() {



        const { name, isLoading } = this.state;

        if (isLoading) {
            return (
                <Container>
                    <Row>
                        <Col xs={5} >
                            <Spinner animation="border" /> 
                        </Col>
                    </Row>
                </Container>
            )
        }
        return (

            <div className=" ibox-content m-4 p-2" >
                <div className="row " >
                    <div className="col-sm-9 border-right rounded-lg" style={{backgroundColor: 'black'}}>
                <h1 className="text-center">{name}</h1>
                     </div>
                     <div className="col-sm border-right rounded-lg ">
                     <h1>{name}</h1>
                     <h1>{name}</h1>

                     </div>
                </div>
                <div className="row">
                    
                    </div> 
            </div>

        )
    }
}

const getPerson = async () => {

    const response = await fetch("http://theaudiodb.com/api/v1/json/1/search.php?s=coldplay");
    const artist = await response.json();
    return artist.artists;
}
export default Async