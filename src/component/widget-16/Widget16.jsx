import{Container,Row,Col,Carousel, Button}from "react-bootstrap"
import "./widget16.css";
export default function Widget16(){
    return(
       <Container fluid className="w-100">
        <div className="widget16-img1"  style={{backgroundImage:"url('./assets/images/image-9.jpg')", height:"200px",backgroundSize:"cover"}} >
        {/* <img className="widget-16-img" src="/assets/images/image-9.jpg"/> */}
       

       <h1> News & Events</h1>
        </div>
       </Container>
    )
}