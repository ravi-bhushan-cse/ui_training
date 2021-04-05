num=[1,4,20,5,45,97,75]

num.forEach(function display(n){
    document.write("<br> value is from the function body"+n)

})
num.forEach(function(n){
    document.write("<br> value is from the anonymous function body"+n)

})