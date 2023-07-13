import { GET_POKEMONS,
         GET_ALLTYPES,
         GET_DETAILS,
         CLEAN_DETAIL,
         POST_POKEMON, 
         CLEAN_POKEMONS,
         FILTER_CREATED,
         FILTER_TYPE,
         ORDER_ALPH,
         ORDER_STR,
         GET_POKEMON_NAME
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
        case GET_ALLTYPES:
            return{
                ...state,
                types: action.payload
            };
        case POST_POKEMON:
            console.log("post poke reducer case reached");
            return{
                ...state
            };
        case CLEAN_POKEMONS:
            return {
                ...state,
                types: action.payload
            }
        case FILTER_CREATED:
            let backup = state.allPokemons;
            let sortDb;
            if (action.payload==="created"){
                sortDb = backup.filter(e=>e.createdInDb);
            }else if (action.payload==="api"){
                sortDb=backup.filter(e => !e.createdInDb );
            }else{
                sortDb = backup;
            }
            return {
                ...state,
                pokemons: sortDb
            };
        case FILTER_TYPE:
            let backup2 = state.pokemons;
            let sortType = action.payload ==="all" 
                ? backup2
                : backup2.filter(e=>e.types.some(e=>e.name===action.payload));
            if (sortType.length<=0){
                sortType=backup2;
                console.log("There is no Pokemon of the indicated type");
            };
            return {
                ...state,
                pokemons:sortType
            }
        case ORDER_ALPH:
            let backup3 = state.pokemons;
            let sortAZ = action.payload==="asc"
            ? backup3.sort((a,b)=>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
            : backup3.sort((a,b)=>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
            return {
                ...state,
                pokemons:sortAZ
            };
        case ORDER_STR:
            let backup4= state.pokemons;
            let sortStr = action.payload ==="asc"
            ? backup4.sort((a,b)=>a.attack-b.attack)
            : backup4.sort((a,b)=>b.attack-a.attack);
            return {
                ...state,
                pokemons:sortStr
            };
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload
            };
    default:
        return {...state};
}
};

export default rootReducer;

