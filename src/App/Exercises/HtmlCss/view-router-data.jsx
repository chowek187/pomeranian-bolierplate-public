import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { backgroundsRouterMetaData } from './Backgrounds/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { MediaFilesMetaData } from './MediaFiles/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { StandardTagsRouterMetaData } from './StandardTags/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  StandardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  backgroundsRouterMetaData,
  MediaFilesMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
