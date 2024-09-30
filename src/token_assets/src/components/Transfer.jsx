import React, {useState} from "react";
import { token } from "../../../declarations/token";
import { Principal } from '@dfinity/principal';

function Transfer() {
  
  const [transferTo, setTransferTo] = useState(""); 
  const [transferAmount, setTransferAmount] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [isHidden, setHidden] = useState(true);

  async function handleClick() {
    if (!transferTo || !transferAmount) return;
    setHidden(true);
    setDisabled(true);
    const recipient = Principal.fromText(transferTo);
    const amount = Number(transferAmount)
    const result = await token.transfer(recipient, amount);
    setFeedback(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button 
          id="btn-transfer" 
          onClick={handleClick}
          disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden} style={{ textAlign: 'center' }}>
          {feedback}
        </p>
      </div>
    </div>
  );
}

export default Transfer;
