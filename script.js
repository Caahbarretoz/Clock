const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);
import MicroModal from 'micromodal';
const moment = require('moment-timezone');
const timeZones = moment.tz.names();
const clockHours = document.getElementById('hours');
const clockDate = document.getElementById('date');
const timezoneOptions = document.getElementById('options');
const applyButton = document.getElementById('button-apply')
const modalExternBtn = document.getElementById('modal_extern_btn')
let tz = dayjs.tz.guess()
modalExternBtn.textContent = tz
let opcaoSelecionada = ""

console.log(timeZones);
timeZones.forEach((timezone) => {
    const option = document.createElement('option');
    option.value = timezone;
    option.textContent = timezone;
    timezoneOptions.appendChild(option);
    
})

function setTimezone() {
    tz = opcaoSelecionada;
    modalExternBtn.textContent = tz
}

function update() {
    const now = dayjs();
    const now_timezone = now.tz(tz)
    const hour = now_timezone.format('HH:mm:ss');
    const date = now_timezone.format('dddd, D MMMM, YYYY');
    clockHours.textContent = hour;
    clockHours.textContent = hour;
    clockDate.textContent = date;
}

setInterval(update, 1000);
update();


document.addEventListener("DOMContentLoaded", function() {
  
  try {
    
    MicroModal.init({
      awaitCloseAnimation: true,// set to false, to remove close animation
      onShow: function(modal) {
      },
      onClose: function(modal) {
      }
    });
    
  } catch (e) {
    console.log("micromodal error: ", e);
  }
  
});

timezoneOptions.addEventListener('change', function() {
    opcaoSelecionada = timezoneOptions.value;
});

applyButton.addEventListener("click", setTimezone)
