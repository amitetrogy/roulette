const services = [
    {
      option: 'Intelligate',
      icon: 'icon3',
      color: '#FF9492',
      questions: [
        { 
          question: '?מתי עברו הראיונות באמ"ן להתקיים במערכת',
      answerOptions: [
        { text: 'יוני 2022', isCorrect: true },
        { text: 'אוגוסט 2022', isCorrect: false },
        { text: 'נובמבר 2021', isCorrect: false },
        { text: 'ינואר 2023', isCorrect: false },
      ],},
      {question: '?כמה ראיונות התקיימו עד היום במערכת',
      answerOptions: [
        { text: '20,000', isCorrect: true },
        { text: '15,000', isCorrect: false },
        { text: 'עדיין לא בוצעו ראיונות במערכת', isCorrect: false },
        { text: '450', isCorrect: false },
      ],
    },
    {question: '?באיזה ענן יושבת המערכת',
      answerOptions: [
        { text: 'AWS', isCorrect: false },
        { text: 'Google Cloud', isCorrect: false },
        { text: 'Azure', isCorrect: true },
        { text: 'המערכת לא נמצאת בענן ההיברידי', isCorrect: false },
      ],
    },
    {question: ':Intelligate דוגמה לפיצר שקיים ב',
      answerOptions: [
        { text: 'שאלונים', isCorrect: false },
        { text: 'הקלטות', isCorrect: false },
        { text: 'מידע על מלשבים', isCorrect: false },
        { text: 'כל התשובות נכונות', isCorrect: true },
      ],
    },
  ],}, 
   { option: 'Keshet', icon: 'icon3', color: '#FFB3B1', questions: [
    { 
      question: '?כמה אנשים השתתפו בפיתוח של המערכת',
  answerOptions: [
    { text: '2', isCorrect: true },
    { text: '8', isCorrect: false },
    { text: '11', isCorrect: false },
    { text: '5', isCorrect: false },
  ],},
  { 
    question: '?כמה זמן לקח לפתח את המערכת',
  answerOptions: [
  { text: '3 חודשים', isCorrect: false },
  { text: 'חצי שנה', isCorrect: true },
  { text: 'עדיין נמצאת בפיתוח', isCorrect: false },
  { text: 'מעל שנה', isCorrect: false },
  ],},
  { 
    question: '?עבור מי פותחה המערכת',
  answerOptions: [
  { text: 'מחב"ם', isCorrect: true },
  { text: 'ענף יסודות', isCorrect: false },
  { text: 'כל משתמשי אמ"ן', isCorrect: false },
  { text: 'חיל התקשוב', isCorrect: false },
  ],},
  ],},
    { option: 'Kartofel', icon: 'icon3', color: '#FFE0E0', questions: [
      { 
        question: '?מתי החל הפיתוח של המערכת',
    answerOptions: [
      { text: '2022', isCorrect: false },
      { text: '2015', isCorrect: true },
      { text: '2002', isCorrect: false },
      { text: '2010', isCorrect: false },
    ],},
    
    ],
  
  },
    { option: 'Amigos', icon: 'icon3', color: '#E4CFFF', questions: [
      { 
        question: '?כמה גרסאות יש למערכת',
    answerOptions: [
      { text: '10', isCorrect: false },
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
      { text: '1', isCorrect: false },
    ],},
    
    ], },
    { option: 'Clash Royal', icon: 'icon1', color: '#E8CACA', questions: [
      { 
        question: '?מה הדרגה הבכירה ביותר בקלאש רויאל',
    answerOptions: [
      { text: 'סמ"ר', isCorrect: false },
      { text: 'אל"מ', isCorrect: false },
      { text: 'רנ"ג', isCorrect: false },
      { text: 'תא"ל', isCorrect: true },
    ],},
    
    ],  },
    { option: 'Hi-Chat', icon: 'icon2', color: '#FFE5A8', questions: [
      { 
        question: '?בזמן מבצע "מגן וחץ" באיזה מיקום השתבצה המערכת',
    answerOptions: [
      { text: '4', isCorrect: false },
      { text: '6', isCorrect: false },
      { text: '1', isCorrect: true },
      { text: '2', isCorrect: false },
    ],},
    
    ], },
    { option: 'Falcon', icon: 'icon3', color: '#F8FF97', questions: [
      { 
        question: '?מה גודל מאגר התמונות הנוכחי של המערכת',
    answerOptions: [
      { text: '31,592', isCorrect: false },
      { text: '180,930', isCorrect: true },
      { text: '427,014', isCorrect: false },
      { text: '82,461', isCorrect: false },
    ],},
    
    ], },
    { option: 'FullPlan', icon: 'icon3', color: '#BCFFA4', questions: [
      { 
        question: '?מה מטרת המערכת',
    answerOptions: [
      { text: 'מערכת לתכנון המשאבים של מערך ההדרכה', isCorrect: false },
      { text: 'מערכת לניהול הקורסים של מערך ההדרכה', isCorrect: false },
      { text: 'מערכת עבור תכנון חיילי לשיבוץ של קורסיסטים לכלל הקורסים באמ"ן', isCorrect: false },
      { text: 'כל התשובות נכונות', isCorrect: true },
    ],},
    
    ], },
    { option: 'nmp', icon: 'icon3', color: '#A6FFD3', questions: [
      { 
        question: '?nmp כמה מתגים בממוצע מנוהלים בכל אתר ב ',
    answerOptions: [
      { text: '20', isCorrect: false },
      { text: '15', isCorrect: false },
      { text: '10', isCorrect: true },
      { text: '5', isCorrect: false },
    ],},
    { 
      question: '?nmp כמה סגמנטים בממוצע מנוהלים בכל אתר ב',
  answerOptions: [
    { text: '2', isCorrect: false },
    { text: '5', isCorrect: true },
    { text: '12', isCorrect: false },
    { text: '19', isCorrect: false },
  ],},
  { 
    question: '?כמה פעולות דרך המערכת נעשו מתחילת חודש יוני',
  answerOptions: [
  { text: '270', isCorrect: false },
  { text: '580', isCorrect: false },
  { text: '1600', isCorrect: false },
  { text: '3300', isCorrect: true },
  ],},
    
    ],  },
    { option: 'Lego', icon: 'icon3', color: '#B9E3FF', questions: [
      { 
        question: '?כמה פעולות ניתן לעשות במערכת הלגו',
    answerOptions: [
      { text: '7', isCorrect: false },
      { text: '13', isCorrect: true },
      { text: '2', isCorrect: false },
      { text: '20', isCorrect: false },
    ],},
    { 
      question: '?מה מספר הבקשות הנוכחי בלגו',
  answerOptions: [
    { text: '2000', isCorrect: false },
    { text: '53,454', isCorrect: false },
    { text: '100,000', isCorrect: false },
    { text: '63,333', isCorrect: true },
  ],},
  
    ],  },
    { option: 'Tashtiot-440', icon: 'icon3', color: '#C1CCFF', questions: [
      { 
        question: '?איזו מערכת בענף יסודות אחראית על הזדהות אפליקטיבית באמ"ן',
    answerOptions: [
      { text: 'CA', isCorrect: false },
      { text: 'Active directory', isCorrect: false },
      { text: 'ADFS', isCorrect: true },
      { text: 'לא קיימת כזאת מערכת בענף יסודות', isCorrect: false },
    ],},
    { 
      question: '?מול איזו תשתית של יסודות מערכת לגו עובדת',
  answerOptions: [
    { text: 'SCCM', isCorrect: false },
    { text: 'ADFS', isCorrect: false },
    { text: 'DNS', isCorrect: false },
    { text: 'Active directory', isCorrect: true },
  ],},
  
    ],  },
    { option: 'Drive', icon: 'icon3', color: '#F1CEF4', questions: [
    { 
      question: '?האם ניתן להוריד תיקייה בדרייב החדש',
    answerOptions: [
    { text: 'יתאפשר בעוד כמה שנים', isCorrect: false },
    { text: 'כן', isCorrect: true },
    { text: 'לא', isCorrect: false },
    { text: 'יתאפשר בעוד כמה חודשים', isCorrect: false },
    ],},
   ], },
   { option: 'K8S', icon: 'icon3', color: ' #FEC8D8', questions: [
    { 
      question: '?כמה פודים בממוצע יש במערכת',
    answerOptions: [
    { text: '20', isCorrect: true },
    { text: '15', isCorrect: false },
    { text: '10', isCorrect: false },
    { text: '50', isCorrect: false },
    ],},
    { 
      question: '?כמה פקטות עוברות במערכת בממוצע בשנייה',
    answerOptions: [
    { text: '200,000', isCorrect: false },
    { text: '80,000', isCorrect: false },
    { text: '100,000', isCorrect: true },
    { text: '20,000', isCorrect: false },
    ],},
    { 
      question: '?כמה מערכות רצות על המערכת',
    answerOptions: [
    { text: '20', isCorrect: false },
    { text: '40', isCorrect: true },
    { text: '30', isCorrect: false },
    { text: '15', isCorrect: false },
    ],},
   ], },
  ];
  export default services;