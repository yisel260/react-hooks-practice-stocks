import React from "react";

function Stock({stockPrice, stockName,ticker, stockClicked, stock}) {

  return (
    <div>
      <div onClick={()=> stockClicked(stock)} className="card">
        <div className="card-body">
          <h5 className="card-title">{stockName}</h5>
          <p className="card-text">{ticker}:{stockPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
