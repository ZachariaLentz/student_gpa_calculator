<template>
  <form @submit="addStudent">
    <h3 class="title">Add a student</h3>
    <label for="name">Name:</label>
    <input type="text" name="name" placeholder="Name..." v-model="name" />

    <label for="math">Math:</label>
    <input type="text" name="math" placeholder="Math Grade..." v-model="math" />

    <label for="history">History:</label>
    <input type="text" name="history" placeholder="History Grade..." v-model="history" />

    <label for="science">Science:</label>
    <input type="text" name="science" placeholder="Science Grade..." v-model="science" />

    <label for="english">English:</label>
    <input type="text" name="english" placeholder="English Grade..." v-model="english" />

    <button type="submit" @click="addStudent">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddStudentForm",
  data() {
    return {
      name: "",
      math: "",
      history: "",
      science: "",
      english: ""
    };
  },
  methods: {
    addStudent(e) {
      e.preventDefault();
      this.$emit("add-student", this.$data);
    }
  }
};
</script>

<style>
form {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-row-gap: 10px;
  background:#ddd;
  text-align: left;
}

.title {
  grid-column: span 2;
  text-align: center;
}

label {
    grid-column: 1 / 2;
    margin-left: 1rem;
}

input {
  cursor:text;
  grid-column: 2 / 3;
  border: none;
  padding: 5px 0 5px 0;
  margin-right:1rem;
}

button {
    grid-column: span 2;
}
</style>