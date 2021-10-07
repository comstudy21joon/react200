import { Alert, Button, UncontrolledAlert } from "reactstrap";
import { Component } from "react";

class ReactStrapAlert extends Component {
  render() {
    return (
      <>
        <div>Bootstrap css 적용하기</div>
        <Alert color="primary">심플 Alert</Alert>
        <UncontrolledAlert>Uncontrolled Alert</UncontrolledAlert>
        <Button color="danger">Hello</Button>
      </>
    );
  }
}

export default ReactStrapAlert;
