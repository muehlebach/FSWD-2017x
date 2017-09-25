var myBind = function(func, obj) {
  return function() {
    func.call(obj);
  }
}
