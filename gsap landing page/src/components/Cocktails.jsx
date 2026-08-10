import React from 'react'
import { cocktailLists, mockTailLists } from "../../constants/index.js"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {
  // gsap hook
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      }
    })

    parallaxTimeLine
      // the ", 0" tells GSAP to start both tweens at the same point in the
      // timeline instead of running them one after another — without it,
      // the right leaf only starts animating once the left leaf's tween
      // finishes, so it looks "stuck" for the first half of the scroll
      .from('#c-left-leaf', {
        x: -100, y: 100
      }, 0)
      .from('#c-right-leaf', {
        x: 100, y: 100
      }, 0)
  }, [])

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Popular mocktails:</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="me-28">
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Cocktails