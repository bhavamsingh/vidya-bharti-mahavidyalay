import{Container,Row,Col}from "react-bootstrap"
import "./widget12.css";
export default function Widget12(){
    return(
        <Container className="widget12-container" fluid>
            <Row className="d-flex align-items-center">
                <Col md={10}>
            <marquee>
            <h4 className="widget12-marquee-text mt-2">Admission Open from 20 Jun 2022 to 02 july 2022 ||  NAAC Re-accredited with Grade “A”(CGPA 3.23 -Third Cycle) 
||  CPE Status (Third Time) by UGC, Mentor College under Paramarsh Scheme by UGC
||  Lead College by S.G.B. Amravati University, Amravati 
||  ISO Certifications: 9001:2015 and 14001:2015 </h4>
            </marquee>
            </Col>
            <Col md={2}>
            <span className="widget12-feedback">Feedeback analysis</span>
            </Col>
            </Row>
        </Container>
    )
}