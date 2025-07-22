import {FaStar} from 'react-icons/fa';
import {useState} from 'react'
import './styles.css';

const StarRating = ({noOfStars})=>{

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick (index){
        setRating(index);
    
    }

    function handleMouseLeave(index){
        setHover(rating);
    }

    function handleMouseHover(index){
        setHover(index);
    }

    return <>
        <div>
            {[...Array(noOfStars)].map((_,index)=>{
                index+=1;
                return <FaStar
                key={index}
                className={index <= (hover||rating) ? 'active' : 'inactive'}
                onClick={()=> handleClick(index)}
                onMouseMove={()=>handleMouseHover(index)}
                onMouseLeave={() =>handleMouseLeave(index)}
                size={40}
                />
            })}
        </div>
    </>
}

export default StarRating;
