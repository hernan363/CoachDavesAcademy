<template>
  <div class="gift-cards-section">
    <h2>Unlock Savings on Dining with Gift Cards</h2>

    <section class="market-section costco">
      <div class="logo-and-text">
        <img src="@/assets/logos/costco.png" alt="Costco Logo" class="market-logo">
        <div class="text-content">
          <h3>Costco's Gift Card Deals</h3>
          <p>Costco offers a unique way to save on dining out by purchasing gift cards at a discount. Here's how it works:</p>
          <ul>
            <li><strong>Discounts:</strong> Typically, you can snag gift cards for about 80% of their face value, meaning you're getting $100 worth of dining for only $80.</li>
            <li><strong>Delivery Speed:</strong> Once purchased, these gift cards are often emailed to you within just 3 hours, ensuring you can use them almost immediately.</li>
            <li><strong>Brands:</strong> Costco's selection includes popular restaurants like Outback Steakhouse, California Pizza Kitchen, and more, offering a variety for different tastes.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="market-section gcx">
      <div class="logo-and-text">
        <img src="@/assets/logos/gcx.png" alt="GCX App Logo" class="market-logo">
        <div class="text-content">
          <h3>The GCX App: Your Gateway to Even More Savings</h3>
          <p>For an even broader selection of gift cards, consider using the <a href="https://geta.raise.com/DHERNANDEZ4588" target="_blank">GCX app</a>. Here's what makes it stand out:</p>
          <ul>
            <li><strong>Variety:</strong> With a much wider variety than Costco, GCX covers everything from Blaze Pizza to Lucille's and Panda Express, among many other known brands.</li>
            <li><strong>Discounts:</strong> You can expect around a 15% discount on typical food gift cards, though discounts can vary, sometimes offering even more savings.</li>
            <li><strong>Instant Delivery:</strong> Need a last-minute gift or want to save right before dining out? GCX delivers gift cards instantly to your email, making it a perfect solution for spontaneous savings.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="savings-benefits">
      <h3>Benefits of Buying Discounted Gift Cards</h3>
      <p>By utilizing discounted gift cards, you're essentially giving yourself a raise without any additional effort:</p>
      <ul>
        <li><strong>Effortless Savings:</strong> No need to hunt for deals or coupons; just buy these gift cards and enjoy the savings every time you dine out.</li>
        <li><strong>Everyday Use:</strong> These discounts add up over time, whether you're eating out weekly or just for special occasions.</li>
        <li><strong>Perfect for Gifting:</strong> They also make excellent gifts, providing value to the recipient while you save money on the purchase.</li>
      </ul>
    </section>

    <section class="how-to-use">
      <h3>How to Make the Most of Gift Card Discounts</h3>
      <ol>
        <li><strong>Plan Ahead:</strong> Buy gift cards when you know you'll be dining at specific places.</li>
        <li><strong>Combine Offers:</strong> Use these gift cards with any existing restaurant promotions for even more savings.</li>
        <li><strong>Spread the Word:</strong> Share this strategy with friends or family to enjoy collective savings when dining together.</li>
      </ol>
    </section>

    <p class="final-tip">Remember, every little bit of saving adds up, and using discounted gift cards is one of the easiest ways to keep more money in your pocket without altering your lifestyle. Try out the <a href="https://geta.raise.com/DHERNANDEZ4588" target="_blank">GCX app</a> and see how much you can save on your next meal out!</p>
  </div>
</template>

<script>
export default {
  name: 'GiftCards'
}
</script>

<style scoped>
.gift-cards-section {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2, h3 {
  color: #28a745; /* Green for a positive, saving vibe */
  margin-bottom: 1rem;
}

.market-section {
  margin-bottom: 2rem;
}

.logo-and-text {
  display: flex;
  align-items: flex-start;
}

.market-logo {
  max-width: 100px;
  border-radius: 10px; /* Rounds the corners of the logo */
  margin-right: 20px;
}

.text-content {
  flex: 1;
}

ul, ol {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.final-tip {
  font-style: italic;
  color: #333;
}

.savings-benefits, .how-to-use {
  margin-bottom: 2rem;
}
</style>