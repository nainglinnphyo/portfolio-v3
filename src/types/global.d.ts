interface LoadingBarProps {
  mount: boolean;
  setMount: React.Dispatch<React.SetStateAction<boolean>>;
}

interface JobDescription {
  title: string;
  company: string;
  workDate: string;
  jd: string[];
}
