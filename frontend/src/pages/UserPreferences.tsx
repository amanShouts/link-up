import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const UserPrefrences = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ 1: null, 2: null });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    console.log(selections);
  }, [selections]);

  const options = [
    {
      step: 1,
      preferences: [
        { label: 'Easy', value: 20 },
        { label: 'Moderate', value: 40 },
        { label: 'Challenging', value: 60 },
        { label: 'Impossible', value: 80 },
        { label: 'Legendary', value: 100 },
      ],
    },
    {
      step: 2,
      preferences: [
        { label: 'Minimal', value: 20 },
        { label: 'Low', value: 40 },
        { label: 'Medium', value: 60 },
        { label: 'High', value: 80 },
        { label: 'Extreme', value: 100 },
      ],
    },
  ];
  const handleNext = () => {
    if (step < options.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSelection = (preference) => {
    setSelections((prev) => ({
      ...prev,
      [step]: preference,
    }));
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  const currentSelection = selections[step];
  const progressValue = currentSelection ? currentSelection.value : 0;

  if (isFinished) {
    return (
      <div className="h-screen flex flex-col items-center gap-4 justify-center">
        <div className="font-bold">Summary of Your Selections</div>
        {Object.keys(selections).map((step) => (
          <div key={step}>
            Step {step}: {selections[step].label}
          </div>
        ))}
        <div className="font-bold">Thank you for your selections!</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex  flex-col items-center gap-4 justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="font-bold">Select Difficulty</div>
        <div>Step {step}</div>
        <div className="w-[400px] flex flex-col gap-4">
          <Progress value={progressValue} className="mb-4" />
          <ToggleGroup type="single" onValueChange={handleSelection}>
            {options[step - 1].preferences.map((preference) => (
              <ToggleGroupItem key={preference.label} value={preference} onClick={() => handleSelection(preference)} selected={currentSelection && currentSelection.label === preference.label}>
                {preference.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="flex gap-4">
          <Button onClick={handlePrevious} disabled={step === 1} className="p-2 bg-gray-300 rounded">
            Previous
          </Button>
          {step < options.length ? (
            <Button onClick={handleNext} className="p-2 bg-gray-300 rounded">
              Next
            </Button>
          ) : (
            <Button onClick={handleFinish} className="p-2 bg-gray-300 rounded">
              Finish
            </Button>
          )}
        </div>
        <div className="font-bold">Selected Options: {JSON.stringify(selections)}</div>
      </div>
    </div>
  );
};

export default UserPrefrences;
