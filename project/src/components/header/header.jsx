import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import ProfileLink from '../profile-link/profile-link';
import SignOutLink from '../sign-out-link/sign-out-link';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';


function Header({isMainScreen, authorizationStatus}) {
  const isLoggedIn = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainScreen={isMainScreen} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <ProfileLink isLoggedIn={isLoggedIn} />
              </li>
              {isLoggedIn && <li className="header__nav-item"><SignOutLink /></li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isMainScreen: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {Header};
export default connect(mapStateToProps, null)(Header);
