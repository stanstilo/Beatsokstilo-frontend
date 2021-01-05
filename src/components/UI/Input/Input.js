import React from 'react';
import './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = "InputElement";
   
    if (props.invalid && props.shouldValidate && props.touched) {
        // inputClasses.push("Invalid");
    }

    switch ( props.elementType ) {
        case ( 'input' ):
               inputElement = 
               <>
               <label htmlFor="email">email or username</label>
               <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                />
                </>
            break;
            case ( 'password' ):
                inputElement = 
                <>
                <label htmlFor="password">password</label>
                <input
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed} 
                 />
                 </>
             break;
        default:
            inputElement = 
            <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                />;
       }
    return (
        <div>
             {inputElement}   
        </div>
    );
};

export default input;