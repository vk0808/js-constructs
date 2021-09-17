const GOAL = 200;
const INITIAL_AMT = 100;
const BET_AMT = 1;
const BROKE = 0;
const WIN = 1;
const LOSS = 0;

let bal_Amt = INITIAL_AMT;
let win_Count = 0;
let no_Of_Bet = 0;

while (bal_Amt > BROKE && bal_Amt < GOAL) {
  bet = Math.floor(Math.random() * 10) % 2;

  if (bet == WIN) {
    bal_Amt += BET_AMT;
    win_Count++;
  } else {
    bal_Amt -= BET_AMT;
  }
  no_Of_Bet++;
}

console.log("Win count: " + win_Count);
console.log("No of bets placed: " + no_Of_Bet);