const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('results');

// Fetch anime from Jikan
async function searchAnime(query) {
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
}

// Render anime cards
function renderResults(animeList) {
    resultsSection.innerHTML = '';

    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');

        card.innerHTML = `
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
      <h3>${anime.title}</h3>
      <p>Score: ${anime.score ?? 'N/A'}</p>
    `;

        resultsSection.appendChild(card);
    });
}

// Handle search button click
searchBtn.addEventListener('click', async () => {
    const query = searchInput.value.trim();

    if (!query) {
        alert('Please enter an anime name');
        return;
    }

    const animeList = await searchAnime(query);
    renderResults(animeList);
});
