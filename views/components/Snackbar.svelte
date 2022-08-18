<script>
export let snackbarStyles;


</script>

<aside class="mdc-snackbar">
    <div class="mdc-snackbar__surface {snackbarStyles.surface}" role="status" aria-relevant="additions">
        <div class="mdc-snackbar__label" aria-atomic="false">
            {snackbarStyles.text}
        </div>
        <div class="mdc-snackbar__actions" aria-atomic="true">
            <button class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss">close</button>
        </div>
    </div>
</aside>