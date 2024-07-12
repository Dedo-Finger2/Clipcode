import type { PageLoad } from './$types';

const snippets = [
	{
		title: 'Display an Image in HTML',
		favorite: false,
		language: 'html',
		code: `<img src="image.jpg" alt="My Image" />`
	},
	{
		title: 'Declare a Variable in TypeScript',
		favorite: false,
		language: 'typescript',
		code: 'let message: string = "Hello";'
	},
	{
		title: 'Create a Button in HTML',
		favorite: false,
		language: 'html',
		code: `
<button type="button">
	Click Me
</button>`
	},
	{
		title: 'Define a Function in TypeScript',
		favorite: false,
		language: 'typescript',
		code: `
function greet(name: string): string {
	return "Hello! " + name;
}`
	},
	{
		title: 'Add a CSS Style in HTML',
		favorite: false,
		language: 'html',
		code: `
<style>
	body {
		background-color: #f0f0f0;
	}
</style>`
	},
	{
		title: 'Use a Conditional Statement in TypeScript',
		favorite: false,
		language: 'typescript',
		code: `
if (age >= 18) {
	console.log("You are an adult");
}`
	},
	{
		title: 'Create a List in HTML',
		favorite: false,
		language: 'html',
		code: `
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>`
	},
	{
		title: 'Loop through an Array in TypeScript',
		favorite: false,
		language: 'typescript',
		code: `
const numbers: number[] = [1, 2, 3];

for (const num of numbers) {
	console.log(num);
}`
	},
	{
		title: 'Get User Input in HTML',
		favorite: false,
		language: 'html',
		code: `<input type="text" id="username" placeholder="Enter your name" />`
	},
	{
		title: 'Handle Click Events in TypeScript',
		favorite: false,
		language: 'typescript',
		code: `
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
	console.log("Button clicked!");
});`
	}
];

export const load: PageLoad = () => {
	return {
		snippets
	};
};
