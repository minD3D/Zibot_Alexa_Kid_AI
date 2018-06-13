'use strict';
const SKILL_NAME = 'Hello Zibot';

var Alexa = require('alexa-sdk');
var audioData = require('./audioAssets');
var constants = require('./constants');

const https = require('https');
const StoryData = require('./story_source.js');
const LanguageData = require('./TempDictionary.js');
const languageStrings = {
    en: {
        translation: {
            WELCOME: 'Hi I wake up! What do you want to do with me?',
            HELP: 'Say Zibot fact to listen about zibot, or tell me story to listen about story',
            ABOUT: 'I can speak English, Chinese, Korean! Ask me whatever you want!',
            STOP: 'Okay, see you next time!',
        },
    },
    // , 'de-DE': { 'translation' : { 'TITLE'   : "Local Helfer etc." } }
};

var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        /*
         *  All Intent Handlers for state : START_MODE
         */
        'LaunchRequest' : function () {
            // Initialize Attributes
            this.attributes['playOrder'] = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
            this.attributes['index'] = 0;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['loop'] = false; //do not loop on the list of fairytale
            this.attributes['shuffle'] = false;
            this.attributes['playbackIndexChanged'] = false;
            this.attributes['quizState']=0;
            //  Change state to START_MODE
            this.handler.state = constants.states.START_MODE;

            var message = 'I\'m ready to tell you story!';
            var reprompt = 'You can say, start story to begin.';

            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayAudio' : function () {
            if (!this.attributes['playOrder']) {
                // Initialize Attributes if undefined.
                this.attributes['playOrder'] = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
                this.attributes['index'] = 0;
                this.attributes['offsetInMilliseconds'] = 0;
                this.attributes['loop'] = false; //do not loop on the list of fairytale
                this.attributes['shuffle'] = false;
                this.attributes['playbackIndexChanged'] = true;
                //  Change state to START_MODE
                this.handler.state = constants.states.START_MODE;
            }
            controller.play.call(this);
        },
        'AMAZON.HelpIntent' : function () {
            var message = 'I\'m ready to tell you story!, start story to begin the story.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand. Please say, start, to begin the story.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'GetZibotFactIntent' : function () {
          const GET_FACT_MESSAGE = 'Hello Im zibot! ';
          const data = [
            'Minji is Zibot English version developer',
            'Zibot is from China I can speak Mandarin, English, Korean',
            'Leo made me 3 years before, He is really nice guy!',
            'I can sing a song with you! ask me sing together',
            'If you want to speak Mandarin just ask me',
            'Maybe I can help you math homework! Its secret for only you and me',
            'Zibot have several version check on Zibot website'
          ];
          var randomFact = randomArrayElement(data);
          var speechOutput = GET_FACT_MESSAGE + randomFact;

          this.response.speak(speechOutput).listen(speechOutput);
          this.emit(':responseReady');
        },
        'MickeyStoryIntent' : function () {
          const storys = randomArrayElement(StoryData.dataByCharacterName('Mickey Mouse'));
          this.attributes['storys'] = storys.name;
          this.attributes['quizState'] = 1;
          var speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
          var reprompt = 'You can say, start story to begin.';

          this.response.speak(speechOutput).listen(reprompt);
          this.emit(':responseReady');
         },
        'DonaldStoryIntent' : function () {
          const storys = randomArrayElement(StoryData.dataByCharacterName('Donald Duck'));
          this.attributes['storys'] = storys.name;
          this.attributes['quizState'] = 1;
          var speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
          var reprompt = 'You can say, start story to begin.';

          this.response.speak(speechOutput).listen(reprompt);
          this.emit(':responseReady');
        },
        'PoohStoryIntent' : function () {
          const storys = randomArrayElement(StoryData.dataByCharacterName('Pooh'));
          this.attributes['storys'] = storys.name;
          this.attributes['quizState'] = 1;
          var speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
          var reprompt = 'You can say, start story to begin.';

          this.response.speak(speechOutput).listen(reprompt);
          this.emit(':responseReady');
         },
         'AMAZON.YesIntent' : function () {
              const StoryName = this.attributes['storys'];
              this.attributes['quiz']=[];
              this.attributes['quiz'].push(StoryName);

              var storysDetails = StoryData.dataByStoryName(StoryName);
              var speechOutput = `This story is about ${storysDetails.name
                 }, ${storysDetails.description
                 }. Did you know about this story?
                 <say-as interpret-as="interjection"> There are Quiz!</say-as>`;

             this.response.speak(speechOutput);
             this.getResponse();
         },
        'QuizIntent' : function () {
          const QuizTrigger = this.attributes['quizState'];
          var speechOutput = '';
          if(QuizTrigger==1){
            const quizList = this.attributes['quiz'];
            const question = StoryData.dataByStoryName(randomArrayElement(quizList));
            this.attributes['answer'] = question.answer;
            speechOutput = 'Are you ready for quiz? '+ question.quiz;
            this.response.speak(speechOutput).listen(speechOutput);
            this.emit(':responseReady');
          }
          else{
            const speechOutput = 'Before start quiz, I need to tell you story. If you want to listen story tell me start story.';
            this.response.speak(speechOutput).listen(speechOutput);
            this.emit(':responseReady');
          }
         },
         'AMAZON.FallbackIntent' : function () {
          const sorryList=['Sorry I will study more','Maybe I can\'t do', 'I will study more for you', 'Sorry Tell me another' ]
          const falseList=['Nop that is not!','Maybe It is not correct', 'False' ]
          const QuizTrigger = this.attributes['quizState'];
          const QuizAnswer = this.attributes['answer'];
          if(QuizTrigger==1){
            const speechOutput = randomArrayElement(falseList)+'. It is '+QuizAnswer;
             this.response.speak(speechOutput).listen(speechOutput);
             this.emit(':responseReady');
           }
          else{
            const speechOutput = randomArrayElement(sorryList);
             this.response.speak(speechOutput).listen(speechOutput);
             this.emit(':responseReady');
          }
         },
        'MathHelperIntent' : function () {
          var message = 'I\'m MathHelperIntent to tell you story!';
          var reprompt = 'You can say, start story to begin.';

          this.response.speak(message).listen(reprompt);
          this.emit(':responseReady');
         },

//
// const MathHelperHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//         const attributesManager = handlerInput.attributesManager;
//         const sessionAttributes = attributesManager.getSessionAttributes();
//         sessionAttributes.num1 = request.intent.slots.Numone.value;
//         sessionAttributes.num2 = request.intent.slots.Numtwo.value;
//         sessionAttributes.calc = request.intent.slots.Calculate.value;
//         return request.type === 'IntentRequest' && request.intent.name === 'MathHelperIntent';
//     },
//     handle(handlerInput) {
//         const attributesManager = handlerInput.attributesManager;
//         const responseBuilder = handlerInput.responseBuilder;
//
//         const sessionAttributes = attributesManager.getSessionAttributes();
//
//         const num1 = sessionAttributes.num1;
//         const num2 = sessionAttributes.num2;
//         const calc = sessionAttributes.calc;
//         const answer = Calculation(num1,num2,calc);
//         const speechOutput = 'Hmm... I found the answer. ' + num1 +' '+ calc +' ' + num2 + " equal " + answer;
//
//         return responseBuilder
//               .speak(speechOutput)
//               .reprompt(speechOutput)
//               .getResponse();
//
//     },
// };
        'TranslateIntent' : function () {
          var message = 'I\'m TranslateIntent to tell you story!';
          var reprompt = 'You can say, start story to begin.';

          this.response.speak(message).listen(reprompt);
          this.emit(':responseReady');
         }

    }),

    playModeIntentHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Intent Handlers for state : PLAY_MODE
         */
        'LaunchRequest' : function () {
            /*
             *  Session resumed in PLAY_MODE STATE.
             *  If playback had finished during last session :
             *      Give welcome message.
             *      Change state to START_STATE to restrict user inputs.
             *  Else :
             *      Ask user if he/she wants to resume from last position.
             *      Change state to RESUME_DECISION_MODE
             */
            var message;
            var reprompt;
            if (this.attributes['playbackFinished']) {
                this.handler.state = constants.states.START_MODE;
                message = 'I\'m ready to tell you story!';
                reprompt = 'start story to begin the story.';
            } else {
                this.handler.state = constants.states.RESUME_DECISION_MODE;
                message = 'You were listening to ' + audioData[this.attributes['playOrder'][this.attributes['index']]].title +
                    ' Would you like to resume?';
                reprompt = 'You can say yes to resume or no to play from the top.';
            }

            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'PlayAudio' : function () { controller.play.call(this) },
        'AMAZON.NextIntent' : function () { controller.playNext.call(this) },
        'AMAZON.PreviousIntent' : function () { controller.playPrevious.call(this) },
        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this) },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this) },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },
        'AMAZON.LoopOnIntent' : function () { controller.loopOn.call(this) },
        'AMAZON.LoopOffIntent' : function () { controller.loopOff.call(this) },
        'AMAZON.ShuffleOnIntent' : function () { controller.shuffleOn.call(this) },
        'AMAZON.ShuffleOffIntent' : function () { controller.shuffleOff.call(this) },
        'AMAZON.StartOverIntent' : function () { controller.startOver.call(this) },
        'AMAZON.HelpIntent' : function () {
            // This will called while audio is playing and a user says "ask <invocation_name> for help"
            var message = 'You are listening to fairy tale story. You can say, Next or Previous to navigate through the story. ' +
                'At any time, you can say Pause to pause the story and Resume to resume.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, I could not understand. You can say, Next or Previous to navigate through the story.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }),

    remoteControllerHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Requests are received using a Remote Control. Calling corresponding handlers for each of them.
         */
        'PlayCommandIssued' : function () { controller.play.call(this) },
        'PauseCommandIssued' : function () { controller.stop.call(this) },
        'NextCommandIssued' : function () { controller.playNext.call(this) },
        'PreviousCommandIssued' : function () { controller.playPrevious.call(this) }
    }),

    resumeDecisionModeIntentHandlers : Alexa.CreateStateHandler(constants.states.RESUME_DECISION_MODE, {
        /*
         *  All Intent Handlers for state : RESUME_DECISION_MODE
         */
        'LaunchRequest' : function () {
            var message = 'You were listening to ' + audioData[this.attributes['playOrder'][this.attributes['index']]].title +
                ' story Would you like to resume?';
            var reprompt = 'You can say yes to resume or no to play from the top.';
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.YesIntent' : function () { controller.play.call(this) },
        'AMAZON.NoIntent' : function () { controller.reset.call(this) },
        'AMAZON.HelpIntent' : function () {
            var message = 'You were listening to ' + audioData[this.attributes['index']].title +
                ' Would you like to resume?';
            var reprompt = 'You can say yes to resume or no to play from the top.';
            this.response.speak(message).listen(reprompt);
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () {
            var message = 'Good bye.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Sorry, this is not a valid command. Please say help to hear what you can say.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    })
};

module.exports = stateHandlers;

var controller = function () {
    return {
        play: function () {
            /*
             *  Using the function to begin playing audio when:
             *      Play Audio intent invoked.
             *      Resuming audio when stopped/paused.
             *      Next/Previous commands issued.
             */
            this.handler.state = constants.states.PLAY_MODE;

            if (this.attributes['playbackFinished']) {
                // Reset to top of the playlist when reached end.
                this.attributes['index'] = 0;
                this.attributes['offsetInMilliseconds'] = 0;
                this.attributes['playbackIndexChanged'] = true;
                this.attributes['playbackFinished'] = false;
            }

            var token = String(this.attributes['playOrder'][this.attributes['index']]);
            var playBehavior = 'REPLACE_ALL';
            var fairytale = audioData[this.attributes['playOrder'][this.attributes['index']]];
            var offsetInMilliseconds = this.attributes['offsetInMilliseconds'];
            // Since play behavior is REPLACE_ALL, enqueuedToken attribute need to be set to null.
            this.attributes['enqueuedToken'] = null;

            if (canThrowCard.call(this)) {
                var cardTitle = 'Playing ' + fairytale.title;
                var cardContent = 'Playing ' + fairytale.title;
                this.response.cardRenderer(cardTitle, cardContent, null);
            }
            var message = "This is " + audioData[this.attributes['index']].title;
            this.response.speak(message).audioPlayerPlay(playBehavior, fairytale.url, token, null, offsetInMilliseconds);
            this.emit(':responseReady');
        },
        stop: function () {
            /*
             *  Issuing AudioPlayer.Stop directive to stop the audio.
             *  Attributes already stored when AudioPlayer.Stopped request received.
             */
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        playNext: function () {
            /*
             *  Called when AMAZON.NextIntent or PlaybackController.NextCommandIssued is invoked.
             *  Index is computed using token stored when AudioPlayer.PlaybackStopped command is received.
             *  If reached at the end of the playlist, choose behavior based on "loop" flag.
             */
            var index = this.attributes['index'];
            index += 1;
            // Check for last audio file.
            if (index === audioData.length) {
                if (this.attributes['loop']) {
                    index = 0;
                } else {
                    // Reached at the end. Thus reset state to start mode and stop playing.
                    this.handler.state = constants.states.START_MODE;

                    var message = 'You have reached at the end of the story list.';
                    this.response.speak(message).audioPlayerStop();
                    return this.emit(':responseReady');
                }
            }
            // Set values to attributes.
            this.attributes['index'] = index;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;

            controller.play.call(this);
        },
        playPrevious: function () {
            /*
             *  Called when AMAZON.PreviousIntent or PlaybackController.PreviousCommandIssued is invoked.
             *  Index is computed using token stored when AudioPlayer.PlaybackStopped command is received.
             *  If reached at the end of the playlist, choose behavior based on "loop" flag.
             */
            var index = this.attributes['index'];
            index -= 1;
            // Check for last audio file.
            if (index === -1) {
                if (this.attributes['loop']) {
                    index = audioData.length - 1;
                } else {
                    // Reached at the end. Thus reset state to start mode and stop playing.
                    this.handler.state = constants.states.START_MODE;

                    var message = 'You have reached at the start of the story list.';
                    this.response.speak(message).audioPlayerStop();
                    return this.emit(':responseReady');
                }
            }
            // Set values to attributes.
            this.attributes['index'] = index;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;

            controller.play.call(this);
        },
        loopOn: function () {
            // Turn on loop play.
            this.attributes['loop'] = true;
            var message = 'Loop turned on.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        loopOff: function () {
            // Turn off looping
            this.attributes['loop'] = false;
            var message = 'Loop turned off.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        shuffleOn: function () {
            // Turn on shuffle play.
            this.attributes['shuffle'] = true;
            shuffleOrder((newOrder) => {
                // Play order have been shuffled. Re-initializing indices and playing first song in shuffled order.
                this.attributes['playOrder'] = newOrder;
                this.attributes['index'] = 0;
                this.attributes['offsetInMilliseconds'] = 0;
                this.attributes['playbackIndexChanged'] = true;
                controller.play.call(this);
            });
        },
        shuffleOff: function () {
            // Turn off shuffle play.
            if (this.attributes['shuffle']) {
                this.attributes['shuffle'] = false;
                // Although changing index, no change in audio file being played as the change is to account for reordering playOrder
                this.attributes['index'] = this.attributes['playOrder'][this.attributes['index']];
                this.attributes['playOrder'] = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
            }
            controller.play.call(this);
        },
        startOver: function () {
            // Start over the current audio file.
            this.attributes['offsetInMilliseconds'] = 0;
            controller.play.call(this);
        },
        reset: function () {
            // Reset to top of the playlist.
            this.attributes['index'] = 0;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            controller.play.call(this);
        }
    }
}();

function canThrowCard() {
    /*
     * To determine when can a card should be inserted in the response.
     * In response to a PlaybackController Request (remote control events) we cannot issue a card,
     * Thus adding restriction of request type being "IntentRequest".
     */
    if (this.event.request.type === 'IntentRequest' && request.intent.name === 'PlayAudio' && this.attributes['playbackIndexChanged']) {
        this.attributes['playbackIndexChanged'] = false;
        return true;
    } else {
        return false;
    }
}

function shuffleOrder(callback) {
    // Algorithm : Fisher-Yates shuffle
    var array = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
    var currentIndex = array.length;
    var temp, randomIndex;

    while (currentIndex >= 1) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    callback(array);
}

function randomArrayElement(array) {
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return (array[i]);
}


function Calculation(num1,num2,calc) {
  var answer;
  num1 *= 1;
  num2 *= 1;
  if(calc='plus'){
    answer= num1+num2;
    return answer;
  }
  else if(calc='minus'){
    answer= num1-num2;
    return answer;
  }
  else if(calc='multiply'){
    answer= num1*num2;
    return answer;
  }
  else if(calc='devide'){
    answer= num1/num2;
    return answer;
  }
  else
    return "I don't know"
}
