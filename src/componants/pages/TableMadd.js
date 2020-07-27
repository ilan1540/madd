import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { SelectMaddBasis } from './SelectMaddBasis';

export const TableMadd = () => {
  const lastUpdete = useSelector((state) => state.madd.lastMadd);
  const [currBase, setCurrBase] = useState();
  const [prevBase, setPrevBase] = useState();
  const [mbasis, setMbasis] = useState();
  const [selectBasis, setSelectBasis] = useState(1);

  useEffect(() => {
    const basis = [];
    if (lastUpdete && lastUpdete.date) {
      setCurrBase(lastUpdete.date[0].currBase);
      setPrevBase(lastUpdete.date[0].prevBase);
      // console.log(lastUpdete);
    }
    if (currBase) {
      basis.push({
        baseDesc: currBase.baseDesc,
        coeff: 1,
      });
      if (prevBase) {
        prevBase.map((i) => {
          basis.push({
            baseDesc: i.baseDesc,
            coeff: i.coeff,
          });
          return basis;
        });
        if (!mbasis) {
          setMbasis(basis);
        }
      }
    }
  }, [lastUpdete, currBase, prevBase, mbasis]);

  return (
    <>
      <SelectMaddBasis basis={mbasis} selected={setSelectBasis} />
    </>
  );
};
