---
title: 'My Notes Python'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
<table></table>

# Python Comments
Comments starts with a #, and Python will ignore them:

```python
#Esto es un comentario
print("Hello World!")
```

# Python Keywords


# Variables
Variables are containers for storing data values.

## Variable Names

```python
myvar="Elizabeth"
my_var="Elizabeth"
_my_var="Elizabeth"
myVar="Elizabeth"
MYVAR="Elizabeth"
myvar2="Elizabeth"

#Illegal variable names
2myvar="Elizabeth"
my-var="Elizabeth"
my var="Elizabeth"
```

# Indentation
<table>

<tr>
<td colspan="4">Block 1</td>
</tr>

<tr>
<td></td>
<td colspan="3">Block 2</td>
</tr>

<tr>
<td></td>
<td></td>
<td colspan="2">Block 3</td>
</tr>

<tr>
<td></td>
<td colspan="3">Block 2, Continuation</td>
</tr>

<tr>
<td colspan="4">Block 1, Continuation</td>
</tr>

</table>

```python
def product(x,y):
  return x*y

prod=product(10,20)
print(prod)
```

# Reading Input
> variable_name = input([prompt])

* <mark>the input()</mark> function prints the prompt statement on the screen

* When the user presses Enter key, the program resumes and input returns what the user typed as a string.

# Print Output
The <mark>print()</mark> function allows a program to display text onto the console.

<table>

<tr>
<td colspan="2" class="center">Print Output</td>
</tr>

<tr>
<td>1. std.format()</td>
<td>2. f-strings</td>
</tr>

</table>

```python
country=input("Which country do you live in? ")
print("I live in {0}".format(country))

"""OUTPUT:
Which country do you live in? Peru
I live in Peru
"""
```
```python
country=input("Which country do you live in? ")
print(f"I live in {country}")

"""OUTPUT:
Which country do you live in? Peru
I live in Peru
"""
```

## str.format() Method
Use <mark>str.format()</mark> method if you need to insert the value of a variable, expression or an object into another string and display it to the user as a single string.

> str.format(p0, p1, ..., k0=v0, k1=v1, ...)

```python
a=10
b=20

print("The values of a is {0} and b is {1}".format(a,b))
print("The values of b is {1} and a is {0}".format(a,b))

"""OUTPUT:
The values of a is 10 and b is 20
The values of b is 20 and a is 10
"""

print("Give me {ball} ball".format(ball="tennis"))
"""OUTPUT:
Give me tennis ball
"""
```

## f-strings
We use <mark>f-strings</mark> along within print() function to print the contents throughout this book, as f-strings are the most practical and straightforward way of formatting strings unless some special case arises.

```python
radius = int(input("Enter the radius of a circle"))
area_of_a_circle=3.1416*radius*radius
circumference_of_a_circle=2*3.1416*radius

print(f"Area={area_of_a_circle} and Circumference = {circumference_of_a_circle}")

"""OUTPUT:
Enter the radius of a circle 5
Area = 78.53750000000001 and Circumference = 31.4150000000003
"""
```

# Operators
## Python Arithmetic Operators
|Operator |	Name	| Example|
|---|---|---|
|+	| Addition	| x + y|
|-	| Subtraction	| x - y|
|*	| Multiplication	| x * y|
|/	| Division	| x / y|
|%	| Modulus	| x % y|
|**	| Exponentiation	| x ** y|
|//	| Floor division	| x // y|

```shell
>>> 10+35
 45
>>> −10+35
 25
>>> 4*2
 8
>>> 4**2
 16
>>> 45/10
 4.5
>>> 45//10.0
 4.0
>>> 2025%10
 5
>>> 2025//10
 202
```

## Assignment Operators

<table>
<tr><th>Operator</th><th>Example</th><th>Same As</th></tr>
<tr><td>=</td><td>x = 5</td><td>x = 5</td></tr>
<tr><td>+=</td><td>x += 3</td><td>x = x + 3</td></tr>
<tr><td>-=</td><td>x -= 3</td><td>x = x - 3</td></tr>
<tr><td>*=</td><td>x *= 3</td><td>x = x * 3</td></tr>
<tr><td>/=</td><td>x /= 3</td><td>x = x / 3</td></tr>
<tr><td>%=</td><td>x %= 3</td><td>x = x % 3</td></tr>
<tr><td>//=</td><td>x //= 3</td><td>x = x // 3</td></tr>
<tr><td>**=</td><td>x **= 3</td><td>x = x ** 3</td></tr>
<tr><td>&=</td><td>x &= 3</td><td>x = x & 3</td></tr>
<tr><td>|=</td><td>x |= 3</td><td>x = x | 3</td></tr>
<tr><td>^=</td><td>x ^= 3</td><td>x = x ^ 3</td></tr>
<tr><td>>>=</td><td>x >>= 3</td><td>x = x >> 3</td></tr>
<tr><td><<=</td><td>x <<= 3</td><td>x = x << 3</td></tr>
</table>

## Comparison Operators
<table>
<tr><th>Operator</th><th>Name</th><th>Example</th></tr>
<tr><td>==</td><td>Equal</td><td>x == y</td></tr>
<tr><td>!=</td><td>Not equal</td><td>x != y</td></tr>
<tr><td>> </td><td>Greater than</td><td>x > y</td></tr>
<tr><td>< </td><td>Less than</td><td>x < y</td></tr>
<tr><td>>=</td><td>Greater than or equal to</td><td>x >= y</td></tr>
<tr><td><=</td><td>Less than or equal to</td><td>x <= y</td></tr>
</table>

## Logical Operators

<table>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
<tr><td>and </td><td>Returns True if both statements are true</td><td>x < 5 and  x < 10</td></tr>
<tr><td>or</td><td>Returns True if one of the statements is true</td><td>x < 5 or x < 4</td></tr>
<tr><td>not</td><td>Reverse the result, returns False if the result is true</td><td>not(x < 5 and x < 10)</td></tr>
</table>

<table>
<tr><th>P</th>	<th>Q</th>	<th>P and Q</th>	<th>P or Q</th>	<th>Not P</th></tr>
<tr><td>T</td>	<td>T</td>	<td>T</td>	<td>T</td>	<td>F</td></tr>
<tr><td>T</td>	<td>F</td>	<td>F</td>	<td>T</td>	<td></td></tr>
<tr><td>F</td>	<td>T</td>	<td>F</td>	<td>T</td>	<td>T</td></tr>
<tr><td>F</td>	<td>F</td>	<td>F</td>	<td>F</td>	<td></td></tr>
</table>

## Bitwise Operators

<table>
<tr><th>Operator</th><th>Name</th><th>Description</th></tr>
<tr><td>& </td><td>AND</td><td>Sets each bit to 1 if both bits are 1</td></tr>
<tr><td>|</td><td>OR</td><td>Sets each bit to 1 if one of two bits is 1</td></tr>
<tr><td> ^</td><td>XOR</td><td>Sets each bit to 1 if only one of two bits is 1</td></tr>
<tr><td>~ </td><td>Ones</td><td>Inverts all the bits</td></tr>
<tr><td></td><td>Complement</td><td></td></tr>
<tr><td><<</td><td>Left shift</td><td>The left operands value is moved left by the number of bits specified by the right operand.</td></tr>
<tr><td>>></td><td>Right shift</td><td>The left operands value is moved right by the number of bits specified by the right operand.</td></tr>
</table>

<table>
<tr><th>P</th>	<th>Q</th>	<th>P & Q</th>	<th>P | Q</th>	<th>P ^ Q</th>	<th>~ P</th></tr>
<tr><td>0</td>	<td>0</td>	<td>0</td>	<td>0</td>	<td>0</td>	<td>1</td></tr>
<tr><td>0</td>	<td>1</td>	<td>0</td>	<td>1</td>	<td>1</td>	<td></td></tr>
<tr><td>1</td>	<td>0</td>	<td>0</td>	<td>1</td>	<td>1</td>	<td>0</td></tr>
<tr><td>1</td>	<td>1</td>	<td>1</td>	<td>1</td>	<td>0</td>	<td></td></tr>
</table>

<table>
<tr><th>AND (&)</th><th>OR (|)</th></tr>
<tr><td>A   = 00111100 ➡ (60)</td><td>A   = 00111100 ➡ (60)</td></tr>
<tr><td>B   = 00001101 ➡ (13)</td><td>B   = 00001101 ➡ (13)</td></tr>
<tr><td>A&B = 00001100 ➡ (12)</td><td>A|B = 00111101 ➡ (61)</td></tr>
<tr><th>EXCLUSIVE OR (^)</th><th>ONE’S COMPLEMENT (~)</th></tr>
<tr><td>A   = 00111100 ➡ (60)</td><td>A   = 00111100 ➡ (60)</td></tr>
<tr><td>B   = 00001101 ➡ (13)</td><td>~A  = 11000011 ➡ (-61)</td></tr>
<tr><td>A^B = 00110001 ➡ (49)</td><td></td></tr>
<tr><th>LEFT SHIFT (<<)</th><th>RIGHT SHIFT (>>)</th></tr>
<tr><td>A    = 00111100 ➡ (60)</td><td>A    = 00111100 ➡ (60)</td></tr>
<tr><td>A << 2 = 11110000 ➡ (240)</td><td>A >> 2 = 00001111 ➡ (15)</td></tr>
<tr><th>Left shift of 2 bits</th><th>Right shift of 2 bits</th></tr>
</table>

## OTHERS
### Identity Operators
<table>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
<tr><td>is </td><td>Returns true if both variables are the same object</td><td>x is y</td></tr>
<tr><td>is not</td><td>Returns true if both variables are not the same object</td><td>x is not y</td></tr>
</table>

### Membership Operators
<table>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
<tr><td>in </td><td>Returns True if a sequence with the specified value is present in the object</td><td>x in y</td></tr>
<tr><td>not in</td><td>Returns True if a sequence with the specified value is not present in the object</td><td>x not in y</td></tr>
</table>

# Data types
```python

```

# Type conversions
## The type() Function and Is Operator
```shell
>>> type(1)
<class 'int'>
>>> type(6.4)
<class 'float'>
>>> type("A")
<class 'str'>
>>> type(True)
<class 'bool'>
```
The operators is and is not are identity operators. Operator is evaluates to True if the values of operands on either side of the operator point to the same object and False otherwise.

```shell
>>> x = "Seattle"
>>> y = "Seattle"
>>> x is y
True
```
# Forms of control flow statements
![Image](/img/Python/img1.png)

## If else

### Nested if Statement
```python
if Boolean_Expression_1:
if Boolean_Expression_2:
	statement_1
else:
	statement_2
else:
	statement_3
```

## While
```python
while Boolean_Expression:
  statement(s)
```

## For
```python
for iteration_variable in sequence:
  statement(s)
```
The syntax for <mark>range()</mark> function is, 
<mark>range([start ,] stop [, step])</mark>

Both start and step arguments are optional and the range argument value should always be an integer.

* start → value indicates the beginning of the sequence. If the start argument is not specified, then the sequence of numbers start from zero by default.
* stop → Generates numbers up to this value but not including the number itself.
* step → indicates the difference between every two consecutive numbers in the sequence. The step value can be both negative and positive but not zero.

>**NOTE:** The square brackets in the syntax indicate that these arguments are optional. You can leave them out.

# The continue and break Statements

The break and continue statements provide greater control over the execution of code in a loop. Whenever the break statement is encountered, the execution control immediately jumps to the first instruction following the loop. 

To pass control to the next iteration without exiting the loop, use the continue statement. Both continue and break statements can be used in while and for loops.

# Catching Exceptions Using try and except Statement
When an error occurs at run time, an exception is thrown and exceptions must be handled to end the programs gracefully.

# Functions
Functions are one of the fundamental building blocks in Python programming language.

Functions are used when you have a block of statements that needs to be executed multiple times within the program.

```python
def sum(a,b):
  print('Sum a+b')
  result = a + b
  return result

sum_n=sum(1,4)
print(sum_n)
```
## A Few Built-in Functions in Python

<table>
<tr><th>Function Name</th><th>Syntax</th><th>Explanation</th></tr>
<tr><td>abs()</td><td>abs(x) where x is an integer or floating-point number.</td><td>The abs() function returns the absolute value of a number</td></tr>
<tr><td>min()</td><td>min(arg_1, arg_2, arg_3,…, arg_n) where arg_1, arg_2, arg_3 are the arguments.</td><td>The min() function returns the smallest of two or more arguments.</td></tr>
<tr><td>max()</td><td>max(arg_1, arg_2, arg_3,…,arg_n) where arg_1, arg_2, arg_3 are the arguments.</td><td>The max() function returns the largest of two or more arguments.</td></tr>
<tr><td>divmod()</td><td>divmod(a, b) where a and b are numbers representing numerator and denominator.</td><td>The divmod() function takes two numbers as arguments and return a pair of numbers consisting of their quotient and remainder.</td></tr>
<tr><td>pow()</td><td>pow(x, y) where x and y are numbers.</td><td>The pow(x, y) function returns x to the power y which is equivalent to using the power operator: x**y</td></tr>
<tr><td>len()</td><td>len(s) where s may be a string, byte, list, tuple, range, dictionary or a set.</td><td>The len() function returns the length or the number of items in an object.</td></tr>
</table>

## Modules
Modules in Python are reusable libraries of code having .py extension, which implements a group of methods and statements. Python comes with many built-in modules as part of the standard library.

```python
>>> import math
>>> print(math.ceil(5.4))
6
>>> print(math.sqrt(4))
2.0
>>> print(math.pi)
3.141592653589793
>>> print(math.cos(1))
0.5403023058681398
>>> math.factorial(6)
720
>>> math.pow(2, 3)
8.0
```

## Function Definition and Calling the Function
![Image](/img/Python/img2.png)

## If __ name __ == "__ main __":
If the Python interpreter is running the source program as a stand-alone main program, it sets the special built-in <mark>__ name __</mark> variable to have a string value <mark> __ main __ </mark>.

After setting up these special variables, the Python interpreter reads the program to execute the code found in it. All of the code that is at indentation level 0 gets executed. Block of statements in the function definition is not executed unless the function is called.

```python
if __name__ == "__main__":
  statement(s)
```

## The return Statement and void Function
Most of the times you may want the function to perform its specified task to calculate a value and return the value to the calling function so that it can be stored in a variable and used later.

> return [expression_list]

Functions without a return statement do return a value, albeit a rather boring one. This value is called None (it is a built-in name) which stands for “nothing”. Writing the value None is normally suppressed by them interpreter if it would be the only value written.

## Scope and Lifetime of Variables
* Python programs have two scopes: global and local. 
* A variable is a global variable if its value is accessible and modifiable throughout your program. 
* A variable that is defined inside a function definition is a local variable. 
* The local variable is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function definition. 
* Local variables inside a function definition have local scope and exist as long as the function is executing.

## *args and **kwargs
* *args and **kwargs are mostly used as parameters in function definitions. 
* *args and **kwargs allows you to pass a variable number of arguments to the calling function. 
* *args as parameter in function definition allows you to pass a non-keyworded, variable length tuple argument list to the calling function. 
* **kwargs as parameter in function definition allows you to pass keyworded, variable length dictionary argument list to the calling function. 
* *args must come after all the positional parameters and **kwargs must come right at the end.
