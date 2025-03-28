import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({url, limit=5, page=1}){
    
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    
    //While handling API calls, always take this -
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try{
            setLoading(true);
            // Real-World Usage:
            // 🔹 Fetching data from an API (e.g., fetching users, products, or posts).
            // 🔹 Consuming RESTful services in frontend apps (React, Next.js).
            // 🔹 Handling asynchronous operations cleanly using async/await.

            // These lines are used to make an API request and handle the response in JavaScript
            // The fetch() function is used to make an HTTP request (GET request by default) to the specified getUrl.
            // getUrl is a variable holding the URL of the API you want to fetch data from.
            // The fetch() function returns a Promise that resolves to a Response object.
            // The await keyword ensures that JavaScript waits for the fetch request to complete before moving to the next line.
            // response stores the HTTP response (including status code, headers, and body).
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

            // The response.json() method is used to extract the JSON data from the response.
            // It parses the response body as JSON and returns another Promise containing the actual data.
            // await response.json(); ensures we get the parsed JSON object before proceeding.
            const data = await response.json();
            if(data){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrev(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(()=>{
        if(url !== '') fetchImages(url);
    }, [url]);

    console.log(images);

    if(loading){
        return <div>Loading data ! Please wait</div>
    }

    if(errorMsg !== null){
        <div>Error occured ! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left"/>
        {
            images && images.length ? 
            images.map((imageItem, index)=>(
                <img 
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            ))
            
            :null
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
        <span className="circle-indicators">
            {
                images && images.length ? 
                images.map((_, index)=><button
                key={index}
                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                onClick={()=>setCurrentSlide(index)}
                ></button>)
                :null
            }
        </span>
    </div>
}
