const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a request to fetch the data from the API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response && response.statusCode === 200) {
    const todosData = JSON.parse(body);

    // Initialize an object to store the count of completed tasks by user id
    const completedTasksByUserId = {};

// Loop through the tasks and count completed tasks for each userId
for (const task of todosData) {
    const userId = task.userId;
    if (task.completed) {
        if (completedTasksByUserId[userId]) {
            completedTasksByUserId[userId]++;
        } else {
            completedTasksByUserId[userId] = 1;
        }
    }
}
console.log(`${userId} : ${completedTasksByUserId}`)
}
});
