/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

// 5) Calculate total cash in cid mapping cid array
const calculateChange = (
  cashToReturn,
  amountCurrencyUnit,
  currencyUnitValue
) => {
  let totalUnitCurrencyReturn = 0;
  for (let index = 0; cashToReturn > 0; index++) {
    totalUnitCurrencyReturn += 1;
    cashToReturn -= currencyUnitValue;
    amountCurrencyUnit -= 1;
    if (amountCurrencyUnit === 0) {
      console.log(`CHANGE FOR THIS CURRENCY IS ${totalUnitCurrencyReturn}`);
      const response = {
        cashToReturn,
        totalUnitCurrencyReturn,
      };

      console.log(response);
    }
    if (cashToReturn - currencyUnitValue < 0) {
      console.log(`CHANGE FOR THIS CURRENCY IS ${totalUnitCurrencyReturn}`);
      const response = {
        cashToReturn,
        totalUnitCurrencyReturn,
      };

      console.log(response);
    }
  }
  console.log(`CHANGE FOR THIS CURRENCY IS ${totalUnitCurrencyReturn}`);

  const response = {
    cashToReturn,
    totalUnitCurrencyReturn,
  };

  console.log(response);
  return response;
};

// MAIN FUNCTION
function checkCashRegister(price, cash, cid) {
  let change = {
    status: 'OPEN',
    change: [],
  };

  let totalAmountCID = 0;

  // 1) Build object with type of currency unit amount (example: PENNY) and its correspondent total value (example: 0.01)
  const amountsCurrency = {
    ONE_HUNDRED: 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  for (let index = cid.length - 1; index >= 0; index--) {
    // 2) TURN ONE HUNDRED to ONE_HUNDRED FOR OBJECT amountsCurrency purposes
    if (cid[index][0] === 'ONE HUNDRED') {
      cid[index][0] = 'ONE_HUNDRED';
    }
    // console.log(cid[index][1] * amountsCurrency[cid[index][0]]);
    totalAmountCID += cid[index][1] * amountsCurrency[cid[index][0]];
  }

  // console.log(totalAmountCID);

  // 3) if total cash in cid is less than cash - price return: "INSUFFICIENT_FUNDS" AND  change: []
  let cashReturn = cash - price;
  if (cashReturn > totalAmountCID) {
    // console.log(cashReturn);
    change.status = 'INSUFFICIENT_FUNDS';
    // console.log(`THERE IS SUFFICIENT CID`);
  }

  // 4) use calculate change array function
  const ONE_HUNDRED = calculateChange(cashReturn, cid[8][1], 100);
  const ONE_HUNDRED_RETURN = ONE_HUNDRED.totalUnitCurrencyReturn;
  console.log(
    '🚀 ~ checkCashRegister ~ ONE_HUNDRED_RETURN:',
    ONE_HUNDRED_RETURN
  );
  const TWENTY = calculateChange(ONE_HUNDRED.cashToReturn, cid[7][2], 20);
  const TWENTY_RETURN = TWENTY.totalUnitCurrencyReturn;
  console.log('🚀 ~ checkCashRegister ~ TWENTY_RETURN:', TWENTY_RETURN);
  // const TEN = calculateChange(TWENTY.cashToReturn, cid[7][2], 20);
  // const TEN_RETURN = TEN.totalUnitCurrencyReturn
  // const FIVE = calculateChange(TEN.cashToReturn, cid[7][2], 20);
  // const FIVE_RETURN = FIVE.totalUnitCurrencyReturn
  // const ONE = calculateChange(FIVE.cashToReturn, cid[7][2], 20);
  // const ONE_RETURN = ONE.totalUnitCurrencyReturn
  // const QUARTER = calculateChange(ONE.cashToReturn, cid[7][2], 20);
  // const QUARTER_RETURN = QUARTER.totalUnitCurrencyReturn
  // const DIME = calculateChange(QUARTER.cashToReturn, cid[7][2], 20);
  // const DIME_RETURN = DIME.totalUnitCurrencyReturn
  // const NICKEL = calculateChange(DIME.cashToReturn, cid[7][2], 20);
  // const NICKEL_RETURN = NICKEL.totalUnitCurrencyReturn
  // const PENNY = calculateChange(NICKEL.cashToReturn, cid[7][2], 20);
  // const PENNY_RETURN = PENNY.totalUnitCurrencyReturn

  // 5) if total cash in cid is equal than cash - price return: "CLOSED" AND change: [...]
  if (totalAmountCID === cash - price) {
    change.status = 'CLOSED';
    console.log(`CID CLOSED WITH CHANGE ${JSON.stringify(change)}`);
    return change;
  }

  // 6) else return: "OPEN" AND change: [...]
  console.log(`CID OPEN WITH CHANGE ${JSON.stringify(change)}`);
  return change;
}

checkCashRegister(120, 240, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 1],
  ['ONE HUNDRED', 1],
]);
// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]);

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01], * 0.01 = 0.0101
//   ['NICKEL', 2.05], * 0.05 = 0.1025
//   ['DIME', 3.1], * 0.1 = 0.31
//   ['QUARTER', 4.25], * 0.25 = 1.0625
//   ['ONE', 90], * 1 = 90
//   ['FIVE', 55], * 5 = 275
//   ['TEN', 20], * 10 = 200
//   ['TWENTY', 60], * 20 = 1200
//   ['ONE HUNDRED', 100], * 100= 10000
// ]);
// TOTAL AMOUNT CID = 11,766.4851

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]); // should return an object.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.01],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 0],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.01],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 1],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ['PENNY', 0.5],
//   ['NICKEL', 0],
//   ['DIME', 0],
//   ['QUARTER', 0],
//   ['ONE', 0],
//   ['FIVE', 0],
//   ['TEN', 0],
//   ['TWENTY', 0],
//   ['ONE HUNDRED', 0],
// ]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
