export interface Level {
  id: string;
  title: string;
  subLevels: SubLevel[];
}

export interface SubLevel {
  id: string;
  title: string;
  exercises: Exercise[];
  completed: boolean;
}

export interface Exercise {
  id: string;
  number: number;
  audioUrl: string;
  completed: boolean;
}

export interface User {
  username: string;
  progress: {
    lastExercise?: {
      levelId: string;
      subLevelId: string;
      exerciseId: string;
    };
  };
}