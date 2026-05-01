import { useState, useRef, useCallback, useEffect } from 'react'
import Card from './Card'
import './css/components.css';

const ACTIVE_SLOT = 2
const START_SLOT = 3
const CARD_HEIGHT = 300
const GAP = 12
const CARD_MARGIN = 180
const STEP = CARD_HEIGHT + GAP
const VISUAL_STEP = STEP - CARD_MARGIN

const CardStackList = ({ recipes }) => {
  const [offset, setOffset] = useState(0)
  const scrollLocked = useRef(false)
  const containerRef = useRef(null)

  const move = useCallback((dir) => {
    if (scrollLocked.current) return
    setOffset(prev => Math.min(recipes.length - 1, Math.max(0, prev + dir)))
    scrollLocked.current = true
    setTimeout(() => { scrollLocked.current = false }, 350)
  }, [recipes.length])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleWheel = (e) => {
      e.preventDefault()
      move(e.deltaY > 0 ? 1 : -1)
    }
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [move])

  // const viewportHeight = `calc(100vh - 60px -46px - 26px)`
  const railTop = CARD_HEIGHT + (START_SLOT - ACTIVE_SLOT) * VISUAL_STEP - offset * VISUAL_STEP
  console.log(ACTIVE_SLOT)
  return (
    <div
      ref={containerRef}
      className="CardStackList"
    >
      <div
        className="CardStackList__rail"
        style={{ transform: `translateY(${railTop}px)` }}
      >
        {recipes.map((recipe, i) => {
          const slot = i - offset + START_SLOT
          const visible = slot >= 0 && slot <= 6

          return (
            <div
              key={recipe.pageId}
              className={`CardStackList__item ${visible ? `CardStackList__item--slot-${slot}` : 'CardStackList__item--hidden'}`}
              onClick={() => setOffset(i)}
            >
              <Card {...recipe} isActive={slot === ACTIVE_SLOT + 1} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardStackList