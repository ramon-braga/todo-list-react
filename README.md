# TODO List

This is a to-do list project (`TODO List`) developed with **React** and **Tailwind CSS**. The project allows adding, editing, checking, and removing tasks from the list. The interface is modern and user-friendly, with a custom style using Tailwind CSS.

## Features

- Add a new task to the list.
- Edit the text of an existing task.
- Mark a task as completed.
- Remove a task from the list.

## Installation

To install and run the project locally, follow the instructions below:

1. Clone the repository:
    ```shell
    git clone https://github.com/your-username/your-project.git
    ```

2. Navigate to the project directory:
    ```shell
    cd your-project
    ```

3. Install the dependencies:
    ```shell
    npm install
    ```

4. Start the development server:
    ```shell
    npm run dev
    ```

The project will be available in the browser at `http://localhost:3000`.

## Project Structure

The project consists of two main components:

- `Page`: The main component that contains the task list logic and the user interface.
- `listReducer`: A reducer that manages the state of the task list and supports actions such as adding, editing, toggling, and removing tasks.

## How to Use

- Add a new task by typing the text in the input field and pressing the `+` button.
- To mark a task as completed, click on the task text.
- To edit a task, click on the edit icon (pencil) next to the task.
- To remove a task, click on the trash icon next to the task.

## Final Considerations

This project was developed as a learning experience in **React** and **Tailwind CSS**. It served me as a practical example to understand the fundamental concepts of React such as functional components, hooks (`useReducer`), and state management.

---
