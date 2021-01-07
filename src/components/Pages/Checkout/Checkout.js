import React, { useState } from "react";
import axios from "axios";
import { StyledForm } from "./Checkout.style";


const Checkout = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = "https://api.paystack.co/transaction/initialize";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer sk_test_82b4a6dbe862136469a1b87a14494193e3ad5e93",
    };
    const data = {
      email: email,
      amount: amount,
    };
    setLoading({ loading: true });

    try {
      const response = await axios.post(url, data, {
        headers: headers,
      });
      const responseData = await response;
      window.location = responseData.data.data.authorization_url;
      setLoading({ loading: false });
    } catch (error) {
      console.log(error);
      if (error.response) {
        setErrorMessage(error.response.data.error);
        setLoading(false);
      } else {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <div className="fill-form">
          <h2>Payment Details</h2>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
              required
            />
          </p>
          <p>
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              value={amount}
              placeholder="Enter the amount to pay"
              onChange={handleAmountChange}
              required
            />
          </p>
          <p>
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
            <button type="submit" disabled={loading ? 1 : 0}>
              {loading ? "Please Wait !!!" : "Submit"}
            </button>
          </p>
        </div>
      </StyledForm>
    </>
  );
};

export default Checkout;
