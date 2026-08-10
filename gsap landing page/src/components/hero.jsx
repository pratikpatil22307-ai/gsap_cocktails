import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  // videoRef is a reference to the video element in the DOM, so we can use it to manipulate the video in our code — play, pause, or change the source.
  const videoRef = useRef();
  const videoTimelineRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 768 });

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
      delay: 1,
    });

    // start value: where the animation begins based on scroll position
    // end value: where the animation ends based on scroll position
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: startValue,
        end: endValue,
        scrub: true,
      }
    })
      // right leaf moves down, left leaf moves up, both at the same time
      .to('.right-leaf', { y: 400 }, 0)
      .to('.left-leaf', { y: -400 }, 0);

    // video animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: startValue,
        end: endValue,
        scrub: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: 'none',
      });
    };

  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        {/* video must be a CHILD of #hero, not a sibling, so it anchors
            correctly to #hero's bottom/edges via the CSS positioning rules */}
        <div className="video absolute inset-0">
          <video
            ref={videoRef}
            src="/videos/input.mp4"
            playsInline
            muted
            preload="auto"
            className="mix-blend-lighten"
          />
        </div>

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