var tl = gsap.timeline();
var tl2 = gsap.timeline();
var flower1 = gsap.timeline();
var flower2 = gsap.timeline();
var flower3 = gsap.timeline();
var flower4 = gsap.timeline();
var flower5 = gsap.timeline();
var flower6 = gsap.timeline();

var timer = 0;
var timeInfo = setInterval(()=>{
    timer++;
    console.log(timer);
}, 1000)

tl.to(".yoga_900s", {top: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)"})
tl2.to(".yoga_900s",  3, { y:'-=5', x:'+=5',  rotation:'-=2', ease:Power1.easeInOut})
tl2.to(".yoga_900s", 2, { y:'+=5', x:'-=5', ease:Power1.easeInOut})
tl2.to(".yoga_900s",  3, { y:'-=5', x:'+=5',  rotation:'-=2', ease:Power1.easeInOut})
tl2.to(".yoga_900s", 2, { y:'+=5', x:'-=5', ease:Power1.easeInOut})
tl2.to(".yoga_900s",  3, { y:'-=5', x:'+=5',  rotation:'-=2', ease:Power1.easeInOut})
tl2.to(".yoga_900s", 2, { y:'+=5', x:'-=5', ease:Power1.easeInOut})  


flower1.to(".flower-1", {top: 450, duration: 8, ease: "none", rotation: 60})

flower1.to(".flower-1", {duration: 5, ease: "none", rotation: -65, delay: -6})
flower1.to(".flower-1", {duration: 5, ease: "none", rotation: 65, delay: -5})
flower1.to(".flower-1", {duration: 5, ease: "none", rotation: -65, delay: -4})
flower1.to(".flower-1", {duration: 5, ease: "none", rotation: 65, delay: -3})
flower1.to(".flower-1", {duration: 5, ease: "none", rotation: -65, delay: -2})
flower1.to(".flower-1", {duration: 5, ease: "none", rotation: 65, delay: -1})


flower2.to(".flower-2", {top: 450, duration: 8, ease: "none", rotation: 60})

flower2.to(".flower-2", {duration: 5, ease: "none", rotation: -70, delay: -6})
flower2.to(".flower-2", {duration: 5, ease: "none", rotation: 70, delay: -5})
flower2.to(".flower-2", {duration: 5, ease: "none", rotation: -70, delay: -4})
flower2.to(".flower-2", {duration: 5, ease: "none", rotation: 70, delay: -3})
flower2.to(".flower-2", {duration: 5, ease: "none", rotation: -70, delay: -2})
flower2.to(".flower-2", {duration: 5, ease: "none", rotation: 70, delay: -1})


flower3.to(".flower-3", {top: 400, duration: 8, ease: "none", rotation: 60, delay: 2})

flower3.to(".flower-3", {duration: 5, ease: "none", rotation: -65, delay: -6})
flower3.to(".flower-3", {duration: 5, ease: "none", rotation: 65, delay: -5})
flower3.to(".flower-3", {duration: 5, ease: "none", rotation: -65, delay: -4})
flower3.to(".flower-3", {duration: 5, ease: "none", rotation: 65, delay: -3})
flower3.to(".flower-3", {duration: 5, ease: "none", rotation: -65, delay: -2})
flower3.to(".flower-3", {duration: 5, ease: "none", rotation: 65, delay: -1})


flower4.to(".flower-4", {top: 400, duration: 8, ease: "none", rotation: 60, delay: 1})


flower4.to(".flower-4", {duration: 5, ease: "none", rotation: -65, delay: -6})
flower4.to(".flower-4", {duration: 5, ease: "none", rotation: 65, delay: -5})
flower4.to(".flower-4", {duration: 5, ease: "none", rotation: -65, delay: -4})
flower4.to(".flower-4", {duration: 5, ease: "none", rotation: 65, delay: -3})
flower4.to(".flower-4", {duration: 5, ease: "none", rotation: -65, delay: -2})
flower4.to(".flower-4", {duration: 5, ease: "none", rotation: 65, delay: -1})



flower5.to(".flower-5", {top: 300, duration: 8, ease: "none", rotation: 60, delay: 2})

flower5.to(".flower-5", {duration: 5, ease: "none", rotation: -65, delay: -6})
flower5.to(".flower-5", {duration: 5, ease: "none", rotation: 65, delay: -5})
flower5.to(".flower-5", {duration: 5, ease: "none", rotation: -65, delay: -4})
flower5.to(".flower-5", {duration: 5, ease: "none", rotation: 65, delay: -3})
flower5.to(".flower-5", {duration: 5, ease: "none", rotation: -65, delay: -2})
flower5.to(".flower-5", {duration: 5, ease: "none", rotation: 65, delay: -1})


flower6.to(".flower-6", {top: 200, duration: 8, ease: "none", rotation: 60, delay: 1})

flower6.to(".flower-6", {duration: 5, ease: "none", rotation: -65, delay: -6})
flower6.to(".flower-6", {duration: 5, ease: "none", rotation: 65, delay: -5})
flower6.to(".flower-6", {duration: 5, ease: "none", rotation: -65, delay: -4})
flower6.to(".flower-6", {duration: 5, ease: "none", rotation: 65, delay: -3})
flower6.to(".flower-6", {duration: 5, ease: "none", rotation: -65, delay: -2})
flower6.to(".flower-6", {duration: 5, ease: "none", rotation: 65, delay: -1})

tl.to(".frame1_copy1", {top: 0, opacity: 1})
tl.to(".frame1_copy2", {top: 0, opacity: 1})
tl.to(".frame1_copy3", {top: 0, opacity: 1})

tl.to(".frame1_copy1, .frame1_copy2, .frame1_copy3", {opacity: 0, delay: 2})

tl.to(".frame1_copy4", {top: 0, opacity: 1})
tl.to(".frame1_copy4", { opacity: 0, delay: 2})

tl.to(".frame1_copy5", {top: 0, opacity: 1})
tl.to(".frame1_copy5, .yoga_900s, .flower-1, .flower-2, .flower-3, .flower-4, .flower-5, .flower-6", { opacity: 0, delay: 2})

tl.to(".watchband_hinge", {top: 0, opacity: 1, delay: -0.3})
tl.to(".frame2_copy1", {top: 0, opacity: 1})
tl.to(".watchband_hinge, .frame2_copy1", {opacity: 0, delay: 2})

tl.to(".active_pen", {top: 0, opacity: 1, delay: -0.3})
tl.to(".frame3_copy1", {top: 0, opacity: 1})
tl.to(".active_pen, .frame3_copy1", {opacity: 0, delay: 2})

tl.to(".frame4_yoga_900s", {left: 0, opacity: 1, delay: -0.3})
tl.to(".frame4_copy1", {opacity: 1})
tl.to(".icons", {opacity: 1})
tl.to(".digital_logo, .intel_logo", {opacity: 1})
tl.to(".buy_now", {opacity: 1, onComplete (){
    console.log("Finish", timer)
    clearInterval(timeInfo);
}})