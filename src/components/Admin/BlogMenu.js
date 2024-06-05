import Nav from "react-bootstrap/Nav";

export function BlogMenu() {
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="first">Add New Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Edit Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">Delete Blog</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
