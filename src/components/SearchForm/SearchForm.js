import './SearchForm.css'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SearchForm() {

    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState('')

    const dispatch = useDispatch()
    const reduxCards = useSelector(state => state.reduxCards)

    function onSubmitForm(e) {
        e.preventDefault()

        dispatch({
            type: "ADD_CARD",
            payload: {
                title: productName,
                amount: productAmount,
                id: reduxCards.length + 1,
            }
        })
    }

    return (
        <form className="form" name="container__form" action="#" method="post"
            onSubmit={onSubmitForm}
        >
            <input type="text" placeholder="Название продукта" className="form__input form__input_type_product" onChange={(e) => {setProductName(e.target.value)}} required maxLength="60" name='product' value={productName} />
            <input type="text" placeholder="Количество" className="form__input form__input_type_amount" onChange={(e) => {setProductAmount(e.target.value)}} required maxLength="10" name='amount' value={productAmount} />
            <button type="submit" className="form__add-button">+</button>
        </form>
    )
}

export default SearchForm