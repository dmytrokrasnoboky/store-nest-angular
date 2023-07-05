import {
  FormTypes,
  IFormConfig,
  IFormGroup,
} from '../models/checkout-form.model';

export const formConfig: Array<IFormConfig | IFormGroup> = [
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
];
