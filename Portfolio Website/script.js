function revealToSpan(){
document.querySelectorAll(".reveal")
.forEach(function (elem){
  let parent= document.createElement("span");
  let child= document.createElement("span");

  parent.classList.add("parent");
  child.classList.add("child");

  child.innerHTML=elem.innerHTML;
  parent.appendChild(child);

  elem.innerHTML= "";
  elem.appendChild(parent);
});
}
revealToSpan();


var t1=gsap.timeline();

t1
   .from(".child span",{
      x:100,
      delay:0.5,
      stagger:.5,
      duration:1,
      ease:Power3.easeInOut
   })
   .to(".parent .child", {
      y:"-100%",
      duration:1,
      delay:0.5, 
      ease : Circ.easeInOut
   })
   .to("#loader", {
    height : 0,
    duration : 1,
    ease : Circ.easeInOut
   })
   .to("#green", {
    height : "100%",
    top:0,
    duration : 0.5,
    delay:-0.5,
    ease : Circ.easeInOut
   })
   .to("#green", {
      height : "0%",
      duration : 0.5,
      delay:-0.1,
      ease : Circ.easeInOut
     })
   // .to("")
   
  let output=document.querySelector('.time');
  let time=new Date();
  let hours=time.getHours();
  let mins=time.getMinutes();
  let curTime=`MY LOCAL TIME ${hours}:${mins} GMT(+5:30)`;
  output.innerText=curTime;