import React from 'react';

const allrules = {
  "FAST PLAY": `'Fast Play Progressive is a series of games that offers quick play play styles and are printed on demand from the Lottery terminal. Every Fast Play Progressive game contributes to ONE Progressive Jackpot. The Fast Play Progressive price point you play determines the portion of the jackpot you could win:

$10 Fast Play Progressive tickets win 100% of the Jackpot.
$5 Fast Play Progressive tickets win 50% of the Jackpot.
$3 Fast Play Progressive tickets win 30% of the Jackpot.
$2 Fast Play Progressive tickets win 20% of the Jackpot.
$1 Fast Play Progressive tickets win 10% of the Jackpot.

To purchase a Fast Play Progressive ticket at your New Jersey Lottery Retailer, just ask for Fast Play Progressive and name your game! Fast Play Progressive can also be purchased from the self-service Lottery machine using Fast Codes. Just insert money and scan the Fast Code to print the ticket. Fast Codes are available on the Active Games page and NJ Lottery mobile app.

Fast Play Progressive games are offered at various prices and play styles. Visit the Fast Play Progressive Active games page for the most current list of games on sale.

Collect prizes instantly up to $599 at any New Jersey Lottery Retailer. Submit a claim form for prizes over $599.

Questions? View our Fast Play Progressive FAQs. For more information see the Fast Play Game Rules.

As with all Lottery tickets, care should be taken not to damage the ticket's barcode. An unreadable barcode could delay payout of a winning ticket if it cannot be scanned.'`,
  "5 Card Cash": `'5 Card Cash gives you two chances to win with Win Now and Win Tonight!

  5 Card Cash drawing are held nightly at approximately 10:57 pm.

  Each Hand is quick pick only, costs $2.00 to play, and includes both ways to win! Be sure to keep your ticket for the nightly drawing.'`,
  "CASH4LIFE": `'Pick five(5) numbers between 1-60 & one(1) Cash Ball number between 1-4.

  CASH4LIFE drawings are held every night at approximately 9:00 pm.

  Purchase your CASH4LIFE tickets prior to 8:46 pm for the nightly drawing.

  Add DOUBLER to double your non-"for Life" prizes!'`,
  "Mega Millions": `'Pick five(5) numbers between 1-70 & one(1) Mega Ball number between 1-25.

  Mega Millions drawings are held every Tuesday & Friday at approximately 11:00 pm.

  Purchase your Mega MIllions tickets prior ot 10:45 pm on Tuesday & Friday for the drawing.

  Try the Just the Jackpot wager to play for only the jackpot!'`,
  "Powerball": `'Pick five(5) numbers between 1-69 and one(1) Powerball number between 1-26.

  Powerball drawings are held every Wednesday & Saturday at approximately 10:59 pm.

  Purchase your Powerball tickets prior to 9:59 pm on Wednesday & Saturday for the drawing.

  Add Power Play® to increase your non-jackpot prizes.'`,
  "CASH POP": `'Pick your own number(s) 1-15 or choose "Cover All."

  "Cover All" selects all 15 numbers and guarantees a prize.

  Remember, you can always ask your retailer for a Quick Pick.

  POP TIP: Play 5 numbers for a 1 in 3 overall chance to win.

  Select a wager amount of $1, $2, $5, or $10 per number.
  Each one number will cost the amount of your wager ($1, $2, $5, $10).
  Wager $2, $5, $10 for larger prizes.

  Select how many consecutive draws you want to play.

  4Give your play slip to your retailer.'`,
  "Quick Draw": `'Choose how many numbers (spots) you want to play per game.


  Pick up to ten numbers from the field of 1 through 80. Make sure you pick the same amount of numbers you chose in Section 1.

  If you’d rather have the Lottery computer randomly select your numbers for you, ask your Retailer for a “Quick Pick”. Or if you’re using a play slip, mark the Quick Pick (QP) circle.

  Select how much you want to play per draw.

  Select how many consecutive draws you want to play. Mark one box to play the same numbers for up to 20 consecutive draws.
  Number of draws x dollar amount played per draw = Total wager


  BULLSEYE (optional): Mark "Y" for Yes to add BULLSEYE to your wager for bigger prizes and more chances to win. This doubles the cost of the base wager.

  Give your play slip to your retailer.'`,
  "Pick 6": `'Pick six(6) numbers between 1-49

  Pick-6 drawings are held every Monday & Thursday at approximately 10:57 pm.

  Purchase your Pick-6 tickets prior to 10:53 pm on Monday & Thursday for the drawing.

  Add XTRA to increase your non-jackpot prizes and win $2 for matching two numbers.'`,
  "Jersey Cash 5": `'Pick five(5) numbers between 1-45.

  Jersey Cash 5 drawings are held every night at approximately 10:57 pm.

  Purchase your Jersey Cash 5 tickets prior to 10:53 pm for the nightly drawing.

  Add XTRA to increase your non-jackpot prizes up to 5X and win $2 for matching two numbers.'`,
  "Pick 4": `'Pick four(4) numbers between 0-9.

  Pick-4 with FIREBALL drawings are held every day at approximately 12:59 pm & 10:57 pm.

  Purchase your Pick-4 tickets prior to 12:53 pm for the Midday drawings & 10:53 pm for the Evening drawings.

  Enhance your Pick-4 play with the optional FIREBALL.'`,
  "Pick 3": `'Pick three(3) numbers between 0-9.

  Pick-3 with FIREBALL drawings are held every day at approximately 12:59 pm & 10:57 pm.

  Purchase your Pick-3 tickets prior to 12:53 pm for the Midday drawings & 10:53 pm for the Evening drawings.

  Enhance your Pick-3 play with the optional FIREBALL.'`,
  "": `Select a game from the menu to see the rules for that game.`
}

export default function GameRules(props) {
  const { thisgame } = props;
  const rulesArr = allrules[thisgame].split('.');

  return (
    rulesArr.map((rule, i) => <div key={i + 3}>{rule}</div>)
  )
}
