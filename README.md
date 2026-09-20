The name of my project is **Dev Stack** 
*Dev Stack*
`**Dev Stack**`
`Dev Stack`

Dev Stack is a browser-based catalogue of frontend, backend, database and Devops tools that enables you to compare tools side by side and then save the ones you actually intend to use alongside one another in a single shareable "stack". You no longer have to have notes on multiple browser tabs or in old repos, you'll have one place to browse, filter, and add it to your short list for your next project.

Technology that I use

React.js
Vite (build tool)
Tailwind CSS + DaisyUI
JavaScript (ES6+)
React-Toastify (for notifications)
JSON (for storing technology data)

3 features about my project

1. Browse and compare technologies. Every technology is shown as a card with its name, description, category, difficulty level, and rating, loaded from a JSON file rather than typed directly into the code.

2. Build your own stack. Clicking "Add to Stack" adds a technology to a personal list on the side of the page the same technology can't be added twice, and each item can be removed individually or all at once.

3. Instant feedback with toast notifications. Every action (adding, removing, clearing the stack) triggers a small popup notification confirming what just happened.


React Questions

1. What is JSX, and why is it used in React?
JSX lets you write something that looks like HTML directly inside your JavaScript code. It's used because it's way easier to see what the page will look like when the markup and the logic are right next to each other, instead of building everything with plain JavaScript functions.

2. What is the difference between props and state?
Props are values a component gets from its parent it can use them but can't change them. State is a value a component keeps and manages on its own, and it can change over time usually because the user did something like clicking a button.

3. What does the useState hook do, and where did you use it in this project?
useState lets a component remember a value even after it re-renders, and gives you a way to update that value. I used it in App.jsx to keep track of the list of technologies the user has added to their stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs some code after the component shows up on the screen. I needed it because fetching the JSON file is something that should happen once when the app starts, not every time the component re-renders.

5. Why does every item in a .map() list need a unique key prop?
The key helps React tell items in a list apart from each other. Without it React can get confused about which item is which when the list changes, and things like clicking the wrong item's button can happen. Since every technology already has its own id, I just used that as the key.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different things on the screen depending on some condition, instead of always showing the same thing. I used this in StackSidebar.jsx if the stack has zero items, it shows "Your stack is empty," and if it has items, it shows the actual list instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent passes data down using props, like <TechCard technology={tech} />. To send something back up, the parent also passes down a function as a prop, and the child calls that function when something happens. That's how the "Add to Stack" button works App.jsx gives TechCard a function called onAdd, and TechCard calls it when the button is clicked.
