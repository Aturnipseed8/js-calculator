/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule () {
  var memory = 0;
  var total = 0;

  var calculator = { 
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory,
    //Vadidations: _Validations
  };
  
  return calculator;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(x) {
      total = x;
      if (typeof x == 'number') {
        return total; 
    } else {
      return 'You must use a number.';
    }

  } 
  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal () {
      return total;


   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    function _add(x) {
      total = total + x;

      if (typeof x == 'number') {
        return total; 
        } else {
      return 'You must use a number.';
      }
      return total;
    }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function _subtract(x) {
      total = total - x;
      if (typeof x == 'number') {
        return total; 
    } else {
      return 'You must use a number.';
    }
    }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function _multiply(x) {
      total = total * x;
      if (typeof x == 'number') {
        return total; 
    } else {
      return 'You must use a number.';
    }
    }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    function _divide(x) {
      total = total / x;
      if (typeof x == 'number') {
        return total; 
    } else {
      return 'You must use a number.';
    }
    }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function _recallMemory() {

      return memory;
    }

  /**
   * Stores the value of `total` to `memory`
   */
    function _saveMemory() {

      memory = total;
    }

  /**
   * Clear the value stored at `memory`
   */
    function _clearMemory() {
      memory = 0;
    }

  /**
   * Validation
   */

}