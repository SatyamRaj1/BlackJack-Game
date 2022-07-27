# link css to HTML
- in HTML in HEAD add css link 
- CSS -> Cascade Stylesheet
add link as ==\<link rel="Stylesheet" href = "index.css">==
- design CSS as in code
*in body all attributes work as default for body part so when color is mentioned in H1 it overwrite color for H1 only*
- in CSS # is used to specify that it is an element
# Developing User Interface
- create a ==Start== button which when clicked calls StartGame function
- grab sum element of HTML and modify by JavaScript and display sum
# Query Selector
- alternative method to grab HTML element
- can be used in place of getElementById
==document.querySelector(''#sum-el")==
- # is used to specify that we are selecting by Id
- querySelector is a broader tool so we need to specify that we are selecting by ID
- `.` is used to select classes
- to select *body or higher elements* we can directly specify there name eg. document.querySelector("body")
- changing body will change complete body

# Random Numbers
- use Math.random() -> gives a random number between 0 and 1 (0 inclusive and 1 exclusive)
- to generate within a range use `Start_no. + Math.random() * (End_no. - Start_no.)`
- to generate whole no. use `Math.floor()` it gives greatest integer(\[x])
### To disable button after a BlackJack or out of game
- in HTML in button `disabled="disabled"`
- in JavaScript, when you wat to disable button `document.getElementById("new-btn").disabled = !(isAlive);`
# breaking button 
- to avoid new card after a certain condition is met
- make a function in ehich check if condition is met then don't throw new card or show wanted message
- this function to be called if `new card` button is clicked
# Objects
to store player name and his chips(balance) we can store in object
`let player = {
							name : player_name ,
							chips : player_chips
							}`
to get a value use object.key `player.name` or `player["name"]`
## Methods on object
`let player = {
Hello : function(){
									console.log("Hello")
									...
									}	`
a function inside object 
to invoke `player.Hello()`
									