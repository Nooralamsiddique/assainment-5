function checkInput() {
    var inputField = document.getElementById('inputField');
    var submitButton = document.getElementById('submitButton');


    if (inputField.value === 'NEW15' || inputField.value === 'couple20') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function submitForm() {
    alert('Form submitted!');
}




function toggleBackgroundColor(button) {
    if (!button.style.backgroundColor || button.style.backgroundColor === 'white') {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'white';
    }
}


function scrollToFooter() {
    var footer = document.getElementById("seat-price");
    footer.scrollIntoView({ behavior: 'smooth' });
}

// const seatNumber =['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4',
// 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
// for(const seat of seatNumber)

// function getSait() {
// const seatString = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
// console.log(seatString[2]);
// const seat = seatString.split('');

// const seatNumber = Math.random() * 39;
// const index = Math.round(seatNumber);
// const set = seat[index]
// return set;


// }

// function selectSeat() {
//     console.log('paishe')
//     // const addColor = document.getElementsByClassName('add-btn');
//     // addColor.classList.add('bg-[#1dd100]')

// }
// function selectSeat() {
//     showColor('add-btn')
// }


// function showColor() {
//     const addColor = document.getElementById("green");
//     addColor.classList.add('bg-[#1dd100]')
//     const addColor2 = document.getElementById("green2");
//     addColor.classList.add('bg-[#1dd100]')
//     const addColor3 = document.getElementById("green3");
//     addColor.classList.add('bg-[#1dd100]')
//     // console.log(showColor)
//     // const numbers = ['l1', 'j25', 'k26']
//     // console.log(numbers[0])
// }

// ==========================================================================================




