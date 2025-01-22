<template>
  <div class="online-markets">
    <h2>Maximize Your Closet Cleanout with Online Marketplaces</h2>

    <section class="market-section offerup">
      <div class="logo-and-text">
        <img src="@/assets/logos/offerup.png" alt="OfferUp Logo" class="market-logo">
        <div class="text-content">
          <h3>OfferUp: Quick Sales for Budget Deals</h3>
          <p>OfferUp is your go-to platform for swift sales of items typically under $100. Here's why:</p>
          <ul>
            <li><strong>User Base:</strong> People on OfferUp are often looking for quick deals and are budget-conscious, making it ideal for selling items you no longer need but still have value.</li>
            <li><strong>Local Transactions:</strong> OfferUp encourages local sales, which means you can meet buyers in person, often at safe public locations recommended by the app.</li>
            <li><strong>Simplicity:</strong> Listing items is straightforward, and you can sell everything from clothes to electronics. There are no listing fees, but for shipments, there's a fee.</li>
            <li><strong>App Experience:</strong> Offers a mobile-first experience with features like chat, offer, and counteroffer, making transactions more interactive.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="market-section fb-marketplace">
      <div class="logo-and-text">
        <img src="@/assets/logos/fb-marketplace.png" alt="Facebook Marketplace Logo" class="market-logo">
        <div class="text-content">
          <h3>Facebook Marketplace: Quality for Higher Value Items</h3>
          <p>When it comes to furniture or items over $100, the quality of buyers and sellers on the <strong>Facebook Marketplace</strong> stands out:</p>
          <ul>
            <li><strong>Community Trust:</strong> Since it's integrated with social profiles, there's an added layer of trust and accountability. You can see mutual friends or connections, which can help in establishing trust.</li>
            <li><strong>Wide Variety:</strong> From furniture to electronics, this platform hosts a broad range of higher-quality items due to its extensive user base on the social network.</li>
            <li><strong>Local Focus:</strong> Like OfferUp, it promotes local buying and selling, but with the advantage of community checks and balances.</li>
            <li><strong>No Fees:</strong> There are no fees for listing or selling items, making it cost-effective for sellers.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="market-section ebay">
      <div class="logo-and-text">
        <img src="@/assets/logos/ebay.png" alt="eBay Logo" class="market-logo">
        <div class="text-content">
          <h3>eBay: The Go-To for Specialty Items</h3>
          <p>eBay shines when you're dealing with more official or specialized products like graded trading cards, car parts, or books:</p>
          <ul>
            <li><strong>Global Reach:</strong> eBay has a worldwide audience, making it perfect for niche items that might not find buyers locally.</li>
            <li><strong>Auction and Buy It Now:</strong> Offers flexibility in selling methods, allowing you to either auction items for potentially higher bids or list them at a fixed price for immediate sale.</li>
            <li><strong>Buyer Protection:</strong> eBay's buyer and seller protection policies can give both parties peace of mind, although sellers do face listing and transaction fees.</li>
            <li><strong>Professionalism:</strong> Ideal for items where authenticity or condition is crucial, like graded collectibles or rare books, where eBay's infrastructure supports detailed listings and reviews.</li>
          </ul>
        </div>
      </div>
    </section>

    <p class="conclusion">Remember, everything you've paid for has some residual value to someone else. By leveraging these platforms, you not only declutter your space but also turn your unused items into cash. Choose the platform that best matches your item's value and the kind of buyer you're looking for to get the most out of your sales.</p>
  </div>
</template>

<script>
export default {
  name: 'OnlineMarkets'
}
</script>

<style scoped>
.online-markets {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #007BFF;
  margin-bottom: 2rem;
}

.market-section {
  margin-bottom: 3rem;
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

h3 {
  color: #28a745;
  margin-top: 0;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

.conclusion {
  font-style: italic;
  text-align: center;
  color: #333;
}
</style>