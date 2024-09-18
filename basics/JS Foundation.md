# JS Foundation

- [ ] Basics
- [ ]  OOPS
- [ ]  DOM



## Basics
- [ ] How JS executes the code
- [ ] Datatypes , variables and constants in JS
- [ ]  Operations in JS
- [ ]  Primitives in JS
- [ ]  Non Primitives in JS
- [ ]   Loops
- [ ] Array
 - [ ] Functions , arrow function ,THIS and context in JS
 - [ ] High order function

### How JS executes the code

 1. **How to run JS code** 

  ```nodejs
  node fileName.js
  ```
 

 2. **Execution**

  node fileName.js

[CodeExecution]('../img/Code Execution.png')

Step one is parsing the code file . in which it collect all the keyword (like console)  so that it would be know what to do in this file. This is also knows as kind of tokenization process.
Next Step is the creation of the syntax tree in this define where to go , what to do.

Just In time complier :-  
In JS now a days whole code is not execute all at once. It just translate the things onto an intermediary state so that things can be run faster but does not execute.

After that conversion phase / translation phase.
in this it go to byte code (0,1) then it goes to machine code


