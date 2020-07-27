import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import AllBaseMadd from './AllBaseMadd';
import { ConntctMaddInfo } from './ConntctMaddInfo';
import { useSelector, useDispatch } from 'react-redux';
import { getLastMadd } from '../../actions/maddActions';

const LastMadd = () => {
  const lastUpdete = useSelector((state) => state.madd.lastMadd);
  const [showBaseTav, setShowBaseTav] = useState(false);
  const dispatch = useDispatch();

  //const res = getMadd();

  useEffect(() => {
    const getMadd = async () => {
      await axios
        .get(
          'https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last=2&coef=true'
        )
        .then((res) => {
          //  console.log(res.data.month[0]);
          dispatch(getLastMadd(res.data.month[0]));
        });
    };
    getMadd();
    // console.log(res);
  }, [dispatch]);

  // console.log(getMadd());

  const togglerTav = () => {
    setShowBaseTav(!showBaseTav);
  };

  return (
    <Fragment>
      {lastUpdete && !showBaseTav ? (
        <ConntctMaddInfo tggler={togglerTav} lastUpdete={lastUpdete} />
      ) : (
        <AllBaseMadd tggler={togglerTav} lastUpdete={lastUpdete} />
      )}
    </Fragment>
  );
};

export default LastMadd;
