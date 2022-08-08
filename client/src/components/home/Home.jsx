import './home.sass'
import List from "../list/List";

const Home = () => {
    let featuresList = [
        'Отличному качеству',
        'Шаговой доступности наших мобильных точек из любой точки вашего города',
        'Большому ассортименту велосипедов на прокат',
        'Приятной цене']
    return (
        <div className="wrapper">
            <div className='home'>
                <section className="home__intro">
                    <h1 className="home__title">
                        Добро пожаловать в Eacycle
                    </h1>
                    <h3 className="home__subtitle">
                        Наша компания на протяжении 10 лет предоставляет в аренду велосипеды на любой вкус по доступной
                        цене
                        более чем в 50 городах России. И мы не планируем останавливаться
                    </h3>
                    <h4 className="home__features">
                        Наши клиенты выбирают нас благодаря:
                    </h4>
                    <List children={featuresList}/>
                </section>
                <section className="home__gallery">

                </section>
            </div>
        </div>
    )
}


export default Home