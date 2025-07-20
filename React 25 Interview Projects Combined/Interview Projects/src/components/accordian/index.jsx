// First we have to make single selection
// Multiple selection

import data from "./data";
import { useState } from "react";
import './styles.css'; 

const Accordian = () =>{
    const [Selected,setSelected] = useState(null);
    const [Ems,Sems] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        
        setSelected(getCurrentId === Selected ? null : getCurrentId);
    }

    function handleMultiSelection (getCurrentId) {
        let cpyMultiple = [...multiple];

        const findndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if(findndexOfCurrentId == -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findndexOfCurrentId,1);

        setMultiple(cpyMultiple);
    }

    console.log(Selected, multiple);

    

    return (
        <>
         <div className="wrapper">
            <button onClick={()=>Sems(!Ems)}>Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length >0 ?
                 (data.map(dataItem =><div className="item">
                    <div className="title" onClick={() => Ems? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                        
                    </div>
                    {Ems ? multiple.indexOf(dataItem.id) !== -1 &&
                        (<div className="content">{dataItem.answer}</div>)
                        :
                        Selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        
                    }
                    </div>
                   ) )
                 :(<div>No data Found</div>)
                 }
            </div>
         </div>
        </>
    )
}

export default Accordian;