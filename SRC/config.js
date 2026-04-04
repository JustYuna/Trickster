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
            ACTION_COOLDOWN: "1️⃣ You are on cooldown for `{command}`. Please wait {remainingSeconds} second(s).",
            ACTION_UNAVAILABLE: "This action is currently unavailable, please try later again.",
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

            Coin: "<:Coin:>1489783746835120329",
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
                    MAIN: { NAME: "Candy", EMOJI: content.EMOJIS.Candy },
                    SECONDARY: { NAME: "Cookies", EMOJI: content.EMOJIS.Cookie },
                },
                COLORS: {
                    MAIN: [250, 150, 0],
                    SECONDARY: [50, 75, 100],
                    ERROR: [250, 0, 0]
                },
                COMMANDS: {
                    HUNTING: {
                        MESSAGES: [
                            "You tracked a spooky ghost and found **{amount} {mainCurrency_name}** {mainCurrency_emoji} hidden in its sheets!",
                            "You braved the haunted woods and caught a shadow bat. You sold its wings for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You found a cursed scarecrow in the fields. It dropped **{amount} {mainCurrency_name}** {mainCurrency_emoji} while running away!",
                            "A vampire dropped its cape while fleeing from your garlic. You pawned it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You cornered a zombie in the graveyard and found **{amount} {mainCurrency_name}** {mainCurrency_emoji} stuffed in its pockets!",
                            "You outran a headless horseman and picked up **{amount} {mainCurrency_name}** {mainCurrency_emoji} he dropped near the bridge!",
                            "You harvested some glowing mushrooms guarded by a werewolf. They sold for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "A friendly banshee screamed a location of buried treasure. You dug up **{amount} {mainCurrency_name}** {mainCurrency_emoji}!"
                        ]
                    },
                    MINING: {
                        RESOURCES: [
                            { MATERIAL: "Pumpkin Shards", WEIGHT: 45, WORTH: 20, AMOUNT: { MIN: 5, MAX: 20 } },
                            { MATERIAL: "Grave Dirt", WEIGHT: 30, WORTH: 50, AMOUNT: { MIN: 4, MAX: 18 } },
                            { MATERIAL: "Brimstone", WEIGHT: 15, WORTH: 120, AMOUNT: { MIN: 2, MAX: 8 } },
                            { MATERIAL: "Cursed Gold", WEIGHT: 8, WORTH: 300, AMOUNT: { MIN: 1, MAX: 5 } },
                            { MATERIAL: "Soul Fragment", WEIGHT: 2, WORTH: 1500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        RESOURCES: [
                            { MATERIAL: "Soggy Bandages", WEIGHT: 40, WORTH: 25, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Eerie Eel", WEIGHT: 25, WORTH: 55, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Bonefish", WEIGHT: 15, WORTH: 110, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Ghost Carp", WEIGHT: 10, WORTH: 400, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Drowned King's Crown", WEIGHT: 5, WORTH: 1200, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Swamp Thing's Eye", WEIGHT: 3, WORTH: 2500, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Cursed Anchor", WEIGHT: 2, WORTH: 5000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        MESSAGES: [
                            "You baked a batch of **Spooky Eyeball Cupcakes**. The local monsters paid you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You stirred a giant cauldron of **Witch's Brew**. It tasted like swamp water, but you sold it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You cooked up some **Ghostly Garlic Pasta**. It kept the vampires away and earned you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You decorated a **Graveyard Cake** with chocolate dirt. A skeleton bought it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You fermented some **Spider-Cider**. A group of goblins loved it and tipped you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You grilled **Hellfire Peppers**. The spice was legendary, netting you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You served **Mummy-Wrapped Sausages** at the party. The guests paid **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You whipped up **Poison Ivy Salad** (the safe kind). A forest spirit gave you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!"
                        ]
                    },
                }
            },

            WINTER: {
                CURRENCY: {
                    MAIN: { NAME: "Candy", EMOJI: content.EMOJIS.Candy },
                    SECONDARY: { NAME: "Cookies", EMOJI: content.EMOJIS.Cookie },
                },
                COLORS: {
                    MAIN: [0, 100, 200],
                    SECONDARY: [50, 75, 100],
                    ERROR: [250, 0, 0]
                },
                COMMANDS: {
                    HUNTING: {
                        MESSAGES: [
                            "You hunted one of Santa's deer... you're on the naughty list but earned **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You spotted a rare Arctic Fox in the snow. You sold the photo for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You tracked a Yeti through the blizzard and found its stash of **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You found a lost Penguin and returned it to its colony. They rewarded you with **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You caught a Winter Owl delivering mail. It dropped a pouch containing **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You fended off a Snow Golem and gathered the **{amount} {mainCurrency_name}** {mainCurrency_emoji} it was protecting!",
                            "You followed a trail of peppermint and found **{amount} {mainCurrency_name}** {mainCurrency_emoji} under a frozen pine!",
                            "You won a snowball fight against an elf. Your prize was **{amount} {mainCurrency_name}** {mainCurrency_emoji}!"
                        ]
                    },
                    MINING: {
                        RESOURCES: [
                            { MATERIAL: "Snow", WEIGHT: 45, WORTH: 15, AMOUNT: { MIN: 10, MAX: 30 } },
                            { MATERIAL: "Permafrost Ice", WEIGHT: 30, WORTH: 45, AMOUNT: { MIN: 5, MAX: 20 } },
                            { MATERIAL: "Frozen Coal", WEIGHT: 15, WORTH: 100, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Glacial Crystal", WEIGHT: 8, WORTH: 350, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Ancient Mammoth Tusk", WEIGHT: 2, WORTH: 2000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        RESOURCES: [
                            { MATERIAL: "Ice Cube", WEIGHT: 40, WORTH: 10, AMOUNT: { MIN: 10, MAX: 25 } },
                            { MATERIAL: "Frozen Sardine", WEIGHT: 25, WORTH: 50, AMOUNT: { MIN: 3, MAX: 12 } },
                            { MATERIAL: "Arctic Char", WEIGHT: 15, WORTH: 150, AMOUNT: { MIN: 2, MAX: 5 } },
                            { MATERIAL: "Frost-Scale Trout", WEIGHT: 10, WORTH: 500, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Star-Nosed Mole (Wet)", WEIGHT: 5, WORTH: 1000, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Golden Snowflake", WEIGHT: 3, WORTH: 3000, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "The Polar Star", WEIGHT: 2, WORTH: 6000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        MESSAGES: [
                            "You spent the afternoon baking **Gingerbread Men**. They didn't run away, and you sold them for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You prepared a massive pot of **Peppermint Hot Cocoa**. The hikers paid you **{amount} {mainCurrency_name}** {mainCurrency_emoji} to warm up!",
                            "You roasted a **Honey-Glazed Ham** for the village feast. You were rewarded with **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You whipped up some **Cinnamon Sugar Churros**. The snowy festival crowd gave you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You boiled a pot of **Snow-Melt Soup**. Surprisingly tasty! You earned **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You crafted a **Fruitcake** so hard it could be a weapon. A collector bought it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You made **Maple Syrup Taffy** on the snow. The kids gave you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You served **Roasted Chestnuts** by an open fire. You earned **{amount} {mainCurrency_name}** {mainCurrency_emoji}!"
                        ]
                    },
                }
            },

            DEFAULT: {
                CURRENCY: {
                    MAIN: { NAME: "Coins", EMOJI: content.EMOJIS.Coin },
                    SECONDARY: { NAME: "Gems", EMOJI: content.EMOJIS.Gems },
                },
                COLORS: {
                    MAIN: [0, 250, 250],
                    SECONDARY: [250, 50, 160],
                    ERROR: [250, 0, 0]
                },
                COMMANDS: {
                    HUNTING: {
                        MESSAGES: [
                            "You went hunting in the woods and brought back a rabbit! You sold it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}.",
                            "You spent hours tracking a wild boar and finally took it down. Profit: **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You caught a rare pheasant in the meadow. A local chef bought it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You tracked a majestic stag through the valley. You earned **{amount} {mainCurrency_name}** {mainCurrency_emoji} for the trophy!",
                            "You successfully trapped a group of quails. The market paid you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You found a rare silver fox. After releasing it safely, you found a pouch of **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You hunted down some pesky coyotes for a farmer. He paid you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You spotted a golden eagle and followed it to a hidden nest of **{amount} {mainCurrency_name}** {mainCurrency_emoji}!"
                        ]
                    },
                    MINING: {
                        RESOURCES: [
                            { MATERIAL: "Stone", WEIGHT: 50, WORTH: 10, AMOUNT: { MIN: 10, MAX: 30 } },
                            { MATERIAL: "Iron", WEIGHT: 25, WORTH: 40, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Gold", WEIGHT: 15, WORTH: 150, AMOUNT: { MIN: 2, MAX: 6 } },
                            { MATERIAL: "Diamond", WEIGHT: 8, WORTH: 600, AMOUNT: { MIN: 1, MAX: 3 } },
                            { MATERIAL: "Netherite", WEIGHT: 2, WORTH: 2500, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    FISHING: {
                        RESOURCES: [
                            { MATERIAL: "Old Boot", WEIGHT: 40, WORTH: 5, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Cod", WEIGHT: 30, WORTH: 35, AMOUNT: { MIN: 5, MAX: 15 } },
                            { MATERIAL: "Salmon", WEIGHT: 15, WORTH: 80, AMOUNT: { MIN: 3, MAX: 10 } },
                            { MATERIAL: "Pufferfish", WEIGHT: 8, WORTH: 250, AMOUNT: { MIN: 1, MAX: 4 } },
                            { MATERIAL: "Tropical Fish", WEIGHT: 4, WORTH: 750, AMOUNT: { MIN: 1, MAX: 2 } },
                            { MATERIAL: "Enchanted Book", WEIGHT: 2, WORTH: 2000, AMOUNT: { MIN: 1, MAX: 1 } },
                            { MATERIAL: "Neptune's Trident", WEIGHT: 1, WORTH: 10000, AMOUNT: { MIN: 1, MAX: 1 } }
                        ]
                    },
                    COOKING: {
                        MESSAGES: [
                            "You attempted to bake some **Banana Bread** but ended up burning the kitchen. You still earned **{amount} {mainCurrency_name}** {mainCurrency_emoji} somehow...",
                            "You worked the line at a 5-star restaurant and served a perfect **Filet Mignon**. You earned **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You flipped **Blueberry Pancakes** at a busy breakfast diner. Your tips totaled **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You entered a local **Chili Cook-off** and took home second place! Your prize was **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You baked a fresh loaf of **Sourdough Bread**. The local bakery bought it for **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You prepared a large tray of **Lasagna** for a catering event. You earned **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You made gourmet **Street Tacos**. The lunch rush gave you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You whipped up a signature **Chocolate Soufflé**. A food critic tipped you **{amount} {mainCurrency_name}** {mainCurrency_emoji}!",
                            "You grilled some **Zesty Lemon Chicken**. Your friends paid you **{amount} {mainCurrency_name}** {mainCurrency_emoji} for the meal!"
                        ]
                    },
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
                // Admins
                "656588010195910686", // Snuv
            ],

            MESSAGES: {
                EXCLUDED: "You cannot gift candy to this user.",
                TO_BOT: "You cannot gift candy to bots.",
                SUCCESS: "Successfully gifted {amount} {mainCurrency_name} to {username}!"
            }
        },

        WORK_GENERAL: {
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
            ],
            RESPONSES: [
                "🔨 {bonker} [bonked]({gif}) {bonkee} into the next century!",
                "🌌 {bonker} [bonked]({gif}) {bonkee} so hard they saw stars.",
                "🏏 A wild {bonker} appeared and [bonked]({gif}) {bonkee}!",
                "🌕 {bonker} [bonked]({gif}) {bonkee} all the way to the moon.",
                "💫 {bonker} [bonked]({gif}) {bonkee} into another dimension!",
                "⚡ {bonker} [bonked]({gif}) {bonkee} at lightning speed!",
                "🎯 {bonker} [bonked]({gif}) {bonkee} with perfect accuracy!",
                "🪐 {bonker} [bonked]({gif}) {bonkee} straight into orbit!"
            ]
        },

        HUG: {
            GIFS: [
                "https://tenor.com/view/hug-anime-comfy-cute-gif-5299348585618231224",
                "https://tenor.com/view/alice-vt-gif-25825873",
                "https://tenor.com/view/chikako-hugging-otohime-for-the-first-and-she-confused-gif-313471048803276179",
                "https://tenor.com/view/yukon-child-form-embracing-ulquiorra-gif-15599442819011505520",
                "https://tenor.com/view/hugtrip-gif-2490966530865073004"
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
