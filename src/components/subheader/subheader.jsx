import { Link } from 'react-router-dom';
import './subheader.scss';

const SubHeader = () => (
    <div className = 'sub-header'>
        <div className = 'options'>
            <Link className = 'option' to = '/design'>Design</Link>
            <Link className = 'option' to = '/marketing'>Marketing</Link>
            <Link className = 'option' to = '/development'>Development</Link>
            <Link className = 'option' to = '/writing'>Writing</Link>
            <Link className = 'option' to = '/video'>Video and Animation</Link>
        </div>
    </div>
);

export default SubHeader;
