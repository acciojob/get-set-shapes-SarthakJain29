//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	set width(value) {
		this._width = value;
	}

	set height(value) {
		this._height = value;}
	
	getArea(){
		return this._height * this._width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
		this._side = side;
	}
	getPerimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
