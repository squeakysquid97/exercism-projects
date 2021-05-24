//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (str) => {
  let ensureNumbers = ('' + str).replace(/\D/g, '')
  let match = ensureNumbers.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  console.log(match)
  if (match) {
    let intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, match[2], match[3], match[4]].join('')
  }else
  
  return null;
};
