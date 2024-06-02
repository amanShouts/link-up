import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { closeModal } from "@/store/slice/modalSlice";
import Autocomplete from '@mui/material/Autocomplete';
import { Chip, TextField } from "@mui/material";

export default function Onboarding() {
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();
  const dispatch = useDispatch();

  const [question, setQuestion] = useState(0);
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    username: user?.username,
    type: "",
    isMentor: false,
    age: "",
    bio: "",
    city: "",
    country: "",
    industry: [],
    skill: [],  
  });

  const steps = [
    {
      title: "Welcome to our platform",
      state: 10,
      description: "Set up your profile in a few steps to get started",
      fields: [],
    },
    {
      title: "Personal Information",
      state: 33,
      description: "Tell us about yourself",
      fields: [
        { name: "age", label: "Age", type: "number", required: true },
        { name: "bio", label: "Bio", type: "text", required: true },
        {
          name: "isMentor",
          label: "Are you a mentor?",
          type: "boolean",
        },
        {
          name: "industry",
          label: "Industry",
          type: "select-tags",
          options: ["Tech", "Finance", "Healthcare", "Education", "Marketing", "Manufacturing", "Retail", "Consulting"],
          required: true
        },
        {
          name: "skill",
          label: "Skill",
          type: "select-tags",
          options: ["Product Management", "User Experience", "Agile Methodologies", "Data Analysis", "Software Development", "Project Management", "Leadership", "Communication", "Digital Marketing", "Cloud Computing", "Cybersecurity"],
          required: true
        },        
      ].filter(Boolean),
    },
    {
      title: "Favorite Color",
      state: 66,
      description: "What defines you?",
      fields: [
        {
          name: "type",
          label: "You are an..",
          type: "select",
          required: true,
          options: ["ENTREPRENEUR", "INVESTOR"],
        },
      ],
    },
    {
      title: "Location Information",
      state: 75,
      description: "Where are you located?",
      fields: [
        { name: "city", label: "City", type: "text", required: true },
        { name: "country", label: "Country", type: "text", required: true },
      ],
    },
    {
      title: "Done",
      state: 100,
      description: "You have completed the onboarding process",
      fields: [],
    },
  ];

  const validateFields = () => {
    const currentFields = steps[question].fields;
    const newErrors = {};

    currentFields.forEach((field) => {
      if (field.required && !userData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateState = () => {
    if (validateFields()) {
      setQuestion((prevState) => prevState + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseInt(value, 10) : value;
    setUserData((prevState) => ({ ...prevState, [name]: newValue }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleSwitchChange = (checked) => {
    setUserData((prevState) => ({ ...prevState, isMentor: checked }));
  };

  const handleAutocompleteChange = (field, newValue) => {
    setUserData((prevState) => ({ ...prevState, [field]: newValue }));
  };

  const handleButtonClick = () => {
    if (validateFields()) {
      axios
        .put("http://localhost:3000/edit-user", { ...userData })
        .then((response) => {
          console.log(response.data);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          console.error("There was an error making the request!", error);
        });
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "select":
        return (
          <Select
            value={userData[field.name]}
            onValueChange={(value) =>
              setUserData((prevState) => ({
                ...prevState,
                [field.name]: value,
              }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "select-tags":
        return (
          <Autocomplete
            multiple
            options={field.options}
            value={userData[field.name]}
            onChange={(event, newValue) => handleAutocompleteChange(field.name, newValue)}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  key={option}
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="outlined" placeholder={field.label} />
            )}
          />
        );
      case "boolean":
        return (
          <Switch
            checked={userData.isMentor}
            onCheckedChange={handleSwitchChange}
          />
        );
      default:
        return (
          <Input
            type={field.type}
            name={field.name}
            value={userData[field.name]}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2"
            required={field.required}
          />
        );
    }
  };

  console.log("userData: ",userData)

  useEffect(() => {
    dispatch(closeModal());
  }, [user, dispatch]);

  return (
    <div>
      {isSignedIn ? (
        <div className="w-full min-h-screen flex py-20 flex-col items-center justify-center gap-2">
          <div>Welcome {user?.fullName}!</div>
          <div className="w-full flex flex-col items-center gap-4 justify-center">
            <div>{steps[question].title}</div>
            <div className="flex flex-col gap-3">
              <div className="w-[400px]">
                {steps[question].fields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <Label className="block mb-2">
                      {field.label}
                      {renderField(field)}
                    </Label>
                    {errors[field.name] && (
                      <div className="text-red-500 text-sm">
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
                {question < steps.length - 1 && (
                  <Button onClick={updateState}>Next</Button>
                )}
                <Progress className="mt-4" value={steps[question].state} />
              </div>
              {question === steps.length - 1 && (
                <Button onClick={handleButtonClick}>
                  Complete Onboarding
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  );
}
