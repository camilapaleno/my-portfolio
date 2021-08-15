 
import './Loading.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Loading() {

    return (
        <>
        <div className='loading'>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
            
        </>
    )
}

export default Loading;