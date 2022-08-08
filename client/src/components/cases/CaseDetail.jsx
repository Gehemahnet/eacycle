import {useParams} from "react-router-dom"
import {useHttp} from "../../hooks/http.hook"
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useRefactor} from "../../hooks/date.hook";

const CaseDetail = () => {
    const token = useSelector(state => state.isAuth.token)
    const [details, setDetails] = useState(null)
    //State of changing possibilities
    const [changeField, setChangeField] = useState({
        status: false,
        licenseNumber: false,
        type: false,
        color: false,
        ownerFullName: false,
        date: false,
        description: false,
        officer: false,
        resolution: false
    })
    const fieldHandler = (e) => {
        setChangeField({...changeField, [e.target.name]: ![e.target.value]})
    }

    const {request} = useHttp()
    const {refactoredObject} = useRefactor()
    const caseId = useParams().id
    const getDetails = useCallback(async () => {
        try {
            const data = await request(`/api/cases/${caseId}`, "GET", null, {
                Authorization: `"Bearer" ${token}`
            })
            return refactoredObject(data)
        } catch (e) {
            console.log(e)
        }
    }, [token, caseId, request])
    useEffect(() => {
        getDetails()
            .then(data => setDetails(data))
    }, [getDetails])
    return (
        <div className="cases">
            <div className="wrapper">
                <h1 className="cases__title">
                    Данные по случаю
                </h1>
                {/*Body*/}
                {details === null
                    ?
                    <h2>Загрузка...</h2>
                    :
                    <div className="cases__details">
                        <div className="cases__details-item">
                            ClientID: {details.clientId}
                        </div>
                        <div className="cases__details-item">
                            Статус сообщения:<span> </span>
                            {details.status === "new" && ("Новое")}
                            {details.status === "in_progress" && ("Принято в работу")}
                            {details.status === "done" && ("Завершено")}
                        </div>
                        <div className="cases__details-item">
                            Сообщение создано: {details.createdAt.split(' ', 4).join(' ')}
                        </div>
                        <div className="cases__details-item">
                            Номер лицензии: {details.licenseNumber}
                        </div>
                        <div className="cases__details-item">
                            Тип велосипеда: {details.type}
                        </div>
                        <div className="cases__details-item">
                            Цвет велосипеда: {details.color}
                        </div>
                        <div className="cases__details-item">
                            Ф.И.О. сообщившего: {details.ownerFullName}
                        </div>
                        <div className="cases__details-item">
                            Дата кражи: {details.date.split(' ', 4).join(' ')}
                        </div>
                        <div className="cases__details-item">
                            Описание случая: {details.description}
                        </div>
                        <div className="cases__details-item">
                        <span>
                            Ответственный сотрудник:
                            {details.officer? details.officer : "Ответсвенный сотрудник не выбран"}
                        </span>
                            <button className="cases__details-action">
                                Изменить
                            </button>
                        </div>
                        <div className="cases__details-item">
                            {details.updatedAt.split(' ', 4).join(' ')}
                        </div>
                        <div className="cases__details-item">
                            {details.resolution? details.resolution: "Решение не вынесено"}
                            <button className="cases__details-action">
                                Изменить
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CaseDetail;