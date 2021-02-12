import {useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './portfolio.scss';

const More = ({users}) => {
    const {portfolio} = users.data;
    
    return (
        <div className="port-div">
        <Container>   
            <Row>
            {
                portfolio.slice(3).map(port => (
                    <Col lg={4}>
                        <img className="image-port" key={port.id} src={port.wImg} />
                    </Col>
                ))
            }
            </Row>    
        </Container>
        </div>
    )
}

const PortfolioComp = ({users}) => {
    const {portfolio} = users.data;
    
    const [hide, setHide] = useState(true);
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
    }

    function hideShow() {
        setHide(wasShow => !wasShow);
    }
  
    return (
        <div>
            <p id="portfolio">Portfolio</p>
            <div>
            <Container>   
                <Row>
                {
                    portfolio.filter((port, idx) => idx < 3)
                        .map(port => (
                            <Col lg={4}>
                                <img className="image-port" key={port.id} src={port.wImg} />
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

export default PortfolioComp;