fetch('http://localhost:1234/getTransactionFee', {
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
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
