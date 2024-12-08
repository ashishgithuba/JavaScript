let score=prompt("Enter your Score");
let grade;
if(score >=90 && score<=100)

{
    grade="A";
}
else if(score>=70 && score<=89 )
{
    grade="B";
}
else if(score >=60 && score<=79)
{
    grade="C";
}
else if(score >50 && score<=69) 
{
grade="D";
}
else if(score >40 && score<=59) 
    {
    grade="E";
    }
    else if(score >30 && score<=49) 
        {
        grade="F";
        }
        console.log(grade);