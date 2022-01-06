// class Person{
// setPerson(name,age,gender){
//     this.name=name;
//     this.age=age,
//     this.gender=gender
// }
// printPerson()
// {
//     console.log(this.name,this.age,this.gender);
// }
// }
// var obj=new Person()
// obj.setPerson("ram",25,"male")
// obj.printPerson()

// var obj1=new Person()
// obj.setPerson("ahhil",26,"male")
// obj.printPerson()


// class Student{
//     setStudent(name,age,gender,marks){
//         this.name=name;
//         this.age=age,
//         this.marks=marks
//         this.gender=gender
//     }
//     printStudent()
//     {
//         console.log(this.name,this.age,this.gender,this.marks);
//     }
//     }
//     var obj=new Student()
//     obj.setStudent("geetha",25,"female",78)
//     obj.printStudent()
    
//     var obj1=new Student()
//     obj.setStudent("neethu",23,"female",98)
//     obj.printStudent()

//     var obj2=new Student()
//     obj.setStudent("mithra",20,"female",79)
//     obj.printStudent()

    class Student
        {
        constructor(name,age,gender,marks){
            this.name=name
            this.age=age
            this.marks=marks
            this.gender=gender
        }
        printStudent()
        {
            console.log(this.name,this.age,this.gender,this.marks);
        }
        }
        var obj=new Student("geetha",25,"female",78)
        obj.printStudent()
        
        var obj1=new Student("neethu",23,"female",98)
        obj1.printStudent()
    
        var obj2=new Student("mithra",20,"female",79)
        obj2.printStudent()




       