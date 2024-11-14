# JS Foundation

- [ ] Basics
- [ ]  OOPS
- [ ]  DOM

## Basics

- [ ] How JS executes the code
- [ ] Datatypes , variables and constants in JS
- [ ] Operations in JS
- [ ] Primitives in JS
- [ ] Non Primitives in JS
- [ ] Loops
- [ ] Array
- [ ] Functions , arrow function ,THIS and context in JS.
- [ ] High order function

### How JS executes the code

 1. **How to run JS code**

  ```nodejs
  node fileName.js
  ```

 2. **Execution**

  node fileName.js

Step one is parsing the code file . in which it collect all the keyword (like console)  so that it would be know what to do in this file. This is also knows as kind of tokenization process.
Next Step is the creation of the syntax tree in this define where to go , what to do.

Just In time complier :-  
In JS now a days whole code is not execute all at once. It just translate the things onto an intermediary state so that things can be run faster but does not execute.

After that conversion phase / translation phase.
in this it go to byte code (0,1) then it goes to machine code

![Code Execution](./img/Code_Execution.png)

### JavaScript Visualized - Execution Contexts + call stack

There is  special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

there are different kind of Execution Context in JavaScript

- Global Execution Context (GEC)
- Function Execution Context (FEC)
- Eval Execution Context

### Global Execution Context

Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

> For every JavaScript file, there can only be one GEC.

GEC performs the following tasks
  : it creates a global object where it is for Node.js and Window object for the browsers.
  :   reference the Windows object to 'this' keyword.
  :  Create a memory heap in order to store variables and function references.
  :   Then it stores all the functions declarations in the memory heap area and the variables in the GEC with initial values as 'undefined'.

> **Note**: Global Execution Context is only one in every code because the JS engine is single-threaded, and thus, only one global environment is possible for executing the JavaScript code.

### Functional Execution Context

FEC or Functional Execution Code is that type of context which is created by the JavaScript engine when any function call is found. Every function has its own execution context, and thus unlike GEC, the FEC can be more than one. Also, FEC can access the entire code of the GEC, but it is not possible for GEC to access all the code of the FEC. During the GEC code execution, a function call is initiated, and when found by the JS engine, it creates a new FEC for that specific function.

### Eval Function Execution Context

Any JS code that gets executed within the eval function creates and holds its own execution context. However, the eval function is not used by the JavaScript developers, but it is a part of the Execution Context.

### Execution Stack | Call Stack

 It stores the values in the form of LIFO (last in, first out).Code execution in two phase .First is Memory creation phase . Second is Execution Phase

First, the Global Execution Context is created. The first phase is the initialization phase, also known as the Memory Creation Phase, where variables are stored and assigned the value undefined. If a function is present in the code, its definition is stored.

The next phase is the Execution Phase, where variables are assigned values as per the code. When the function is called, it is added to the call stack, and a new Function Execution Context is created. In this context, a new memory creation phase is set up, followed by a new execution thread for the function's scope.

Once the function finishes executing, it is removed (or popped) from the call stack, and the code resumes from the next line, if there are any remaining lines.

Example 1:

 ```javascript
    function one(){
      console.log('It is the first function'); 
      two();
    }
    function two(){
      console.log('It is the second function'); 
      three();
    }
    function three(){
      console.log('It is the Third function'); 
    }
    one();
    two();
    three();
 ```

### Simple explanation of how JavaScript executes this code, step by step

### Global Execution Context Creation

  When the code first runs, JavaScript creates a Global Execution Context, which is where it will process each line one by one.

### Memory Creation Phase (Hoisting)

  During this phase, JavaScript scans through the code to find all function declarations and variable declarations. It "hoists" these functions to the top of the context, meaning they are set up in memory before any code is actually executed. So, at this point, one, two, and three functions are recognized and stored in memory with their definitions.

### Execution Phase (Running the Code)

  After the setup, JavaScript begins executing code from top to bottom.

#### Step 1: It reaches one(); and adds the one function to the call stack, which triggers the creation of a Function Execution Context for one

  Inside one, console.log('It is the first function'); runs and outputs:

  ```javascript
  
  It is the first function
  ```

  Then, two(); is called within one. JavaScript adds two to the call stack and creates a Function Execution Context for two.

  Inside two, console.log('It is the second function'); runs and outputs:

  ```javascript
  
  It is the second function
  ```

  Next, three(); is called within two. JavaScript adds three to the call stack and creates a Function Execution Context for three.

  Inside three, console.log('It is the second function'); runs again, and outputs:
  
  ```javascript
  
  It is the second function
  ```

  After three completes, its execution context is removed from the call stack, and control returns to two.

  After two completes, its execution context is removed from the call stack, and control returns to one.

  After one completes, its execution context is removed from the call stack, and control returns to the Global Execution Context.

#### Step 2: Next, JavaScript encounters two(); again. It adds two to the call stack and repeats the same steps as before, ultimately printing

  ```javascript
  
  It is the second function
  It is the second function
  ```

#### Step 3: Finally, JavaScript reaches three();, adding three to the call stack once more, printing

  ```javascript
  
  It is the second function
  ```

  Completion: When all functions have finished, the call stack is empty, and JavaScript has completed executing the code.

#### Final Output

  The console will display:

  ```javascript
  
  It is the first function
  It is the second function
  It is the Third function
  It is the second function
  It is the Third function
  It is the Third function
  ```

  Each function call produces a line in this order due to the way they are called sequentially.

example 2:

 ```javascript
    let firstName = "Jhone"
    const lastName = "Doe"
    function greet(name){
        const fullName = `${name} ${lastName}`
        return ` hi ${fullName}`
    }
    const message = greet(firstName)
    console.log(message)
 ```

### Step-by-Step Execution

#### 1. Global Execution Context Creation

  JavaScript starts by creating a global execution context, which has two phases:
  Memory Creation (Variable Environment): JavaScript scans the code and sets up space for variables and functions.
  Execution (Code Execution): JavaScript runs the code line by line.

#### 2. Memory Creation Phase

In this phase, JavaScript allocates memory for each variable and function it finds in the global scope.
firstName: Allocates memory with an initial value of **undefined**.
lastName: Allocates memory with an initial value of **undefined**
greet: **Allocates** memory for the greet function **definition**.
message: Allocates memory with an initial value of **undefined**.

#### 3. Execution Phase (Line-by-Line Execution)

Now, JavaScript begins to execute the code line by line.

Line 1: let firstName = "Jhone";

JavaScript assigns "Jhone" to the variable firstName.
Line 2: const lastName = "Doe";

JavaScript assigns "Doe" to the constant variable lastName.
Line 3-7: function greet(name) {...}

JavaScript already stored the definition of the greet function in memory, so it skips this section during the execution phase.
Line 8: const message = greet(firstName);

Here, JavaScript encounters a function call to greet(firstName).
JavaScript creates a new Function Execution Context for greet, which also has memory creation and execution phases.

#### 4. Function Execution Context for greet(firstName)

Memory Creation Phase (for greet function):

name: Allocates memory for the parameter name and assigns it the value of firstName, which is "Jhone".

fullName: Allocates memory with an initial value of undefined.
Execution Phase (inside greet):

Line 4: const fullName = ${name} ${lastName};
JavaScript combines name ("Jhone") and lastName ("Doe") to create "Jhone Doe", and assigns it to fullName.

Line 5: return hi ${fullName};
The function returns the string "hi Jhone Doe".
Return to Global Execution Context

The returned string "hi Jhone Doe" is assigned to message.

#### 5. Line 9: console.log(message)

JavaScript outputs the value of message to the console:

```
hi Jhone Doe
```

**Summary**

Global Execution Context initializes firstName, lastName, greet, and message.
greet function is called with "Jhone".
Inside greet, fullName is created and returned as "hi Jhone Doe".
console.log(message); 
outputs:

```
hi Jhone Doe
```
