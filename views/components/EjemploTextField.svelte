<script>
  export let field, label;
  export let required = false;
</script>

<label class="mdc-text-field mdc-text-field--filled">
  <span class="mdc-text-field__ripple"></span>
  <input type="text" class="mdc-text-field__input" aria-labelledby="{field}-label" name={field} {required}>
  <span class="mdc-floating-label" id="{field}-label">{label}</span>
  <span class="mdc-line-ripple"></span>
</label>