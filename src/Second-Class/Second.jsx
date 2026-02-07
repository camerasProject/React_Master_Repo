import { useState } from "react";
import './second.css';
export default function Second(){
    // const [state,setState]=useState(0);
    // console.log(state);

    // function updateState(){
    //     setState(state+1)
    // }
    // function updateState1(){
    //     setState(state-1)
    // }
    // setState() it is a function used to update the state.

    // const [status,setStatus]=useState(false);  
    // console.log(status);

    const [themeStatus,setThemeStatus]=useState(false);
    return(
        <>
            {/* <h1>Second Component</h1>
            <h2>{state}</h2> */}
            {/* <button onClick={updateState1}>-</button>
            <button onClick={updateState}>+</button> */}

            {/* <button onClick={()=>{setState(state+1)}}>+</button> */}

            {/* {status &&<p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, dolor praesentium quidem architecto iste est at autem nisi accusantium unde. Quaerat ipsa illum voluptas, tenetur odio repellat sequi. Excepturi, sint?
            </p>}
            <button onClick={()=>{setStatus(!status)}}>
                {status?'Hide':'Show'} Details
            </button> */}

            <div style={{border:"2px solid white",padding:"20px",margin:"20px"}} className={themeStatus?'light':'dark'}>
                <h1>Second Component</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error animi inventore modi dolore at excepturi incidunt nisi neque aliquam maiores, consectetur quo itaque. Atque incidunt aliquam enim animi sequi, maxime officia optio, ipsa, repellendus deserunt aspernatur doloribus temporibus modi earum? Vel consequuntur saepe harum illo quod non repellat veritatis, sint, excepturi iusto maiores nisi est quibusdam. In quaerat perspiciatis, nisi, repellat tempora nesciunt inventore commodi reprehenderit delectus saepe libero qui ad impedit ullam eum ex accusamus dolorum. Autem optio soluta fugiat error rerum, laudantium at inventore debitis placeat itaque mollitia id quidem eius vitae. Asperiores illo vero iste fugiat illum?</p>

                <button className={themeStatus?'dark':'light'} onClick={()=>{setThemeStatus(!themeStatus)}}>{themeStatus?'Dark Mode':'Light Mode'}</button>
            </div>
        </>
    )
}