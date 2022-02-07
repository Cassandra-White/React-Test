import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer : {
        textSeason: 'Hey ! Et si on allait à la plage !!!!',
        iconSeason: 'sun',
    },
    winter: {
        textSeason: 'Brrrrr, Il fait froid !!!',
        iconSeason: 'snowflake',
    }
}

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9)
        return latitude > 0 ? 'summer' : 'winter'
    else
        return latitude < 0 ? 'summer' : 'winter'
}


const SeasonDisplay = (props) =>{

    const season = getSeason(props.latitude, new Date().getMonth());
    const { textSeason, iconSeason} = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconSeason} icon`}/>
            <h1>{textSeason}</h1>
            <i className={`icon-right massive ${iconSeason} icon`}/>
        </div>
    )
}

export default SeasonDisplay;