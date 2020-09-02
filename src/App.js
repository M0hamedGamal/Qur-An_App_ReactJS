import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/Layout";
import * as actions from "./store/actions/quran";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/UI/Spinner/Spinner";
import Sourahs from "./components/Sourahs/Sourahs";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";

class App extends Component {
  componentDidMount() {
    this.props.onInitDataQuran();
  }
  render() {
    let routeSourahs = null;
    routeSourahs = this.props.onfullQuran
      ? this.props.onfullQuran.map((sourah) => {
          return (
            <Route
              key={sourah.number}
              path={`/${sourah.number}`}
              exact
              render={() => <Sourahs numOfSourah={sourah.number} />}
            />
          );
        })
      : null;
    return (
      <Auxiliary>
        {!this.props.onLoadingData ? (
          <Layout>
            <Switch>
              <Route path={`/`} exact component={Home} />
              {routeSourahs}
            </Switch>
          </Layout>
        ) : (
          <Spinner />
        )}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    onfullQuran: state.fullQuran,
    onLoadingData: state.loadingData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitDataQuran: () => {
      dispatch(actions.initDataQuran());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
