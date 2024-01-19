// TODO months in calcultions

class ToDoListClass {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('TASKS'))
    if (!this.tasks) {
      this.tasks = [
        {
          task: 'You can add your own tasks here.',
          isComplete: false,
          date: new Date(),
          time: 'No time.',
        },
      ]
    }
  }

  loadTasks() {
    localStorage.setItem('TASKS', JSON.stringify(this.tasks))
    let tasksHTML = this.tasks.reduce(
      (html, task, index) => (html += this.generateTaskHtml(task, index)),
      ''
    )
    document.getElementById('tasks-list').innerHTML = tasksHTML
    this.markCallendar()
  }

  toggleTaskStatus(index) {
    this.tasks[index].isComplete = !this.tasks[index].isComplete
    this.loadTasks()
  }

  deleteTask(event, index) {
    event.preventDefault()
    this.tasks.splice(index, 1)
    this.loadTasks()
  }

  generateTaskHtml(task, index) {
    return `
      <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" ${
      task.isComplete ? 'checked' : ''
    }>
            </label>
          </div>
          <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
            task.isComplete ? 'complete' : ''
          }">
            ${new Date(task.date).toLocaleDateString()} - ${task.task}
          </div>
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a class="" href="#" onClick="toDo.deleteTask(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon far fa-trash-alt"></i></a>
          </div>
        </div>
      </li>
    `
  }

  markCallendar() {
    let elements = document.getElementsByClassName('day-number')
    let today = new Date().getDate()
    let calendarMonth = document.getElementById('month').value
    let calendarYear = document.getElementById('year').value
    // Delete class mrks task in callendar
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('mark-task')
      elements[i].classList.remove('mark-task-done')
    }
    this.tasks.forEach((task) => {
      let day = new Date(task.date).getDate()
      let month = new Date(task.date).getMonth()
      let year = new Date(task.date).getFullYear()
      for (let i = 0; i < elements.length; i++) {
        if (
          elements[i].textContent == day &&
          month == calendarMonth &&
          year == calendarYear
        ) {
          if (task.isComplete) {
            elements[i].classList.add('mark-task')
            elements[i].classList.add('mark-task-done')
          } else if (!task.isComplete && day < today) {
            elements[i].classList.add('mark-task')
            elements[i].classList.add('mark-task-before')
          } else {
            elements[i].classList.add('mark-task')
          }
          elements[i].title = task.task
        }
      }
    })
  }

  iteratePerCallendar() {}

  addTaskClick() {
    let targetTask = document.getElementById('task')
    let targetTaskDate = document.getElementById('task-date')
    let targetTaskTime = document.getElementById('task-time')
    let jsdatetime = new Date(targetTaskDate.value)
    // Add task to the list
    this.addTask(targetTask.value, jsdatetime, targetTaskTime.value)
    // Clear input fields
  }

  addTask(task, datetime, time) {
    let targetTask = document.getElementById('task')
    let targetTaskDate = document.getElementById('task-date')
    let targetTaskTime = document.getElementById('task-time')
    time = !(time == '') ? time : 'No time.'
    let newTask = {
      task: task,
      isComplete: false,
      date: datetime,
      time: time,
    }
    // Validation
    let parentDiv = document.getElementById('exampleModalLabel')

    if (task == '' || datetime == '' || datetime == 'Invalid Date') {
      parentDiv.classList.add('has-error')
      task == ''
        ? targetTask.classList.add('is-invalid')
        : targetTask.classList.add('is-valid')
      datetime == '' || datetime == 'Invalid Date'
        ? targetTaskDate.classList.add('is-invalid')
        : targetTaskDate.classList.add('is-valid')
    } else {
      parentDiv.classList.remove('has-error')
      parentDiv.append('')
      this.tasks.push(newTask)
      this.loadTasks()
      targetTask.value = ''
      targetTaskDate.value = ''
      targetTaskTime.value = ''
      //destroy modal
      $('exampleModal').dispose()
      // $('exampleModal').modal('dispose')
    }
  }
}

window.addEventListener('load', () => {
  toDo = new ToDoListClass()
  // toDo.loadTasks()
})
