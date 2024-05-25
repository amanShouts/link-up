import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

import { useUser } from "@clerk/clerk-react";
import { P } from "node_modules/@clerk/clerk-react/dist/controlComponents-CzpRUsyv.d.mts";
import { useState } from "react";

import { Progress } from "@/components/ui/progress";

export default function Onboarding() {
  const { user } = useUser();
  const [question, setQuestion] = useState(0);

  const updateState = () => {
    setQuestion((prevState) => (prevState < 3 ? prevState + 1 : prevState));
  };

  const steps = [
    {
      title: "Welcome to our platform",
      state: 10,
      description: "Set up your profile in a few steps to get started",
    },
    {
      title: "second",
      state: 33,
      description: "Set up your profile in a few steps to get started",
    },

    {
      title: "third",
      state: 66,
      description: "Set up your profile in a few steps to get started",
    },

    {
      title: "Done",
      state: 100,
      description: "You have completed the onboarding process",
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
          <UserButton />

          <div>Welcome {user?.fullName}!</div>

          <div className="w-full flex flex-col items-center gap-4 justify-center">
            <div>{steps[question].title}</div>
            <div className="flex flex-col gap-3">
              <div className="w-full w-[400px]">
                <Button onClick={updateState}> Next</Button>
                <Progress className="mt-4" value={steps[question].state} />
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
