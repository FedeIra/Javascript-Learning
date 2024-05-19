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
  if (totalAmountCurrencyReturn > totalAmountCurrencyCid) {
    totalAmountCurrencyReturn = totalAmountCurrencyCid;
  }

  cashToReturn -= totalAmountCurrencyReturn;
  cashToReturn = Math.round(cashToReturn * 100) / 100;

  if (currencyUnitValue === 0.01 && cashToReturn < 0) {
    return change;
  }

  const response = {
    cashToReturn,
    totalAmountCurrencyReturn: totalAmountCurrencyReturn,
  };

  return response;
};

// MAIN FUNCTION
// console.time(`FIRST FUNCTION`);
function checkCashRegister(price, cash, cid) {
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

  for (let index = cid.length - 1; index >= 0; index--) {
    let totalAmountCurrencyCid = cid[index][1];
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

    const changeToAdd = [
      valuesPerCurrency[valuesPerCurrency.length - 1 - index].nameValue,
      response.totalAmountCurrencyReturn,
    ];

    change.change.unshift(changeToAdd);
  }

  if (cashToReturn > 0) {
    change = {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  if (totalCashCid === cash - price) {
    change.status = 'CLOSED';
    return change;
  }

  if (change.status === 'OPEN') {
    let openChange = [];
    change.change.map((currency) => {
      if (currency[1] !== 0) {
        openChange.unshift(currency);
      }
    });
    change.change = openChange;
  }

  console.info(`FINAL RESPONSE ${JSON.stringify(change)}`);
  // console.timeEnd(`FIRST FUNCTION`);
  return change;
}

// SECOND OPTION SOLUTION
const CURRENCY_UNITS = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 },
];

function checkCashRegister2(price, cash, cid) {
  console.time('FUNCTION');
  let changeDue = cash - price;
  const change = [];
  let totalCID = 0;

  // Calculate total cash in drawer
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);

  // Handle exact change
  if (Number(totalCID) === changeDue) {
    return { status: 'CLOSED', change: cid };
  }

  // Handle insufficient funds
  if (Number(totalCID) < changeDue) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // Reverse to handle highest currency unit first
  cid = cid.reverse();

  // Compute change to return
  CURRENCY_UNITS.forEach((unit, index) => {
    let valueInDrawer = cid[index][1];
    let amount = 0;
    while (changeDue >= unit.val && valueInDrawer > 0) {
      changeDue -= unit.val;
      valueInDrawer -= unit.val;
      amount += unit.val;

      // Round changeDue to avoid precision issues
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (amount > 0) {
      change.push([unit.name, amount]);
    }

    // If changeDue > 0 then we have insufficient funds to return the correct change
    if (changeDue > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    // Return the change object
    return { status: 'OPEN', change };
  });
  console.timeEnd('FUNCTION');
}

// price, cash, cid
checkCashRegister2(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

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
