import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import quranLogo from "../../../assets/images/quran.png";
import classes from "./Book.module.css";

const book = (props) => {
  return (
    <Auxiliary>
      <div className={classes.wrapper}>
        <div
          onClick={() => props.clicked(2)}
          className={classes.container}
          id={classes.c0}
        >
          <img src={quranLogo} className={classes.image} alt="" />
          <div className={classes.story} id={classes.s0}>
            <div className={classes.info}>
              <h3>البقره</h3>
              <p>
                {" "}
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم (1) ذَلِكَ الْكِتَابُ
                لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ (2) الَّذِينَ يُؤْمِنُونَ
                بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ
                يُنْفِقُونَ (3) وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ
                وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ (4)
                أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ
                الْمُفْلِحُونَ (5)
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => props.clicked(1)}
          className={classes.container}
          id={classes.c1}
        >
          <img src={quranLogo} className={classes.image} alt="" />
          <div className={classes.story} id={classes.s1}>
            <div className={classes.info}>
              <h3>الفاتحه</h3>
              <p>
                {" "}
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1) الْحَمْدُ لِلَّهِ
                رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ
                يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5)
                اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ
                أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا
                الضَّالِّينَ (7)
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => props.clicked(3)}
          className={classes.container}
          id={classes.c2}
        >
          <img src={quranLogo} className={classes.image} alt="" />
          <div className={classes.story} id={classes.s2}>
            <div className={classes.info}>
              <h3>آل عمران</h3>
              <p>
                {" "}
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم (1) اللَّهُ لَا إِلَهَ
                إِلَّا هُوَ الْحَيُّ الْقَيُّومُ (2) نَزَّلَ عَلَيْكَ الْكِتَابَ
                بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ وَأَنْزَلَ
                التَّوْرَاةَ وَالْإِنْجِيلَ (3) مِنْ قَبْلُ هُدًى لِلنَّاسِ
                وَأَنْزَلَ الْفُرْقَانَ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِ
                اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ وَاللَّهُ عَزِيزٌ ذُو انْتِقَامٍ
                (4) إِنَّ اللَّهَ لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي الْأَرْضِ
                وَلَا فِي السَّمَاءِ (5)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default book;
