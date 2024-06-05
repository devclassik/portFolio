import Nav from "react-bootstrap/Nav";

export function QuizMenu() {
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="ten">Add New Quiz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="eleven">Edit Quiz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="twelve">Delete Quiz</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
