import React from 'react';

export const ConntctMaddInfo = ({ lastUpdete }) => {
  console.log(lastUpdete);
  return (
    <div>
      {lastUpdete ? (
        <div className="card  mb-3">
          <div className="card-header">
            {lastUpdete.code} {lastUpdete.name}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <ul className="list-group">
                  <li className="list-group-item">שנה</li>
                  <li className="list-group-item">חודש</li>
                  <li className="list-group-item">בסיס מדד</li>
                  <li className="list-group-item">שער מדד</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-group">
                  <li className="list-group-item">{lastUpdete.date[0].year}</li>
                  <li className="list-group-item">
                    {lastUpdete.date[0].monthDesc}
                  </li>
                  <li className="list-group-item">
                    {lastUpdete.date[0].currBase.baseDesc}
                  </li>
                  <li className="list-group-item">
                    {lastUpdete.date[0].currBase.value}
                  </li>
                </ul>
              </div>
            </div>

            <h5 className="card-title">לפי בסיס שווה לערך של נקודות</h5>
          </div>
        </div>
      ) : null}
    </div>
  );
};
