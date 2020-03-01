import React, { useState, useEffect } from "react";
import NoteForm from "../NoteForm";
import NoteCard from "../NoteCard";
import moment from "moment";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createNote = function(event) {
        event.preventDefault();
        db.collection("notes").add({
            text: text,
            createdTime: moment().format('MMMM Do YYYY, h:mm:ss a')
        })
        .then(function(docRef) {
            setText("");
            renderNotes();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            setText("");
        });
    }

    const deleteNote = function(id) {
        db.collection("notes").doc(id).delete().then(() => {
            renderNotes();
        })
        .catch((error) => {
            console.error("Error deleting document: ", error);
        })
    }

    const noteList = notes.map((noteObj) => {
        return <NoteCard 
                text={noteObj.data().text} 
                time={noteObj.data().createdTime ? noteObj.data().createdTime : ""} 
                key={noteObj.id}
                handleDelete={() => {deleteNote(noteObj.id)}}
            />
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <NoteForm buttonHandler={createNote} text={text} setText={setText}/>
                </div>
                <div className="col-8">
                    {noteList}
                </div>
            </div>
        </div>
    )
}

export default Container;