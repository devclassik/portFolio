import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom"; // Import useNavigate


function BlogCards(props) {
  const navigate = useNavigate(); // Initialize useHistory


  const handleCardClick = (id) => {
    // console.log("clicked me", id);
    navigate(`/blog/${id}`);
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  style={{borderRadius: "50px !important"}}/>
      <Card.Body>
        <Card.Title className="purple"
         onClick={() => handleCardClick(props.demoLink)}
         >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
            variant="primary"
            // href={props.demoLink}
            style={{ marginLeft: "10px" }}
            onClick={() => handleCardClick(props.demoLink)}
          >
            <CgWebsite /> &nbsp;
            {"Read More..."}
          </Button>
      </Card.Body>
    </Card>
  );
}
export default BlogCards;
