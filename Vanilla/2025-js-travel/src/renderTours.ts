import axios from 'axios'

// 取得遠端資料
export async function getRemoteData() {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json'
    )
    return data.data
  } catch (error) {
    console.warn(error.message)
    return []
  }
}

// 資料渲染
export function renderTours(element: HTMLButtonElement, renderData) {
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

  const toursContentText = renderData.map((tour) => tourCardTemplate(tour)).join('')

  element.innerHTML = toursContentText
}
