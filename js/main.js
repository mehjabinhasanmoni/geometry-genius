// Random Generate Background color
function randomBgColor(id, type) {
  if (type == "random") {
    const bgColor = [
      "#fdba74",
      "#bef264",
      "#6ee7b7",
      "#c4b5fd",
      "#f9a8d4",
      "#fecdd3",
      "#bae6fd",
      "#5eead4",
    ];
    const colorHexa = bgColor[Math.floor(Math.random() * bgColor.length)];
    document.getElementById(id).style.backgroundColor = colorHexa;
  } else {
    document.getElementById(id).style.backgroundColor = type;
  }
}

/* Input Validation
-Getting id prefix
-Getting First label in label1
-Getting Second label in label2
-Validating and showing alert for ivalid value
-Return true or false for further reuse
*/
function inputValidation(id, label1, label2) {
  const inputValueString1 = document.getElementById(
    `${id}-input-${label1}`
  ).value;
  const inputValueString2 = document.getElementById(
    `${id}-input-${label2}`
  ).value;
  // If both  are Empty
  if (!inputValueString1 && !inputValueString2) {
    alert(`Please enter a valid value for BOTH inputs ${label1} and ${label2}`);
    return false;
  } else if (!inputValueString1) {
    alert(`Please enter value for  ${label1}`);
    return false;
  } else if (!inputValueString2) {
    alert(`Please enter value for  ${label2}`);
    return false;
  } else {
    // If both not are Empty
    const inputValue1 = parseFloat(inputValueString1);
    const inputValue2 = parseFloat(inputValueString2);
    console.log("inside else", inputValue1, inputValue2);
    if (isNaN(inputValue1) && isNaN(inputValue2)) {
      alert(`${label1} and ${label2} must be NUMBER!!`);
      return false;
    } else if (isNaN(inputValue1)) {
      alert(`${label1}  must be a NUMBER!!`);
      return false;
    } else if (isNaN(inputValue2)) {
      alert(`${label2} must be a NUMBER!!`);
      return false;
    }
    // Negetive Value Check
    else if (inputValue1 <= 0 || inputValue2 <= 0) {
      alert(`${label1} and ${label2} must be a POSITIVE VALUE`);
      return false;
    }
    // Found Desired Value
    else {
      const domValue = `${label1} =${inputValueString1}cm ${label2}=${inputValueString2}cm`;
      document.getElementById(`${id}-given-value`).innerText = domValue;
      document.getElementById(`${id}-given-value-holder`).style.display =
        "block";
      document.getElementById(`${id}-input-holder`).style.display = "none";
      document.getElementById(`${id}-calculate-btn`).disabled = false;
      return true;
    }
  }
}

/*
-Edit Function For
-This Function will Display the input value holder
-Hide the Edit button
-Disable the Calculate button
*/
function editMode(id) {
  document.getElementById(`${id}-input-holder`).style.display = "block";
  document.getElementById(`${id}-given-value-holder`).style.display = "none";
  document.getElementById(`${id}-calculate-btn`).disabled = true;
}

/* 
-Multiply Function for 
-one Constant value and
-Two Input values from input field
-Id prefix for reuse
-Getting First label in label1
-Getting Second label in label2
*/
function multiplyValues(id,label1,label2,constValue) {
    if(inputValidation(id, label1, label2)){
        const inputValueString1 = document.getElementById(
            `${id}-input-${label1}`
          ).value;
          const inputValueString2 = document.getElementById(
            `${id}-input-${label2}`
          ).value;
        const result=(parseFloat(inputValueString1)*parseFloat(inputValueString2)*constValue).toFixed(2);
        console.log(label1,label2,constValue,result);
    }else{
        console.log("nothing");
    }
}
