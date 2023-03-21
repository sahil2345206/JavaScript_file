

    
number = 10;
a = 0, 
b = 1, 
nextTerm = ""
for ( i = 1; i <= number; i++) {
    console.log(a);  
    nextTerm = a + b;
    console.log("nextterm", nextTerm)
    a = b;
    b = nextTerm;
    console.log(a, b, nextTerm)
}
