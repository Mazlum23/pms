import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Documents from "./Documents";
import Projects from "./Projects";
import Tasks from "./Tasks";

function App() {
  let projectsInfo = {title:"projects title",content:"hello from projects"}
  let tasksInfo = {title:"taskas title",content:"hello from tasks"}
  let documentsInfo = {title:"documents title",content:"hello from documents"}
  return (
    <div>
      <Container>
        <Row>
          <Tasks info={tasksInfo}/>
        </Row>
        <Row>
          <Col xs="6">
            <Projects info={projectsInfo} />
          </Col>
          <Col xs="6">
            <Documents info={documentsInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
