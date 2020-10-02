// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var elements = [];
  var body = document.body;

  var searchNode = function (element) {

    if (element.classList && element.classList.contains(className)) {
      elements.push(element);
    }

    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        var childNode = element.childNodes[i];
        searchNode(childNode);
      }

    }
  };

  searchNode(body);

  return elements;
};
