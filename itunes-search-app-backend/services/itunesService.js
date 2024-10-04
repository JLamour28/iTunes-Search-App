const axios = require('axios');

const ITUNES_API_BASE_URL = 'https://itunes.apple.com/search';

/**
 * Search the iTunes API
 * @param {string} term - The search term
 * @param {string} media - The media type to search (default: 'all')
 * @returns {Promise<Array>} - Parsed search results
 */
async function search(term, media = 'all') {
  try {
    const response = await axios.get(ITUNES_API_BASE_URL, {
      params: {
        term,
        media,
        limit: 50,
        country: 'US'
      }
    });

    // Parse and return only the needed information
    return response.data.results.map(item => ({
      id: item.trackId || item.collectionId,
      name: item.trackName || item.collectionName,
      artist: item.artistName,
      artwork: item.artworkUrl100,
      releaseDate: item.releaseDate
    }));
  } catch (error) {
    console.error('Error searching iTunes:', error);
    throw error;
  }
}

module.exports = { search };