import React from 'react';
import { ListGroup, Button, Image, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ResultsList({ results, addToFavorites }) {
  // Check if there are no results
  if (results.length === 0) {
    // Display a message when no results are found
    return (
      <Alert variant="info">
        No results found. Try adjusting your search terms or content type.
      </Alert>
    );
  }

  // If there are results, render the list
  return (
    <ListGroup className="results-list">
      {results.map((item) => (
        <ListGroup.Item key={item.id} className="d-flex align-items-center">
          {/* Display item image */}
          <Image src={item.artwork} alt={item.name} className="item-image" />
          <div className="item-details">
            {/* Display item name and artist */}
            <div className="item-name">{item.name}</div>
            <div className="item-artist">{item.artist}</div>
          </div>
          {/* Button to add item to favorites */}
          <Button 
            variant="outline-primary" 
            onClick={() => addToFavorites(item)} 
            className="add-favorite-btn"
            title="Add to Favorites"
          >
            <i className="bi bi-heart"></i>
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ResultsList;