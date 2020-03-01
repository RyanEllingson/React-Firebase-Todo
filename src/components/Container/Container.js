import React, { useState, useEffect } from "react";
import NoteForm from "../NoteForm";

const Container = function({db}) {
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);

    const renderNotes = function() {
        db.collection("notes").get().then((querySnapshot) => {
            setNotes(querySnapshot.docs);
        });
    }

    useEffect(() => {
        renderNotes();
    }, []);

    const handleClick = function(event) {
        event.preventDefault();
        db.collection("notes").add({
            text: text
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            setText("");
            renderNotes();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            setText("");
        });
    }

    const noteList = notes.map((noteObj) => {
        return <p key={noteObj.id}>{noteObj.data().text}</p>
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <NoteForm buttonHandler={handleClick} text={text} setText={setText}/>
                </div>
                <div className="col-8">
                    {noteList}
                </div>
            </div>
        </div>
    )
}

export default Container;