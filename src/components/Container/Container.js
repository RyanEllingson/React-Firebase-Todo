import React, { useState } from "react";
import NoteForm from "../NoteForm";

const Container = function({db}) {
    const [text, setText] = useState("");

    const handleClick = function(event) {
        event.preventDefault();
        db.collection("notes").add({
            text: text
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            setText("");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            setText("");
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <NoteForm buttonHandler={handleClick} text={text} setText={setText}/>
                </div>
            </div>
        </div>
    )
}

export default Container;