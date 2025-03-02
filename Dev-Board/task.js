// Date
const today = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');
const [weekday, month, day, year] = formattedDate.split(' ');
document.getElementById('weekday').textContent = `${weekday},`;
document.getElementById('date').textContent = `${month} ${day} ${year}`;

