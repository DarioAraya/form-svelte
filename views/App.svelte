<script>
import FormAgent from "./components/FormAgent.svelte";
import FormData from "./components/FormData.svelte";
import Menu from "./components/Menu.svelte";
import Snackbar from "./components/Snackbar.svelte";
import Topbar from "./components/Topbar.svelte";
import {onMount} from 'svelte';
import { MDCSnackbar } from '@material/snackbar';
import {callData,snack,response} from './stores';

let params = (new URL(document.location)).searchParams;
let id = params.get("id");
let containerForms;
let dataCompany;
let dataAgent;
let company = false;
let agent = false;


let snackbar;

onMount(async()=>{
  const divSnackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
  snackbar = divSnackbar;
  let divDataCompany = document.querySelector('#companyDataForm');
  let divDataAgent = document.querySelector('#agentDataForm');
  dataCompany=divDataCompany;
  dataAgent=divDataAgent;
  try {
    let {data} = await callData.get(id)

    response.mostrar({
      cpnCode: data.cpnCode,
      legalName:data.legalName,
      cpnLegalAddress:data.cpnLegalAddress,
      cpnLegalCounty:data.cpnLegalCounty, 
      economyActivity:'',
      legalAgentCode: data.legalAgentCode,
      legalAgentName: data.legalAgentName,
      legalAgentEmail: data.legalAgentEmail,
      stateCompany:true,
      stateAgent:true
    })

  } catch (error) {
    console.log(error);
    snack.mostrar({surface:'danger',text:`Ha ocurrido un error. (${error.message})`,estado:true})
    snackbar.open();
  }
})

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

</script>

<!--navbar-->
<div class="grid-item grid-item-1">
<Topbar/>
</div>
<Snackbar {snackbar}/>
<!--menu-->
<div class="grid-item grid-item-2 shadow" id="menu-item">
<Menu {company}{agent}{dataCompany}{dataAgent}/>
</div>

<!--content-->
<div class="grid-item grid-item-3" id="content-item" bind:this={containerForms} on:scroll={calculate}>
 
    <FormData {snackbar}{id}{dataAgent}/>

 
    <FormAgent {snackbar}{id}/>

</div>

