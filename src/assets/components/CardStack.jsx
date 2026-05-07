import { useState, useRef, useCallback, useEffect, useLayoutEffect } from 'react'
import Card from './Card'
import './css/components.css';

const ACTIVE_SLOT = 3
const START_SLOT = 4
const CARD_HEIGHT = 300
const CARD_MARGIN = 180
const VISUAL_STEP = CARD_HEIGHT - CARD_MARGIN

const CardStackList = ({ recipes }) => {
  const displayRecipes = [...recipes.slice(-1), ...recipes, ...recipes.slice(0, 2)]
  const [offset, setOffset] = useState(2)
  const scrollLocked = useRef(false)
  const containerRef = useRef(null)
  const railRef = useRef(null)

  // 클론 zone에 도달하면 transition 없이 실제 위치로 순간이동
  useLayoutEffect(() => {
    if (recipes.length < 2) return

    let jumpTo = null
    if (offset < 2) {
      jumpTo = offset + recipes.length
    } else if (offset >= recipes.length + 2) {
      jumpTo = offset - recipes.length
    }

    if (jumpTo !== null && railRef.current) {
      railRef.current.style.transition = 'none'
      setOffset(jumpTo)
      requestAnimationFrame(() => {
        if (railRef.current) railRef.current.style.transition = ''
      })
    }
  }, [offset, recipes.length])

  const move = useCallback((dir) => {
    if (scrollLocked.current) return
    setOffset(prev => prev + dir)
    scrollLocked.current = true
    setTimeout(() => { scrollLocked.current = false }, 350)
  }, [])

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

  const railTop = CARD_HEIGHT + (START_SLOT - ACTIVE_SLOT) * VISUAL_STEP - offset * VISUAL_STEP

  return (
    <div
      ref={containerRef}
      className="CardStackList"
    >
      <div
        ref={railRef}
        className="CardStackList__rail"
        style={{ transform: `translateY(${railTop}px)` }}
      >
        {displayRecipes.map((recipe, i) => {
          const slot = i - offset + START_SLOT
          const visible = slot >= 0 && slot <= 5

          return (
            <div
              key={`${recipe.pageId}-${i}`}
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
