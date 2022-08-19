<script>
import { snack } from '../stores';   
export let snackbar;

$: if($snack.estado){
    snackbar.open()
}


</script>

<aside class="mdc-snackbar">
    <div class="mdc-snackbar__surface {$snack.surface}" role="status" aria-relevant="additions">
        <div class="mdc-snackbar__label" aria-atomic="false">
            {$snack.text}
        </div>
        <div class="mdc-snackbar__actions" aria-atomic="true">
            <button class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss">close</button>
        </div>
    </div>
</aside>