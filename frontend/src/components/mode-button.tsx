import { Button } from "@/components/ui/button.tsx";
import { CloudMoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeButton() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <Button
          className={"p-0 h-fit"}
          variant={"link"}
          onClick={() => setTheme("dark")}
        >
          <CloudMoonIcon
            className={
              "hover:scale-110 scale-100 transition-all duration-200 ease-in-out"
            }
          />
        </Button>
      ) : (
        <Button
          className={"p-0 h-fit"}
          variant={"link"}
          onClick={() => setTheme("light")}
        >
          <SunIcon
            className={
              "hover:rotate-45 rotate-0 transition-all duration-200 ease-in-out"
            }
          />
        </Button>
      )}
    </>
  );
}
