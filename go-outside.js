var raining = true;
var cold = true;

if (raining)
{
    console.log ("Don't forget your umbrella!");
}

if (cold)
{
    console.log ("Make sure you pick out a scarf!");
}
else 
{
    console.log ("Short sleeves are fine.");
}

console.log ("Now you're ready to go outside!");

var temperature = -12;//15 for short sleeves are OK

if (temperature < 0)
{
    console.log ("Make sure you pick out a scarf!");
} else if (temperature < 15)
{
    console.log ("Short sleeves won't cut it!");
} else { console.log ("Short sleeves are fine.");}

console.log ("Now you're ready to go outside!");

if (isCitizen && age > 18)
{
    console.log ("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40)//Math.Abs(temperature) > 40
{
    console.log ("Maybe going outside isn't such a great idea...");
}

if (!raining)
{
    console.log ("Leave your unbrella at home!");
}
