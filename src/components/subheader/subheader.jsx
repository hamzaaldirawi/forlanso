import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './subheader.scss';

const SubHeader = () => (
    <Navbar className = 'navbar-light sub-header'>
        
        <div className = 'options'>
            <Link className = 'option' to = '/design'>Design</Link>
            <Link className = 'option' to = '/marketing'>Marketing</Link>
            <Link className = 'option' to = '/development'>Development</Link>
            <Link className = 'option' to = '/writing'>Writing</Link>
            <Link className = 'option' to = '/video'>Video and Animation</Link>
        </div>
    </Navbar>
);

export default SubHeader;
