/*let abc= function dis(){// dis is lost due to assigning it to abc &  abc behaves like functio name
    document.write("<br> expression style function name")
}
abc();
let abc2 =function(){
    document.write("<br> expression style in anonymous function ")
}
abc2();


document.write("<br> default inintializtion")
function empdetails(id=123,name="unknown",salary=100)
{
    document.write("<br> the emp id is"+id)
    document.write("<br> the emp name is"+name)
    document.write("<br> the emp salary is"+salary)
}
empdetails()
empdetails(101)
empdetails(102,"rakesh",201);
*/
function studentinfo(sid,name,age,...skillset){
    document.write("<br> the student id is"+sid)
    document.write("<br> the  student is"+name)
    document.write("<br> the student age is"+age)
    document.write("<br> the student skillset is"+skillset)

}
studentinfo(101,"ravi",26)
studentinfo(102,"rani",26,"C","HTML")
skills=["c","HTML","python","angular"]
studentinfo(102,"rani",26,...skills)