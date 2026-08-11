const inp = document.getElementById("ip");
const count = document.getElementById("count");
const boxes = document.getElementById("boxes");

let ct = 0;

function Add() {
    const studentName = inp.value.trim();

    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }
    ct++;
    count.textContent = ct;
    const card = document.createElement("div");
    card.className = "card";

    const st = document.createElement("div");
    st.className = "st";

    const ser = document.createElement("h5");
    ser.className = "ser";
    ser.textContent = ct;

    const name = document.createElement("h5");
    name.className = "name";
    name.textContent = studentName;

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "Del";

    del.onclick = function () {
        card.remove();
        ct--;
        count.textContent = ct;
        const serials = document.querySelectorAll(".ser");
        serials.forEach((item, index) => {
            item.textContent = index + 1;
        });
    };

    st.appendChild(ser);
    st.appendChild(name);

    card.appendChild(st);
    card.appendChild(del);

    boxes.appendChild(card);

    inp.value = "";
}

inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        Add();
    }
});