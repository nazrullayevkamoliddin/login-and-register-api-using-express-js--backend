const express = require("express");
const router = express.Router();
const users = [];
const cors = require("cors");

router.use(express.json());

router.get("/all", (req, res) => {
  res.send(users);
});

router.post("/register", cors(), (req, res) => {
  // obyekting ichidan sugurib olish --> destructor
  const { email, parol, ism, familya } = req.body;
  if (!email || !parol) {
    return res.send({ 
      success: false,
      xabar: "Email yoki parol xato kitildi.❌"
    });
  }

  if(!testEmailAddress){
    return res.send({xabar: "Email notogri kiritilgan"})
  }

  const tekEmail = users.some((user) => {
    return user.email == email;
  });
  if (tekEmail) {
    return res.send({ xabar: "bu emaildan oldin register qilgansan ❌" });
  }

  const user = {
    id: users.length + 1,
    ism,
    familya,
    email,
    parol,
  };

  users.push(user);
  res.send({ xabar: `Foydalanuvchi created✅`, user });
});

router.post("/login", cors(), (req, res) => {
  const { email, parol } = req.body;
  if (!parol || !email) {
    res.send({ xabar: "Email yoki parol xato kitildi.❌" });
  }

  if(!testEmailAddress){
    return res.send({ xabar:"Email xato kiritildi"});
  }

  const foydaIndex = users.findIndex((user) => {
    return user.email == email;
  });
  if (foydaIndex < 0) {
    res.send({ xabar: "User qaydasan, User Topilmadi. ❌" });
  }

  const user = users[foydaIndex];
  if (user.parol != parol) {
    return res.send({ xabar: "Email yoki parolini boshqattan yozseng yoz❌❌" });
  }

  res.send({ xabar: "Barakalla saytga binnasa qilib login qilding", user });

});

function testEmailAddress(emailToTest) {
  // check for @
  let atSymbol = emailToTest.indexOf("@");
  let dot = emailToTest.indexOf(".");
  if (atSymbol < 1 || dot <= atSymbol + 2 || dot === emailToTest.length - 1) {
    return false;
  }

  return true;
}

module.exports = router;
