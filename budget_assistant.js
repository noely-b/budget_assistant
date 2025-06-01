let startup = "Budget Flows $ Grows";
let initialCapital = 2500;
let monthlyRevenue = 7000;
let monthlyExpenses = 5000;
let netMonthlyCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netMonthlyCashFlow;
let profitability = true if cashFlow > 0 else false;
console.log(startup, netMonthlyCashFlow, currentBalance, profitability);
