const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response && response.statusCode === 200) {
        const todos = JSON.parse(body);

        // Create an object to store the task counts for each user
        const userTaskCounts = {};

        // Iterate through the todos and count completed tasks for each user
        todos.forEach((todo) => {
            if (todo.completed) {
                if (userTaskCounts[todo.userId]) {
                    userTaskCounts[todo.userId]++;
                } 
                    userTaskCounts[todo.userId] = 1;
            
            }
        });
    }
    });