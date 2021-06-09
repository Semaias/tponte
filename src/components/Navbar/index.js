import { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';

import Button from '../../fragments/Button';
import './styles.scss';

import { setMenu } from '../../ducks/appSlice';

const Navbar = () => {
  const [activeColor, setActiveColor] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  const {
    isOpen,
  } = useSelector((state) => state.app);

  function handleOpenMenu() {
    dispatch(setMenu(!isOpen));
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10 || location.pathname !== '/') {
        setActiveColor(true);
      } else {
        setActiveColor(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveColor(true);
    }
  }, []);

  return (
    <>
      <Container fluid className={`${isOpen && 'd-none'} ${activeColor && 'activeColor'} fixed-top`}>
        <Row>
          <Container>
            <Row>
              <Col lg={12}>
                <nav className="menu">
                  <button type="button" onClick={handleOpenMenu} className="menu__buttonMobile">
                    <HiMenu size="32" color={`${!activeColor ? '#FFFFFF' : '#121212'}`} />
                  </button>
                  <div className="menu__brand">
                    <span className="title">tbridge.</span>
                    co
                  </div>
                  <div className="menu__content">
                    <li className="menu__list">
                      <Link to="/" className="menu__list--link">Home</ Link>
                    </li>
                    <li className="menu__list">
                      <a href="/#WeWantToKnow" className="menu__list--link">Conheça</a>
                    </li>
                    <li className="menu__list">
                      <a href="/#CheckTheSchedule" className="menu__list--link">Eventos</a>
                    </li>
                    <li className="menu__list">
                      <a href="/blog" className="menu__list--link">Blog</a>
                    </li>
                    <li className="menu__list">
                      <a href="/#SpeakWithUs" className="menu__list--link">Fale Conosco</a>
                    </li>
                    <li className="menu__list">
                      <Button className="menu__list--link button-link" title="Participe" link="/facaparte" />
                    </li>
                  </div>
                </nav>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <nav className={`menuMobile ${isOpen && 'd-flex'}`}>
        <div className="menu__buttonMobile">
          <button type="button" onClick={handleOpenMenu} className="menu__buttonMobile--button">
            <div className="menu__buttonMobile--one" />
            <div className="menu__buttonMobile--two" />
          </button>
        </div>
        <div className="menuMobile__content">
          <li className="menu__list">
            <Link to="/" className="menu__list--link">Home</Link>
          </li>
          <li className="menu__list">
            <Link to="/#WeWantToKnow" className="menu__list--link">Conheça</Link>
          </li>
          <li className="menu__list">
            <Link to="/#CheckTheSchedule" className="menu__list--link">Eventos</Link>
          </li>
          <li className="menu__list">
            <Link to="/blog" className="menu__list--link">Blog</Link>
          </li>
          <li className="menu__list">
            <Link to="/#SpeakWithUs" className="menu__list--link">Fale Conosco</Link>
          </li>
        </div>
        <li className="menu__button">
          <Button className="menu__list--link" title="Participe" link="/facaparte" />
        </li>
      </nav>
    </>
  );
};

export default Navbar;
