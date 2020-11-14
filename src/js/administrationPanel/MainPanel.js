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

    if (!form) {return <h1>Laduje dane.....</h1>}


    return (
        <div className="App">
            <main class="app-mainSpace">
                <div class="allFormContainer">
                    <div class="FormContainer">
                        <p>Lista nadesłanych formularzy</p>
                        <div class="line"></div>
                    </div>
                    <table class="table_form">
                        <tr class="list-form">
                            <th>Imie</th>
                            <th>adres email</th>
                            <th>Numer telefonu</th>
                            <th>Miejsce wesela</th>
                            <th>Liczba gości</th>
                            <th>Data</th>
                            <th>Zakres współpracy</th>
                            <th>Dodatkowe informacje</th>
                        </tr>
                        {form.map((column) => (
                            <tr class="next_list_form">
                                <td>{column.username}</td>
                                <td>{column.email}</td>
                                <td>{column.phone}</td>
                                <td>{column.city}</td>
                                <td>{column.range}</td>
                                <td>{column.data}</td>
                                <td>{column.select}</td>
                                <td>{column.text}</td>
                            </tr>

                        ))}
                    </table>
                </div>
            </main>
        </div>
    );
}


export default MainPanel;