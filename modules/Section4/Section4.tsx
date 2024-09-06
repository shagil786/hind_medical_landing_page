import {
  faAdd,
  faMinus,
  faMinusCircle,
  faMinusSquare,
  faPlusCircle,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import React from "react";

interface Props {
  featuredProduct: any;
  handleProduct: (product: any, operation: 1 | 0) => void;
  findProduct: (id: number) => any;
}

const Section4: React.FC<Props> = (props) => {
  const { featuredProduct, handleProduct, findProduct } = props;

  return (
    <div className="max-h-screen min-h-full md:my-10 my-5 py-10 bg-blue-950 w-full rounded-xl flex flex-col items-center gap-8 text-white">
      <h1 className="text-3xl md:text-4xl">Featured Products</h1>
      <Tabs
        className="md:w-9/12 w-full h-auto overflow-y-auto md:px-0 px-4"
        defaultValue="Vitamins"
      >
        <TabsList className="overflow-x-auto bg-blue-950 sticky top-0 flex gap-4 justify-between border-b border-[#333123]">
          {Object.keys(featuredProduct ?? {})?.map(
            (key: any, index: number) => (
              <TabsTrigger
                key={`product-${index}`}
                className="text-md md:text-lg font-semibold data-[state=active]:border-b-2 data-[state=active]:border-white py-2"
                value={key}
              >
                {key}
              </TabsTrigger>
            )
          )}
        </TabsList>
        {Object.entries(featuredProduct ?? {})?.map(
          ([key, value]: any, index: number) => (
            <TabsContent
              key={`product-${index}_${key}`}
              value={key}
              className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
            >
              {value?.map((item: any, index: number) => (
                <div
                  key={`product-${index}_${key}_${item?.name}`}
                  className="bg-transparent text-md md:text-lg rounded-xl p-4 flex flex-col gap-4"
                >
                  <Image src={item?.image ?? ""} alt={item?.name} />
                  <div className="flex items-center justify-between font-semibold leading-6">
                    <h1>{item?.name}</h1>
                    <p>{item?.price}</p>
                  </div>
                  {findProduct(item?.id) ? (
                    <div className="flex gap-1 items-center text-lg">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        className="text-white-500"
                        onClick={() => handleProduct(item, 1)}
                        width={16}
                      />
                      {findProduct(item?.id)}
                      <FontAwesomeIcon
                        icon={faMinusSquare}
                        width={16}
                        className="text-white-500"
                        onClick={() => handleProduct(item, 0)}
                      />
                    </div>
                  ) : (
                    <button
                      className="flex items-center gap-2 rounded-md border border-white w-fit px-4 py-1"
                      onClick={() => handleProduct(item, 1)}
                    >
                      <span className="">Add to cart</span>
                      <FontAwesomeIcon icon={faPlusCircle} width={16} />
                    </button>
                  )}
                </div>
              ))}
            </TabsContent>
          )
        )}
      </Tabs>
    </div>
  );
};

export default Section4;
