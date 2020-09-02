import React, { Component } from "react";
import classes from "./Home.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Book from "./Book/Book";

class Home extends Component {
  pushPage = (numOfSourah) => {
    switch (numOfSourah) {
      case 2:
        return this.props.history.push(`/2`);
      case 3:
        return this.props.history.push(`/3`);
      default:
        return this.props.history.push(`/1`);
    }
  };
  render() {
    return (
      <Auxiliary>
        <div className={classes.Home}>
          وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ
          وَالْمُؤْمِنُونَ ۖ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ
          وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ
        </div>
        <Book
          clicked={(numOfSourah) => {
            this.pushPage(numOfSourah);
          }}
        />
      </Auxiliary>
    );
  }
}

export default Home;
