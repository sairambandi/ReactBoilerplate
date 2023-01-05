import "./styles.css";
import {
  Button,
  PrimaryButton,
  SecButton,
  TextField,
  Checkbox,
  RadioGroup,
  AutoSuggestions,
  CheckboxGroup,
  DataTable,
  Datepicker,
  DateRangepicker,
  Alert,
  EditableTable
  // Link
} from "./components/index";
import { useState } from "react";
import { countries } from "./sampleData/counterData";
import { displayData, initialRecord, apiData } from "./sampleData/tableData";

export default function App() {
  const formFieldsObj = {
    fullname: {
      id: "fullname",
      label: "Full Name",
      value: "",
      isRequired: true,
      isValid: true,
      errorMsg: "Please enter full name",
      validFormat: "CHARS_SPACE",
      readOnly: false,
      minlength: "4",
      maxlength: "10"
    },
    email: {
      label: "Email",
      id: "email",
      value: "",
      isRequired: false,
      isValid: true,
      errorMsg: "Please enter valid email",
      validFormat: "EMAIL"
    },
    password: {
      label: "Password",
      id: "password",
      value: "",
      isRequired: true,
      isValid: true,
      errorMsg: "Please enter valid email",
      validFormat: "PASSWORD"
    },
    dob: {
      label: "Date of Birth",
      id: "dob",
      value: "",
      isRequired: true,
      isValid: true,
      format: "dd-MM-yyyy",
      errorMsg: "Please enter valid Date of birth"
    },
    passport: {
      label: "Passport Date Range",
      id: "passport",
      value: [],
      isRequired: true,
      isValid: true,
      format: "dd/MM/yyyy",
      errorMsg: "Please select valid Date range"
    },
    age: {
      label: "Age(Years)",
      id: "age",
      value: "",
      isRequired: true,
      isValid: true,
      errorMsg: "Please enter valid email",
      validFormat: "NUMBERS_ONLY",
      toolTip: "Enter your age. Ex: 29"
    },
    gender: {
      id: "gender",
      label: "Gender",
      options: [
        {
          text: "Male",
          value: "M"
        },
        {
          text: "Female",
          value: "F"
        },
        {
          text: "Other",
          value: "O"
        }
      ],
      value: "",
      isValid: true,
      errorMsg: "Please select gender",
      isRequired: true,
      toolTip: "Tooltip Info"
    },
    technologies: {
      id: "technologies",
      label: "Technologies",
      options: [
        {
          text: "React",
          value: "react"
        },
        {
          text: "Angular",
          value: "angular"
        },
        {
          text: "Vue",
          value: "vue"
        }
      ],
      value: [],
      validFormat: "ARRAY",
      isValid: true,
      errorMsg: "Please select known technologies",
      isRequired: true,
      toolTip: "Tooltip Info"
    },
    country: {
      id: "country",
      label: "Country",
      suggestions: [],
      value: "",
      isValid: true,
      errorMsg: "Please select country",
      isRequired: true
    },
    terms: {
      label: "I accept the terms and conditions",
      checked: false,
      toolTip: "used to some xxxx",
      isRequired: true,
      isValid: true,
      id: "terms",
      value: "1"
    }
  };
  const [formFields, setFormFields] = useState(formFieldsObj);
  const [editableTableData, setEditableTableData] = useState(apiData);
  const onBtnClickHndlr = () => {
    alert("button clicked");
  };
  const onPrimaryBtnClickHndlr = () => {
    alert("Primary button clicked");
  };
  const onSecBtnClickHndlr = () => {
    alert("Sec Button clicked");
  };
  const onInputChangeHndlr = (e) => {
    const tempFields = { ...formFields };
    tempFields[e.target.name]["value"] = e.target.value;
    setFormFields({ ...formFields, tempFields });
  };
  const onDateChangeHandler = (id, value) => {
    const tempFields = { ...formFields };
    tempFields[id]["value"] = value;
    setFormFields({ ...formFields, tempFields });
  };
  const onCheckBoxChangeHndlr = (e) => {
    const tempFields = { ...formFields };
    tempFields[e.target.name]["checked"] = !tempFields[e.target.name][
      "checked"
    ];
    setFormFields({ ...formFields, tempFields });
  };
  const onRadioGroupChangeHndlr = (e) => {
    const tempFields = { ...formFields };
    tempFields[e.target.name]["value"] = e.target.value;
    setFormFields({ ...formFields, tempFields });
  };
  const onCheckboxGroupChangeHndlr = (id, value) => {
    const tempFields = { ...formFields };
    tempFields[id]["value"] = value;
    setFormFields({ ...formFields, tempFields });
  };
  const getSuggestionOptions = (searchTerm) => {
    const result = countries.filter((country) => {
      return country.text.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const tempFields = { ...formFields };
    tempFields["country"]["suggestions"] = result;
    setFormFields({ ...formFields, tempFields });
  };
  const onSuggestionSelect = (selectedOption) => {
    const tempFields = { ...formFields };
    tempFields["country"]["value"] = selectedOption.value;
    setFormFields({ ...formFields, tempFields });
  };
  const onEditClick = (index, item) => {
    const temp = [...editableTableData];
    temp[index]["isEditmode"] = true;
    setEditableTableData([...temp]);
  };
  const onSaveClick = (index, item) => {
    const temp = [...editableTableData];
    temp[index]["isEditmode"] = false;
    setEditableTableData([...temp]);
  };
  const onCancelClick = (index, item) => {
    const canceledItem = editableTableData[index];
    const temp = [...editableTableData];
    temp.splice(index, 1, canceledItem);
    temp[index]["isEditmode"] = false;
    //temp[index] = editableTableData[index];
    console.log("t", temp);
    setEditableTableData([...temp]);
  };
  const headings = [
    { label: "Id", selector: "id", sortable: true },
    { label: "Form Id", selector: "formId", sortable: true },
    { label: "Form Name", selector: "formName", sortable: true },
    { label: "Mandatory", selector: "isMandatory" }
  ];
  const editableHeadings = [
    { label: "Id", selector: "id", sortable: true },
    { label: "Status", selector: "status", sortable: true },
    { label: "Reason", selector: "reason", sortable: true },
    { label: "Amount", selector: "amount" },
    { label: "Actions", selector: "actions", isActionable: true }
  ];
  return (
    <div className="App row">
      <Alert
        alertTxt="We can't process your Request, please try again"
        type="ERROR"
      />
      <div className="col-xl-6">
        <TextField
          // customClass="class3"
          fieldObj={formFields.fullname}
          onChangeHandler={onInputChangeHndlr}
          hideLabel={false} // optional
        />
      </div>
      <div className="col-xl-6">
        <TextField
          // customClass="class3"
          fieldObj={formFields.email}
          onChangeHandler={onInputChangeHndlr}
          hideLabel={false} // optional
        />
      </div>
      <div className="col-xl-6">
        <TextField
          // customClass="class3"
          fieldObj={formFields.password}
          onChangeHandler={onInputChangeHndlr}
          type="password" // optional
        />
      </div>
      <div className="col-xl-6">
        <Datepicker
          // customClass="class3"
          fieldObj={formFields.dob}
          onDateSelectHandler={onDateChangeHandler}
        />
      </div>
      <div className="col-xl-6">
        <DateRangepicker
          // customClass="class3"
          fieldObj={formFields.passport}
          onDateSelectHandler={onDateChangeHandler}
        />
      </div>

      <div className="col-xl-6">
        <TextField
          // customClass="class3"
          fieldObj={formFields.age}
          onChangeHandler={onInputChangeHndlr}
          type="number"
        />
      </div>
      <div className="col-xl-6">
        <AutoSuggestions
          fieldObj={formFields.country}
          getSuggestionOptions={getSuggestionOptions}
          onSuggestionSelect={onSuggestionSelect}
        />
      </div>
      <div className="col-xl-6">
        <RadioGroup
          fieldObj={formFields.gender}
          onChangeHandler={onRadioGroupChangeHndlr}
        />
      </div>
      <div className="col-xl-6">
        <CheckboxGroup
          fieldObj={formFields.technologies}
          onChangeHandler={onCheckboxGroupChangeHndlr}
        />
      </div>
      <div className="col-xl-12">
        <Checkbox
          fieldObj={formFields.terms}
          disabled={false}
          onChangeHandler={onCheckBoxChangeHndlr}
        />
      </div>
      <div className="col-xl-6">
        <PrimaryButton
          showLoader={true}
          disabled={false}
          onClickHandler={onPrimaryBtnClickHndlr}
          btnTxt="Primary Button"
        />
      </div>
      <div className="col-xl-6">
        <SecButton
          showLoader={true}
          onClickHandler={onSecBtnClickHndlr}
          btnTxt="Sec Button"
        />
      </div>
      <div className="col-xl-6">
        <Button
          showLoader={true}
          btnTxt="Simple Button"
          onClickHandler={onBtnClickHndlr}
        />
      </div>
      {/* <div>
        <Link linkTxt="Contact us" target="_blank" linkTo="/contact" />
      </div> */}
      {/* <div className="col-xl-12">
        <DataTable displayData={displayData} headings={headings} />
      </div> */}
      <div className="col-xl-12">
        <EditableTable
          displayData={editableTableData}
          headings={editableHeadings}
          onEditClick={onEditClick}
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
        />
      </div>
    </div>
  );
}
