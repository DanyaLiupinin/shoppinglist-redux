import { useState } from 'react'
import './SearchForm.css'

function SearchForm(props) {

    const [productName, setProductName] = useState('')
    const [productAmount, setProductAmount] = useState('')

    function onInputChange (e) {

        if (e.target.name === 'product') {
            setProductName(e.target.value)
        }

        if (e.target.name === 'amount') {
            setProductAmount(e.target.value)
        }
    }


    function onSubmitForm (e) {
        e.preventDefault()
        props.searchFormSubmit(productName, productAmount)
    }

    return (
        <form className="form" name="container__form" action="#" method="post" onSubmit={onSubmitForm} >
            <input type="text" placeholder="Название продукта" className="form__input form__input_type_product" onChange={onInputChange} required maxLength="60" name='product' value={productName} />
            <input type="text" placeholder="Количество" className="form__input form__input_type_amount" onChange={onInputChange} required maxLength="10" name='amount' value={productAmount} />
            <button type="submit" className="form__add-button">+</button>
        </form>
    )
}

export default SearchForm