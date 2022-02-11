import React from 'react';

const HeadingText = (props) => {
    const {text, size} = props;
    return (
        <div>
            <h2 className='my-4' style={{ color: "#001233", fontSize: `${size}`, fontWeight: "800" }}>{text}</h2>
        </div>
    );
};

export default HeadingText;