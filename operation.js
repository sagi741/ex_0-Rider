//Copyright Sagi Fridman//
var EventEmitter=require('events');
var bikeConfig=require('./bikeConfig.js').events;

module.exports=class operation extends EventEmitter{
    constructor(name,rider_bike){
        super();
        this.rider_bike=rider_bike;
        this.name=name;
        this.sport='ride';
    }

    add(){
        this.rider_bike++;
        this.emit(bikeConfig.ADD);
    }

    minus(){
        this.rider_bike--;
        this.emit(bikeConfig.MINUS);
    }
}