## turkish-recipes-backend

I am setting up a back-end of an app which will contain some traditional Turkish recipes that I cook and love.

I use MongoDB as my database, my stack also contains Node.js and Express.js. I test the app with Insomnia and I use Nodemon module to track the changes.

This project aims to sharpen my back-end skills but I plan on adding an front-end to it too after completing the back-end.

The server can be run by " npm run dev " with Nodemon in the terminal. Without Nodemon, the command is " npm run serve ".

## Environmental Variables

This project uses environmental variables to securely store sensitive information and configure the application. Follow the steps below to set up the necessary environmental variables:

1. Create a new file in the project root directory and name it `.env`.

2. Open the `.env` file and define the required environmental variables in the following format:
CREDENTIALS=value

3. Save the `.env` file.

4. If needed, install the `dotenv` package by running the following command in your terminal:
npm install dotenv

5. Ensure that the .env file is added to the .gitignore file to prevent it from being committed to version control and to keep your sensitive information secure.


