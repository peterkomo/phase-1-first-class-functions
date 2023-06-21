function receivesAFunction(callback) {
    
    callback();

  }
  
  function returnsANamedFunction() {
    
    function namedFunction() {
      console.log("I AM IT");
    }
  
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    
    return function() {
      console.log("Anonymous function is called!");
    };
  }
    
    

