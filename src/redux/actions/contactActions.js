import { contactTypes } from "../constants"



export const addContact = (contact)=>{
    return{
        type: contactTypes.CREATE_CONTACT,
        payload:contact 
    }
}


//new way of return object with out return keyword
export const getContact=(id)=>({
    type:contactTypes.GET_CONTACT,
    payload:id

})