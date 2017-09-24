


var questions = [
  "What is the median age of our family? What is the mode age?",
  "If there are 100 windows on ONE side of a building and each one takes about 5 minutes to wash, how long (in minutes) would it take to wash every window? How long would it take 2 men, working 8 hours a day with a one hour lunch break?","An anagram is a word, that when spelled differently, makes another word (ex: iceman / cinema). What are 10 more anagrams you can think of?", "I estimate I write about 100 lines of code a day. Excluding weekends, how many lines of code have I written in a year? There are about 46 lines on a full page. How many pages of code have I written in a year?", "How would you explain to Ava the concept of multiplication?", "A man says he drives 100,000 miles a year because of his job as a traveling salesman. Let's say he drives about 20 miles before lunch and another 15 after lunch, then another 25 to get home. He works 5 days a week. Is his claim true?",
  "Estimate how much time, in days you have spent in the bathroom?",
  "Estimate, how much time, in days you have spent playing videogames",
  "What is PI, what is it's significance with regards to circles? Calculate the area of a circle that has a diameter of 10",
  "Look up how many college football players there are. Now look up how many NFL players there are. What percentage of college players will be in the NFL?",
  "How many times approximately would Kingston have to play `I'm All the Way Up` to take up the span of a year?"
];


$("button").click(function(){

  var rando = Math.floor(Math.random() * questions.length);

  questions.slice(rando,1);

  $("#questions").text(questions[rando]);

});
