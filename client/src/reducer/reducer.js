import { GET_POKEMONS,
         GET_ALLTYPES,
         GET_DETAILS,
         CLEAN_DETAIL,
         POST_POKEMON, 
         CLEAN_POKEMONS,
         FILTER_CREATED,
         FILTER_TYPE,
         ORDER_ALPH,
         ORDER_ATTACK,
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
            let sortDb = backup; // Valor predeterminado
            if (action.payload === "created") {
                sortDb = backup.filter((e) => e.createdInBd);
                } else if (action.payload === "api") {
                  sortDb = backup.filter((e) => !e.createdInBd);
                }
                return {
                  ...state,
                  pokemons: sortDb,
                };
            
        case FILTER_TYPE:
            console.log("entre al filtertype case de reducer");
            let backup2 = state.pokemons;
            console.log(backup2);
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
                if(a.name.toUpperCase() > b.name.toUpperCase()){ return 1}
                if(b.name.toUpperCase() > a.name.toUpperCase()){ return -1}
                else{return 0}
            })
            : backup3.sort((a,b)=>{
                if(a.name.toUpperCase() > b.name.toUpperCase()){ return -1}
                if(b.name.toUpperCase() > a.name.toUpperCase()){ return 1}
                else{return 0}            })
            console.log(sortAZ);
            return {
                ...state,
                pokemons:sortAZ
            };
            

        case ORDER_ATTACK:
            console.log("entre a ORDER_ATTACK case de reducer");
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

