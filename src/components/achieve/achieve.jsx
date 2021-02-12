import { FaMoneyBill } from "@react-icons/all-files/fa/FaMoneyBill";
import { FaThumbtack } from "@react-icons/all-files/fa/FaThumbtack";
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner";

import { Container } from 'react-bootstrap';

const Acheive = ({users}) => {
    const {totalEarn, sold, in_progress}= users.data;
    
    return (
        <Container>
        <div className="achieve">
            <span> 
                <FaMoneyBill />
                <p>Total Earn: {totalEarn} $</p>
            </span> 

            <span>
                <FaThumbtack />
                <p>Order Sold: {sold}</p>
            </span>

            <span>
                <FaSpinner />
                <p>Order in progress: {in_progress}</p>
            </span>

        </div>
        </Container>

    );
}

export default Acheive;