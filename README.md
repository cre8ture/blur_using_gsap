## Smooth Blurring on Scroll with GSAP and ScrollTrigger

This code utilizes the GreenSock Animation Platform (GSAP) and its ScrollTrigger plugin to create a visually appealing effect where elements with the class `.blur-word` gradually become clear as you scroll down the page.

**Here's a breakdown of how it works:**

1. **Dependencies:**
   - The code assumes you have included the GSAP library (`gsap.min.js`) and the ScrollTrigger plugin (`ScrollTrigger.min.js`) in your project.

2. **Selecting Elements:**
   - It uses `gsap.utils.toArray('.blur-word')` to select all elements with the class `.blur-word` and stores them in an array named `words`.

3. **Creating a Timeline:**
   - `gsap.timeline` creates a GSAP timeline object named `tl`. The timeline allows you to chain and synchronize animations.

4. **ScrollTrigger Configuration:**
   - The timeline is configured with a `scrollTrigger` object. This object defines how the animation should be triggered and controlled based on scrolling.
     - `trigger: container`: This specifies the element (presumably with the ID "container") that acts as the trigger for the animation.
     - `start: "top top"`: The animation starts when the top of the trigger element reaches the top of the viewport.
     - `end: "+=100%"`: The animation ends when the trigger element scrolls 100% of its own height past the top of the viewport.
     - `scrub: true`: This enables scrubbing, meaning the animation progress is directly linked to the scroll position.
     - `pin: true`: This pins the trigger element (container) to the viewport while scrolling, creating a fixed reference point for the animation.

5. **Animating Blur:**
   - The code iterates over the `words` array using `forEach`.
   - Inside the loop, `tl.to(word, { ... })` creates a tween for each element (`word`).
     - The tween animates the `filter` property, specifically the `blur` value.
     - It sets the target blur to `0px` (clear), indicating a gradual removal of the blur effect.
     - `duration: 1`: The animation takes 1 second to complete.
     - `'+=0.1'`: This delays the start of each element's animation by 0.1 seconds relative to the previous one, creating a sequential effect.

**Overall Effect:**

As you scroll down the page, the elements with the `.blur-word` class will progressively become clear, starting from the top and continuing as you scroll past them. The ScrollTrigger plugin ensures the animation is triggered and controlled based on the scrolling behavior, and the pinning keeps the trigger element (container) in place for smooth visual reference.


## source
https://codepen.io/Juxtopposed/pen/MWRWpqq