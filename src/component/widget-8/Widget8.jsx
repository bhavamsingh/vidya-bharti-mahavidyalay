import { Container,Row,Col } from "react-bootstrap";
import { bg } from "../../const/Images";
export default function Widget8(){
    return(
        <Container>
            <Row>
                <Col md={3}>
                <div>
                    <img src={bg[1]}/>
                </div>
                </Col>
                <Col md={9}>
                <div>
                    <p>
                        Keeping in view the vision of Holistic development of students into a responsible and morally upright citizen, Vidya Bharati Mahavidyalaya has been striving to explore new avenues to march towards Excellence in Higher Education over the last four decades. </p>
                        <p> As envisioned by our Patrons Hon’ble Dr. D. R. Shekhawat, the Founder President and the Former President of India Hon’ble Smt. Pratibhatai D. Patil, the college has developed at a very large scale. Today the institute firmly stands as a Premium multi-faculty Institution in Vidarbha region with highest CGPA in re-accreditation (II cycle, 2012-13) by NAAC Bangalore. Considering the upcoming transitions in Higher Education, our President Honble Shri. R.D. Shekhawat and the Management of VBSM aims to furnish all the possible state-of- the- art infrastructure and on campus facilities that adhere to the set norms.  </p>
                        <p> Since its inception, the institution has challenged itself to set benchmarks of unparalleled success without compromising on quality and value-based education in various streams. Initially we started as a small college with a strength of 108 in the year 1972. In the recent years it has shown an increase of student’s intake more than 5000 (including 83 Ph.D. students). The fame of the institution can be measured from the fact that out of the total strength, 60% are girls as the college is situated in an elite residential area. The infrastructure has been developed so as to provide optimum facilities for the student community. </p>
                        <p> The Institute endeavors to cultivate qualitative human resources who will be useful not only in government offices or corporate world but also good in academics, sports, culture and above all good human beings. The formal academic activities are perfectly complemented by co-curricular, extracurricular, cultural and sports activities in order to nurture overall development of our students. It is a fact that quality can be sustained only by assimilating all stakeholders –Management, Faculty members, Administrative staff, Students, Parents, Employers, Community and Alumni for excelling in the process of Higher Education. So efforts are being made to synchronize all the valuable elements in the process of Higher Education. </p>
                        <p>" I appeal you to visit our campus and learn more about the opportunities available to you." </p>
                </div>
                </Col>
            </Row>
        </Container>
    )
}