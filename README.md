# Getting Started with Which? Tech Test.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Approach
- I wrote a plan on notes, to help me think about the challenge before I tackled it.
- I made sure I highlighted what the requirements were just incase I misread and assumed anything which would cause me to fail.
- I started with the smallest components first and worked my way upwards. 
- Using TDD helped me develop to a specification and kept my thinking on track. 
## Challenges
- Thinking about the grid logic. 
## Tech Used & Justifications
- React
- ClassNames
- Node-Sass

ClassNames helps with any className logic I may need. Node-Sass for SASS.

Why Not Typescript? Was 50/50 about this. As I had very limited time, I thought I would get going with JS and I could think about quickly converting it if I did have a spare moment. For a small project like this, React & Proptypes was more than enough. Any bigger and it would have been something to think about introducing.
## If I Had More Time
- Maybe introduce some cypress tests
- Think about Code reusability and extensibility
- Light use of snapshot tests? Kept it light as they are easy to override
    - They are more useful in component libraries along with visual regression tests

- Performance. Could I have done the grid more performantly without sacrificing readability?
- Accessibility, I could have added a11y tools to my npm scripts. A tool like axe would be great.
- Why Not Styled Components? - YAGNI . Sass was more than enough. Vanilla CSS would have sufficed for this task too. 
- React over Next? -  It was a simple task and although I like next.js, I wouldn't need what it offers for this task.
- CSS Animations? Kept it simple as we were not judging design! (I can definitely do better than this task btw 😅).

## What I could have done better

- Better Tests. I could have added more thorough unit tests for the function that finds the common multiples.
## Notes

Thanks for taking the time