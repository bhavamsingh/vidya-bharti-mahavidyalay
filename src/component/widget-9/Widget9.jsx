import { Container,Row,Col } from "react-bootstrap";

export default function Widget9(){
    return(
        <Container>
            <Row>
                <Col md={3}>
                <div>
                    <h5>IMP Links</h5>
                </div>
                <div>
                    <ul>
                        <li><a> Student HelpLine </a></li>
                        <li><a> Student Scholarships </a></li>
                        <li><a> Virtual Tour </a></li>
                        <li><a> e-Library </a></li>
                        <li><a> Awards & Achievements </a></li>
                        <li><a> Games & Sports </a></li>
                        <li><a> Placements  </a></li>
                    </ul>
                </div>
                </Col>
                <Col md={9}>
                    <div>
                        <h1>Our Vision</h1>
                        <hr/>
                            <p> Holistic development of the student into a responsible, morally upright citizen capable of thinking, learning and striving for national development.</p>
                            <hr/>
                    </div>
                    <div>
                        <h1>Our Mission</h1>
                    </div>
                    <hr/>
                    <p> Committed to The Creation of a Self-reliant Centre of Excellence that Imparts Knowledge and Develops the Right Values, Attitudes and Skills stressing Quality-consciousness, to Produce Ideal Citizens who can Contribute Their Mite to Nation-building. </p>
                    <hr/>
                </Col>
            </Row>

        </Container>
    )
}