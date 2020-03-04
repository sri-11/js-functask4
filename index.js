//----------------Task-4----------------------------------//

//return a sum of two values
function add(a,b)
{
  return a+b;
}
let res1=add(15,2);
console.log(res1);
//the output is 17

// returns a difference of two values
function sub(a,b)
{
  return a-b;
}
let res2=sub(15,2);
console.log(res2);
// the output is 13.

// returns a multiplied value of two numbers
function mul(a,b)
{
  return a*b;
}
let res3=mul(15,2);
console.log(res3);
// the output is 30.

// returns a quotient of two values
function div(a,b)
{
  return a/b;
}
let res4=div(15,2);
console.log(res4);
// the output is 7.5.

// returns a modulo number of two values
function mod(a,b)
{
  return a%b;
}
let res5=mod(15,2);
console.log(res5);
// the output is 1.

// returns the power of a given number
function pow(a)
{
  return a**a;
}
let res6=pow(2);
console.log(res6);
// the output is 4.

// compares two  string values
function strcmp(a,b)
{
  return a===b;
}
let res7=strcmp("hey","heylo");
console.log(res7)
//the output is false

// compares two  number values
function numcmp(a,b)
{
  return a===b;
}
let res8=numcmp(15,15);
console.log(res8)
//the output is true

// compares two diff values
function diffcmp(a,b)
{
 return typeof(a)===typeof(b)?true:false

}
let res9=diffcmp("Panda","Panda");
console.log(res9);
//the output is true.

//-------------Subdiv-2----------------------//

//finds the grade for a particular value
function gradefinder(num)
{
  if(num>=90)
  {
    return "S grade";
  }
else if(num>=80 && num<90)
  {
    return "A grade";
  }
    else if(num>=60 && num<80)
  {
    return "B grade";
  }
   else if(num>=40 && num<60)
  {
    return "C grade";
  }
   else
  {
    return "Fail";
  }
}
let res10=gradefinder(99);
console.log(res10);
//returns S grade because number is greater than 90

//to check whether the given alphabet is a vowel
function vowel(charc)
{
  if(charc=='a'|| charc=='e' || charc=='i' ||  charc=='o'||  charc=='u')
  {
    return "Vowel!";
  }
 else{
   return "Not a vowel";
 }
}
let res11=vowel('p');
console.log(res11);
//return not a Vowel

//finds whether the given num is a prime number
function prime(numb){
  let i;
  for(i=2;i<=numb-1;i++){
  if(numb%i==0)
  {
    return "Not prime";
  }
  else{
    return "prime";
  }
}}
let res12=prime(17);
console.log(res12)
//output is prime (17)
 
