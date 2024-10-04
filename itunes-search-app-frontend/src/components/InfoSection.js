import React from 'react';
import { Alert } from 'react-bootstrap';

function InfoSection() {
  return (
    <Alert variant="info" className="search-bar">
      <Alert.Heading>How to use this app:</Alert.Heading>
      <ol>
        <li>Enter a search term in the search bar.</li>
        <li>Select a content type from the dropdown menu (or leave it as "All" to search everything).</li>
        <li>Click the search button or press Enter to search.</li>
        <li>Browse through the results and click the heart icon to add items to your favorites.</li>
        <li>View your favorited items in the Favorites section on the right.</li>
        <li>To remove an item from favorites, click the trash icon next to it in the Favorites list.</li>
      </ol>
      
    </Alert>
  );
}

export default InfoSection;