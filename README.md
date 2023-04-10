# Deadline Divider
## Guide
1. First select a start and end date
   - the button next to the start date will set it to today

2. Next, enter some numbers into the input fields
   - you can delete unwanted inputs with the ( - ) button next to the number
   - you can change set numbers by clicking them

3. Click results or calculate to view the results.
   - Results will show an amount per day and length of time at the top
   - and each amount entered next to how long that amount will take

4. You can click reset to start with a blank slate
   - or click back or inputs to go back to your inputs

You can play around with it yourself [here](https://ordinarilysam.github.io/deadline-divider-js/)
   
> Inputs tab
> ![Screenshot 2023-04-10 at 11 06 15 AM](https://user-images.githubusercontent.com/56322367/230942311-9f7a9a7b-b1c9-4c24-831a-ec572d2d2c0e.jpg)

> Results tab
> ![Screenshot 2023-04-10 at 11 21 03 AM](https://user-images.githubusercontent.com/56322367/230944890-8c5bf47b-8e1d-403b-8ee9-7a721114eaad.jpg)
 

   

## About this project
This is a little side project I am working on to get some experience with ReactJS. It doesn't have much functionality, but it will give me hands on experience with things like React file structure, hooks, props, state, etc.

The app is designed to take number inputs from the user, a start and end date, and then will calculate how many items per day the user will have to do to evenly spread out some workload (think read pages of a textbook, homework problems, etc). It will also say how long each section (or input field) will take. 

An example is, given a start date of today and an end date of one week from today, and the inputs 4, 10, 14. The program will say you need to do 4 things a day and tell you that the first section will take 1 day, the second will take 2.5 days, and the third will take 3.5 days.

It was initially something I created in vanilla javascript, but then I broke it somehow and wanted to recreate it using a framework.

### Features I plan on adding
- Styling (not really a feature, but it is pretty bad right now)
- Switch to toggle between fixed amount per day and fixed duration per segment
- _More to be added soon_
