# Holaglow angular technical test

The client wants a web application that can use to easily see the market general status, and also the value of a given cryptocurrency that updates every 10 seconds.



## Url routing
| 		                      			| URL                                                                |
| ------------------------------------- | ------------------------------------------------------------------ |
| Live data about specified currency  	| /live/BTC              										   	 |
| Market overview    		  			| /overview               										     |



## Requirements

- Create a web app in next.js latest stable version
- Create a parent component, that lists the first 20 currencies, ordered by rank
- The parent component must have two child components:
	- One for retrieving the live data about all currencies
	- Another one for retrieving the market overview
- By clicking any currency of the 20 shown on the parent component, it should redirect to the url for showing the currency information
- Use next.js routing to show one component or another inside its parent, follow the Url routing above
- Avoid to put unnecessary logic inside the component, and try to not duplicate code
- Add Unit Tests that covers the functionality
- We must consume the following apis for retrieving the value of a cryptocurrency:

### For retrieving the information of a currency:
https://api.kucoin.com/api/v1/market/stats?symbol={code of the cryptocyrrency}-USDT example: https://api.kucoin.com/api/v1/market/stats?symbol=BTC-USDT

### For retrieving the list of cryptocurrencies: 
https://api.coinpaprika.com/v1/coins

### For retrieving the market overview:
https://api.coinbase.com/v2/exchange-rates?currency=BTC



## Tips
Don't be shy, try to show us all your knowledge, coding philosophy and best practices that are necessary to complete the challenge. 
