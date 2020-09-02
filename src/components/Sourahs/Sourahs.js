import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/quran";
import classes from "./Sourahs.module.css";
import Spinner from "../UI/Spinner/Spinner";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

class Sourahs extends Component {
  componentDidMount() {
    this.props.onInitSourah(this.props.numOfSourah);
  }

  render() {
    let sourah = null;
    sourah = this.props.onSurahName
      ? this.props.onSurahName.verses.map((el) => {
          return (
            <p key={el.number}>
              {el.text} ({el.number})
            </p>
          );
        })
      : null;

    return (
      <Auxiliary>
        {!this.props.onLoadingSourah ? (
          <div className={classes.Sourahs}>{sourah}</div>
        ) : (
          <Spinner />
        )}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onSurahName: state.surahName,
    onLoadingSourah: state.loadingSourah,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSourah: (numOfSourah) => {
      dispatch(actions.initSourah(numOfSourah));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sourahs);
