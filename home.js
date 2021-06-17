const pic=document.querySelector("#pic")
const back=document.querySelector("#back")
const dark=document.querySelector("#dark")
const mcard=document.querySelector("#id1")
const whole=document.querySelector("#whole")
const body=document.querySelector("body")
const aboutProf=document.querySelector("#about-img-prof")
const skimg=document.querySelectorAll(".sk img")
const sk=document.querySelectorAll(".sk")
const st=document.querySelectorAll(".s-t")
const ahome=document.querySelector("#home-a")
const aabout=document.querySelector("#about-a")
const askills=document.querySelector("#skills-a")
const acontact=document.querySelector("#contact-a")
const sec=document.querySelector("#sec1")




//Nav bar links script:


/*ahome.addEventListener('click',(event)=>{
    aabout.style.borderStyle="0px solid white"
    askills.style.border="none"
    acontact.style.border="none" 
    event.target.style.border="2px solid white"
    event.target.style.borderRadius="50%"
    event.target.style.paddingLeft="8px"
    event.target.style.paddingRight="8px"
    event.target.style.marginLeft="-13px"
    sec.innerHTML="Home"
    sec.style.writingMode="tb-rl" 
    sec.style.bottom="510px"
    sec.style.transform="rotate(-180deg)"
    sec.style.color="black"
    sec.style.fontFamily="'Poppins', sans-serif"
})

aabout.addEventListener('click',(event)=>{
    ahome.style.border="none"
    askills.style.border="none"
    acontact.style.border="none" 
    event.target.style.border="2px solid white"
    event.target.style.borderRadius="50%"
    event.target.style.paddingLeft="8px"
    event.target.style.paddingRight="8px"
    event.target.style.marginLeft="-13px"
    sec.innerHTML="About"
    sec.style.writingMode="tb-rl" 
    sec.style.bottom="510px"
    sec.style.transform="rotate(-180deg)"
    sec.style.color="black"
    sec.style.fontFamily="'Poppins', sans-serif"
})

askills.addEventListener('click',(event)=>{
    ahome.style.border="none"
    aabout.style.border="none"
    acontact.style.border="none" 
    event.target.style.border="2px solid white"
    event.target.style.borderRadius="50%"
    event.target.style.paddingLeft="8px"
    event.target.style.paddingRight="8px"
    event.target.style.marginLeft="-13px"
    sec.innerHTML="Skills"
    sec.style.writingMode="tb-rl" 
    sec.style.bottom="510px"
    sec.style.transform="rotate(-180deg)"
    sec.style.color="black"
    sec.style.fontFamily="'Poppins', sans-serif"
})
*/




dark.addEventListener('click',(event)=>{
    if(mcard.style.color==="white"){
        mcard.style.backgroundPosition="right bottom"
        mcard.style.color="black"
        body.style.backgroundPosition="left bottom"
        event.target.src="images/dark1.png"
        for (let index = 0; index < sk.length; index++) {
            const element = sk[index];
            element.style.backgroundPosition="right bottom"
            
        }
        for (let index = 0; index < st.length; index++) {
            const element = st[index];
            element.style.color="black"
            
        }
        for (let index = 0; index < skimg.length; index++) {
            const element = skimg[index];
            element.style.filter="invert(0)"
            
        }

    }
    else{
        mcard.style.backgroundPosition="left bottom"
        mcard.style.color="white"
        body.style.backgroundPosition="right bottom"
        event.target.src="images/light.png"
        for (let index = 0; index < sk.length; index++) {
            const element = sk[index];
            element.style.backgroundPosition="left bottom"
            
        }
        for (let index = 0; index < st.length; index++) {
            const element = st[index];
            element.style.color="white"
            
        }
        for (let index = 0; index < skimg.length; index++) {
            const element = skimg[index];
            element.style.filter="invert(1)"
            
        }
    }

})
pic.addEventListener('mouseover',(event)=>{

    event.target.style.transform="translate(50px,-30px)"
    back.style.transform="translate(-50px,30px)"
})

pic.addEventListener('mouseout',(event)=>{

    event.target.style.transform="translate(0px,0px)"
    back.style.transform="translate(0px,0px)"
})

back.addEventListener('mouseover',(event)=>{
    event.target.style.transform="translate(-50px,30px)"
    pic.style.transform="translate(50px,-30px)"
})
back.addEventListener('mouseout',(event)=>{
    event.target.style.transform="translate(0px,0px)"
    pic.style.transform="translate(0px,0px)"
})

/*text.addEventListener('mouseover',(event)=>{
    event.target.style.transform="translate(-50px,30px)"
})
text.addEventListener('mouseout',(event)=>{
    event.target.style.transform="translate(0px,0px)"
})*/
aboutProf.addEventListener('mouseover',(event)=>{
    event.target.style.transform="scale(1.1)"
})
aboutProf.addEventListener('mouseout',(event)=>{
    event.target.style.transform="scale(1)"
})









//Scroll reveal animations --------------------------------------------

const sr=ScrollReveal({
    origin:'top',
    distance:'100px',
    duration:2000,
    reset:true,
    easing:'ease-in-out'
})

sr.reveal('.title',{})
sr.reveal('.about-img',{origin:'left'})
sr.reveal('.about-matter',{origin:'right',delay:500})
sr.reveal('#name',{delay:1000})
/*sr.reveal('#c-p,#cs-p',{origin:'left'})
sr.reveal('#h-p,#f-p',{origin:'right'})
sr.reveal('#m-p',{origin:'bottom'})*/
sr.reveal('.sk',{origin:'left',interval:500,reset:false})