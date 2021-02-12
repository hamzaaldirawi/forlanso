import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserProfile } from '../../redux/user-reducer/user-selector';

import UserCard from '../../components/card/card';
import Acheive from '../../components/achieve/achieve';
import ServicesNav from '../../components/nav-in-services/nav-in-services';
import About from '../../components/about/about';
import PortfolioComp from '../../components/portfolio/portfolio';
import ServicesCom from '../../components/services-com/services-com';
import ReviewsCom from '../../components/reviews/reviews';

import { Container, Col, Row } from 'react-bootstrap';
import './services.scss';

const ServicesPage = ({users}) => (
    <Container fluid="xl">
        <Row>
            <Col lg={4}>
                <UserCard users={users}/>
            </Col>

            <Col lg={8} className ="services-col">
                <Acheive users={users} />
                <ServicesNav />
                <About users={users}/>
                <PortfolioComp users={users} />
                <ServicesCom users={users} />
                <ReviewsCom users={users} />
            </Col>       
        </Row>
    </Container>

);

const mapStateToProps = createStructuredSelector({
    users: selectUserProfile
})

export default connect(mapStateToProps)(ServicesPage);