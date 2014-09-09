// Build div that hold background image <div class="letters" id="letter(num)"></div>
var letters = "<div class=\"letters\" id=\"letter";
var lettersEnd = "\"></div>";

// Answers for multiple choice
var answers = [
    "Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body width", "Bowl", "Bracket", "Cap Height", "Character", "Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head", "Serif", "Joint", "Leg", "Ligature", "Link/Neck", "Loop", "Overhang", "Serif", "Shoulder", "Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex"
];

//working on a simpler way of writing answers
//var num = Math.floor(Math.random() * answers.length);

// Build the quiz here
var quizJSON = {
    "info": {
        "name":    "Type Quiz",
        "main":    "<p>Think you understand the type anatomy?</p>",
        "results": "<h5>Want to learn more?</h5><p>go to <a href=\"http://diesslin.tk/type_anatomy/\">Type Anatomy</a>, to learn all the terms on the type anatomy.</p>",
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
