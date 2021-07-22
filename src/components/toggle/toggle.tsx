/* eslint-disable react/prop-types */
import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  createContext,
} from "react";

export interface ToggleBaseProps {
  onToggle: (checked: boolean) => void;
}

export interface IToggleContext {
  on: boolean;
  handleToggle?: () => void;
  // onSelect?: SelectCallBack;
}

export const ToggleContext = createContext<IToggleContext>({
  on: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleToggle: () => {},
});

const Toggle: FC<ToggleBaseProps> = ({ onToggle, children }) => {
  const [on, setOn] = useState(false);
  // REVIEW: this is a good example of useCallback because it received function
  const handleToggle = useCallback(() => setOn((oldOn) => !oldOn), []);

  useEffect(() => {
    onToggle && onToggle(on);
  }, [on]);

  const passedContext: IToggleContext = React.useMemo(
    () => ({ on, handleToggle }),
    [on]
  );

  return (
    <ToggleContext.Provider value={passedContext}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
