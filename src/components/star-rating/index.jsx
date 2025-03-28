import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({noOfStars}){
    //To handle selected star
    const [rating, setRating] = useState(0);

    //To handle hovered stars
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseHover(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return <div className="star-rating" style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1;
                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseHover(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                />
            })
        }
    </div>
}
