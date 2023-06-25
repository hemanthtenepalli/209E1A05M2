document.getElementById('fetchNumbersBtn').addEventListener('click', function() {
  var urls = document.querySelectorAll('input[name="url"]');
  var numbersTableBody = document.getElementById('numbersTable').querySelector('tbody');
  numbersTableBody.innerHTML = '';

  for (var i = 0; i < urls.length; i++) {
    var url = urls[i].value;

    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error retrieving numbers');
        }
      })
      .then(function(data) {
        var numbers = data.numbers;
        var row = document.createElement('tr');
        var urlCell = document.createElement('td');
        var numbersCell = document.createElement('td');
        urlCell.textContent = url;
        numbersCell.textContent = numbers.join(', ');
        row.appendChild(urlCell);
        row.appendChild(numbersCell);
        numbersTableBody.appendChild(row);
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});
