import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLayout } from "../../Layout";

export default function SplashPage() {
    const { setDirection, direction } = useLayout(); // Assuming `direction` gives current layout direction
    const { t, i18n } = useTranslation();

    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const changeEn = () => {
        i18n.changeLanguage("en");
        setDirection("ltr");
        closeDropdown(); // Close the dropdown when changing language
    };

    const changeAr = () => {
        i18n.changeLanguage("ar");
        setDirection("rtl");
        closeDropdown(); // Close the dropdown when changing language
    };

    const isLTR = direction === "ltr";
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-blue-600 w-screen h-screen">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="text-black bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                {t("Change Language")}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            <div
                                id="dropdown"
                                className={`z-10 ${
                                    isDropdownOpen ? "block" : "hidden"
                                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                            >
                                <ul
                                    className="py-2 cursor-pointer text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton"
                                >
                                    {isLTR ? (
                                        <li onClick={changeAr}>
                                            <a className="ml-16  ">
                                                {t("Arabic")}
                                            </a>
                                        </li>
                                    ) : (
                                        <li onClick={changeEn}>
                                            <a className="mr-16  ">
                                                {t("English")}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="flex flex-col  translate-y-24">
                                <p className="md:text-9xl text-6xl italic  md:-translate-y-5 -translate-y-0  text-white font-bold">
                                    {t("title1")}
                                </p>
                                <p className="md:text-9xl text-6xl italic text-white font-bold">
                                    {t("title2")}
                                </p>
                            </div>
                            <div>
                                <img
                                    className="md:w-96 md:h-96 w-48 h-48 md:-translate-y-0 translate-y-10"
                                    src="src\assets\images\splash.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="text-gray-900 md:translate-y-3 translate-y-12 flex justify-center cursor-pointer bg-white   hover:bg-gray-100 focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={() => {
                                navigate("/home");
                            }}
                        >
                            <span className=""> {t("signInBtn2")}</span>
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white translate-x-36 md:translate-x-80 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
