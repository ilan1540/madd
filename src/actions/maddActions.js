import { GET_SDAROT, GET_LAST_MADD } from './type';
//import axios from 'axios';
//import { useDispatch } from 'react-redux';

export const test = () => {
  const res = { name: 'ilan', lastName: 'bar lev' };

  return {
    type: 'TEST',
    payload: res,
  };
};

export const getLastMadd = (data) => {
  return {
    type: GET_LAST_MADD,
    payload: data,
  };
};

export const getSdarot = (data) => {
  return {
    type: GET_SDAROT,
    payload: data,
  };

  /*  const dispatch = useDispatch();
  const url =
    'https://api.cbs.gov.il/index/catalog/subject?id=37&format=json&download=false';
  await axios.get(url).then((res) => {
    console.log(res.data);
    dispatch = {
      type: GET_SDAROT,
      payload: res.data,
    };
    var obj1 = {
      type: GET_SDAROT,
      payload: 12345,
    };
    console.log(dispatch);
    return obj1;
  });
  */
};
