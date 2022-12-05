import React from 'react'
import Button from 'react-bootstrap/Button';
import { GrView } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';

const ButtonsGroup = ({ setModalShow }) => {
    return (
        <div className='ml-5 position-absolute top-50 start-100 translate-middle d-flex gap-2'>
            <Button variant="primary" onClick={() => setModalShow(true)} ><GrView /></Button>
            <Button variant="danger" ><MdDeleteOutline /></Button>
        </div>
    )
}

export default ButtonsGroup;