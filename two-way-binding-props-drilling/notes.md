# Two way binding
- Always applied in form element
- If we are adding some input tag or something then react doesn't know that something is putted in it...so for this we use two way binding
- After applying two way binding firstly text goes to the react(useState) then display on the screen...means that is now becomed controlled element...means react now knows what you are typing
- for saving in react...apply onchange
- for displaying on screen...apply value
- these are called input attributes 

# Props Drilling
- They travel always from parents to child in our case Create and Read are the child of app(unidirectional)
- Data will be in common parent
- the common data will be in the parents and the child will access it through props