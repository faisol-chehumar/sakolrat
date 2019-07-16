import React, { useState, useRef, useEffect } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from '../../layouts/Container'
import './megamenu.css'
import _ from 'lodash'

// import menu from './menu'

// const { menuLeft } = menu

const MegaMenuContainer = styled.nav`
  margin: 0 -4rem;
`

const MegaMenuBar = styled.div`
  background-color: #fff;
  padding: 0 4rem;
  height: 44px;
  line-height: 0;
  display: none;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

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

  .is-active a {
    background-color: #152D5A;
    color: #3AD10C !important;
  }

  .sub-menu  a {
    color: #222;

    &:hover {
      background-color: #152D5A;
      color: #3AD10C;
    }
  }

  @media (min-width: 992px) {
    display: block;
  }
`

const MegaMenuPanel = styled.div`
  background-color: #fff;
  border-bottom: 4px solid #152D5A;
  padding: 2.5rem 4rem;
  color: #333;
  position: absolute;
  z-index: 9999;
  display: none;
  height: 25rem;
  width: 110%;
  margin-left: -5%;

  a {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    background-color: transparent !important;

    &:hover {
      color: #152D5A;
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

// const MegaMenuSidePanel = styled.div`
//   background-color: #eee;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   right: 5%;
//   padding: 0.5rem 1rem;
//   display: none;

//   @media (min-width: 992px) {
//     display: block;
//     width: 18rem;
//   }

//   @media (min-width: 1200px) {
//     width: 25rem;
//   }
// `

// const SidePanelButton = styled(Link)`
//   border: 2px solid #bebebe;
//   width: 100%;
//   padding: 1rem !important;
//   line-height: 1;
//   margin-bottom: 0.5rem;
//   font-size: 0.8rem;
//   color: #333;
//   display: block;
// `

const MegaMenu = ({ getCategories, categories, getSubCategories }) => {
  const [currentMenuIndex, setCurrentIndex] = useState(null)
  const [subCategoriesData, setSubCategoriesData] = useState(null)
  const menu = useRef()
  const panel = useRef()

  useEffect(() => {
    getCategories()

    const setSubCategoriesImage = async () => {
      const result = await getSubCategories()
      const resultWithImage = _.mapValues(_.keyBy(result.data, 'sub-categories-id'), 'sub-categories-image')

      setSubCategoriesData(resultWithImage)
    }

    setSubCategoriesImage()

    return () => {
      getCategories()
      setSubCategoriesImage()
    }
  }, [])

  return (
    <MegaMenuContainer>
      <div>
        <MegaMenuBar className="ne-mega-menu">
          <Container className="ne-mega-container">
            <Row gutter={16}>
              <Col xs={0} lg={24}>
                <ul
                  className="text-left sub-menu"
                  ref={menu}
                  onMouseLeave={() => setCurrentIndex(null)}
                >
                  {categories && categories.map((menu, index) => (
                    <li
                      key={index}
                      className={currentMenuIndex === index ? 'is-active' : null}
                      onMouseEnter={() => setCurrentIndex(index)}
                    >
                      <Link to={menu.slug}>
                        {menu.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                  <div ref={panel}>
                    {currentMenuIndex !== null ? (
                      <MegaMenuPanel>
                        <Row>
                          <Col className="text-left" xs={0} lg={24}>
                            <b className="cat-title">
                              SHOP {categories[currentMenuIndex].name.toUpperCase()}
                            </b>
                            <Link
                              className="cat-link"
                              to={categories[currentMenuIndex].slug}
                            >
                              Shop All &gt;
                            </Link>
                          </Col>
                          <Col xs={0} lg={16}>
                            <Row>
                              {categories[currentMenuIndex].children.map((menu, index) => (
                                <Col key={index} xs={4}>
                                  <Link to={menu.slug}>
                                    <Row>
                                      <Col xs={24}>
                                        <img
                                          src={subCategoriesData[menu.id]}
                                          alt={`${menu.name}`}
                                          width="100%"
                                          style={{ marginBottom: '1rem' }}
                                        />
                                      </Col>
                                      <Col xs={24}>
                                        {menu.name.toUpperCase()}
                                      </Col>
                                    </Row>
                                  </Link>
                                </Col>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                        {/* <MegaMenuSidePanel>
                          <Row>
                            <Col className="text-left" xs={0} lg={24}>
                              <b>
                                SHOP {menuLeft[currentMenuIndex].title.toUpperCase()} BY STYLE
                              </b>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={0} lg={24}>
                              {menuLeft[currentMenuIndex].categoriesByStyle.map(
                                (button, index) => (
                                  <SidePanelButton key={index} to={button.link}>
                                    <b>{button.title.toUpperCase()}</b>
                                  </SidePanelButton>
                                )
                              )}
                            </Col>
                          </Row>
                        </MegaMenuSidePanel> */}
                      </MegaMenuPanel>
                    ) : null}
                  </div>
                </ul>
              </Col>
            </Row>
          </Container>
        </MegaMenuBar>
      </div>
    </MegaMenuContainer>
  )
}

MegaMenu.propTypes = {
  getCategories: PropTypes.func,
  getSubCategories: PropTypes.func,
  subCategories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  categories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  categories: { categories, subCategories }
}) => ({ categories, subCategories })

const mapDispatchToProps = ({
  categories: { getCategories, getSubCategories }
}) => ({
  getCategories: () => getCategories(),
  getSubCategories: () => getSubCategories()
})

export default connect(mapStateToProps, mapDispatchToProps)(MegaMenu)
