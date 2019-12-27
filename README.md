# Hodler of Last Resort
### A Bitcoin Boardgame

This game aims at creating a competitive and entertaining environment where up-to 4 players can compete and learn some detail of Bitcoin's technology, game theory, and history.

The game is loosely based on the mechanisms of monopoly. The objective is to control all bitcoin that is issued throughout the game. The players can achieve this in 3 ways:
- by progressing in the board and risking the outcome of each of the spaces
- by mining the block for each turn by rolling the smallest number with the mining dice (6 color dice)
- by playing specific cards just before other players finish their turn in order to impact their outcome


## board.html
The board is made up of 32 spaces. On each corner, there are 4 spaces where the user can take a card. The other spaces have positive, neutral, or negative consequences. Upon landing on each of the spaces, the player my choose to not do anything, or risk a a white dice roll to get more bitcoin from the other players or give bitcoin to the other players depending on the result.
An example: if the player chooses to engage with a blue space and roles a number below the specified in the space, the outcome is negative and they need to give up some of their funds).

This file should be used to construct a printable PDF with the game board. All spaces data and rules are pulled from the spaces.json and laid out in the board layout on the html using simple javascript and css. 

- [ ] write rules, descriptions, and titles, for each space

https://htmlpreview.github.io/?https://github.com/pedromvpg/Hodler-of-Last-Resort/blob/master/board.html


## cards.html
Same principle of board.html but for the cards. Content of the cards on cards.json. After the outcome of the player is known, other users can choose to use on of the cards they accumulated to alter, reverse, or amplify the result or consequence of the space.

- [ ] write card rules in cards.json
- [ ] confirm cards do not extend the 

https://htmlpreview.github.io/?https://github.com/pedromvpg/Hodler-of-Last-Resort/blob/master/cards.html

## ledger.html
Miner subsidies, transfers of bitcoin on each round, and any other events for each turn, are recorded on a ledger that accompanies the gameplay. Think of it as the monopoly bank, but instead of distributing the paper currency, it just makes sure that all data is recorded as the game progresses. 

Best if visible to everybody during the game as it should serve as an analogy to Bitcoin's open blockchain. Once one round is finished, it should be impossible to change the values.

- [ ] Workout the math and make sure it's tracking all the rewards and transfers correctly
- [ ] Ability to same the game in a url ?gameId=7xD29dkAq574v0paf4d in case the browsers refreshes or crashes

https://htmlpreview.github.io/?https://github.com/pedromvpg/Hodler-of-Last-Resort/blob/master/ledger.html

## Mining
Players start with 1 mining die and can purchase up to 5 mining dice throughout the game. More dice means bigger chances of getting a small number and taking the block reward. 

- [ ] decide if fees should be included in the mining reward (every player pays to play a round, miner collects block reward + fees)
- [ ] what are the ways players can acquire more mining dice? purchase from other player? only when they land on a space? only when they have a card?


## Order of play
0. All players start with 0 bitcoin and only 1 mining die (color matching user's figure).
1. Player X rolls the white die.
2. Player X moves piece to the space forward the number on the white die. If they land on a orange space, they can take a card from one of the decks (random? player free to select, roll a special 6 face color die to select theme?)
3. All players roll mining dice. 
4. Lowest number wines the block reward. If a tie, keep rolling until there's a clear winner. Only the smallest number on the mining dice counts.
5. Player X chooses to engage or not engage with the space it has landed on.
	6. If player X does not engage, mark as neutral on the ledger and move on to the next player.
	7. If player X engages, they throw the white die again and compare the result with the rules on the space. If positive they get bitcoin form the other players, if negative they need to give bitcoin to all the other players.
8. At this point, another player can play a card and change the outcome of the space. The player next to the current player (clock-wise) is the first one to have the option to apply a card and can pass. It goes around the board if the current player can apply one of its own cards to override everyone else's. All cards that are played go back to their decks. Only the last one to be played has any effect. 



The vision:

![Boardgame](https://piratehash.com/wp-content/uploads/2019/12/Bitcoin_Board_Game_6_categoriesTopLid2880X1800_0003-1536x960.jpg)

![Boardgame](https://piratehash.com/wp-content/uploads/2019/12/Bitcoin_Board_Game_6_categoriesTop2880X1800_0066-1536x960.jpg)

![Boardgame](https://piratehash.com/wp-content/uploads/2019/12/Bitcoin_Board_Game_6_categoriesTop2880X1800_0066-1536x960.jpg)

![Boardgame](https://piratehash.com/wp-content/uploads/2019/12/Bitcoin_Board_Game_6_categoriesTopLid2880X1800_0003-1536x960.jpg)


