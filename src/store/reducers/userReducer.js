const initialState={}

    export default (state = initialState, action) => {
        console.log("action", action);
        switch (action.type) {
            case 'GETUSERS': return {
                ...state, users: action.payload
            }
        
            default: return state;
        }
    }
