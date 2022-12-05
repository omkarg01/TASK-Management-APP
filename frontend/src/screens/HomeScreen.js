import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';

function HomeScreen() {

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { user } = userDetails;
    console.log("userProfile", userDetails)

    const getUserData = () => {
        dispatch(getUserProfile())
    };

    useEffect(() => {
    }, [])

    return (
        <>
            <Button onClick={getUserData}>Get User Details</Button>
        </>
    );
}

export default HomeScreen;