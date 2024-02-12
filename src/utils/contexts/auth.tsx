import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { JsType } from "../apis/jobseekers/types";
import { getJs } from "../apis/jobseekers/api";

interface Context {
  token: string;
  js: Partial<JsType>;
  changeToken: (token?: string) => void;
}

const InitialState = {
  token: "",
  js: {},
  changeToken: () => {},
};

const AuthContext = createContext<Context>(InitialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [js, setJs] = useState<Partial<JsType>>({});

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchJs();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
      }
    );
  }, [token]);

  const fetchJs = async () => {
    try {
      const result = await getJs();
      setJs(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeToken = (token?: string) => {
    const newToken = token ?? "";
    setToken(newToken);
    if (token) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      setJs({});
    }
  };

  const AuthContextValue = {
    token,
    js,
    changeToken,
  };

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
