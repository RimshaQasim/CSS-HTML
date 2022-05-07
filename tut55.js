console.log("max and min");
function max(a,b)
{
    
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
    function min(a,b)
    {
    if(a<b)
    {
        return a;
    }
    else
    {
        return b;
    }}

let a = 23;
let b = 45;
console.log(`the greather number from ${a} and ${b} is: ${max(a,b)}`);
console.log(`the smaller number from ${a} and ${b} is: ${min(a,b)}`);
