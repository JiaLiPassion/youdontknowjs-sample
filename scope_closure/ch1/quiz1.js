function sample1_LHSRHS() {
  var a;
  // Engine: Hey Scope, I've got a LHS reference for `a`, ever heard of it?
  // Scope: Yes, I have, compiler just declare a variable `a` just now, here you go.
  // Engine: Thanks, Scope, now time to assign 2 to a.
  a = 2;
}

function bar(a) {
  var b = a;
  return a + b;
}

function quiz1() {
  var c = bar(2);
}

