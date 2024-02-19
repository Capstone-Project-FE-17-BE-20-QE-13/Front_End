import { FC } from "react";
import { IoBookmark } from "react-icons/io5";
import { VacanciesProps } from "../utils/apis/vacancy/types";
import jobVacancy from "../assets/job-vacancy.jpg";

const Card: FC<VacanciesProps> = ({ position, company_name, address, salary_range }) => {
  return (
    <>
      <div className="w-full flex my-6 p-[20px] border shadow-md rounded-md gap-5">
        <div className="w-[150px] h-[150px]">
          <img src={jobVacancy} className="h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-5 grow">
          <div>
            <h1 className="text-md font-bold">{position}</h1>
            <p>{company_name}</p>
          </div>
          <div>
            <p>{address}</p>
            <p>{salary_range}</p>
          </div>
        </div>
        <div>
          <IoBookmark className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Card;
