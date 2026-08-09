import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars,words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      //for the second line, we want to delay the animation so that it starts after the first line has finished animating
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        //what to trigger the animation on
        trigger:'#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    //right leaf moves down, left leaf moves up, both at the same time
    .to('.right-leaf',{y:400},0)
    .to('.left-leaf',{y:-400},0)
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail in our menu is a blend of premium ingredients, creative flair and timeless recipes — designed to delight your senses.
              </p>
              <a href="#cocktails" className="btn">
                View Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero