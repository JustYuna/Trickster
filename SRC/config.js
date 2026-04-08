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
                            { MATERIAL: "Shadow Bat", WEIGHT: 40 },
                            { MATERIAL: "Spooky Ghost", WEIGHT: 25 },
                            { MATERIAL: "Cursed Scarecrow", WEIGHT: 15 },
                            { MATERIAL: "Headless Horseman", WEIGHT: 10 },
                            { MATERIAL: "Ancient Vampire", WEIGHT: 8 },
                            { MATERIAL: "Werewolf Alpha", WEIGHT: 2 }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You swing your pickaxe into a cracked tombstone...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Pumpkin Shards", WEIGHT: 45 },
                            { MATERIAL: "Grave Dirt", WEIGHT: 30 },
                            { MATERIAL: "Brimstone", WEIGHT: 15 },
                            { MATERIAL: "Cursed Gold", WEIGHT: 8 },
                            { MATERIAL: "Soul Fragment", WEIGHT: 2 }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You cast your line into the murky swamp waters...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Soggy Bandages", WEIGHT: 40 },
                            { MATERIAL: "Eerie Eel", WEIGHT: 25 },
                            { MATERIAL: "Bonefish", WEIGHT: 15 },
                            { MATERIAL: "Ghost Carp", WEIGHT: 10 },
                            { MATERIAL: "Cursed Anchor", WEIGHT: 2 }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You stirred a bubbling cauldron over a green flame...\nYou prepared **{amount}x {material}** and sold them to hungry ghouls for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Eyeball Cupcakes", WEIGHT: 45 },
                            { MATERIAL: "Witch's Brew", WEIGHT: 30 },
                            { MATERIAL: "Ghostly Pasta", WEIGHT: 15 },
                            { MATERIAL: "Spider-Cider", WEIGHT: 8 },
                            { MATERIAL: "Hellfire Peppers", WEIGHT: 2 }
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
                            { MATERIAL: "Arctic Fox", WEIGHT: 40 },
                            { MATERIAL: "Winter Owl", WEIGHT: 25 },
                            { MATERIAL: "Snow Golem Core", WEIGHT: 15 },
                            { MATERIAL: "Yeti Fur", WEIGHT: 10 },
                            { MATERIAL: "Reindeer Antler", WEIGHT: 8 },
                            { MATERIAL: "Ice Dragon Scale", WEIGHT: 2 }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You crack through the permafrost with your pickaxe...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Snow", WEIGHT: 45 },
                            { MATERIAL: "Permafrost Ice", WEIGHT: 30 },
                            { MATERIAL: "Frozen Coal", WEIGHT: 15 },
                            { MATERIAL: "Glacial Crystal", WEIGHT: 8 },
                            { MATERIAL: "Ancient Mammoth Tusk", WEIGHT: 2 }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You drop your line through a hole in the ice...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Ice Cube", WEIGHT: 40 },
                            { MATERIAL: "Frozen Sardine", WEIGHT: 25 },
                            { MATERIAL: "Arctic Char", WEIGHT: 15 },
                            { MATERIAL: "Frost-Scale Trout", WEIGHT: 10 },
                            { MATERIAL: "The Polar Star", WEIGHT: 2 }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You warmed up the kitchen with a roaring fire...\nYou prepared **{amount}x {material}** and sold them to cold hikers for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Peppermint Cocoa", WEIGHT: 45 },
                            { MATERIAL: "Gingerbread Men", WEIGHT: 30 },
                            { MATERIAL: "Honey-Glazed Ham", WEIGHT: 15 },
                            { MATERIAL: "Cinnamon Churros", WEIGHT: 8 },
                            { MATERIAL: "Roasted Chestnuts", WEIGHT: 2 }
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
                            { MATERIAL: "Rabbit", WEIGHT: 45 },
                            { MATERIAL: "Pheasant", WEIGHT: 25 },
                            { MATERIAL: "Wild Boar", WEIGHT: 15 },
                            { MATERIAL: "Majestic Stag", WEIGHT: 10 },
                            { MATERIAL: "Golden Eagle", WEIGHT: 4 },
                            { MATERIAL: "Ancient Silver Fox", WEIGHT: 1 }
                        ]
                    },
                    MINING: {
                        ACTION_MESSAGE: "⛏️ You swing your pickaxe deep into the cavern walls...\nYou unearthed **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Stone", WEIGHT: 50 },
                            { MATERIAL: "Iron", WEIGHT: 25 },
                            { MATERIAL: "Gold", WEIGHT: 15 },
                            { MATERIAL: "Diamond", WEIGHT: 8 },
                            { MATERIAL: "Netherite", WEIGHT: 2 }
                        ]
                    },
                    FISHING: {
                        ACTION_MESSAGE: "🎣 You cast your line into the blue water...\nYou caught **{amount}x {material}** and sold it for: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Old Boot", WEIGHT: 40 },
                            { MATERIAL: "Cod", WEIGHT: 30 },
                            { MATERIAL: "Salmon", WEIGHT: 15 },
                            { MATERIAL: "Tropical Fish", WEIGHT: 10 },
                            { MATERIAL: "Neptune's Trident", WEIGHT: 5 }
                        ]
                    },
                    COOKING: {
                        ACTION_MESSAGE: "🍳 You worked a shift at the local bistro...\nYou prepared **{amount}x {material}** and earned: **{totalValue} {mainCurrency_name}** {mainCurrency_emoji}",
                        RESOURCES: [
                            { MATERIAL: "Blueberry Pancakes", WEIGHT: 45 },
                            { MATERIAL: "Sourdough Bread", WEIGHT: 30 },
                            { MATERIAL: "Zesty Chicken", WEIGHT: 15 },
                            { MATERIAL: "Filet Mignon", WEIGHT: 8 },
                            { MATERIAL: "Chocolate Soufflé", WEIGHT: 2 }
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

    PROGRESSION: {
        REWARDS: {
            WEIGHT: {
                MULTIPLIER: {
                    WORTH: 2,
                    XP: 2,
                    AMOUNT: 1
                };
            }
        },
        LEVELS: {
            MAX_LEVEL: 50,
            XP_TABLE: { // level: xp needed
                0: 100, 1: 100, 2: 250, 3: 500, 4: 1_000, 5: 2_500, 6: 6_500, 7: 15_000, 8: 40_000, 9: 100_000,10: 225_000,
                11: 350_000, 12: 500_000, 13: 700_000, 14: 950_000, 15: 1_250_000, 16: 1_600_000, 17: 2_000_000, 18: 2_450_000, 19: 2_950_000, 20: 3_500_000,
                21: 4_100_000, 22: 4_750_000, 23: 5_450_000, 24: 6_200_000, 25: 7_000_000,
                26: 7_850_000,27: 8_750_000, 28: 9_700_000, 29: 10_700_000, 30: 11_750_000,
                31: 12_850_000, 32: 14_000_000, 33: 15_200_000, 34: 16_450_000, 35: 17_750_000,
                36: 19_100_000, 37: 20_500_000, 38: 21_950_000, 39: 23_450_000, 40: 25_000_000,
                41: 26_600_000, 42: 28_250_000, 43: 29_950_000, 44: 31_700_000, 45: 33_500_000,
                46: 35_350_000, 47: 37_250_000, 48: 39_200_000, 49: 41_200_000, 50: 43_250_000
            },
            REWARDS: { // level: cash multiplier in %
                0: 0, 1: 0, 2: 5, 3: 10, 4: 15, 5: 20,
                6: 25, 7: 30, 8: 35, 9: 40, 10: 45,
                11: 50, 12: 55, 13: 60, 14: 65, 15: 70,
                16: 75, 17: 80, 18: 85, 19: 90, 20: 95,
                21: 100, 22: 110, 23: 120, 24: 130, 25: 140,
                26: 150, 27: 160, 28: 170, 29: 180, 30: 190,
                31: 200, 32: 210, 33: 220, 34: 225, 35: 230,
                36: 235, 37: 240, 38: 245, 39: 247, 40: 248,
                41: 249, 42: 250, 43: 250, 44: 250, 45: 250,
                46: 250, 47: 250, 48: 250, 49: 250, 50: 250
            }
        }
    },

    ECONOMY: {

        // -------------------
        // BASE SECTION
        // -------------------

        WORK: {
            MESSAGES: {
                EXPERIENCE_ATTACH: "\n{emoji_UI_Plus} +{xp} XP",
                LEVEL_UP_ATTACH: "\n{emoji_UI_Plus} Level Up! You are now **Level {level}**"
            }
        },

        BANK: {
            UPGRADES: {
                0: { NEXT_COST: 15_000, CAPACITY: 10_000 },
                1: { NEXT_COST: 45_000, CAPACITY: 30_000 },
                2: { NEXT_COST: 100_000, CAPACITY: 77_000 },
                3: { NEXT_COST: 250_000, CAPACITY: 222_000 },
                4: { NEXT_COST: 99_000_000_000, CAPACITY: 750_000 } // Maxed out
            },
            MESSAGES: {
                BANK_FULL: "{emoji_UI_Cross} Your bank is full, try upgrading it!",
                UPGRADE_CANT_AFFORD: "{emoji_UI_Cross} You cannot afford this upgrade!\nYou are missing **{amount} {mainCurrency_name} {mainCurrency_emoji}**\n### *Only {mainCurrency_name} outside the bank can be used to upgrade.*",
                UPGRADE_MAXED: "{emoji_UI_Cross} Your bank is already at maximum level!",
                DEPOSIT: "{emoji_UI_Plus} You deposited {amount} {mainCurrency_emoji} into the bank!\n- Deposited: **{newAmount} {mainCurrency_emoji}**",
                WITHDRAW: "{emoji_UI_Plus} You withdrew {amount} {mainCurrency_emoji} from the bank!\n- Deposited: **{newAmount} {mainCurrency_emoji}**",
                INVALID_AMOUNT: "{emoji_UI_Cross} Invalid amount specified!",
                VIEW: {
                    title: "🏦 Bank",
                    fields: [
                        { name: "Level", value: "**{level}**", inline: true },
                        { name: "Capacity", value: "**{capacity}**", inline: true },
                        { name: "Deposited", value: "**{deposited}**", inline: true },
                        { name: "Next Upgrade", value: "{next}", inline: false }
                    ]
                },
                UPGRADE_SUCCESS: {
                    title: "🏦 Upgrade Successful",
                    description: "{emoji_UI_Plus} Your bank has been upgraded!",
                    fields: [
                        { name: "New Level", value: "**{level}**", inline: true },
                        { name: "Capacity", value: "**{capacity}**", inline: true }
                    ],
                    footer: "Keep grinding 💰"
                }
            }
        },

        // -------------------
        // CRIME SECTION
        // -------------------


        HEIST: {
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
            },
            MESSAGES: {
                SUCCESS: {
                    title: "💰 Heist Successful!",
                    description: "{emoji_UI_Plus} Robbing succeeded!\nYou earned **{amount} {mainCurrency_name} {mainCurrency_emoji}**",
                    fields: [
                        { name: "Target", value: "{target}", inline: true },
                        { name: "Difficulty", value: "{difficulty}", inline: true }
                    ]
                },
                FAILED: {
                    title: "🚔 Heist Failed",
                    description: "{emoji_UI_Cross} Robbing failed...\nyou have been fined **{amount} {mainCurrency_name} {mainCurrency_emoji}**",
                    fields: [
                        { name: "Target", value: "{target}", inline: true },
                        { name: "Difficulty", value: "{difficulty}", inline: true }
                    ]
                }
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
                RECIEVED: "{mainCurrency_emoji} You received **{reward} {mainCurrency_name}**",
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
                "https://tenor.com/view/bonk-anime-bonk-anime-telepurte-gif-27011014",
                "https://tenor.com/view/bonk-gif-19823428",
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
                "https://tenor.com/view/hugtrip-gif-2490966530865073004",
                "https://tenor.com/view/chikako-hugging-otohime-for-the-first-and-she-confused-gif-313471048803276179",
            ]
        },

        SHIP: {
            MESSAGE: "{emoji} The love compatibility between **{name1}** and **{name2}** is **{percentage}%**!",
            OVERWRITE: {
                [656588010195910686]: 0,
            }
        },

        TOWER: {
            BRICKS_PER_LAYER: 50,
            MESSAGE: "🧱 You have added 1 brick to the tower!\n**Layer:** {layer}\n**Total bricks:** {size}\n*[Each layer requires {needed} bricks]*"
        }
    }
}
