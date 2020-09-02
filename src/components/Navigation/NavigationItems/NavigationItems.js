import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { connect } from "react-redux";

/* 
NavigationItems Component contains:
NavigationItem Component
*/
class NavigationItems extends Component {
  render() {
    let linkSourah = null;

    linkSourah = this.props.onfullQuran
      ? this.props.onfullQuran.map((sourah) => {
          return (
            <NavigationItem key={sourah.number} link={`/${sourah.number}`}>
              {sourah.name}
            </NavigationItem>
          );
        })
      : null;
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
          الصفحه الرئيسية
        </NavigationItem>

        <div className={classes.Dropdown}>
          <button className={classes.Dropbtn}>السور</button>
          <div className={classes.Dropdown_content}>{linkSourah}</div>
        </div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onfullQuran: state.fullQuran,
    onLoading: state.loading,
  };
};

export default connect(mapStateToProps)(NavigationItems);
