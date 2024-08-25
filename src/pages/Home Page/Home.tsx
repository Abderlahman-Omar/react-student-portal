import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLayout } from "../../Layout";

export default function Home() {
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

    return (
        <>
            <div className="flex justify-center">
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-white bg-blue-600 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {isLTR ? (
                            <li>
                                <a
                                    onClick={changeAr}
                                    href="#"
                                    className="ml-16 "
                                >
                                    {t("Arabic")}
                                </a>
                            </li>
                        ) : (
                            <li>
                                <a
                                    onClick={changeEn}
                                    href="#"
                                    className="mr-16 "
                                >
                                    {t("English")}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div>
                <Navbar />
                <Footer />
            </div>
        </>
    );
}
