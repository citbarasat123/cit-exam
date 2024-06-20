import { themeAtom } from "@/utils/themeAtom";
import { Switch } from "@nextui-org/react";
import { useAtom } from "jotai";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <>
      <Switch
        size="lg"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        isSelected={theme}
        onValueChange={(isSelected: boolean) => setTheme(isSelected)}
      />
    </>
  );
};

export default ThemeSwitch;
