import { GET_POKEMONS,
         GET_DETAILS,
         CLEAN_DETAIL
} from "./actions";

const initialState = {
    pokemons:[],
    allPokemons:[],
    types:[],
    pokeDetail:[]
};

const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons:action.payload,
                allPokemons:action.payload
            };
        case GET_DETAILS:
            return{
                ...state,
                pokeDetail: action.payload
            };
        case CLEAN_DETAIL:
            return{
                ...state,
                pokeDetail: action.payload
            };
    default:
        return state;
}
};

export default rootReducer;

