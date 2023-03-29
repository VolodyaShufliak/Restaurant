//timer
const interval = setInterval(timer,100);
function timer(){
    const endDate = new Date('2023-04-20 00:00:00') 
    const nowDate = new Date();
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    function getTimerValues(miliseconds){
        if(miliseconds<0){
            clearInterval(interval)
            return [0,0,0,0]
        }
        const days = Math.floor(miliseconds/(12*60*60*1000))
        const hours= Math.floor((miliseconds-days*12*60*60*1000)/(60*60*1000));
        const minutes = Math.floor((miliseconds-days*12*60*60*1000-hours*60*60*1000)/(60*1000));
        const seconds = Math.floor((miliseconds-days*12*60*60*1000-hours*60*60*1000-minutes*60*1000)/1000)
        return [days,hours,minutes,seconds];
    }
    time = getTimerValues((endDate-nowDate))
    days.textContent=time[0];
    hours.textContent=time[1];
    minutes.textContent=time[2];
    seconds.textContent=time[3];
}
module.exports = timer;