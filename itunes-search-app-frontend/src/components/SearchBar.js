import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

// receives onSearch function as a prop
function SearchBar({ onSearch }) {
  // State for search term and media type
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, media);
  };

  return (
    // Form component
    <Form onSubmit={handleSubmit} className="search-bar">
      <Row>
        {/* Search input field */}
        <Col sm={12} md={5}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search iTunes"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="search-input"
            />
          </Form.Group>
        </Col>
        {/* Media type dropdown */}
        <Col sm={12} md={5}>
          <Form.Group>
            <Form.Control
              as="select"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="search-input"
            > 
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="music">Music</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="tvShow">TV Show</option>
              <option value="software">Software</option>
              <option value="ebook">eBook</option>
            </Form.Control>
          </Form.Group>
        </Col>
        {/* Search button */}
        <Col sm={12} md={2}>
          <Button variant="primary" type="submit" className="search-button">
            <i className="bi bi-search"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;