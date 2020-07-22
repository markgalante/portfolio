import React from "react";

const StackThumbnail = ({ techImageURL, techName }) => {
    return (
        <div className="stack-thumbnail">
            <div className="stack-thumbnail-image">
                <img alt={techName} src={techImageURL} className="stack-logo" />
            </div>
            <div className="stack-thumbnail-name">
                <span className="stack-name">{techName}</span>
            </div>
        </div>
    );
};

export default StackThumbnail; 