<script>
import {callData,snack,response} from '../stores';
export let snackbar;
export let id;
let legalAgentCode='';
let legalAgentName='';
let legalAgentEmail='';
let disableButton=false;

$: if($response.stateAgent){
  let res = {...$response};
  legalAgentCode = res.legalAgentCode;
  legalAgentName = res.legalAgentName;
  legalAgentEmail= res.legalAgentEmail;
  response.mostrar({...res, stateAgent:false});
}

const sendDataAgent=async()=>{
  disableButton = true;
  const body = {
    legalAgentCode: legalAgentCode,
    legalAgentName:legalAgentName,
    legalAgentEmail:legalAgentEmail,
  }
  try {
    let data = await callData.put(id,body);
    if (data != undefined) {
        //se asignan los nuevos valores al value 
        legalAgentCode = data.legalAgentCode;
        legalAgentName = data.legalAgentName;
        legalAgentEmail = data.legalAgentEmail;
        snack.mostrar({surface: 'success', text:'Se ha registrado tu información.'});
        snackbar.open();
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
<!--Representante legal-->
<form class="grid-item grid-item-5 shadow" on:submit|preventDefault={sendDataAgent} id="agentDataForm">
    <div class="grid-form form-title title-top data">Datos del representante legal</div>
    <!--Rut representante-->
    <div class="grid-form legal">RUT del representante legal</div>
    <div class="grid-form form-input legal">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="legal">
        <span class="mdc-text-field__ripple legal"></span>
        <input class="mdc-text-field__input legal" type="text" placeholder="Escriba texto" aria-label="Label"
          bind:value={legalAgentCode} required />
        <span class="mdc-line-ripple legal"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text legal" aria-hidden="true">
          {!legalAgentCode ? 'Ingrese un Rut' : ''}
        </div>
      </div>
    </div>
  
    <!--Nombre representante-->
    <div class="grid-form nombre">Nombre del representante legal</div>
    <div class="grid-form form-input nombre">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="nombre">
        <span class="mdc-text-field__ripple nombre"></span>
        <input class="mdc-text-field__input nombre" type="text" placeholder="Escriba texto" aria-label="Label"
          bind:value={legalAgentName} required />
        <span class="mdc-line-ripple nombre"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text nombre" aria-hidden="true">
          {!legalAgentName ? 'Ingrese un Nombre' : ''}
        </div>
      </div>
    </div>
  
    <!--Email representante-->
    <div class="grid-form email">Email del representante legal</div>
    <div class="grid-form form-input email">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="email">
        <span class="mdc-text-field__ripple email"></span>
        <input class="mdc-text-field__input email" type="email" placeholder="Escriba texto" aria-label="Label"
          bind:value={legalAgentEmail} required />
        <span class="mdc-line-ripple email"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text email" aria-hidden="true">
          {#if !legalAgentEmail || legalAgentEmail.indexOf("@") == -1}
            {'Ingrese un Email valido'}
          {/if}
        </div>
      </div>
    </div>
  
    <!--Rut vigente-->
    <div class="grid-form rut-vigente">Rut vigente</div>
    <div class="grid-form form-input rut-vigente">
      <div class="grid-form input-attach front">
        <button type="button" id="attach_file" class="mdc-icon-button button1" aria-label="attach_file"
          aria-pressed="false">
          <div class="mdc-icon-button__ripple front"></div>
          <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_top">attach_file</i>
          <i class="material-icons mdc-icon-button__icon" id="i_top2">attach_file_border</i>
        </button>
        RUT parte frontal
      </div>
      <div class="grid-form input-attach back">
        <button type="button" id="attach_file" class="mdc-icon-button button2" aria-label="attach_file"
          aria-pressed="false">
          <div class="mdc-icon-button__ripple back"></div>
          <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" id="i_back">attach_file</i>
          <i class="material-icons mdc-icon-button__icon" id="i_back2">attach_file_border</i>
        </button>
        RUT parte trasera
      </div>
    </div>
  
    <!--Certificado digital-->
    <div class="grid-form certificado">¿Tiene certificado digital?</div>
    <div class="grid-form form-input certificado mdc-form-field">
      <div class="mdc-radio radio-1">
        <input class="mdc-radio__native-control radio-1" type="radio" id="radio-1" name="radios" checked>
        <div class="mdc-radio__background radio-1">
          <div class="mdc-radio__outer-circle radio-1"></div>
          <div class="mdc-radio__inner-circle radio-1"></div>
        </div>
        <div class="mdc-radio__ripple radio-1"></div>
      </div>
      <label for="radio-1" id="yes">Si</label>
  
  
      <div class="mdc-radio radio-2">
        <input class="mdc-radio__native-control radio-2" type="radio" id="radio-2" name="radios">
        <div class="mdc-radio__background radio-2">
          <div class="mdc-radio__outer-circle radio-2"></div>
          <div class="mdc-radio__inner-circle radio-2"></div>
        </div>
        <div class="mdc-radio__ripple radio-2"></div>
      </div>
      <label for="radio-2" id="no">No</label>
    </div>
  
    <!--Boton-->
    <div class="grid-form button-2"></div>
    <div class="grid-form form-input form-button button-2">
      <button type="submit" class="mdc-button mdc-button--raised button-2" disabled='{disableButton}'>
        <span class="mdc-button__label button-2">ENVIAR</span>
      </button>
    </div>
  </form>