export interface TrainingMeeting {
  phase: number;
  meeting: number;
  title: string;
  focus: string;
  activity: string;
  output: string;
}

export interface PhaseInfo {
  id: number;
  name: string;
  shortName: string;
  color: string;
  icon: string;
}

export type PhaseFilter = 'all' | '1' | '2' | '3' | '4';