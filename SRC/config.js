require("dotenv").config();
const content = require("./content")
const { EmbedBuilder } = require("discord.js");

// const RAW_URL = process.env.CONFIG_RAW_URL?.trim();

module.exports = {
    CORE: {
        MESSAGES: {
            NOT_ENOUGH_CANDY: "You do not have enough candy to perform this action!",
            MIN_CANDY_REQUIRED: "You need a minimum of {amount} {mainCurrency_name}!",
            MAX_CANDY_ALLOWED: "You can only put a maximum of {amount} {mainCurrency_name}!",

            ACTION_COOLDOWN: "🕐 You are on cooldown for \`{command}\`. Please wait {remainingSeconds} second(s).",
            ACTION_UNAVAILABLE: "This action is currently unavailable, please try later again.",
        },
        THEMES: {
            ACTIVE: "DEFAULT",

            HALLOWEEN: {
                CURRENCY: {
                    MAIN: { NAME: "Candy", EMOJI: content.EMOJIS.Candy },
                    SECONDARY: { NAME: "Cookies", EMOJI: content.EMOJIS.Cookie },
                },
                COLORS: {
                    MAIN: content.COLORS.orange,
                    SECONDARY: content.COLORS.darkSlateGray
                }
            },
            DEFAULT: {
                CURRENCY: {
                    MAIN: { NAME: "Coins", EMOJI: content.EMOJIS.Coin },
                    SECONDARY: { NAME: "Gems", EMOJI: content.EMOJIS.Gems },
                },
                COLORS: {
                    MAIN: content.COLORS.cyan,
                    SECONDARY: content.COLORS.pink
                }
            }
        }
    },
    ECONOMY: {
        ROB: {
            REQUIREMENTS: {
                kids: 250,
                candy_shop: 750,
                warehouse: 1_500,
                candy_factory: 3_500,
                santa: 7_500
            },
            DIFFICULTY_DATA: {
                easy: { Reward: 0.5, Percentage: 50 },
                medium: { Reward: 1, Percentage: 65 },
                hard: { Reward: 1.5, Percentage: 80 },
            }
        },

        DAILY: {
            REWARD: {
                MIN: 200,
                MAX: 400,
                WEEKEND_MULTIPLIER: 1.5
            },
            MESSAGES: {
                ALREADY_CLAIMED: `${content.EMOJIS.UI_Cross} You already used \`/daily\` today!`,
                RECIEVED: "{mainCurrency_emoji} You received **{currency_emoji} {Math.floor(reward)}**",
            }
        },

        GIFT: {
            MIN: 50,
            MAX: 5_000,
            EXCLUDE: [
                // Bots [Deprecated - sanity check for bots]
                "1217462425033637898", // Trickster
                "536991182035746816", // Wick
                "678344927997853742", // Sapphire
                "691713521007984681", // Engauge
                "493716749342998541", // Mimu
                "710034409214181396", // Ticket King
                "1267187794976178186", // ROOOBERT
                "159985870458322944", // MEE6

                // Admins
                "656588010195910686", // Snuv
            ],

            MESSAGES: {
                EXCLUDED: "You cannot gift candy to this user.",
                TO_BOT: "You cannot gift candy to bots.",
                SUCCESS: "Successfully gifted {amount} {mainCurrency_name} to {username}!"
            }
        },

        TRICK_OR_TREAT: {
            COMMON: { MIN: 10, MAX: 50, CHANCE: 50 },
            UNCOMMON: { MIN: 50, MAX: 100, CHANCE: 25 },
            RARE: { MIN: 100, MAX: 150, CHANCE: 5 },
            EPIC: { MIN: 150, MAX: 250, CHANCE: 1 },
        },

        ROCK_PAPER_SCISSORS: {
            MIN_BET: 50,
            MAX_BET: 50_000,
            WIN_CHANCE: { WIN: 40, LOSE: 50, ULTIMATE_LOSE: 10 },

            MESSAGES: {
                INVALID_CHOICE: "⚠️ Invalid choice. Pick one of: {choices}.",
                RESULT_WIN: "You: {player}\nBot: {bot}\n🎉 You win **{amount}** {mainCurrency_emoji}!",
                RESULT_LOSE: "You: {player}\nBot: {bot}\n😢 You lose **{amount}** {mainCurrency_emoji}.",
                RESULT_ULTIMATE_LOSE: "You: {player}\nBot: {bot}\n💀 Ultimate loss! You lose **{amount}** {mainCurrency_emoji}."
            }
        },

        SLOTS: {
            MIN_BET: 50,
            MAX_BET: 50_000,
            SYMBOLS: [
                { emoji: "🍒", weight: 3 },
                { emoji: "🍋", weight: 3 },
                { emoji: "🍉", weight: 2 },
                { emoji: "🍇", weight: 2 },
                { emoji: "🔔", weight: 2 },
                { emoji: "⭐", weight: 1 },
                { emoji: "💎", weight: 1 },
            ],
            JACKPOTS: {
                "🍒": 3,
                "🍋": 6,
                "🍉": 9,
                "🍇": 12,
                "🔔": 25,
                "⭐": 45,
                "💎": 90,
            }
        },

        DICE: {
            MIN_BET: 50,
            MAX_GET: 50_000,
        },

        SUGAR_HUNT: {
            TIMER: 15000,
            MIN_REQUIRED: 75,
            OUTCOMES: [
                { type: "lose", text: "{emoji_Skull} Oh no! You lost some {mainCurrency_name}! -75 {mainCurrency_emoji}", amount: -75, weight: 55, color: "Red" },
                { type: "win", text: "{mainCurrency_emoji} You found {mainCurrency_name}! +150 {mainCurrency_emoji}", amount: 150, weight: 30, color: "Green" },
                { type: "nothing", text: "😶 The door was empty...", amount: 0, weight: 10, color: "Grey" },
                { type: "jackpot", text: "💎 Jackpot! Massive {mainCurrency_name} reward! +400 {mainCurrency_emoji}", amount: 400, weight: 5, color: "Gold" },
            ],
            DOORS: [
                { id: "door1", label: "Door 1", emoji: "🎃" },
                { id: "door2", label: "Door 2", emoji: "👻" },
                { id: "door3", label: "Door 3", emoji: "🍭" },
                { id: "door4", label: "Door 4", emoji: "🍬" },
                { id: "door5", label: "Door 5", emoji: "🍩" },
            ]
        }
    },
    
    FUN: {
        BONK: {
            "150": "https://tenor.com/view/bonk-meme-dog-gif-9935778472248450901",
            "100": "https://tenor.com/view/bonk-gif-20931372",
            "75": "https://tenor.com/view/chainsawman-anime-slap-gif-26953570",
            "50": "https://tenor.com/view/lion-king-yeet-gif-13195565629610357612",
            "25": "https://tenor.com/view/bonk-pramod-bonk-gif-26084438",
            "0": "https://tenor.com/view/chikku-neesan-girl-hit-wall-stfu-anime-girl-smack-gif-17078255",
        },
        SHIP: {
            MESSAGE: "{emoji} The love compatibility between **{name1}** and **{name2}** is **{percentage}%**!"
        },
        TOWER: {
            BRICKS_PER_LAYER: 50,
            MESSAGE: "🧱 You have added 1 brick to the tower!\n**Layer:** {layer}\n**Total bricks:** {size}\n*[Each layer requires {needed} bricks]*"
        }
    }
}
