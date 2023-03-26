import axios from "axios"


export const getUsers = () => {



    return async (dispatch) => {
        try {
            await axios.get(`http://localhost:3002/users`).then((e) => (

            dispatch({
                type: "GETUSERS",
                payload:e.data
            })
            ));
            
        } catch (error) {
            
        }
    }
}