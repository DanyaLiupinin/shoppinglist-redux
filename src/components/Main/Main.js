import './Main.css'
import '../CardContainer/CardContainer'
import CardContainer from '../CardContainer/CardContainer'
import SearchForm from '../SearchForm/SearchForm'
//import initialCards from '../../utils/constants'
//import { useState } from 'react'

function Main() {

    return (
        <main className="main">
            <section className='container'>
                <h1 className="container__title">Shopping List</h1>
                <SearchForm
                />
                <CardContainer
                />
            </section>
        </main>
    )
}

export default Main