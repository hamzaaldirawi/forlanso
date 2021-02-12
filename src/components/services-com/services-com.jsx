import {useState} from 'react';
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import CustomButton from '../button/button';

const More = ({users}) => {
    const {services, first_name_en, last_name_en, job_title, about_service, stars } = users.data;
    
    return (
        <div>
        {
            services.slice(3).map(service => (
                <div key={service.id}> 
                <img  src={service.servImg} />
                <h1>{first_name_en} {last_name_en}</h1>
                <span>{job_title}</span>
                <p>{about_service}</p>
                <span><FaStar /> {stars}</span>
                <p>{service.sold} sold</p>
                <span><FaHeart /></span>
                <CustomButton>View</CustomButton>
            </div>
            ))
        }        
        </div>
        
    )
}

const ServicesCom = ({users}) => {
    const {services, first_name_en, last_name_en, job_title, about_service, stars} = users.data;

    const [hide, setHide] = useState(true);
    const [isOpened, setIsOpened] = useState(false);  
 
    const toggle = () => {
      setIsOpened(wasOpened => !wasOpened);
    }

    const hideShow = () => {
        setHide(wasShow => !wasShow);
    }

    return (
        <div>
            <p id="services">Services</p>
            <div>
                {
                        services.filter((service, idx) => idx < 3)
                                .map(service => (
                        <div key={service.id}> 
                            <img  src={service.servImg} />
                            <h1>{first_name_en} {last_name_en}</h1>
                            <span>{job_title}</span>
                            <p>{about_service}</p>
                            <span><FaStar /> {stars}</span>
                            <p>{service.sold} sold</p>
                            <span><FaHeart /></span>
                            <CustomButton>View</CustomButton>
                        </div>
                        ))
                }    
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

export default ServicesCom;

