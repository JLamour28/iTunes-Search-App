import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import FavoritesList from './components/FavoritesList';
import InfoSection from './components/InfoSection';
import { getToken, searchItunes } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // State variables
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading status
  const [hasSearched, setHasSearched] = useState(false); // New state to track if a search has been performed

  // Effect hook to fetch token on component mount
  useEffect(() => {
    const fetchToken = async () => {
      const newToken = await getToken();
      setToken(newToken);
    };
    fetchToken();
  }, []);

  // Function to handle search
  const handleSearch = async (term, media) => {
    setIsLoading(true); // Set loading to true when search starts
    setHasSearched(true); // Indicate that a search has been performed
    const results = await searchItunes(token, term, media);
    setSearchResults(results);
    setIsLoading(false); // Set loading to false when search completes
  };

  // Function to add item to favorites
  const addToFavorites = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  // Function to remove item from favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <Container className="app-container">
      <h1 className="text-center app-title">iTunes Search App</h1>
      <InfoSection />
      <Row>
        <Col md={8}>
          <SearchBar onSearch={handleSearch} />
          {isLoading ? (
            // Show loading message when isLoading is true
            <p>Loading...</p>
          ) : (
            // Show ResultsList only if a search has been performed
            hasSearched && <ResultsList results={searchResults} addToFavorites={addToFavorites} />
          )}
        </Col>
        <Col lg={4} className="favorites-container">
          <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;