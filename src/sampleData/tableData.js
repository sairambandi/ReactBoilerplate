export const apiData = [
  {
    id: { value: "1" },
    status: { value: "ss" },
    reason: {
      id: "reason",
      value: "reason",
      isRequired: true,
      editType: "TEXT_FIELD",
      isEditable: true
    },
    amount: {
      id: "amount",
      value: 0.0,
      minValue: 0,
      editType: "TEXT_FIELD",
      isValid: true,
      isRequired: true,
      isEditable: true
    },
    user: { value: "sairam" },
    isEditmode: false
  }
];

export const initialRecord = {
  id: { value: "" },
  status: { value: "" },
  reason: {
    name: "reason",
    value: "",
    options: [
      {
        label: "reason 1",
        value: "reason1"
      },
      {
        label: "reason 2",
        value: "reason2"
      }
    ],
    isRequired: true,
    editType: "DROP_DOWN",
    isEditable: true
  },
  amount: {
    name: "amount",
    value: "",
    minValue: 0,
    editType: "NUMBER",
    isValid: true,
    isRequired: true,
    isEditable: true
  },
  startDate: {
    name: "startDate",
    value: "",
    minDate: new Date(),
    editType: "DATE_PICKER",
    isValid: true,
    isRequired: true,
    isEditable: true
  },
  enddate: {
    name: "startDate",
    value: "",
    minDate: new Date(),
    editType: "DATE_PICKER",
    isValid: true,
    isRequired: false,
    isEditable: true
  },
  createdDate: {
    name: "startDate",
    value: "",
    minDate: new Date(),
    editType: "DATE_PICKER",
    isValid: true,
    isRequired: false,
    isEditable: true
  },
  user: { value: "" },
  isEditmode: true
};

export const displayData = [
  {
    id: 1,
    image: "",
    formId: "1",
    formName: "aaaa",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  },
  {
    id: 2,
    image: "",
    formId: "2",
    formName: "bbb 2",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  },
  {
    id: 3,
    image: "",
    formId: "3",
    formName: "ccc 3",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  },
  {
    id: 4,
    image: "",
    formId: "4",
    formName: "ddd 108",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  },
  {
    id: 5,
    image: "",
    formId: "5",
    formName: "fff 5",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "No"
  },
  {
    id: 6,
    image: "",
    formId: "6",
    formName: "eee 6",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  },
  {
    id: 7,
    image: "",
    formId: "7",
    formName: "abbb 7",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "No"
  },
  {
    id: 8,
    image: "",
    formId: "8",
    formName: "otto 8",
    fillIn: "Edit",
    viewForms: "View",
    isMandatory: "Yes"
  }
];
