import USER_DATA from './user-data';

const INITIAL_STATE = {
    userProfile: USER_DATA
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return {...state}; 
    }
};

export default userReducer;