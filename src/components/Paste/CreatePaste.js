import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase"; 

export const CreatePaste = () => {

    const [newPaste, setNewPaste] = useState("");
    const [title, setTitle] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const pasteRef = collection(db, "text");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPaste === "" || title === "") return;

        await addDoc(pasteRef, {
            title: title, 
            text: newPaste,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
        });

        setNewPaste("");
        setTitle("");
        setDisplayMessage(`Your Paste has successfully created!`);
        setSuccess(true);
    };

    return (
        <div>
            <form >
                <div className="mb-3">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input
                            className="form-control"
                            id="title" 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                    <textarea
                        className="form-control"
                        id="text"
                        placeholder="Enter your text here..."
                        rows={5}
                        cols={100}
                        onChange={(e) => setNewPaste(e.target.value)} 
                        value={newPaste}
                    />
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-outline-secondary">Create New Paste</button>
            </form>
            {success && (
                <div className="alert alert-success" role="alert">
                    {displayMessage}
                </div>
            )}
        </div>
    );
}