import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './navser.scss';

const ServicesNav = () => (
    <Navbar>
    <div className = 'services-nav'>
        <div className = 'options'>
            <Link className = 'option' to = '/#about'>About</Link>
            <Link className = 'option' to = '/#portfolio'>Portfolio</Link>
            <Link className = 'option' to = '/#services'>Services</Link>
            <Link className = 'option' to = '/#reviews'>Reviews</Link>
        </div>
    </div>
    </Navbar>

);

export default ServicesNav;