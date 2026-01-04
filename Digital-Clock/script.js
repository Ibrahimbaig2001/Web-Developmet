function UpdateClock(){
    const now = new Date();
   // Extracting time using date function
    const hours = now.getHours().toString().padStart(2,'0');
    const twelvehours = hours % 12
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    //Extracting days
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']
    const dayName = days[now.getDay()]
    const day = now.getDate()
    const month = months[now.getMonth()]
    const year = now.getFullYear();

    // updating the time and date in the DOM
    document.getElementById('date').textContent = `${dayName}, ${month} ${day}, ${year}`;
    document.getElementById('time').textContent = `${twelvehours}:${minutes}:${seconds}`;
}
setInterval(UpdateClock,1000)