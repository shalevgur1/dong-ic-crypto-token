import React, {useEffect, useState } from "react";
import { token } from "../../../declarations/token";
import { Principal } from '@dfinity/principal';

function Balance() {
  
  const [inputValue, setInputValue] = useState("");
  const [balanceResault, setBalanceResult] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);

  useEffect(async () => {
    const result = await token.getSymbol();
    setTokenSymbol(result.toLocaleString());
  }, []);

  async function handleClick() {
    console.log(tokenSymbol);
    const principal = Principal.fromText(inputValue);
    const result = await token.balanceOf(principal);
    setBalanceResult(result.toLocaleString() + " " + tokenSymbol);
    setHidden(false);
  }

  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResault}.</p>
    </div>
  );
}

export default Balance;
