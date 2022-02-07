import React from "react";

const LoadingSpinner = (props) => {

    return (
        <div className='ui active dimmer '>
            <div className='ui text loader'>{props.loadingMessage}</div>
            <p></p>
        </div>
    );
}

LoadingSpinner.defaultProps = {
    loadingMessage:'Chargement...'
}

export default LoadingSpinner;