// Step 1 || Getting News Headline
const handleCategory = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
      const data = await response.json();

      const tabContainer = document.getElementById('tab-container');

      data.data.news_category.slice(0, 3).forEach(category => {
            // console.log(category);
            const div = document.createElement('div');
            div.innerHTML = `
            <a onclick="handleNews('${category.category_id}')" class="tab">${category.category_name}</a>
            `;
            tabContainer.appendChild(div);
      });
};

// Step 2 || News Cards
const handleNews = async (categoryId) => {
      const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
      const data = await response.json();
      // console.log(data.data);
      const newsContainer = document.getElementById('news-container');
      newsContainer.innerHTML = '';
      data.data.forEach((news) => {
            // console.log(news);
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card card-compact bg-base-100 shadow-xl">
                  <figure><img src="${news.image_url
                  }" alt="Shoes" /></figure>
                  <div class="card-body">
                        <div class="flex justify-between">
                              <h2 class="card-title">${news.title.slice(0, 30)}</h2>
                              <button class="btn btn-secondary">${news.rating.badge}</button>
                        </div>
                        <p>${news.details.slice(0, 100)}</p>
                        <p>Total views: ${news.total_view || 'No View Yet'
                  }</p>
                  <div class="flex justify-between items-center mt-6">
                        <div class="flex gap-1">
                              <img class="w-12 rounded-full" src="${news.author.img}" alt="">
                              <div>
                                    <h4>${news.author.name}</h4>
                                    <p>${news.author.published_date
                  }</p>
                              </div>
                        </div>
                              <button onclick="my_modal_5.showModal(), newsDetails('${news._id}')" class="btn btn-neutral">Details</button>
                        </div>
                  </div>
            </div>
            `;

            newsContainer.appendChild(div);
      });
};

// Step 3 || Show Modal || News Details
const newsDetails = async (detailsId) => {
      const response = await fetch(`https://openapi.programming-hero.com/api/news/${detailsId}`);
      const data = await response.json();
      // console.log(data.data);

      const newsDetails = document.getElementById('news-details');
      newsDetails.innerHTML = '';

      data.data.forEach((news) => {
            // console.log(news);
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card card-compact bg-base-100 shadow-xl">
                  <figure><img src="${news.image_url
                  }" alt="Shoes" /></figure>
                  <div class="card-body">
                        <div class="flex justify-between">
                              <h2 class="card-title">${news.title.slice(0, 30)}</h2>
                              <button class="btn btn-secondary">${news.rating.badge}</button>
                        </div>
                        <p>${news.details.slice(0, 100)}</p>
                        <p>Total views: ${news.total_view || 'No View Yet'
                  }</p>
                  <div class="flex justify-between items-center mt-6">
                        <div class="flex gap-1">
                              <img class="w-12 rounded-full" src="${news.author.img}" alt="">
                              <div>
                                    <h4>${news.author.name}</h4>
                                    <p>${news.author.published_date
                  }</p>
                              </div>
                        </div>
                              <button onclick="my_modal_5.showModal(), newsDetails('${news._id}')" class="btn btn-neutral">Close</button>
                        </div>
                  </div>
            </div>
            `;

            newsDetails.appendChild(div);
      });
};

      handleCategory();

      // Showing Default news on home page
      handleNews('01');