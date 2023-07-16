
# Color Change App

This is a simple React application that allows users to change the background color of a parent div based on the input value provided in a child component.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd color-change-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application running.

## Project Structure

The project consists of two components:

### Parent Component

The `App` component is the parent component that renders the main application. It manages the state of the color value using the `useState` hook. The `handleColor` function is responsible for updating the color state based on the input value provided by the child component. The parent component renders a `<div>` element with a dynamic background color determined by the `color` state. It also renders the `Child` component, passing the `handleColor` function and `color` state as props.

### Child Component

The `Child` component is a child component that receives the `handleColor` function and `newColor` prop from the parent component. It renders an `<input>` element of type text with the `newColor` prop set as its value. The `onChange` event triggers the `handleColor` function in the parent component, updating the color value.

## Usage

1. Upon loading the application, you will see a parent `<div>` element with an initial background color.
2. In the child component, there is an input field where you can enter a color value.
3. As you type in the input field, the parent `<div>` element's background color will update in real-time based on the value entered.
4. The background color will reflect the last valid color value entered in the input field.
5. Experiment with different color names, hex codes, or RGB values to see the changes.

## Customization

You can customize this application by modifying the following parts:

- **Styling**: The parent and child components have their respective CSS classes defined in the `App.css` and `Child.css` files. Feel free to modify the styles as per your preference.
- **Input Validation**: Currently, the application does not perform any input validation for the color value entered. You can enhance the input validation logic in the `handleColor` function to enforce specific color formats or add error handling.



