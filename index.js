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

  <div class="container mt-3">
    <h1>Random Users</h1>
    <button id="getUsersBtn" class="btn btn-info">Get Random Users</button>
    <div id="dataContainer" class="mt-3"></div>
  </div>

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

 const getUsersBtn = document.querySelector('#getUsersBtn')
    const dataContainer = document.querySelector('#dataContainer')

    const apiUrl = 'https://randomuser.me/api/?results=3';


    getUsersBtn.addEventListener('click', function () {
      fetch(apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then(function getUsers(data) {
          console.log(data.results)
          if (data && data.results) {

            let userHtml = [];

            for (let i = 0; i < data.results.length; i++) {

              let user = data.results[i];

              userHtml += `<div><img src="${user.picture.medium}"/> <p>name: ${user.name.first} ${user.name.last}</p> <p>Email:${user.email}</p>`

              dataContainer.innerHTML = userHtml;
            }

          }
          else {
            dataContainer.textContent = "Error! We need to fix it."
          }
        })
        .catch(function findError(error) {
          dataContainer.textContent = "There is a problem in fetching user data."
        })
    })

  </script>
</body>

</html>
