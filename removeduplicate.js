var arr=['luffy','ace','sabo','zoro','sanji','luffy'];
var temp=[]
var obj={};
for(var i of arr)
{
    if(obj[i])
    {
        obj[i]++;
    }
    else
    {
        obj[i]=1;
    }
}
console.log(Object.keys(obj));
