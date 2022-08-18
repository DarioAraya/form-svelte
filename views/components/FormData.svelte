<script>
export let response;

let economyActivity= '';
</script>

    <div class="grid-form form-title title-top dataCompany">Datos de la empresa</div>
    <!--Rut de la empresa-->
    <div class="grid-form rut">RUT de la empresa</div>
    <div class="grid-form form-input rut">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="rut_empresa">
        <span class="mdc-text-field__ripple rut"></span>
        <input class="mdc-text-field__input rut" type="text" placeholder="Escriba texto" aria-label="Label"
           bind:value={response.cpnCode} required/>
        <span class="mdc-line-ripple rut"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text" aria-hidden="true">
          {!response.cpnCode ? 'Ingrese un Rut' : ''}
        </div>
      </div>
    </div>
    <!--Razon social-->
    <div class="grid-form razon">Raz&#243;n social</div>
    <div class="grid-form form-input razon">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="razon_social">
        <span class="mdc-text-field__ripple razon"></span>
        <input class="mdc-text-field__input razon" type="text" placeholder="Escriba texto" aria-label="Label"
          bind:value={response.legalName} required />
        <span class="mdc-line-ripple razon"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text razon" aria-hidden="true">
          {!response.legalName ? 'Ingrese una Razón social':''}
        </div>
      </div>
    </div>
    <!--Direccion de la empresa-->
    <div class="grid-form direccion">Direcci&#243;n de la empresa</div>
    <div class="grid-form form-input direccion">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="direccion">
        <span class="mdc-text-field__ripple direccion"></span>
        <input class="mdc-text-field__input direccion" type="text" placeholder="Escriba texto" aria-label="Label"
        bind:value={response.cpnLegalAddress} required />
        <span class="mdc-line-ripple direccion"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text direccion" aria-hidden="true">
          {!response.cpnLegalAddress ? 'Ingrese una Dirección':''}
        </div>
      </div>
    </div>
    <!--Comuna-->
    <div class="grid-form comuna">Comuna</div>
    <div class="grid-form form-input comuna">
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--no-label" id="comuna">
        <span class="mdc-text-field__ripple comuna"></span>
        <input class="mdc-text-field__input comuna" type="text" placeholder="Escriba texto" aria-label="Label"
        bind:value={response.cpnLegalCounty} required />
        <span class="mdc-line-ripple comuna"></span>
      </label>
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text comuna" aria-hidden="true">
          {!response.cpnLegalCounty ? 'Ingrese una Comuna':''}
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
      <button type="submit" class="mdc-button mdc-button--raised">
        <span class="mdc-button__label">ENVIAR</span>
      </button>
    </div>
  
