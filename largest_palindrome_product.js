/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
function largestPal(){
  var numProduct=[];
  var palArray = [];

 

	function product (){
		for (var i=10; i<100; i++){
			for(j=10; j<100; j++){
				numProduct.push(i*j);
			}
		}
		

		for (var t=1; t<numProduct.length; t++) {
			var rev = numProduct[t].toString().split('').reverse().join('');
			var numRev = Number(rev);
			if (numProduct[t] === numRev) {
				palArray.push(numProduct[t]);
			}

			
		}
		return palArray[palArray.length-1];
	}

  return {
    
    product,
  };

}
var test = largestPal();
console.log(test.product());
