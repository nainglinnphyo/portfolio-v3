interface LoadingBarProps {
  mount: boolean;
  setMount: React.Dispatch<React.SetStateAction<boolean>>;
}

/** Shape rendered by components/SubExp.tsx — see utils/exp.ts for the data. */
interface JobDescription {
  title: string;
  company: string;
  workDate: string;
  current?: boolean;
  jd: string[];
}
