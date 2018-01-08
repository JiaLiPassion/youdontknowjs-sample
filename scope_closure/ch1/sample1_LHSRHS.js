function sample1_LHSRHS() {
  var a;
  // Engine: Hey Scope, I've got a LHS reference for `a`, ever heard of it?
  // Scope: Yes, I have, compiler just declare a variable `a` just now, here you go.
  // Engine: Thanks, Scope, now time to assign 2 to a.
  a = 2;
}

function foo(a) {
  // 1. Engine: Hey, Scope, sorry to bother you again. I need an RHS look-up for console. Ever heard of it?
  // 2. Scope: No problem, Engine, this is what I do all day. Yes, I've got console. He's built-in. Here ya go.
  // 3. Engine: Perfect. Looking up log(..). OK, great, it's a function.
  // 4. Engine: Yo, Scope. Can you help me out with an RHS reference to a. I think I remember it, but just want to double-check.
  // 5. Scope: You're right, Engine. Same guy, hasn't changed. Here ya go.
  // 6. Engine: Cool. Passing the value of a, which is 2, into log(..).
  console.log(a);
}

function sample2_LHSRHS() {
  // 1. Engine: Hey Scope, I have an RHS reference for foo. Ever heard of it?
  // 2. Scope: Why yes, I have. Compiler declared it just a second ago. He's a function. Here you go.
  // 3. Engine: Great, thanks! OK, I'm executing foo.
  // 4. Engine: Hey, Scope, I've got an LHS reference for a, ever heard of it?
  // 5. Scope: Why yes, I have. Compiler declared it as a formal parameter to foo just recently. Here you go.
  // 6. Engine: Helpful as always, Scope. Thanks again. Now, time to assign 2 to a.
  foo(2);
}

function bar(a) {
  var b = a;
  return a + b;
}

function quiz1() {
  var c = bar(2);
}

