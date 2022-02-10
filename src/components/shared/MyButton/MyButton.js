import React from 'react';
import myButtonStyle from "./MyButton.module.css"

const MyButton = (props) => {
    const { color, text } = props;
    return (
        <div>
            <button className={myButtonStyle.myButton} style={{backgroundColor:`${color}`}}> {text} </button>

            {/* online */}
            {/* <div class="col-md-3 col-sm-3 col-xs-6"> <button href="www.lo.com" class="btn btn-sm animated-button thar-three">{text}</button> </div> */}
        </div>

        // online 

    );
};

export default MyButton;