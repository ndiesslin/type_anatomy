function showLetter(letterChosen) {
  const letters = document.querySelectorAll('.letters');
  const letterSpace = document.getElementById('letter-space');
  const nav = document.querySelector('nav');
  const navClicks = document.querySelectorAll('.nav_click');

  letters.forEach(letter => {
    if (letter.id === letterChosen) {
      letter.style.display = 'block';
      letterSpace.style.position = 'fixed';
      nav.style.position = 'fixed';
    } else {
      letter.style.display = 'none';
    }
  });

  navClicks.forEach(navClick => {
    navClick.addEventListener('click', (e) => {
      navClicks.forEach(navClick => navClick.style.borderBottom = 'none');
      e.target.style.borderBottom = '1px solid #00ccff';
    });
  });
}

function termPrinter() {
  let lettersHtmlObject = '';

  const appendObjectToElement = (elementName, object) => {
    document.querySelector(elementName).innerHTML = object;
  };

  const printLetters = () => {
    for (let letter = 1; letter <= 47; letter++) {
      lettersHtmlObject += `<div class="letters" id="letter${letter}"></div>`;
    }
    appendObjectToElement('.letter-list', lettersHtmlObject);
  };

	let definitionsHtmlObject = '';

  const printTerms = () => {
    const terms = ["Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body Width", "Bowl", "Bracket", "Cap Height", "Character Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head Serif", "Joint", "Leg", "Ligature", "Link/ Neck", "Loop", "Overhang","Serif", "Shoulder","Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex", "X-Height"];

    for (let term = 0; term < terms.length; term++) {
      definitionsHtmlObject += `<li><a class="nav_click" onclick="showLetter('letter${term + 1}')">${terms[term]}</a></li>`;
    }
    appendObjectToElement('#definition-list', definitionsHtmlObject);
  };

  printLetters();
  printTerms();
}

termPrinter();