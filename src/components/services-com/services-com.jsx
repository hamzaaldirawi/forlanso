import {useState} from 'react';
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { Container, Col, Row, Button } from 'react-bootstrap';
import './services-com.scss';

const More = ({users}) => {
    const {services, first_name_en, last_name_en, job_title, about_service, stars } = users.data;
    
    return (
        <div>
            <Container>
                <Row>
                {
                    services.slice(3).map(service => (
                    <Col lg={4}>
                        <div key={service.id}> 
                            <img  className="image-port" src={service.servImg} />
                            <h1 className='name'>{first_name_en} {last_name_en}</h1>
                            <span className='job'>{job_title}</span>
                            <p>{about_service}</p>
                            <span className='stars'><FaStar /> {stars}</span>
                            <p className='sold'>{service.sold} sold</p>
                            <span lassName='heart'><FaHeart /></span>
                            <Button className="button">View</Button>
                        </div>
                    </Col>

            
            ))
        }     
                </Row>
            </Container>
   
        </div>
        
    )
}

const ServicesCom = ({users}) => {
    const {services, first_name_en, last_name_en, job_title, about_service, stars} = users.data;

    const [hide, setHide] = useState(true);
    const [isOpened, setIsOpened] = useState(false);  
 
    const toggle = () => {
      setIsOpened(wasOpened => !wasOpened);
    }

    const hideShow = () => {
        setHide(wasShow => !wasShow);
    }

    return (
        <div>
            <p id="services">Services</p>
            <div>
            <Container>
                <Row>
                {
                    services.filter((service, idx) => idx < 3)
                            .map(service => (
                        <Col lg={4}>
                        <div key={service.id}> 
                            <img  className="image-port" src={service.servImg} />
                            <h1 className='name'>{first_name_en} {last_name_en}</h1>
                            <span className='job'>{job_title}</span>
                            <p>{about_service}</p>
                            <span className='stars'><FaStar /> {stars}</span>
                            <p className='sold'>{service.sold} sold</p>
                            <span className='heart'><FaHeart /></span>
                            <Button className="button">View</Button>
                        </div>
                        </Col>
                    ))
                }  
                </Row>
            </Container>
  
                <div> 
                
                    <div onClick={toggle}>
                        
                        <p onClick={hideShow}>
                            {
                            hide ? <p>Show More </p> : null
                            }
                        </p>
                    </div>
                    {isOpened && (
                        <div className="boxContent">
                             <More users={users} />
                        </div>
                    )}
                </div>
                                
            </div>
        </div>
    );
}

export default ServicesCom;

