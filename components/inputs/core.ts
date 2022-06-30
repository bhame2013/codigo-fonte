import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { YupValidation } from "src/utils/yup-validation";

import { RadioInput } from "./radios";
import { InputComponent } from "./input";
import { InputEditComponent } from "./input-edit";
import { TextAreaComponent } from "./textarea";

export {
  Form,
  YupValidation,
  RadioInput,
  InputComponent,
  InputEditComponent,
  TextAreaComponent,
};

export type { FormHandles };
