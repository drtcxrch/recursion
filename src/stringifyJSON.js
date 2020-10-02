// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var strungArr = '[';

    for (var i = 0; i < obj.length; i++) {
      if (i !== obj.length - 1) {
        strungArr += stringifyJSON(obj[i]) + ',';
      } else {
        strungArr += stringifyJSON(obj[i]);
      }
    }

    return strungArr + ']';

  } else {

    var strungObj = '{';

    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        strungObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }

    if (strungObj.length > 2) {
      return strungObj.slice(0, strungObj.length - 1) + '}';
    } else {
      return strungObj + '}';
    }
  }
};
