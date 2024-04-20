1. What is a "side effect" in React? What are some examples?
Something that is outside of the control of React.
3rd party APIs, DBs, "outside" DOM updates



2. What is NOT a "side effect" in React? Examples?
Things that are in Reacts control. Rendering react components, 
managing react state.



3. When does React run your useEffect function? When does it NOT run
   the effect function?
   When the dependancies array changes.
   When the dependancies array doesn't change.
   


4. How would you explain what the "dependecies array" is?
A list of things for useEffect to listen to and run the 
callback function when they change
