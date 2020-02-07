var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
          //lost reference to the object --- this.color - is undefined
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();

/*
In logColor - this.color: Blue
In logColor - self.color: Blue
In IIFE - this.color: undefined
In IIFE - self.color: Blue
*/
