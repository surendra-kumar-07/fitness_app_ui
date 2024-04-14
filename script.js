const monthElement = document.getElementById("months")
const yearsElement = document.getElementById("years")
const daysElement  = document.getElementById("days")
const scheduleList = document.getElementById("schedules")


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'];


    const nowDate = new Date()
const year = nowDate.getFullYear()
const month  = nowDate.getMonth()
const monthsFirstDay = new Date(`${year},${month},1`).getDay()

// set monthes
months.forEach((val,i) => {
    monthElement.innerHTML += `<option value="${val}" ${month == i ? 'selected':""}>${val}</option>`
});

// set yests
for (let i = 2024; i < 2030; i++) {
    yearsElement.innerHTML += `<option value="${i}" ${ year == i+1 ? 'selected':""}">${i}</option> `
}

// set days
let day = monthsFirstDay;
for (let index = (nowDate.getDate() - 1); index <= 31; index++) {
  daysElement.innerHTML += ` <li class="flex flex-col justify-center items-center text-center ${nowDate.getDate() == index ? "bg-gradient-to-r to-[#8DA4FF] from-[#D1DBFF] text-white": "bg-white"} rounded-lg w-16 h-20 ">
  <span class="text-xs">${days[day]}</span>
  <span class="font-semibold text-xl">${index}</span></li>`;
  if(day == 6){
    day = -1
  }
    day++
}

// set schedules
for (let i = 1; i < 12; i++) {
    scheduleList.innerHTML += `<li class="py-2"><span class="font-semibold text-xs">${i}:00 AM</span></li>`
    
}