import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { JsNumbersRouterMetaData } from './JsNumbers/router-data';
import { MathExerciseRouterMetaData } from './Math/router-data';
import { JsNumbersTrainingRouterMetaData } from './JsNumbersTraining/router-data';
import { JsStringCodingRouterMetaData } from './JsStringCoding/router-data';
import { JsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { JsStringConversionRouterMetaData } from './JsStringConversion/router-data';
import { JsArrayBasicsRouterMetaData } from './JsArrayBasics/router-data';
import { JsArrayMethodsExerciseRouterMetaData } from './JsArrayMethodsExercise/router-data';
import { ObjectsRouterMetaData } from './Objects/router-data';
import { dateAndTimeMetaData } from './DateAndTime/router-data';
import { blockRouterMetaData as JsFunctionBasicsMetaData } from './JsFunctionsBasics/router-data';
import { SetTimeoutRouterMetaData } from './SetTimeout/router-data';
import { animationsJSMetaData } from './AnimationsJS/router-data';
import { HitTheMoleGameRouterMetaData } from './HitTheMoleGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  JsNumbersRouterMetaData,
  MathExerciseRouterMetaData,
  JsNumbersTrainingRouterMetaData,
  JsStringCodingRouterMetaData,
  JsStringTrainingRouterMetaData,
  JsStringConversionRouterMetaData,
  JsArrayBasicsRouterMetaData,
  JsArrayMethodsExerciseRouterMetaData,
  ObjectsRouterMetaData,
  dateAndTimeMetaData,
  JsFunctionBasicsMetaData,
  SetTimeoutRouterMetaData,
  animationsJSMetaData,
  HitTheMoleGameRouterMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
