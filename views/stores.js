import {writable} from 'svelte/store'
import ApiCall from "../helpers/api_call";

//trae y actualiza la info de los formularios
const forms = () => {
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

export const formGate = forms()
//crea un modelo de snackbar base
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
//crea un modelo de objeto base
//stateCompany y stateAgent se usan para que no se asignen permanentemente las variables
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