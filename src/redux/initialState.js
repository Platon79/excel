import {storage} from '@core/utils';

const defaultState = {
  colState: {},
  rowState: {},
  dataState: {}, // {'0:1': null}
  currentText: '',
};

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;
