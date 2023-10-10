document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "" + document.getElementById("cssCode").value + "";
    var jsCode = "" + document.getElementById("jsCode").value + "";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
    localStorage.setItem("htmlCode.html", htmlCode);
    localStorage.setItem("cssCode.css", cssCode);
    localStorage.setItem("jsCode.js", jsCode);
    //---------for check---------------
    // alert("code is copied");
}

function show(x) {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById(x).style.display = "block";
}

function show_all() {
    if (window.innerWidth >= 992) {
        document.getElementById("html").style.display = "block";
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
    }
}
// ////////////////////////////////////////

window.onload=function(){
    let savedCode=localStorage.getItem("copiedCode.html");
    if(savedCode){
        savedCode += ".html";
        let targetElement=document.getElementById("targetElement");
        targetElement.innerHTML=savedCode;
    }
};