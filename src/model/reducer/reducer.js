const initState ={
    id : null,
    token: null,
    userData:{}
};

const reducer = (state = initState,action)=>{
    console.log(`reducerState:${state}`,`acction:${action.type}`);
    switch (action.type){
        case "UPDATE_ID":
            //console.log("updateId&stateBefore:",state);
            return {
                ...state,
                id:action.id
            }
        case "UPDATE_TOKEN":
            //console.log("updateToken&stateBefore:",state);
            return {
                ...state,
                token:action.token
            }
        case "UPDATE_USERDATA":
            //console.log("updateUserData&stateBefore:",state);
            return {
                ...state,
                userData:action.userData
            }
        default:
            break;
    };

    return state;
}

export default  reducer;