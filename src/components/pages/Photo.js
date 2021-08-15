import React , { useState, useEffect } from 'react';
import '../../App.css';
import PhotoCards from '../PhotoCards';
import Loading from '../Loading';

function Photo () {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
        {loading === false ? (
            <>
                <PhotoCards />
            </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Photo;