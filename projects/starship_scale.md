# Starship Scale

This is a game I created for the Game Maker's Toolkit Game Jam 2024. Working in a small team, we developed it in just under four days. My role was gameplay programmer. The following document provides an overview of the game and its systems. The game can be found here.

## Introduction

The game jam's theme was "Built to Scale." Our team interpreted scaling in a spatial sense, creating a top-down bullet hell game where players control a starship dodging asteroids and enemy projectiles. Points are earned by destroying enemies and asteroids, which can then be used to purchase upgrades for the ship.

The game progresses through waves of enemies, with the goal being to survive for ten minutes. As players advance, the enemies evolve to reflect the increasing scale of the player's power, ranging from small fighter ships to planet-destroying behemoths.

insert image here.

## Combat and Upgrades

Weapons are automatically discharged, allowing players to focus on movement and upgrading their ship. We designed movement to feel fast-paced and chaotic, incorporating a "slip" mechanic where the ship slides slightly while moving. Combined with high movement speed, this creates a thrilling and dynamic gameplay experience.

Players can purchase upgrades at any time. These upgrades offer a variety of enhancements, including increased movement speed, maximum health, and additional weaponry. We implemented three types of weapons: the rubble laser, the missile, and the seeking missile. Each weapon adds layers of complexity to the gameplay.

## Enemy Waves

To design enemy waves, I aimed for precise control over the difficulty curve and complexity. I implemented a system utilizing Unity's "Curves" editor, which allows me to define pacing through a graph where time is the X-axis and spawn rate is the Y-axis. This approach enabled me to fine-tune the game's progression and ensure consistent pacing.

insert image here.

## Takeaways and Improvements

This project provided an excellent opportunity to focus on collaboration and team dynamics. I made it a goal to step back from a leadership role, instead concentrating on being a supportive team member. This experience significantly enhanced my communication and teamwork skills.

If I had more time to refine the game, I would focus on balancing difficulty more effectively. While the wave system worked well, a common piece of feedback was that the game felt too challenging. Additional playtesting and adjustments to the difficulty curve could have mitigated this issue.

