const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const questions = [
  {
    question: "What is the oldest stock exchange in the world?",
    answers: [
      { text: "New York Stock Exchange", isCorrect: false },
      { text: "London Stock Exchange", isCorrect: false },
      { text: "Tokyo Stock Exchange", isCorrect: false },
      { text: "Amsterdam Stock Exchange", isCorrect: true }
    ]
  },
  {
    question: "What does the acronym 'NASDAQ' stand for?",
    answers: [
      { text: "National Association of Stock Dealers Automated Quotations", isCorrect: false },
      { text: "National Association of Securities Dealers Automated Quotations", isCorrect: true },
      { text: "National Automated Stock Dealers Quotation", isCorrect: false },
      { text: "National Association of Securities Dealers Quotation", isCorrect: false }
    ]
  },
  {
    question: "Who is known as the 'Oracle of Omaha'?",
    answers: [
      { text: "Bill Gates", isCorrect: false },
      { text: "Jeff Bezos", isCorrect: false },
      { text: "Warren Buffett", isCorrect: true },
      { text: "Elon Musk", isCorrect: false }
    ]
  },
  {
    question: "What is a 'bull market'?",
    answers: [
      { text: "A market in which prices are falling", isCorrect: false },
      { text: "A market in which prices are rising", isCorrect: true },
      { text: "A market with high volatility", isCorrect: false },
      { text: "A market with low trading volume", isCorrect: false }
    ]
  },
  {
    question: "What is the largest stock exchange in the world by market capitalization?",
    answers: [
      { text: "London Stock Exchange", isCorrect: false },
      { text: "Tokyo Stock Exchange", isCorrect: false },
      { text: "Shanghai Stock Exchange", isCorrect: false },
      { text: "New York Stock Exchange", isCorrect: true }
    ]
  },
  {
    question: "What is a 'bear market'?",
    answers: [
      { text: "A market in which prices are falling", isCorrect: true },
      { text: "A market in which prices are rising", isCorrect: false },
      { text: "A market with high volatility", isCorrect: false },
      { text: "A market with low trading volume", isCorrect: false }
    ]
  },
  {
    question: "Which company was the first to reach a market capitalization of $1 trillion?",
    answers: [
      { text: "Microsoft", isCorrect: false },
      { text: "Apple Inc.", isCorrect: true },
      { text: "Amazon", isCorrect: false },
      { text: "Google", isCorrect: false }
    ]
  },
  {
    question: "What is an IPO?",
    answers: [
      { text: "Initial Public Offering", isCorrect: true },
      { text: "International Payment Order", isCorrect: false },
      { text: "Investment Profit Option", isCorrect: false },
      { text: "Internal Purchase Order", isCorrect: false }
    ]
  },
  {
    question: "What does the term 'blue-chip stock' refer to?",
    answers: [
      { text: "Stocks with high dividend yields", isCorrect: false },
      { text: "Stocks of new and emerging companies", isCorrect: false },
      { text: "Stocks of large, well-established companies", isCorrect: true },
      { text: "Stocks traded on the NYSE", isCorrect: false }
    ]
  },
  {
    question: "What is the Dow Jones Industrial Average?",
    answers: [
      { text: "An index of 500 large U.S. companies", isCorrect: false },
      { text: "An index of technology companies", isCorrect: false },
      { text: "An index that represents 30 large U.S. companies", isCorrect: true },
      { text: "An index of small-cap stocks", isCorrect: false }
    ]
  },
  {
    question: "What does 'S&P 500' stand for?",
    answers: [
      { text: "Standard & Poor's 500", isCorrect: true },
      { text: "Stock & Profit 500", isCorrect: false },
      { text: "Securities & Portfolio 500", isCorrect: false },
      { text: "Share & Performance 500", isCorrect: false }
    ]
  },
  {
    question: "What is a 'dividend'?",
    answers: [
      { text: "A portion of a company's earnings distributed to shareholders", isCorrect: true },
      { text: "The interest paid on bonds", isCorrect: false },
      { text: "The profit made from selling stocks", isCorrect: false },
      { text: "The fee charged by stockbrokers", isCorrect: false }
    ]
  },
  {
    question: "What is the 'P/E ratio'?",
    answers: [
      { text: "Price-to-Earnings ratio", isCorrect: true },
      { text: "Profit-to-Expense ratio", isCorrect: false },
      { text: "Price-to-Equity ratio", isCorrect: false },
      { text: "Performance-to-Earnings ratio", isCorrect: false }
    ]
  },
  {
    question: "Who regulates the stock market in the United States?",
    answers: [
      { text: "The Federal Reserve", isCorrect: false },
      { text: "The Treasury Department", isCorrect: false },
      { text: "The Securities and Exchange Commission", isCorrect: true },
      { text: "The Financial Industry Regulatory Authority", isCorrect: false }
    ]
  },
  {
    question: "What is a 'stock split'?",
    answers: [
      { text: "A decrease in the number of shares without changing equity", isCorrect: false },
      { text: "An increase in the number of shares without changing equity", isCorrect: true },
      { text: "A division of a company's stock into different classes", isCorrect: false },
      { text: "A distribution of additional shares to shareholders", isCorrect: false }
    ]
  },
  {
    question: "What is the difference between a 'limit order' and a 'market order'?",
    answers: [
      { text: "A limit order executes at a specific price; a market order executes at the current market price", isCorrect: true },
      { text: "A limit order executes immediately; a market order executes at a specific price", isCorrect: false },
      { text: "A limit order is used for buying; a market order is used for selling", isCorrect: false },
      { text: "There is no difference", isCorrect: false }
    ]
  },
  {
    question: "What is the primary purpose of the stock market?",
    answers: [
      { text: "To provide companies with access to capital and give investors ownership in companies", isCorrect: true },
      { text: "To regulate financial transactions", isCorrect: false },
      { text: "To set interest rates", isCorrect: false },
      { text: "To provide a venue for currency exchange", isCorrect: false }
    ]
  },
  {
    question: "What is 'market capitalization'?",
    answers: [
      { text: "The total value of a company's outstanding shares", isCorrect: true },
      { text: "The total profit of a company", isCorrect: false },
      { text: "The amount of money a company has in its reserve", isCorrect: false },
      { text: "The total amount of shares a company can issue", isCorrect: false }
    ]
  },
  {
    question: "What is a 'mutual fund'?",
    answers: [
      { text: "An investment vehicle that pools money to purchase securities", isCorrect: true },
      { text: "A type of bank account", isCorrect: false },
      { text: "A retirement savings plan", isCorrect: false },
      { text: "A government bond", isCorrect: false }
    ]
  },
  {
    question: "What is 'short selling'?",
    answers: [
      { text: "Selling securities not currently owned with the intention of buying them back at a lower price", isCorrect: true },
      { text: "Buying and holding securities for a short period", isCorrect: false },
      { text: "Selling securities for a short-term gain", isCorrect: false },
      { text: "Selling securities to cover long-term positions", isCorrect: false }
    ]
  },
  {
    question: "What is a 'hedge fund'?",
    answers: [
      { text: "A pooled investment fund that employs various strategies to earn active return", isCorrect: true },
      { text: "A type of insurance policy", isCorrect: false },
      { text: "A government fund for economic stability", isCorrect: false },
      { text: "A savings account with high interest", isCorrect: false }
    ]
  },
  {
    question: "What does 'liquidity' mean in financial markets?",
    answers: [
      { text: "The ease with which an asset can be converted into cash", isCorrect: true },
      { text: "The amount of debt a company has", isCorrect: false },
      { text: "The stability of a company's stock price", isCorrect: false },
      { text: "The profit margin of a company", isCorrect: false }
    ]
  },
  {
    question: "What is an 'ETF'?",
    answers: [
      { text: "Exchange-Traded Fund", isCorrect: true },
      { text: "Equity Trading Facility", isCorrect: false },
      { text: "Electronic Transfer Fund", isCorrect: false },
      { text: "Economic Trade Framework", isCorrect: false }
    ]
  },
  {
    question: "What is 'insider trading'?",
    answers: [
      { text: "The illegal practice of trading based on confidential information", isCorrect: true },
      { text: "The practice of buying stocks within a company", isCorrect: false },
      { text: "The trading of stocks between family members", isCorrect: false },
      { text: "The legal practice of trading stocks on insider knowledge", isCorrect: false }
    ]
  },
  {
    question: "What is the 'FTSE 100'?",
    answers: [
      { text: "An index of the 100 companies on the London Stock Exchange with the highest market capitalization", isCorrect: true },
      { text: "An index of the 100 fastest growing companies in the UK", isCorrect: false },
      { text: "An index of the 100 largest companies in Europe", isCorrect: false },
      { text: "An index of 100 financial technology companies", isCorrect: false }
    ]
  }
];

const populateFirestore = async () => {
  for (const question of questions) {
    await db.collection('triviaQuestions').add(question);
  }
  console.log('Firestore has been populated with trivia questions.');
};

populateFirestore()
  .catch(error => {
    console.error("Error populating Firestore: ", error);
  });