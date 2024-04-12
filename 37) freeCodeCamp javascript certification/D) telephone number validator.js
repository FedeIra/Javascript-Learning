/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1 (555) 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required.
If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

/*
Conditions to be a valid phone number:
1) only symbols permitted: ( , ), - and no letters permitted
2) ming length: 10 and max length: 16
3) if length > 14 then first number must be 1 and must be separated from any other number
4) there can be no more than 1 ( or ) and no more than two -
5) if ( or ) then opposite ) or ( must exist

*/
function telephoneCheck(str) {
  console.time('telephoneCheck');
  if (!isValidFormat(str)) {
    console.log("It's NOT a phone number");
    return false;
  }

  if (!validSymbols(str)) {
    console.log("It's NOT a phone number");
    return false;
  }

  console.log("It's a phone number alright");
  return true;
}

const isValidFormat = (str) => /^[0-9\-\(\)\s]{10,16}$/.test(str);

const validSymbols = (str) => {
  let symbolsConditions = {
    parenthesis: [],
    middleGuin: [],
    numbers: [],
  };

  let phoneNumberArray = str.split('');

  phoneNumberArray.map((key, index) => {
    key === ')' && index === phoneNumberArray.length - 1
      ? false
      : key === ')' || key === '('
      ? symbolsConditions.parenthesis.push(key)
      : key === '-'
      ? symbolsConditions.middleGuin.push(key)
      : key !== NaN && key !== ' '
      ? symbolsConditions.numbers.push(key)
      : null;
  });

  if (
    symbolsConditions.middleGuin.length > 2 ||
    symbolsConditions.parenthesis.length % 2 !== 0
  ) {
    return false;
  }

  if (
    symbolsConditions.numbers.length > 10 &&
    symbolsConditions.numbers[0] !== '1'
  ) {
    return false;
  }
  if (symbolsConditions.numbers.length > 11) {
    return false;
  }
  return true;
};

// optimized version:
function telephoneCheck2(str) {
  // Consolidated and optimized regex pattern checks all conditions at once
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;

  if (phoneRegex.test(str)) {
    console.log("It's a valid phone number.");
    return true;
  } else {
    console.log("It's NOT a valid phone number.");
    return false;
  }
}

// telephoneCheck('555-555-5555'); // 1) true
// telephoneCheck('1 555-555-5555'); // 2) true
// telephoneCheck('1 (555) 555-5555'); // 3) true
// telephoneCheck('5555555555'); // 4) true
// telephoneCheck('555-555-5555'); // 5) true
// telephoneCheck('(555)555-5555'); // 6) true
// telephoneCheck('1(555)555-5555'); // 7) true
// telephoneCheck('555-5555'); // 8) false
// telephoneCheck('5555555'); // 9) false
// telephoneCheck('1 555)555-5555'); // 10) false
// telephoneCheck('1 555 555 5555'); // 11) true
// telephoneCheck('1 456 789 4444'); // 12) true
// telephoneCheck('123**&!!asdf#'); // 13) false
// telephoneCheck('55555555'); // 14) false
// telephoneCheck('(6054756961)'); // 15) false
// telephoneCheck('2 (757) 622-7382'); // 16) false
// telephoneCheck('0 (757) 622-7382'); // 17) false
// telephoneCheck('-1 (757) 622-7382'); // 18) false
// telephoneCheck('2 757 622-7382'); // 19) false
// telephoneCheck('10 (757) 622-7382'); // 20) false
// telephoneCheck('27576227382'); // 21) false
// telephoneCheck('(275)76227382'); // 22) false
// telephoneCheck('2(757)6227382'); // 23) false
// telephoneCheck('2(757)622-7382'); // 24) false
// telephoneCheck('555)-555-5555'); // 25) false
// telephoneCheck('(555-555-5555'); // 26) false
// telephoneCheck('(555)5(55?)-5555'); // 26) false
// telephoneCheck('55 55-55-555-5'); // 27) false
// telephoneCheck('11 555-555-5555'); // 28) false
