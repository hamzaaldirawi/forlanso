import {useState} from 'react';
import BeautyStars from 'beauty-stars';
import './reviews.scss';

const More = ({users}) => {
    const {reviews} = users.data;
    
    return (
        <div>
        {
            reviews.slice(3).map(review => (
                <div key={review.id}>
                <img src={review.userImg} />
                <p>{review.name}</p>
                <span>{(Math.floor((new Date().getTime() - new Date(review.date).getTime())/ (60*60*24*1000)))} <p>Days ago</p></span>
                <BeautyStars
                    value={review.stars}
                />
                <p>{review.comment}</p>
                </div>
            ))
        }
        </div>
    )
}

const ReviewsCom = ({users}) => {
    const {reviews} = users.data

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
            <p className='reviews' id="reviews">Reviews</p>
            <div className='div'>
                {
                    reviews.filter((review, idx) => idx < 3)
                             .map(review => (
                    <div key={review.id}>
                    <img className='img' src={review.userImg} />
                    <p className='name'>{review.name}</p>
                    <span className='date'>{(Math.floor((new Date().getTime() - new Date(review.date).getTime())/ (60*60*24*1000)))} <p className='date'>Days ago</p></span>
                    <BeautyStars 
                        value={review.stars}
                    />
                    <p className='comment'>{review.comment}</p>
                    </div>
                    ))
                }
                <div> 
                
                    <div onClick={toggle}>
                        
                        <p onClick={hideShow} className="show">
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

export default ReviewsCom;