import * as actionTypes from "./actionTypes";
import axios from "axios";

const dataQuranStart = () => {
  return {
    type: actionTypes.DATA_QURAN_START,
  };
};
const dataQuranSuccess = (response) => {
  return {
    type: actionTypes.DATA_QURAN_SUCCESS,
    fullQuran: response,
  };
};

export const initDataQuran = () => {
  return async (dispatch) => {
    try {
      dispatch(dataQuranStart());
      const response = await axios.get(
        "https://unpkg.com/quran-json@1.0.1/json/surahs.json"
      );
      dispatch(dataQuranSuccess(response.data));
    } catch (error) {
      dispatch(dataQuranFail(error));
    }
  };
};

const dataQuranFail = (error) => {
  return {
    type: actionTypes.DATA_QURAN_FAIL,
    error: error,
  };
};

const sourahStart = () => {
  return {
    type: actionTypes.SOURAH_NAME_START,
  };
};

const sourahName = (surahName) => {
  return {
    type: actionTypes.SOURAH_NAME,
    surahName: surahName,
  };
};

export const initSourah = (numOfSourah) => {
  return async (dispatch) => {
    try {
      dispatch(sourahStart());
      const response = await axios.get(
        `https://unpkg.com/quran-json@1.0.1/json/surahs/${numOfSourah}.json`
      );
      dispatch(sourahName(response.data));
    } catch (error) {}
  };
};
