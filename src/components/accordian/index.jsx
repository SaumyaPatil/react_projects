import { useState } from "react"
import data from "./data";
import "./styles.css";

export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        console.log(selected);
        //To close the clicked accordian in case its already selected
        setSelected(getCurrentId === selected ? null : getCurrentId);
        console.log(selected); 
    }
    
    function handleMultiSelection(getCurrentId){
        //Why arent we directly manipulating multiple array? - direct state update doesnt trigger re-render

        //This logic is to unselect the option thats already checked and vice versa
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    }

    return(
        <div className="wrapper">
            <button onClick={() => {
                setEnableMultiSelection(!enableMultiSelection);
                //This is mandatory to clear out the values as and when the button is enabled/disabled
                setSelected(null);
                setMultiple([]);
            }}
            >Enable Multi Selection</button>
            <div className="accordian">
                {
                    
                    data && data.length > 0 ?
                    data.map(dataItem => 
                        <div className="item">
                            <div onClick={enableMultiSelection 
                                ? ()=>handleMultiSelection(dataItem.id) 
                                : ()=>handleSingleSelection(dataItem.id)
                            } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>

                            {/* {
                                enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="content">{dataItem.answer}</div>
                                )
                            } */}

                            {
                                //When enableMultiSelection is true, the selected is null otherwise multiple is empty array
                                //So it will work properly as per enableMultiSelection value
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                                <div className="content">{dataItem.answer}</div> :
                                null
                            } 
                        </div>  
                    )

                    : <div>No data found!</div>
                }
            </div>
        </div>
    )
}
