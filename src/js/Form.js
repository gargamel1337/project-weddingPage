import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import foto from "../images/zdjecie4-min.jpeg";
// import validator from 'validator';
// import PropTypes from "prop-types";
import { db } from "../firebase.js";


const Form = () => {
    const [username, setUsername] = useState("");
    const [emil, setEmil] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [calDate, setCalDate] = useState(new Date())
    const [textarea, setTextarea] = useState("");
    const [range, setRange] = useState("");
    const [select, setSelect] = useState(" ");
    const [errors, setErrors] = useState([]);

    function onChange(calDate) {
        setCalDate(calDate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const temErrors = [];

        // const emailReg = value => (value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/)

        if (username.typeof === "string") {
            temErrors.push("Imie nie może zawierać liczb");
        }
        if (phone.length !== 9 || phone.typeof === "number") {
            temErrors.push("Wpisany numer jest niepoprawny");
        }
        if (temErrors.length > 0) {
            setErrors(temErrors);
            return
        } else {
            alert("Formularz został wysłany, postaram sie odpowiedzieć najszybciej jak to możliwe");
        }
        setUsername('');
        setTextarea('');
        setPhone('');
    }

    useEffect(() => {
        renderFormToLocalStorage();
        db.collection("form").add({
            username: username,
            email: emil,
            phone: phone,
            city: city,
            range: range,
            data: calDate.toLocaleString(),
            text: textarea,
            select: select
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }, [])

    function saveFormToLocalStorage() {
        const form = {
            name: username,
            email: emil,
            phone: phone,
            city: city,
            range: range,
            text: textarea,
            select: select
        }

        const lsForm = JSON.parse(localStorage.getItem("lsForm"));
        if (lsForm !== form) {
            localStorage.setItem("lsForm", JSON.stringify(form));
            return "new_form";
        } else if (lsForm) {
            return "returning_form";
        } else {
            return "error";
        }
    }
    function renderFormToLocalStorage() {
        const lsForm = JSON.parse(localStorage.getItem("lsForm"));
        if (lsForm !== null) {
            setUsername(lsForm.name);
            setEmil(lsForm.email);
            setPhone(lsForm.phone);
            setCity(lsForm.city);
            setRange(lsForm.range);
            setTextarea(lsForm.text);
            setSelect(lsForm.select);
        }
    }


    return (
        <div className="container_form" style={{backgroundImage: `url(${foto})`}}>
            <div className="first_container_form">
                <h1 className="form-name">SKONTAKTUJ SIĘ ZE MNĄ!</h1>
                <form>
                    <div className="form-group" onSubmit={handleSubmit}>
                        <div className="col">
                            <div className="col1">

                                <div className="row">
                                    {errors.map((error) => <div key={error}
                                                                className="alert alert-danger">{error}</div>)}
                                    <label htmlFor="validationServer01">Imię</label>
                                    <input type="text" className="form-control" id="validationServer01"
                                           value={username} required
                                           onChange={(e) => {
                                               saveFormToLocalStorage();
                                               setUsername(e.target.value)
                                           }}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer02">Adres email</label>
                                    <input type="email" className="form-control" id="validationServer02"
                                           placeholder="name@example.com"
                                           value={emil} required
                                           onChange={(e) => {
                                               saveFormToLocalStorage();
                                               setEmil(e.target.value)
                                           }}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer03">Numer telefonu</label>
                                    <input type="text" className="form-control" id="validationServer03"
                                           value={phone} required
                                           onChange={(e) => {
                                               saveFormToLocalStorage();
                                               setPhone(e.target.value)
                                           }}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer04">Miejsce wesela</label>
                                    <input type="text" className="form-control" id="validationServer04"
                                           value={city}
                                           onChange={(e) => {
                                               saveFormToLocalStorage();
                                               setCity(e.target.value)
                                           }}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer05">zakres współpracy</label>
                                    <select className="form-control" id="validationServer05"
                                            value={select}
                                            onChange={(e) => {
                                                saveFormToLocalStorage();
                                                setSelect(e.target.value)
                                            }}>
                                        <option selected disabled>wybierz...</option>
                                        <option>Kompleksowa koordynacja ślubu i wesela</option>
                                        <option>Konsultacje dla narzeczonych</option>
                                        <option>Wieczór Panieński i Kawalerski</option>
                                        <option>Zaręczyny</option>
                                    </select>
                                </div>

                                <div className="row">
                                    <label htmlFor="formControlRange">przyblizona liczba gości</label>
                                    <input type="range" className="form-control-range" id="formControlRange"
                                           data-toggle="tooltip" data-placement="bottom" title={range}
                                           min="0" max="300"
                                           value={range}
                                           onChange={(e) => {
                                               saveFormToLocalStorage();
                                               setRange(e.target.value)
                                           }}/>
                                </div>
                            </div>
                            <div className="col2">
                                <div className="row">
                                    <label htmlFor="validationServer06">Data wesela:</label>
                                    <Calendar id="validationServer06"
                                              onChange={onChange}
                                              value={calDate}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer07">W czym jeszcze mogę Ci pomóc?</label>
                                    <textarea className="form-control" id="validationServer07"
                                              value={textarea}
                                              onChange={(e) => {
                                                  saveFormToLocalStorage();
                                                  setTextarea(e.target.value)
                                              }}>
                                     </textarea>
                                </div>

                                <div className="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2"
                                               required/>
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            Wyrażam zgodę na przesłanie danych
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn_form" type="submit">Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


// Form.propTypes={
//     username:PropTypes.string,
//     city: PropTypes.string,
//     phone: PropTypes.number,
//     text: PropTypes.string
// }


export default Form;