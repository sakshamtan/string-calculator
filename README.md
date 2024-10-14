String Calculator in TypeScript  
This project implements a String Calculator in TypeScript that sums numbers from a string input. It includes support for multiple delimiters, newlines, and custom delimiters. Additionally, it handles edge cases, such as negative numbers.  
Features  
Sum of comma-separated numbers  
Support for newlines (\n) as delimiters  
Custom delimiters (e.g., //;\n1;2;3)  
Throws errors for negative numbers with all negatives listed  
Handles an arbitrary amount of numbers  
Getting Started  
Follow these steps to clone, install dependencies, and run the project.  
Prerequisites  
Node.js (v14 or later)  
npm (installed with Node.js)  
Git (optional, for cloning)  
1. Clone the Repository  
git clone https://github.com/sakshamtan/string-calculator.git  
cd string-calculator  
2. Install Dependencies  
npm install  
3. Run Tests  
Make sure everything is working by running the tests:  
npm test  
4. Build the Project  
To generate JavaScript files from TypeScript:  
npm run build   
The output will be in the dist directory.  
Scripts  
Here are the main scripts available in the project:  
npm test: Run unit tests with Jest  
npm install: Install project dependencies  
npm run build: Compile TypeScript files to JavaScript  
Continuous Integration    
This project includes a GitHub Actions workflow (.github/workflows/ci.yml) that runs tests automatically on every push or pull request.   
Error Handling  
Empty String: Returns 0  
Negative Numbers: Throws an exception, e.g., "negative numbers not allowed: -2, -4"  
Custom Delimiters: Supports custom delimiters like //;\n1;2  
