const users = [
  {
    id: 1,
    email: "kamol",
  },
  {
    id: 1,
    email: "kamol1",
  },
];

// console.log(users.filter(user => {return user.email == 'kamol'}));

 
const validEmail = (email) => {

  if(email.indexOf("@") == -1){
    console.log(' monovi @ belgini qoy ❌')
    return false
  }
 if(email.indexOf(".") == -1){
    console.log('monovi . belgini qoy ❌')
    return false
 }

 if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1){
    console.log('Barakalla uddalading ✅')
    return true
 }


}

// console.log(validEmail('kamoliddin@.r'))



function testEmailAddress(emailToTest) {
  // check for @
  var atSymbol = emailToTest.indexOf("@");
  if(atSymbol < 1) return false;

  var dot = emailToTest.indexOf(".");
  if(dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === emailToTest.length - 1) return false;

  return true;
}

console.log(testEmailAddress('kamoliddin@gm.co'))
