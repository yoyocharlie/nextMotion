"use client";

import Link from "next/link";
import TextEditor from "./text-editor";
import useContactForm from "../hooks/useContactForm";
import { Label, LabelInputContainer } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function Form() {
  const { register, handleSubmit, formState, message, setMessage, onSubmit } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 space-y-4">
        <LabelInputContainer>
          <div className="flex w-full justify-between">
            <Label htmlFor="name">Name</Label>
            {formState.errors.name?.message && (
              <span className="text-xs leading-[1] text-red-500">
                {formState.errors.name.message}
              </span>
            )}
          </div>
          <Input
            id="name"
            placeholder="James Jonathan"
            type="text"
            {...register("name")}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="jimmy@johns.io"
            {...register("email")}
            type="email"
          />
        </LabelInputContainer>
      </div>
      <div>
        <label className="mb-3 flex flex-col md:flex-row">
          <span className="flex flex-col items-baseline gap-1 md:flex-row">
            <span>Message</span>
            <span className="font-sans text-xs font-light text-muted-foreground md:text-sm">
              (try Markdown for fun or use regular text 😎)
            </span>
          </span>
          <Link
            target="_blank"
            href={"https://www.markdownguide.org/cheat-sheet/"}
            className="mt-2 font-sans text-xs md:ml-auto md:mt-0 md:text-sm"
          >
            📃 <span className="underline">Markdown Cheatsheet</span>
          </Link>
        </label>
        <TextEditor message={message} setMessage={setMessage} />
        <Button className="mt-3 w-1/2">
          {formState.isSubmitting ? (
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground border-t-violet-600" />
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
