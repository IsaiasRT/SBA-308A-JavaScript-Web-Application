import { searchAnime } from './api.js';
import { renderResults } from './ui.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('results');

searchBtn.addEventListener('click', async () => {
    const query = searchInput.value.trim();

    if (!query) {
        alert('Please enter an anime name');
        return;
    }

    const animeList = await searchAnime(query);
    renderResults(animeList, resultsSection);
});

