import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { JsType } from "../apis/jobseekers/types";
import { getJs } from "../apis/jobseekers/api";

interface ContextCookie {
  tokenCookie: string;
  js: Partial<JsType>;
  changeToken: (tokenCookie?: string) => void;
}

const InitialStateCookie = {
  tokenCookie: "",
  js: {},
  changeToken: () => {},
};

const AuthContextCookie = createContext<ContextCookie>(InitialStateCookie);

export const AuthCookieProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies<any>(["id", "token"]);
  const [tokenCookie, setTokenCookie] = useState(cookies.token ?? "");
  const [js, setJs] = useState<Partial<JsType>>({});

  useEffect(() => {
    setAxiosConfig(tokenCookie);
    tokenCookie !== "" && fetchJs();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
      }
    );
  }, [tokenCookie]);

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
    setTokenCookie(newToken);
  };

  const AuthContextCookieValue = {
    tokenCookie,
    js,
    changeToken,
  };

  return <AuthContextCookie.Provider value={AuthContextCookieValue}>{children}</AuthContextCookie.Provider>;
};

export const useAuthCookie = () => {
  const context = useContext(AuthContextCookie);
  return context;
};
