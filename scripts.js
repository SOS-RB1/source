let initialRedColor = "rgb(255, 82, 82)";
let initialorangeColor = "rgb(255, 152, 0)";
let initialyellowColor = "rgb(255, 214, 0)";
let initialGreenColor = "rgb(100, 221, 23)";
let initialblueColor = "rgb(64, 196, 255)";
let initialindigoColor = "rgb(197, 202, 233)";
let initialvioletColor = "rgb(234, 128, 252)";

let redDots = document.getElementsByClassName("red-dot");
let orangeDots = document.getElementsByClassName("orange-dot");
let yellowDots = document.getElementsByClassName("yellow-dot");
let greenDots = document.getElementsByClassName("green-dot");
let blueDots = document.getElementsByClassName("blue-dot");
let indigoDots = document.getElementsByClassName("indigo-dot");
let violetDots = document.getElementsByClassName("violet-dot");

document.getElementById("red-btn").addEventListener("click", function ()
{
	for (let i = 0; i < redDots.length; i++)
	{
		let currentColor = redDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			redDots[i].style.backgroundColor = initialRedColor;
		}
		else
		{
			redDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("orange-btn").addEventListener("click", function ()
{
	for (let i = 0; i < orangeDots.length; i++)
	{
		let currentColor = orangeDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			orangeDots[i].style.backgroundColor = initialorangeColor;
		}
		else
		{
			orangeDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("yellow-btn").addEventListener("click", function ()
{
	for (let i = 0; i < yellowDots.length; i++)
	{
		let currentColor = yellowDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			yellowDots[i].style.backgroundColor = initialyellowColor;
		}
		else
		{
			yellowDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("green-btn").addEventListener("click", function ()
{
	for (let i = 0; i < greenDots.length; i++)
	{
		let currentColor = greenDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			greenDots[i].style.backgroundColor = initialGreenColor;
		}
		else
		{
			greenDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("blue-btn").addEventListener("click", function ()
{
	for (let i = 0; i < blueDots.length; i++)
	{
		let currentColor = blueDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			blueDots[i].style.backgroundColor = initialblueColor;
		}
		else
		{
			blueDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("indigo-btn").addEventListener("click", function ()
{
	for (let i = 0; i < indigoDots.length; i++)
	{
		let currentColor = indigoDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			indigoDots[i].style.backgroundColor = initialindigoColor;
		}
		else
		{
			indigoDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});

document.getElementById("violet-btn").addEventListener("click", function ()
{
	for (let i = 0; i < violetDots.length; i++)
	{
		let currentColor = violetDots[i].style.backgroundColor;
		if (currentColor === "rgb(69, 69, 69)")
		{
			violetDots[i].style.backgroundColor = initialvioletColor;
		}
		else
		{
			violetDots[i].style.backgroundColor = "rgb(69, 69, 69)";
		}
	}
});