function printtable(){
    var getData=document.getElementById("number").value;
    var putData=document.getElementById("display");
    var i;
    for(i=1;i<=10;i++){
        putData.innerHTML+= getData+" x "+i+" = "+getData*i+"<br>";
    }
}