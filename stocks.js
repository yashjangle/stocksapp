const initialInput = document.querySelector("#initial-input");
const qtyInput = document.querySelector("#qty-input");
const currInput = document.querySelector("#curr-input");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");
const body = document.querySelector("body");

function calcProfitAndLoss(initialPrice, qtyOfStock, currPrice) {
  if (initialPrice > currPrice) {
    const loss = (initialPrice - currPrice) * qtyOfStock;
    const lossPercent = ((initialPrice - currPrice) / initialPrice) * 100;
    const lossPercentage = lossPercent.toFixed(2);
    body.style.backgroundColor = "#991b1b";
    let message = `Hey you have made a loss of Rs ${loss} and your loss percentage is ${lossPercentage}%.`;

    return message;
  } else if (currPrice > initialPrice) {
    const profit = (currPrice - initialPrice) * qtyOfStock;
    const proftPercent = ((currPrice - initialPrice) / initialPrice) * 100;
    const proftPercentage = proftPercent.toFixed(2);
    body.style.backgroundColor = "#065f46";
    let message = `Yay! you have made a profit of Rs ${profit} and your profit percentage is ${proftPercentage}%.`;

    return message;
  } else {
    let message = `You have neither made a profit nor a loss 😐.`;

    return message;
  }
}

function clickHandler() {
  const initialPrice = Number(initialInput.value);
  const qtyOfStock = Number(qtyInput.value);
  const currPrice = Number(currInput.value);

  if (isNaN(initialPrice) || isNaN(qtyOfStock) || isNaN(currPrice)) {
    output.style.color = "white";
    body.style.backgroundColor = "hsla(12, 6%, 15%, 0.758)";
    output.innerText = `*Please enter proper numbers!`;
  } else {
    if (initialPrice > 0 && qtyOfStock > 0 && currPrice > 0) {
      const result = calcProfitAndLoss(initialPrice, qtyOfStock, currPrice);

      output.innerText = result;
    } else {
      output.style.color = "white";
      body.style.backgroundColor = "hsla(12, 6%, 15%, 0.758)";
      output.innerText = `*Please enter all fields!`;
    }
  }
}
submitButton.addEventListener("click", clickHandler);