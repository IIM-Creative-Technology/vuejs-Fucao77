<template>
    <div class="content">
    
    <div class="field is-grouped" v-for="(task, index) in tasks" :key="(task, index)">

      <p class="control is-expanded has-text-left" :class="{'checked': task.checked}" v-bind:id=task.description>
            {{task.description}}
      </p>

    </div>


    </div> 
</template>


<script>
import CreatePage from './CreatePage.vue'

export default {
  components: { CreatePage },

  
 
    
}
</script>