import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";


export default function ViewPaste() {
    const [viewPaste, setViewPaste] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        id && gettingPasteId();
    }, [id]);

    const gettingPasteId = async () => {
        const docRef = doc(db, "text", id);
        const snapshot = await getDoc(docRef);
        setViewPaste(snapshot.data());
    }
  return (
    <div className="card text-start">
        <h5 className="card-header">Title: {viewPaste.title}</h5>
        <h5 className="card-header">User: {viewPaste.user}</h5>
        <div className="card-body">
            <p className="card-text">Text: {viewPaste.text}</p>
         </div>
        <Link to='/search' type="button" className="btn btn-light">Go Back</Link>
    </div>
  )
}
