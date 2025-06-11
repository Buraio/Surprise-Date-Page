import { createNoBtnEvent } from "./scripts/validation.js";
import { createPopupCloseEvent } from "./scripts/popup.js";
import { createYesBtnEvent } from "./scripts/validation.js";
import { toggleBackgroundImgEvent } from "./scripts/background.js";

createPopupCloseEvent();

createYesBtnEvent();

createNoBtnEvent();

toggleBackgroundImgEvent();
