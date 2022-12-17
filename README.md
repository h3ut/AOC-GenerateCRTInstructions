Generate input for [AOC 2022 day 10](https://adventofcode.com/2022/day/10)

````
X = is the cycle we're trying to generate an instruction for (starting from 0)
sprite = is the starting index of the sprite (sprite, sprite + 1 and sprite + 2 are covered by the sprite)
size = is the size of the sprite (default 3)
   
Looking only two cycles ahead:
  XX..		->		addx 2 (X- sprite + 4)
  XX.#		->		addx 1 (X - sprite + 3)
  XX#.		->		addx -3	(X - sprite - (size - 3))
  XX##		->		addx -1	(X - sprite- (size - 3) + 1)

XX can't be changed with this instruction, we can only influence the instruction following that.
````