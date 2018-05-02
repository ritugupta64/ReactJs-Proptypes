What are prop-types in reactjs?

React has built-in abilities to check their prop types. It enforce to props that value should be same as defined in PropTypes.

-> To install the PropTypes use command as below:

npm install prop-types


-> And import it into your component, where you would like to check the 

value of props.

import PropTypes from 'prop-types';


-> Please find the GitHub url to see the example of prop-types:(Pls 

replace the index.js with your current file, I didn't push all the data 

here only required file is uploaded)

https://github.com/ritugupta64/ReactJs-Proptypes



import PropTypes from 'prop-types' 



myComp.propTypes:{

	
exampleString:PropTypes.string, // Sting

exampleNumber:PropTypes.number, // Number

exampleArray:PropTypes.array, // Array

exampleFunction:PropTypes.func, // Function

exampleObj:PropTypes.object, // Object

exampleBool:PropTypes.bool, // Boolean

exampleChoice:Proptypes.oneOfType([PropTypes.number, PropTypes.string])// 

here we can pass either number and string. It just works like an array.

exampleArrayValue:PropTypes.arrayOf(PropTypes.number)// array should be 

number

exampleObjectValue:PropTypes.objectOf(PropTypes.string)


// if your Array inside has objects then here we use shape method.
exampleArrayValObj:PropTypes.arrayOf(PropTypes.shape({

		name: PropTypes.name,
		age: PropTypes.number
	})),

//With PropTypes.element you can specify that only a single child can be 

passed to a component as children. 

exampleChilder.propTypes = {
  children: PropTypes.element.isRequired
};





}
