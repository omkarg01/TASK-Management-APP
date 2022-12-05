import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    // console.log("props", props)
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.todo.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup as="ol" numbered>
                    {props.todo.tasks !== 0 && props.todo.tasks.map((task) => <ListGroup.Item as="li">{task}</ListGroup.Item>)}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;   