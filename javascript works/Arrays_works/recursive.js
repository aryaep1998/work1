var pattern="ABACC"
var op=[]
for(let char of pattern)
{
    if(op.includes(char))
    console.log(char,"recursive");
    else
    {
        op.push(char)
    }
}
