const AuthButton = ({onClick,type,text}) => {
    return (
        <button
            type={type}
            className="auth__submit"
            onClick={(event)=>{
                event.preventDefault()
                onClick()

            }}
        >
            {text}
        </button>
    );
};

export default AuthButton;