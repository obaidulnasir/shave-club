import myButtonStyle from "./MyButton.module.css"

const MyButton = (props) => {
    const {text,color, textColor } = props;
    return (
        <div>
            <button className={myButtonStyle.myButton} style={{ color:`${textColor || "#fff"}`, backgroundColor:`${color}`}}> {text} </button>

            {/* online */}
            {/* <div class="col-md-3 col-sm-3 col-xs-6"> <button href="www.lo.com" class="btn btn-sm animated-button thar-three">{text}</button> </div> */}
        </div>

        // online 

    );
};

export default MyButton;