const SET_USER = 'SET_USER'
const SET_LOG_OUT = 'SET_LOG_OUT'

let initialState = {
    authorized: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user, authorized: true }
        case SET_LOG_OUT:
            return { ...state, user: null, authorized: false }
        default:
            return state;
    }
}

const setUser = (user) => ({ type: SET_USER, user })
const setLogout = () => ({ type: SET_LOG_OUT })

export const authorize = () => async (dispatch) => {
    dispatch(setUser({
        firstName: 'Иван',
        lastName: 'Иванов',
        fatherName: 'Иванович',
        mail: 'ivanov@mail.ru',
        phone: '+7 777 777 77 77'
    }))
}

export const logout = () => async (dispatch) => {
    dispatch(setLogout())
}

export default authReducer;
