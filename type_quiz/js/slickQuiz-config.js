// Builder for enclosing letter div
var letters = "<div class=\"letters\" id=\"letter";
var lettersEnd = "\"></div>";

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
        "results": "<h5>Want to learn more?</h5><p>go to <a href=\"https://typeanatomy.tk\">Type Anatomy</a>, to learn all the terms on the type anatomy.</p>",
        "level1":  "You are a master of the craft!",
        "level2":  "You know your typography pretty well, but keep trying.",
        "level3":  "You should probably learn your typography a little more...",
        "level4":  "You need to learn your typography a lot more...",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": letters.concat('1').concat(lettersEnd),
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
            "q": letters.concat('2').concat(lettersEnd),
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
            "q": letters.concat('3').concat(lettersEnd),
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
            "q": letters.concat('4').concat(lettersEnd),
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
            "q": letters.concat('5').concat(lettersEnd),
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
            "q": letters.concat('6').concat(lettersEnd),
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
            "q": letters.concat('7').concat(lettersEnd),
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
            "q": letters.concat('8').concat(lettersEnd),
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
            "q": letters.concat('9').concat(lettersEnd),
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
            "q": letters.concat('10').concat(lettersEnd),
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
            "q": letters.concat('11').concat(lettersEnd),
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
            "q": letters.concat('12').concat(lettersEnd),
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
            "q": letters.concat('13').concat(lettersEnd),
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
            "q": letters.concat('14').concat(lettersEnd),
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
            "q": letters.concat('15').concat(lettersEnd),
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
            "q": letters.concat('16').concat(lettersEnd),
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
            "q": letters.concat('17').concat(lettersEnd),
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
            "q": letters.concat('18').concat(lettersEnd),
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
            "q": letters.concat('19').concat(lettersEnd),
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
            "q": letters.concat('20').concat(lettersEnd),
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
            "q": letters.concat('21').concat(lettersEnd),
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
            "q": letters.concat('22').concat(lettersEnd),
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
            "q": letters.concat('23').concat(lettersEnd),
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
            "q": letters.concat('24').concat(lettersEnd),
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
            "q": letters.concat('25').concat(lettersEnd),
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
            "q": letters.concat('26').concat(lettersEnd),
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
            "q": letters.concat('27').concat(lettersEnd),
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
            "q": letters.concat('28').concat(lettersEnd),
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
            "q": letters.concat('29').concat(lettersEnd),
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
            "q": letters.concat('30').concat(lettersEnd),
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
            "q": letters.concat('31').concat(lettersEnd),
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
            "q": letters.concat('32').concat(lettersEnd),
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
            "q": letters.concat('33').concat(lettersEnd),
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
            "q": letters.concat('34').concat(lettersEnd),
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
            "q": letters.concat('35').concat(lettersEnd),
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
            "q": letters.concat('36').concat(lettersEnd),
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
            "q": letters.concat('37').concat(lettersEnd),
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
            "q": letters.concat('38').concat(lettersEnd),
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
            "q": letters.concat('39').concat(lettersEnd),
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
            "q": letters.concat('40').concat(lettersEnd),
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
            "q": letters.concat('41').concat(lettersEnd),
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
            "q": letters.concat('42').concat(lettersEnd),
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
            "q": letters.concat('43').concat(lettersEnd),
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
            "q": letters.concat('44').concat(lettersEnd),
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
            "q": letters.concat('45').concat(lettersEnd),
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
            "q": letters.concat('46').concat(lettersEnd),
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