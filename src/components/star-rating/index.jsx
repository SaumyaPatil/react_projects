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

    // If you have hovered the mouse and without click you are leaving no star will be selected, then the state will be as per rating on leave to preserve the 
    // clicked state.
    function handleMouseHover(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        //This is because if I select say 4 stars and I leave then it should stay selected. And on hovering, it should retain the previous state.
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
                index += 1;   //This is to pass as 1, 2, 3, 4, 5 this way as array indexing starts from 0
                return <FaStar
                    key={index}

                    // This will render the stars when active or inactive as hover or rating changes, if the stars are active then it will show yellow and if not then it will show black 
                    // for all stars.
                    className={index <= (hover || rating) ? 'active' : 'inactive'}

                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseHover(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40} //Whats this for - It is size of star
                />
            })
        }
    </div>
}
