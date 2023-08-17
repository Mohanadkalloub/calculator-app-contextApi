import { useContext } from "react";
import Card from "../components/Card/Card";
import ContentApp from "../components/ContentApp/ContentApp";
import Form from "../components/Form/Form";
import { AppContext } from "../context/app-context";

const App = () => {
  const appContext = useContext(AppContext);
    return (
        <div className="content-wrapper">
        <section className="form-section">
            <ContentApp />
          <Form />
        </section>
        {appContext.marks.map((element) => (
          <Card mark={element} key={element._id}/>
        ))}
      </div>
    )
}
export default App; 