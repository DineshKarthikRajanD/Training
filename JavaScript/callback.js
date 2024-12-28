databaseSharing = () => {
  console.log("data stored Successfully");
};

function submitForm(formMsg, dbs) {
  setTimeout(() => {
    dbs();
    console.log(formMsg);
  }, 10000);
}

submitForm("Form Submitted Successfully", databaseSharing);
