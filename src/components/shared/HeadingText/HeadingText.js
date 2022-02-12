import React from 'react';

const HeadingText = (props) => {
    const {text, size, fWeight} = props;
    return (
        <div>
            <h2 className='my-4' style={{ color: "#001233", fontSize: `${size}`, fontWeight: `${fWeight||800}` }}>{text} </h2>
        </div>
    );
};

export default HeadingText;