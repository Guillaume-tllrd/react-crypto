import React from 'react';
// ce coin chart doit récupérer l'id du coin avec le props:
const CoinChart = ({coinId, coinName}) => {
    const headerData = [
        [1, "1 jour"],
        [3, "3 jour"],
        [7, "7 jour"],
        [30, "1 mois"],
        [91, "3 mois"],
        [181, "6 mois"],
        [365, "1 an"],
        [3000, "Max"],
    ]
    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el) => {
                //    ARRETé à 2:40:51
                })}
            </div>
        </div>
    );
};

export default CoinChart;