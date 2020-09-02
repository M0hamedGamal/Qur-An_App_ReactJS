import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  fullQuran: null,
  surahName: null,
  error: null,
  loadingData: false,
  loadingSourah: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_QURAN_START:
      return {
        ...state,
        loadingData: true,
      };

    case actionTypes.DATA_QURAN_SUCCESS:
      return {
        ...state,
        loadingData: false,
        fullQuran: action.fullQuran,
      };

    case actionTypes.SOURAH_NAME_START:
      return {
        ...state,
        loadingSourah: true,
      };

    case actionTypes.SOURAH_NAME:
      return {
        ...state,
        loadingSourah: false,
        surahName: action.surahName,
      };

    case actionTypes.DATA_QURAN_FAIL:
      return {
        ...state,
        loadingData: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
