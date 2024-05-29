import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Onboarding() {
  const navigate = useNavigate();
  const { user } = useUser();
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
  });

  const updateState = () => {
    if (validateFields()) {
      setQuestion((prevState) =>
        prevState < steps.length - 1 ? prevState + 1 : prevState,
      );
    }
  };

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

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseInt(value, 10) : value;
    setUserData((prevState) => ({ ...prevState, [name]: newValue }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleSwitchChange = (checked) => {
    setUserData((prevState) => ({ ...prevState, isMentor: checked }));
  };

  const handleButtonClick = () => {
    if (validateFields()) {
      axios
        .put("http://localhost:3000/api/onboarding", { userData })
        .then((response) => {
          console.log(response.data);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          console.error("There was an error making the request!", error);
        });
    }
  };

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
      ],
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

  return (
    <div>
      <SignedOut>
        <Button>
          <SignInButton />
        </Button>
        Please sign in
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
          <div>Welcome {user?.fullName}!</div>
          <div className="w-full flex flex-col items-center gap-4 justify-center">
            <div>{steps[question].title}</div>
            <div className="flex flex-col gap-3">
              <div className="w-[400px]">
                {steps[question].fields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <Label className="block mb-2">
                      {field.label}
                      {field.type === "select" ? (
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
                      ) : field.type === "boolean" ? (
                        <Switch
                          checked={userData.isMentor}
                          onCheckedChange={handleSwitchChange}
                        />
                      ) : (
                        <Input
                          type={field.type}
                          name={field.name}
                          value={userData[field.name]}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 p-2"
                          required={field.required}
                        />
                      )}
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
                <Button onClick={handleButtonClick}>Complete Onboarding</Button>
              )}
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
