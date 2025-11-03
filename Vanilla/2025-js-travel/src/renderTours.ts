import axios from 'axios';

export async function renderTours(element: HTMLButtonElement) {
  // 取得遠端資料
  const getRemoteData = async () => {
    try {
      const { data } = await axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
      console.log(data.data);

      return data.data
    } catch (error) {
      console.error(error.message);
    }
  }

  let data = [];
  data = await getRemoteData();

  // 資料渲染
  const tourCardTemplate = (tour) => {
    return `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src="${tour.imgUrl}" alt="${tour.name}">
          </a>
          <div class="ticketCard-region">${tour.area}</div>
          <div class="ticketCard-rank">${tour.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${tour.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${tour.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${tour.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">$${tour.price}</span>
            </p>
          </div>
        </div>
      </li>`
  }

  const toursContentText = data.map((tour) => tourCardTemplate(tour)).join('')

  element.innerHTML = toursContentText;
}
