import './Main.css'
import '../CardContainer/CardContainer'
import CardContainer from '../CardContainer/CardContainer'
import SearchForm from '../SearchForm/SearchForm'
import initialCards from '../../utils/constants'
import { useState } from 'react'

function Main() {

    //const [cards, setCards] = useState(initialCards)

    /*
    function searchFormHandler(product, amount) {
        setCards([
            ...cards,
            {
                title: product,
                amount: amount,
                id: Math.random()
            }])
    }
    */

    return (
        <main className="main">
            <section className='container'>
                <h1 className="container__title">Shopping List</h1>
                <SearchForm
                    //searchFormSubmit={searchFormHandler}
                />
                <CardContainer
                    //cards={cards}
                />
            </section>
        </main>
    )
}

export default Main