import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './Index.css';
import Nav from './../components/nav/nav'
function Index({ list }) {
  return (
    <div className = {styles.container}>
      <Nav list= {list}/>
      <div className = {styles.cover}> 

      </div>
      <div className = {styles.musList}>

      </div>
    </div>
  );
}

Index.propTypes = {
  list: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { list } = state.navs;
  return {
    list
  };
}

export default connect(mapStateToProps)(Index);
