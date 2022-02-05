import React from "react";

const ApprouvalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Valider</div>
                    <div className="ui basic red button">Rejeter</div>
                </div>
            </div>
        </div>
    );
}

export default ApprouvalCard;