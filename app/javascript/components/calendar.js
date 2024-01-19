import './todolist'

class MyCalendarClass {
  constructor() {
    // this.daysName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
    this.today = new Date()
    this.currentMonth = this.today.getMonth()
    this.currentYear = this.today.getFullYear()
    this.resultHTML = ''
    this.monthsName = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
  }

  showToday() {
    this.today.getDate()
  }

  showCurrentMonth() {
    return this.monthsName[this.currentMonth]
  }

  showHeader(currentMonth, currentYear) {
    // this.resultHTML += `<div class="week">`;
    // for (let i = 0; i < this.daysName.length; i++) {
    //   this.resultHTML += `<div class="day-number">${this.daysName[i]}</div>`;
    // }
    // this.resultHTML += `</div>`;
    return `
    <div class="week" id="calendar-year-month-header">
      <i class="fa-solid fa-angles-left" onclick="cal.previous();"></i>
      <span id="calendar-year-month">${currentYear} ${this.showCurrentMonth()}</span>
      <i class="fa-solid fa-angles-right" onclick="cal.next()"></i>
    </div>
    <div class="week">
      <div class="day-number">Mon</div>
      <div class="day-number">Tue</div>
      <div class="day-number">Wen</div>
      <div class="day-number">Thu</div>
      <div class="day-number">Fri</div>
      <div class="day-number">Sat</div>
      <div class="day-number">Sun</div>
    </div>
    `
  }

  showCalendar(month, year) {
    this.resultHTML += `<input type="hidden" id="month" value="${month}">`
    this.resultHTML += `<input type="hidden" id="year" value="${year}">`
    let firstDay = new Date(year, month).getDay()
    let date = 1
    for (let i = 0; i < 6; i++) {
      this.resultHTML += `<div class="week">`
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay - 1) {
          this.resultHTML += `<div class="day-number">&nbsp;</div>`
        } else if (date > this.daysInMonth(month, year)) {
          this.resultHTML += `<div class="day-number">&nbsp;</div>`
        } else {
          if (
            date === this.today.getDate() &&
            year === this.today.getFullYear() &&
            month === this.today.getMonth()
          ) {
            this.resultHTML += `<div class="day-number today-mark">${date}</div>`
          } else {
            this.resultHTML += `<div class="day-number">${date}</div>`
          }
          date++
        }
      }
      this.resultHTML += `</div>`
    }
    return this.resultHTML
  }

  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate()
  }

  next() {
    this.currentYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear
    this.currentMonth = (this.currentMonth + 1) % 12
    this.showFullCalendar(this.currentMonth, this.currentYear)
  }
  previous() {
    this.currentYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1
    this.showFullCalendar(this.currentMonth, this.currentYear)
  }
  showFullCalendar(currentMonth, currentYear) {
    // Clear HTML from previous version
    document.getElementById('calendar-box').innerHTML = ''
    this.resultHTML = ''
    document.getElementById('calendar-box').innerHTML =
      this.showHeader(currentMonth, currentYear) +
      this.showCalendar(currentMonth, currentYear)

    //--------------------------------------------------
    toDo.loadTasks()
    toDo.findPTTasks()
  }
}

window.addEventListener('load', () => {
  cal = new MyCalendarClass()
  let date = new Date()
  let currentMonth = date.getMonth()
  let currentYear = date.getFullYear()
  document.getElementById('calendar-today').innerText = cal.showToday()
  document.getElementById('calendar-month').innerText = cal.showCurrentMonth()
  document.getElementById('calendar-box').innerHTML =
    cal.showHeader(currentMonth, currentYear) +
    cal.showCalendar(currentMonth, currentYear)
  toDo.loadTasks()
})
