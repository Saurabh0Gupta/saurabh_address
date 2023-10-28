var tl=gsap.timeline()
tl.from("#nav-part1 i ,#nav h1,#nav-part2 i,#nav-part2 button",{
    opacity:0,
    y:-30,
    duration:1,
    stagger:0.5
})
tl.from("#img",{
    opacity:0,
    scale:0.2,
    // width:"10%",
    scrollTrigger:{
        scroll:"body",
        trigger:"#img img",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2,
        // pin:true,
    }
})
tl.from("#center h2,#about p",{
    opacity:0,
    y:80,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#center h2,#about",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})
tl.from("#div1",{
    opacity:0,
    // scale:0.2,
    x:-50,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page2 #div1",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2

    }
})
tl.from("#div2",{
    opacity:0,
    // scale:0.2,
    
    x:50,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page2 #div1",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2

    }
})
tl.from("#div3",{
    opacity:0,
    // scale:0.2,
    x:-50,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page2 #div1",
        // markers:true,
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})
tl.from("#div4",{
    opacity:0,
    // scale:0.2,
    x:50,
    duration:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page2 #div1",
        // markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:2

    }
})
tl.from("#upper",{
    // width:"5%",
    // height:"5%",
    scale:0.1,
    opacity:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page3 #upper",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
tl.from(".container",{
    // display:none,
    opacity:0,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#page3 #lower",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
