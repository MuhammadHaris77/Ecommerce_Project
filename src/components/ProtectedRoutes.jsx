import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoutes = ({ component }) => {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                setLoading(false)
            } else {
                navigate('/')
            }
        });

    }, [])
    return (
        loading ? <div className='text-center'>
            <CircularProgress />
        </div> : component
    )
}

export default ProtectedRoutes