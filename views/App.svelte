<script>
import FormAgent from "./components/FormAgent.svelte";
import FormData from "./components/FormData.svelte";
import Menu from "./components/Menu.svelte";
import Snackbar from "./components/Snackbar.svelte";
import Topbar from "./components/Topbar.svelte";
import ApiCall from "../helpers/api_call";
import {onMount} from 'svelte';
import { MDCSnackbar } from '@material/snackbar';

let params = (new URL(document.location)).searchParams;
let id = params.get("id");
let response={};
let containerForms;
let dataCompany;
let dataAgent;
let company = false;
let agent = false;
const calculate = () =>{
  let dataCompany_top_offset=dataCompany.offsetTop;
  let dataCompany_bottom_offset =
  dataCompany.offsetHeight + dataCompany_top_offset;
  let dataAgent_top_offset = dataAgent.offsetTop;
  let dataAgent_bottom_offset = dataAgent.offsetHeight + dataAgent_top_offset;
  let screen_top_offset = containerForms.scrollTop;
  let screen_bottom_offset = screen_top_offset + window.innerHeight;

  if (dataCompany_top_offset > screen_top_offset && screen_bottom_offset > dataCompany_bottom_offset){
    company = true;
  }else{
    company = false;
  }
  if ( dataAgent_top_offset > screen_top_offset && screen_bottom_offset > dataAgent_bottom_offset) {
    agent = true;
  } else {
    agent = false;
  }
}

let snackbar;
let snackbarStyles = {
  surface: '',
  text: '',
}

onMount(async()=>{
  const divSnackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  snackbar = divSnackbar;

  try {
    const {data} = await ApiCall.request(`/formulario/gateway/${id}.json`, 'get');
    response = data.data;

  } catch (error) {
    snackbarStyles.surface='danger';
    snackbarStyles.text=`Sin respuesta del servidor (${error.message}).`;
    snackbar.open();
  }
})



const sendDataCompany=async(e)=>{

  snackbarStyles.surface='success';
  snackbarStyles.text='Se ha registrado tu información.';
  snackbar.open();
}

const sendDataAgent=()=>{
  snackbarStyles.surface='success';
  snackbarStyles.text='Se ha registrado tu información.';
  snackbar.open();
}


</script>

<!--navbar-->
<div class="grid-item grid-item-1">
<Topbar/>
</div>
<Snackbar {snackbarStyles}/>
<!--menu-->
<div class="grid-item grid-item-2 shadow" id="menu-item">
<Menu {company}{agent}{dataCompany}{dataAgent}/>
</div>

<!--content-->
<div class="grid-item grid-item-3" id="content-item" bind:this={containerForms} on:scroll={calculate}>
  <form class="grid-item grid-item-4 shadow" bind:this={dataCompany} on:submit|preventDefault={sendDataCompany}>
    <FormData {response}/>
  </form>
  <form class="grid-item grid-item-5 shadow" bind:this={dataAgent} on:submit|preventDefault={sendDataAgent}>
    <FormAgent {response}/>
  </form>
</div>

