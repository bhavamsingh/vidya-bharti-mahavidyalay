import{Container,Row,Col} from "react-bootstrap"
import { logos } from "../../const/Images"
export default function Management(){
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <img src = {logos[1]}/>
                </Col>
                <Col md={8}>
                    <p>
Welcome to Vidya Bharati Mahavidyalaya, Amravati. It’s our privilege to lead such an outstanding institution of Higher Education in Western region of Vidarbha, Amravati. I encourage you to visit our campus and learn more about the opportunities available to you.<br/> 
                
It gives me immense pleasure to mention that Vidya Bharati Mahavidyalaya, is a premier institution of Maharashtra. This institution is established in 1972 to promote quality education. It’s a great pleasure to state that right from its inception it has been striving to serve this noble cause. At the outset I express my gratitude towards the Patrons of this institute the Founder President Hon’ble Dr. Devisinghji Shekhawat and Honb’le Former President of India Mrs. Pratibha Devisinghji Patil. Over the past four decades the college has earned a place of pride by virtue of its dedicated scholarly pursuits.
                                    </p>
                    <p>In the current scenario there are a large number of institutions imparting higher education. But we feel that in addition to academic pursuits, our students should lead successful lives to become good human beings acceptable to society. This thought had led us to establish unique concepts of teaching, learning and research. Therefore we offer more than just a great learning experience which broadens horizons and challenges. </p>
                    <p> We are a perfect blend of traditional and professional education. Our sound curricula  in Humanities, Sciences, Management & Commerce, Cosmetic Science and Computers is led by distinguished expertise in their own fields. The students are the sole heart of our institute. We create opportunities and inspire them to achieve their goals. So, we always strive to make our place better. </p>
                    <p>Overall development of the individual is the goal of education and we all have to ensure to equip our students for the challenges of today. </p>
                    <p>We are on the verge of celebrating the Golden Jubilee Year of the college by 2022 and let us hope and wish that the College will take on a new identity as a landmark in the socio-cultural map of India. </p>
                    <p>I wish the Principal, Faculty, Administrative staff and students of the college all success in their endeavors. We dream of making our place a world-class institution of teaching learning and research. </p>
                </Col>
            </Row>

        </Container>
    )
}