import { Container,Row,Col } from "react-bootstrap"
import {logos} from "../../const/Images"
export default function Banner(){
    return(
        <Container fluid >
            <Row>
                <Col md={12}>
             <img className="w-100" src = {logos[0]}/>
            </Col>
            </Row>
        </Container>
    )
}