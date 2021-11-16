function changecolor()
{
    let a,b,c;
    a=Math.floor((Math.random() * 255));
    b=Math.floor((Math.random() * 255));
    c=Math.floor((Math.random() * 255));
    let d="rgb"+"("+a+","+b+","+c+")";
    let tag = document.createElement("p");
    let text = document.createTextNode("hello");
    tag.appendChild(text);
    let element = document.getElementsByClassName("new");
    // element.appendChild(tag);

    // alert(d);
    // let bgColor = "rgb(" + a + "," + b + "," + changecolor + ")";
    // alert(bgColor);
    document.body.style.backgroundColor=d;
}