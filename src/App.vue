<template>

 
  <div class="layout">
    <Layout>
    <Header>
     
    <web-header>
    </web-header>  

    <!-- <web-context>
    </web-context>

    <web-footer>
    </web-footer> -->

    </Header> 
    </Layout>
  </div>
</template>

<script>
  import footer from './components/Footer.vue';
  import context from './components/Context.vue';
  import aboutUs from './components/AboutUs';
  import menu from './components/Menu';

  export default {
    components:{
      'web-header':menu
      // 'web-context': context,
      // 'web-footer' : footer,
      
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
    /* background-image: url("./assets/background.jpg"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .cover-container {
    max-width: 42em;
  }


</style>
