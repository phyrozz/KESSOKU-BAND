window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "50px";
        document.getElementById("navbar").style.lineHeight = "50px";
        document.getElementById("navbar").style.backgroundColor = "rgba(50, 50, 50, 255)";
        document.getElementById("logo").style.width = "50px";
    }
    else {
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.lineHeight = "100px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("logo").style.width = "100px";
    }
}

function openNav() {
    document.getElementById("sidebar-contents").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("sidebar-contents").style.width = "0";
}