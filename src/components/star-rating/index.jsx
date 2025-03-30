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
            //Destructuring of array 
            [...Array(noOfStars)].map((_, index)=>{
                // console.log(_);
                index += 1;   //Why this?
                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}

                    //These methods we will recieve from parent component
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseHover(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40} //Whats this?
                />
            })
        }
    </div>
}
