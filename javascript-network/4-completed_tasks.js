const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const request = require('request');

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response && response.statusCode === 200) {
        const todos = JSON.parse(body);

        // Create an object to store the completed task counts for each user
        const completedTasksByUser = {};

        // Iterate through the todos and count completed tasks for each user
        todos.forEach((todo) => {
            if (todo.completed === true) {
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the number of completed tasks by each user ID
        for (const userId in completedTasksByUser) {
            console.log(`'${userId}': ${completedTasksByUser[userId]},`);
        }
    } else {
        console.error('HTTP request failed with status code:', response ? response.statusCode : 'unknown');
    }
});
