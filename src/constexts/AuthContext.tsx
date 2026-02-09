import { createContext } from "react";

type AuthContestProps = {
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContest = createContext<AuthContestProps | undefined>(undefined);

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    return <AuthContest.Provider value={value}></AuthContest.Provider>
};

export default AuthProvider