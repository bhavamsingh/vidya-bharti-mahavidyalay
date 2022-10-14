import{Container,Row,Col,Carousel, Button}from "react-bootstrap"
import "./widget18.css";
export default function Widget18(){
    return(
       <Container>
              <div className="widget18-back" >
                <div className="widget18-heading">
                    <h3> Important Instructions</h3>
                </div>
                <hr/>
                <ul className="widget18-listing">
                    <li> The Teaching shall commence as per the University calender.</li>
                    <li> Astudent wishing to obtain help/ assistance from the 'Students' Aid Fund' will have to apply in prescribed form.</li>
                    <li> Every student is required to appear for 'Physical Efficiency Test' according to the University rules. The student remained absent for the test is liable to be fined.</li>
                    <li> Scholarship, EBC & other concession forms must be submitted immediately after the notice is circulated or displayed on Notice Board. </li>
                    <li> Tutorials, College Tests, Assignments, Project Assignments, Project Report (If any), Study Tours & Visits and Terminal Examinations are compulsory. </li>
                    <li> Performance of the students will be monitored throughout the year & will be reported to their parents through mentor mentee cell.</li>
                    <li> Students are advised to see the concerned information regularly on the Notice Board. </li>
                    <li> Students should daily visit the Library. </li>
                    <li> The college maintains strict discipline & expects rules to be followed by every student. </li>
                </ul>
                <hr />
              </div>
              
              </Container>
    )
}