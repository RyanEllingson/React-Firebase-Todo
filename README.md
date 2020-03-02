# React Firebase To-Do
This is a full-stack application which allows the user to save notes to a database, see all notes that currently exist, and delete notes once they are no longer needed.

The deployed app can be found here:

https://react-firebase-todo-ec1d6.firebaseapp.com/

## Project Description
![Screenshot of app](https://github.com/RyanEllingson/React-Firebase-Todo/blob/master/public/assets/images/Screenshot1.JPG)

Upon loading the app, the user will see a new note entry field on the left side of the screen, and a list of existing notes displayed on the right side.  To save a new note to the database, simply type whatever text the note should have in the input field, then click the "Save Note" button:

![Screenshot of adding note](https://github.com/RyanEllingson/React-Firebase-Todo/blob/master/public/assets/images/Screenshot2.JPG)

Upon clicking the "Save Note" button, a new note document will be created and added to the app's database.  This document contains both the text entered by the user and the date and time the note was created.  The page will immediately display the new note on the right side of the screen along with all other notes in the database.

![Screenshot of new note](https://github.com/RyanEllingson/React-Firebase-Todo/blob/master/public/assets/images/Screenshot3.JPG)

Each note is rendered on a card which displays the date and time the note was created, the note text that was entered by the user who created it, and a button which, when clicked, deletes the note from the database.

## Techniques and Technologies Used
The front end of this app was created using React, and it uses Firebase for the database and for online deployment.  The header, note creation form, and note cards are built as separate components and put together into a "container" component which is then rendered on the screen.  useState is used to handle user inputs as well as re-rendering the screen when a note is added or deleted, and useEffect is used to generate the list of notes the first time the page is loaded.  The Firebase database connection is initialized inside the App.js file, and then the object containing the database methods is passed as a prop to the container component which contains the code for the database requests.  Bootstrap is used for CSS components and layout, and Moment.js is used to capture the date and time when a note is created.