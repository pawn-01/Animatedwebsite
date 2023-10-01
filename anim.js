function locomotiveAnimation() {
   gsap.registerPlugin(ScrollTrigger);
 
   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
   const locoScroll = new LocomotiveScroll({
     el: document.querySelector("#main"),
     smooth: true,
   });
   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
   locoScroll.on("scroll", ScrollTrigger.update);
 
   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
   ScrollTrigger.scrollerProxy("#main", {
     scrollTop(value) {
       return arguments.length
         ? locoScroll.scrollTo(value, 0, 0)
         : locoScroll.scroll.instance.scroll.y;
     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
     getBoundingClientRect() {
       return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight,
       };
     },
     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
     pinType: document.querySelector("#main").style.transform
       ? "transform"
       : "fixed",
   });
 
   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
   ScrollTrigger.refresh();
 }
 locomotiveAnimation();

 function navbarAnimation() {
   gsap.to("#nav1", {
     transform: "translateY(-55%)",
     scrollTrigger: {
       trigger: "#page1",
       scroller: "#main",
       start: "top 0",
       end: "top -5%",
       scrub: true,
     },
   });
   gsap.to("#nav2 a", {
     transform: "translateY(-100%)",
     opacity: 0,
     scrollTrigger: {
       trigger: "#page1",
       scroller: "#main",
       start: "top 0",
       end: "top -5%",
       scrub: true,
     },
   });
 }
 navbarAnimation()

/*gsap.from("#nav1",{
    transform:"translateY(-56%)",
    ScrollTrigger:{
       trigger:"#page1",
       scroller:"#main",
       markers:true,
       start:"top 0",
       end:"top -5%",
       scrub:true,
    }
})

gsap.from("#nav2 a",{
   transform:"translateY(-100%)",
   opacity:0,
   ScrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      markers:true,
      start:"top 0",
      end:"top 5%",
      scrub:true,
   }
})*/

function review(){
    var a = document.querySelectorAll("input[type='radio']");
    console.log(a);
    a.forEach(function(elem){
      elem.addEventListener("click",function(){
      if(elem.checked==true){
            if(elem.id=="two2"){
             document.querySelector("#thought").innerHTML = "<h1>Perfect Accessory for Training: Whether you're just getting into working out or are a seasoned weight lifter these gym band are for you, wrap them around as tight or loose as needed for your desired level of restriction without cutting of circulation or causing pain from stiff, rough edges. </h1>";
            }
            if(elem.id=="three3"){
                document.querySelector("#thought").innerHTML = "<h1>Train Harder & Lift More: These wrist band for women protectors are made of high quality cotton and elastic that will contour around your wrists, securing them in a neutral position, improving your form. Our hand grip for gym proprietary elastic will provide unparalleled levels of support to immobilize your wrist as needed.</h1>"
            }
           if(elem.id=="four4"){
               document.querySelector("#thought").innerHTML = "<h1>I wanted some temporary straps for my own reasons so I bought these as they were the cheapest leather straps. They do NOT disappoint. Once the leather breaks, that is about after 4-6 sessions, they get so much better that I now use these as my daily drivers.</h1>"
           }
          if(elem.id=="five5"){
              document.querySelector("#thought h1").textContent = " The quality of the band is also good, and is durable for regular workouts and hikes. Unlike other bands which get loose after a point, this one with fastening bands helps adjust your knee to tight or a loose setting as per your convenience."
           }
          if(elem.id=="six6"){
               document.querySelector("#thought").innerHTML= "<h1> I however feel there should be an inverted fastening band for left and right knee or at least there should be an option for buying for left or the right knee as using the same design for both knees gets a little tedious. But overall, a good product for its price</h1>"
           }
           if(elem.id=="one1"){
              document.querySelector("#thought h1").textContent = `i have to say they serve the purpose quite well
              remember to find the sweet spot for how tight the wraps should be, not so tight that you're cutting off blood circulation and not so loose that the wrists bend on the slightest of pressure
              they have been holding up well with no damage for the past 4 months of minor usage so that's pretty dope.`
           }
           
        }
        })
    })
}
review();

function videocon(){
    var play = document.querySelector("#play");
    var videocon = document.querySelector("video");
    videocon.addEventListener("mouseenter",function(){
         gsap.to(play,{
            opacity:1,
            scale:1,
            duration:0.5,
         })
    })
    
    videocon.addEventListener("mousemove",function(dets){
          gsap.to(play,{
            left:dets.clientX-80+'px',
            top:dets.clientY-60+'px',
          })
    })
    
    videocon.addEventListener("mouseleave",function(){
          gsap.to(play,{
            opacity:0,
            scale:0,
            duration:0.5,
          })
    })
}

function animation(){ 
   document.addEventListener("mousemove",function(dets){
      gsap.to("#cursor",{
         left:dets.clientX+'px',
         top:dets.clientY+'px',
      })
   })
   
     gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
     })
     gsap.from(".video_con",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.5,
     })
}
videocon();
animation();

function cursoranim(){
 
   var valr = 0;
   var valb = 0;
   var valg = 0;
   document.querySelectorAll("#page3 .child")
   .forEach(function(elem){ 
      elem.addEventListener("mouseenter",function(){
         var r = Number(Math.random()*10);
         var b = Number(Math.random()*10);
         var g = Number(Math.random()*10);
         
          valr = gsap.utils.mapRange(0,10, 0, 255, r); 
          valb = gsap.utils.mapRange(0, 10, 0, 255, b); 
          valg = gsap.utils.mapRange(0, 10, 0, 255, g);
      })
      elem.addEventListener("mousemove",function(){
      gsap.to("#cursor",{
         transform:`translate(-50%,-50%) scale(1)`,
         background:`rgba(${valr},${valb},${valg},0.5)`,
         ease:Power4,
      })
   })
     elem.addEventListener("mouseleave",function(){
          gsap.to("#cursor",{
            transform:`scale(0)`,
            ease:Power4,
          })
     })
   })
}
cursoranim();

/*function movebox(){
   document.querySelectorAll(".boxin").
   forEach(function(elem){
      console.log(elem);
      elem.addEventListener("mouseenter",function(){
         gsap.to(elem,{
            y:-170,
            height:400+'px',
            borderRadius:`10px`,
            duration:0.3,
            ease:Power4,
         })
   })
     elem.addEventListener("mouseleave",function(){
         gsap.to(elem,{
            y:0,
            height:50+'px',
            borderRadius:`50px`,
            duration:.3,
            ease:Power4,  
         })
     })
   })
}

movebox();*/

function cobimebox(){
       var par = document.querySelectorAll(".box");
       par.forEach(function(elem){
         var chlid1 = elem.querySelector(".boxin");
         var child2 = elem.querySelector(".boxinimg");
         console.log(chlid1);
         console.log(child2);
         chlid1.addEventListener("mouseenter",function(){
            gsap.to(chlid1,{
               y:-170,
               height:400+'px',
               borderRadius:`10px`,
               duration:0.3,
               ease:Power4,
            })
            gsap.to(child2,{
               opacity:1,
               ease:Power4,
               duration:0.3,
            })
      })
        chlid1.addEventListener("mouseleave",function(){
            gsap.to(chlid1,{
               y:0,
               height:50+'px',
               borderRadius:`50px`,
               duration:.3,
               ease:Power4,  
            })
            gsap.to(child2,{
               opacity:0,
               ease:Power4,
               duration:.3,
            })
        })

       })
        /*var chlid1 = document.querySelectorAll(".boxin");
        var child2 = document.querySelectorAll(".boxinimg");
        console.log(chlid1);
        console.log(child2);
        for(var i = 0 ; i<=2 ; i++){
         console.log(chlid1[i]);
          console.log(child2[i]);
         chlid1[i].addEventListener("mouseenter",function(){
            gsap.to(chlid1[i],{
               y:-170,
               height:400+'px',
               borderRadius:`10px`,
               duration:0.3,
               ease:Power4,
            })
            gsap.to(child2[i],{
               opacity:1,
            })
      })
        chlid1[i].addEventListener("mouseleave",function(){
            gsap.to(chlid1[i],{
               y:0,
               height:50+'px',
               borderRadius:`50px`,
               duration:.3,
               ease:Power4,  
            })
            gsap.to(child2[i],{
               opacity:0,
            })
        })
        }*/
 }

cobimebox();

/*document.querySelector("#nav1").
addEventListener("mouseenter",function(){
   gsap.to("#nav1",{
       y:-75,
       ease:Power4,
       duration:0.5,
   })
})*/

function getemail(){
     var email = document.querySelector("#page4 #email");
     email.addEventListener("click",function(){
        email.addEventListener("mousemove",function(){
         email.innerHTML = `<input type = "email" id="ema" value="" >`
        })
     })
     email.addEventListener("mouseleave",function(){
        email.innerHTML = ` <h1>enter your email</h1>`
     })
}

getemail();
