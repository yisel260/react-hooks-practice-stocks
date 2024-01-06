import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portafolioStocks,stockClicked}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {portafolioStocks.map((stock) =>{
        return(
          <Stock 
          stockClicked={stockClicked}    
          stockPrice={stock.price} 
          stockName={stock.name} 
          ticker={stock.ticker}
          key={stock.id} /> 
        )
      }
      )
      }
    </div>
  );
}

export default PortfolioContainer;
