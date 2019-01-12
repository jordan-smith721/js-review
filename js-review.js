console.log("Introduction to JavaScript");

function fizzBuzz()
{
    for (let i = 1; i <= 100; i++)
    {
        let output = "";
        //add fizz if divisible by 3
        if (i % 3 == 0)
        {
            output += "Fizz";
        }
        //add buzz if divisible by 5
        if (i % 5 == 0)
        {
            output += "Buzz";
        }
        //print output if any combination of "Fizz" and "Buzz" are included
        //print the number if output is empty
        console.log(output || i);
    }
}

function countBs(string)
{
    let numBs = 0;

    for (let i = 0; i < string.length; i++)
    {
        if (string[i] === "B")
        {
            numBs++;
        }
    }

    console.log("Number of capital Bs: " + numBs);
}
