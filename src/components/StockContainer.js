import React from "react";
import Stock from "./Stock";


function StockContainer({stockList, stockClicked}) {

  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stock)=>{
      return(
      <Stock 
      stock={stock}
      stockClicked={stockClicked}
      stockPrice={stock.price} 
      stockName={stock.name} 
      ticker={stock.ticker}
      key={stock.id} />)})}
      </div>
  );
}

export default StockContainer;
