import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdDeleteOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const ButtonsGroup2 = () => {
    
    return (
        <div className='d-flex gap-2'>
            <Button variant="secondary" ><FiEdit /></Button>
            <Button variant="danger" ><MdDeleteOutline /></Button>
        </div>
    )
}

export default ButtonsGroup2;