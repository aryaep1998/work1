var baleno={
    name:"baleno",
    colors:["red","white","blue"],
    varients:["petrol"],
    price:" 8lack",
    manufacture:"nexa",
    getPrice(){
        return this.price
    }
}

var glanza={
    manufacture:"toyota",
    price:"9lack"

}
console.log(baleno.getPrice());
//glanza.__proto__=baleno
//console.log(glanza.getPrice());

















// var Person={name:"ram",
//            age:25,
//            address:"address"}
//            console.log(person.name);

//            class projector{
//                setValues(name,price,specs)
//                {
//                    this.name=name;
//                    this.age=age;
//                    this.address=address;
//                }
//            }
//            var obj=new Person()
//            obj.setValues("ram",35,"address")
//            console.log(obj.name);
//            console.log(obj.address);



        //    var person={
        //        name="ram",
        //        age="35",
        //        address="address"
        //    }
        //    console.log(person.name);