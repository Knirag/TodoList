function tellFortune(location, jobTitle) {
  const converttoF = (celsius) => celsius * 9/5 +32;
  const randomV =(x) => Math.floor(Math.random() *x)
  let children = randomV(15);

  const partnerName = ["John", "Mark", "Vannessa", "Thomas", "Peter"];
  const index = randomV(partnerName.length);
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      ", and married to " +
      partnerName[index] +
      " with " +
      children +
      " kids."
  );
}

//console.log(tellFortune(, "New York", "Software Engineer"));
tellFortune("New York", "Software Engineer");
tellFortune("London", "Marketing Manager");
tellFortune("Sydney", "Teacher");
