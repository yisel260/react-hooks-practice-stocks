import React, {useState,useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList,setStockList]= useState([])
  const [portafolioStocks,setPortafolioStocks]= useState([])
  const [filteredCategory, setFilteredCategory]= useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => {
        setStockList(stocks)
       })
  }, []);

//  function resetStockList(){
//   fetch("http://localhost:3001/stocks")
//   .then((r) => r.json())
//   .then((stocks) => {
//     setStockList(stocks)
//    })
//  }

  function filterStocks (filteredCategory){


    console.log(filteredCategory)

    if (filteredCategory==="All"){

      console.log("category is all")
      let filteredStocks = stockList

      console.log(filteredStocks)

      setStockList(filteredStocks)

    } 
    else if(filteredCategory !== "All"){

    let  filteredStocks= stockList.filter((stock)=>{ 
      
    if(stock.type===filteredCategory){
      return stock
    }
    
    //  else {
    //   return stock
    //  }
   })

   setStockList(filteredStocks)
  }}


  function stockClicked (stockClicked){
    
    

    if (portafolioStocks.includes(stockClicked)){

      const removePortafolioStocks = portafolioStocks.filter((stock)=>{
         
        return stock.name !== stockClicked.name

      })

      setPortafolioStocks(removePortafolioStocks)
    }
    else {
        
      const addPortafolioStocks = [...portafolioStocks,stockClicked]
       
        setPortafolioStocks(addPortafolioStocks)}
    }

//Sort alphabetically

function sortAlphabettically(){

        console.log("running when alphabet button checked")

        let stocksSortedByAlpha = stockList.sort(function (a, b) {
         
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });

        console.log(stocksSortedByAlpha)

        setStockList(()=> setStockList(stocksSortedByAlpha))

        console.log(stockList)

      }

//Sort by price ascending 

function sortByPrice(){
  console.log("running when price button checked")

  const stocksSortedByPrice=stockList.sort(function (a, b) {
         
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {

      return 1;
    }

    return 0;
  })

  console.log(stocksSortedByPrice)

  setStockList(()=> setStockList(stocksSortedByPrice))


  console.log(stockList)

}

// const stocksFiltered=[]
// function filterStocks(event){
//  console.log("running when filter changes")
//   stocksFiltered = stockList.filter((stock)=>{
//   if(stock.type===event.target.value){
//     return stock
//   }
//   else {
//     return stock
//   }
//  }) 
//  console.log(stocksFiltered)
//  console.log(stockList)

// }


//render 
  return (

    <div>
      <SearchBar filterStocks={filterStocks} sortAlphabettically={sortAlphabettically} sortByPrice={sortByPrice} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockClicked={stockClicked} stockList={stockList} />
        </div>
        <div className="col-4">
          <PortfolioContainer stockClicked = {stockClicked} portafolioStocks={portafolioStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
