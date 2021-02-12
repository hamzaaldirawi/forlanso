import { Link } from 'react-router-dom';

const ServicesNav = () => (
    <div className = 'services-nave'>
        <div className = 'options'>
            <Link className = 'option' to = '/#about'>About</Link>
            <Link className = 'option' to = '/#portfolio'>Portfolio</Link>
            <Link className = 'option' to = '/#services'>Services</Link>
            <Link className = 'option' to = '/#reviews'>Reviews</Link>
        </div>
    </div>
);

export default ServicesNav;