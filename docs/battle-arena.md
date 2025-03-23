---
id: battle-arena
title: Battle Arena
sidebar_position: 4
---

# BATTLE ARENA

The Battle Arena is the heart of the BMC platform, featuring live memecoin battles in a visually engaging retro-style interface.

![BMC Battle Arena](/img/battle-arena.png)

## Features

### Live Match

The Battle Arena features a 24/7 live-streamed gaming experience with the following elements:

- **Game Streaming**: Continuous pixel-art battle animations featuring memecoin characters fighting in various arenas
- **Place Bet Interface**: User-friendly betting panel allowing users to select fighters and bet amounts during preparation mode
- **Chat Room**: Real-time community chat where users can interact, discuss strategies, and react to battle outcomes
- **Price Charts**: 24-hour historical price charts for each fighter, directly influencing their in-game stats and abilities
- **Active Bets Display**: Live feed showing current bets placed by other users, including fighter selections and amounts
- **Leaderboard**: Upcoming feature (Q2) that will track and display top bettors based on winnings and success rate

### Betting System

![BMC Betting Panel](/img/betting-panel.png)

Users can place bets on battle outcomes with the following rules:

- Betting is only available during the preparation mode
- Minimum bet amount is 0.05 SOL
- Users can only place one bet per match
- Once placed, bets cannot be canceled or modified
- All bets are held in a secure house wallet until the battle concludes
- Winnings are distributed proportionally among winning bettors after deducting a 5% platform fee
- If a fighter receives no bets, all bets on the opposing fighter will be refunded

### Platform Fee Allocation

The 5% platform fee collected from all betting transactions in the Battle Arena is redistributed as follows:

- 2% to existing Royal Syndicate NFT holders
- 3% to platform growth & operations (including development, infrastructure, and team)

This fee structure ensures sustainable development while rewarding Royal Syndicate NFT holders with passive income from platform activity.

### Fighter Roster

The initial lineup includes popular memecoin characters with the following default stats (HP: 100, Max Mana: 50, Base Attack: 5, Critical: 5, Defend: 2, Kick Probability: 5, Skill Cost: 20, Special Skill Cost: 30, Aggressiveness: 20, Defensiveness: 20, Jumpness: 20):

| Fighter | Skill | Special Skill |
|---------|-------|---------------|
| Pepe | WAGMI Slap | Rekt Gas Cloud |
| Trump | Bigly Shot | Crouching Bazooka |
| Doge | Diamond Paw | Much WOW |
| Shiba | 1,000x Punch | Red Candle Blast |
| Pengu | Snowball Rug | Boom Fish NFT |
| Brett | Pink Bullet Airdrop | Degen Dragon Breath |

More fighters will be added through community voting.

### Leaderboards

The platform features comprehensive leaderboards to track:

- Top 10 bettors by win rate
- Highest profit bettors
- Most wins accumulated by bettors
- Biggest single wins

Leaderboards are updated in real-time after each match concludes with historical data maintained for reference.

## Technical Implementation

The Battle Arena utilizes Solana's high-performance blockchain to ensure:

- **On-chain battles and betting** - All match results and betting transactions are processed on-chain and stored in a database for reference
- **Seamless wallet integration** - Bettors can place bets directly by signing transactions with their wallet without sharing private keys
- **Automated reward distribution** - Winnings are automatically distributed to successful bettors immediately after battle conclusion
- **Instant refund mechanism** - Automatic refunds are processed when applicable (e.g., when a fighter receives no bets)

## Unique Selling Points

What makes the BMC Battle Arena unique:

1. **Memecoin Fighter Battles**: Fighting battles featuring popular memecoin characters in an engaging pixel art style
2. **Bettor vs Bettor System**: Betting occurs between users rather than against a house, creating a true peer-to-peer betting experience
3. **Price Chart-Driven Mechanics**: Fighter stats and performance are directly determined by real market price charts, not random probability
4. **Strategic Analysis Required**: Bettors must analyze price charts to make informed decisions, as fighter stats are calculated from accumulated price data
5. **Skill-Based Betting**: Success depends on chart analysis skills rather than luck, rewarding knowledgeable bettors
6. **Low Barrier to Entry**: Free to watch battles, low minimum bet amounts
7. **Transparent Mechanics**: All battle algorithms, fighter stat calculations, and odds formulas are publicly documented