function theBeatlesPlay(musicians, instruments){
  var arr = [];
    var i;
    for (i=0; i< musicians.length; i++) {
      arr.push(`${musicians[i]} plays ${instruments[i]}`);
    } return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  var arr = [];
  for (i=0; i<facts.length; i++){
    arr.push(`${facts[i]}!!!`);
  }return arr;
}

function iLoveTheBeatles(number){
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    number ++;
  } while (number < 15)
  return arr;
}
