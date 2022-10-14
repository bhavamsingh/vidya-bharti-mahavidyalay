import{Container,Row,Col,Carousel, Button}from "react-bootstrap"
import "./widget13.css";
export default function Widget13(){
    return(
        <Container className="widget13-container" fluid>
            <Row className="d-flex align-items-center">
                <Col md={8}>
                <Carousel>
      <Carousel.Item  style={{ backgroundColor:"blue"}}>
        <img
          className="d-block w-100 h-100"
          style={{objectFit:"cover", backgroundColor:"black"}}
          src="/assets/images/5.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="/assets/images/slider1.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider2.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider3.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/slider4.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

            </Col>
            <Col md={4}>
            <div className="widget13-heading">
            <h4 > "Online Registration for First Year(UG &amp; PG) AY. 2022-23" </h4>
            </div>
            <div className="d-flex flex-column align-items-center marquee-container">
                <h2>
                News and Updates
                </h2>
                <marquee direction="up">
                    <div className="widget13-marquee-box py-2">
                        <h4>
  Visit of Former President of India Smt. Pratibhatai Patil </h4>
  <p>  Visit to college campus  </p>
  <img src="/assets/images/image-1.jpeg"/>
                    </div>
                    <div className="widget13-marquee-box py-2">
                        
  <p>   शनिवार दिनांक 10 सप्टेंबर 2022   </p>
  <img src="/assets/images/image-2.jpeg"/>
                    </div>
                    <div className="widget13-marquee-box py-2">
                        <h4>
  Visit of Former President of India Smt. Pratibhatai Patil </h4>
  <p>  Visit to college campus  </p>
  <img src="/assets/images/image-1.jpeg"/>
                    </div>
                </marquee>
            </div>
            <div className="widget13-footer">
                <h5>For More News & Events Details 
*</h5>
<Button variant="success">Click here</Button>
            </div>
            </Col>
            </Row>
        </Container>
    )
}