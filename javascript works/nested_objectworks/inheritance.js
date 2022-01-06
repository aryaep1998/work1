class parent{
    bike(){
        console.log("passion pro");
    }
}
class Child extends parent{
bike(){
    super.bike()
    console.log("royal enfield");
}
}
var ch=new Child()
ch.bike()

//this()
//super
//constructor