import {writable} from 'svelte/store'
import ApiCall from "../helpers/api_call";

const data = () => {
    const {subscribe, set, update} = writable('')

    return {
        subscribe,
        get: (async(id)=>{
            const {data} = await ApiCall.request(`/formulario/gateway/${id}.json`, 'get');
            return data;
          }),
        put: (async(id,body)=>{
            const {data} = await ApiCall.request(`/formulario/gateway/${id}.json`, 'put',{}, body);
            return data;
        }),
        
    }
}

export const callData = data()

const createSnackbar = () =>{
    const {subscribe,set,update} = writable({
        surface: '', text: '', estado:false
    });
    
    return {
        subscribe,
        mostrar: (opciones) =>{
            update(n=>n=opciones)
        }
    }
}

export const snack = createSnackbar()

const createObject = () =>{
    const {subscribe,set,update} = writable({
        cpnCode: '',legalName:'',cpnLegalAddress:'',cpnLegalCounty:'', economyActivity:'',legalAgentCode:'',legalAgentName:'',legalAgentEmail:'', stateCompany:false,stateAgent:false
    });

    return {
        subscribe,
        mostrar: (opciones) =>{
            update(n=>n=opciones)
        },
    }
}

export const response = createObject()