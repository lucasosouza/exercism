//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  question = /.*\?$/
  yellStart = /^[A-Z\s]{2,}/ //start screaming
  yellEnd  = /[A-Z]+!$/ //end screaming
  silence = /^[^a-zA-Z0-9]*$/
  if (silence.test(input)) return 'Fine. Be that way!'
  else if (yellStart.test(input) || yellEnd.test(input)) return 'Woah, chill out!'
  else if (question.test(input)) return 'Sure.'
  else return 'Whatever.'
};

module.exports = Bob;


Bob answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.