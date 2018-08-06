import React, { Component } from 'react';
import './levelInfo.css'
import star from './star.png'
import { Link } from 'react-router-dom'
class Levels extends Component{
	render(){
		const arr  = [1,2,3];
		const starArr = [1,2,3,4,5]
		const starRating = starArr.map((i) =>{
			return (
				<div className="starContainer">
					<div className="starBox">
						<img className ="starImg" src={star}/>
					</div>
				</div>
				)
		});

		const levelList = arr.map((levelNo, index) =>{
			return(
				
				<div key = {index} className="levelInfo">
					<h2>Level : {levelNo}</h2>
					{starRating}
				</div>
				)
		});

		return(
			<div className ="levelBase">
				{levelList}
			</div>
			)
	}
}

export default Levels

