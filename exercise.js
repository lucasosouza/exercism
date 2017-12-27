array = [5,3,1,9,2]

function bubbleSort(array){
	var arrayLength = array.length, i = 0;
	for (i;i<arrayLength;i++) {
		var n = 0;
		for (n;n<arrayLength; n++) {
			if (array[n+1] < array[n]) {
				var switchedNumber = array[n];
				array[n] = array[n+1];
				array[n+1] = switchedNumber;
			}			
		}
	}
	return array;
}
