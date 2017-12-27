var minispec = function(test_suite) {

	var contextHash = {};

	describe = function describe(context, cb) {
	  contextHash['describe'] = context; 
	  cb(); 
	}

	it = function it(context, cb) {
	  console.log(contextHash['describe'] + ' ' + context); 
	  cb(); 
	}

	xit = function xit(context, cb) { 
	  console.log(contextHash['describe'] + ' ' + context); 
	  cb(); 
	}

	expect = function expect(result) {
	  return new Expectation(result);
	}

	Expectation = function Expectation(result) {
	  this.result = result;
	  this.toEqual = function(compare){
	    if (JSON.stringify(result) === JSON.stringify(compare)) console.log('Passed')
	    else {
	    	console.log('Failed')
	    	console.log('EXPECTED:')
	    	console.log(compare)
	    	console.log('GOT:')
	    	console.log(this.result)
	    }
	    console.log("*************************************************************************************")
	  };
	  this.toThrow = function(error) {
	  	var failed = true;
	  	try {
	  		this.result();
	  	} catch(err) {
  			failed = false;
	  		if (err.message === error.message) {
	  			console.log('Passed')
	  		} else {
		    	console.log('Failed')
		    	console.log('Expected to throw error:')
		    	console.log(error.message)
		    	console.log('Got:')	  			
		    	console.log(err.message)
	  		} 
	  	} finally {
		  	if (failed) {
		    	console.log('Failed')
		    	console.log('Expected to throw error:')
		    	console.log(error.message)
		    	console.log('Got nothing')
		  	}
	  	}
	  }
	} 

}

module.exports = minispec;