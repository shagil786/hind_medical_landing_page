import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { ArrowRight, Navigation } from "lucide-react";
import React from "react";

interface Props {
  cardData: any[];
}

const Section2: React.FC<Props> = (props) => {
  const { cardData } = props;
  return (
    <div className="bg-blue-950 py-20 grid grid-rows-2 items-center justify-center gap-0 md:gap-8 w-full rounded-xl text-white h-auto md:h-auto my-5 md:my-10">
      {cardData?.map((each, index) => (
        <div
          className="flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-8 w-full h-auto md:h-auto"
          key={`list-${index}`}
        >
          {each?.map((e: any, i: number) => (
            <div
              key={`${e?.name}_${i}`}
              className={`w-4/5 m-0 md:m-auto md:w-[40vmin] h-auto md:h-full gap-4 flex flex-col items-start justify-between rounded-lg p-4 ${
                index + i >= 1
                  ? "bg-blue-450 hover:scale-105 transition-transform duration-300  "
                  : "bg-blue-950"
              }`}
            >
              {index + i >= 1 && (
                <div className="w-12 h-12 p-4 bg-blue-950 rounded-xl flex items-center justify-center">
                  {e?.id}
                </div>
              )}
              <h1
                className={`font-semibold ${
                  index + i === 0
                    ? "text-3xl md:text-4xl"
                    : "text-2xl md:text-3xl"
                }`}
              >
                {e?.title}
              </h1>
              <p className="text-lg md:text-xl">{e?.description}</p>
              <Button
                className={`text-normal md:text-md ${
                  index + i >= 1 ? "bg-transparent" : "bg-blue-450"
                }`}
              >
                Learn More
                <ArrowRight size={20} className="rotate-45 text-blue-950" />
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section2;
