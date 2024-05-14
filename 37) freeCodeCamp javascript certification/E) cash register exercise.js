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

// 5) Function to calculate total cash in cid mapping cid array
const calculateChange = (
  cashToReturn,
  totalAmountCurrencyCid,
  currencyUnitValue
) => {
  let totalAmountCurrencyReturn =
    Math.floor(cashToReturn / currencyUnitValue) * currencyUnitValue;
  console.log('🚀 ~ totalAmountCurrencyReturn:', totalAmountCurrencyReturn);

  console.log(
    `If totalAmountCurrencyReturn: ${totalAmountCurrencyReturn} is bigger than totalAmountCurrencyCid: ${totalAmountCurrencyCid} then totalAmountCurrencyReturn will be equal to totalAmountCurrencyCid`
  );
  if (totalAmountCurrencyReturn > totalAmountCurrencyCid) {
    totalAmountCurrencyReturn = totalAmountCurrencyCid;
  }

  cashToReturn -= totalAmountCurrencyReturn;

  // console.log(`CASH TO RETURN IS ${cashToReturn}`);

  if (currencyUnitValue === 0.01 && cashToReturn < 0) {
    console.log(`INSUFFICIENT FUNDS`);
    change.status = 'INSUFFICIENT_FUNDS';
    return change;
  }

  const response = {
    cashToReturn,
    totalAmountCurrencyReturn: totalAmountCurrencyReturn,
  };
  console.log('🚀 ~ response:', response);

  if (cashToReturn <= 0) {
    console.log(`NO MORE CASH TO RETURN`);
    return response;
  }

  return response;
};

// MAIN FUNCTION
function checkCashRegister(price, cash, cid) {
  // 1) Build object with type of currency unit amount (example: PENNY) and its correspondent total value (example: 0.01)
  const valuesPerCurrency = [
    {
      nameValue: `ONE HUNDRED`,
      currencyValue: 100,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `TWENTY`,
      currencyValue: 20,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `TEN`,
      currencyValue: 10,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `FIVE`,
      currencyValue: 5,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `ONE`,
      currencyValue: 1,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `QUARTER`,
      currencyValue: 0.25,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `DIME`,
      currencyValue: 0.1,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `NICKEL`,
      currencyValue: 0.05,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
    {
      nameValue: `PENNY`,
      currencyValue: 0.01,
      totalAmountCurrencyCid: 0,
      totalAmountCurrencyReturn: 0,
    },
  ];

  let change = {
    status: 'OPEN',
    change: [],
  };

  let cashToReturn = cash - price;
  let totalCashCid = 0;
  console.log('🚀 ~ checkCashRegister ~ cashToReturn:', cashToReturn);

  for (let index = cid.length - 1; index >= 0; index--) {
    let totalAmountCurrencyCid = cid[index][1];
    console.log(
      '🚀 ~ checkCashRegister ~ totalAmountCurrencyCid:',
      totalAmountCurrencyCid
    );
    totalCashCid += totalAmountCurrencyCid;
    let currencyUnitValue =
      valuesPerCurrency[valuesPerCurrency.length - 1 - index].currencyValue;
    valuesPerCurrency[
      valuesPerCurrency.length - 1 - index
    ].totalAmountCurrencyCid = totalAmountCurrencyCid;
    let response = calculateChange(
      cashToReturn,
      totalAmountCurrencyCid,
      currencyUnitValue
    );

    cashToReturn = response.cashToReturn;

    valuesPerCurrency[
      valuesPerCurrency.length - 1 - index
    ].totalAmountCurrencyReturn = response.totalAmountCurrencyReturn;

    const changeToAdd = {
      nameValue:
        valuesPerCurrency[valuesPerCurrency.length - 1 - index].nameValue,
      totalAmountCurrencyReturn: response.totalAmountCurrencyReturn,
    };

    if (response.totalAmountCurrencyReturn > 0) {
      change.change.push(changeToAdd);
    }

    if (response.cashToReturn <= 0) {
      console.info(`Leaving for because there is no more cash to return`);
      break;
    }
  }

  // If no more money in CID:
  if (cashToReturn > 0) {
    change = {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  // If no more money in CID and cash return === 0
  // TODO: calculate totalAmountCurrencyCID
  console.log(`TOTAL AMOUNT FOR CID IS ${totalCashCid}`);
  console.log(`TOTAL AMOUNT OF CASH IS ${cash}`);
  console.log(`TOTAL AMOUNT FOR PRICE IS ${price}`);
  if (totalCashCid === cash - price) {
    change.status = 'CLOSED';
    console.log(`CID CLOSED WITH CHANGE ${JSON.stringify(change)}`);
    return change;
  }

  console.info(`FINAL RESPONSE ${JSON.stringify(change)}`);
  return;
}

// price, cash, cid
checkCashRegister(121, 150, [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 0],
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
