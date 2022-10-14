import { Container,Row,Col } from "react-bootstrap"
import "./WidgetOne.css"
export default function WidgetOne(){
    return(
        <Container className="my-3 default-form-area">
            <Row>
                <Col md={4}>
                    <div className="widget1-box">
                    <h4 className="mb-3 widget1-heading"> Important Links </h4>
                    </div>
                        <ul className="widget1-list">
                            <li>   Enviro-Club </li>
                            <li>  Junior College </li>
                            <li>  NCC</li>
                            <li>  NSS</li>
                            <li> Student Scholarships </li>
                            <li>   Job Recruitment</li>
                            <li>  Virtual Tour</li>
                        </ul>
                        </Col>
                <Col md={4} >
                <div className="widget1-box">
                    <h4  className="mb-3 widget1-heading"> Important Links </h4>
                    </div>
                        <ul className="widget1-list ">
                            <li>   Admission Related Queries  </li>
                            <li>     Training & Placement  </li>
                            <li>   Code of Conduct</li>
                            <li>     Human Values</li>
                            <li>  Research  </li>
                            <li>  Student Satisfaction Survey </li>
                            <li>  Contact Us</li>
                        </ul>
                        </Col>
                <Col md={4}>
                <div className="widget1-box">
                    <h4 className="mb-3 widget1-heading"> Useful Links for Students </h4>
                    </div>
                        <ul className="widget1-list">
                            <li>  NIRF </li>
                            <li>    RTI </li>
                            <li>   Vidya Bharati GEMS</li>
                            <li>   College Prospectus </li>
                            <li>   Syllabus </li>
                            <li>     Results </li>
                            <li>  Games & Sports </li>
                        </ul>
                </Col>
            </Row>
        </Container>
    )
}