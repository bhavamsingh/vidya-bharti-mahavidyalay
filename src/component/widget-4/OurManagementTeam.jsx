import { Container,Col,Row } from "react-bootstrap"
import {bgimages} from  "../../const/Images"
export default function OurManagementTeam(){
    return(
        <Container>
            <h3>OUR MANAGEMENT TEAM</h3>
            <p>Our first-rate management team maintains the progressive learning & promises something for everyone</p>
            <Row>
                <Col md={3}>
                <img src = {bgimages[0]}/>
                </Col>
                <Col md={3}>
                <img src= {bgimages[1]}/>
                </Col>
                <Col md={3}>
                <img src= {bgimages[2]}/>
                </Col>
                <Col md={3}>
                <img src={bgimages[3]}/>
                </Col>
            </Row>
        </Container>
    )
}