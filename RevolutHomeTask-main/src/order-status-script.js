const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");
const failureInfo = urlParams.get("_rp_fr");
const cancelInfo = urlParams.get("_rp_dos");
console.log(state);

switch (state) {
  case "success":
    document.getElementById("order-status").innerHTML =
      "<b>Order placed Successfull</b>";
    document.getElementById("order-status").style.color = "green";
    break;
  case "failure":
    document.getElementById(
      "order-status"
    ).innerHTML = `<b>Order not placed - failure</b></br>
      <div id="failure-info">${failureInfo}</div>`;
    document.getElementById("order-status").style.color = "red";
    break;
  case "cancel":
    document.getElementById(
      "order-status"
    ).innerHTML = `<b>Order not placed - canceled</b></br>
    <div id="failure-info">${cancelInfo || ""}</div>`;
    document.getElementById("order-status").style.color = "orange";
    break;
  default:
    break;
}

// const getOrderStatus = async function () {
//   try {
//     const res = await fetch(`/order-detials?orderId=${orderId}`);
//     if (!res.ok) throw new Error("Failed to fetch checkout page");
//     const { state } = await res.json();
//     document.getElementById("order-status").innerText = `${state}`;
//     console.log(body);
//   } catch (error) {
//     console.error(error);
//   }
// };

// document.addEventListener("DOMContentLoaded", getOrderStatus());
