This project solidified my understanding of DOM manipulation/events in JavaScript.

Link to project: [https://richa130.github.io/calculator/](https://richa130.github.io/calculator/)

The process:

Made the UI using HTML/CSS.

There are three variables to keep track of the current expression: **numOne**, **currOperator**, and **numTwo**. These values get updated accordingly based on which buttons are pressed. There is also a boolean variable, **operationPerformed**, which keeps track of whether an expression has been evaluated. This variable determines whether to reset the display or continue appending to it when the user presses another button.

Each of the number buttons has an eventListener. When pressed, the number will be appended to the display. However, if an operation has already been performed and a previous solution is currently being displayed, then the display gets reset before displaying the new number. 

When an operator is pressed, one of two things will happen. The default behavior is to set numOne equal to the current display and currOperator equal to the operator that was just pressed, then reset the display. However, if the user wants to chain together multiple expressions without pressing the equals button (eg. 1 + 2 + 3 + 4), we want each pair to be evaluated at a time. So, if numOne is already set to some value, then pressing an operator essentially does what the equals button does (performs an operation with the current values), but numOne gets set to the result of that operation rather than to zero.

Finally, the equals button sets numTwo equal to the current display. It performs the operation and updates the display with the new solution.