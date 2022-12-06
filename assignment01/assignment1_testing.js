function fixPostalCode(postalCode) {

  try {
  postalCode = postalCode.trim();
  postalCode = postalCode.toUpperCase();

  if (postalCode.match(/^[D|F|I|O|Q|W|U|Z|\d]/)) {
    throw 'Invalid';
  }
  if (postalCode.match(/.*[D|F|I|O|Q|U].*/)) {
    throw 'Invalid';
  }
  if (!postalCode.charAt(3).match(/\s|\w/)) {
    throw 'Error';
  } 
  if (postalCode.length > 7 || postalCode.length < 6) {
    throw 'Error';
  }
  if (postalCode.length === 7) {
    if (!postalCode.charAt(4).match(/\d/) || !postalCode.charAt(6).match(/\d/)) {
      throw 'Error';
    }
  }
  if (postalCode.length === 6) {
    if (postalCode.charAt(3) !== ' ') {
      let pc1 = postalCode.slice(0, 3);
      let pc2 = postalCode.slice(3);
      postalCode = pc1 + ' ' + pc2;
    }
    if (postalCode.charAt(4).match(/\D/) || postalCode.charAt(6).match(/\D/)) {
      throw 'Error';
    }
  }
  
} catch (error) {
  throw 'Error';
}

  return postalCode;
}

  
  function toProvince(postalCode, useShortForm) {
    let returnVal;
    //let newCode = fixPostalCode(postalCode);
    try {
       let newCode = fixPostalCode(postalCode);

  
      if (newCode.charAt(0) === "K" || newCode.charAt(0) === "L" || newCode.charAt(0) === "M"
        || newCode.charAt(0) === "N" || newCode.charAt(0) === "P") {
        if (useShortForm) {
          returnVal = "ON";
        }
        else {
          returnVal = "Ontario";
        }
     }
     else if (newCode.charAt(0) === "G" || newCode.charAt(0) === "H" ||
             newCode.charAt(0) === "J") {
            if (useShortForm) {
            returnVal = "QC";
            }
            else {
            returnVal = "Quebec";
            }
      }
      switch (newCode.charAt(0)) {
        case "B":
          if (useShortForm) {
            returnVal = "NS";
          }
          else {
            returnVal = "Nova Scotia";
          }
          break;
        case "E":
          if (useShortForm) {
            returnVal = "NB";
          }
          else {
            returnVal = "New Brunswick";
          }
          break;
  
        case "R":
          if (useShortForm) {
            returnVal = "MB";
          }
          else {
            returnVal = "Manitoba";
          }
          break;
  
        case "V":
          if (useShortForm) {
            returnVal = "BC";
          }
          else {
            returnVal = "British Columbia";
          }
          break;
  
        case "C":
          if (useShortForm) {
            returnVal = "PE";
          }
          else {
            returnVal = "Prince Edward Island";
          }
          break;
  
        case "S":
          if (useShortForm) {
            returnVal = "SK";
          }
          else {
            returnVal = "Saskatchewan";
          }
          break;
  
        case "T":
          if (useShortForm) {
            returnVal = "AB";
          }
          else {
            returnVal = "Alberta";
          }
          break;
  
          case "A":
            if (useShortForm) {
              returnVal = "NL";
            }
            else {
              returnVal = "Newfoundland and Labrador";
            }
            break;
  
          case "X":
          if (useShortForm) {
            returnVal = "NT";
          }
          else {
            returnVal = "Northwest Territories and Nunavut";
          }
          break;
  
          case "Y":
            if (useShortForm) {
              returnVal = "YT";
            }
            else {
              returnVal = "Yukon";
            }
            break;
      }
    }
    catch (error) {
      returnVal = null;
    }
  
    return returnVal;
  }
  
  function countForProvince(provinceCode, ...postalCodes) {
    let number = 0;
    if (postalCodes.length === 0) {
      throw 'Error';
    }
    for (let i = 0; i < postalCodes.length; i++) {
        if (!postalCodes[i].match(/[\s|A-Z]+/g)) {
          throw 'Error';
        }
    }
  
      for (let i = 0; i < postalCodes.length; i++) {
        try {
        if (toProvince(postalCodes[i], true) === provinceCode) {
          number++;
        } else if (toProvince(postalCodes[i]) === null) {
          throw 'Error';
        }
        // else if (postalCodes[i] === null) {
        //   throw "Error";
        // }
      }
     catch (error) {
      number = null;
    }
  }
    return number;
  }

  countForProvince('ON', 'K6A 1A5', 'L1A 5N3', 'M5W 1P5', 'N0B 1K0', 'P3A 8M6');