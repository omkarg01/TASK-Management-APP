import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa"

function MyVerticallyCenteredModal(props) {
    const [title, setTitle] = useState(props.todo.title);

    const titlehandler = () => {
        const newTitle = prompt("Enter new title");
        setTitle(newTitle);
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                <Button className='ml-3' onClick={titlehandler}>
                    <FaEdit />
                </Button>
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