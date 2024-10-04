import React from 'react';
import { ListGroup, Button, Image } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function FavoritesList({ favorites, removeFromFavorites }) {
  return (
    <>
      <h2 className="favorites-title">Favorites</h2>
      <ListGroup className="favorites-list">
        {favorites.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex align-items-center">
            <Image src={item.artwork} alt={item.name} className="item-image" />
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-artist">{item.artist}</div>
            </div>
            <Button 
              variant="outline-danger" 
              onClick={() => removeFromFavorites(item.id)} 
              className="remove-favorite-btn"
              title="Remove from Favorites"
            >
              <i className="bi bi-trash"></i>
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default FavoritesList;