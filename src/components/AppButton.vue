<template>
  <div class="buttonContainer">
      <button type="button" class="appButton" @click="addStudent">Add Student</button>
  </div>
</template>

<script>
export default {
    name:"AppButton",
    methods: {
        addStudent() {
            this.$emit('add-student-form')
        }
    }
}
</script>

<style>

</style>