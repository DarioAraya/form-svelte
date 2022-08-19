<script>
import {formGate,snack,response} from '../stores';
export let snackbar;
export let id;
export let dataAgent;
let cpnCode='';
let legalName='';
let cpnLegalAddress='';
let cpnLegalCounty='';
let economyActivity='';
let disableButton=false;
//si stateCompany es true, se le asignan a los inputs el valor inicial que trajo la llamada get en App.svelte
$: if($response.stateCompany){
  let res = {...$response};
  cpnCode = res.cpnCode;
  legalName = res.legalName;
  cpnLegalAddress=res.cpnLegalAddress;
  cpnLegalCounty=res.cpnLegalCounty;
  economyActivity=res.economyActivity;
  response.mostrar({...res, stateCompany:false});
}
//se toman los valores actuales de los inputs y se sobrescriben con los de la llamda put
const sendDataCompany=async()=>{
  disableButton = true;
  const body = {
    cpnCode: cpnCode,
    legalName:legalName,
    cpnLegalAddress:cpnLegalAddress,
    cpnLegalCounty:cpnLegalCounty,
    economyActivity:economyActivity
  }
  try {
    let data = await formGate.put(id,body);
    if (data != undefined) {
        //se asignan los nuevos valores al value 
        cpnCode = data.cpnCode;
        legalName = data.legalName;
        cpnLegalAddress = data.cpnLegalAddress;
        cpnLegalCounty = data.cpnLegalCounty;
        economyActivity = data.economyActivity;
        //llamando al snackbar
        snack.mostrar({surface: 'success', text:'Se ha registrado tu información.'});
        snackbar.open();
        dataAgent.scrollIntoView();
        disableButton = false;
      }else{
        snack.mostrar({surface: 'danger', text:`Sin respuesta del servidor.`});
        snackbar.open();
        disableButton = false;
      }
  } catch (error) {
      snack.mostrar({surface: 'danger', text:`Sin respuesta del servidor. ${error.message}`});
      snackbar.open();
      disableButton = false;
  }
}

</script>

<form class="grid-item grid-item-4 shadow" on:submit|preventDefault={sendDataCompany} id="companyDataForm">
<div class="grid-form form-title title-top dataCompany">Datos de la empresa</div>
<!--Rut de la empresa-->
<div class="grid-form rut">RUT de la empresa</div>
<div class="grid-form form-input rut">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="rut_empresa">
    <span class="mdc-text-field__ripple rut"></span>
    <input class="mdc-text-field__input rut" type="text" placeholder="Escriba texto" aria-label="Label"
       bind:value={cpnCode} required/>
    <span class="mdc-line-ripple rut"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text" aria-hidden="true">
      {!cpnCode ? 'Ingrese un Rut' : ''}
    </div>
  </div>
</div>
<!--Razon social-->
<div class="grid-form razon">Raz&#243;n social</div>
<div class="grid-form form-input razon">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="razon_social">
    <span class="mdc-text-field__ripple razon"></span>
    <input class="mdc-text-field__input razon" type="text" placeholder="Escriba texto" aria-label="Label"
      bind:value={legalName} required />
    <span class="mdc-line-ripple razon"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text razon" aria-hidden="true">
      {!legalName ? 'Ingrese una Razón social':''}
    </div>
  </div>
</div>
<!--Direccion de la empresa-->
<div class="grid-form direccion">Direcci&#243;n de la empresa</div>
<div class="grid-form form-input direccion">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="direccion">
    <span class="mdc-text-field__ripple direccion"></span>
    <input class="mdc-text-field__input direccion" type="text" placeholder="Escriba texto" aria-label="Label"
    bind:value={cpnLegalAddress} required />
    <span class="mdc-line-ripple direccion"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text direccion" aria-hidden="true">
      {!cpnLegalAddress ? 'Ingrese una Dirección':''}
    </div>
  </div>
</div>
<!--Comuna-->
<div class="grid-form comuna">Comuna</div>
<div class="grid-form form-input comuna">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="comuna">
    <span class="mdc-text-field__ripple comuna"></span>
    <input class="mdc-text-field__input comuna" type="text" placeholder="Escriba texto" aria-label="Label"
    bind:value={cpnLegalCounty} required />
    <span class="mdc-line-ripple comuna"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text comuna" aria-hidden="true">
      {!cpnLegalCounty ? 'Ingrese una Comuna':''}
    </div>
  </div>
</div>
<!--Actividad economica-->
<div class="grid-form actividad">Actividad econ&#243;mica</div>
<div class="grid-form form-input actividad">
  <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="actividad">
    <span class="mdc-text-field__ripple actividad"></span>
    <input class="mdc-text-field__input actividad" type="text" placeholder="Escriba texto" aria-label="Label" bind:value={economyActivity}
      required />
    <span class="mdc-line-ripple actividad"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text actividad" aria-hidden="true">
      {!economyActivity ? 'Ingrese una Actividad económica':''}
    </div>
  </div>
</div>
<!--Boton-->
<div class="grid-form botton"></div>
<div class="grid-form form-input form-button">
  <button type="submit" class="mdc-button mdc-button--raised" disabled='{disableButton}'>
    <span class="mdc-button__label">ENVIAR</span>
  </button>
</div>
</form>
    
