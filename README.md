# GitHub User Profile Search Web Application

Create a React-based web application that provides a simple and user-friendly interface. The main purpose of this project is to enable users to search for GitHub profiles by entering a username into an input field and clicking a search button. The application will then send a request to the GitHub API endpoint at `https://api.github.com/users/{username}`, where `{username}` represents the entered username.

For example, if a user inputs "mojombo" and clicks the search button, the application will send a request to retrieve information about the GitHub user "mojombo."

Upon receiving the API response, the application will dynamically display the following user information in a new row on the webpage:

- User avatar
- Company
- Email
- Number of followers
- Number of following
- User's name
- Number of public repositories

**Project Notes and Features:**

1. Utilize the ES6 fetch method to make API requests.
2. Convert the returned API response into a JSON object for easier data handling.
3. Ensure that each time a user searches for a new username, the application appends the corresponding user information in a new row on the page.
4. Implement a feature that prevents sending a duplicate request for the same username entered consecutively. Instead, scroll the user to the last row displaying the information for the previously searched username.
5. Handle cases where certain fields, such as company, email, or other user information, may be null by not displaying them on the webpage.

In summary, this project involves building a React web application that allows users to search for GitHub profiles, fetch and display user information from the GitHub API, and provide a seamless user experience with the described features and functionality.
