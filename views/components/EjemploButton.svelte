<script>
  export let type = "submit";
</script>

<div class="mdc-touch-target-wrapper">
  <button class="mdc-button mdc-button--touch" {type} on:click>
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__touch"></span>
    <span class="mdc-button__label"><slot /></span>
  </button>
</div>