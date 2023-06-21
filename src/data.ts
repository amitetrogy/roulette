const services = [
    {
      option: 'Intelligate',
      icon: 'icon3',
      color: '#FF9492',
      questions: [
        { 
          question: '?מהי מטרת המערכת',
      answerOptions: [
        { text: 'ביצוע ראיונות למלש"בים המועמדים לאמ"ן', isCorrect: true },
        { text: 'חיפוש מהיר של מסמכים ברשת', isCorrect: false },
        { text: 'הזמנת ציוד לוגיסטי', isCorrect: false },
        { text: 'פיתוח קוד מאובטח', isCorrect: false },
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
  ],}, 
   { option: 'קשת בענן', icon: 'icon3', color: '#FFB3B1', questions: [
  { 
    question: '?מי הלקוח המרכזי של מערכת קשת בענן',
  answerOptions: [
  { text: 'מחב"ם', isCorrect: true },
  { text: 'ענף יסודות', isCorrect: false },
  { text: 'כל משתמשי אמ"ן', isCorrect: false },
  { text: 'חיל התקשוב', isCorrect: false },
  ],},
  ],},
    { option: 'Amigos', icon: 'icon3', color: 'rgba(255, 185, 161, 0.8)', questions: [
      { 
        question: '?מה מהעובדות הבאות נכון לגבי המערכת',
    answerOptions: [
      { text: 'השם הקודם שלה הוא פרינדס ומטרת המערכת- ניהול קבוצות', isCorrect: true },
      { text: 'השם הקודם שלה הוא נובה ומטרת המערכת - ניהול משתמשים', isCorrect: false },
      { text: 'שם הקודם שלה הוא קריפטון ומטרת המערכת - מנוע חיפוש בדפדפן', isCorrect: false },
      { text: 'ChatGPT המערכת מתבססת על אלגוריתמים של', isCorrect: false },
    ],},
    
    ], },
    { option: 'Hi-Chat', icon: 'icon2', color: 'rgba(255, 201, 122, 0.8)', questions: [
      { 
        question: '?מה כמות המשתמשים במערכת ביום ממוצע',
    answerOptions: [
      { text: '1000', isCorrect: false },
      { text: '15,000', isCorrect: false },
      { text: '5,000 ', isCorrect: true },
      { text: '250', isCorrect: false },
    ],},
    
    ], },
    { option: 'Falcon', icon: 'icon3', color: 'rgba(255, 243, 122, 0.8)', questions: [
      { 
        question: '?מה הם הפיצרים הקיימים במנוע החיפוש החדש של פאלקון',
    answerOptions: [
      { text: 'חיפוש אנשים ואנשי קשר, חיפוש אתרים, חיפוש תמונות, חיפוש קבצים', isCorrect: false },
      { text: 'חיפוש תמונות, חיפוש סיכומי דיוני, חיפוש קבצים', isCorrect: false },
      { text: 'חיפוש אתרים וחיפוש תמונות', isCorrect: true },
      { text: 'חיפוש אתרים וחיפוש אנשי קשר', isCorrect: false },
    ],},
    
    ], },
    { option: 'FullPlan', icon: 'icon3', color: 'rgba(248, 255, 122, 0.8)', questions: [
      { 
        question: '?מה מטרת המערכת',
    answerOptions: [
      { text: 'מערכת לתכנון המשאבים של מערך ההדרכה', isCorrect: false },
      { text: 'מערכת לניהול הקורסים של מערך ההדרכה', isCorrect: false },
      { text: 'מערכת עבור תכנון חיילי לשיבוץ של קורסיסטים לכלל הקורסים באמ"ן', isCorrect: false },
      { text: 'כל התשובות נכונות', isCorrect: true },
    ],},
    
    ], },
    { option: 'NMP', icon: 'icon3', color: 'rgba(204, 255, 122, 0.8)', questions: [
      { 
        question: '?NMP מהם ראשי התיבות של',
    answerOptions: [
      { text: 'Next Main Plan', isCorrect: false },
      { text: 'Network Managment Portal', isCorrect: true },
      { text: 'New Managment Portal', isCorrect: false },
      { text: 'Network Mapping Program', isCorrect: false },
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
    { option: 'Lego', icon: 'icon3', color: 'rgba(199, 255, 177, 0.8)', questions: [
      { 
        question: '?כמה פעולות ניתן לעשות במערכת הלגו',
    answerOptions: [
      { text: '7', isCorrect: false },
      { text: '13', isCorrect: true },
      { text: '2', isCorrect: false },
      { text: '20', isCorrect: false },
    ],},
    { 
      question: '?איזו מערכת הוחלפה על ידי מערכת זאת',
  answerOptions: [
    { text: 'שרגא', isCorrect: false },
    { text: 'עומק', isCorrect: false },
    { text: 'נובה ', isCorrect: true },
    { text: 'רייבן', isCorrect: false },
  ],},
  
    ],  },
    { option: 'תשתיות ליבה', icon: 'icon3', color: 'rgba(177, 255, 197, 0.8)', questions: [
      { 
        question: '?איזו מערכת בענף יסודות אחראית על הזדהות אפליקטיבית באמ"ן',
    answerOptions: [
      { text: 'CA', isCorrect: false },
      { text: 'Active directory', isCorrect: false },
      { text: 'ADFS', isCorrect: true },
      { text: 'לא קיימת כזאת מערכת בענף יסודות', isCorrect: false },
    ],},
    { 
      question: '?אילו מהמוצרים הבאים אינו מוצר של חברת מייקרוסופט',
  answerOptions: [
    { text: 'Active Directory', isCorrect: false },
    { text: 'Outlook', isCorrect: false },
    { text: 'Software Center', isCorrect: false },
    { text: 'One Migration', isCorrect: true },
  ],},
  
    ],  },
    { option: 'Drive', icon: 'icon3', color: 'rgba(213, 255, 213, 0.8)', questions: [
    { 
      question: '?איזה פיצר מגניב ועלה בגרסה החדשה של המערכת',
    answerOptions: [
    { text: 'הורדת תיקייה שלמה של קבצים', isCorrect: true },
    { text: 'אין פיצרים חדשים', isCorrect: false },
    { text: 'הורדת קובץ לשולחן עבודה', isCorrect: false },
    { text: 'עריכה משותפת של קובץ', isCorrect: false },
    ],},
   ], },
   { option: 'K8S', icon: 'icon3', color: 'rgba(177, 255, 244, 0.8)', questions: [
    { 
      question: '?מה מטרת הקוברנטיס ומי אחראי עליו',
    answerOptions: [
    { text: 'פלטפורמה מודרנית להרצת מערכות אחרות, צוות דבאופס', isCorrect: true },
    { text: 'פלטפורמה מודרנית להרצת מערכות אחרות, צוות אפולו', isCorrect: false },
    { text: 'צפייה בסרטונים ברשת המודיעינית, צוות דבאופס', isCorrect: false },
    { text: 'צפייה בסרטונים ברשת המודיעינית, צוות אפולו', isCorrect: false },
    ],},
    { 
      question: '?כמה מערכות רצות על תשתית הקוברנטיס הענפית',
    answerOptions: [
    { text: '20', isCorrect: false },
    { text: '40', isCorrect: true },
    { text: '30', isCorrect: false },
    { text: '15', isCorrect: false },
    ],},
  
   ], },
   { option: 'רב"ז', icon: 'icon3', color: 'rgba(213, 255, 249, 0.8)', questions: [
    { 
      question: '?איזה שינוי מהותי התבצע לאחרונה בתשתית העברת המיילים והקבצים הרב זרועית',
    answerOptions: [
    { text: 'שיפור ביצועים של 200%', isCorrect: false },
    { text: 'חיבור ל- 4 רשתות נוספות', isCorrect: false },
    { text: 'מעבר לגשר רייבן והוספת יכולת זימון לרשת צהל"נט', isCorrect: true },
    { text: 'העברת קבצים בגודל אין סופי בין הרשתות', isCorrect: false },
    ],},
    ],},
    { option: 'שירות המשתמשים', icon: 'icon3', color: 'rgba(177, 233, 255, 0.8)', questions: [
      { 
        question: '?מה השם הנוסף של מערכת שירות המשתמשים',
      answerOptions: [
      { text: 'בראשית ', isCorrect: true },
      { text: 'לגו', isCorrect: false },
      { text: 'פאלקון', isCorrect: false },
      { text: 'מלתעות', isCorrect: false },
      ],},
      ],},
      { option: 'אדוות הקרב', icon: 'icon3', color: 'rgba(213, 235, 255, 0.8)', questions: [
        { 
          question: '?מי הלקוח של המערכת',
      answerOptions: [
        { text: 'חט"ם', isCorrect: true },
        { text: 'פד"ם', isCorrect: false },
        { text: 'פקמ"ז', isCorrect: false },
        { text: 'כלל משתמשי אמ"ן', isCorrect: false },
      ],},
      
      ],
    
    },
    { option: 'ניהול תקלות', icon: 'icon3', color: 'rgba(151, 189, 255, 0.8)', questions: [
    { 
      question: 'איזו מערכת עתידה להחליף את הלהבה? ',
  answerOptions: [
    { text: 'Service now', isCorrect: true },
    { text: 'Jira', isCorrect: false },
    { text: 'להבה פלוס', isCorrect: false },
    { text: 'CA', isCorrect: false },
  ],},
  
    ],  },
    { option: 'FullPlan', icon: 'icon3', color: 'rgba(154, 151, 255, 0.8)', questions: [
      { 
        question: '?מהי מטרת המערכת',
    answerOptions: [
      { text: 'לתכנן המשאבים של מערך ההדרכה', isCorrect: false },
      { text: 'לנהל הקורסים של מערך ההדרכה', isCorrect: false },
      { text: 'תכנון חיילי לשיבוץ קורסיסטים לכלל הקורסים באמ"ן', isCorrect: false },
      { text: 'כל התשובות נכונות', isCorrect: true },
    ],},
    
      ],  },
      { option: 'AmanDay', icon: 'icon3', color: 'rgba(216, 190, 251, 0.8)', questions: [
        { 
          question: '?מהי המטרה המרכזית של המערכת',
      answerOptions: [
        { text: 'ניהול לו"ז', isCorrect: false },
        { text: 'ניהול משימות ופרויקטים', isCorrect: true },
        { text: 'ניהול משאבי אנוש', isCorrect: false },
        { text: 'ניהול חמ"לים בתרגילים ובחירום', isCorrect: false },
      ],},
      
        ],  },
        { option: 'עמדות קצה', icon: 'icon3', color: 'rgba(234, 190, 251, 0.8)', questions: [
          { 
            question: '?איך קוראים למערכת המרכזית לניהול עמדות קצה',
        answerOptions: [
          { text: 'ADFS', isCorrect: false },
          { text: 'בראשית', isCorrect: false },
          { text: 'SCCM', isCorrect: true },
          { text: 'Exchange', isCorrect: false },
        ],},
        
          ],  },
          { option: 'חנות אפליקציות', icon: 'icon3', color: 'rgba(251, 190, 248, 0.8)', questions: [
            { 
              question: '?Getapp איזו מערכת החליפה את מערכת',
          answerOptions: [
            { text: 'Software Center', isCorrect: true },
            { text: 'קשת בענן', isCorrect: false },
            { text: 'NMP', isCorrect: false },
            { text: 'AmanTube', isCorrect: false },
          ],},
          
            ],  },
            { option: 'Fixit', icon: 'icon3', color: 'rgba(255, 213, 232, 0.8)', questions: [
              { 
                question: '?מהי מטרת המערכת',
            answerOptions: [
              { text: 'ניהול תקלות בינוי ותשתית בבסיס ', isCorrect: true },
              { text: 'תיקון אוטומטי של בעיות בשרתים', isCorrect: false },
              { text: 'תיקון אוטומטי של בעיות ברכיבי רשת', isCorrect: false },
              { text: 'תשובות ב+ג נכונות', isCorrect: false },
            ],},
            
              ],  },
              { option: 'זמן אמ"ן', icon: 'icon3', color: 'rgba(255, 213, 220, 0.8)', questions: [
                { 
                  question: '?מהו השם הנושף של המערכת',
              answerOptions: [
                { text: 'שעון בן חיל', isCorrect: true },
                { text: 'לו"זון', isCorrect: false },
                { text: 'לו"ז ללשכות', isCorrect: false },
                { text: 'ICU ', isCorrect: false },
              ],},
              
                ],  },
                { option: 'AmanTube', icon: 'icon3', color: 'rgba(255, 213, 213, 0.8)', questions: [
                  { 
                    question: '?מי הלקוח המרכזי של המערכת',
                answerOptions: [
                  { text: 'משתמשי הרשת האחת', isCorrect: false },
                  { text: 'משתמשי עד הקצה', isCorrect: false },
                  { text: 'משתמשי נס הרים', isCorrect: false },
                  { text: 'כלל משתמשי אמ"ן', isCorrect: true },
                ],},
                
                  ],  },
      
      
  ];
  export default services;