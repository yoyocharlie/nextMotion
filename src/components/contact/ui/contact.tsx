"use client";

import { SectionHeading } from "~/components/ui/section-heading";
import data from "../data.json";
import { Form } from "./form";
import { MessageProvider } from "~/contexts/message-context";

export function Contact() {
  return (
    <section className="w-full bg-[#141414]">
      <div className="container">
        <SectionHeading
          title={data.title}
          subTitle={data.subTitle}
          className="mt-12"
        />
        <div className="m-auto w-full max-w-[1400px] pt-10 md:w-[80%] md:pt-20">
          <MessageProvider>
            <Form />
          </MessageProvider>
        </div>
      </div>
    </section>
  );
}
