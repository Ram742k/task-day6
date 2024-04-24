class uberPrice{
    constructor(distance, time){
        this.distance = distance;
        this.time = time;

    }
    calculatePrice(){
        return this.distance * 2 + this.time * 1;
    }

    getDistance(){
        return this.distance;
    }

}

let uber = new uberPrice(10, 60);
console.log(uber.calculatePrice());
