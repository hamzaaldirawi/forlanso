import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const Header = () => (
    <div className = 'header'>
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
    </div>
);

export default Header;
