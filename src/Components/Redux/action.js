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
    fetch("https://project-adnanchicken.herokuapp.com/data")
        .then((r) => {
          return r.json();
        })
        .then((d) => {
            // console.log(d,"data inner fun")
            dispatch(getDataSuccess(d))
        })
        .catch(err =>{
            dispatch(getDataFailure())
        })

}