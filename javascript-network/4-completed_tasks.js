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

    // Filter the data to find tasks with completed: true
    const completedTasks = todosData.filter((task) => task.completed === true);

    // Compute the number of completed tasks for each user
    completedTasks.forEach((task) => {
      const userId = task.userId;
      if (completedTasksByUserId[userId]) {
        completedTasksByUserId[userId]++;
      } else {
        completedTasksByUserId[userId] = 1;
      }
    });

    // Print users with completed tasks and the number of completed tasks
    for (const userId in completedTasksByUserId) {
      console.log(`User ID ${userId}: ${completedTasksByUserId[userId]} completed tasks`);
    }
  }
});
