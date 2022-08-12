calculate = () => {
    const year = document.getElementById("year").value;
    const output = document.getElementById("output");
  if (year=='' || isNaN(year)) {
    output.innerText = "please fill the field correctly!";
  } else {
    // const date = new Date();
    // const y = date.getFullYear();
    // const age = (y-year) * 365;
    const age = year * 365;

    output.innerText = " hmm..!  You Are " + age + " " + "days old";

}
};
reset = () => {
  year.value = "";
  output.innerText = "";
};
