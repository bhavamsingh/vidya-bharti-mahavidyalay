import {Row, Col, Container } from "react-bootstrap";
import {GrFacebookOption}  from "react-icons/gr"
import {FaRegLifeRing} from "react-icons/fa"
import {BsFillArrowUpSquareFill} from "react-icons/bs"
export default function Footer(){
    return(
        <Container fluid className="footer-container">
            <h4  className = " mt-3 fw-bolder">IMP Web Links</h4>
            <Row>
                <Col md={3}>
                
                    <ul>
                        <li ><FaRegLifeRing size={15}/> UGC, New Delhi  </li>
                        <li> NAAC, Banglore </li>
                        <li> J.D (H.E) Amravati </li>
                        <li>S.G.B Amravati University </li>
                        <li>Director, H.E Pune</li>
                        <li>J.D.Technical Edu. Regional, Amravati</li>
                    </ul> 
                    </Col>               
                <Col md={3}>
                        <h4> </h4>
                    <ul>
                        <li> AQAR 2013-14   </li>
                        <li>  AQAR 2014-15  </li>
                        <li>  AQAR 2015-16  </li>
                        <li> AQAR 2016-17  </li>
                        <li> AQAR 2017-18 </li>
                        <li> AQAR 2018-19 </li>
                    </ul> 
                    </Col>               
                <Col md={3}>
                <h4> </h4>
                    <ul>
                        <li> Fundamental Duties & Rights   </li>
                        <li>  Prospectus  </li>
                        <li>  Fees Fixation Proposal  </li>
                        <li> NIRF  </li>
                        <li> Right to Information Act </li>
                        <li> Brochure of Human Values & Professional Ethics </li>
                    </ul> 
                    </Col>               
                <Col md={3}>
                <h4> </h4>
                    <ul>
                        <li> 360 Virtual Tour  </li>
                        <li>  Handbook of Code of Conduct </li>
                        <li> MBA programme </li>
                        <li>MCA programme</li>
                        <li>Student Satisfaction Survey</li>
                        <li> Contact Us </li>
                        <li> Mandatory disclosure for AICTE-EoA </li>
                    </ul>                
                </Col>
            </Row>
            <Container fluid className="d-flex justify-content-between">
                <div>
                    <p>VBMV © 2021  All Rights Reserved | Powered by</p>
                </div>
                <div className="d-flex justify-content-between">
                <div>
                <GrFacebookOption/>
                </div>
                <div>
                    <BsFillArrowUpSquareFill/>
                </div>
                </div>
            </Container>
        </Container>
    )
}