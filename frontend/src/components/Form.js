import React from 'react'
import { InputGroup } from 'react-bootstrap'

const Form = () => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
                placeholder="Enter title"
                aria-label="title"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    )
}

export default Form