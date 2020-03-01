import React from "react";

const NoteForm = function({buttonHandler, text, setText}) {

    return (
        <div className="row">
            <div className="col">
                <form>
                    <div className="form-group">
                        <label >Type note here</label>
                        <textarea 
                            className="form-control" 
                            rows="6"
                            onChange={(event) => setText(event.target.value)}
                            value={text}
                        ></textarea>
                    </div>
                    <button type="submit" onClick={(event) => buttonHandler(event)} className="btn btn-primary">Save note</button>
                </form>
            </div>
        </div>
    );
}

export default NoteForm;