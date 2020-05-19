import React from "react"
import "./project.scss"
import { Col, Modal } from "react-bootstrap"
import { IoMdClose } from "react-icons/io"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.css";



const Project = ({ data }) => {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const style = {
    backgroundImage: "url(" + data.photo.file.url + ")",
  }

  return (
    

    <Col lg={4} className="project">
      <ScrollAnimation animateIn="animate__fadeInUp" duration="0.8">
      <div className="project-wrapper" onClick={handleShow} style={style}>
        <div className="project-overlay"></div>
        <div className="details">
          <p><span>{data.category}</span> - <span>{data.type}</span></p>
          <h3>{data.title}</h3>
        </div>
      </div>
      </ScrollAnimation>
      <Modal show={show} onHide={handleClose} centered>
        <IoMdClose onClick={handleClose} className="modal-close"/>
        <Modal.Header>
          <Modal.Title>
            <h3>{data.title}</h3>
            <p><span>{data.category}</span> - <span>{data.type}</span></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            data.video ? <iframe width="560" height="315" src={data.video} frameBorder="0"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen title={data.title}/> : null
          }
          <div className="images-container">
            {data.images ? data.images.map((image) => {
              console.log(image.file.url)
              return (
                <img src={image.file.url} alt="portfolio" className="portfolio-image"/>
              )
            }) : null}
          </div>
          {
            data.instagram ? <iframe className="igembed"
              src={"https://www." + data.instagram + "embed"}
              frameborder="0"
              allowfullscreen
              scrolling="no"
              allowtransparency
              width="400px"
              height="600px"
            /> : null
          }
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default Project