<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    type="text/css" />
  <style>
    ul,
    li {
      list-style: none;
    }

    ul {
      padding: 0;
    }
  </style>
</head>

<body class="container py-4">

  <h1>To-Do List</h1>
  <section>
    <form id="eventForm">
      <div>
        <label class="form-label fw-medium fs-6">Enter Task:</label>
        <input id="taskInput" class="form-control" placeholder="Enter your task" />
      </div>

      <div class="mt-2">
        <label class="form-label fw-medium fs-6">Select Day:</label>
        <select class="form-select" id="selectDay">
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary my-3">Add Task</button>
    </form>
  </section>

  <section>
    <div class="row">
      <div class="col-md-6">
        <h2>Today's Tasks:</h2>
        <div>
          <ul id="resultWeekDay"></ul>
          <div>
            <p>Tomorrrow's Tasks: <span id="countWeekDayEvent">0</span> </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <h2>Event on Weekends:</h2>
        <div>
          <ul id="resultWeekEnds"></ul>
          <div>
            <p>Total Weekends Events: <span id="countWeekEndsEvent">0</span> </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <h3>Task Summary</h3>
        <div id="taskSummary"></div>
      </div>
    </div>
  </section>

  <script>
    const eventForm = document.querySelector('#eventForm')
    const resultWeekDay = document.querySelector('#resultWeekDay')
    const resultWeekEnds = document.querySelector('#resultWeekEnds')
    const countWeekDayEvent = document.querySelector('#countWeekDayEvent')
    const countWeekEndsEvent = document.querySelector('#countWeekEndsEvent')
    const taskSummary = document.querySelector('#taskSummary')


    const selectDay = document.querySelector('#selectDay')
    let selectedDay = selectDay.value;

    selectDay.addEventListener('change', function () {
      selectedDay = selectDay.value
    })


    let WeekEndsTaskList = [];
    let WeekDayTaskList = [];
    let count1 = 0;
    let count2 = 0;

    eventForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputEvent = document.querySelector('#taskInput').value;
      console.log(inputEvent, "input")
      if (selectedDay === "Tomorrow") {
        WeekEndsTaskList.push(`${inputEvent}`)
        count2++;
        updateWeekEndsTask();
      } else {
        WeekDayTaskList.push(`${inputEvent}`)
        count1++;
        updateWeekDaysTask();
      }
    });

    function updateWeekEndsTask() {
      countWeekEndsEvent.textContent = count2;
      resultWeekEnds.innerHTML = "";
      let storage = "";
      for (let i = 0; i < WeekEndsTaskList.length; i++) {
        storage += `<div class="border p-2 px-3"><div class="d-flex justify-content-between"><p class="card-text fs-6 fw-medium m-0 pt-1">${WeekEndsTaskList[i]}</p><button onClick="deleteEventWeekEnds(${i})" class="btn btn-danger">Delete</button></div></div>`;
      }
      const liElement = document.createElement('li');
      liElement.innerHTML = storage;
      resultWeekEnds.appendChild(liElement);
      generateTaskSummary()
    }

    function deleteEventWeekEnds(id) {
      WeekEndsTaskList.splice([id], 1);
      count2--;
      updateWeekEndsTask();
    }


    function updateWeekDaysTask() {
      countWeekDayEvent.textContent = count1;
      resultWeekDay.innerHTML = ""
      let storage2 = "";
      for (let i = 0; i < WeekDayTaskList.length; i++) {
        storage2 += `<div class="border p-2 px-3"><div class="d-flex justify-content-between"><p class="card-text fs-6 fw-medium m-0 pt-1">${WeekDayTaskList[i]}</p><button onClick="deleteWeekDayEvent(${i})" class="btn btn-danger">Delete</button></div></div>`;
      }
      const liElement2 = document.createElement('li');
      liElement2.innerHTML = storage2;
      resultWeekDay.appendChild(liElement2);

      generateTaskSummary()
    }


    function deleteWeekDayEvent(id) {
      WeekDayTaskList.splice([id], 1);
      count1--;
      updateWeekDaysTask();
    }


    function generateTaskSummary() {

      if (count2 > count1) {
        taskSummary.innerHTML = `<p>Tasks Today: ${count1} | Tasks Tomorrow: ${count2} </p> <p>More tasks tomorrow!</p>`
        taskSummary.style.color = 'green'
      }
      else if (count2 === count1) {
        taskSummary.innerHTML = `<p>Tasks Today: ${count1} | Tasks Tomorrow: ${count2} </p> `
        taskSummary.style.color = 'black'
      }
      else {
        taskSummary.innerHTML = `<p>Tasks Today: ${count1} | Tasks Tomorrow: ${count2} </p> <p>More tasks today!</p>`
        taskSummary.style.color = 'red'
      }
    }



  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
