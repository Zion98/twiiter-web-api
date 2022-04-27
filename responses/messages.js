const ResponseMsg = {
  ERROR: {
    INCOMPLETE_DATA: "Incomplete data",
    BAD_GATEWAY: "Bad Gateway",
    NO_CARD: "NO_CARD",
    CARD_EXISTS:"This Card aready exists",
    CARD_NOT_ADDED:"Card not added. Please try again",
    NO_CARD_DETAILS:"Card details not returned.",
    MISSING_FIELD: "Please fill all required fields",
    TRANSACTION_EXISTS: "This transaction already exists",
    BAD_TRANSACTION_AMOUNT: "Transaction amount must be a number",
    BAD_OPENING_BALANCE: "Opening balance must be a number",
    BAD_TRANSACTION_TYPE: "Transaction type does not exist",
    NO_TRANSACTION_REFERENCE: "No transaction with that Reference",
    NO_TRANSACTION_USER: "No transaction for this user",
    DUPLICATE_TRANSACTION_REF:"Duplicate transaction reference",
    MINIMUM_AMOUNT_REQUIRED:"Minimum amount for transaction is 1000 naira",
    FAILED_TRANSACTION:"Transaction not successful",
    WRONG_CURRENCY:"Unacceptable currency.",
    PAYMENT_FAILED:"Unable to process your payment at the moment.",
    FRAUD_TRANSACTION:"Fraudulent transaction."
  },

  SUCCESS: {
    TRANSACTION_VERIFIED: "Transaction Verified Succesfully",
    CARD_CHARGE: "Card charged succesfully",
    CARD_ADDED:"Card successfully added.",
    CARDS_FETCHED: "Cards fetched succesfully",
    TRANSACTION_SET: "Transaction set Successfully",
    TRANSACTION_GET: "Get all Transactions",
    TRANSACTION_BY_REFERENCE: "Transaction By Reference",
    TRANSACTION_BY_USER: "Transaction By User",
    TRANSACTION_UTILITIES: "Transaction Utilities",
    FILTERED_TRANSACTION: "Filterede Transaction",
  },

  TRANSACTION_TYPES: ["savings", "utilities", "wallet"],
  UTILITIES: [6, 7, 8, 9, 14],
  WALLET: [1, 2, 11, 12, 15, 16, 17],
  SAVINGS: [3, 4, 5, 13],
  FILTERS: ["from", "to", "type"],

  CONSTANTS: {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
};

module.exports = ResponseMsg;
