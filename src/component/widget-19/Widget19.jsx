import{Container,Row,Col,Carousel, Button}from "react-bootstrap"
import "./widget19.css";
export default function Widget19(){
    return(
       <Container>
              <Row>
                <Col md={3} className="widget19-dvd1">
                <div className="wdget19-heading">
                    <h5>IQAC Links</h5>
                </div>
                <div >
                    <ul className="widget19-listing1">
                        <li><a> Quality Policy of the IQAC</a></li>
                        <li><a>Aims & Objectives of the IQAC </a></li>
                        <li><a>Vision & Mission of the IQAC</a></li>
                        <li><a>Composition of the IQAC</a></li>
                        <div>
                            <h5>AQAR</h5>
                        </div>
                        <div>
                            <ul className="widget19-listing2">
                                <li><a>AQAR 2013-14</a></li>
                                <li><a>AQAR 2014-15 </a></li>
                                <li><a>AQAR 2015-16</a></li>
                                <li><a>AQAR 2016-17</a></li>
                                <li><a>AQAR 2017-18 </a></li>
                                <li><a>AQAR 2018-19</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                </Col>
                <Col md={9}>
                <div className="widget19-heading2">
                    <a>
                        <h2> Annual Reports 2014 to 2019 </h2>
                        </a>
                        <hr/>
                </div>
                <div>
                    <ul className="widget19-listing3">
                        <li><a>Year 2018-2019</a></li>
                        <li><a>Year 2017-2018</a></li>
                        <li><a>Year 2016-2017</a></li>
                        <li><a>Year 2015-2016</a></li>
                        <li><a>Year 2014-2015</a></li>
                    </ul>
                </div>
                </Col>
              </Row>
              </Container>
    )
}