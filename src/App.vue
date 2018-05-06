<template>

 
  <!-- <div class="layout">
    <Layout>
    <Header>
     
    <web-header>
    </web-header>  
    </Header> 
    <web-content>
    </web-content>

    <web-footer>
    </web-footer>

    
    </Layout>
  </div> -->

  <welcome-page>
  </welcome-page>  



</template>

<script>
  import footer from './components/Footer.vue';
  import content from './components/Content.vue';
  import aboutUs from './components/AboutUs';
  import menu from './components/Menu';
  import welcomePage from './components/MainPage'

  export default {
    components:{
      'web-header':menu,
      'web-content': content,
      'web-footer' : footer,
      'welcome-page':welcomePage
    }

  }

 
 
</script>

<style>




</style>
