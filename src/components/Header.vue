<template>
  <header class="header">
    <nav>
      <router-link to="/"><i class="material-icons">home</i> Home</router-link>
      <router-link to="/tips"><i class="material-icons">lightbulb_outline</i> Tips & Tricks</router-link>
      <div class="dropdown">
        <button class="dropbtn"><i class="material-icons">build</i> Tools ▼</button>
        <div class="dropdown-content">
          <router-link to="/app"><i class="material-icons">apps</i> Financial App</router-link>
          <router-link to="/presentations"><i class="material-icons">bar_chart</i> Presentations</router-link>
        </div>
      </div>
      <router-link to="/about"><i class="material-icons">info</i> About</router-link>
      <router-link to="/contact"><i class="material-icons">email</i> Contact Coach Dave</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background: transparent;
  padding: 1.5rem 0;
}

.header nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
}

.header nav a, .dropbtn {
  color: rgb(0, 42, 255); /* Default text color now blue */
  text-decoration: none;
  transition: all 0.5s ease;
  font-weight: normal;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: none; /* No shadow by default */
  display: flex;
  align-items: center;
  white-space: nowrap; /* Prevent text wrapping */
}

.header nav a:hover, .dropbtn:hover {
  font-weight: bolder;
  transform: translateY(-2px);
  letter-spacing: 3px; /* Increased letter-spacing on hover */
  background-color: rgba(255, 255, 255, 0.1);
}

/* Material Icons */
.material-icons {
  font-size: 20px; /* Adjust size as needed */
  vertical-align: middle; /* To align with text */
  margin-right: 0.5rem; /* Space between icon and text */
}

/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
}

/* Dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-transform: none; /* Reset uppercase for dropdown items */
  letter-spacing: normal; /* Reset letter spacing for dropdown items */
  white-space: nowrap; /* Prevent text wrapping */
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
  font-weight: normal; /* Reset bold for dropdown items */
  transform: none; /* Reset transform for dropdown items */
  white-space: nowrap; /* Ensure text doesn't wrap on hover */
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>