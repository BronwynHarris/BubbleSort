// function bubbleSort(arr){
//   for(var i = 0; i < arr.length-1; i++){
//     if(arr[i]>arr[i+1]){

//     }
//   }

// }

function bubbleSort(arr) {
 for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i; j++){
        if(arr[j]>arr[j+1]){
          var temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;

      }
  }
}
return arr;
}

