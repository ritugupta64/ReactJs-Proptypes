import React from 'react';
import {render} from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Pexample = (props) =>
	{
		return(
			<div>
			Name: {props.nameString} <br/>
			Number: {props.numberNum} <br/>
			boolean: {props.valBool} <br/>
			Array : {

					props.valArr.map((val) => {

						return (<li key={val}>{val}</li>)

					})


				}

			ArrayObject:{

						props.arrayValObj.map((val) => {

							return(<li key={val.age}>{val.name}</li>)


						})

				}

				<hr/>

				{props.children}
				</div>
			)

			

 	}



Pexample.propTypes = 
{
	nameString: PropTypes.string,
	numberNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	valBool: PropTypes.bool,
	valArr: PropTypes.arrayOf(PropTypes.number),
	arrayValObj: PropTypes.arrayOf(PropTypes.shape({

		name: PropTypes.name,
		age: PropTypes.number



	})),

	children: PropTypes.element.isRequired

}


class App extends React.Component{
	render(){
		return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			<Pexample nameString = {"name"}
					numberNum = {45}
					valBool = {true}
					valArr = {[1, 2, 3]}
					arrayValObj = {[{name:'defaultName', age:40}, {name:'defaultN', age:30} ]}>
		
					<p>Children</p>

					</Pexample>
		</div>
	</div>
	
   
</div>
		)
	}
}

render(<App />, document.getElementById('root'));

