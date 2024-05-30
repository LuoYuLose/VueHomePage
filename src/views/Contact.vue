<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Contact',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        alert(`Message sent by ${this.name}`);
      }
    }
  }
</script>

<style scoped>
  .contact {
    text-align: center;
    margin-top: 50px;
  }

  form {
    display: inline-block;
    text-align: left;
  }

    form div {
      margin-bottom: 15px;
    }
</style>