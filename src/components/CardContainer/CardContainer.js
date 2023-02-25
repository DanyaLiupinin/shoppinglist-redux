import './CardContainer.css'

import { useSelector } from 'react-redux'

import Card from '../Card/Card'

function CardContainer () {

const reduxCards = useSelector(state => state.reduxCards)

    return (
        <div className='cardContainer'>
            {
                reduxCards.length !== 0 ?
                reduxCards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            title={card.title}
                            amount={card.amount}
                            id={card.id}
                        />
                    )
                }) :
                <div>
                    <p>список пуст</p>
                </div>
            }            
        </div>
    )
}

export default CardContainer