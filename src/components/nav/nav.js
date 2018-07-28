import React from 'react';
import styles from './nav.css';
import { connect } from 'dva'; 
import PropTypes from 'prop-types';
import classnames from 'classnames';
const NavItem = (props) => {
  const cls = classnames({
    [`${styles.navItem}`]: true,
    [`${styles.active}`]: props.index === props.active
  })
  return (
    <li className = {cls} onClick={props.onClick}>
     {props.name}
    </li>
  );
};
const Nav = ({dispatch, list, active}) => {  
  function changeNav(index) {
    dispatch({
      type: 'navs/change',
      payload: index,
    });
  }
  return (
    <div className = {styles.nav}>
      <ul className = {styles.navList}>
      {
       list.map((item, index)=> 
          <NavItem  key = {index} name = {item} index = {index} active = {active} onClick = {() => changeNav(index)}/>
        )
      }
      </ul>
    </div>
  )
}

Nav.propTypes = {
  active: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { active } = state.navs;
  return {
   active
  };
}
export default connect(mapStateToProps)(Nav);
