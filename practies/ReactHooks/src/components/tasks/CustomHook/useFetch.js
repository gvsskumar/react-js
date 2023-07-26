import {useReducer,useEffect} from "react";
import axios from "axios";

const ACTIONS ={
    API_REQUEST:"api-request",
    FETCH_DATA:"fetch-data",
    ERROR:"error"
}
const initialState ={
    data:[],
    loading:false,
    error:null
}
function reducer(state,{type,payload}){
    //console.log(payload.data)
    switch(type){
        case ACTIONS.API_REQUEST:
            return {...state,data:[],loading:true}
        case ACTIONS.FETCH_DATA:
            return {...state,data:payload,loading:false}
        case ACTIONS.ERROR:
            return {...state,data:[],error:payload,loading:false}    
        default:
            return state;    
    }
}
function useFetch(url){
    const [state,dispatch] = useReducer(reducer,initialState)
   useEffect(()=>{
    dispatch({type:ACTIONS.API_REQUEST})
    axios.get(url).then((res)=>{
       
        dispatch({type:ACTIONS.FETCH_DATA,payload:res.data.splice(10,10)});
    }).catch((e)=>{
        console.log(e.message);
        dispatch({type:ACTIONS.ERROR,payload:e.message})
    })
   },[url])
    return state;
}
export default useFetch;