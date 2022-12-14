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


export const updateContact=(contact)=>({
    type:contactTypes.UPDATE_CONTACT,
    payload:contact
})


export const deleteContact=(payload)=>({
    type:contactTypes.DELETE_CONTACT,
    payload:payload
})


export const SelectAllContact=(id)=>({
    type:contactTypes.SELECT_CONTACTS,
    payload:id
})


export const clearSelection=()=>({
    type:contactTypes.CLEAR_CONTACTS, 
})


export const deleteAllContacts=()=>({
    type:contactTypes.DELETE_ALL_CONTACTS, 
})