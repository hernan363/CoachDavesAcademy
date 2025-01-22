(()=>{"use strict";var e={852:(e,t,a)=>{var o=a(751),i=a(641);const s={id:"app",class:"main-background"},n={class:"content"};function r(e,t,a,o,r,c){const l=(0,i.g2)("Header"),d=(0,i.g2)("router-view"),p=(0,i.g2)("Footer");return(0,i.uX)(),(0,i.CE)("div",s,[t[0]||(t[0]=(0,i.Lk)("head",null,[(0,i.Lk)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})],-1)),(0,i.bF)(l),(0,i.Lk)("main",n,[(0,i.bF)(d)]),(0,i.bF)(p)])}const c={class:"header"},l={class:"dropdown"},d={class:"dropdown-content"};function p(e,t,a,o,s,n){const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",c,[(0,i.Lk)("nav",null,[(0,i.bF)(r,{to:"/"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.Lk)("i",{class:"material-icons"},"home",-1),(0,i.eW)(" Home")]))),_:1}),(0,i.bF)(r,{to:"/tips"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.Lk)("i",{class:"material-icons"},"lightbulb_outline",-1),(0,i.eW)(" Tips & Tricks")]))),_:1}),(0,i.Lk)("div",l,[t[4]||(t[4]=(0,i.Lk)("button",{class:"dropbtn"},[(0,i.Lk)("i",{class:"material-icons"},"build"),(0,i.eW)(" Tools ▼")],-1)),(0,i.Lk)("div",d,[(0,i.bF)(r,{to:"/app"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.Lk)("i",{class:"material-icons"},"apps",-1),(0,i.eW)(" Financial App")]))),_:1}),(0,i.bF)(r,{to:"/presentations"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.Lk)("i",{class:"material-icons"},"bar_chart",-1),(0,i.eW)(" Presentations")]))),_:1})])]),(0,i.bF)(r,{to:"/about"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.Lk)("i",{class:"material-icons"},"info",-1),(0,i.eW)(" About")]))),_:1}),(0,i.bF)(r,{to:"/contact"},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.Lk)("i",{class:"material-icons"},"email",-1),(0,i.eW)(" Contact Coach Dave")]))),_:1})])])}const f={name:"Header"};var u=a(262);const v=(0,u.A)(f,[["render",p],["__scopeId","data-v-3449f188"]]),g=v,h={class:"footer"};function b(e,t,a,o,s,n){const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("footer",h,[t[3]||(t[3]=(0,i.Lk)("p",null,"© 2025 Coach Dave's Academy. All rights reserved.",-1)),(0,i.Lk)("p",null,[(0,i.bF)(r,{to:"/contact"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Contact Us")]))),_:1}),t[1]||(t[1]=(0,i.eW)(" | ")),t[2]||(t[2]=(0,i.Lk)("a",{href:"#"},"Privacy Policy",-1))])])}const m={name:"Footer"},y=(0,u.A)(m,[["render",b],["__scopeId","data-v-67491588"]]),k=y,w={components:{Header:g,Footer:k}},A=(0,u.A)(w,[["render",r]]),C=A;var T=a(220);const L={class:"home"};function x(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",L,[(0,i.Lk)("h1",{class:"animated-title",onMouseover:t[0]||(t[0]=(...e)=>n.startTitleAnimation&&n.startTitleAnimation(...e)),onMouseleave:t[1]||(t[1]=(...e)=>n.stopTitleAnimation&&n.stopTitleAnimation(...e))}," Welcome to Coach Dave's Academy ",32),(0,i.Lk)("p",{class:"interactive-element",onClick:t[2]||(t[2]=(...e)=>n.showMoreInfo&&n.showMoreInfo(...e))}," Get your pencil and a notepad because you're about to get schooled. This site is a place for me to keep all the tools and knowledge I have for financial success. I hope others can learn a thing or two from this and get ahead for themselves. ")])}var S=a(83);const E={name:"Home",data(){return{titleAnimation:null}},methods:{startTitleAnimation(){this.titleAnimation||(this.titleAnimation=S.os.to(".animated-title",{y:-5,scale:1.1,duration:.5,ease:"power2.out",yoyo:!0,repeat:-1}))},stopTitleAnimation(){this.titleAnimation&&(this.titleAnimation.kill(),this.titleAnimation=null,S.os.set(".animated-title",{y:0,scale:1}))},showMoreInfo(){alert("Here's some more information about Coach Dave's Academy!")}}},P=(0,u.A)(E,[["render",x],["__scopeId","data-v-5e48b2e2"]]),R=P,F={class:"financial-app"};function O(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",F,t[0]||(t[0]=[(0,i.Lk)("h2",null,"Financial Planning App",-1),(0,i.Lk)("p",null,"Download our app to start your journey towards financial freedom:",-1),(0,i.Lk)("a",{href:"#",class:"btn"},"Download Now",-1)]))}const G={name:"FinancialApp"},H=(0,u.A)(G,[["render",O],["__scopeId","data-v-5109f65d"]]),X=H;var N=a(33);const I={class:"tips-and-tricks"},D={key:0},U=["onClick"],j={class:"content-container"};function B(e,t,a,s,n,r){return(0,i.uX)(),(0,i.CE)("div",I,[(0,i.Lk)("div",{class:(0,N.C4)(["sidebar",{expanded:n.isSidebarExpanded}]),style:(0,N.Tr)({height:n.sidebarHeight})},[(0,i.Lk)("button",{class:"toggle-sidebar",onClick:t[0]||(t[0]=(...e)=>r.toggleSidebar&&r.toggleSidebar(...e))},[(0,i.Lk)("span",{class:(0,N.C4)(["arrow",{outward:n.isSidebarExpanded}])},"◀",2),(0,i.Lk)("span",{class:(0,N.C4)(["arrow",{outward:n.isSidebarExpanded}])},"◀",2)]),n.isSidebarExpanded?((0,i.uX)(),(0,i.CE)("ul",D,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.topics,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,class:(0,N.C4)({active:e.id===n.currentTopicId}),onClick:t=>r.changeTopic(e.id)},(0,N.v_)(e.title),11,U)))),128))])):(0,i.Q3)("",!0)],6),(0,i.Lk)("div",j,[(0,i.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,i.k6)((()=>[n.currentTopicId?((0,i.uX)(),(0,i.Wv)((0,i.$y)(n.currentComponent),{key:n.currentTopicId})):(0,i.Q3)("",!0)])),_:1})])])}const K=a.p+"img/costco.2247ba1d.png",M={class:"tip"};function W(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",M,t[0]||(t[0]=[(0,i.Fv)('<img src="'+K+'" alt="Costco Logo" class="costco-logo" data-v-975b9b4e><div class="content-container" data-v-975b9b4e><p class="introduction" data-v-975b9b4e>Welcome to the comprehensive guide on maximizing your savings at Costco. Whether you&#39;re buying in bulk or seeking exclusive deals, here&#39;s how you can benefit.</p><div class="comparison-section" data-v-975b9b4e><h3 data-v-975b9b4e>Toilet Paper, Paper Towels, and Gas Price Comparison</h3><div class="side-by-side" data-v-975b9b4e><div class="item" data-v-975b9b4e><h4 data-v-975b9b4e>Costco</h4><ul data-v-975b9b4e><li data-v-975b9b4e><strong data-v-975b9b4e>Toilet Paper:</strong> $24.99 for 30 rolls (1200 sheets per roll) - $0.0021 per sheet</li><li data-v-975b9b4e><strong data-v-975b9b4e>Paper Towels:</strong> $19.99 for 12 rolls (160 sheets per roll) - $0.0104 per sheet</li><li data-v-975b9b4e><strong data-v-975b9b4e>Gas:</strong> $3.49 per gallon (average)</li></ul></div><div class="item" data-v-975b9b4e><h4 data-v-975b9b4e>Ralphs, Stater Brothers, Albertsons</h4><ul data-v-975b9b4e><li data-v-975b9b4e><strong data-v-975b9b4e>Toilet Paper:</strong> $12.99 for 12 rolls (200 sheets per roll) - $0.0054 per sheet (average)</li><li data-v-975b9b4e><strong data-v-975b9b4e>Paper Towels:</strong> $7.99 for 6 rolls (80 sheets per roll) - $0.0166 per sheet (average)</li><li data-v-975b9b4e><strong data-v-975b9b4e>Gas:</strong> $3.89 per gallon (average)</li></ul></div></div><div class="graph-section" data-v-975b9b4e><h4 data-v-975b9b4e>Toilet Paper Price Comparison</h4><canvas id="toiletPaperChart" width="400" height="200" data-v-975b9b4e></canvas></div><div class="graph-section" data-v-975b9b4e><h4 data-v-975b9b4e>Paper Towels Price Comparison</h4><canvas id="paperTowelsChart" width="400" height="200" data-v-975b9b4e></canvas></div><div class="graph-section" data-v-975b9b4e><h4 data-v-975b9b4e>Gas Price Comparison</h4><canvas id="gasChart" width="400" height="200" data-v-975b9b4e></canvas></div><div class="graph-section" data-v-975b9b4e><h4 data-v-975b9b4e>Annual Savings Comparison</h4><canvas id="annualSavingsChart" width="400" height="200" data-v-975b9b4e></canvas></div><p class="conclusion" data-v-975b9b4e> After comparing the costs for toilet paper, paper towels, and gas, it&#39;s evident that shopping at Costco can lead to significant savings annually. Here&#39;s the breakdown: <br data-v-975b9b4e><br data-v-975b9b4e> - <strong data-v-975b9b4e>Toilet Paper:</strong> At Costco, 60 rolls at 160 sheets per roll cost $20.16 per year, while the same amount at other stores would be $51.84, saving you $31.68. <br data-v-975b9b4e> - <strong data-v-975b9b4e>Paper Towels:</strong> With 30 rolls at 80 sheets per roll, Costco&#39;s price comes to $24.96 per year, compared to $39.84 at other stores, resulting in a $14.88 saving. <br data-v-975b9b4e> - <strong data-v-975b9b4e>Gas:</strong> For 300 gallons, Costco&#39;s rate of $3.49 per gallon totals $1,047 annually, whereas at other stores at $3.89 per gallon, it would be $1,167, offering a $120 saving. <br data-v-975b9b4e><br data-v-975b9b4e> In total, by choosing Costco for these items, you could save approximately <strong data-v-975b9b4e>$166.56</strong> per year. This saving alone far exceeds the cost of the $65 Costco membership for two members, clearly demonstrating that the membership fee is not only justified but also offers substantial financial benefits over time. </p></div></div>',2)]))}var z=a(22);const Q={name:"Tip1",mounted(){z.t1.register(...z.$L),this.createToiletPaperChart(),this.createPaperTowelsChart(),this.createGasChart(),this.createAnnualSavingsChart()},methods:{createToiletPaperChart(){new z.t1(document.getElementById("toiletPaperChart"),{type:"bar",data:{labels:["Average","Costco"],datasets:[{label:"Price per Sheet ($)",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 235, 162, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(54, 235, 162)"],borderWidth:1,data:[.0054,.0021]}]},options:{scales:{y:{beginAtZero:!0,title:{display:!0,text:"Price per Sheet ($)"}}}}})},createPaperTowelsChart(){new z.t1(document.getElementById("paperTowelsChart"),{type:"bar",data:{labels:["Average","Costco"],datasets:[{label:"Price per Sheet ($)",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 235, 162, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(54, 235, 162)"],borderWidth:1,data:[.0166,.0104]}]},options:{scales:{y:{beginAtZero:!0,title:{display:!0,text:"Price per Sheet ($)"}}}}})},createGasChart(){new z.t1(document.getElementById("gasChart"),{type:"bar",data:{labels:["Average","Costco"],datasets:[{label:"Price per Gallon ($)",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 235, 162, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(54, 235, 162)"],borderWidth:1,data:[3.89,3.49]}]},options:{scales:{y:{beginAtZero:!0,title:{display:!0,text:"Price per Gallon ($)"}}}}})},createAnnualSavingsChart(){new z.t1(document.getElementById("annualSavingsChart"),{type:"bar",data:{labels:["Average Stores","Costco"],datasets:[{label:"Annual Cost ($)",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 235, 162, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(54, 235, 162)"],borderWidth:1,data:[1258.68,1092.12]}]},options:{scales:{y:{beginAtZero:!0,title:{display:!0,text:"Annual Cost ($)"}}}}})}}},J=(0,u.A)(Q,[["render",W],["__scopeId","data-v-975b9b4e"]]),V=J,Y="data:image/png;base64,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",q={class:"gift-cards-section"};function $(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",q,t[0]||(t[0]=[(0,i.Fv)('<h2 data-v-6cd705f6>Unlock Savings on Dining with Gift Cards</h2><section class="market-section costco" data-v-6cd705f6><div class="logo-and-text" data-v-6cd705f6><img src="'+K+'" alt="Costco Logo" class="market-logo" data-v-6cd705f6><div class="text-content" data-v-6cd705f6><h3 data-v-6cd705f6>Costco&#39;s Gift Card Deals</h3><p data-v-6cd705f6>Costco offers a unique way to save on dining out by purchasing gift cards at a discount. Here&#39;s how it works:</p><ul data-v-6cd705f6><li data-v-6cd705f6><strong data-v-6cd705f6>Discounts:</strong> Typically, you can snag gift cards for about 80% of their face value, meaning you&#39;re getting $100 worth of dining for only $80.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Delivery Speed:</strong> Once purchased, these gift cards are often emailed to you within just 3 hours, ensuring you can use them almost immediately.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Brands:</strong> Costco&#39;s selection includes popular restaurants like Outback Steakhouse, California Pizza Kitchen, and more, offering a variety for different tastes.</li></ul></div></div></section><section class="market-section gcx" data-v-6cd705f6><div class="logo-and-text" data-v-6cd705f6><img src="'+Y+'" alt="GCX App Logo" class="market-logo" data-v-6cd705f6><div class="text-content" data-v-6cd705f6><h3 data-v-6cd705f6>The GCX App: Your Gateway to Even More Savings</h3><p data-v-6cd705f6>For an even broader selection of gift cards, consider using the <a href="https://geta.raise.com/DHERNANDEZ4588" target="_blank" data-v-6cd705f6>GCX app</a>. Here&#39;s what makes it stand out:</p><ul data-v-6cd705f6><li data-v-6cd705f6><strong data-v-6cd705f6>Variety:</strong> With a much wider variety than Costco, GCX covers everything from Blaze Pizza to Lucille&#39;s and Panda Express, among many other known brands.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Discounts:</strong> You can expect around a 15% discount on typical food gift cards, though discounts can vary, sometimes offering even more savings.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Instant Delivery:</strong> Need a last-minute gift or want to save right before dining out? GCX delivers gift cards instantly to your email, making it a perfect solution for spontaneous savings.</li></ul></div></div></section><section class="savings-benefits" data-v-6cd705f6><h3 data-v-6cd705f6>Benefits of Buying Discounted Gift Cards</h3><p data-v-6cd705f6>By utilizing discounted gift cards, you&#39;re essentially giving yourself a raise without any additional effort:</p><ul data-v-6cd705f6><li data-v-6cd705f6><strong data-v-6cd705f6>Effortless Savings:</strong> No need to hunt for deals or coupons; just buy these gift cards and enjoy the savings every time you dine out.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Everyday Use:</strong> These discounts add up over time, whether you&#39;re eating out weekly or just for special occasions.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Perfect for Gifting:</strong> They also make excellent gifts, providing value to the recipient while you save money on the purchase.</li></ul></section><section class="how-to-use" data-v-6cd705f6><h3 data-v-6cd705f6>How to Make the Most of Gift Card Discounts</h3><ol data-v-6cd705f6><li data-v-6cd705f6><strong data-v-6cd705f6>Plan Ahead:</strong> Buy gift cards when you know you&#39;ll be dining at specific places.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Combine Offers:</strong> Use these gift cards with any existing restaurant promotions for even more savings.</li><li data-v-6cd705f6><strong data-v-6cd705f6>Spread the Word:</strong> Share this strategy with friends or family to enjoy collective savings when dining together.</li></ol></section><p class="final-tip" data-v-6cd705f6>Remember, every little bit of saving adds up, and using discounted gift cards is one of the easiest ways to keep more money in your pocket without altering your lifestyle. Try out the <a href="https://geta.raise.com/DHERNANDEZ4588" target="_blank" data-v-6cd705f6>GCX app</a> and see how much you can save on your next meal out!</p>',6)]))}const _={name:"GiftCards"},Z=(0,u.A)(_,[["render",$],["__scopeId","data-v-6cd705f6"]]),ee=Z,te=a.p+"img/offerup.4e00f66d.png",ae=a.p+"img/fb-marketplace.d3526067.png",oe=a.p+"img/ebay.9a0bf7af.png",ie={class:"online-markets"};function se(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",ie,t[0]||(t[0]=[(0,i.Fv)('<h2 data-v-ca57301c>Maximize Your Closet Cleanout with Online Marketplaces</h2><section class="market-section offerup" data-v-ca57301c><div class="logo-and-text" data-v-ca57301c><img src="'+te+'" alt="OfferUp Logo" class="market-logo" data-v-ca57301c><div class="text-content" data-v-ca57301c><h3 data-v-ca57301c>OfferUp: Quick Sales for Budget Deals</h3><p data-v-ca57301c>OfferUp is your go-to platform for swift sales of items typically under $100. Here&#39;s why:</p><ul data-v-ca57301c><li data-v-ca57301c><strong data-v-ca57301c>User Base:</strong> People on OfferUp are often looking for quick deals and are budget-conscious, making it ideal for selling items you no longer need but still have value.</li><li data-v-ca57301c><strong data-v-ca57301c>Local Transactions:</strong> OfferUp encourages local sales, which means you can meet buyers in person, often at safe public locations recommended by the app.</li><li data-v-ca57301c><strong data-v-ca57301c>Simplicity:</strong> Listing items is straightforward, and you can sell everything from clothes to electronics. There are no listing fees, but for shipments, there&#39;s a fee.</li><li data-v-ca57301c><strong data-v-ca57301c>App Experience:</strong> Offers a mobile-first experience with features like chat, offer, and counteroffer, making transactions more interactive.</li></ul></div></div></section><section class="market-section fb-marketplace" data-v-ca57301c><div class="logo-and-text" data-v-ca57301c><img src="'+ae+'" alt="Facebook Marketplace Logo" class="market-logo" data-v-ca57301c><div class="text-content" data-v-ca57301c><h3 data-v-ca57301c>Facebook Marketplace: Quality for Higher Value Items</h3><p data-v-ca57301c>When it comes to furniture or items over $100, the quality of buyers and sellers on the <strong data-v-ca57301c>Facebook Marketplace</strong> stands out:</p><ul data-v-ca57301c><li data-v-ca57301c><strong data-v-ca57301c>Community Trust:</strong> Since it&#39;s integrated with social profiles, there&#39;s an added layer of trust and accountability. You can see mutual friends or connections, which can help in establishing trust.</li><li data-v-ca57301c><strong data-v-ca57301c>Wide Variety:</strong> From furniture to electronics, this platform hosts a broad range of higher-quality items due to its extensive user base on the social network.</li><li data-v-ca57301c><strong data-v-ca57301c>Local Focus:</strong> Like OfferUp, it promotes local buying and selling, but with the advantage of community checks and balances.</li><li data-v-ca57301c><strong data-v-ca57301c>No Fees:</strong> There are no fees for listing or selling items, making it cost-effective for sellers.</li></ul></div></div></section><section class="market-section ebay" data-v-ca57301c><div class="logo-and-text" data-v-ca57301c><img src="'+oe+'" alt="eBay Logo" class="market-logo" data-v-ca57301c><div class="text-content" data-v-ca57301c><h3 data-v-ca57301c>eBay: The Go-To for Specialty Items</h3><p data-v-ca57301c>eBay shines when you&#39;re dealing with more official or specialized products like graded trading cards, car parts, or books:</p><ul data-v-ca57301c><li data-v-ca57301c><strong data-v-ca57301c>Global Reach:</strong> eBay has a worldwide audience, making it perfect for niche items that might not find buyers locally.</li><li data-v-ca57301c><strong data-v-ca57301c>Auction and Buy It Now:</strong> Offers flexibility in selling methods, allowing you to either auction items for potentially higher bids or list them at a fixed price for immediate sale.</li><li data-v-ca57301c><strong data-v-ca57301c>Buyer Protection:</strong> eBay&#39;s buyer and seller protection policies can give both parties peace of mind, although sellers do face listing and transaction fees.</li><li data-v-ca57301c><strong data-v-ca57301c>Professionalism:</strong> Ideal for items where authenticity or condition is crucial, like graded collectibles or rare books, where eBay&#39;s infrastructure supports detailed listings and reviews.</li></ul></div></div></section><p class="conclusion" data-v-ca57301c>Remember, everything you&#39;ve paid for has some residual value to someone else. By leveraging these platforms, you not only declutter your space but also turn your unused items into cash. Choose the platform that best matches your item&#39;s value and the kind of buyer you&#39;re looking for to get the most out of your sales.</p>',5)]))}const ne={name:"OnlineMarkets"},re=(0,u.A)(ne,[["render",se],["__scopeId","data-v-ca57301c"]]),ce=re,le=a.p+"img/tab.e7e8c9c8.png",de={class:"splitting-app"};function pe(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",de,t[0]||(t[0]=[(0,i.Fv)('<div class="logo-section" data-v-ffce51d4><img src="'+le+'" alt="Tab App Logo" class="app-logo" data-v-ffce51d4></div><h2 data-v-ffce51d4>Simplify Bill Splitting with Tab App</h2><section class="introduction" data-v-ffce51d4><p data-v-ffce51d4>Splitting bills doesn&#39;t have to be a headache anymore. The <strong data-v-ffce51d4>Tab App</strong> revolutionizes the way you share expenses with friends, family, or colleagues, ensuring accuracy and fairness in every transaction.</p></section><section class="features" data-v-ffce51d4><h3 data-v-ffce51d4>Key Features:</h3><ul data-v-ffce51d4><li data-v-ffce51d4><strong data-v-ffce51d4>Exact Amount Splitting:</strong> Say goodbye to rounding errors or uneven splits. Tab App allows you to request or pay the exact amount owed, down to the cent.</li><li data-v-ffce51d4><strong data-v-ffce51d4>User-Friendly Interface:</strong> With an intuitive design, Tab App makes it easy to add expenses, manage groups, and track who owes what, all in one place.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Point Saving:</strong> If you&#39;re looking to save on points or rewards, Tab App can help you strategize by choosing who pays with which card to maximize benefits.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Real-Time Notifications:</strong> Get instant updates when payments are made or when friends acknowledge their share, keeping everyone on the same page.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Group Management:</strong> Create groups for different occasions - be it a vacation, a regular dinner night, or a project team. Manage all your shared expenses effortlessly.</li></ul></section><section class="usage" data-v-ffce51d4><h3 data-v-ffce51d4>How to Use Tab App:</h3><ol data-v-ffce51d4><li data-v-ffce51d4><strong data-v-ffce51d4>Download the App:</strong> Available on both iOS and Android, get Tab App from your app store.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Create or Join a Group:</strong> Start by creating a new group for your event or join an existing one.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Add Expenses:</strong> Input each expense as it happens or all at once. Specify who paid and how the cost should be divided.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Settle Up:</strong> Use the app to request money from group members or pay your share directly within the app using various payment methods.</li><li data-v-ffce51d4><strong data-v-ffce51d4>Track and Remind:</strong> Keep tabs on who has settled their debts and send reminders for those who haven&#39;t.</li></ol></section><section class="benefits" data-v-ffce51d4><h3 data-v-ffce51d4>Benefits:</h3><p data-v-ffce51d4>By using Tab App, you not only save time but also:</p><ul data-v-ffce51d4><li data-v-ffce51d4>Reduce the awkwardness of asking for money back.</li><li data-v-ffce51d4>Ensure everyone pays fairly without the need for complex calculations.</li><li data-v-ffce51d4>Keep a clean record of all transactions for future reference or disputes.</li><li data-v-ffce51d4>Encourage group outings without financial stress, knowing everyone can manage their share effortlessly.</li></ul></section><p class="conclusion" data-v-ffce51d4>With Tab App, splitting bills becomes an effortless part of enjoying time with friends or managing shared costs. Download it today and experience the ease of fair and accurate bill division.</p>',7)]))}const fe={name:"SplittingApp"},ue=(0,u.A)(fe,[["render",pe],["__scopeId","data-v-ffce51d4"]]),ve=ue,ge={components:{Tip1:V,Tip2:ee,Tip3:ce,Tip4:ve},data(){return{topics:[{id:"tip1",title:"Costco Savings",component:"Tip1"},{id:"tip2",title:"Using Gift Cards",component:"Tip2"},{id:"tip3",title:"Online Market Tips",component:"Tip3"},{id:"tip4",title:"Splitting Apps",component:"Tip4"}],currentTopicId:null,currentComponent:null,isSidebarExpanded:!0,sidebarHeight:"100vh"}},methods:{changeTopic(e){const t=this.topics.find((t=>t.id===e));t&&S.os.to(".content-container",{opacity:0,duration:.3,onComplete:()=>{this.currentTopicId=e,this.currentComponent=t.component,S.os.to(".content-container",{opacity:1,duration:.3,delay:.1})}})},toggleSidebar(){if(this.isSidebarExpanded=!this.isSidebarExpanded,this.isSidebarExpanded){const e=document.querySelector(".content-container").offsetHeight;this.sidebarHeight=`${e}px`}else this.sidebarHeight="auto"}},mounted(){this.changeTopic("tip1"),this.toggleSidebar(),this.toggleSidebar()},updated(){if(this.isSidebarExpanded){const e=document.querySelector(".content-container").offsetHeight;this.sidebarHeight=`${e}px`}}},he=(0,u.A)(ge,[["render",B],["__scopeId","data-v-135787da"]]),be=he,me={class:"presentations"},ye={class:"presentation-list"},ke=["href"];function we(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",me,[(0,i.Lk)("h2",{class:"animated-title",onMouseover:t[0]||(t[0]=(...e)=>n.startTitleAnimation&&n.startTitleAnimation(...e)),onMouseleave:t[1]||(t[1]=(...e)=>n.stopTitleAnimation&&n.stopTitleAnimation(...e))}," Financial Prezies ",32),(0,i.Lk)("ul",ye,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.presentations,((e,a)=>((0,i.uX)(),(0,i.CE)("li",{key:a,class:"presentation-item",onMouseover:t[2]||(t[2]=e=>n.hoverEffect(e)),onMouseleave:t[3]||(t[3]=e=>n.resetEffect(e))},[(0,i.Lk)("a",{href:e.link,target:"_blank"},[t[4]||(t[4]=(0,i.Lk)("span",{class:"icon"},"📊",-1)),(0,i.eW)(" "+(0,N.v_)(e.title),1)],8,ke)],32)))),128))])])}var Ae=a(383);S.os.registerPlugin(Ae.K);const Ce={name:"Presentations",data(){return{presentations:[{title:"Basic Financial Understanding",link:"https://prezi.com/view/QZrtQKnw2Rjrmztu0IRL/"},{title:"Basic Crypto Understanding",link:"https://prezi.com/view/91RX0d9wcLpHQPcu02cO/"}],titleAnimation:null}},methods:{startTitleAnimation(){this.titleAnimation||(this.titleAnimation=S.os.to(".animated-title",{y:-5,scale:1.1,duration:.5,ease:"power2.out",yoyo:!0,repeat:-1}))},stopTitleAnimation(){this.titleAnimation&&(this.titleAnimation.kill(),this.titleAnimation=null,S.os.set(".animated-title",{y:0,scale:1}))},hoverEffect(e){const t=Ae.K.getState(e.target);e.target.classList.add("active"),Ae.K.from(t,{duration:.3,ease:"power1.out"})},resetEffect(e){e.target.classList.remove("active")}}},Te=(0,u.A)(Ce,[["render",we],["__scopeId","data-v-5855691a"]]),Le=Te,xe={class:"contact"};function Se(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",xe,t[0]||(t[0]=[(0,i.Lk)("h2",null,"Get in Touch with Coach Dave",-1),(0,i.Lk)("form",null,[(0,i.Lk)("input",{type:"text",placeholder:"Your Name",required:""}),(0,i.Lk)("input",{type:"email",placeholder:"Your Email",required:""}),(0,i.Lk)("textarea",{placeholder:"Your Message",required:""}),(0,i.Lk)("button",{type:"submit"},"Send Message")],-1)]))}const Ee={name:"Contact"},Pe=(0,u.A)(Ee,[["render",Se],["__scopeId","data-v-8d215264"]]),Re=Pe,Fe={class:"about"};function Oe(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",Fe,t[0]||(t[0]=[(0,i.Lk)("h2",null,"About Coach Dave",-1),(0,i.Lk)("p",null,"I needed a spot to write down all of my ideas.",-1)]))}const Ge={name:"About"},He=(0,u.A)(Ge,[["render",Oe],["__scopeId","data-v-0191b9ba"]]),Xe=He,Ne=[{path:"/",component:R},{path:"/app",component:X},{path:"/tips",component:be},{path:"/presentations",component:Le},{path:"/contact",component:Re},{path:"/about",component:Xe}],Ie=(0,T.aE)({history:(0,T.LA)(),routes:Ne}),De=Ie;(0,o.Ef)(C).use(De).mount("#app")}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.m=e,(()=>{var e=[];a.O=(t,o,i,s)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){for(var[o,i,s]=e[d],r=!0,c=0;c<o.length;c++)(!1&s||n>=s)&&Object.keys(a.O).every((e=>a.O[e](o[c])))?o.splice(c--,1):(r=!1,s<n&&(n=s));if(r){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,i,s]}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.p="/CoachDavesAcademy/"})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var i,s,[n,r,c]=o,l=0;if(n.some((t=>0!==e[t]))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a)}for(t&&t(o);l<n.length;l++)s=n[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},o=self["webpackChunk"]=self["webpackChunk"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[504],(()=>a(852)));o=a.O(o)})();
//# sourceMappingURL=app.80a5adff.js.map