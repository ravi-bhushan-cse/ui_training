class person{
    constructor(name="unknown",age=18){
        this.name=name;
        this.age =age;
    }
    displayinfo(){
        document.write("<br>this is my name"+this.name)
        document.write("<br>this is my age"+this.age)
    }
}
let p1=new person("ravi",32)
p1.displayinfo()
let p2=new person("rakesh",65)
p2.displayinfo()
let p3=new person()
p3.displayinfo()
let p4=new person()
p4.displayinfo()
