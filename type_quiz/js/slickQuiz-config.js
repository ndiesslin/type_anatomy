// Builder for enclosing letter div


// Answers for multiple choice
var answers = [
    "Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body Width", "Bowl", "Bracket", "Cap Height", "Character Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head Serif", "Joint", "Leg", "Ligature", "Link/Neck", "Loop", "Overhang", "Serif", "Shoulder", "Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex"
];

//working on a simpler way of writing answers
//var num = Math.floor(Math.random() * answers.length);

// Build the quiz here
var quizJSON = {
    "info": {
        "name":    "Type Quiz",
        "main":    "<p>Think you understand the type anatomy?</p>",
        "results": "<h5>Want to learn more?</h5><p>go to <a href=\"https://type-anatomy.web.app\">Type Anatomy</a>, to learn all the terms on the type anatomy.</p>",
        "level1":  "You are a master of the craft!",
        "level2":  "You know your typography pretty well, but keep trying.",
        "level3":  "You should probably learn your typography a little more...",
        "level4":  "You need to learn your typography a lot more...",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<img src=\"img/letters/letter-1.svg\" alt=\"Diagram highlighting the Aperature of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[0], "correct": true},
                {"option": answers[10], "correct": false},
                {"option": answers[14], "correct": false},
                {"option": answers[20], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "<img src=\"img/letters/letter-2.svg\" alt=\"Diagram highlighting the Apex of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[1], "correct": true},
                {"option": answers[9], "correct": false},
                {"option": answers[11], "correct": false},
                {"option": answers[13], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "<img src=\"img/letters/letter-3.svg\" alt=\"Diagram highlighting the Arc of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[2], "correct": true},
                {"option": answers[4], "correct": false},
                {"option": answers[7], "correct": false},
                {"option": answers[18], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 4
            "q": "<img src=\"img/letters/letter-4.svg\" alt=\"Diagram highlighting the Arm of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[3], "correct": true},
                {"option": answers[2], "correct": false},
                {"option": answers[10], "correct": false},
                {"option": answers[19], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 5
            "q": "<img src=\"img/letters/letter-5.svg\" alt=\"Diagram highlighting the Ascender of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[4], "correct": true},
                {"option": answers[10], "correct": false},
                {"option": answers[14], "correct": false},
                {"option": answers[20], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 6
            "q": "<img src=\"img/letters/letter-6.svg\" alt=\"Diagram highlighting the Ascender Line of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[5], "correct": true},
                {"option": answers[1], "correct": false},
                {"option": answers[19], "correct": false},
                {"option": answers[22], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 7
            "q": "<img src=\"img/letters/letter-7.svg\" alt=\"Diagram highlighting the Ascender Height of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[6], "correct": true},
                {"option": answers[7], "correct": false},
                {"option": answers[3], "correct": false},
                {"option": answers[16], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 8
            "q": "<img src=\"img/letters/letter-8.svg\" alt=\"Diagram highlighting the Ascent Line of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[7], "correct": true},
                {"option": answers[3], "correct": false},
                {"option": answers[9], "correct": false},
                {"option": answers[37], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 9
            "q": "<img src=\"img/letters/letter-9.svg\" alt=\"Diagram highlighting the Axis of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[8], "correct": true},
                {"option": answers[2], "correct": false},
                {"option": answers[40], "correct": false},
                {"option": answers[25], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 10
            "q": "<img src=\"img/letters/letter-10.svg\" alt=\"Diagram highlighting the Base Line of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[9], "correct": true},
                {"option": answers[43], "correct": false},
                {"option": answers[36], "correct": false},
                {"option": answers[24], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 11
            "q": "<img src=\"img/letters/letter-11.svg\" alt=\"Diagram highlighting the Beak of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[10], "correct": true},
                {"option": answers[5], "correct": false},
                {"option": answers[20], "correct": false},
                {"option": answers[31], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 12
            "q": "<img src=\"img/letters/letter-12.svg\" alt=\"Diagram highlighting the Bilateral Serif of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[11], "correct": true},
                {"option": answers[1], "correct": false},
                {"option": answers[9], "correct": false},
                {"option": answers[19], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 13
            "q": "<img src=\"img/letters/letter-13.svg\" alt=\"Diagram highlighting the Body Width of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[12], "correct": true},
                {"option": answers[26], "correct": false},
                {"option": answers[37], "correct": false},
                {"option": answers[41], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 14
            "q": "<img src=\"img/letters/letter-14.svg\" alt=\"Diagram highlighting the Bowl of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[13], "correct": true},
                {"option": answers[3], "correct": false},
                {"option": answers[27], "correct": false},
                {"option": answers[23], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 15
            "q": "<img src=\"img/letters/letter-15.svg\" alt=\"Diagram highlighting the Bracket of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[14], "correct": true},
                {"option": answers[9], "correct": false},
                {"option": answers[19], "correct": false},
                {"option": answers[31], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 16
            "q": "<img src=\"img/letters/letter-16.svg\" alt=\"Diagram highlighting the Cap Height of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[15], "correct": true},
                {"option": answers[5], "correct": false},
                {"option": answers[19], "correct": false},
                {"option": answers[29], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 17
            "q": "<img src=\"img/letters/letter-17.svg\" alt=\"Diagram highlighting the Character Width of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[16], "correct": true},
                {"option": answers[2], "correct": false},
                {"option": answers[17], "correct": false},
                {"option": answers[26], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 18
            "q": "<img src=\"img/letters/letter-18.svg\" alt=\"Diagram highlighting the Counter (Open) of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[17], "correct": true},
                {"option": answers[23], "correct": false},
                {"option": answers[36], "correct": false},
                {"option": answers[30], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 19
            "q": "<img src=\"img/letters/letter-19.svg\" alt=\"Diagram highlighting the Counter (Closed) of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[18], "correct": true},
                {"option": answers[7], "correct": false},
                {"option": answers[26], "correct": false},
                {"option": answers[22], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 20
            "q": "<img src=\"img/letters/letter-20.svg\" alt=\"Diagram highlighting the Cross Stroke of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[19], "correct": true},
                {"option": answers[8], "correct": false},
                {"option": answers[19], "correct": false},
                {"option": answers[34], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 21
            "q": "<img src=\"img/letters/letter-21.svg\" alt=\"Diagram highlighting the Crotch of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[20], "correct": true},
                {"option": answers[13], "correct": false},
                {"option": answers[29], "correct": false},
                {"option": answers[36], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 22
            "q": "<img src=\"img/letters/letter-22.svg\" alt=\"Diagram highlighting the Descender of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[21], "correct": true},
                {"option": answers[18], "correct": false},
                {"option": answers[33], "correct": false},
                {"option": answers[41], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 23
            "q": "<img src=\"img/letters/letter-23.svg\" alt=\"Diagram highlighting the Decent Line of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[22], "correct": true},
                {"option": answers[9], "correct": false},
                {"option": answers[27], "correct": false},
                {"option": answers[38], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 24
            "q": "<img src=\"img/letters/letter-24.svg\" alt=\"Diagram highlighting the Diacritic of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[23], "correct": true},
                {"option": answers[12], "correct": false},
                {"option": answers[34], "correct": false},
                {"option": answers[39], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 25
            "q": "<img src=\"img/letters/letter-25.svg\" alt=\"Diagram highlighting the Ear of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[24], "correct": true},
                {"option": answers[15], "correct": false},
                {"option": answers[31], "correct": false},
                {"option": answers[38], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 26
            "q": "<img src=\"img/letters/letter-26.svg\" alt=\"Diagram highlighting the Eye of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[25], "correct": true},
                {"option": answers[4], "correct": false},
                {"option": answers[35], "correct": false},
                {"option": answers[30], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 27
            "q": "<img src=\"img/letters/letter-27.svg\" alt=\"Diagram highlighting the Finial of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[26], "correct": true},
                {"option": answers[6], "correct": false},
                {"option": answers[34], "correct": false},
                {"option": answers[41], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 28
            "q": "<img src=\"img/letters/letter-28.svg\" alt=\"Diagram highlighting the Foot of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[27], "correct": true},
                {"option": answers[7], "correct": false},
                {"option": answers[32], "correct": false},
                {"option": answers[42], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 29
            "q": "<img src=\"img/letters/letter-29.svg\" alt=\"Diagram highlighting the Hairline of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[28], "correct": true},
                {"option": answers[9], "correct": false},
                {"option": answers[16], "correct": false},
                {"option": answers[34], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 30
            "q": "<img src=\"img/letters/letter-30.svg\" alt=\"Diagram highlighting the Head Serif of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[29], "correct": true},
                {"option": answers[13], "correct": false},
                {"option": answers[22], "correct": false},
                {"option": answers[37], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 31
            "q": "<img src=\"img/letters/letter-31.svg\" alt=\"Diagram highlighting the Joint of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[30], "correct": true},
                {"option": answers[18], "correct": false},
                {"option": answers[26], "correct": false},
                {"option": answers[39], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 32
            "q": "<img src=\"img/letters/letter-32.svg\" alt=\"Diagram highlighting the Leg of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[31], "correct": true},
                {"option": answers[27], "correct": false},
                {"option": answers[36], "correct": false},
                {"option": answers[43], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 33
            "q": "<img src=\"img/letters/letter-33.svg\" alt=\"Diagram highlighting the Ligature of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[32], "correct": true},
                {"option": answers[26], "correct": false},
                {"option": answers[34], "correct": false},
                {"option": answers[45], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 34
            "q": "<img src=\"img/letters/letter-34.svg\" alt=\"Diagram highlighting the Link/Neck of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[33], "correct": true},
                {"option": answers[28], "correct": false},
                {"option": answers[37], "correct": false},
                {"option": answers[41], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 35
            "q": "<img src=\"img/letters/letter-35.svg\" alt=\"Diagram highlighting the Loop of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[34], "correct": true},
                {"option": answers[30], "correct": false},
                {"option": answers[14], "correct": false},
                {"option": answers[11], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 36
            "q": "<img src=\"img/letters/letter-36.svg\" alt=\"Diagram highlighting the Overhang of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[35], "correct": true},
                {"option": answers[30], "correct": false},
                {"option": answers[26], "correct": false},
                {"option": answers[39], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 37
            "q": "<img src=\"img/letters/letter-37.svg\" alt=\"Diagram highlighting the Serif of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[36], "correct": true},
                {"option": answers[23], "correct": false},
                {"option": answers[30], "correct": false},
                {"option": answers[39], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 38
            "q": "<img src=\"img/letters/letter-38.svg\" alt=\"Diagram highlighting the Shoulder of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[37], "correct": true},
                {"option": answers[30], "correct": false},
                {"option": answers[45], "correct": false},
                {"option": answers[29], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 39
            "q": "<img src=\"img/letters/letter-39.svg\" alt=\"Diagram highlighting the Spine of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[38], "correct": true},
                {"option": answers[32], "correct": false},
                {"option": answers[42], "correct": false},
                {"option": answers[23], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 40
            "q": "<img src=\"img/letters/letter-40.svg\" alt=\"Diagram highlighting the Spur of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[39], "correct": true},
                {"option": answers[32], "correct": false},
                {"option": answers[43], "correct": false},
                {"option": answers[5], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 41
            "q": "<img src=\"img/letters/letter-41.svg\" alt=\"Diagram highlighting the Stem of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[40], "correct": true},
                {"option": answers[22], "correct": false},
                {"option": answers[31], "correct": false},
                {"option": answers[8], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 42
            "q": "<img src=\"img/letters/letter-42.svg\" alt=\"Diagram highlighting the Stress of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[41], "correct": true},
                {"option": answers[10], "correct": false},
                {"option": answers[24], "correct": false},
                {"option": answers[34], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 43
            "q": "<img src=\"img/letters/letter-43.svg\" alt=\"Diagram highlighting the Tail of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[42], "correct": true},
                {"option": answers[5], "correct": false},
                {"option": answers[29], "correct": false},
                {"option": answers[22], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 44
            "q": "<img src=\"img/letters/letter-44.svg\" alt=\"Diagram highlighting the Tittle of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[43], "correct": true},
                {"option": answers[40], "correct": false},
                {"option": answers[36], "correct": false},
                {"option": answers[17], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 45
            "q": "<img src=\"img/letters/letter-45.svg\" alt=\"Diagram highlighting the Terminal of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[44], "correct": true},
                {"option": answers[15], "correct": false},
                {"option": answers[9], "correct": false},
                {"option": answers[41], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        },
        { // Question 46
            "q": "<img src=\"img/letters/letter-46.svg\" alt=\"Diagram highlighting the Vertex of a typeface\" class=\"letters\">",
            "a": [
                {"option": answers[45], "correct": true},
                {"option": answers[20], "correct": false},
                {"option": answers[12], "correct": false},
                {"option": answers[21], "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p>Uhh no.</p>" // no comma here
        } // no comma here
        /*for (i = 0; i < letters.length; i++) { 
            '{'
                "q": letters.concat(letters[i]).concat(lettersEnd),
                "a": [
                    {"option": answers[i+1], "correct": true},
                    {"option": answers[i+6], "correct": false},
                    {"option": answers[i+13], "correct": false},
                    {"option": answers[i+18], "correct": false}
                ]
            '},'
        }*/
    ]
};