const quizData = [
  {
    question: 'The word evidence may have several meanings depending on the context in which it is used',
    options: ['True', 'False', 'Do not Know', 'Maybe'],
    answer: 'True',
  },
  {
    question: 'Evidence on the one hand may refer to testimony that had been given by a witness in court or it may refer to legally admissible testimony',
    options: [
      'true',
      'false',
      'never',
      'maybe',
    ],
    answer: 'true',
  },
  {
    question: 'The Blacks Law Dictionary, defines evidence as: something, including testimony, documents and tangible objects that tend to prove or disprove the existence of an alleged facts',
    options: [
      'true',
      'false',
      'naver',
      'maybe',
    ],
    answer: 'true',
  },
  {
    question: 'From various definitions, the  following conclusions can be drawn: (i) Evidence deals with facts in issue. Facts in issue, means relevant facts. and?',
    options: [
      '(ii) these relevant facts are admissible in evidence',
      '(ii) facts are facts',
      '(ii) evidence rocks',
      '(ii) Hay ho, lets go',
    ],
    answer: '(ii) these relevant facts are admissible in evidence',
  },
  {
    question: 'The Evidence Act 2011 defines a fact in section ___________',
    options: [
      'sec. 234',
      'sec. 89',
      'sec. 258 (1)',
      'sec. 454',
    ],
    answer: 'sec. 258 (1)',
  },
  {
    question: '____________ evidence is evidence that is based on personal knowledge or observation and that, if true, proves a fact wihout inference or presumption',
    options: [
      'circumstantial',
      'direct',
      'secondary',
      'hearsay',
    ],
    answer: 'direct',
  },
  {
    question: 'direct evidence is sometimes refered to as ___________ evidence',
    options: [
      'hearsay',
      'circumstantial',
      'testimonial',
      'secondary',
    ],
    answer: 'testimonial',
  },
  {
    question: '____________ also states that: "in this present context, direct evidence means the evidence of the fact in issue in a trial"',
    options: [
      'Homes',
      'John Locke',
      'Emma Watson',
      'Nwadialo',
    ],
    answer: 'Nwadialo',
  },
  {
    question: 'In a murder trial, the evidence of a witness who saw the accused person killing the deceased is __________ evidence',
    options: [
      'circumstantial',
      'direct',
      'secondary',
      'hearsay',
    ],
    answer: 'direct',
  },
  {
    question: '____________ evidence is defined as: "evidence based on inference and not on personal knowledge or observation" Blacks Law Dictionary',
    options: [
      'Circumstantial',
      'Direct',
      'secondary',
      'Hearsay',
    ],
    answer: 'Circumstantial',
  },
  {
    question: '______________ evidence has also been defined as: "evidence of some collateral fact, from which the existance or non-existance of some fact in question may be inferred as a probable consequence"',
    options: [
      'direct',
      'circumstantial',
      'hearsay',
      'primary',
    ],
    answer: 'circumstantial',
  },
  {
    question: 'Where ___________ testimony of an incident is not available, the law allows the courts to infer from the proven facts the existance of other facts that may be logically inferred',
    options: [
      'circumstantial',
      'hearsay',
      'secondary',
      'direct',
    ],
    answer: 'direct',
  },
  {
    question: 'The justification for the use of circumstantial evidence is succinctly explained by ___________ and ____________, when they said: If the only evidence which could be adduced were that directly of facts in issue, or direct evidence, many claims would fail for lack of adequate proof. At some stage, resort almost always has to be had to circumstantial evidence',
    options: [
      'smurfs and smurvlie',
      'Homes and Watson',
      'Cross and Tapper',
      'Sam and Cat',
    ],
    answer: 'Cross and Tapper',
  },
  {
    question: 'According to Aguda: "circumstantial evidence must always be narrowly examined, if only because, this type of evidence, may be more easily fabricated to cast suspicion on innocent persons."',
    options: [
      'true',
      'false',
      'maybe',
      'never',
    ],
    answer: 'true',
  },
  {
    question: 'In the old English case of ________________ it was held that a conviction for murder could be proved by circumstantial evidence even though the body was not found',
    options: [
      'Michael Onufrejezyk v. R',
      'Orji v State',
      'Mbang v. State',
      'Yakubu v. State',
    ],
    answer: 'Michael Onufrejezyk v. R',
  },
  {
    question: 'In _____________, the Supreme Court held that, a court may still convict an accused person of murder even though the deceaseds body cannot be found provided there is compelling circumstantial evidence to lead to the inference that the mam has been killed',
    options: [
      'Michael Onufrejezyk v. R',
      'Yakubu v. State',
      'Mbang v. State',
      'Jua v. State',
    ],
    answer: 'Jua v. State',
  },
  {
    question: 'Circumstantial evidence derives its main force from the fact that it usually consists of a number of items pointing to the same conclusion',
    options: [
      'true',
      'false',
      'maybe',
      'never',
    ],
    answer: 'true',
  },
  {
    question: 'In the offence of fraud by a trustee in relation to trust property, the accused must be a trustee according to __________ section of the criminal code',
    options: [
      'sec. 123',
      'sec. 434',
      'sec. 199',
      'sec. 215',
    ],
    answer: 'sec. 434',
  },
  {
    question: 'On a charge of stealing, the property in question must fall into the category of "things capable of being stolen" according to ___________ section of the criminal code',
    options: [
      'sec. 345',
      'sec. 114',
      'sec. 101',
      'sec. 382',
    ],
    answer: 'sec. 382',
  },
  {
    question: 'We are left, therefore, with the rather circular definition that "actus resu means the whole definition of the crime with the exception of the __________',
    options: [
      'cocaina',
      'illegal importation',
      '9/11 bombing',
      'mental element',
    ],
    answer: 'mental element',
  },
  {
    question: 'Intention on its own, however wicked or dangerous it might be if put into execution, is not generally forbidden or punished by the law until the man with the intention begins to put it into execution',
    options: [
      'true',
      'false',
      'maybe',
      'never',
    ],
    answer: 'true',
  },
  {
    question: 'the main reasons for the principle that intention alone is not generally forbidden or punished by the law are that to control peoples states of mind alone is exceeding difficult and that to try to do so is to set too narrow a limit on _____________',
    options: [
      'Thought',
      'Life',
      'Power',
      'Individual freedom',
    ],
    answer: 'Individual freedom',
  },
  {
    question: 'Although intention alone is not sufficient, the law is often ready to intervene at the slightest ___________ of that intention',
    options: [
      'thought',
      'woke',
      'manifestation',
      'listing',
    ],
    answer: 'manifestation',
  },
  {
    question: 'A slight movement of property can constitute the ______________ of stealing',
    options: [
      'actus reus',
      'acuto rene',
      'actus renus',
      'action ren',
    ],
    answer: 'actus reus',
  },
  {
    question: 'One can be guilty of an offence merely by counseling it',
    options: [
      'True',
      'False',
      'lies',
      'never',
    ],
    answer: 'True',
  },
  {
    question: 'Under sections _____________ and ______________ of the criminal code a man might be convicted of being a member of a society as soon as it is declared to be unlawful',
    options: [
      '62 (2) (ii) and 64 (a)',
      '34 (5) and 56',
      '67 (2) (iii) and 65 (b)',
      '12 and 342',
    ],
    answer: '62 (2) (ii) and 64 (a)',
  },
  {
    question: 'Generally, the law is reluctant to punish what?',
    options: [
      'comission',
      'omission',
      'crime',
      'electives',
    ],
    answer: 'omission',
  },
  {
    question: 'There are some notable exceptions where it is felt essential to force people to act and a duty to act is imposed, breach of which is an offence. An example is?',
    options: [
      'manslaughter',
      'fishing',
      'sleeping',
      'writing',
    ],
    answer: 'manslaughter',
  },
  {
    question: 'Duties are imposed on peace officers to suppress riots',
    options: [
      'true',
      'false',
      'never',
      'maybe',
    ],
    answer: 'true',
  },
  {
    question: 'duties are not imposed on those in charge of railway trains or on ships',
    options: [
      'false',
      'true',
      'no',
      'never',
    ],
    answer: 'false',
  },
  {
    question: 'duties are not imposed on ships engineers to ensure the safety of the passengers',
    options: [
      'false',
      'true',
      'maybe',
      'never',
    ],
    answer: 'false',
  },
  {
    question: 'It is an offence (common nuisance)  for anyone to omit to fulfill his duty to repair a highway or a bridge or to avoid damage or inconvenience to public rights',
    options: [
      'True',
      'false',
      'lies',
      'never',
    ],
    answer: 'True',
  },
  {
    question: 'What section of the criminal code specified a number of duties where negligent omission will be criminal',
    options: [
      'sec. 343',
      'sec. 255',
      'sec. 544',
      'sec. 245',
    ],
    answer: 'sec. 343',
  },
  {
    question: 'Section ______________ makes it a general offence for anyone to cause harm by negligent omission in breach of a duty',
    options: [
      'sec. 354',
      'sec. 344',
      'sec. 587',
      'sec. 455',
    ],
    answer: 'sec. 344',
  },
  {
    question: 'Chapter ___________ of the code impose a number of duties in respect of the preservation of life',
    options: [
      'chapter 15',
      'chapter 45',
      'chapter 26',
      'chapter 2',
    ],
    answer: 'chapter 26',
  },
  {
    question: 'The criminal code also provides that it is an offence generally for anyone to omit, without lawful excuse, to perform any duty which he is bound to perform by the provisions of any legislative enactment.',
    options: [
      'True',
      'false',
      'maybe',
      'never',
    ],
    answer: 'True',
  },
  {
    question: 'It is no offence for a man to stand callously by, watching anothers baby drawn in a pool of water two feet deep when it could be the simplest act to save it',
    options: [
      'false',
      'true',
      'maybe',
      'never',
    ],
    answer: 'true',
  },
  {
    question: 'If A stands idly while a cigarette end sets fire to Bs house, there is no offence even though he could easily have stamped on the cigatette',
    options: [
      'Facts',
      'lies',
      'untruth',
      'bite him!',
    ],
    answer: 'Facts',
  },
  {
    question: 'The reason why omissions are not often made criminal is simply that human nature being what it is, it would be harsh if men were to be pushed too far by the criminal law into doing their _________________',
    options: [
      'neighbourly duty',
      'royal duty',
      'super duty',
      'elemental duty',
    ],
    answer: 'neighbourly duty',
  },
  {
    question: 'In what case did a man who intended to procure an abortion induce a native doctor to administer a drug to a woman who died as a result',
    options: [
      'Akran v. I.G.P.',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Idiong and Umo',
  },
  {
    question: 'section 7 (a) of the Criminal Code says Every person who actually does the act or makes the omission that constitutes the offence.',
    options: [
      'True',
      'False',
      'No',
      'Baka',
    ],
    answer: 'True',
  },
  {
    question: 'what is the name of the fishing net dispute case?',
    options: [
      'Enweonye v. R',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Enweonye v. R',
  },
  {
    question: 'what is the name of the after-penetration case?',
    options: [
      'Queensland case R v. Mayberry',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Queensland case R v. Mayberry',
  },
  {
    question: 'what is the name of the half way theft case?',
    options: [
      'R v. Johnson',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Johnson',
  },
  {
    question: 'what is the name of the mere presence is not enough case',
    options: [
      'Azumah v. R',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Azumah v. R',
  },
  {
    question: 'what is the name of the direct encouragement by presence case',
    options: [
      'Enweonye v. R',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Enweonye v. R',
  },
  {
    question: 'what is the case where a person is charged and convicted for aiding principals still at large',
    options: [
      'State v. Nwaoga',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'State v. Nwaoga',
  },
  {
    question: 'what is the case where an aider was aquinted on appeal because the principals where acquinted?',
    options: [
      'R v. Okagbu',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Okagbu',
  },
  {
    question: 'what old english case did the Apex Court rely on to arrive at the judgement in R v. Okagbu?',
    options: [
      'R v. Rowley',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Rowley',
  },
  {
    question: 'In what case did the court hold that the words of counseling or procuring must involove some positive act or encouragement to those who commit the offence; tacit acquiescence, or words amounting to a bare permission are not enough',
    options: [
      'Idika v. R',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Idika v. R',
  },
  {
    question: 'In what case did the court hold that the agreement was of an uncertain nature and was to do something at some unspecified time in the future',
    options: [
      'R v. Rowley',
      'R v. Ukpe',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Ukpe',
  },
  {
    question: 'in what case was an Alkani found guilty of assault under 7(d) for ordering a policeman to slap the accused for contempt of court',
    options: [
      'R v. Rowley',
      'R v. Idiong and Umo',
      'Ajao v. Alkali Amodu',
      'R v Ukani',
    ],
    answer: 'Ajao v. Alkali Amodu',
  },
  {
    question: 'In what case did the Queensland Court of Criminal Appeal hold that section 7 should be read in conjunction with section 24',
    options: [
      'R v. Rowley',
      'R v. Idiong and Umo',
      'R v. White',
      'R v. Solomon',
    ],
    answer: 'R v. Solomon',
  },
  {
    question: 'In what case did the court hold that it is not enough to prove that a man knew that some crime was intended',
    options: [
      'R v. Bainbridge',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Bainbridge',
  },
  {
    question: 'in what case where the accused persons where of a society whose object was to kill thevies',
    options: [
      'R v. Rowley',
      'Obodo v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Obodo v. R',
  },
  {
    question: 'what case indicates that to be effective the reputation should be communicated to the other party',
    options: [
      'R v. Rowley',
      'R v. Idiong and Umo',
      'Okafor v. State',
      'R v Ukani',
    ],
    answer: 'Okafor v. State',
  },
  {
    question: 'In what case did the court hold that the a prisoner who relies on dissociation from the common purpose or the mutual aiding must be able to point to evidence which "shows distinctly" the dissociation-evidence which shows that he made to the other party an unequivocal "timely communication" of his intention to abandon the common purpose',
    options: [
      'R v. Rowley',
      'R v. Idiong and Umo',
      'R v. White',
      'R v. Saylor',
    ],
    answer: 'R v. Saylor',
  },
  {
    question: 'In what case had the accused illegally demanded five Eros as a bribe',
    options: [
      'Abakah',
      'R v. Idiong and Umo',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Abakah',
  },
  {
    question: 'In what case had the police agent persuaded a reluctant person to commit the an offence',
    options: [
      'R v. Rowley',
      'Brannan v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Brannan v. R',
  },
  {
    question: 'In what case could the accused not be guilty of commiting attemted rape because he did not intend sexual penetration',
    options: [
      'R v. Seidu',
      'Brannan v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Seidu',
  },
  {
    question: 'In what case did the court find that the acts of the accused fell short of attemped rape but only showed that the defendant had wanted to have and had in fact made prepatations to have connection with the complainants.',
    options: [
      'R v. Offiong',
      'Brannan v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Offiong',
  },
  {
    question: 'In what case did the court find that the defendant had not even manifested a firm intention to prepare for forgery (c.c. chap 45)480 (i) (c)',
    options: [
      'R v. Unakanjo',
      'Brannan v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Unakanjo',
  },
  {
    question: 'In what case did the accused represent himself as having never won a race',
    options: [
      'R v. Rowley',
      'R v. Button',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Button',
  },
  {
    question: 'In what case did the court hold that the accused had not communicated his pretended burglary to the insturance company and so was not guilty of attempt',
    options: [
      'R v. Rowley',
      'Brannan v. R',
      'R v. Robinson',
      'R v Ukani',
    ],
    answer: 'R v. Robinson',
  },
  {
    question: 'In what case did the court hold that the false report of theft of the defendant car and inquire whether he could claim where not sufficiently proximate',
    options: [
      'R v. Rowley',
      'Brannan v. R',
      'Comer v. Bloomfield',
      'R v Ukani',
    ],
    answer: 'Comer v. Bloomfield',
  },
  {
    question: 'In what case had the accused simulated death by drowning',
    options: [
      'R v. Rowley',
      'Brannan v. R',
      'R v. White',
      'D.P.P. v. Stonehouse',
    ],
    answer: 'D.P.P. v. Stonehouse',
  },
  {
    question: 'In what case did  Parke B say that some act is required and we do not think that all acts towards committing a misdemeanor are indictable. Acts remotely leading towards the commission of the offence are not to be considered as attempts to commit it, bur acts immediately connected with it are',
    options: [
      'R v. Eagleton',
      'Brannan v. R',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'R v. Eagleton',
  },
  {
    question: 'the above quote was applied in the Northern High court of Appeal in what case',
    options: [
      'R v. Rowley',
      'Orija v. I.G.P.',
      'R v. White',
      'R v Ukani',
    ],
    answer: 'Orija v. I.G.P.',
  },
  {
    question: 'who opined that the prosecution must prove that the steps taken by the accused must have reached the point when they indicate beyond reasonable doudt what was the end to which they were directed',
    options: [
      'Newton',
      'Batman',
      'Mr Turner',
      'Shakespeare',
    ],
    answer: 'Mr Turner',
  },
  {
    question: 'In what case did a native court clerk accept a cow promising to obtain the donors aquittal',
    options: [
      'R v. Rowley',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'R v. Olua',
  },
  {
    question: 'In what case did the accused recieve money for the purpose of making counterfeit coins',
    options: [
      'R v. Ajani',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'R v. Ajani',
  },
  {
    question: 'In what case did the salesman forge the signature of the sales manager and swallow the evidence',
    options: [
      'Awosika v. I.G.P.',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'Awosika v. I.G.P.',
  },
  {
    question: 'In what latex case did the court blunder',
    options: [
      'Udu v. I.G.P.',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'Udu v. I.G.P.',
  },
  {
    question: 'In what case did the accused place magic powder in the court to influence court to enter a favourable judgment in a certain case',
    options: [
      'R v. Odo',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'R v. Odo',
  },
  {
    question: 'In what case did the court hold that the accused act was intrinsically innocuous and inoffensive',
    options: [
      'R v. Odo',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'R v. Odo',
  },
  {
    question: 'In what case did the Federal Supreme Court hold that the offense under section 513 is similar to the English offence of incitement',
    options: [
      'Basharu v. Bornu N.A.',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'Basharu v. Bornu N.A.',
  },
  {
    question: 'In what case did the accused incite police officers to mutiny 44(a)',
    options: [
      'R v. Enahoro',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'R v. Enahoro',
  },
  {
    question: 'In what case did the West African Court of Appeal adopt the well known definition of Willes J in Mulcahy v. R',
    options: [
      'Majekodunmi v. R',
      'Brannan v. R',
      'R v. Olua',
      'R v Ukani',
    ],
    answer: 'Majekodunmi v. R',
  },
  {
    question: 'In some offences, it is the consequences of a mans conduct which constitute the actus reus of the offence rather than the conduct per se. Example;',
    options: [
      'murder',
      'sleeping',
      'naping',
      'laughing',
    ],
    answer: 'murder',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();