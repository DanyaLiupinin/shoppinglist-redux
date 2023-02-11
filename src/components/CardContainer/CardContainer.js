import './CardContainer.css'
import Card from '../Card/Card'

function CardContainer ({cards}) {

    return (
        <div className='cardContainer'>
            {
                cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            title={card.title}
                            amount={card.amount}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardContainer