function aMethod(a, b, c) {
  let ret = 0;
  if (a && b) {
    ret = 1;
  } else if (c) {
    ret = 2;
  }
  return ret;
}

module.exports = aMethod;
