<script>
  export let company
  export let agent
  export let dataCompany
  export let dataAgent
  company=true;
 
  const scrollCompany = () =>{
    dataCompany.scrollIntoView();
  }

  const scrollAgent = () =>{
    dataAgent.scrollIntoView();
  }

  //si company o agent es true, el elemento del menu cambiara sus estilos

</script>

<div class="grid-menu menu-title">
  <span class="menu-title-top"> BARRERA Y GENTINA LIMITADA </span>
  <span class="menu-title-bottom"> RUT 23479874-3</span>
</div>
<ul class="mdc-deprecated-list">
  <li class="mdc-deprecated-list-item menu" class:on-focus={company} tabindex="0" on:click={scrollCompany}>
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text" class:selected={company}>Datos de la empresa</span>
  </li>
  <li class="mdc-deprecated-list-item menu" class:on-focus={agent} on:click={scrollAgent}>
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text" class:selected={agent}>Datos del representante legal</span>
  </li>
  <li class="mdc-deprecated-list-item menu">
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text">Datos para env&#237;o de la facturaci&#243;n</span>
  </li>
  <li class="mdc-deprecated-list-item menu">
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text">&#191;Qui&#233;n implementar&#225; Bsale?</span>
  </li>
  <li class="mdc-deprecated-list-item menu">
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text">Informaci&#243;n para tu proceso</span>
  </li>
  <li class="mdc-deprecated-list-item menu">
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text">Informaci&#243;n para tus documentos</span>
  </li>
  <li class="mdc-deprecated-list-item menu">
    <span class="mdc-deprecated-list-item__ripple"></span>
    <span class="mdc-deprecated-list-item__text">Capacitaci&#243;n</span>
  </li>
</ul>