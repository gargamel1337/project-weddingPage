import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import foto from "../images/kwiat.jpg";
//import validator from 'validator';
//import PropTypes from "prop-types";


const Form = () => {

    const [username, setUsername] = useState("");
    const [emil, setEmil] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [calDate, setCalDate] = useState(new Date())
    const [textarea, setTextarea] = useState("");
    const [range, setRange] = useState("");
    const [errors, setErrors] = useState([]);

    function onChange(calDate) {
        setCalDate(calDate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const temErrors = [];
        // if  (validator.isEmail('foo@bar.com')) {
        //     temErrors.push("Wpisany email jest niepoprawny");
        // }
        if (temErrors.length > 0) {
            setErrors(temErrors);
            return false;
        }
    }

    function saveFormToLocalStorage() {
        const form = {
            name: username,
            email: emil,
            phone: phone,
            city: city,
            data: calDate,
            range: range,
            text: textarea
        }

        const lsForm = JSON.parse(localStorage.getItem("lsForm"));
        if (lsForm !== form) {
            localStorage.setItem("lsForm", JSON.stringify(form));
            return "new_form";
        } else if (lsForm) {
            return "returning_form";
        // } else if (lsForm !== null) {
        //     useEffect( renderAllRecipes()} [form] )
        }else {
            return "error";
        }
    }



    // function renderAllRecipes() {
    //     const lsForm = JSON.parse(localStorage.getItem("lsForm"));
    //     if (lsForm !== null) {
    //         setUsername(lsForm.name);
    //         setEmil(lsForm.email);
    //         setPhone(lsForm.phone);
    //         setCity(lsForm.city);
    //         setRange(lsForm.range);
    //         setTextarea(lsForm.text);
    //         // document.getElementById('validationServer01').value = lsForm.name;
    //         // document.getElementById('validationServer02').value = lsForm.email;
    //         // document.getElementById('validationServer03').value = lsForm.phone;
    //         // document.getElementById('validationServer04').value = lsForm.city;
    //         // document.getElementById('validationServer05').value = lsForm.range;
    //         // // document.getElementById('validationServer06').value = lsForm.data;
    //         // document.getElementById('validationServer07').value = lsForm.text;
    //     }
    //     return true;
    // }
    //
    // window.onload = function () {
    //     const lsForm = JSON.parse(localStorage.getItem("lsForm"));
    //     if (lsForm !== null) renderAllRecipes();
    // }

    return (
        <div className="container_form" style={{backgroundImage: `url(${foto})`}}>
            <div className="first_container_form" >
                <h1 className="form-name">SKONTAKTUJ SIĘ ZE MNĄ!</h1>
                <form>
                    <div className="form-group" onSubmit={handleSubmit}>
                        <div className="col">
                            <div className="col1">

                                <div className="row">
                                    <label htmlFor="validationServer01">Imię</label>
                                    <input type="text" className="form-control" id="validationServer01"
                                           value={username} required
                                           onChange={(e) => { saveFormToLocalStorage(); setUsername(e.target.value)}}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer02">Adres email</label>
                                    <input type="email" className="form-control" id="validationServer02"
                                           placeholder="name@example.com"
                                           value={emil} required
                                           onChange={(e) =>{saveFormToLocalStorage(); setEmil(e.target.value)}}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer03">Numer telefonu</label>
                                    <input type="text" className="form-control" id="validationServer03"
                                           value={phone} required
                                           onChange={(e) => {saveFormToLocalStorage(); setPhone(e.target.value)}}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer04">Miejsce wesela</label>
                                    <input type="text" className="form-control" id="validationServer04"
                                           value={city}
                                           onChange={(e) => {saveFormToLocalStorage(); setCity(e.target.value)}}/>
                                </div>

                                <div className="row">
                                    <label htmlFor="validationServer05">zakres współpracy</label>
                                    <select className="form-control" id="validationServer05">
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
                                           onChange={(e) => {saveFormToLocalStorage(); setRange(e.target.value)}}/>
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
                                              onChange={(e) => {saveFormToLocalStorage(); setTextarea(e.target.value)}}>
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
                {errors.map((error) => <div key={error} className="alert alert-danger">{error}</div>)}
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