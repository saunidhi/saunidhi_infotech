import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// this methods for protective Components only 
const Protective = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('saunidhi')) {
            navigate('/LogIn');
        }
    }, []);

    return (
        <>
            <props.Comp />
        </>
    )
}

export default Protective