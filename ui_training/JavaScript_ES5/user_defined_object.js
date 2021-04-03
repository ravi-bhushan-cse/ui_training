function Employee(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
    this.dis=function()
    {
        document.write("this is ES5 class function<br>");
        document.write("th employee id is<br>"+this.id)
        document.write("th employee id is<br>"+this.name);
        document.write("th employee id is"+this.age);
    }

}
var emp1= new Employee(101,"ravi",21);
var emp2=new Employee(102,"ramesh",26);
Employee.prototype.skillSet="Javascript"
emp1.dis();
emp2.dis();