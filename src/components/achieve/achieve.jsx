import { FaMoneyBill } from "@react-icons/all-files/fa/FaMoneyBill";
import { FaThumbtack } from "@react-icons/all-files/fa/FaThumbtack";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";

import { Navbar } from 'react-bootstrap';

import './achieve.scss';

const Acheive = ({users}) => {
    const {totalEarn, sold, in_progress}= users.data;
    
    return (
        <Navbar>
        <div className="achieve">
            <span className="achieve-span"> 
                <FaMoneyBill />
                <p>Total Earn: {totalEarn} $</p>
            </span> 

            <span className="achieve-span">
                <FaThumbtack />
                <p>Order Sold: {sold}</p>
            </span>

            <span className="achieve-span">
                <FaSpinner />
                <p>Order in progress: {in_progress}</p>
            </span>

        </div>
        </Navbar>

    );
}

export default Acheive;