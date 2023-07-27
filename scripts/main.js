var quote =[
    {
        'quote':"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        'author':"Dr. Seuss"
    },
    {
        'quote':"“It is better to be hated for what you are than to be loved for what you are not.”",
        'author':"― Andre Gide, Autumn Leaves"
    },
    {
        'quote':"“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
        'author':"― Lao Tzu"
    },
    {
        'quote': "“Love is that condition in which the happiness of another person is essential to your own.”",
        'author':"― Robert A. Heinlein, Stranger in a Strange Land"
    },
    {
        'quote':"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        'author':"― Albert Einstein"


    },
    {
        'quote':  "“Without music, life would be a mistake.”",
        'author':"― Friedrich Nietzsche, Twilight of the Idols"
    },
];

var lastNumber = '';

function Quotes() {

  var number  = Math.floor(Math.random()* quote.length);

    if (lastNumber === number) { // there is repeat
        Quotes();
    } else { // if there is no repeat
      console.log(number);
      document.getElementById("quote").innerHTML=quote[number].quote;

      document.getElementById("author").innerHTML=quote[number].author;
      lastNumber = number;
    }     
    
}