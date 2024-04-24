class Circle {
    constructor(radius) {
      this._radius = radius;
    }
    get area() {
      return Math.PI * this._radius ** 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    get radius() {
      return this._radius;
    }
    set radius(value) {
      if (value < 0) {
        throw new Error('Radius cannot be negative');
      }
      this._radius = value;
    }
  }
  
  
  const myCircle = new Circle(15);
  console.log('Radius:', myCircle.radius); 
  console.log('Area:', myCircle.area.toFixed(2)); 
  console.log('Circumference:', myCircle.circumference.toFixed(2));
 
  myCircle.radius = 10;
  console.log('New Radius:', myCircle.radius);
  console.log('New Area:', myCircle.area.toFixed(2));
  console.log('New Circumference:', myCircle.circumference.toFixed(2));
  