import { contactTypes } from "../constants"



export const addContact = (contact)=>{
    return{
        type: contactTypes.CREATE_CONTACT,
        payload:contact 
    }
}