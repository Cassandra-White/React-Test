import React from "react";
// import "semantic-ui-css/semantic.min.css";


const getSeason = (latitude, month) => {
    if(month > 2 && month < 9)
        return latitude > 0 ? 'Été' : 'Hiver'
    else
        return latitude < 0 ? 'Été' : 'Hiver'
}


const SeasonDisplay = (props) =>{

    const season = getSeason(props.latitude, new Date().getMonth());
    const textSeason = season === 'Hiver' ? "Brrrrr, Il fait froid !!!" : "Hey ! Et si on allait à la plage !!!! ";
    const icon = season === 'Hiver' ? 'snowflake' : 'sun';

    return (
        <>
            <i className={`${icon} icon`}/>
            <div>Saisons : {textSeason}</div>
            <i className={`${icon} icon`}/>
        </>
    )
}

export default SeasonDisplay;