<template>
  <div class="splitting-app">
    <div class="logo-section">
      <!-- Placeholder for logo -->
      <img src="@/assets/logos/tab.png" alt="Tab App Logo" class="app-logo">
    </div>

    <h2>Simplify Bill Splitting with Tab App</h2>

    <section class="introduction">
      <p>Splitting bills doesn't have to be a headache anymore. The <strong>Tab App</strong> revolutionizes the way you share expenses with friends, family, or colleagues, ensuring accuracy and fairness in every transaction.</p>
    </section>

    <section class="features">
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Exact Amount Splitting:</strong> Say goodbye to rounding errors or uneven splits. Tab App allows you to request or pay the exact amount owed, down to the cent.</li>
        <li><strong>User-Friendly Interface:</strong> With an intuitive design, Tab App makes it easy to add expenses, manage groups, and track who owes what, all in one place.</li>
        <li><strong>Point Saving:</strong> If you're looking to save on points or rewards, Tab App can help you strategize by choosing who pays with which card to maximize benefits.</li>
        <li><strong>Real-Time Notifications:</strong> Get instant updates when payments are made or when friends acknowledge their share, keeping everyone on the same page.</li>
        <li><strong>Group Management:</strong> Create groups for different occasions - be it a vacation, a regular dinner night, or a project team. Manage all your shared expenses effortlessly.</li>
      </ul>
    </section>

    <section class="usage">
      <h3>How to Use Tab App:</h3>
      <ol>
        <li><strong>Download the App:</strong> Available on both iOS and Android, get Tab App from your app store.</li>
        <li><strong>Create or Join a Group:</strong> Start by creating a new group for your event or join an existing one.</li>
        <li><strong>Add Expenses:</strong> Input each expense as it happens or all at once. Specify who paid and how the cost should be divided.</li>
        <li><strong>Settle Up:</strong> Use the app to request money from group members or pay your share directly within the app using various payment methods.</li>
        <li><strong>Track and Remind:</strong> Keep tabs on who has settled their debts and send reminders for those who haven't.</li>
      </ol>
    </section>

    <section class="benefits">
      <h3>Benefits:</h3>
      <p>By using Tab App, you not only save time but also:</p>
      <ul>
        <li>Reduce the awkwardness of asking for money back.</li>
        <li>Ensure everyone pays fairly without the need for complex calculations.</li>
        <li>Keep a clean record of all transactions for future reference or disputes.</li>
        <li>Encourage group outings without financial stress, knowing everyone can manage their share effortlessly.</li>
      </ul>
    </section>

    <p class="conclusion">With Tab App, splitting bills becomes an effortless part of enjoying time with friends or managing shared costs. Download it today and experience the ease of fair and accurate bill division.</p>
  </div>
</template>

<script>
export default {
  name: 'SplittingApp'
}
</script>

<style scoped>
.splitting-app {
  padding: 2rem;
  background-color: #f0f9ff; /* Light blue for a financial theme */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #007BFF;
}

.logo-section {
  text-align: center;
  margin-bottom: 20px;
}

.app-logo {
  max-width: 200px; /* Adjust size as necessary */
  border-radius: 10px;
}

h3 {
  color: #28a745; /* Green for positive action */
  margin-bottom: 1rem;
}

ul, ol {
  padding-left: 20px;
  margin-bottom: 2rem;
}

li {
  margin-bottom: 10px;
}

.introduction, .conclusion {
  line-height: 1.6;
  margin-bottom: 20px;
}

.features, .usage, .benefits {
  margin-bottom: 30px;
}

.conclusion {
  font-style: italic;
  text-align: center;
  color: #333;
}
</style>