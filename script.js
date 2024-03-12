 // Register the ScrollTrigger plugin with GSAP
 gsap.registerPlugin(ScrollTrigger);

 // Your existing code, assuming `container` is properly defined or selected
 const words = gsap.utils.toArray('.blur-word');
 
 let tl = gsap.timeline({
   scrollTrigger: {
     trigger: "#container", // Ensure this selector matches your container's ID
     start: "top top",
     end: "+=100%",
     scrub: true,
     pin: true,
   }
 });

 words.forEach(word => {
   tl.to(word, {filter: 'blur(0px)', duration: 1}, '+=0.1');
 });