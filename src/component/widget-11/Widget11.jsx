import "./widgetl1.css"
import {Container,Row,Col} from "react-bootstrap";
import { bg1 } from "../../const/Images"
export default function Widget11(){
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <img className="img-1" src= {bg1 [0]}/>

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Collection of Single used Plastic under Clean India Movement </h3>
                        <p> NSS volunteers along with Principal Dr. Pradnya Yenker and NSS Co-ordinator Prof. Ather Iqbal </p>
                    </div>

                </Col>
            </Row>
            <hr/>

            <Row>
                <Col md={4}>
                    <img className="img-2" src="/assets/images/image-4.jpeg"/>

                </Col>
                <Col  md={8}>
                    <div>
                    <h3 >Covid-19 Vaccination Drive</h3>
                    <p > Drive conducted at MBA building</p>
                    </div>
                    
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col md={4}>
                    <img className="img-3" src="/assets/images/image-5.jpg"/>

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Seminar on "National Education Policy-2020: Challenges and Opportunities </h3>
                        
                        <p>  Organized by IQAC, Vidya Bharati Mahavidyalaya, Amravati </p>
                        </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={4}>
                    <img  className=" img-4" src="/assets/images/image-6.jpg"/>

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Rangoli Competition </h3>
                        <p>  Organized by Department of Physical Education and Sports on 15th Dec 2021. The competition was judged by Dr. M. M. Ghurde, Mrs. S. M. Mohod, Ms. Rana Afreen and Dr. D. S. Wankhade </p>
                    </div>
                    

                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={4}>
                    <img className="img-5" src="/assets/images/image-7.jpg"/>

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Workshop on Developing ICT Skills for Chemist </h3>
                        <p>  Organised by Department of Chemistry on 11th Dec 2021. Speaker Guest Dr. V. T. Humane  </p>
                    </div>
                    

                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={4}>
                    <img className="img-6" src="/assets/images/image-8.jpeg" />

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Birthday Celebration of Honble Pratibhatai Patil  </h3>
                        <p>  Blood Donation Camp was organized on the occasion of birthday of Pratibhatai Patil, First Lady President of India on 20-12-2021 </p>
                    </div>
                    <hr/>

                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={4}>
                    <img className="img-1" src= {bg1 [0]}/>

                </Col>
                <Col  md={8}>
                    <div>
                        <h3>Collection of Single used Plastic under Clean India Movement </h3>
                        <p> NSS volunteers along with Principal Dr. Pradnya Yenker and NSS Co-ordinator Prof. Ather Iqbal </p>
                    </div>
                    <hr/>

                </Col>
            </Row>
            <hr/>
            <ul className="widget11-ul d-flex justify-content-center">
                <li ><a>1</a></li>
                <li ><a>2</a></li>
                <li ><a>3</a></li>
                <li ><a></a></li>
            </ul>
        </Container>
    )
}