const initialState = {
    allProduct: [],
    productType: '',
    minPrice: '',
    maxPrice: '',
}

const TaskEvent = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCT":
            {
                return {
                    ...state,
                    allProduct: [
                        ...action.data,
                    ],
                }
            }
        case "FILTER_TYPE":
            {
                return {
                    ...state,
                    productType: action.productType,
                }
            }
        case "FILTER_MIN_PRICE":
            {
                return {
                    ...state,
                    min: action.min,
                }
            }
        case "FILTER_MAX_PRICE":
            {
                return {
                    ...state,
                    max: action.max,
                }
            }
        default:
            return state
    }
}

export default TaskEvent