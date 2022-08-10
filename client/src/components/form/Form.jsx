import './form.sass'
import FormField from "./Form-field";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useHttp} from "../../hooks/http.hook";


const Form = () => {
    const id = useSelector(state => state.isAuth.clientId.id)
    const [form, setForm] = useState(
        {licenseNumber: "", ownerFullName: "", type: "",clientId: id, color: "", date: "", officer: "", description: ""}
    )
    const [message, setMessage] = useState(false)
    const {request} = useHttp()

    const createReport = async () => {
        try {
            const data = await request('/api/cases', "POST", {...form})
            console.log(data)
            setMessage(true)
        } catch (e) {
            console.log(e)
        }
    }
    const formHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const isAuth = useSelector(state => state.isAuth.isAuthenticated)


    const typesOfBicycles = [
        'Городской', 'Дорожный', 'Горный', 'Шоссейный', 'Гибридный', 'BMX', 'Электровелосипед'
    ]
    return (
        <>
            {
                message
                    ?
                    <h1 className="contact__title">Сообщение отправлено.</h1>
                    :
                    <form className="contact-form">
                        <div className="contact-fields">
                            <FormField
                                name="licenseNumber"
                                onChange={formHandler}
                                label="Номер лицензии (обязательно)"
                                inputType="text"
                                isRequired={true}
                            />
                            <FormField
                                name="ownerFullName"
                                onChange={formHandler}
                                label="Ф.И.О. (обязательно)"
                                inputType="text"
                                isRequired={true}
                            />
                        </div>
                        <div className="contact-fields">
                            <div className="contact-input-container">
                                <label className="contact-label">Тип (обязательно)</label>
                                <select
                                    name="type"
                                    defaultValue="default"
                                    className="contact-select"
                                    required={true}
                                    onChange={formHandler}
                                >
                                    <option value="default" disabled>Тип велосипеда</option>
                                    {typesOfBicycles.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                            </div>
                            <FormField
                                name="color"
                                onChange={formHandler}
                                label="Цвет велосипеда"
                                inputType="text"
                                isRequired={false}
                            />
                            <FormField
                                name="date"
                                onChange={formHandler}
                                label="Дата кражи"
                                inputType="date"
                                isRequired={false}
                            />
                        </div>
                        {
                            isAuth
                                ?
                                <div className="contact-input-container" style={{maxWidth: 50 + "%", marginLeft: 0}}>
                                    <label className="contact-label">Ответственный сотрудник (обязательно)</label>
                                    <select
                                        defaultValue="default"
                                        className="contact-select"
                                        required={true}
                                    >
                                        <option value="default" disabled>Ответственный сотрудник</option>
                                    </select>
                                </div>
                                : <></>
                        }
                        <label className="contact-label">Дополнительная информация</label>
                        <textarea
                            name="description"
                            onChange={formHandler}
                            className="contact-textarea"
                        >
                        </textarea>
                        <button className="contact-submit"
                                onClick={event => {
                                    event.preventDefault()
                                    createReport()
                                }}
                                type="submit"
                        >
                            Сообщить
                        </button>
                    </form>
            }
        </>
    )
}

export default Form