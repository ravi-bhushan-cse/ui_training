function sayhello(fname,call)
{
    return "user,"+ call(fname)
}
function maleinfo(name)
{
    return "welcome MR."+name;
}
document.write(sayhello("ramesh",maleinfo));
document.write(sayhello("ravi",))