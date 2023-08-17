import {createContext, useState } from "react";
import Mark from "../models/Mark";
import App from "../pages/App";

export const AppContext = createContext<{
    marks : Mark [] ;
    addMark : (mark : Mark) => void; 
    deleteMark : (mark : Mark) => void ; 
}>({
    marks : [] , 
    addMark : (mark : Mark) => {},
    deleteMark : (mark : Mark) => {}, 
}); 

export const AppContextProvider = (props : {children? : React.ReactNode}) => {
    const [marks , setMarks] = useState<Mark[]>([]);
    const addMark = (mark : Mark) => {
        setMarks((prevState : Mark []) => {
            return [mark , ...prevState]
        });
    }; 
    const deleteMark = (mark : Mark) => {
        const data = marks.filter((element) => mark._id != element._id)
        setMarks(data)
    }; 
    return (
        <AppContext.Provider value={{
            marks : marks , 
            addMark : addMark , 
            deleteMark : deleteMark , 
        }}>
            {/* <App /> */}
            {props.children}
        </AppContext.Provider>
    )
}