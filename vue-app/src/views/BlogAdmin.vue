<template>
  <div class="block">
    <h1>Gestion des article</h1>

    <ButtonCreate> </ButtonCreate>


   

    <div class="content">
      <Article> </Article>
    </div>

  </div>


</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonCreate from "../components/ButtonCreate.vue";
import Article from "../components/Article.vue";

export default {
  name: "admin",
  components: { ButtonCreate, Article },

  methods: {
    ...mapActions(["addTask"]),
  },

  computed: {
    ...mapState(["tasks"]),
  },
};
</script>

<style scoped>




</style>
