# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > that function is contained in the Kids.js module. The logic is initialize the click target, the click targets ID, and datatype -> check if the datatype is equal to "child" -> if yes iterate over every kid element of the children array checking the .id property -> make a text alert showing current kids name and wish
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > findCelebrityMatch() matches the foreign celebrityId in the children table to the correct Id of the celebrity in the celebrities table. this needs to be done for every kid and thus is within the for loop.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > first you match the id of the object click on to the celebrities.id property then you use string interpolation to display the celebrity.sport property ${celebrity.sport}
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > select the HTML container -> create a variable containing an HTML string that using string interpolation to call the Kids(), celebrities(), and pairings() functions which give an HTML string as a return -> set the main containers inner HTML to the HTML string that was just created in order to update the DOM with the new information.
