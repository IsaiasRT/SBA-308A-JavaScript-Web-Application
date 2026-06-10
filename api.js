export async function searchAnime(query) {
    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
}
