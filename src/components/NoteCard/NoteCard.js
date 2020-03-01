import React from "react";

const NoteCard = function({text, time}) {
    return (
        <div className="card mb-3">
            <div className="card-header">
                Created {time}
            </div>
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default NoteCard;