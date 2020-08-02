export default function (state={}, action){
    switch(action.type){
        case "FETCH_POSTS":
            return{
                ...state,
                posts: action.payload
            }
            case "NEW_POST":
                return{
                    ...state,
                    newPost:state.newPost.concat(action.payload)
                }

            default: return state
    }
   
}

