let a = {
    name: "Ferrari",
    cost: 88.6,
    mileage: 8.6,

    start: function(){
        console.log("Car is Starting.............");
    },

    stop: function(){
        console.log("Car is stopping.........");
    },

    accelerate: function(){
        console.log("Car is accelerating........");
    }
};

console.log(a.name);
console.log(a.cost);

a.start();
a.accelerate();
a.stop();


