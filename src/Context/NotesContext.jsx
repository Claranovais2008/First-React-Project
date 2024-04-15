import React, { createContext, useState } from "react";
import { mockNotes } from "../mockData/mockNotes"; // não criamos ainda
import { generateAtualDate } from "../Helpers/generateAtualDate";
import { generateRandomId } from "../helpers/generateRandomId";

const NoteContext = createContext(); //Criaando a loja

const NoteProvider = ({ children }) => { // vamos criar nossas funções que seram usadas por outros componentes
    const [notes, setNotes] = useState([...mockNotes]); // vamos usar a lista que jaja vamos criar

    const addNote = (description, title) => {
        setNotes([
            ...notes,
            { id: generateRandomId(), description, title, date: generateAtualDate() },
        ]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
            {children} 
        </NoteContext.Provider>
    );
};

export { NoteProvider, NoteContext };