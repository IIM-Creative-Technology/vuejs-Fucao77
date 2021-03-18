<template>
    <div class="container my-5">
        <h1 class="mb-5"></h1>
        <CreatePage :revele="revele" :toggleModale="toggleModale"> </CreatePage>
        <div v-on:click="toggleModale" class="btn btn-sucess"> <button>Crée un article</button> </div>
    </div>
</template>

<script>

import CreatePage from './CreatePage.vue'
export default {
    name: "Contenu",
    data(){
        return {
            revele: false
        };
    },

  components: { 
      CreatePage 
      
    },
    methods: {
        toggleModale: function() {
            this.revele = !this.revele;
        }
    }
    
}
</script>