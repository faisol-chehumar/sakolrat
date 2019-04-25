import React, { useState, useRef, useEffect } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import menu from './menu'

const { menuLeft, menuRight } = menu

const MegaMenuContainer = styled.nav`
  margin: 0 -4rem;
`

const MegaMenuBar = styled.div`
  background-color: #fa4c06;
  padding: 0 4rem;
  height: 44px;
  line-height: 0;
  display: none;

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 1.35rem 0.5rem;
    height: 44px;
  }

  .sub-menu a {
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }

  .extra-menu a {
    color: #333;

    &:hover {
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    display: block;
  }
`

const MegaMemuPanel = styled.div`
  background-color: #fff;
  border-bottom: 4px solid #fa4c06;
  padding: 0.5rem 4rem;
  color: #333;
  position: relative;
  display: none;

  a {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;

    &:hover {
      color: #fa4c06;
    }
  }

  img {
    width: 80%;
  }

  .cat-title {
    color: #333;
    font-size: 1rem;
    margin-right: 1rem;
  }

  .cat-link {
    font-size: 0.8rem;
  }

  @media (min-width: 992px) {
    display: block;
  }
`

const MegaMenuSidePanel = styled.div`
  background-color: #eee;
  height: 100%;
  position: absolute;
  top: 0;
  right: 5%;
  padding: 0.5rem 1rem;
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 18rem;
  }

  @media (min-width: 992px) {
    display: block;
    width: 18rem;
  }

  @media (min-width: 1200px) {
    width: 25rem;
  }
`

const SidePanelButton = styled.div`
  border: 2px solid #bebebe;
  width: 100%;
  padding: 1rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #333;
`

const MegaMenu = () => {
  const [currentMenuIndex, setCurrentIndex] = useState(null)

  const megaMenuBar = useRef()
  const megaMenupanel = useRef()

  useEffect(() => {
    console.log(megaMenuBar)
    // add when mounted
    megaMenuBar.current.addEventListener('mouseleave', () =>
      setCurrentIndex(null)
    )
    // return function to be called when unmounted
    return () => {
      megaMenuBar.current.removeEventListener('mouseleave', () =>
        setCurrentIndex(null)
      )
    }
  }, [])

  console.log(currentMenuIndex)
  return (
    <MegaMenuContainer>
      <div ref={megaMenuBar}>
        <MegaMenuBar>
          <Row gutter={16}>
            <Col xs={0} lg={16}>
              <ul className="text-left sub-menu">
                {menuLeft.map((menu, index) => (
                  <li key={index} onMouseEnter={() => setCurrentIndex(index)}>
                    <a href={menu.title.replace(' ', '-')}>
                      {menu.title.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={0} lg={8}>
              <div className="text-right extra-menu">
                {menuRight.map((menu, index) => (
                  <a key={index}>{menu.title.toUpperCase()}</a>
                ))}
              </div>
            </Col>
          </Row>
        </MegaMenuBar>
      </div>
      {currentMenuIndex !== null ? (
        <div
          ref={megaMenupanel}
          // onMouseLeave={handleLeaveMegaMenu}
        >
          <MegaMemuPanel>
            <Row>
              <Col className="text-left" xs={0} lg={24}>
                <b className="cat-title">
                  SHOP {menuLeft[currentMenuIndex].title.toUpperCase()}
                </b>
                <a
                  className="cat-link"
                  href={menuLeft[currentMenuIndex].title.replace(' ', '-')}
                >
                  Shop All &gt;
                </a>
              </Col>
              <Col xs={0} lg={16}>
                <Row type="flex" justify="space-around">
                  {menuLeft[currentMenuIndex]['categories'].map(
                    (menu, index) => (
                      <Col key={index} span={5}>
                        <a href={menu.link}>
                          <img src={menu.img} alt={`${menu.title} image.`} />
                          {menu.title.toUpperCase()}
                        </a>
                      </Col>
                    )
                  )}
                </Row>
              </Col>
            </Row>
            <MegaMenuSidePanel>
              <Row>
                <Col className="text-left" xs={0} lg={24}>
                  <b className="cat-title">
                    SHOP {menuLeft[currentMenuIndex].title.toUpperCase()} BY
                    STYLE
                  </b>
                </Col>
                <Col xs={0} lg={24}>
                  {menuLeft[currentMenuIndex].categoriesByStyle.map(
                    (button, index) => (
                      <a href={button.link} key={index}>
                        <SidePanelButton>
                          <b>{button.title.toUpperCase()}</b>
                        </SidePanelButton>
                      </a>
                    )
                  )}
                </Col>
              </Row>
            </MegaMenuSidePanel>
          </MegaMemuPanel>
        </div>
      ) : null}
    </MegaMenuContainer>
  )
}

export default MegaMenu
