const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = () => {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    if (todoCookie) {
        const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        tasks.reverse().forEach(task => addTaskToDOM(task));
    }
};

newBtn.addEventListener('click', () => {
    const task = prompt("What do you need to do?");
    if (task && task.trim() !== "") {
        addTaskToDOM(task);
        saveToCookies();
    }
});

function addTaskToDOM(text) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    div.onclick = () => {
        if (confirm("Do you really want to delete this TO DO?")) {
            div.remove();
            saveToCookies();
        }
    };

    ftList.prepend(div);
}

function saveToCookies() {
    const tasks = [];
    const items = document.querySelectorAll('.todo-item');
    items.forEach(item => tasks.push(item.textContent));
    
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))}; ${expires}; path=/`;
}