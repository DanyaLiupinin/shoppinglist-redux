import { useState } from 'react'
import './Card.css'
import deleteButton from '../../images/delete.png'
import { useDispatch, useSelector } from 'react-redux'

function Card(props) {

    const [obtained, setObtained] = useState(false)

    const dispatch = useDispatch()
    const cards = useSelector(state => state.reduxCards)

    function onBuy() {
        setObtained(!obtained)
    }

    function testim () {
        dispatch({
            type: "ADD_CARD", 
            payload: {
                title: 'продукт5',
                amount: '10 штук',
                id: 5,
              }
        })
        console.log(cards)
    }

    return (
        <>
            <div className={`card 
        ${obtained ? 'card_obtained' : ''}
        `}>
                <label className='card__checkbox-label'>
                    <input className='card__checkbox' type='checkbox' checked={obtained} onChange={onBuy} />
                </label>
                <div className='card__info'>
                    <h2 className={`card__product-title 
                ${obtained ? 'card__product-title_obtained' : ''} `}>{props.title}</h2>
                    <p className='card__product-amount'>{props.amount}</p>
                </div>
                <button className='card__button-delete' type='button' onClick={testim}>
                    <img className='card__delete-icon' src={deleteButton} alt='удалить продукт из списка'></img>
                </button>
            </div>
        </>
    )
}

export default Card