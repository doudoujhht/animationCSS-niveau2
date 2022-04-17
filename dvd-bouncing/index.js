function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    if(userAgent.match(/firefox|fxios/i)){
        const element=document.getElementById("autre");
        element.remove();
        console.log("firefox")
    } 
    else{
        const element=document.getElementById("firefox");
        console.log("autre")
        element.remove();
    }
}
fnBrowserDetect();

setInterval(function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("svg").style.fill = "#"+randomColor;
},3000)
