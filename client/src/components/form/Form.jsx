import './form.sass'
import FormField from "./Form-field";


const Form = (props) => {
    // const [isValid, setIsValid] = useState(false)
    const typesOfBicycles = [
        'Городской', 'Дорожный', 'Горный', 'Шоссейный', 'Гибридный', 'BMX', 'Электровелосипед'
    ]
    //
    // const formValidation = () => {
    //
    // }

    return (
        <form className="contact-form">
            <div className="contact-fields">
                <FormField
                    label="Номер лицензии (обязательно)"
                    inputType="text"
                    isRequired={true}
                />
                <FormField
                    label="Ф.И.О. (обязательно)"
                    inputType="text"
                    isRequired={true}
                />
            </div>
            <div className="contact-fields">
                <div className="contact-input-container">
                    <label className="contact-label">Тип (обязательно)</label>
                    <select defaultValue="default" className="contact-select" required={true}>
                        <option value="default" disabled>Тип велосипеда</option>
                        {typesOfBicycles.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
                <FormField
                    label="Цвет велосипеда"
                    inputType="text"
                    isRequired={false}
                />
                <FormField
                    label="Дата кражи"
                    inputType="date"
                    isRequired={false}
                />
            </div>
            {/*{*/}
            {/*    isAuth*/}
            {/*        ?*/}
            {/*        <div>*/}
            {/*            <label className="contact-label">Ответственный сотрудник (обязательно)</label>*/}
            {/*            <select defaultValue="default" className="contact-select" required={true}>*/}
            {/*                <option value="default" disabled>Ответственный сотрудник</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*        : <></>*/}
            {/*}*/}
            <label className="contact-label">Дополнительная информация</label>
            <textarea className="contact-textarea"></textarea>
            <button className="contact-submit" type="submit">Сообщить</button>
        </form>
    )
}

export default Form