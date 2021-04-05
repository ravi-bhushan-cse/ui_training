function employee(){
    this.id=100
    
}
class Person{
    id=110;
    name="ravi"

    displayinfo(){
        document.write("this is from class function")
        document.write("<br>the id is "+this.id)
        document.write("<br>the name is "+this.name)
    }
}
let p1= new Person();
p1.displayinfo();
