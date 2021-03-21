<template>
   <div class="bloc-modale" v-if="revele">
       <div class="overlay" v-on:click="toggleModale"></div>


    <div class="modale card">
        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
        <h2>Remplir les champs</h2>

        <form @submit="postData" method="post">
            <input type="text" name="titre" placeholder="Titre" v-model="task">
            <input type="text" name="meta_title" id="subtitle" placeholder="Meta title" v-model="subtitle">
            <input type="text" name="meta_description" id="" placeholder="Meta Description" v-model="meta_description">
            <textarea name="Contenu" id="" cols="30" rows="10" placeholder="Message" v-model="contenu"></textarea>
            <img src="" alt="">
            <button type="submit"> ajouter l'article l'article </button>
        </form>
        </div>
    
    </div>
   
</template>


<script>
export default {
    name: 'Page',
    props: ["revele", "toggleModale"],

    //Ajout de l'article
    data () {
       return {
               task: '',
               titre: '',
               meta_description: '',
               contenu: '',
       }
    },
    methods: {
      submitTask() {
        if (this.task != '') {
          this.$emit('newTask', this.task)
        }
        this.task = ''

        if (this.titre != '') {
          this.$emit('newTask', this.titre)
        }
        this.titre = ''

           if (this.meta_description != '') {
          this.$emit('newTask', this.meta_description)
        }
        this.meta_description = ''

          if (this.contenu != '') {
          this.$emit('newTask', this.contenu)
        }
        this.contenu = ''

      }
    }
        
    }
</script>



<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

h2 {
    color: #fff;
}


form {
    display: flex;
    flex-direction: column;
}

.modale {
  background: #1670c4;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
