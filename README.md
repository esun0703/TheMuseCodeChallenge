# Getting App Started
This app was based off of CreateReactApp for quick configuration. 


## Steps

git clone this repo,
Ensure you have Node Version 14 or Up
### `yarn install`
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes
This code challenge includes:
* The ability to filter by company, level, category, and location, but based only on hard coded data
* The user is also able to load a list of jobs from the api, by clicking search arrow button or hitting enter on keyboard. 

This does not include:
* Searching a job by title, due to no API access exposing this feature. 
* data for filters were hard coded because API gave no aggregation response in the return object.
* No filter component was added due to time 

Given the time in a real project, I would include jest tests, storybook definitions, more responsive styling, infinite scrolling, pagination, 