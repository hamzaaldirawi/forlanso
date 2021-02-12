import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Navbar, Container } from 'react-bootstrap';

import './header.scss';

const Header = () => (
    <Navbar className="navbar-light bg-light header">
        <Container className="xl">
        <Link to = '/' className = 'logo-container'>
            <Logo className = 'logo'></Logo>
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/about-us'>About us</Link>
            <Link className = 'option' to = '/services'>Services</Link>
            <Link className = 'option' to = '/freelancer'>Freelancer</Link>
            <Link className = 'option' to = '/how-it-works'>How it works</Link>
            <Link className = 'option' to = '/ar'>عربي</Link>
        </div>
        </Container>
    </Navbar>
);

export default Header;
