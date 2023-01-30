import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Link, useLocation } from "react-router-dom";

export const SearchPaste = () => {

    const [searchTitle, setSearchTitle] = useState("");
    const [foundTexts, setFoundTexts] = useState([]);
    const [displayMessage, setDisplayMessage] = useState("");
    const [results, setResults] = useState(false);

    async function fetchData(e) {
        const CalendarComponent = props => {
            const backUrl = props.location['query']
        }

        e.preventDefault();
        if (searchTitle === "") return;
        
        const q = query(collection(db, "text"), where("title", "==", searchTitle));
        
        const querySnapshot = await getDocs(q);
        let textArray = [];
    
        querySnapshot.forEach((doc) => {
            textArray.push({ id: doc.id, ...doc.data() });
        });

        setFoundTexts(textArray);
        setSearchTitle("");
        setResults(false);

        if (textArray.length == 0) {
            setDisplayMessage(`No text with that title was found`)
            setResults(true);
        }
    };

    return (
        <div>
            <div>
                <form className="d-flex" role="search" onSubmit={fetchData}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search texts using a title..." 
                        aria-label="Search" 
                        onChange={(e) => setSearchTitle(e.target.value)}
                        value={searchTitle}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            {foundTexts.map((item) => {
                return (
                    <div key={item.id} className="card text-start">
                        <h5 className="card-header">Title: {item.title}</h5>
                        <h5 className="card-header">User: {item.user}</h5>
                        <div className="card-body">
                            <p className="card-text">Text: {item.text}</p>
                        </div>
                        <Link to={`/view/${item.id}`} type="button" className="btn btn-light">View</Link>
                    </div>
                )
            })}

            {results && (
                <div className="alert alert-danger" role="alert">
                    {displayMessage}
                </div>
            )}
        </div>
    );
}