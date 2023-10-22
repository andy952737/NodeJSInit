import axios from 'axios';

const railsServerURL = 'http://localhost:3000'; // Update with your Rails server URL
const controller = 'groups'; // Replace with your Rails controller name

// Make an HTTP GET request to your Rails API endpoint
async function fetchDataFromRails() {
  try {
    const response = await axios.get(`${railsServerURL}/${controller}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Usage
(async () => {
  const jsonData = await fetchDataFromRails();
  if (jsonData) {
    console.log('Data from Rails API:', jsonData);
  }
})();

