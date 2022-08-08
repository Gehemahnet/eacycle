
import Form from "../form/Form";

const Contact = () => {
    return (
        <div className="wrapper">
            <div className="contact">
                <h1 className="contact__title">
                    Сообщить о краже
                </h1>
                <h2 className="contact__subtitle">
                    К сожалению иногда происходят случаи кражи наших велосипедов. Если вы хотите сообщить о таком
                    случае,
                    заполните, пожалуйста, форму ниже.
                </h2>
                <Form/>
            </div>
        </div>
    )
}

export default Contact