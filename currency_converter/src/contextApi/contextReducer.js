export default function reducer(state, action) {
  switch (action.type) {
    case "SET_SEND_CURRENCY": {
      return {
        ...state,
        selectedSendCurrency: action.payload.currency,
        rate: action.payload.rate,
      };
    }
    case "SET_SEND_AMOUNT":
      return {
        ...state,
        selectedSendAmount: action.payload,
      };
    case "SET_RECEIVE_CURRENCY": {
      return {
        ...state,
        selectedReceiveCurrency: action.payload.currency,
        rate: action.payload.rate,
      };
    }
    case "SET_RECEIVE_AMOUNT":
      return {
        ...state,
        selectedReceiveAmount: action.payload,
      };
    case "SWAP_CURRENCIES":
      return {
        ...state,
        selectedSendCurrency: state.selectedReceiveCurrency,
        selectedReceiveCurrency: state.selectedSendCurrency,
      };

    case "SET_RATE":
      return {
        ...state,
        rate: action.payload,
      };
    default:
      return state;
  }
}

function setSendCurrency(currency, rate) {
  return {
    type: "SET_SEND_CURRENCY",
    payload: { currency, rate },
  };
}

function setSendAmount(amount) {
  return {
    type: "SET_SEND_AMOUNT",
    payload: amount,
  };
}

function setReceiveCurrency(currency, rate) {
  return {
    type: "SET_RECEIVE_CURRENCY",
    payload: { currency, rate },
  };
}

function setReceiveAmount(amount) {
  return {
    type: "SET_RECEIVE_AMOUNT",
    payload: amount,
  };
}

function swapCurrencies() {
  return {
    type: "SWAP_CURRENCIES",
  };
}

function setRate(rate) {
  return {
    type: "SET_RATE",
    payload: rate,
  };
}

export {
  setSendCurrency,
  setSendAmount,
  setReceiveCurrency,
  setReceiveAmount,
  swapCurrencies,
  setRate,
};
