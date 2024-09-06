import Image from "next/image";
import React from "react";
import pills from "@/public/images/pills-hand.webp";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Controller, Form, SubmitHandler, useForm } from "react-hook-form";
import Tick from "./tick";
import DrawerComponent from "@/common/BottomDrawer/DrawerComponent";
import RandomMovingButton from "./HoveredButton";
import DraggableButton from "./HoveredButton";

interface Props {
  formSubmit: SubmitHandler<FormData>;
  showSuccess: boolean;
  dropdown: boolean;
  handleShow: (value: boolean) => void;
}

type FormData = {
  number: string;
  name: string;
};

const Section5: React.FC<Props> = (props) => {
  const { formSubmit, showSuccess, dropdown, handleShow } = props;
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      number: "",
      name: "",
    },
    mode: "onBlur",
    shouldFocusError: true,
  });

  return (
    <>
      <div className="h-full md:my-10 my-5 py-10 w-full flex flex-col items-center text-foreground">
        <div className="flex md:flex-row flex-col-reverse justify-between gap-10 w-full md:w-9/12">
          <div className="md:pr-10 pr-0 w-full flex flex-col gap-10 text-left dark:text-foreground text-blue-950">
            <h1 className="text-3xl md:text-4xl md:text-left text-center font-semibold">
              Welcome To Our <span className="block">Online Pharmacy</span>
            </h1>
            <p className="font-light text-lg">
              A professional and reliable online shopping center providing a
              variety of hot selling products at reasonable prices and shipping
              them globally.
            </p>
            <ol className="list-disc list-inside text-lg md:text-2xl space-y-4 font-semibold capitalize">
              <li>High quality products</li>
              <li>24/7 customer support</li>
              <li>Long term care service</li>
              <li>Fast shipping</li>
            </ol>
            <Button className="bg-blue-450 text-white py-6 px-8 md:m-0 m-auto rounded-md w-fit">
              Buy Now
            </Button>
          </div>
          <div className="pl-0 md:pl-10 w-full relative">
            <Image src={pills} alt="med-image md:h-auto h-[70vmin]" />
            {/* <Card className="absolute top-0 left-0 bg-blue-450 text-white p-4 rounded-xl">
            <CardBody>
              <h1 className="text-2xl md:text-3xl font-semibold">
                Get 20% off
              </h1>
              <p className="text-lg md:text-xl">
                On your first purchase with us
              </p>
            </CardBody>
            <CardFooter>
              <button className="bg-white text-blue-450 py-2 px-4 rounded-md">
                Learn More
              </button>
            </CardFooter>
          </Card> */}
            <Card className="md:block hidden absolute bottom-0 left-0 bg-blue-450 text-white p-4 rounded-xl hover:scale-105 shadow-xl">
              {showSuccess ? (
                <CardBody>
                  <Tick />
                  <h1 className="text-2xl md:text-3xl font-semibold">
                    Thank you!
                  </h1>
                  <p className="text-lg md:text-xl">
                    We will get back to you soon.
                  </p>
                </CardBody>
              ) : (
                <>
                  <CardHeader className="border-b border-gray py-2">
                    <h1 className="text-md font-semibold">Get Help.</h1>
                  </CardHeader>
                  <CardBody>
                    <Form
                      control={control}
                      onSubmit={({ data }) => formSubmit(data)}
                      className="flex flex-col gap-4"
                    >
                      <Controller
                        name="number"
                        control={control}
                        rules={{
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid mobile number",
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Mobile Number"
                            className="bg-blue-450 text-white"
                            maxLength={10}
                            onKeyDown={(e) => {
                              if (
                                e.key !== "Backspace" &&
                                e.key !== "Tab" &&
                                (e.key < "0" || e.key > "9")
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                        )}
                      />
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            placeholder="Name"
                            className="bg-blue-450 text-white"
                            style={{ textTransform: "capitalize" }}
                          />
                        )}
                      />

                      <Button
                        className="bg-white text-blue-450 py-2 px-4 rounded-md w-fit"
                        type="submit"
                      >
                        Enquire
                      </Button>
                    </Form>
                  </CardBody>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
      <DraggableButton onClick={() => handleShow(true)} />
      <DrawerComponent show={dropdown} onChange={handleShow}>
        <Card className="text-foreground p-4 rounded-xl dark:bg-black space-y-4">
          {showSuccess ? (
            <CardBody>
              <Tick />
              <h1 className="text-2xl md:text-3xl font-semibold">Thank you!</h1>
              <p className="text-lg md:text-xl">
                We will get back to you soon.
              </p>
            </CardBody>
          ) : (
            <>
              <CardHeader className="border-b border-gray py-2">
                <h1 className="text-md font-semibold">Get Help.</h1>
              </CardHeader>
              <CardBody>
                <Form
                  control={control}
                  onSubmit={({ data }) => formSubmit(data)}
                  className="flex flex-col gap-4"
                >
                  <Controller
                    name="number"
                    control={control}
                    rules={{
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Mobile Number"
                        className=" text-white"
                        maxLength={10}
                        onKeyDown={(e) => {
                          if (
                            e.key !== "Backspace" &&
                            e.key !== "Tab" &&
                            (e.key < "0" || e.key > "9")
                          ) {
                            e.preventDefault();
                          }
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Name"
                        className=" text-white"
                        style={{ textTransform: "capitalize" }}
                      />
                    )}
                  />

                  <Button
                    className="bg-foreground text-background py-2 px-4 rounded-md w-full md:w-fit"
                    type="submit"
                  >
                    Enquire
                  </Button>
                </Form>
              </CardBody>
            </>
          )}
        </Card>
      </DrawerComponent>
    </>
  );
};

export default Section5;
