
const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
let totel = 40;
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        totel = totel - 1;
        if (count > 4) {
            alert('Enough')
            return;
        } else if (totel >= 40) {
            alert('All Seat Block')
        }


        const A1 = e.target.parentNode.childNodes[3].innerText;
        const A2 = e.target.parentNode.childNodes[5].innerText;
        const A3 = e.target.parentNode.childNodes[7].innerText;
        const A4 = e.target.parentNode.childNodes[9].innerText;
        const number = 'Economi';
        const price = 550;
        const selectContiner = document.getElementById('select-continer');
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = A1;
        const p2 = document.createElement("p");
        p2.innerText = 'Economi';
        const p3 = document.createElement("p");
        p3.innerText = price;
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        selectContiner.appendChild(div)

        totelCost("totel-cost", parseInt(price));
        grandTotel("grand-totel", parseInt(price))
        setInnerText('count-seat', count)
        setInnerText('totel-seat', totel)

    })
}

function totelCost(id, value) {
    const totelCost = document.getElementById(id).innerText;
    const convartTotel = parseInt(totelCost);
    const sum = convartTotel + parseInt(value);
    setInnerText(id, sum);

}
function grandTotel(id, value) {
    const grandTotelCost = document.getElementById(id).innerText;
    const convartGrandTotel = parseInt(grandTotelCost);
    const sum = convartGrandTotel + parseInt(value);
    setInnerText(id, sum);

}

// function grandTotel(category) {
//     const grandTotelCost = document.getElementById("grand-totel").innerText;
//     const convartGrandTotel = parseInt(grandTotelCost);

//     let discount = convartGrandTotel / 100 * 15;
//     console.log(convartGrandTotel)



//     // if (category == NEW15) {

//     // }


// }

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



