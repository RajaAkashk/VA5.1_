<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

  <h1>To Do API</h1>
  <button id="getData">Get data</button>
  <div id="dataContainer"></div>


  <script>

    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const getData = document.querySelector('#getData');
    const dataContainer = document.querySelector('#dataContainer')

    getData.addEventListener('click', function () {
      fetch(apiUrl)
        .then(function responseHandler(response) {
          return response.json()
        })
        .then(function showData(data) {
          console.log(data);
          dataContainer.innerHTML = `User Data: ${data.userId} <br> Title: ${data.title} <br> Completed Status: ${data.completed}`
        })
        .catch(function showError(error) {
          dataContainer.textContent = "An error occured while fetching data."
        }
        )
    })


  </script>
</body>

</html>
