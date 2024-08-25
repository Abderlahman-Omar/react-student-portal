import { t } from "i18next";

export default function Results() {
    const cardItems = [
        {
            id: "1",
            title: t("lecTitle"),
            scoreTitle: t("scoreTitle"),
            score: t("score"),
            gradeTitle: t("gradeTitle"),
            grade: t("grade"),
        },
        {
            id: "2",
            title: t("lecTitle1"),
            scoreTitle: t("scoreTitle"),
            score: t("score"),
            gradeTitle: t("gradeTitle"),
            grade: t("grade"),
        },
        {
            id: "3",
            title: t("lecTitle2"),
            scoreTitle: t("scoreTitle"),
            score: t("score"),
            gradeTitle: t("gradeTitle"),
            grade: t("grade"),
        },
        {
            id: "4",
            title: t("lecTitle3"),
            scoreTitle: t("scoreTitle"),
            score: t("score"),
            gradeTitle: t("gradeTitle"),
            grade: t("grade"),
        },
        {
            id: "5",
            title: t("lecTitle4"),
            scoreTitle: t("scoreTitle"),
            score: t("score"),
            gradeTitle: t("gradeTitle"),
            grade: t("grade"),
        },
    ];
    return (
        <>
            <div>
                <div className="flex flex-col bg-blue-600">
                    <div className="bg-blue-600 w-full h-20"></div>
                    <div className="bg-white rounded-t-4xl w-full h-screen">
                        <div className="grid lg:grid-cols-2 md:grid-cols-1  sm:grid-cols-1 gap-y-4 justify-center md:pt-20 pt-10">
                            {cardItems.map((card) => (
                                <div key={card.id} className="mx-auto">
                                    {" "}
                                    {/* Added mx-auto to center cards */}
                                    <div className="flex flex-col md:min-w-custom-width w-96 md:h-72 h-32 p-5  justify-center bg-blue-600 rounded-3xl">
                                        <span className="text-white font-bold md:text-4xl text-lg">
                                            {card.title}
                                        </span>
                                        <div className="flex flex-row justify-between md:translate-y-5 translate-y-2">
                                            <span className="md:text-4xl text-white text-lg">
                                                {card.scoreTitle}
                                            </span>
                                            <span className="md:text-4xl text-white text-lg">
                                                {card.score}
                                            </span>
                                        </div>
                                        <div className="flex flex-row justify-between md:translate-y-5 translate-y-2">
                                            <span className="md:text-4xl text-white text-lg">
                                                {card.gradeTitle}
                                            </span>
                                            <span className="md:text-4xl text-white text-lg">
                                                {card.grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
