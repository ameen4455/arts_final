import React, {useEffect, useRef} from 'react';
import './App.css';

function Card(props){
    const refer = useRef();
    useEffect(() => {
        refer.current.classList.add("demo");
        setTimeout(()=>{
            refer.current.classList.remove("demo");
        }, 3000);
    }, [props.hpoint]);
    return(
        <div ref={refer} className="scoreHouse" style={{backgroundColor: props.hcolor}}>
            <div className="logoOut">
                <img src={props.hname} className="logo" alt=""/>
            </div>
            <div className="point">
                {props.hpoint}
            </div>
        </div>
    );
}

export default Card;