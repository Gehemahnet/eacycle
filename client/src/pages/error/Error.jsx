import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            Что-то пошло не так.
            <Link to'/'>Вернуться на главную страницу</Link>
        </div>
    );
};

export default Error;