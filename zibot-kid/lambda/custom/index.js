
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

///////////////////////////////////////////////

const SKILL_NAME = 'Hello Zibot';
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


const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');
const https = require('https');
const StoryData = require('./story_source.js');
const LanguageData = require('./TempDictionary.js');

// 1. Handlers ===================================================================================



const LaunchHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const requestAttributes = attributesManager.getRequestAttributes();
        const speechOutput = `${requestAttributes.t('WELCOME')} ${requestAttributes.t('HELP')}`;
        return responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();
    },
};

// const GetZibotFactHandler = {
//   canHandle(handlerInput) {
//     const request = handlerInput.requestEnvelope.request;
//     return (request.type === 'IntentRequest' && request.intent.name === 'GetZibotFactIntent');
//   },
//   handle(handlerInput) {
//     const randomFact = randomArrayElement(data);
//     const speechOutput = GET_FACT_MESSAGE + randomFact;
//
//     return handlerInput.responseBuilder
//       .speak(speechOutput)
//       .reprompt(speechOutput)
//       .getResponse();
//   },
// };
//
// function randomArrayElement(array) {
//     let i = 0;
//     i = Math.floor(Math.random() * array.length);
//     return (array[i]);
// }
//
//
// const MickeyStoryHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'MickeyStoryIntent';
//     },
//     handle(handlerInput) {
//       const attributesManager = handlerInput.attributesManager;
//       const responseBuilder = handlerInput.responseBuilder;
//
//       const requestAttributes = attributesManager.getRequestAttributes();
//       const sessionAttributes = attributesManager.getSessionAttributes();
//       const storys = randomArrayElement(StoryData.dataByCharacterName('Mickey Mouse'));
//       sessionAttributes.storys = storys.name;
//       sessionAttributes.quizState = 1;
//
//       const speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
//       return responseBuilder
//           .speak(speechOutput)
//           .reprompt(speechOutput)
//           .getResponse();
//     },
// };
//
//
// const DonaldStoryHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'DonaldStoryIntent';
//     },
//     handle(handlerInput) {
//       const attributesManager = handlerInput.attributesManager;
//       const responseBuilder = handlerInput.responseBuilder;
//
//       const requestAttributes = attributesManager.getRequestAttributes();
//       const sessionAttributes = attributesManager.getSessionAttributes();
//       const storys = randomArrayElement(StoryData.dataByCharacterName('Donald Duck'));
//       sessionAttributes.storys = storys.name;
//       const speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
//       return responseBuilder
//           .speak(speechOutput)
//           .reprompt(speechOutput)
//           .getResponse();
//     },
// };
//
//
// const PoohStoryHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'PoohStoryIntent';
//     },
//     handle(handlerInput) {
//       const attributesManager = handlerInput.attributesManager;
//       const responseBuilder = handlerInput.responseBuilder;
//
//       const requestAttributes = attributesManager.getRequestAttributes();
//       const sessionAttributes = attributesManager.getSessionAttributes();
//       const storys = randomArrayElement(StoryData.dataByCharacterName('Pooh'));
//       sessionAttributes.storys = storys.name;
//       const speechOutput = `I have ${storys.about} storys, Do you want to listen about, ${storys.name}?`;
//       return responseBuilder
//           .speak(speechOutput)
//           .reprompt(speechOutput)
//           .getResponse();
//     },
// };
//
// const YesHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.YesIntent';
//     },
//     handle(handlerInput) {
//         const attributesManager = handlerInput.attributesManager;
//         const responseBuilder = handlerInput.responseBuilder;
//
//         const sessionAttributes = attributesManager.getSessionAttributes();
//         const StoryName = sessionAttributes.storys;
//         sessionAttributes.quiz=[];
//         sessionAttributes.quiz.push(StoryName);
//         const storysDetails = StoryData.dataByStoryName(StoryName);
//         const speechOutput = `This story is about ${storysDetails.name
//         }, ${storysDetails.description
//         }. Did you know about this story?
//         <say-as interpret-as="interjection"> There are Quiz!</say-as>`;
//
//         return responseBuilder
//             .speak(speechOutput)
//             .reprompt(speechOutput)
//             .getResponse();
//     },
// };
//
//
// const QuizHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'QuizIntent';
//     },
//     handle(handlerInput) {
//         const attributesManager = handlerInput.attributesManager;
//         const responseBuilder = handlerInput.responseBuilder;
//
//         const sessionAttributes = attributesManager.getSessionAttributes();
//         const QuizTrigger = sessionAttributes.quizState;
//         if(QuizTrigger==1){
//           const quizList = sessionAttributes.quiz;
//           const question = StoryData.dataByStoryName(randomArrayElement(quizList));
//           sessionAttributes.answer = question.answer;
//           const speechOutput = 'Are you ready for quiz? '+ question.quiz;
//           return responseBuilder
//                 .speak(speechOutput)
//                 .reprompt(speechOutput)
//                 .getResponse();
//         }
//         else{
//           const speechOutput = 'Before start quiz, I need to tell you story. If you want to listen story tell me start story.';
//           return responseBuilder
//                 .speak(speechOutput)
//                 .reprompt(speechOutput)
//                 .getResponse();
//         }
//
//     },
// };




const FallbackHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        // const sessionAttributes = attributesManager.getSessionAttributes();
        // const StoryName = sessionAttributes.storys;
        // sessionAttributes.quiz=[];
        // sessionAttributes.quiz.push(StoryName);
        // const storysDetails = StoryData.dataByStoryName(StoryName)
        const sessionAttributes = attributesManager.getSessionAttributes();
        const sorryList=['Sorry I will study more','Maybe I can\'t do', 'I will study more for you', 'Sorry Tell me another' ]
        const falseList=['Nop that is not!','Maybe It is not correct', 'False' ]
        const QuizTrigger = sessionAttributes.quizState;
        const QuizAnswer = sessionAttributes.answer;
        if(QuizTrigger==1){
          const speechOutput = randomArrayElement(falseList)+'. It is '+QuizAnswer;
          return responseBuilder
              .speak(speechOutput)
              .reprompt(speechOutput)
              .getResponse();
          }
        else{
          const speechOutput = randomArrayElement(sorryList);
          return responseBuilder
              .speak(speechOutput)
              .reprompt(speechOutput)
              .getResponse();
            }
    },
};

//
// const QuizAnswerHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'quizAnswerIntent';
//     },
//     handle(handlerInput) {
//         const attributesManager = handlerInput.attributesManager;
//         const responseBuilder = handlerInput.responseBuilder;
//         const sessionAttributes = attributesManager.getSessionAttributes();
//         const sorryList=['Sorry I will study more','Maybe I can\'t do', 'I will study more for you', 'Sorry Tell me another' ]
//         const trueList=['Ding dong You are right!','You are ringt! You are so smart!', 'Smart! It\'s true']
//         const QuizTrigger = sessionAttributes.quizState;
//         if(QuizTrigger==1){
//           const speechOutput = randomArrayElement(trueList);
//           return responseBuilder
//               .speak(speechOutput)
//               .reprompt(speechOutput)
//               .getResponse();
//           }
//         else{
//           const speechOutput = randomArrayElement(sorryList);
//           return responseBuilder
//               .speak(speechOutput)
//               .reprompt(speechOutput)
//               .getResponse();
//             }
//     },
// };
//

const TranslateHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = attributesManager.getSessionAttributes();
        sessionAttributes.mword = request.intent.slots.MandarinWord;
        return request.type === 'IntentRequest' && request.intent.name === 'TranslateIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        const mword = sessionAttributes.mword;
        const answer = LanguageData.dataSearch(mword.value,'Mandarin');
        const speechOutput = 'The word ' + answer.English +' is  '+ answer.Mandarin +'.';
         // const speechOutput = 'here';

        return responseBuilder
              .speak(speechOutput)
              .reprompt(speechOutput)
              .getResponse();

    },
};

const MathHelperHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = attributesManager.getSessionAttributes();
        sessionAttributes.num1 = request.intent.slots.Numone.value;
        sessionAttributes.num2 = request.intent.slots.Numtwo.value;
        sessionAttributes.calc = request.intent.slots.Calculate.value;
        return request.type === 'IntentRequest' && request.intent.name === 'MathHelperIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const sessionAttributes = attributesManager.getSessionAttributes();

        const num1 = sessionAttributes.num1;
        const num2 = sessionAttributes.num2;
        const calc = sessionAttributes.calc;
        const answer = Calculation(num1,num2,calc);
        const speechOutput = 'Hmm... I found the answer. ' + num1 +' '+ calc +' ' + num2 + " equal " + answer;

        return responseBuilder
              .speak(speechOutput)
              .reprompt(speechOutput)
              .getResponse();

    },
};

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
};



//
// const AboutHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'AboutIntent';
//     },
//     handle(handlerInput) {
//         const attributesManager = handlerInput.attributesManager;
//         const responseBuilder = handlerInput.responseBuilder;
//
//         const requestAttributes = attributesManager.getRequestAttributes();
//
//         return responseBuilder
//             .speak(requestAttributes.t('ABOUT'))
//             .getResponse();
//     },
// };

// const AttractionHandler = {
//     canHandle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//
//         return request.type === 'IntentRequest' && request.intent.name === 'AttractionIntent';
//     },
//     handle(handlerInput) {
//         const request = handlerInput.requestEnvelope.request;
//         const responseBuilder = handlerInput.responseBuilder;
//
//         let distance = 200;
//         if (request.intent.slots.distance.value && request.intent.slots.distance.value !== "?") {
//             distance = request.intent.slots.distance.value;
//         }
//
//         const attraction = randomArrayElement(getAttractionsByDistance(distance));
//
//         const speechOutput = `Try ${
//             attraction.name}, which is ${
//             attraction.distance === '0' ? 'right downtown. ' : `${attraction.distance} miles away. Have fun! `
//         }${attraction.description}`;
//
//         return responseBuilder.speak(speechOutput).getResponse();
//     },
// };


const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const requestAttributes = attributesManager.getRequestAttributes();
        return responseBuilder
            .speak(requestAttributes.t('HELP'))
            .reprompt(requestAttributes.t('HELP'))
            .getResponse();
    },
};

const StopHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.NoIntent'
            || request.intent.name === 'AMAZON.CancelIntent'
            || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const requestAttributes = attributesManager.getRequestAttributes();
        return responseBuilder
            .speak(requestAttributes.t('STOP'))
            .getResponse();
    },
};

const SessionEndedHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const request = handlerInput.requestEnvelope.request;

        console.log(`Error handled: ${error.message}`);
        console.log(` Original request was ${JSON.stringify(request, null, 2)}\n`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    },
};


// 3. Helper Functions ==========================================================================


const LocalizationInterceptor = {
    process(handlerInput) {
        const localizationClient = i18n.use(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: languageStrings,
            returnObjects: true,
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function (...args) {
            return localizationClient.t(...args);
        };
    },
};

// 4. Export =====================================================================================

const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchHandler,
        // GetZibotFactHandler,
        // MickeyStoryHandler,
        // DonaldStoryHandler,
        // PoohStoryHandler,
        // QuizHandler,
        // QuizAnswerHandler,
        // MathHelperHandler,
        TranslateHandler,
        // FallbackHandler,
        // YesHandler,
        HelpHandler,
        StopHandler,
        SessionEndedHandler
    )
    .addRequestInterceptors(LocalizationInterceptor)
    .addErrorHandlers(ErrorHandler)
    .lambda();
