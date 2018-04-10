<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

    <web-context>
    </web-context>

    <web-footer>
    </web-footer>

  </div>
</template>

<script>
  import footer from './components/Footer.vue';
  import context from './components/Context.vue';
  import aboutUs from './components/AboutUs';

  export default {
    components:{
      'web-context': context,
      'web-footer' : footer
    }

  }
</script>

<style>

  /* Links */
  a,
  a:focus,
  a:hover {
    color: #fff;
  }

  /*
  * Base structure
  */

  html,
  body {
    height: 100%;
    background-color: #333;
  }

  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
    background-image: url("./assets/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .cover-container {
    max-width: 42em;
  }


</style>
