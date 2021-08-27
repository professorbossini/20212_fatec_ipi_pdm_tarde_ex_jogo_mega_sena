import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

export default class App extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            jogo: [0, 0, 0, 0, 0, 0]
        }
    }
    gerarJogo = () => {
        let aux = []
        while (aux.length < 6){
            let n = Math.round(Math.random() * 60) + 1;
            if (!aux.includes(n))aux.push(n)
        }
        this.setState({jogo: aux})
        //não
        // this.state = {jogo: aux}
    }


    render() {
        return (
            <Container className="mt-2">
                <Row>
                    <Col md={8}>
                        <Card className="p-2">
                            <Card.Header>
                                Mega Sena
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center border rounded">
                                <ListGroup horizontal>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[0]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[1]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[2]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[3]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[4]}
                                    </ListGroup.Item>
                                    <ListGroup.Item variant="success">
                                        {this.state.jogo[5]}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button variant="outline-success" className="w-100 mt-2" onClick={this.gerarJogo}>
                                    Gerar Jogo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector ('#root')
)
