// Pokemon history timeline data
const timelineEvents = [
    {
        "id": 1,
        "year": "1977",
        "date": "May, 1977",
        "title": "CoroCoro Comic No. 1",
        "desc": "The debut issue of CoroCoro Comic, the magazine that would later become the single most influential publication in Pokémon history. It established the platform that helped launch Pokémon into a national phenomenon through its manga, promotions, exclusive content, and the mail-order release of Pokémon Blue.",
        "tag": "Publication",
        "image": "https://file.garden/adiOU0v5YCgViiM6/Docu/7MtUsA",
        "metadata": {
            "Release Date": "May, 1977"
        }
    },
    {
        "id": 2,
        "year": "1982",
        "date": "December, 1982",
        "title": "Game Freak Magazine Issue No.1",
        "desc": "Marks the beginning of Game Freak and the partnership between Satoshi Tajiri and Ken Sugimori, laying the foundation for Pokémon.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/opSFM.png",
        "metadata": {
            "Release Date": "December, 1982",
            "Cover Date": "January, 1983"
        }
    },
    {
        "id": 3,
        "year": "1983",
        "date": "August, 1983",
        "title": "Login Magazine No. 8",
        "desc": "Gave Game Freak Magazine its first major public exposure, helping Tajiri build the connections that would eventually lead to Pokémon.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/2BeRW.png",
        "image2": "https://i.nuuls.com/Om-NG.png",
        "metadata": {
            "Release Date": "August, 1983",
            "Pages": "153"
        }
    },
    {
        "id": 4,
        "year": "1984",
        "date": "July, 1984",
        "title": "Weekly Shōnen Sunday Zōkan (Special Edition) No. 7",
        "desc": "Contains Super Girl Namuko, Ken Sugimori's first known published manga. It offers a rare look at the future Pokémon art director's early creative work before joining Game Freak",
        "tag": "Event",
        "image": "https://i.nuuls.com/U6d7O.png",
        "metadata": {
            "Release Date": "July, 1984"
        }
    },
    {
        "id": 5,
        "year": "1986",
        "date": "1986",
        "title": "Weekly Shōnen Sunday No. 44",
        "desc": "Contains Dragon Blaster, another early one-shot manga by Ken Sugimori published before Pokémon. It showcases Sugimori's developing artistic style",
        "tag": "Event",
        "image": "https://i.nuuls.com/6o2Vb.png",
        "metadata": {
            "Release Date": "1986"
        }
    },
    {
        "id": 6,
        "year": "1989",
        "date": "1989",
        "title": "Quinty Famicom Game",
        "desc": "Game Freak’s first video game, proving the studio could successfully develop commercial games and survive as a company.",
        "tag": "Game",
        "image": "https://i.nuuls.com/MHcru.png",
        "metadata": {
            "Release Date": "1989"
        }
    },
    {
        "id": 7,
        "year": "1994",
        "date": "July, 1994",
        "title": "Advertising Criticism No. 7",
        "desc": "Contains one of the earliest public hints at the secret project that would become Pokémon Red and Green.",
        "tag": "Event",
        "image": "https://i.nuuls.com/hNMCX.png",
        "image2": "https://i.nuuls.com/WUk-E.png",
        "image3": "https://i.nuuls.com/hE4rq.png",
        "image4": "https://i.nuuls.com/iwmjO.png",
        "image5": "https://i.nuuls.com/IlUhu.png",
        "image6": "https://i.nuuls.com/ad2eG.png",
        "image7": "https://i.nuuls.com/kUdGv.png",
        "image8": "https://i.nuuls.com/fp-yr.png",
        "image9": "https://i.nuuls.com/zt56x.png",
        "image10": "https://i.nuuls.com/60Zll.png",
        "image11": "https://i.nuuls.com/sVfHi.png",
        "image12": "https://i.nuuls.com/FtvQH.png",


        "metadata": {
            "Release Date": "July, 1994",
            "Pages": "54-63"
        }
    },
    {
        "id": 8,
        "year": "1995",
        "date": "February, 1995",
        "title": "Design Site No. 74",
        "desc": "Features an early public mention of the Game Boy RPG project that would become Pokémon Red and Green.",
        "tag": "Event",
        "image": "https://i.nuuls.com/86FMV.png",
        "image2": "https://i.nuuls.com/XLxF4.png",
        "image3": "https://i.nuuls.com/RbE16.png",
        "image4": "https://i.nuuls.com/bZ9qE.png",
        "image5": "https://i.nuuls.com/ZfEQE.png",
        "image6": "https://i.nuuls.com/OOt2M.png",


        "metadata": {
            "Release Date": "February, 1995",
            "Pages": "54-58"
        }
    },
    {
        "id": 9,
        "year": "1995",
        "date": "November 17, 1995",
        "title": "Weekly Famicom Magazine",
        "desc": "Contains the earliest known publicly sold Pokémon Game screenshot and print advertisement, giving fans their first look at the game.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/tM3hW.png",
        "image2": "https://i.nuuls.com/eh7Y4.png",
        "metadata": {
            "Release Date": "November 17, 1995",
            "Cover Date": "December 1, 1995",
            "Pages": "110"
        }
    },
    {
        "id": 10,
        "year": "1995",
        "date": "November 22, 1995",
        "title": "Famicom Space World Magazine",
        "desc": "Helped introduce Pokémon to attendees at Nintendo’s biggest event through some of its earliest published screenshots.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/tlI8r.png",
        "image2": "https://i.nuuls.com/61xKm.png",
        "image3": "https://i.nuuls.com/E_vQr.png",
        "metadata": {
            "Release Date": "November 22, 1995",
            "Pages": "10 & 28"
        }
    },
    {
        "id": 11,
        "year": "1995",
        "date": "November 22, 1995",
        "title": "Space World Flyer (Original Release Date)",
        "desc": "Widely considered the first publicly distributed Pokémon item and one of the earliest official showcases of Pokémon characters.",
        "tag": "Event",
        "image": "https://i.nuuls.com/huuWD.png",
        "metadata": {
            "Release Date": "November 22, 1995"
        }
    },
    {
        "id": 12,
        "year": "1995",
        "date": "November 27, 1995",
        "title": "Design Site No. 79",
        "desc": "Documented Pokémon’s final pre-release period and preserved Tajiri’s vision for the series just before launch. Possibly the first public image of Pikachu ever released.",
        "tag": "Event",
        "image": "https://i.nuuls.com/IylMr.png",
        "image2": "https://i.nuuls.com/fDY5K.png",
        "metadata": {
            "Release Date": "November 27, 1995",
            "Cover Date": "December 5, 1995",
            "Pages": "60"
        }
    },
    {
        "id": 13,
        "year": "1995",
        "date": "December 8, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 364",
        "desc": "One of the earliest magazine references to Pokémon, documenting the game's original planned December 21, 1995 release date before its delay.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/eBak_.png",
        "image2": "https://i.nuuls.com/tx8mq.png",
        "metadata": {
            "Release Date": "December 8, 1995",
            "Page": "201"
        }
    },
    {
        "id": 14,
        "year": "1995",
        "date": "December 15, 1995",
        "title": "Family Computer Magazine No. 25",
        "desc": "An early pre-release feature that introduced Pokémon's core concepts of catching, trading, and evolving monsters to the public before launch.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/aLUkE.png",
        "metadata": {
            "Release Date": "December 15, 1995",
            "Pages": "200"
        }
    },
    {
        "id": 15,
        "year": "1995",
        "date": "December 15, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 365",
        "desc": "Features some of the earliest official Pokémon artwork ever printed, making it one of the most important pre-launch Pokémon magazines.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/Y-c7b.png",
        "image2": "https://i.nuuls.com/PC89Z.png",
        "metadata": {
            "Release Date": "December 15, 1995",
            "Pages": "221"
        }
    },
    {
        "id": 16,
        "year": "1995",
        "date": "December 22, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 366",
        "desc": "One of the final magazine listings to advertise Pokémon's original December 21, 1995 release date before the game's postponement.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/M052H.png",
        "image2": "https://i.nuuls.com/ZrdYz.png",
        "metadata": {
            "Release Date": "December 22, 1995",
            "Pages": "177"
        }
    },
    {
        "id": 17,
        "year": "1995",
        "date": "December 29, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 367",
        "desc": "Contains the first known published announcement of Pokémon's delayed February 27, 1996 release date, marking the final major Pokémon magazine appearance of 1995.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/rKrMj.png",
        "image2": "https://i.nuuls.com/krIrw.png",
        "metadata": {
            "Release Date": "December 29, 1995",
            "Pages": "193"
        }
    },
    {
        "id": 18,
        "year": "1996",
        "date": "January, 1996",
        "title": "Red & Green Game Release Flyer (Revised Release Date)",
        "desc": "One of the earliest retail promotional pieces distributed after Pokémon’s launch delay was announced.",
        "tag": "Game",
        "image": "https://i.nuuls.com/-q8M6.png",
        "metadata": {
            "Release Date": "January, 1996"
        }
    },
    {
        "id": 19,
        "year": "1996",
        "date": "January 19, 1996",
        "title": "Dengeki RPG ’96 Special Issue",
        "desc": "Features one of the earliest major advertisements for Pokémon Red and Green on the back cover, marking the start of full-scale marketing.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/pG-Q1.png",
        "image2": "https://i.nuuls.com/fg7bk.png",
        "metadata": {
            "Release Date": "January 19, 1996",
            "Pages": "Back Cover"
        }
    },
    {
        "id": 20,
        "year": "1996",
        "date": "January 15, 1996",
        "title": "CoroCoro Comic No. 214",
        "desc": "The first CoroCoro issue to feature Pokémon, beginning the influential partnership that helped fuel the franchise’s rise.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/xM_cI.png",
        "image2": "https://i.nuuls.com/1IEcE.png",
        "metadata": {
            "Release Date": "January 15, 1996",
            "Cover Date": "February 15, 1996",
            "Pages": "64"
        }
    },
    {
        "id": 21,
        "year": "1996",
        "date": "January 25, 1996",
        "title": "New Game Design: Ideas for TV Game Production (1st Edition)",
        "desc": "Preserves Satoshi Tajiri’s game design philosophy immediately before Pokémon’s release.",
        "tag": "Game",
        "image": "https://i.nuuls.com/uME-7.png",
        "metadata": {
            "Release Date": "January 25, 1996"
        }
    },
    {
        "id": 22,
        "year": "1996",
        "date": "February, 1996",
        "title": "C&VG / Computer & Video Games #171",
        "desc": "Earliest confirmed English-language Pocket Monsters magazine reference found so far. UK magazine.",
        "tag": "Game",
        "image": "https://i.nuuls.com/CssNP.png",
        "metadata": {
            "Release Date": "February, 1996"
        }
    },
    {
        "id": 23,
        "year": "1996",
        "date": "February 23, 1996",
        "title": "Family Computer Magazine No. 5",
        "desc": "Provided major pre-release coverage that helped introduce and legitimize Pokémon before launch.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/3tjV2.png",
        "image2": "https://i.nuuls.com/A0Zz3.png",
        "image3": "https://i.nuuls.com/9A9GZ.png",
        "image4": "https://i.nuuls.com/J-KXe.png",
        "image5": "https://i.nuuls.com/LOnQo.png",
        "image6": "https://i.nuuls.com/hCVNh.png",
        "metadata": {
            "Release Date": "February 23, 1996",
            "Cover Date": "March 8, 1996",
            "Pages": "38-41"
        }
    },
    {
        "id": 24,
        "year": "1996",
        "date": "February 27, 1996",
        "title": "Pokémon Red & Green Games",
        "desc": "The original games in Japanese that launched the Pokémon franchise and introduced the world of Pokémon.",
        "tag": "Game",
        "image": "https://i.nuuls.com/j3lhz.png",
        "metadata": {
            "Release Date": "February 27, 1996"
        }
    },
    {
        "id": 25,
        "year": "1996",
        "date": "March, 1996",
        "title": "CoroCoro Bessatsu Special No. 4",
        "desc": "Pokémon’s first expansion into manga and serialized storytelling ever.",
        "tag": "Event",
        "image": "https://i.nuuls.com/lklDw.png",
        "metadata": {
            "Release Date": "March, 1996",
            "Cover Date": "April, 1996",
            "Pages": "187-193"
        }
    },
    {
        "id": 26,
        "year": "1996",
        "date": "March, 1996",
        "title": "GameFan Vol. 4 #3",
        "desc": "Earliest confirmed U.S. magazine reference to Pokémon found to date..",
        "tag": "Game",
        "image": "https://i.nuuls.com/miYNy.png",
        "metadata": {
            "Release Date": "March, 1996",
            "Pages": "92"
        }
    },
    {
        "id": 27,
        "year": "1996",
        "date": "March 8, 1996",
        "title": "Weekly Famitsu Magazine No. 365",
        "desc": "One of the earliest major reviews of Pokémon, helping generate momentum during its early sales period.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/LnQ4I.png",
        "image2": "https://i.nuuls.com/nC-cU.png",
        "metadata": {
            "Release Date": "March 8, 1996",
            "Pages": "29"
        }
    },
    {
        "id": 28,
        "year": "1996",
        "date": "February 15, 1996",
        "title": "CoroCoro Comic No. 215",
        "desc": "Introduced readers to Pokémon Red & Green right at launch, explaining the core formula, choosing starters, catching Pokémon, completing the Pokédex, battling, trading, and version differences",
        "tag": "Publication",
        "image": "https://i.nuuls.com/ijFN6.png",
        "image2": "https://i.nuuls.com/S_Fng.png",
        "image3": "https://i.nuuls.com/WZ3m3.png",
        "metadata": {
            "Release Date": "February 15, 1996",
            "Cover Date": "March 15, 1996"
        }
    },
    {
        "id": 29,
        "year": "1996",
        "date": "March 8, 1996",
        "title": "Marukatsu Super Famicom No. 4",
        "desc": "Released 11-days after the Pokemon Red & Green Launch, includes a two page spread with a \"How to Play Pokémon Red & Green\" beginner's guide.",
        "tag": "Event",
        "image": "https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png",
        "metadata": {
            "Release Date": "March 8, 1996"
        }
    },
    {
        "id": 30,
        "year": "1996",
        "date": "March 15, 1996",
        "title": "CoroCoro Comic No. 216",
        "desc": "Helped new players learn Pokémon through one of the franchise’s earliest strategy guides.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/nMcmh.png",
        "image2": "https://i.nuuls.com/B9ed-.png",
        "image3": "https://i.nuuls.com/Dzmr_.png",
        "metadata": {
            "Release Date": "March 15, 1996",
            "Cover Date": "April 15, 1996"
        }
    },
    {
        "id": 31,
        "year": "1996",
        "date": "April 5, 1996",
        "title": "Illustrated Book of Pocket Monsters",
        "desc": "One of the first dedicated Pokémon books, expanding the franchise beyond the video games.",
        "tag": "Event",
        "image": "https://i.nuuls.com/nlsH4.png",
        "metadata": {
            "Release Date": "April 5, 1996"
        }
    },
    {
        "id": 32,
        "year": "1996",
        "date": "April 5, 1996",
        "title": "Family Computer Magazine No. 7",
        "desc": "Captures the moment Pokémon evolved from a new release into a rapidly growing player-driven phenomenon through dedicated articles and art.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/D5nD1.png",
        "image2": "https://i.nuuls.com/sEP-_.png",
        "image3": "https://i.nuuls.com/5OSVS.png",
        "image4": "https://i.nuuls.com/FiTgF.png",
        "image5": "https://i.nuuls.com/eUHT6.png",
        "image6": "https://i.nuuls.com/cY2C4.png",
        "image7": "https://i.nuuls.com/ZZi4n.png",
        "image8": "https://i.nuuls.com/g4QJB.png",
        "image9": "https://i.nuuls.com/haU6Y.png",

        "metadata": {
            "Release Date": "April 5, 1996",
            "Pages": "58-61, 96-98, & 128"
        }
    },
    {
        "id": 33,
        "year": "1996",
        "date": "April 10, 1996",
        "title": "Pokémon Red, Green, & Blue Nintendo Official Gameboy Guide Book",
        "desc": "One of the earliest official Pokémon books and first standalone game guide book, helping establish strategy guides and companion publications as a key part of the growing franchise.",
        "tag": "Game",
        "image": "https://i.nuuls.com/JRQKa.png",
        "metadata": {
            "Release Date": "April 10, 1996"
        }
    },
    {
        "id": 34,
        "year": "1996",
        "date": "April 15, 1996",
        "title": "CoroCoro Comic No. 217",
        "desc": "Introduced Mew through a giveaway campaign, proving Pokémon’s breakout popularity and creating the legend of rare event Pokémon.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/4A0Fp.png",
        "image2": "https://i.nuuls.com/NFk5A.png",
        "metadata": {
            "Release Date": "April 15, 1996",
            "Cover Date": "May 15, 1996",
            "Pages": "60"
        }
    },
    {
        "id": 35,
        "year": "1996",
        "date": "May 15, 1996",
        "title": "CoroCoro Comic No. 218",
        "desc": "Shows Pokémon steadily gaining momentum through expanding media and merchandise coverage.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/sbQEg.png",
        "image2": "https://i.nuuls.com/P95uu.png",
        "metadata": {
            "Release Date": "May 15, 1996",
            "Cover Date": "June 15, 1996",
            "Pages": "39, After 361"
        }
    },
    {
        "id": 36,
        "year": "1996",
        "date": "June 28, 1996",
        "title": "Family Computer Magazine No. 13",
        "desc": "Features an early interview with Tajiri and Sugimori as Pokémon began transforming into a national phenomenon.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/i6DKp.png",
        "image2": "https://i.nuuls.com/zz5Fj.png",
        "image3": "https://i.nuuls.com/SarrK.png",
        "image4": "https://i.nuuls.com/eatkk.png",
        "metadata": {
            "Release Date": "June 28, 1996",
            "Pages": "56-58"
        }
    },
    {
        "id": 37,
        "year": "1996",
        "date": "June 28, 1996",
        "title": "Weekly Famitsu Magazine No. 394",
        "desc": "Article documenting how collecting, trading, and word-of-mouth helped drive Pokémon’s early success.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/5Q-OW.png",
        "image2": "https://i.nuuls.com/I5IqC.png",
        "image3": "https://i.nuuls.com/2ZpFI.png",
        "metadata": {
            "Release Date": "June 28, 1996",
            "Pages": "58-59"
        }
    },
    {
        "id": 38,
        "year": "1996",
        "date": "~June 1996",
        "title": "Pokémon Club Part One",
        "desc": "Likely the earliest officially licensed Pokémon toy, sticker and food, released before the TCG boom.",
        "tag": "Event",
        "image": "https://i.nuuls.com/6NbuO.png",
        "metadata": {
            "Release Date": "~June 1996"
        }
    },
    {
        "id": 39,
        "year": "1996",
        "date": "June 15, 1996",
        "title": "CoroCoro Comic No. 219",
        "desc": "Shows Pokémon’s rapid expansion from a video game into a broader merchandise and media franchise.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/3F9Xw.png",
        "metadata": {
            "Release Date": "June 15, 1996",
            "Cover Date": "July 15, 1996",
            "Pages": "413"
        }
    },
    {
        "id": 40,
        "year": "1996",
        "date": "June, 1996",
        "title": "Pokémon Capsule Figures",
        "desc": "Among the earliest Pokémon toys, bringing the franchise into physical collectible form.",
        "tag": "Merchandise",
        "image": "https://i.nuuls.com/qk2bm.png",
        "metadata": {
            "Release Date": "June, 1996"
        }
    },
    {
        "id": 41,
        "year": "1996",
        "date": "~July, 1996",
        "title": "Prototype Pokémon TCG Cards",
        "desc": "Unreleased Prototypes of Pokémon TCG cards that represent the earliest known stage of the Trading Card Game's development.",
        "tag": "Cards",
        "image": "https://i.nuuls.com/Opwaa.png",
        "image2": "https://i.nuuls.com/JDTco.png",
        "metadata": {
            "Release Date": "~July, 1996"
        }
    },
    {
        "id": 42,
        "year": "1996",
        "date": "July 15, 1996",
        "title": "CoroCoro Comic No. 220",
        "desc": "Featured the first public preview of prototype Pokémon Trading Card Game cards.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/8yG-U.png",
        "image2": "https://i.nuuls.com/zShpF.png",
        "metadata": {
            "Release Date": "July 15, 1996",
            "Cover Date": "August 15, 1996",
            "Pages": "19-21"
        }
    },
    {
        "id": 43,
        "year": "1996",
        "date": "~July-August, 1996",
        "title": "Pokémon Snack Sticker Part One",
        "desc": "Demonstrates how quickly Pokémon expanded into mainstream consumer products after launch.",
        "tag": "Merchandise",
        "image": "https://i.nuuls.com/uBAaI.png",
        "metadata": {
            "Release Date": "~July-August, 1996"
        }
    },
    {
        "id": 44,
        "year": "1996",
        "date": "August 1, 1996",
        "title": "Pokémon 4Koma DX Manga",
        "desc": "One of the earliest standalone Pokémon manga books, expanding the franchise beyond games and into printed comedy content",
        "tag": "Manga",
        "image": "https://i.nuuls.com/VQ1mE.png",
        "metadata": {
            "Release Date": "August 1, 1996"
        }
    },
    {
        "id": 45,
        "year": "1996",
        "date": "August, 1996",
        "title": "Famitsu Bros. Vol. 4, Issue 9",
        "desc": "Contains the only known Pokémon manga illustrated by Ken Sugimori, making it a unique crossover between Pokémon's lead artist and the franchise's early print history. Advertised a Mew capture event.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/p_-7Y.png",
        "metadata": {
            "Release Date": "August, 1996",
            "Cover Date": "September, 1996"
        }
    },
    {
        "id": 46,
        "year": "1996",
        "date": "August 15, 1996",
        "title": "CoroCoro Comic No. 221",
        "desc": "Helped introduce and prepare fans for the launch of the Pokémon Trading Card Game.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/ViFGD.png",
        "image2": "https://i.nuuls.com/LLOuU.png",
        "metadata": {
            "Release Date": "August 15, 1996",
            "Cover Date": "September 15, 1996",
            "Pages": "150"
        }
    },
    {
        "id": 47,
        "year": "1996",
        "date": "July-August, 1996",
        "title": "Pokémon Bandai Carddass Jumbo Cards & Stickers",
        "desc": "Among the earliest Pokémon card-style collectibles released before the main Carddass sets (not TCG).",
        "tag": "Cards",
        "image": "https://i.nuuls.com/yhTSP.png",
        "image2": "https://i.nuuls.com/HXEvq.png",
        "image3": "https://i.nuuls.com/FJpUr.png",
        "image4": "https://i.nuuls.com/dCdlW.png",
        "image5": "https://i.nuuls.com/pkICv.png",
        "metadata": {
            "Release Date": "July-August, 1996"
        }
    },
    {
        "id": 48,
        "year": "1996",
        "date": "September, 1996",
        "title": "Famitsu Bros. Vol. 4, Issue 10",
        "desc": "Includes a Pokémon manga, \"Purin's Great Adventure,\" and teases a sequel on the way. It captures Pokémon's earliest hype, just months after Red/Green launched, right as the franchise began its rise into a global phenomenon.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/g8vBP.png",
        "metadata": {
            "Release Date": "September, 1996",
            "Cover Date": "October, 1996"
        }
    },
    {
        "id": 49,
        "year": "1996",
        "date": "~September, 1996",
        "title": "Pokémon Tomy Batomen Discs",
        "desc": "Pokémon toy collectible game that helped establish the franchise's presence in the toy market before the launch of the Pokémon TCG.",
        "tag": "Event",
        "image": "https://i.nuuls.com/8sxLn.png",
        "metadata": {
            "Release Date": "~September, 1996"
        }
    },
    {
        "id": 50,
        "year": "1996",
        "date": "August 23 & September 6, 1996 Combined Issue",
        "title": "Famimaga 64 Magazine No. 4-5",
        "desc": "Contains one of the earliest public discussions of the sequel project that became Pokémon Gold and Silver.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/FRu6V.png",
        "image2": "https://i.nuuls.com/M9ARA.png",
        "image3": "https://i.nuuls.com/AY62j.png",
        "image4": "https://i.nuuls.com/k6inQ.png",
        "metadata": {
            "Release Date": "August 23 & September 6, 1996 Combined Issue",
            "Pages": "30-31, & 33"
        }
    },
    {
        "id": 51,
        "year": "1996",
        "date": "July-September, 1996",
        "title": "Pokémon Bandai Carddass Jumbo Chip Shooter",
        "desc": "Pokémon rapidly expanded further into experimental merchandise beyond video games. First Holo/Prism Pokémon item ever released (Mew).",
        "tag": "Cards",
        "image": "https://i.nuuls.com/MUWM3.png",
        "metadata": {
            "Release Date": "July-September, 1996"
        }
    },
    {
        "id": 52,
        "year": "1996",
        "date": "September 15, 1996",
        "title": "CoroCoro Comic No. 222",
        "desc": "Many pages portraying the franchise's rapid growth across games, cards, and collectibles during 1996.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/wIksU.png",
        "image2": "https://i.nuuls.com/CVxdc.png",
        "image3": "https://i.nuuls.com/YJz_2.png",
        "image4": "https://i.nuuls.com/Feg-4.png",
        "image5": "https://i.nuuls.com/p1-Ul.png",
        "image6": "https://i.nuuls.com/VLq7V.png",
        "image7": "https://i.nuuls.com/N2K8k.png",
        "image8": "https://i.nuuls.com/kUZ66.png",
        "metadata": {
            "Release Date": "September 15, 1996",
            "Cover Date": "October 15, 1996",
            "Pages": "35, 154-155, 168, 176, 427, & 494"
        }
    },
    {
        "id": 53,
        "year": "1996",
        "date": "September 15, 1996",
        "title": "Ivy Pikachu Glossy TCG ‘Marketing’ Card (Correct Illustrator)",
        "desc": "The first printing of a TCG Pikachu Card used for marketing imagery in CoroCoro comics.",
        "tag": "Cards",
        "image": "https://i.nuuls.com/C1nRb.png",
        "metadata": {
            "Production Date": "September 15, 1996"
        }
    },
    {
        "id": 54,
        "year": "1996",
        "date": "Part 1 - September 20-30, 1996, Part 2 - October 1-10, 1996",
        "title": "Bandai Carddass Pocket Monsters Cards (Part 1 & 2)",
        "desc": "The first standard-sized Pokémon cards ever released, predating most later card products (not TCG).",
        "tag": "Cards",
        "image": "https://i.nuuls.com/CQCtF.png",
        "image2": "https://i.nuuls.com/So8P2.png",
        "metadata": {
            "Release Date": "Part 1 - September 20-30, 1996, Part 2 - October 1-10, 1996"
        }
    },
    {
        "id": 55,
        "year": "1996",
        "date": "Mid-October, 1996",
        "title": "Pokémon Kids Figures & Cards",
        "desc": "One of the earliest major toy lines that brought Pokémon from the screen into children’s hands (not TCG).",
        "tag": "Cards",
        "image": "https://i.nuuls.com/IRDoz.png",
        "image2": "https://i.nuuls.com/CO8ne.png",
        "metadata": {
            "Release Date": "Mid-October, 1996"
        }
    },
    {
        "id": 56,
        "year": "1996",
        "date": "October 15, 1996",
        "title": "CoroCoro Comic No. 223 (Glossy Ivy Pikachu & Jigglypuff TCG Cards)",
        "desc": "Introduced the first official Pokémon TCG promo cards ever and marked the beginning of Pokémon card collecting.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/uJrwd.png",
        "image2": "https://i.nuuls.com/6Nf8O.png",
        "image3": "https://i.nuuls.com/XYCuE.png",
        "image4": "https://i.nuuls.com/jcdMI.png",
        "image5": "https://i.nuuls.com/55Vt1.png",
        "image6": "https://i.nuuls.com/W0XWY.png",
        "image7": "https://i.nuuls.com/SOkx6.png",
        "image8": "https://i.nuuls.com/zQJM4.png",
        "metadata": {
            "Release Date": "October 15, 1996",
            "Cover Date": "November 15, 1996"
        }
    },
    {
        "id": 57,
        "year": "1996",
        "date": "October 20, 1996",
        "title": "Pokémon TCG Base Set (No-Rarity First Print)",
        "desc": "The first Pokémon Trading Card Game set release and the foundation of the global Pokémon card hobby.",
        "tag": "Event",
        "image": "https://i.nuuls.com/YC3_u.png",
        "metadata": {
            "Release Date": "October 20, 1996"
        }
    },
    {
        "id": 58,
        "year": "1996",
        "date": "November 1996",
        "title": "Amada Pokémon Hyper Sticker Collection",
        "desc": "An early mass-market sticker collectible that reflects Pokémon’s explosive merchandise growth in 1996.",
        "tag": "Merchandise",
        "image": "https://i.nuuls.com/H8FGU.png",
        "metadata": {
            "Release Date": "November 1996"
        }
    },
    {
        "id": 59,
        "year": "1996",
        "date": "October-November, 1996",
        "title": "Pocket Monsters Bandai Gashapon Encyclopedia & Cards",
        "desc": "One of the first physical adaptations of the Pokédex, transforming Pokémon data into collectible mini booklets and accordion cards distributed through capsule machines.",
        "tag": "Cards",
        "image": "https://i.nuuls.com/nPyGV.png",
        "image2": "https://i.nuuls.com/8-dlH.png",
        "metadata": {
            "Release Date": "October-November, 1996"
        }
    },
    {
        "id": 60,
        "year": "1996",
        "date": "Late 1996",
        "title": "Pokémon Club Part Two",
        "desc": "Second version of the early officially licensed Pokémon toy, sticker and food.",
        "tag": "Event",
        "image": "https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png",
        "metadata": {
            "Release Date": "Late 1996"
        }
    },
    {
        "id": 61,
        "year": "1996",
        "date": "~October-November, 1996",
        "title": "Pokémon Battle Bandai Toy",
        "desc": "One of the earliest Pokémon products to combine collectible figures with a physical battle system, adapting the game's combat mechanics into a tabletop-style toy experience.",
        "tag": "Merchandise",
        "image": "https://i.nuuls.com/FBzpf.png",
        "metadata": {
            "Release Date": "~October-November, 1996"
        }
    },
    {
        "id": 62,
        "year": "1996",
        "date": "November, 1996",
        "title": "Famitsu Bros. Vol. 4, Issue 12",
        "desc": "Includes a 16-page secret techniques/strategy guide on Pocket Monsters (Pokémon Red/Green)",
        "tag": "Publication",
        "image": "https://i.nuuls.com/74Fm6.png",
        "metadata": {
            "Release Date": "November, 1996",
            "Cover Date": "December, 1996"
        }
    },
    {
        "id": 63,
        "year": "1996",
        "date": "December, 1996",
        "title": "Pokémon Poker Playing Cards (Red & Green Twin Pack)",
        "desc": "One of the earliest premium Pokémon collectibles to feature Ken Sugimori's original artwork outside the video games.",
        "tag": "Cards",
        "image": "https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png",
        "metadata": {
            "Release Date": "December, 1996"
        }
    },
    {
        "id": 64,
        "year": "1996",
        "date": "Late 1996",
        "title": "Pocket Monsters Manga/Tankoban (Reprint of first Pokemon chapter from CoroCoro)",
        "desc": "The first standalone Pokémon manga volume, preserving the franchise’s earliest manga stories from CoroCoro in book form.",
        "tag": "Manga",
        "image": "https://i.nuuls.com/nP286.png",
        "metadata": {
            "Release Date": "Late 1996"
        }
    },
    {
        "id": 65,
        "year": "1996",
        "date": "Late 1996",
        "title": "Pokémon Trainer Jumbo Card Banpresto Set",
        "desc": "Capture Pokémon’s early merchandise era, before the brand’s look was fully standardized. They show Pokémon quickly expanding beyond the Game Boy into large-format display collectibles using original game-era art and Japanese character names.",
        "tag": "Cards",
        "image": "https://i.nuuls.com/-7h6t.png",
        "metadata": {
            "Release Date": "Late 1996"
        }
    },
    {
        "id": 66,
        "year": "1996",
        "date": "Late 1996-1997",
        "title": "Pokémon Blue (Mail-Order Exclusive)",
        "desc": "Introduced the concept of an enhanced and exclusive Pokémon version, influencing future re-releases.",
        "tag": "Event",
        "image": "https://i.nuuls.com/TKVqT.png",
        "metadata": {
            "Release Date": "Late 1996-1997"
        }
    },
    {
        "id": 67,
        "year": "1997",
        "date": "January, 1997",
        "title": "Monthly Shōnen Gangan",
        "desc": "One of the earliest non-CoroCoro Pokémon manga publications.",
        "tag": "Event",
        "image": "https://i.nuuls.com/IBRwM.png",
        "metadata": {
            "Release Date": "January, 1997",
            "Cover Date": "February, 1997"
        }
    },
    {
        "id": 68,
        "year": "1997",
        "date": "January 15, 1997",
        "title": "CoroCoro Comic No. 228",
        "desc": "Cover Date, February 15, 1997 Contains the first images of Ash and Pikachu from the anime.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/h_9Nj.png",
        "metadata": {
            "Release Date": "January 15, 1997"
        }
    },
    {
        "id": 69,
        "year": "1997",
        "date": "February, 1997",
        "title": "Second Grade Elementary School Magazine",
        "desc": "Debuts the new Pokémon Miracle World manga serial, arriving two-months before the Pokémon anime's April 1997 launch. It captures the franchise on the cusp of going from a hit game into a global phenomenon during the final pre-anime window of time.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/zJJU0.png",
        "metadata": {
            "Release Date": "February, 1997"
        }
    },
    {
        "id": 70,
        "year": "1997",
        "date": "April, 1997",
        "title": "CoroCoro Bessatsu Special #106 No. 4",
        "desc": "Contains the debut of Toshihiro Ono’s manga Dengeki! Pikachu, one of the earliest and most widely recognized Pokémon manga adaptations based on the anime.",
        "tag": "Event",
        "image": "https://i.nuuls.com/Bj-uK.png",
        "metadata": {
            "Cover Date": "May, 1997",
            "Release Date": "April, 1997"
        }
    },
    {
        "id": 71,
        "year": "1997",
        "date": "April, 1997",
        "title": "Shogaku Yonensei (Elementary School Fourth Grade) Magazine",
        "desc": "Features the debut of the ‘Pokémon Adventures’ manga. The longest running Pokémon manga ever.",
        "tag": "Publication",
        "image": "https://i.nuuls.com/pIwY1.png",
        "metadata": {
            "Release Date": "April, 1997"
        }
    },
    {
        "id": 72,
        "year": "1997",
        "date": "July, 1997",
        "title": "Nintendo Power Vol. 98",
        "desc": "First substantial U.S. magazine feature. Feature on Pocket Monsters before the U.S. launch.",
        "tag": "Event",
        "image": "https://i.nuuls.com/eG6DU.png",
        "metadata": {
            "Release Date": "July, 1997"
        }
    },
    {
        "id": 73,
        "year": "1997",
        "date": "September, 1997",
        "title": "Nakayoshi “PiPiPi”",
        "desc": "One of the earliest Pokémon manga created specifically for a young female audience, helping expand Pokémon beyond games and shōnen media by introducing a romance- and comedy-focused interpretation of the franchise.",
        "tag": "Event",
        "image": "https://i.nuuls.com/w1qx8.png",
        "metadata": {
            "Release Date": "September, 1997"
        }
    },
    {
        "id": 74,
        "year": "1998",
        "date": "Summer, 1998",
        "title": "A Sneak Peek at Pokémon VHS",
        "desc": "Earliest known official U.S. Pokémon item. Promotional VHS released in Toys R Us. Varying stickers to indicate which local broadcast station Pokemon would debut on.",
        "tag": "Event",
        "image": "https://i.nuuls.com/7gjeT.png",
        "metadata": {
            "Release Date": "Summer, 1998"
        }
    },
    {
        "id": 75,
        "year": "1998",
        "date": "August, 1998",
        "title": "Pokémon Power Vol. 1 / Nintendo Power Vol. 111",
        "desc": "",
        "tag": "Manga",
        "image": "https://i.nuuls.com/1mbC8.png",
        "metadata": {
            "Release Date": "August, 1998",
            "First major dedicated U.S. Pokémon magazine insert. First issue of the six-part “Pokémon Power": "Gotta Catch 'Em All!” insert series; pre-U.S. game release."
        }
    },
    {
        "id": 76,
        "year": "1998",
        "date": "September 28, 1998",
        "title": "Pokémon Red Version & Pokémon Blue Version",
        "desc": "First Pokémon games released in North America.",
        "tag": "Game",
        "image": "https://i.nuuls.com/yIfgu.png",
        "image2": "https://i.nuuls.com/PzaaN.png",
        "metadata": {
            "Release Date": "September 28, 1998"
        }
    },
    {
        "id": 77,
        "year": "1998",
        "date": "November, 1998",
        "title": "Pokémon: The Electric Tale of Pikachu #1",
        "desc": "First standalone U.S. Pokémon comic by Viz Comics.",
        "tag": "Event",
        "image": "https://i.nuuls.com/P-Jf1.png",
        "metadata": {
            "Release Date": "November, 1998"
        }
    },
    {
        "id": 78,
        "year": "1998",
        "date": "November 15, 1998",
        "title": "KFC Pokémon Card Game Cards",
        "desc": "Early English Pokémon cards. Seven-card English non-TCG set: Ivysaur, Charizard, Pikachu, Onix, Scyther, Snorlax, and Dragonite.",
        "tag": "Game",
        "image": "https://i.nuuls.com/XYGok.png",
        "image2": "https://i.nuuls.com/ezc3N.png",
        "metadata": {
            "Release Date": "November 15, 1998",
        }
    },
    {
        "id": 79,
        "year": "1998",
        "date": "November 1998",
        "title": "KFC Pokémon Kids' Meal Toys",
        "desc": "Early English Pokémon toys: Treasure Keeper, Tattoos, Plushies, Water Squirter, Puzzle Blocks and Monster Matcher.",
        "tag": "Merchandise",
        "image": "https://i.nuuls.com/m8sB5.png",
        "metadata": {
            "Release Date": "November 1998",
        }
    },
    {
        "id": 80,
        "year": "1998",
        "date": "December 1998",
        "title": "WotC Pokémon Demo Game Pack",
        "desc": "First official English Pokémon TCG distribution. Contains specific Shadowless cards.",
        "tag": "Game",
        "image": "https://i.nuuls.com/mqjGh.png",
        "metadata": {
            "Release Date": "December 1998"
        }
    },
    {
        "id": 81,
        "year": "1999",
        "date": "January 1, 1999",
        "title": "Pokémon Song Best Collection CD English Pikachu",
        "desc": "English Pikachu Card included with a Japanese CD product. Not a U.S. release.",
        "tag": "Event",
        "image": "https://i.nuuls.com/R526B.png",
        "image2": "https://i.nuuls.com/GCuPp.png",
        "metadata": {
            "Release Date": "January 1, 1999"
        }
    },
    {
        "id": 82,
        "year": "1999",
        "date": "January 9, 1999",
        "title": "English Pokémon Base Set 1st Edition (ADD CHARIZARD IMAGE)",
        "desc": "First major English retail Pokémon TCG release era.",
        "tag": "Event",
        "image": "https://i.nuuls.com/H3Q0G.png",
        "image2": "https://i.nuuls.com/knc2g.png",
        "image3": "https://i.nuuls.com/FiKIK.png",
        "image4": "https://i.nuuls.com/aYg1a.png",
        "metadata": {
            "Release Date": "January 9, 1999"
        }
    }
];

/* ============================================================
   VERTICAL TIMELINE ENGINE v10
   No JS positioning math needed. Fully CSS grid and flexbox.
   ============================================================ */

let placedEvents = [];

function renderTimeline() {
    placedEvents = [];

    // Group events by year
    const byYear = {};
    timelineEvents.forEach(ev => {
        if (!byYear[ev.year]) byYear[ev.year] = [];
        byYear[ev.year].push(ev);
    });

    const content = document.getElementById('vt-content');
    if (!content) return;

    let html = '';

    let navHtml = '';

    // Get min/max years
    const activeYears = Object.keys(byYear).map(y => parseInt(y)).sort((a, b) => a - b);
    const minYear = activeYears[0];
    const maxYear = activeYears[activeYears.length - 1];

    for (const year of activeYears) {
        navHtml += `<button class="vt-year-btn" data-year="${year}">${year}</button>`;
    }

    for (let year = minYear; year <= maxYear; year++) {
        const events = byYear[year] || [];
        html += `
            <div class="vt-year-section" id="year-${year}" data-year="${year}">
                <div class="vt-year-rail">
                    <div class="vt-year-sticky">
                        <h2 class="vt-year-title">${year}</h2>
                    </div>
                </div>
                <div class="vt-events-list">
        `;

        events.forEach(ev => {
            const idx = placedEvents.length;
            html += `
                <div class="vt-event-row">
                    ${events.length > 1 ? `
                    <div class="vt-event-date-col">
                        <span class="vt-event-date">${ev.date}</span>
                    </div>
                    ` : ''}
                    <div class="vt-event-card-col">
                        <div class="vt-card" data-index="${idx}">
                            <span class="vt-card-icon"><img src="${ev.image || 'https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png'}" alt="" style="width: 3em; height: auto; max-height: 4em; object-fit: cover; border-radius: 0.15em; box-shadow: 0 8px 20px rgba(0,0,0,0.4);"></span>
                            <div class="vt-card-info">
                                <h3 class="vt-card-title">${ev.title}</h3>
                                <p class="vt-card-desc">${ev.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            placedEvents.push(ev);
        });

        html += `
                </div>
            </div>
        `;
    }

    content.innerHTML = html;

    // Attach click events for cards
    document.querySelectorAll('.vt-card').forEach(card => {
        card.addEventListener('click', function () {
            openModal(this.getAttribute('data-index'));
        });
    });

    // Setup HUD Navigation
    const yearStrip = document.getElementById('vt-year-strip');
    if (yearStrip) {
        yearStrip.innerHTML = navHtml;
        document.querySelectorAll('.vt-year-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const year = this.getAttribute('data-year');
                const target = document.getElementById('year-' + year);
                if (target) {
                    const y = target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            });
        });
    }
}

function updateScrollProgress() {
    const progress = document.getElementById('vt-progress');
    if (progress) {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        let pct = 0;
        if (docHeight > winHeight) {
            pct = (scrollTop / (docHeight - winHeight)) * 100;
        }
        progress.style.height = pct + '%';
    }

    // Highlight active year in HUD
    const groups = document.querySelectorAll('.vt-year-section');
    let activeYear = null;
    const triggerPoint = window.innerHeight * 0.4; // 40% from top

    groups.forEach(group => {
        const rect = group.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            activeYear = group.getAttribute('data-year');
        }
    });

    if (!activeYear && groups.length > 0) {
        // Fallback if between groups
        activeYear = groups[0].getAttribute('data-year');
        groups.forEach(group => {
            if (group.getBoundingClientRect().top <= triggerPoint) {
                activeYear = group.getAttribute('data-year');
            }
        });
    }

    if (activeYear) {
        document.querySelectorAll('.vt-year-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-year') === activeYear);
        });
        const activeBtn = document.querySelector('.vt-year-btn.active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
        }
    }
}

function openModal(idx) {
    const ev = placedEvents[idx];
    const modal = document.getElementById('vt-modal');
    const body = document.getElementById('vt-modal-body');
    if (!modal || !body || !ev) return;

    if (ev.isGroup) {
        let groupHtml = '';
        ev.events.forEach(subEv => {
            let metaRows = '';
            if (subEv.metadata) {
                Object.keys(subEv.metadata).forEach(function (k) {
                    metaRows += '<li class="vt-meta-item"><span class="vt-meta-label">' + k + '</span><span class="vt-meta-value">' + subEv.metadata[k] + '</span></li>';
                });
            }
            groupHtml += `
                <div style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1rem;">
                        <span style="font-size: 3.5rem;"><img src="${subEv.image || 'https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png'}" alt="" style="width: 2.5em; height: 3.5em; object-fit: cover; border-radius: 0.15em; box-shadow: 0 8px 20px rgba(0,0,0,0.4);"></span>
                        <div>
                            <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin: 0.2rem 0; color: var(--text-primary);">${subEv.title}</h3>
                        </div>
                    </div>
                    <p style="color: var(--text-muted); line-height: 1.7; font-size: 1.1rem; margin-bottom: 1.5rem;">${subEv.desc}</p>
                    ${metaRows ? '<ul class="vt-modal-meta" style="margin: 0;">' + metaRows + '</ul>' : ''}
                </div>
            `;
        });
        body.innerHTML = `
            <div style="margin-bottom: 3rem; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 2rem;">
                <h2 style="font-family: var(--font-display); font-size: 4rem; color: var(--accent-warm); line-height: 1; margin: 0;">${ev.year}</h2>
                <p style="color: var(--text-muted); font-size: 1.2rem; margin-top: 0.5rem;">${ev.events.length} Major Events</p>
            </div>
            <div>
                ${groupHtml}
            </div>
        `;
    } else {
        let metaRows = '';
        if (ev.metadata) {
            Object.keys(ev.metadata).forEach(function (k) {
                metaRows += '<li class="vt-meta-item"><span class="vt-meta-label">' + k + '</span><span class="vt-meta-value">' + ev.metadata[k] + '</span></li>';
            });
        }

        let images = [];
        if (ev.image) images.push(ev.image);
        else images.push('https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png');

        let i = 2;
        while (ev['image' + i]) {
            images.push(ev['image' + i]);
            i++;
        }

        window.currentModalImages = images;
        window.currentModalImageIndex = 0;
        window.isModalImageAnimating = false;

        // Preload images to eliminate delay
        images.forEach(src => {
            const preload = new Image();
            preload.src = src;
        });

        let nextBtn = '';
        let prevBtn = '';
        if (images.length > 1) {
            nextBtn = '<button id="vt-modal-next-btn" onclick="nextModalImage()" style="position:absolute; top:50%; right:-47px; transform:translateY(-50%); width:35px; height:35px; border-radius:50%; background:#000; color:#fff; border:1px solid #fff; font-size:20px; font-weight:bold; cursor:pointer; box-shadow:0 4px 15px rgba(0,0,0,0.5); z-index:10; display:flex; align-items:center; justify-content:center; padding:0; line-height:1; transition: background 0.2s;">&rarr;</button>';
            prevBtn = '<button id="vt-modal-prev-btn" onclick="prevModalImage()" style="position:absolute; top:50%; left:-47px; transform:translateY(-50%); width:35px; height:35px; border-radius:50%; background:#000; color:#fff; border:1px solid #fff; font-size:20px; font-weight:bold; cursor:pointer; box-shadow:0 4px 15px rgba(0,0,0,0.5); z-index:10; display:none; align-items:center; justify-content:center; padding:0; line-height:1; transition: background 0.2s;">&larr;</button>';
        }

        body.innerHTML =
            '<div class="vt-modal-grid">' +
            '<div class="vt-modal-icon-wrap" style="position: relative; perspective: 1000px;">' +
            prevBtn +
            '<img id="vt-modal-img" src="' + window.currentModalImages[0] + '" alt="" style="width: 100%; height: auto; max-height: 65vh; object-fit: contain; border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.4); transform-style: preserve-3d;">' +
            nextBtn +
            '</div>' +
            '<div class="vt-modal-info">' +
            '<h2 class="title">' + ev.title + '</h2>' +
            (metaRows ? '<ul class="vt-modal-meta">' + metaRows + '</ul>' : '') +
            '<p class="desc">' + ev.desc + '</p>' +
            '</div>' +
            '</div>';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

window.nextModalImage = function () {
    if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
    if (window.isModalImageAnimating) return;
    if (window.currentModalImageIndex < window.currentModalImages.length - 1) {
        window.currentModalImageIndex++;
        updateModalImage(1);
    }
};

window.prevModalImage = function () {
    if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
    if (window.isModalImageAnimating) return;
    if (window.currentModalImageIndex > 0) {
        window.currentModalImageIndex--;
        updateModalImage(-1);
    }
};

window.updateModalImage = function (direction = 1) {
    const img = document.getElementById('vt-modal-img');
    const prevBtn = document.getElementById('vt-modal-prev-btn');
    const nextBtn = document.getElementById('vt-modal-next-btn');

    if (img) {
        window.isModalImageAnimating = true;

        let outDeg = direction === 1 ? '90deg' : '-90deg';
        let inDeg = direction === 1 ? '-90deg' : '90deg';

        // Flip out
        img.style.transition = 'transform 0.25s ease-in';
        img.style.transform = `rotateY(${outDeg})`;

        // Ensure no backface flickering
        img.style.backfaceVisibility = 'hidden';

        setTimeout(() => {
            img.src = window.currentModalImages[window.currentModalImageIndex];

            // Turn off transition temporarily to snap
            img.style.transition = 'none';
            img.style.transform = `rotateY(${inDeg})`;

            // Force browser reflow so it registers the snap position without animating it
            void img.offsetWidth;

            // Turn transition back on and flip in
            img.style.transition = 'transform 0.25s ease-out';
            img.style.transform = 'rotateY(0deg)';

            setTimeout(() => {
                window.isModalImageAnimating = false;
            }, 260); // slightly longer than 250ms to ensure completion
        }, 250); // wait for 250ms ease-in to complete

        if (window.currentModalImageIndex === 0) {
            if (prevBtn) prevBtn.style.display = 'none';
        } else {
            if (prevBtn) prevBtn.style.display = 'flex';
        }

        if (window.currentModalImageIndex === window.currentModalImages.length - 1) {
            if (nextBtn) nextBtn.style.display = 'none';
        } else {
            if (nextBtn) nextBtn.style.display = 'flex';
        }
    }
};

function closeModal() {
    const modal = document.getElementById('vt-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
    renderTimeline();
    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    const closeBtn = document.getElementById('vt-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const backdrop = document.getElementById('vt-modal-close-bg');
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
});
