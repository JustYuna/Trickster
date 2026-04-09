# 📦 Update Logs

All notable changes to this project will be documented in this file.

---
## [2.1] - The Theme Engine Update
* **/ship:** now uses user IDs instead of usernames → consistent results, no more reroll abuse via username changes

### ⚒️ Added
- **/bank** - Deposit, withdraw, and upgrade your personal bank storage with full capacity tracking.

- **Work command enhancements** – now calculates rewards with weighted resources, randomized amounts, and XP multipliers.
- **Level tracking** – multi-level support with proper XP rollover; level-ups trigger attach messages.
- **Experience messages** – shows XP gained and level-up notifications appended to action messages.
- **Global multipliers** – configurable cash, XP, and amount multipliers for easier progression tuning.

### 🛠 Tech Yap (Internal)
- **Number abbreviation** - Large numbers are now abbreviated for cleaner UX.
- **SyncUserData** – ensures missing fields are auto-added to the datastore to prevent lost values.
- **Level/XP persistence** – safer logic avoids overwriting actual stored values before calculation, preventing broken progression.
- **/work rework** – fully redesigned reward system:
  - Weighted resource selection (rarity-based outcomes)
  - Amount scales with resource weight + slight randomness
  - Value & XP scale inversely with weight (rarer ≠ always better)


## [2.0] - The Theme Engine Update
> **Note:** This update includes a full economy reset to support the new global theme system.

### 🎭 Major Overhaul
- **Theme Engine:** Migrated from a seasonal "Candy" focus to a Global Bot architecture. The bot now supports dynamic themes (Halloween, Winter, Default).
- **Command Migration:** - Retired: `/trick-or-treat`, `/sugar-rush`
  - New: `/fish`, `/mine`, `/cook`, `/hunt`
- **Wallet System:** Updated `/basket` to `/wallet` to better reflect the new multi-currency support.

### 🛠 Tech Yap (Internal)
- **Security:** Critical code patches and data sanitization.
- **Improved Logic:** Reworked bot balance and configuration handling. [View Source](https://github.com/JustSnuv/Trickster/blob/main/SRC/config.js)
- **Performance:** Interaction handling is now significantly faster.
- **Smarter Captcha:** Integrated a new "Heat System" to detect automated botting more accurately while reducing friction for real users.

## [1.6]
### Reworked
- Improved performance across multiple commands.
- Reworked CAPTCHA system for improved stability.
- Increased **Rob** difficulty.

### 🎰 Improvements
- Global command deferring added for faster interaction handling.
- Better timeout protection and reduced API errors (10062).

## [1.5]
### ✨ New Features
- 👻 **/rob** has returned.

### 🎰 Improvements
- Recoded the command handler for better efficiency.
- Daily reward logic updated (item rewards coming soon).
- Added version selection to the log system.

### 🛠 Fixes
- Cooldown not resetting after captcha.
- Commands not replying correctly.
- Corrected **/sugar-hunt** rewards (150 instead of 30).
- Fixed false "broken" messages in sugar-hunt.
- General security patches.

## [1.4]
### ✨ New Features
- 🍪 Added **Cookies** as a second currency.
- 🎃 Expanded **trick-or-treat** responses.
- ➕ New **/vote** command with global rewards.
- ⭐ Added **Basket Item Inventory**.
- 🍬 Introduced **/sugar-hunt** minigame.
- 🗑️ Added Data Removal Request **/remove-data**.

### 🛠 Fixes
- Database sync issues.
- Resolved frequent interaction failures (10062 errors).
