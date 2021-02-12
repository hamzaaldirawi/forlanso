import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt'
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { FaStopwatch } from '@react-icons/all-files/fa/FaStopwatch';
import { FaCommentAlt } from '@react-icons/all-files/fa/FaCommentAlt';

import CustomButton from '../button/button';


const UserCard = ({users}) => {
    console.log(users.data)
    
    const {profile_image, first_name_en, last_name_en, stars, response} = users.data;
    const {experience, created_at, languages} = users.data.provider_information;
    const {name} = users.data.location; 

    const date = new Date().getMonth() + 1;
    const created = new Date(created_at).getMonth() + 1;

    return (
        <div className='user-card'>
            <img src={profile_image} alt={first_name_en}/>
            <h1>{first_name_en} {last_name_en} </h1>
            <span><FaStar /> {stars}</span>
            <h2>{experience}</h2>
            <span><FaMapMarkerAlt /> {name}</span>
            <CustomButton>Connect</CustomButton>
            <span>
                <FaCalendarAlt />
                <p>Member since: {(date - created).toString()} Months</p>
            </span>
            <span>
                <FaClock />
                <p>Responsive time: {response} Hours</p>
            </span>
            <span>
                <FaStopwatch />
                <p>Last activity: {response} Hours</p>
            </span>
            <span>
                <FaCommentAlt />
                <p>Languages: {languages}</p>
            </span>


        </div>
    );
};
/*
const mapStateToProps = createStructuredSelector({
    users: selectUserProfile
})
*/
// export default connect(mapStateToProps)(UserCard);
export default UserCard;