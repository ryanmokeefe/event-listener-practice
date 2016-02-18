#### Fix An Event Listener

We've provided you with three files: `index.html` `style.css` and `script.js`.  

The script file contains some faulty Javascript code. Your job is to fix it so that the event listeners create the following functionality...
* When the user hovers a mouse cursor over the `<div>`, the background of the page should turn blue.
* When user's mouse cursor is no longer hovering over the `<div>`, the background of the page should turn white.  
> **NOTE:** You have been provided with two functions -- `changeBackgroundColorToBlue` and `changeBackgroundColorToWhite` -- that can be used as callbacks. You DO NOT need to change the content of these functions.  

#### Callbacks As Anonymous Functions

We're not limited to using pre-defined functions as callbacks in an event listeners. We can place them directly inside of the event listener.
* Replace the reference to `printName` in your callback with an anonymous function. The anonymous function should do the exact same thing as `printName` did in the previous portion of this exercise.

You have an event listener. Now, copy and paste it so that you have now have two identical event listener definitions in your code. Answer the following questions...
* How many times do you expect the user's name to be printed to the console? Take a guess before testing the event listener.
* How many times did the user's name **actually** print to the console? Why might this be the case?
