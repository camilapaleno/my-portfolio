import React , { useState, useEffect } from 'react';
import '../../App.js';
import WebCards from '../WebCards';
import Loading from '../Loading';

function Web () {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
        {loading === false ? (
        <>
            <WebCards />
        </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Web;