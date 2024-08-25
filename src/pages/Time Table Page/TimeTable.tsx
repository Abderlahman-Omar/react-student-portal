import { t } from "i18next";

export default function TimeTable() {
    const cardItems = [
        {
            id: "1",
            title: t("lecTitle"),
            time: t("lecTime"),
            day: t("lecDay1"),
            instructorName: t("instructorName1"),
            location: t("lecPlace"),
        },
        {
            id: "2",
            title: t("lecTitle1"),
            time: t("lecTime"),
            day: t("lecDay2"),
            instructorName: t("instructorName2"),
            location: t("lecPlace"),
        },
        {
            id: "3",
            title: t("lecTitle2"),
            time: t("lecTime"),
            day: t("lecDay3"),
            instructorName: t("instructorName3"),
            location: t("lecPlace"),
        },
        {
            id: "5",
            title: t("lecTitle4"),
            time: t("lecTime"),
            day: t("lecDay5"),
            instructorName: t("instructorName5"),
            location: t("lecPlace"),
        },
        {
            id: "4",
            title: t("lecTitle3"),
            time: t("lecTime"),
            day: t("lecDay4"),
            instructorName: t("instructorName4"),
            location: t("lecPlace"),
        },
    ];

    return (
        <>
            <div className="bg-blue-600 w-full h-screen overflow-y-auto">
                {" "}
                {/* Added overflow-hidden here */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4 justify-center md:pt-20 pt-10">
                    {cardItems.map((card) => (
                        <div key={card.id} className="mx-auto">
                            {" "}
                            {/* Added mx-auto to center cards */}
                            <div className="flex flex-col md:min-w-custom-width w-96 md:h-96 h-52 p-5 justify-center bg-white rounded-3xl">
                                <span className="text-black font-bold md:text-4xl text-lg">
                                    {card.title}
                                </span>
                                <div className="flex flex-row justify-between md:translate-y-5 translate-y-2">
                                    <span className="md:text-4xl text-lg">
                                        {card.time}
                                    </span>
                                    <span className="md:text-4xl text-lg">
                                        {card.day}
                                    </span>
                                </div>
                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <div className="flex flex-row justify-between md:translate-y-5 translate-y-2">
                                    <span className="md:text-4xl text-lg">
                                        {card.instructorName}
                                    </span>
                                    <span className="md:text-4xl text-lg">
                                        {card.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
