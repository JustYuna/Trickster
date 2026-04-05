require("dotenv").config();
const { EmbedBuilder } = require("discord.js");

// const RAW_URL = process.env.CONFIG_RAW_URL?.trim();

module.exports = {
    CORE: {
        SETTINGS: {
            COMMANDS_PER_MINUTE: 10, // limits how many commands the user can send till timeout
            MAX_MEMORY_USAGE: 1024, // limites how much mb ram the bot is allowed to use

            DEBUG_MEMORY: false,
            DEVELOPER_MODE: false,
        },
        MESSAGES: {
            NOT_ENOUGH_CURRENCY: "❌ You do not have enough **{mainCurrency_name}** {mainCurrency_emoji} to perform this action!",
            MIN_CURRENCY_REQUIRED: "⚠️ You need a minimum of **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
            MAX_CURRENCY_ALLOWED: "🚫 You can only put a maximum of **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
            ACTION_COOLDOWN: "⏳ You are on cooldown for `{command}`. Please wait **{remainingSeconds}** second(s).",
            ACTION_UNAVAILABLE: "🛠️ This action is currently unavailable, please try again later.",
            ACTION_RATE_LIMIT: "⚠️ You are currently being rate limited... please wait a moment."
        },

        EMOJIS: {
            Leaderboard_1:  "<:lb_10:1277620451681767515>",
            Leaderboard_2:  "<:lb_9:1277620442332532848>",
            Leaderboard_3:  "<:lb_8:1277620415308632064>",
            Leaderboard_4:  "<:lb_7:1277620392998998036>",
            Leaderboard_5:  "<:lb_6:1277620381464924291>",
            Leaderboard_6:  "<:lb_5:1277620363869687889>",
            Leaderboard_7:  "<:lb_4:1277620354789015583>",
            Leaderboard_8:  "<:lb_3:1277619409468260383>",
            Leaderboard_9:  "<:lb_2:1277619392384864366>",
            Leaderboard_10: "<:lb_1:1277619355378520085>",

            Upgrade: "<:upgrade:1386092194980429855>",
            BrokenPickaxe: "<:BrokenPickaxe:1387913610805903592>",

            Candy: "<:Candy:1411739676041281657>",
            Skull: "<:Skull:1418777536845975643>",
            CandyBasket: "<:CandyBasket:1411878280486846558>",
            Cookie: "<:Cookie:1417811796252819466>",

            Coin: "<:Coin:1489783746835120329>",
            Gems: "<:Gems:1417581211446018171>",

            Gambled: "<:Gambled:1418791109676630017>",

            Cash1: "<:cash:1277627351869558804>",
            Cash5: "<:cash5:1388669590862696541>",

            UI_Cross: "<:ui_cross:1399887525522178220>",
            UI_Warn: "<:ui_warn:1399887498460528790>",
            UI_Plus: "<:ui_plus:1399887474590875929>"
        },

        THEMES: {
            ACTIVE: "DEFAULT",

            HALLOWEEN: {
                CURRENCY: {
                    MAIN: { NAME: "Candy", EMOJI: "{emoji_Candy}" },
                    SECONDARY: { NAME: "Cookies", EMOJI: "{emoji_Cookie}" },
                },
                COLORS: { MAIN: [250, 150, 0], SECONDARY: [50, 75, 100], ERROR: [250, 0, 0] },
                COMMANDS: {
                    HUNTING: {
                        ACTION_MESSAGE: "🏹 You stalked through the fog of the cursed woods...\nYou tracked down **{amount}x {material}** and sold the spoils for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Shadow Bat", WEIGHT: 40, WORTH: 25, AMOUNT: { MIN: 3, MAX: 8 } },
                            { MATERIAL: "Spooky Ghost", WEIGHT: 25, WORTH: 60, AMOUNT: { MIN: 2, MAX: 5 } },
                            { MATERIAL: "Cursed Scarecrow", WEIGHT: 15, WORTH: 120, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Headless Horseman", WEIGHT: 10, WORTH: 450, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Ancient Vampire", WEIGHT: 8, WORTH: 900, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Werewolf Alpha", WEIGHT: 2, WORTH: 2500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You swing your pickaxe into a cracked tombstone...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Pumpkin Shards", WEIGHT: 45, WORTH: 20, AMOUNT: { MIN: 5, MAX: 20 } },
                            { MATERIAL: "Grave Dirt", WEIGHT: 30, WORTH: 50, AMOUNT: { MIN: 4, MAX: 18 } },
                            { MATERIAL: "Brimstone", WEIGHT: 15, WORTH: 120, AMOUNT: { MIN: 2, MAX: 8 } },
                            { MATERIAL: "Cursed Gold", WEIGHT: 8, WORTH: 300, AMOUNT: { MIN: 1, MAX: 5 } },
                            { MATERIAL: "Soul Fragment", WEIGHT: 2, WORTH: 1500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You cast your line into the murky swamp waters...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Soggy Bandages", WEIGHT: 40, WORTH: 25, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Eerie Eel", WEIGHT: 25, WORTH: 55, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Bonefish", WEIGHT: 15, WORTH: 110, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Ghost Carp", WEIGHT: 10, WORTH: 400, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Cursed Anchor", WEIGHT: 2, WORTH: 5000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You stirred a bubbling cauldron over a green flame...\nYou prepared **{amount}x {material}** and sold them to hungry ghouls for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Eyeball Cupcakes", WEIGHT: 45, WORTH: 30, AMOUNT: { MIN: 4, MAX: 12 } },
                            { MATERIAL: "Witch's Brew", WEIGHT: 30, WORTH: 70, AMOUNT: { MIN: 2, MAX: 8 } },
                            { MATERIAL: "Ghostly Pasta", WEIGHT: 15, WORTH: 150, AMOUNT: { MIN: 1, MAX: 5 } },
                            { MATERIAL: "Spider-Cider", WEIGHT: 8, WORTH: 500, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Hellfire Peppers", WEIGHT: 2, WORTH: 2000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    WALLET: {
                        TITLE: "🎒 {username}'s Candy Basket",
                        THUMBNAIL: "{emoji_CandyBasket}", // If you have this emoji
                        FIELDS: {
                            CURRENCY: "💰 Currencies",
                            STATISTICS: "📊 Statistics",
                            STREAK: "🌟 Daily Streak",
                            INVENTORY: "📦 Collected Items"
                        }
                    },
                }
            },

            WINTER: {
                CURRENCY: {
                    MAIN: { NAME: "Candy", EMOJI: "{emoji_Candy}" },
                    SECONDARY: { NAME: "Cookies", EMOJI: "{emoji_Cookie}" },
                },
                COLORS: { MAIN: [0, 100, 200], SECONDARY: [50, 75, 100], ERROR: [250, 0, 0] },
                COMMANDS: {
                    HUNTING: {
                        ACTION_MESSAGE: "🏹 You trekked through the deep blizzard snow...\nYou tracked down **{amount}x {material}** and sold the spoils for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Arctic Fox", WEIGHT: 40, WORTH: 30, AMOUNT: { MIN: 3, MAX: 7 } },
                            { MATERIAL: "Winter Owl", WEIGHT: 25, WORTH: 65, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Snow Golem Core", WEIGHT: 15, WORTH: 140, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Yeti Fur", WEIGHT: 10, WORTH: 500, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Reindeer Antler", WEIGHT: 8, WORTH: 1000, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Ice Dragon Scale", WEIGHT: 2, WORTH: 3000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You crack through the permafrost with your pickaxe...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Snow", WEIGHT: 45, WORTH: 15, AMOUNT: { MIN: 10, MAX: 30 } },
                            { MATERIAL: "Permafrost Ice", WEIGHT: 30, WORTH: 45, AMOUNT: { MIN: 5, MAX: 20 } },
                            { MATERIAL: "Frozen Coal", WEIGHT: 15, WORTH: 100, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Glacial Crystal", WEIGHT: 8, WORTH: 350, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Ancient Mammoth Tusk", WEIGHT: 2, WORTH: 2000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You drop your line through a hole in the ice...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Ice Cube", WEIGHT: 40, WORTH: 10, AMOUNT: { MIN: 10, MAX: 25 } },
                            { MATERIAL: "Frozen Sardine", WEIGHT: 25, WORTH: 50, AMOUNT: { MIN: 3, MAX: 12 } },
                            { MATERIAL: "Arctic Char", WEIGHT: 15, WORTH: 150, AMOUNT: { MIN: 2, MAX: 5 } },
                            { MATERIAL: "Frost-Scale Trout", WEIGHT: 10, WORTH: 500, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "The Polar Star", WEIGHT: 2, WORTH: 6000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You warmed up the kitchen with a roaring fire...\nYou prepared **{amount}x {material}** and sold them to cold hikers for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Peppermint Cocoa", WEIGHT: 45, WORTH: 35, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Gingerbread Men", WEIGHT: 30, WORTH: 80, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Honey-Glazed Ham", WEIGHT: 15, WORTH: 180, AMOUNT: { MIN: 1, MAX: 5 } },
                            { MATERIAL: "Cinnamon Churros", WEIGHT: 8, WORTH: 450, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Roasted Chestnuts", WEIGHT: 2, WORTH: 1800, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    WALLET: {
                        TITLE: "❄️ {username}'s Winter Stash",
                        THUMBNAIL: "{emoji_Candy}", // Or a snowflake emoji if you have one
                        FIELDS: {
                            CURRENCY: "🧊 Frozen Assets",
                            STATISTICS: "📊 Winter Records",
                            STREAK: "🔥 Warmth Streak",
                            INVENTORY: "🎒 Sled Bag"
                        }
                    },
                }
            },

            DEFAULT: {
                CURRENCY: {
                    MAIN: { NAME: "Coins", EMOJI: "{emoji_Coin}" },
                    SECONDARY: { NAME: "Gems", EMOJI: "{emoji_Gems}" },
                },
                COLORS: { MAIN: [0, 250, 250], SECONDARY: [250, 50, 160], ERROR: [250, 0, 0] },
                COMMANDS: {
                    HUNTING: {
                        ACTION_MESSAGE: "🏹 You ventured into the wild meadows...\nYou tracked down **{amount}x {material}** and sold the spoils for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Rabbit", WEIGHT: 45, WORTH: 20, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Pheasant", WEIGHT: 25, WORTH: 50, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Wild Boar", WEIGHT: 15, WORTH: 120, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Majestic Stag", WEIGHT: 10, WORTH: 400, AMOUNT: { MIN: 1, MAX: 3 } },
                            { MATERIAL: "Golden Eagle", WEIGHT: 4, WORTH: 1200, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Ancient Silver Fox", WEIGHT: 1, WORTH: 5000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You swing your pickaxe deep into the cavern walls...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Stone", WEIGHT: 50, WORTH: 10, AMOUNT: { MIN: 10, MAX: 30 } },
                            { MATERIAL: "Iron", WEIGHT: 25, WORTH: 40, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Gold", WEIGHT: 15, WORTH: 150, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Diamond", WEIGHT: 8, WORTH: 600, AMOUNT: { MIN: 1, MAX: 3 } },
                            { MATERIAL: "Netherite", WEIGHT: 2, WORTH: 2500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You cast your line into the blue water...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Old Boot", WEIGHT: 40, WORTH: 5, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Cod", WEIGHT: 30, WORTH: 35, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Salmon", WEIGHT: 15, WORTH: 80, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Tropical Fish", WEIGHT: 10, WORTH: 500, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Neptune's Trident", WEIGHT: 5, WORTH: 10000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You worked a shift at the local bistro...\nYou prepared **{amount}x {material}** and earned: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Blueberry Pancakes", WEIGHT: 45, WORTH: 25, AMOUNT: { MIN: 5, MAX: 20 } },
                            { MATERIAL: "Sourdough Bread", WEIGHT: 30, WORTH: 60, AMOUNT: { MIN: 3, MAX: 12 } },
                            { MATERIAL: "Zesty Chicken", WEIGHT: 15, WORTH: 130, AMOUNT: { MIN: 2, MAX: 8 } },
                            { MATERIAL: "Filet Mignon", WEIGHT: 8, WORTH: 400, AMOUNT: { MIN: 1, MAX: 3 } },
                            { MATERIAL: "Chocolate Soufflé", WEIGHT: 2, WORTH: 1500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },

                    WALLET: {
                        TITLE: "👛 {username}'s Wallet",
                        THUMBNAIL: "{emoji_Coin}",
                        FIELDS: {
                            CURRENCY: "💵 Balance",
                            STATISTICS: "📈 Stats",
                            STREAK: "📅 Daily Login",
                            INVENTORY: "🎒 Inventory"
                        }
                    }
                }
            }
        },
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
                ALREADY_CLAIMED: `{emoji_UI_Cross} You already used \`/daily\` today!`,
                RECIEVED: "{mainCurrency_emoji} You received **{reward} {mainCurrency_name}'s**",
            }
        },

        GIFT: {
            MIN: 50,
            MAX: 5_000,
            MAX_RECIEVER: 100_000,
            EXCLUDE: [
                // Admins
                "656588010195910686", // Snuv
            ],

            MESSAGES: {
                EXCLUDED: "You cannot gift candy to this user.",
                TO_BOT: "You cannot gift candy to bots.",
                SUCCESS: "Successfully gifted {amount} {mainCurrency_name} to {username}!",
                TOO_RICH: "You cannot gift candy to {username} because they already have too much!"
            }
        },

        // -------------------
        // GAMBLING SECTION
        // -------------------

        RAFFLE: {
            MIN_BET: 50,
            MAX_BET: 50_000,
            MAX_DIFFERENCE: 10_000, // Sets the max diffrence so you cannot bet 1 vs 50_000
            RAFFLE_TIME: 600, // in seconds

            MESSAGES: {
                DIFFERENCE_TOO_HIGH: "⚠️ The difference for the bet is too high, you can only bet a diffrence of max 10,000!\n*Cooldown reset to 10sec's*",
                NO_CODE: "⚠️ You need a code to join a raffle!\n*Cooldown reset to 10sec's*",
                NO_RAFFLE_FOUND: "⚠️ No active raffle was found with that code, make you that you wrote it correct.\n*Cooldown reset to 10sec's*",
                NO_AMOUNT: "⚠️ You need to input a amount to enter/create a raffle!\n*Cooldown reset to 10sec's*",

                WINNER: "🎉 {winner} won the raffle!\nReward: **{amount} {mainCurrency_name}’s** {mainCurrency_emoji}",
                INFO: "**Raffle:**\nThis command allows you to create a raffle to play against your friends!\n- Create a raffle using /raffle <create>\n- Join a raffle by using /raffle <join> <code>\n*Cooldown reset to 10sec's*",
            },
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
            },

            ULTIMATE_LOSE: [
                "a flip-flop",
                "grandma’s slipper",
                "a rubber duck",
                "your internet provider",
                "an angry goose",
                "Shrek",
                "a Windows update",
                "your last brain cell",
                "a Discord mod",
                "an Uno reverse card",
                "a screaming goat",
                "a cursed AI response",
            ]
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
    },
    
    FUN: {
        BONK: {
            GIFS: [
                "https://tenor.com/view/bonk-meme-dog-gif-9935778472248450901",
                "https://tenor.com/view/bonk-gif-20931372",
                "https://tenor.com/view/chainsawman-anime-slap-gif-26953570",
                "https://tenor.com/view/lion-king-yeet-gif-13195565629610357612",
                "https://tenor.com/view/bonk-pramod-bonk-gif-26084438",
                "https://tenor.com/view/chikku-neesan-girl-hit-wall-stfu-anime-girl-smack-gif-17078255",
                "https://tenor.com/view/hitoribocchi-bocchi-aru-aru-chan-hitoribocchi-aru-gif-14409897",
                "https://tenor.com/view/yuru-yuri-chinatsu-yoshikawa-anime-anime-girl-bonk-gif-23853785",
                "https://tenor.com/view/bonk-gif-19410756",
                "https://tenor.com/view/spongebob-meme-bonk-gif-24279189",
            ],
            RESPONSES: [
                "🔨 {bonker} [bonked]({gif}) {bonkee} into the next century!",
                "🌌 {bonker} [bonked]({gif}) {bonkee} so hard they saw stars.",
                "🌕 {bonker} [bonked]({gif}) {bonkee} all the way to the moon.",
                "💫 {bonker} [bonked]({gif}) {bonkee} into another dimension!",
                "⚡ {bonker} [bonked]({gif}) {bonkee} at lightning speed!",
                "🎯 {bonker} [bonked]({gif}) {bonkee} with perfect accuracy!",
                "🪐 {bonker} [bonked]({gif}) {bonkee} straight into orbit!",
                "🏏 A wild {bonker} appeared and [bonked]({gif}) {bonkee}!",
            ]
        },

        HUG: {
            GIFS: [
                "https://tenor.com/view/hug-anime-comfy-cute-gif-5299348585618231224",
                "https://tenor.com/view/alice-vt-gif-25825873",
                "https://tenor.com/view/chikako-hugging-otohime-for-the-first-and-she-confused-gif-313471048803276179",
                "https://tenor.com/view/yukon-child-form-embracing-ulquiorra-gif-15599442819011505520",
                "https://tenor.com/view/hugtrip-gif-2490966530865073004",
                "https://tenor.com/view/%D8%AD%D8%B6%D9%86-%D8%A8%D9%88-gif-873756486592965272",
                "https://tenor.com/view/1053-dog-hug-friend-happy-gif-7124185793758437906",
                "https://tenor.com/view/monkey-hug-monkeys-hugging-golden-monkeys-gif-11103289529249683769",
            ]
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
