import './CardContainer.css'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

function CardContainer () {
    
const reduxCards = useSelector(state => state.reduxCards)


    return (
        <div className='cardContainer'>
            {
                reduxCards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            title={card.title}
                            amount={card.amount}
                            id={card.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardContainer