export function renderResults(animeList, resultsSection) {
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