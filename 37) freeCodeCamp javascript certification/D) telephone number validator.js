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
  // let phoneNumberArray = str.split('');
  // 1) only symbols permitted: ( , ), - and no letters permitted

  if (!isValidFormat(str) || !validAmountSymbols(str)) {
    console.log("It's NOT a phone number ");
    console.log(validAmountSymbols(str));
    return false;
  }
  console.log("It's a phone number alright");
  return true;
}

const isValidFormat = (str) => /^[0-9\-\(\)\s]{10,16}$/.test(str);
const validAmountSymbols = (str) => /^(?=(?:[^-]*-){0,2}[^-]*$).*/.test(str);

telephoneCheck('555-555-5555'); // boolean
telephoneCheck('1 555-555-5555'); // true
telephoneCheck('1 (555) 555-5555'); // true
telephoneCheck('5555555555'); // true
telephoneCheck('555-555-5555'); // true
telephoneCheck('(555)555-5555'); // true
telephoneCheck('1(555)555-5555'); // true
// telephoneCheck('555-5555'); // false
// telephoneCheck('5555555'); // false
// telephoneCheck('1 555)555-5555'); // false
// telephoneCheck('1 555 555 5555'); // true
// telephoneCheck('1 456 789 4444'); // true
// telephoneCheck('123**&!!asdf#'); // false
// telephoneCheck('55555555'); // false
// telephoneCheck('(6054756961)'); // false
// telephoneCheck('2 (757) 622-7382'); // false
// telephoneCheck('0 (757) 622-7382'); // false
// telephoneCheck('-1 (757) 622-7382'); // false
// telephoneCheck('2 757 622-7382'); // false
// telephoneCheck('10 (757) 622-7382'); // false
// telephoneCheck('27576227382'); // false
// telephoneCheck('(275)76227382'); // false
// telephoneCheck('2(757)6227382'); // false
// telephoneCheck('2(757)622-7382'); // false
// telephoneCheck('555)-555-5555'); // false
// telephoneCheck('(555-555-5555'); // false
// telephoneCheck('(555)5(55?)-5555'); // false
// telephoneCheck('55 55-55-555-5'); // false
// telephoneCheck('11 555-555-5555'); // false
