import { FormEvent, useContext, useRef } from "react";
import MarkController from "../../controllers/MarkController";
import Mark from "../../models/Mark";
import { AppContext } from "../../context/app-context";
import { clear } from "console";

const Form = () => {
    const markController : MarkController = new MarkController();
    const nameRef = useRef<HTMLInputElement>(null);
    const midRef = useRef<HTMLInputElement>(null);
    const finalRef = useRef<HTMLInputElement>(null);
    const activitiesRef = useRef<HTMLInputElement>(null);

    const appContext = useContext(AppContext)

    const obSubmitHandler = (event : FormEvent) => {
        event.preventDefault();
        saveMark();
    }; 

    const saveMark = () => {
        const result = markController.save(nameRef.current?.value , midRef.current?.value , finalRef.current?.value , activitiesRef.current?.value)
        if(result) {
            appContext.addMark
            (new Mark(
                nameRef.current!.value,
                Number.parseFloat(midRef.current!.value),
                Number.parseFloat(finalRef.current!.value),
                Number.parseFloat(activitiesRef.current!.value),
                Date.now()
                ))
                clearMark();
        }
        else {
            alert('Enter new mark data!')
        }
    }; 
    const clearMark = () => {
        nameRef.current!.value = ""; 
        midRef.current!.value = "" ; 
        finalRef.current!.value = "" ;
        activitiesRef.current!.value = ""
    }
        return (
        <form className="marks-form" onSubmit={obSubmitHandler}>
        <div className="form-group">
          <label htmlFor="student-name" className="form-label">Student Name</label>
          <input
            type="text"
            id="student-name"
            name=""
            className="form-input"
            placeholder="Enter Student Name"
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mid-term" className="form-label">Mid Term</label>
          <input
            type="number"
            id="mid-term"
            name=""
            className="form-input"
            placeholder="Enter Mark"
            ref={midRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="final-term" className="form-label">Final</label>
          <input
            type="number"
            id="final-term"
            name=""
            className="form-input"
            placeholder="Enter Mark"
            ref={finalRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="activities" className="form-label">Activities</label>
          <input
            type="number"
            id="activities"
            name=""
            className="form-input"
            placeholder="Enter Mark"
            ref={activitiesRef}
          />
        </div>
        <button type="submit" className="form-btn">SAVE</button>
      </form>
    )
}
export default Form; 