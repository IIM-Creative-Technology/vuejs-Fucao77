<template>
   <div class="bloc-modale" v-if="revele">
       <div class="overlay" v-on:click="toggleModale"></div>


    <div class="modale card">
        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
        <h2>Remplir les champs</h2>
        <form action="">
            <input type="text" name="Titre" placeholder="Titre">
            <input type="text" name="Meta Title" id="" placeholder="Meta title">
            <input type="text" name="" id="" placeholder="Meta Description">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <img src="" alt="">
            <a class="button is-sucess add-button" @click="submitTask"><button>Ajouter l'article </button></a>
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
            task: ''
        }
    },
    methods: {
        submitTask() {
            if (this.task != '') {
                this.$emit('newTask', this.task)
            }
            this.task = ''
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