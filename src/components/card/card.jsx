import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt'
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { FaStopwatch } from '@react-icons/all-files/fa/FaStopwatch';
import { FaCommentAlt } from '@react-icons/all-files/fa/FaCommentAlt';

import { Container, Col, Row, Button} from 'react-bootstrap';
import './card.scss';


const UserCard = ({users}) => {
    
    const {profile_image, first_name_en, last_name_en, stars, response} = users.data;
    const {experience, created_at, languages} = users.data.provider_information;
    const {name} = users.data.location; 

    const date = new Date().getMonth() + 1;
    const created = new Date(created_at).getMonth() + 1;

    return (
        <Container className="user-container">
            <div className='user-card'>
                <img className="image" src={profile_image} alt={first_name_en}/>
                <div className="user-name-star">
                    <h1 className="user-name">{first_name_en} {last_name_en} </h1>
                    <span className="user-star"><FaStar /> {stars}</span>
                </div>
                <p className="user-xp">{experience}</p>
                <span className="user-loc" ><FaMapMarkerAlt /> {name}</span>
                <Button className="user-connect">Connect</Button>
                <span className="user-all"> 
                    <FaCalendarAlt />
                    <p>Member since: {(date - created).toString()} Months</p>
                </span>
                <span className="user-all">
                    <FaClock />
                    <p>Responsive time: {response} Hours</p>
                </span>
                <span className="user-all" >
                    <FaStopwatch />
                    <p>Last activity: {response} Hours</p>
                </span>
                <span className="user-all">
                    <FaCommentAlt />
                    <p>Languages: {languages}</p>
                </span>
            </div>
        </Container>

    );
};

export default UserCard;