import initialState from "../utils/constants"

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_CARD":
            return {
                ...state,
                reduxCards: [...state.reduxCards, action.payload]
            }

        case "DELETE_CARD":

            return {
                ...state,
                reduxCards: state.reduxCards.filter(el => el.id !== action.payload.id)
            }

        default:
            return state
    }
}

export default cardsReducer