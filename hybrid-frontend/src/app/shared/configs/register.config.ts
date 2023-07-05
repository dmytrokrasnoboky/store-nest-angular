import {
  FormTypes,
  IFormConfig,
  IFormGroup,
} from '../models/checkout-form.model';

export const formConfig: Array<IFormConfig | IFormGroup> = [
  {
    type: FormTypes.FORM_GROUP,
    group: [
      {
        type: FormTypes.FORM_ITEM,
        name: 'email',
        value: '',
        label: 'Email',
        required: true,
        inputType: 'email',
      },
      {
        type: FormTypes.FORM_ITEM,
        name: 'password',
        value: '',
        label: 'Password',
        required: true,
        inputType: 'password',
      },
    ],
  },
  {
    type: FormTypes.FORM_ITEM,
    name: 'companyName',
    value: '',
    label: 'Firmenname',
    required: true,
  },
  {
    type: FormTypes.FORM_GROUP,
    group: [
      {
        type: FormTypes.FORM_ITEM,
        name: 'firstName',
        value: '',
        label: 'Vorname',
        required: false,
      },
      {
        type: FormTypes.FORM_ITEM,
        name: 'lastName',
        value: '',
        label: 'Nachname',
        required: false,
      },
    ],
  },
  {
    type: FormTypes.FORM_ITEM,
    name: 'street',
    value: '',
    label: 'Strasse',
    required: true,
  },
  {
    type: FormTypes.FORM_GROUP,
    group: [
      {
        type: FormTypes.FORM_ITEM,
        name: 'zip',
        value: '',
        label: 'Postleizahl',
        required: true,
      },
      {
        type: FormTypes.FORM_ITEM,
        name: 'city',
        value: '',
        label: 'Stadt',
        required: true,
      },
    ],
  },
  {
    type: FormTypes.FORM_ITEM,
    name: 'country',
    value: '',
    label: 'Land/Region',
    required: true,
  },
  {
    type: FormTypes.FORM_ITEM,
    name: 'companyIdentificationNumber',
    value: '',
    label: 'EIN',
    required: true,
  },
];
