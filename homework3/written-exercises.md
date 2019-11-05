# Homework 3 - Sebastian Grasso

## Problem 1
Address of A[0][0] is 0x7242799316a0  
Address of A[3][7] is 0x7242799317b0  
These addresses refer to the memory location in which these values are stored. When the struct is created, members of A[x][y] are assigned values sequentially from the available memory addresses, explaining why these values are located a few memory addresses away.  

## Problem 2
double *a[n]; -> a is an array of n pointers to doubles 
double (*b)[n]; -> b is a pointer to an an array of n doubles
double (*c())[n] -> c is a function with no parameters that returns a pointer to an array of n doubles
double (*d[n])() -> d is a function that returns an array of n pointers to doubles


## Problem 3
f is a function that accepts two parameters and returns a pointer to a function that takes in 1 or more ints and returns an int. The two parameters of f are:
  1. Pointer to a function that accepts two parameters (int and an array of ints) and returns an int
  2. int
## Problem 4
When redefining a feild in a C++ subclass, the subclass mantains the members of the ancestor class through the rules of class inheritance. The representation of a Derived object would contain two accesible b fields. To access the b of the Derived class, you would simply use the distinguisher b. In order to access the b belonging to the ancestor class, Base, you would have to use a scope resolution operator, which would look like Base::b.  
## Problem 5
The output of the program is:  
2  
5  
2  
According to the rules of static scoping, the x = 5 is defined within the function g but the reference to x in function f() follows its reference to it's initial declaration in the environment, x = 2. After the function g() is called and the 5 is printed, the value of x reverts back to it's original reference, and prints 2. 

If C++ used dynamic scoping, the order of the output would be:   
5  
5  
2  
This is because in dynamically scoped languages, the reference to x in f() refers to the value of x declared in it's most recent envionment, g().
## Problem 6
Raw Array    
``` C++
template <typename T>  
void scramble(T* shuffle, int length)
```  
std::array  
``` C++
template <typename T, unsigned long length>  
void scramble(array<T, length>)
```
