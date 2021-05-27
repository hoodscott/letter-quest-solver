# Letter Quest Solver

This is a gameplay solution tool for the Xbox One puzzle game, _Letter Quest: Grimm's Journey Remastered_ (released in
2016). The tool does **not** in any way interact with your Xbox, the game, or any Xbox-related services, and is thus not a "hack" or "mod", but rather a
manual-input tool to assist with the game as you have it up on another screen.

The main reason for using the tool is for the efficient pursual of unlocking the game's achievements, for "achievement
hunter" players.

The tool is automatically hosted online for free using Github Pages:
https://meszerus.github.io/letter-quest-solver/.

## Contributing

Feel free to contribute to the repo. There are three expected types of contributions expected:
* The removal of words from the repo's dictionary which the game will not recognise as valid.
* The improvement of the user interface design (front-end UI & CSS are not my areas of expertise).
* The fixing of bugs / word or letter weightings.

## Usage

There are two gameplay solver modes: the "Main Game" mode, and "Hangman" mode.

### Main Game

The primary gameplay mode, the player is presented with three rows of five tiles, for a total of fifteen tiles.

Each tile has a point value attached to it, which is always the same value per specific letter (i.e., a "Y" tile
is always worth 2 points). This is automatically set when you enter a letter.

A tile can also have a "status effect" on the tile which affects its usage. There are a range of effects,
but the two most pertinent for achievements are "Crystal" tiles (makes the tile appear as a coloured gem)
and "Plague" tiles (makes the tile appear as a red-and-black sickness). Make sure to set the effect to
**Crystal** or **Plagued** as applicable.

Other status effects make the tile unusable, or undesirable for the player to use them (i.e., the "Spike"
tiles inflict damage on the player when used); as such, when a tile is unusable/undesirable, you can use the
**Avoid** option for that tile.

With these options, you can mirror the tiles you see in the game with the tiles in the tool, as far as it
relates to achievements. You can hit the **Solve!** button to be presented with five possible solution words,
ordered by a "Relevance" score: this is the priority weighting of the solution word, where the higher the score,
the better an option it is for progressing the achievements you want to unlock.

Hit the **Use** button for the word you have inputted in your game. These tiles will be reset and you can
enter the new tiles that have appeared in their place, to repeat the process until a level is complete.

Hit **Show** on the "Achievement-hunting config" label to tell the tool which achievements you are yet to unlock.
This will help the tool assign a better weighting to the letters/words more appropriately for your needs.

### Hangman

This game mode is more straight-forward, as it is the traditional game of the same name.

When using this gameplay solver for a new hangman challenge, make sure to first adjust the word length using
the **+** and **-** options provided.

Hit the **Solve!** button to be presented with five possible solutions, based on the letters inputted, and
the letters you have selected as being rejected by the game. Hovering your mouse cursor over each possible
solution word will preview the full word in the input fields.