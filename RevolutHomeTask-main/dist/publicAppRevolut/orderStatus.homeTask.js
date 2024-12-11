/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/order-status-script.js ***!
  \************************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJTdGF0dXMuaG9tZVRhc2suanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsUUFBUTtBQUNqRTtBQUNBLGVBQWUsUUFBUTtBQUN2Qiw4REFBOEQsTUFBTTtBQUNwRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vc3JjL29yZGVyLXN0YXR1cy1zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuY29uc3Qgc3RhdGUgPSB1cmxQYXJhbXMuZ2V0KFwic3RhdGVcIik7XHJcbmNvbnN0IGZhaWx1cmVJbmZvID0gdXJsUGFyYW1zLmdldChcIl9ycF9mclwiKTtcclxuY29uc3QgY2FuY2VsSW5mbyA9IHVybFBhcmFtcy5nZXQoXCJfcnBfZG9zXCIpO1xyXG5jb25zb2xlLmxvZyhzdGF0ZSk7XHJcblxyXG5zd2l0Y2ggKHN0YXRlKSB7XHJcbiAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXItc3RhdHVzXCIpLmlubmVySFRNTCA9XHJcbiAgICAgIFwiPGI+T3JkZXIgcGxhY2VkIFN1Y2Nlc3NmdWxsPC9iPlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlci1zdGF0dXNcIikuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICBicmVhaztcclxuICBjYXNlIFwiZmFpbHVyZVwiOlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgIFwib3JkZXItc3RhdHVzXCJcclxuICAgICkuaW5uZXJIVE1MID0gYDxiPk9yZGVyIG5vdCBwbGFjZWQgLSBmYWlsdXJlPC9iPjwvYnI+XHJcbiAgICAgIDxkaXYgaWQ9XCJmYWlsdXJlLWluZm9cIj4ke2ZhaWx1cmVJbmZvfTwvZGl2PmA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXN0YXR1c1wiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICBicmVhaztcclxuICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgXCJvcmRlci1zdGF0dXNcIlxyXG4gICAgKS5pbm5lckhUTUwgPSBgPGI+T3JkZXIgbm90IHBsYWNlZCAtIGNhbmNlbGVkPC9iPjwvYnI+XHJcbiAgICA8ZGl2IGlkPVwiZmFpbHVyZS1pbmZvXCI+JHtjYW5jZWxJbmZvIHx8IFwiXCJ9PC9kaXY+YDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXItc3RhdHVzXCIpLnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcclxuICAgIGJyZWFrO1xyXG4gIGRlZmF1bHQ6XHJcbiAgICBicmVhaztcclxufVxyXG5cclxuLy8gY29uc3QgZ2V0T3JkZXJTdGF0dXMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvb3JkZXItZGV0aWFscz9vcmRlcklkPSR7b3JkZXJJZH1gKTtcclxuLy8gICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggY2hlY2tvdXQgcGFnZVwiKTtcclxuLy8gICAgIGNvbnN0IHsgc3RhdGUgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXN0YXR1c1wiKS5pbm5lclRleHQgPSBgJHtzdGF0ZX1gO1xyXG4vLyAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGdldE9yZGVyU3RhdHVzKCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=