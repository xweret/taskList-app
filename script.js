// Info about date 
const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')

// Tasks container 

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

