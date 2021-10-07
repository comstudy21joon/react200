import { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Tooltip,
} from "reactstrap";

class ReactStrapCard extends Component {
  render() {
    return (
      <div>
        <h2>
          Hello <Badge color="primary">Primary</Badge>
        </h2>
        <Card>
          <CardImg
            top
            height="200px"
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F89%2F8f%2Fe6%2F898fe6bf570458c9301794c187cc85fc.jpg&type=sc960_832"
            alt="Card image"
          />
          <CardBody>
            <CardTitle>카드 제목</CardTitle>
            <CardSubtitle>카드 부제목</CardSubtitle>
            <CardText>카드 내용</CardText>
            <Button>버튼</Button>
          </CardBody>
        </Card>
        <p>
          This is a{" "}
          <a href="#" id="TooltipExample">
            tooltip
          </a>{" "}
          example.
          <Tooltip target="TooltipExample">
            <div>Hello</div>
          </Tooltip>
        </p>
      </div>
    );
  }
}

export default ReactStrapCard;
