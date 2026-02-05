$(document).ready(function() {
    const $ftList = $('#ft_list');
    const $newBtn = $('#new_btn');

    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    if (todoCookie) {
        const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        tasks.reverse().forEach(task => addTaskToDOM(task));
    }

    $newBtn.on('click', function() {
        const task = prompt("What do you need to do?");
        if (task && task.trim() !== "") {
            addTaskToDOM(task);
            saveToCookies();
        }
    });

    function addTaskToDOM(text) {
        const $div = $('<div>', {
            class: 'todo-item',
            text: text
        });

        $div.on('click', function() {
            if (confirm("Do you really want to delete this TO DO?")) {
                $(this).remove();
                saveToCookies();
            }
        });

        $ftList.prepend($div);
    }

    function saveToCookies() {
        const tasks = [];
        $('.todo-item').each(function() {
            tasks.push($(this).text());
        });
        
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))}; ${expires}; path=/`;
    }
});