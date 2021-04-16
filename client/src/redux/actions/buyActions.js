import axios from 'axios';

export const fetchItems = () => async dispatch => {
    axios.get('/api/buy')
        .then(data => {
            console.log(data)
            dispatch({type: FETCH_ITEMS, payload: res.data})
        })
        .catch(error => {
                console.log(error)
                dispatch({type:FETCH_ITEMS_ERROR, payload: error})
            })
}
