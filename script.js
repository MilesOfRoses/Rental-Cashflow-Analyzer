	function calculate(){
		//code is organized into 4 sections: Income, Expences, Cashflow and ROI. Most of these sections are divided into code blocks dedicated to user input, processing, and output

		/********************************************* income section *********************************************/
		/* income INPUT code  */
		let numberOfUnits = parseFloat(document.getElementById("numberOfUnits").value); //save user input as a variable, convert it to a float
		let IncomePerUnit = parseFloat(document.getElementById("IncomePerUnit").value);

		/* income PROCESS code  */
		let grossIncome = numberOfUnits * IncomePerUnit; //the total gross income
		let grossIncomeCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(grossIncome); //takes the float "grossIncome" and converts it into USD currency

	  	/* income OUTPUT code */
	  	document.getElementById("grossIncomeOutput").innerHTML = "Gross Monthly Income: " + "<b>" + grossIncomeCurrencyFormat + "</b>";


		/********************************************* expences section *********************************************/
		/* expences INPUT code */
		let taxes = parseFloat(document.getElementById("taxes").value); // we are assuming the taxes are not wrapped up in the mortgage payments 
		let insurance = parseFloat(document.getElementById("insurance").value); // we are assuming the insurance is not wrapped up in the mortgage payments 
		let electric = parseFloat(document.getElementById("electric").value);
		let water = parseFloat(document.getElementById("water").value);
		let garbage = parseFloat(document.getElementById("garbage").value);
		let gas = parseFloat(document.getElementById("gas").value);
		let other = parseFloat(document.getElementById("other").value);
		let lawnSnow = parseFloat(document.getElementById("lawnSnow").value);
		let vacancyRate = parseFloat(document.getElementById("vacancyRate").value) / 100; // Vacancy is taken as a percentage of gross income. divide by 100 to convert to a decimal
		let vacancyCost = grossIncome * vacancyRate; //to find the cost of vacancy, multiply gross income by the vacancy rate
		let repairs = parseFloat(document.getElementById("repairs").value);
		let capEx = parseFloat(document.getElementById("capEx").value);
		let managementRate = parseFloat(document.getElementById("management").value) / 100; // management fee is taken as a percentage of gross income. divide by 100 to convert to a decimal
		let managementCost = grossIncome * managementRate; //to find the cost of management, multiply gross income by the management rate
		let mortgage = parseFloat(document.getElementById("mortgage").value); // the mortgage payments do not include taxes and insurance, they are accounted for above
		

		/* expences PROCESS code */
		let totalExpences = taxes + insurance + electric + water + garbage + gas + other + lawnSnow + vacancyCost + repairs + capEx + managementCost + mortgage; //totaling up all of the expences
		let totalExpencesCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(totalExpences); //takes a float, converts it into USD currency


		/* expences OUTPUT code */
		document.getElementById("totalExpencesOutout").innerHTML = "Total Monthly Expences: " + "<b>" + totalExpencesCurrencyFormat + "</b>";


		/********************************************* cashflow section  *********************************************/

		/* we already have all of the input we need to figure out the cash flow */

		/* cashflow PROCESS code */
  		let cashflow = grossIncome - totalExpences;
  		let cashflowCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(cashflow); //takes a float, converts it into USD currency
  		let cashFlowPerUnit = cashflow / numberOfUnits;
  		let cashFlowPerUnitCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(cashFlowPerUnit); //takes a float, converts it into USD currency
  		/* cashflow OUTPUT code */
  		document.getElementById("cashflowOutput").innerHTML = "Monthly Cashflow: " + "<b>" + cashflowCurrencyFormat + "</b>";
  		document.getElementById("cashflowPerUnitOutput").innerHTML = "Monthly Cashflow Per Unit: " + "<b>" + cashFlowPerUnitCurrencyFormat + "<b>";


	  	/********************************************* Cash on Cash ROI section  *********************************************/
	  	/* ROI INPUT code */
	  	let downPayment = parseFloat(document.getElementById("downPayment").value);
	  	let closingCosts = parseFloat(document.getElementById("closingCosts").value);
	  	let rehabBudget = parseFloat(document.getElementById("rehabBudget").value);
	  	let otherExpences = parseFloat(document.getElementById("otherExpences").value);

	  	/* ROI PROCESS code */
	  	let totalInvestment = downPayment + closingCosts + rehabBudget + otherExpences;
	  	let totalInvestmentCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(totalInvestment); //takes a float, converts it into USD currency
	  	let annualCashflow = cashflow * 12; //convert the monthly cashflow to annual cashflow
	  	let cashOnCashROI = (annualCashflow / totalInvestment) * 100;

	  	/*ROI OUTPUT code */
	  	document.getElementById("CashOnCashROIOutput").innerHTML = "Cash on Cash ROI: " + "<b>" + cashOnCashROI + "</b>";
  	}