import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Section6 = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(!api) {
            return;
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1);

        const intervalId = setInterval(() => {
            const totalSlides = api.scrollSnapList().length;
            const currentSnap = api.selectedScrollSnap();

            if(currentSnap === totalSlides - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 10000)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });

        return () => {
            clearInterval(intervalId)
        }
    },[api])

    const renderDots = [...Array(count)].map((_, index) => (
        <div key={index} className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition border border-gray-500 ${current === index + 1 ? 'bg-foreground' : 'bg-background'}`}/>
    ));

  return (
    <div className="h-auto md:h-full md:my-10 my-5 py-10 w-full flex flex-col items-center text-foreground">
      <Carousel setApi={setApi} className="w-full max-w-xs md:max-w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 hidden md:flex gap-1 text-center text-sm text-muted-foreground">
          {renderDots}
      </div>
    </div>
  );
};

export default Section6;
