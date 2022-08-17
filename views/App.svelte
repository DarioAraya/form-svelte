<script>
import FormAgent from "./components/FormAgent.svelte";
import FormData from "./components/FormData.svelte";
import Menu from "./components/Menu.svelte";
import Snackbar from "./components/Snackbar.svelte";
import Topbar from "./components/Topbar.svelte";


</script>

<!--navbar-->
<div class="grid-item grid-item-1">
<Topbar/>
</div>
<Snackbar/>
<!--menu-->
<div class="grid-item grid-item-2 shadow" id="menu-item">
<Menu/>
</div>

<!--content-->
<div class="grid-item grid-item-3" id="content-item">
  <FormData/>
  <FormAgent/>
</div>

