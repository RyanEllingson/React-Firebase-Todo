import React from "react";

const NoteCard = function({text, time, handleDelete}) {
    return (
        <div className="card mb-3">
            <div className="card-header">
                Created {time}
            </div>
            <div className="card-body">
                <p className="card-text">{text}</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete note</button>
            </div>
        </div>
    );
}

export default NoteCard;