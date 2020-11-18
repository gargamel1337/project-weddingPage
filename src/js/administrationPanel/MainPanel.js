import React from 'react';
import { useEffect, useState } from "react";
import { db } from "../../../src/firebase.js";
import foto1 from "../../images/zdjecie4-min.jpeg";

const MainPanel = () => {


    const [form, setForm] = useState([]);


    useEffect(() => {
        db.collection("form")
            .get()
            .then((querySnapshot) => {
                const tmp = [];
                querySnapshot.forEach( (doc) => {
                    const data = doc.data();
                    tmp.push({ id: doc.id, ...data});
                });
                setForm(tmp);
            });
    }, [db]);

    if (!form) {return <h1>Laduje dane.....</h1>}

    return (
        <div className="main_section_aboutme" style={{backgroundImage: `url(${foto1})`}}>
            <main class="app-mainSpace">
                <div class="allFormContainer">
                    <div class="FormContainer">
                        <p>Lista nadesłanych formularzy</p>
                        <div class="line"></div>
                    </div>
                    <table class="table_form">
                        <tr class="list-form">
                            <th></th>
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
                                <td><i className="fas fa-circle"></i></td>
                                <td>{column.username}</td>
                                <td>{column.email}</td>
                                <td>{column.phone}</td>
                                <td>{column.city}</td>
                                <td>{column.range}</td>
                                <td>{(column.data).substr(0,10)}</td>
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