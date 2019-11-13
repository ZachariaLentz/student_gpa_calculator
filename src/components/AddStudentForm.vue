<template>
  <form @submit="addStudent">
      <input type="text" name="name" placeholder="Name..." v-model="name" />
      <input type="text" name="math" placeholder="Math Grade..." v-model="math" />
      <input type="text" name="history" placeholder="History Grade..." v-model="history" />
      <input type="text" name="science" placeholder="Science Grade..." v-model="science" />
      <input type="text" name="english" placeholder="English Grade..." v-model="english" />
      <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
    name: "AddStudentForm",
    data() {
        return{
            name: "",
            math: "",
            history: "",
            science: "",
            english: ""
        }
    },
    methods: {
        addStudent(e) {
            e.preventDefault()
            this.$emit('add-student', this.$data)
        }
    }
}
</script>

<style>

</style>