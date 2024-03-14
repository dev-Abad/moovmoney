// Fetch data from '/getTransactionFee' endpoint
fetchData('/getTransactionFee', 'Fetching transaction fee');

// Fetch data from '/getMsisdnDetails' endpoint
fetchData('/getMsisdnDetails', 'Fetching MSISDN details');

// Fetch data from '/RequestToken' endpoint
fetchData('/RequestToken', 'Requesting token');

function fetchData(endpoint, message) {
  fetch(`http://localhost:1234${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      
    })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(message, data);
  })
  .catch(error => {
    console.error(`Error ${message.toLowerCase()}:`, error);
  });
}

// NOTE: include api.js to every html file