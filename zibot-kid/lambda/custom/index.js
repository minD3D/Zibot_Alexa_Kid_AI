
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

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    const randomFact = cookbook.getRandomItem(data);
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .getResponse();
  },
};

function randomArrayElement(array) {
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return (array[i]);
}


const MickeyStoryHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'MickeyStoryIntent';
    },
    handle(handlerInput) {
      const attributesManager = handlerInput.attributesManager;
      const responseBuilder = handlerInput.responseBuilder;

      const requestAttributes = attributesManager.getRequestAttributes();
      const sessionAttributes = attributesManager.getSessionAttributes();
      const storys = randomArrayElement(StoryData.dataByType('long story'));
      sessionAttributes.storys = storys.name;
      const speechOutput = `I have Mickey mouse storys, Do you want to listen about, ${storys.name}?`;
      return responseBuilder
          .speak(speechOutput)
          .reprompt(speechOutput)
          .getResponse();
    },
};

const YesHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const sessionAttributes = attributesManager.getSessionAttributes();
        const StoryName = sessionAttributes.story;
        const storysDetails = StoryData.dataByName(StoryName);////////////////////////////
        const speechOutput = `This story is about ${storysDetails.name
        }, ${storysDetails.description
        } Did you know about this story?
        <say-as interpret-as="interjection">Remember for Quiz!</say-as>`;

        return responseBuilder
            .speak(speechOutput)
            .getResponse();
    },
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
        GetNewFactHandler,
        //AboutHandler,
        MickeyStoryHandler,
        //MickeyFactHandler,
        YesHandler,
        HelpHandler,
        StopHandler,
        SessionEndedHandler
    )
    .addRequestInterceptors(LocalizationInterceptor)
    .addErrorHandlers(ErrorHandler)
    .lambda();
