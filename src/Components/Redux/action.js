import * as types from "./actionTypes"

const getDataSuccess =(payload)=>{
    return {type:types.GETDATASUCCESS,payload}
}
const getDataRequest =()=>{
    return {type:types.GETDATAREQUEST}
}
const getDataFailure =()=>{
    return {type:types.GETDATAFAILURE}
}









export const getData = () =>(dispatch)=>{
    // console.log("data inner fun")
    dispatch(getDataRequest())
    fetch("https://apimockeradnanchicken.onrender.com/adnanChickendata")
        .then((r) => {
          return r.json();
        })
        .then((d) => {
       
         
            dispatch(getDataSuccess(d))
        })
        .catch(err =>{
            dispatch(getDataFailure())
        })

}