export enum FormTypes {
  FORM_GROUP,
  FORM_ITEM,
}
export interface IFormConfig {
  type: FormTypes.FORM_ITEM;
  name: string;
  value: string;
  label: string;
  required: boolean;
  inputType?: string;
}

export interface IFormGroup {
  type: FormTypes.FORM_GROUP;
  group: IFormConfig[];
}
