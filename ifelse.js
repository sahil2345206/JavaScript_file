age = 17;
hasvotercard = 'yes';

if(age>18 || hasvotercard == 'yes'){
    array1='you are alligible for vote'
}


else if (age>18 & hasvotercard == 'no'){
    array1='you are not alligible for vote. Please get your Voter ID'
}
else{
  array1='you ara not alligible for vote'
}


console.log(array1)
