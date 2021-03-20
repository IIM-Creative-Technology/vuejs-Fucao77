<template>
   <div class="bloc-modale" v-if="revele">
       <div class="overlay" v-on:click="toggleModale"></div>


    <div class="modale card">
        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
        <h2>Remplir les champs</h2>

        <form>
            <input type="text" name="Titre" placeholder="Titre" v-model="task">
            <input type="text" name="Meta_Title" id="" placeholder="Meta title" v-model="titre">
            <input type="text" name="" id="" placeholder="Meta Description" v-model="contenu">
            <textarea name="Contenu" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <img src="" alt="">
            <button @click="submitTask"> ajouter l'article l'article </button>
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
            description: ''
        }
    },
    methods: {
        submitTask() {
            if (this.task != '', this.titre != '', this.description != '') {
                this.$emit('newTask', this.task, this.titre, this.contenu)
            }
            this.task = ''
             this.titre = ''
              this.description = ''
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
