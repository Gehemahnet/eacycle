const FormField = (props) => {
    return(
        <div className="contact-input-container">
            <label className="contact-label" >{props.label}</label>
            <input className="contact-input"
                   type={props.inputType}
                   placeholder={props.label}
                   required={props.isRequired}
            />
        </div>
    )
}

export default FormField