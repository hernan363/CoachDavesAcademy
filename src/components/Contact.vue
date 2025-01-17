<template>
  <div class="contact">
    <h2>Get in Touch with Coach Dave</h2>
    <form>
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  padding: 2rem;
}
.contact form {
  display: flex;
  flex-direction: column;
}
.contact input, .contact textarea {
  margin-bottom: 1rem;
  padding: 0.5rem;
}
.contact button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.contact button:hover {
  background-color: #0056b3;
}
</style>