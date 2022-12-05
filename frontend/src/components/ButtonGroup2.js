import React from 'react'
import Button from 'react-bootstrap/Button';
import { GrView } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';

const ButtonsGroup2 = ({ setModalShow }) => {
    return (
        <div className='d-flex gap-2'>
            <Button variant="primary" ><GrView /></Button>
            <Button variant="danger" ><MdDeleteOutline /></Button>
        </div>
    )
}

export default ButtonsGroup2;