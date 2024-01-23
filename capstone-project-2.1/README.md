Instructions

What are Capstone Projects?

Project Description

The goal of this project is to create a Blog web application using Node.js, Express.js, and EJS. The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. Styling will be an important aspect of this project to ensure a good user experience.

Example

http://www.paulgraham.com/articles.html

Deliverables

    One Node project for the function of the website

    Including at least one EJS file for the structure of the website

    Including at least one CSS file for the styling of the website

Features

1. Post Creation: Users should be able to create new posts.

2. Post Viewing: The home page should allow the user to view all their posts.

3. Post Update/Delete: Users should be edit and delete posts as needed.

4. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.

Technical Requirements

1. Node.js & Express.js: The application will be a web server built using Node.js and Express.js. Express.js will handle routing and middleware.

2. EJS: EJS will be used as the templating engine to generate dynamic HTML based on the application's state.

Timeline

         Hour 0: Planning

    Gather content and design ideas, create wireframes and mockups. Plan out how the application will work, which routes might be necessary and which pages need to be made.


    Hour 1:  Setup

    Set up the project repository, initialize the Node.js application, and install necessary dependencies (Express.js, EJS).

    Create the application structure, including routes, views, and static files.

    Set up the Express.js server and define the necessary routes.


    Hour 2-3: Implementing Features

    Implement the post creation feature. This includes creating the form on the home page and handling the form submission in the server.

    Implement the post viewing feature. This includes displaying all the posts on the home page.

    Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.

    Implement the delete feature. This allows the user to click a button and remove the post from the home page.

    Implement the alternative list to show a different set of todo tasks.

    Test the application to ensure that post creation and viewing are working correctly.


    Hour 4-5: Styling and Polishing

    Style the application. This includes creating a CSS file, linking it to your EJS templates, and writing CSS or using Bootstrap/Flexbox/Grid to style the application.

    Test the application on different devices and browsers to ensure the styling works correctly.

    Fix any bugs or issues that came up during testing.

Certainly! Here are some key steps and considerations for your blog web application project:

1. **Setting Up Your Project:**

   - Install Node.js and npm if you haven't already.
   - Initialize your project using `npm init` and follow the prompts.
   - Install Express.js and EJS using `npm install express ejs`.

2. **Basic Server Structure:**

   - Create the main server file (e.g., `app.js`).
   - Set up Express to listen on a port.

3. **Project Structure:**

   - Organize your project into folders (e.g., `views` for EJS files, `public` for stylesheets).
   - Create an `index.ejs` file for the home page.

4. **Routing:**

   - Define routes for handling different pages (e.g., home, create post, view post).
   - Use `res.render` to render EJS views.

5. **Create Post Functionality:**

   - Implement a form on the home page for users to create posts.
   - Handle form submissions using Express.
   - Display the created post on a separate page.

6. **Styling:**

   - Add basic styling to improve the user interface.
   - Consider using CSS frameworks like Bootstrap for a quicker setup.

7. **Handling Edge Cases:**

   - Validate user inputs on the server side.
   - Implement basic error handling.

8. **Project Review:**

   - Test your application thoroughly.
   - Consider code organization and modularity.
   - Make sure styling is consistent and enhances user experience.

9. **Documentation:**

   - Document your code for future reference.
   - Write a brief README explaining how to run your application.

10. **Optional Enhancements:**
    - Consider adding more styling using CSS or a front-end framework.
    - Explore other templating engines or add client-side JavaScript for interactivity.

Remember to take this as a guide and feel free to customize based on your preferences and the project requirements. Good luck with your capstone project!
