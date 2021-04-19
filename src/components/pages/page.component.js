import React from 'react'
import { ReactComponent as BouncingArrows } from '../../arrows.svg'
import './page.styles.css'
const Page = ({ logo, desc, backgroundImg, textColor, first, last }) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-text">
          {logo}
          <div className="item-textDesc" style={{ color: `${textColor}` }}>
            {desc}
          </div>
        </div>
        <div className="item-lowerThird">
          {first && (
            <div className="item-expand" style={{ color: `${textColor}` }}>
              <small>MEET THE COLLECTIVE</small>
            </div>
          )}
        </div>
        {first ? (
          <BouncingArrows className="animated infinite bounce" />
        ) : last ? (
          <p></p>
        ) : (
          <BouncingArrows />
        )}
      </div>
    </div>
  )
}

export default Page
