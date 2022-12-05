import React from 'react'
import Button from 'react-bootstrap/Button';

const MyButton = ({ text }) => {
    return (
        <>
            <Button variant="primary">{text}</Button>
        </>
    )
}

export default MyButton