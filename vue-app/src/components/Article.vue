<template>
    <div class="content">
        <div class="field is-grouped" v-for="(task,index) in task" :key="(task,index)">
          
        <create-page @newTask="addTask" />

        </div>
    </div>
</template>


<script>
import CreatePage from './CreatePage.vue'
export default {
  components: { CreatePage },
    
}
</script>