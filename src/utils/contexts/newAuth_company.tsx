import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { CompanyType } from "../apis/company/types";
import { getCompany } from "../apis/company/api";
import { useCookies } from "react-cookie";

interface ContextCompanyCookie {
  tokenCompany: string;
  company: Partial<CompanyType>;
  changeTokenCompany: (token?: string) => void;
}

const InitialState = {
  tokenCompany: "",
  company: {},
  changeTokenCompany: () => {},
};

const AuthCompanyCookieContext = createContext<ContextCompanyCookie>(InitialState);

export const AuthCompanyCookieProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies<any>(["idCompany", "tokenCompany"]);
  const [tokenCompany, setTokenCompany] = useState(cookies.tokenCompany ?? "");
  const [company, setCompany] = useState<Partial<CompanyType>>({});

  useEffect(() => {
    setAxiosConfig(tokenCompany);
    tokenCompany !== "" && fetchCompany();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeTokenCompany();
        }
      }
    );
  }, [tokenCompany]);

  const fetchCompany = async () => {
    try {
      const result = await getCompany();
      setCompany(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTokenCompany = (token?: string) => {
    const newToken = token ?? "";
    setTokenCompany(newToken);
    if (token) {
      setCookie("tokenCompany", newToken, { path: "/" });
    } else {
      removeCookie("tokenCompany", { path: "/" });
      setCompany({});
    }
  };

  const AuthCompanyContextValue = {
    tokenCompany,
    company,
    changeTokenCompany,
  };

  return <AuthCompanyCookieContext.Provider value={AuthCompanyContextValue}>{children}</AuthCompanyCookieContext.Provider>;
};

export const useAuthCookieCompany = () => {
  const context = useContext(AuthCompanyCookieContext);
  return context;
};
