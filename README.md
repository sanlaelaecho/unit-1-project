# Game Name
Naruto vs Sasuke!!!

### Code Used
Html/CSS/JavaScript

## Play Here: https://sanlaelaecho.github.io/unit-1-project/

## Game Description
Welcome to the Naruto vs Sasuke 2 player game!

This is a 2 player game based on the ninja anime, Naruto. In this anime, Naruto and Sasuke are "frienemies".
The fight locations are some popular fighting scenes in the anime. 
The attack spells are also some popular spells with transforming to 9 tails fox being the ultimate attack with highest range of damage from Naruto and summoning Susanoo being the ultimate attack for Sasuke as well.

You can choose your location out of 6 famous fighting locations in Naruto.
![Background Fighting Locations](https://i.imgur.com/4yA848W.png)

## Game Instruction
Naruto or Sasuke, who gets to go first is random and then it's a turned based game after that.
- Player can choose out of 4 spells to attack with the furthest right being the strongest spell.
- Whichever player's health goes down to 0 or lower dies and looses and the other player wins.
Now feel free to replay!
![Naruto vs Sasuke Fight Scene](https://i.imgur.com/vfcX8NI.png)

## Summarized Code Logic
- Carousel flips through array of different images.
- Naruto or Sasuke's turn is randomized with Math.floor.random.
- Each player's turns are alternated and their buttons disabled if not their turn.
- Once the game starts, Chakra recovers through interval.
- Players' spells each have a range of math.random damage with stronger spells having a higher damage range than weaker spells.
- If player tries to use spell that cost more than their Chakra, the modal pops up with notification.
- Once either player's health goes to 0 or less, the other player wins.
- Winning modal pops up with play again button and the chakra recovery stops.
- Once play again is clicked, all health and chakra recovery starts over.

## Next Steps
- Add credit for the audio and the Naruto/Sasuke images.

- Reset the avatars when play again.

- Slowly increase background volume.

- Add more avatars or players to be able to switch.

- Have health and chakra levels go down according to number but not get larger than the current bar when chakra recovers.

- Improve my CSS to better orient the avatars and their animations. Also, add shadows or clouds under the avatars so they look less like they're floating. Improve the animations.
Probably add a dead Naruto or Sasuke at the end.

- Try to get my audio linked to a YouTube video's audio and not downloaded or uploaded on GitHub. Also, add audio every time either Naruto or Sasuke uses their attacks. For eg, if Naruto uses Rasengan, he screams Rasengan in audio.

- Make mobile friendly.

- If I get really advanced, have one player become AI.

THANK YOU for playing my game!!!