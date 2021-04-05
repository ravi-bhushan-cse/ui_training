function sessionstore(){
sessionStorage.setItem("obj1",10)
}
function sessionretrieve(){
console.log("the dat athat was retrievd"+sessionStorage.getItem("obj1"))
}
function locallystore(){
localStorage.setItem("obj2",20)
}
function locallyretrieve(){
   console.log("get th edat afrom local storage"+ localStorage.getItem("obj2"))
    
}