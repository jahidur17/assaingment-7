Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 ans: JSX (JavaScript XML) is a syntax in React that looks like HTML but works in JavaScript. Makes code clean and readable


 - What is the difference between State and Props?
  ans:
  State: Mutable data, managed inside a component, can change over time....
  Props: Immutable data, passed from parent to child, cannot be changed by the child....


 - What is the useState hook, and how does it work?
  ans:useState is a React hook that lets you add state to a functional component...
  state → current value...
  setState → function to update it...
  Updating state triggers re-render of the component..


 - How can you share state between components in React?
  ans: Lifting State Up – Move the shared state to the closest common parent and pass it as props to children.......


 - How is event handling done in React?
 ans:In React, event handling is done using camelCase event names and functions instead of strings.
 Use camelCase (onClick, onChange)
 Pass a function reference, not a string (onClick={handleClick})
 react with a virtual dom........
