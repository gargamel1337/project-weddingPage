import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Form = () => {

    const [value, onChange] = useState(new Date());



    return (
        <div className="container form">
            <div className="container_info_form">
                <h1 className="form-name">SKONTAKTUJ SIĘ ZE MNĄ!</h1>
                <form className="form-group" noValidate>

                    <div className="row">
                        <label htmlFor="validationCustom01">Imię</label>
                        <input type="text" className="form-control" id="validationCustom01" value="" required/>
                    </div>

                    <div className="row">
                        <label htmlFor="validationCustom02">Nazwisko</label>
                        <input type="text" className="form-control" id="validationCustom02" value="" required/>
                    </div>

                    <div className="row">
                        <label htmlFor="exampleFormControlInput1">Adres email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com"/>
                    </div>

                    <div className="row">
                        <label htmlFor="validationCustom03">Miejsce wesela</label>
                        <input type="text" className="form-control" id="validationCustom03" required/>
                    </div>

                    <div className="row">
                        <label htmlFor="validationCustom04">State</label>
                        <select className="custom-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="validationCustom04">State</label>
                        <select className="custom-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="validationCustom04">State</label>
                        <select className="custom-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>

                    <div className="calendar">
                         <label htmlFor="validationCustom04">Data wesela:</label>
                          <Calendar onChange={onChange}
                                    value={value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="exampleFormControlTextarea1">W czym jeszcze mogę Ci pomóc?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="row">
                        <label htmlFor="formControlRange">Example Range input</label>
                        <input type="range" className="form-control-range" id="formControlRange"/>
                    </div>
                    <div className="row">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-form" type="submit">Wyślij</button>
                </form>
            </div>
        </div>
    );
};

export default Form;