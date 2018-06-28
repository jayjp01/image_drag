import React, { Component } from 'react';

class AddImage extends Component {
  constructor(){
	super();
	this.state = {
	  newImage:{}
	}
  }
 
  static defaultProps = {
	categories: ['grid_1', 'grid_2', 'grid_3','grid_4','grid_5','grid_6','grid_7','grid_8']
  }

  handleSubmit(input){
	var preview = input.target.parentElement.lastChild;
	var file    = input.target.files[0]
	var reader  = new FileReader();

	reader.addEventListener("load", function () {
		preview.src = reader.result;
	}, false);

	if (file) {
		reader.readAsDataURL(file);
	}
	document.getElementById('imageDrage').addEventListener('dragover', function(e) {
		e.preventDefault();
		console.log("dropover");
	 
	});
  }
  dragstart(e){
  	this.state.draggableId = e.target.id
  }
  	drop(e){
		let targetImageSrc = e.target.parentElement.innerHTML
		let targetImageId = e.target.parentElement.getAttribute('id')
		if(targetImageId){
			let dropStart = document.getElementById(this.state.draggableId).innerHTML
		let finalDrop = dropStart;
		document.getElementById(this.state.draggableId).innerHTML = targetImageSrc
		document.getElementById(targetImageId).innerHTML = finalDrop
		}
		
  	}
  render() {
	let categoryOptions = this.props.categories.map((category,i) => {
      return <div draggable="true" className="box" id={i} onDragStart={this.dragstart.bind(this)} onDrop={this.drop.bind(this)}><input type="file"/><img src=""/></div>
    });
	return (
	  <div id="imageDrage" className="filebox" onChange={this.handleSubmit.bind(this)}>
		  {categoryOptions}

	  </div>
	);
  }
}

export default AddImage;
