import React from 'react';
import { useEffect, useState } from "react";
import { db } from "../../../src/firebase.js";

const MainPanel = () => {


    const [form, setForm] = useState(false);

    useEffect(() => {
        db.collection("form")
            .get()
            .then(function (querySnapshot) {
                const tmp = [];
                querySnapshot.forEach(function (doc) {
                    tmp.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                setForm(tmp);
            });
    }, []);

    if (!form) {return <h1>Brak podesłanych formularzy</h1>}


    return (
        <div className="App">
            <header className="App-header">
                <table>
                    <tbody>
                    {form.map((column) => (
                        <tr>
                            <td>{column.username}</td><br/>
                            <td>{column.city}</td><br/>
                            <td>{column.city.email}</td><br/>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}


export default MainPanel;