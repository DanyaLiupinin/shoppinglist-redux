import { useState } from 'react'
import './SearchForm.css'
import { useDispatch, useSelector } from 'react-redux'

function SearchForm() {

    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState('')

    const dispatch = useDispatch()
    const cards = useSelector(state => state.reduxCards)

    function onInputChange(e) {

        if (e.target.name === 'product') {
            setProductName(e.target.value)
        }

        if (e.target.name === 'amount') {
            setProductAmount(e.target.value)
        }
    }


    function onSubmitForm(e) {
        e.preventDefault()

        dispatch({
            type: "ADD_CARD",
            payload: {
                title: productName,
                amount: productAmount,
                id: Math.random(),
            }
        })
    }

    return (
        <form className="form" name="container__form" action="#" method="post"
            onSubmit={onSubmitForm}
        >
            <input type="text" placeholder="Название продукта" className="form__input form__input_type_product" onChange={onInputChange} required maxLength="60" name='product' value={productName} />
            <input type="text" placeholder="Количество" className="form__input form__input_type_amount" onChange={onInputChange} required maxLength="10" name='amount' value={productAmount} />
            <button type="submit" className="form__add-button">+</button>
        </form>
    )
}

export default SearchForm