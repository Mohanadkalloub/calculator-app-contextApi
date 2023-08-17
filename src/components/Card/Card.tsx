import { useContext } from "react";
import Mark from "../../models/Mark";
import { AppContext } from "../../context/app-context";

const Card = (props : {mark : Mark}) => {
    const appContext = useContext(AppContext);
    const onDeleteHandler = () => {
        appContext.deleteMark(props.mark)
    }
    return (
        <section>
        <section className="card">
          <article className="card-top-content">
            <div className="card-top-content-leading">
              <span className="name-first-char">S</span>
              <div className="student-info">
                <span>{props.mark._name}</span>
                <span>{props.mark._id}</span>
              </div>
            </div>
            <button type="button" className="delete-btn" onClick={onDeleteHandler}>
              <i className="fa-solid fa-xmark delete-row"></i>
            </button>
          </article>
          <article className="card-marks">
            <section className="mark-info">
              <span>Mid-Term</span>
              <span>{props.mark._mid}</span>
            </section>
            <section className="mark-info">
              <span>Final-Term</span>
              <span>{props.mark._final}</span>
            </section>
            <section className="mark-info">
              <span>Activities</span>
              <span>{props.mark._activites}</span>
            </section>
          </article>
        </section>
      </section>
    )
}
export default Card; 