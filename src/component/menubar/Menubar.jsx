import "./menubar.css"
import { Container, Navbar,Nav,NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Menubar(){
    return(
        <>
      
      <Navbar collapseOnSelect expand="lg"  variant="dark" className="menubar-1">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="background12">
            <Nav.Link><NavLink to ="/">Home</NavLink></Nav.Link>
            
            <NavDropdown className="about-1 " title="About Institute " id="collasible-nav-dropdown">
              <div className="dvdv">
              <NavDropdown.Item className="about-2"> <NavLink to ="/manage">The Management</NavLink> </NavDropdown.Item>
              <NavDropdown.Item className="about-2"><NavLink to ="/gc">
              Governing Body</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item  className="about-2"><NavLink to ="/about"> About Mahavidyalaya</NavLink> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">  </NavDropdown.Item>
              <NavDropdown.Item  className="about-2"><NavLink to ="/cdc">
              College Development <br/> Committee</NavLink> 
              </NavDropdown.Item>
              <NavDropdown.Item className="about-2"><NavLink to ="/desk">  Principal's Desk</NavLink>  </NavDropdown.Item>
              <NavDropdown.Item className="about-2"><NavLink to ="/vision">  Vision & Mision</NavLink>  </NavDropdown.Item>
              <NavDropdown.Item className="about-2"><NavLink to ="/core">
              Core Values</NavLink> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">  Monitoring Committees </NavDropdown.Item>
              <NavDropdown.Item><NavLink to ="/news">  News And Events</NavLink> </NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown title="Academics " id="collasible-nav-dropdown">
              <NavDropdown.Item ><NavLink to ="/affli"> Affiliation </NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to ="/rules">
              Rules & Regulations</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to ="/annual"> Annual Reports</NavLink> </NavDropdown.Item>
             
              <NavDropdown className="text-white bg-dark" title=" Policy & Procedure Documents " id="collasible-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Curriculum Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">  Perspective Plan  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Strategic Plan  
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">  Procedures & policies for academic & support facilities  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">   Disabled Friendly Environment   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">   Grievance Redressal Mechanism   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">   Policy on Code of Conduct and Ethics  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Policy Document On Environment & Energy Usage </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">  Policy Document On Green Campus   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">  Policy Document On Providing Financial Support to Teachers For Attending Conference/Workshop   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Policy Document On E‐Governance   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Policy Document For Advanced & Slow Learners   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">   Research Policy    </NavDropdown.Item>
            </NavDropdown>
            
              
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    )
}