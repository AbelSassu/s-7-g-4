function loadImages(query) {
    const apiKey = "cs4zTIKddlPonimbtZtL98QOQHBePft3whyVBPhXEztTMtxhunkBLJPR";
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const cardContainer = document.querySelector(".album .container .row");
        cardContainer.innerHTML = "";

        data.photos.forEach((photo, index) => {
            const imageUrl = photo.src.large2x;
            if (imageUrl) {
              const cardId = `card${index + 1}`;
              const imageId = `image${index + 1}`;
              const cardElement = createCard({ title: photo.photographer, text: photo.url }, cardId, imageId, imageUrl);
              cardContainer.appendChild(cardElement);
            }
          });
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
  }


  document.getElementById('loadImagesBtn').addEventListener('click', function() {
    loadImages('people');
  });


  document.getElementById('loadSecondaryImagesBtn').addEventListener('click', function() {
    loadImages('your-secondary-query');
  });

  function hideCard(card) {
    if (card) {
      card.style.display = 'none';
    }
}
function createCard(data, cardId, imageId, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
      <div class="card mb-4 shadow-sm" id="${cardId}">
        <img src="${imageUrl || ''}" class="card-img-top" alt="Image">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.text}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hideCard(this.closest('.card'))">
                Hide
              </button>
            </div>
            <small class="text-muted">${imageId}</small>
          </div>
        </div>
      </div>
    `;
    return card;
  }
    const cardContainer = document.querySelector(".album .container .row");
    cardData.forEach((data, index) => {
        const cardId = `card${index + 1}`;
        const imageId = `image${index + 1}`
        const cardElement = createCard(data, cardId, imageId);
        cardContainer.appendChild(cardElement);
    });
  ;
