export function GlowText({ text }: { text: string }) {
  return (
    <>
      <span className="absolute left-0 right-0 m-auto box-content flex w-fit select-none border bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text py-4 font-extrabold text-transparent blur-lg lg:m-0">
        {text}
      </span>
      <span className="absolute left-0 right-0 m-auto box-content flex w-fit select-none border bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text py-4 font-extrabold text-transparent blur-[50px] lg:m-0">
        {text}
      </span>
      <span className="relative top-0 flex h-auto w-full select-auto items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text py-4 font-extrabold text-transparent lg:justify-start">
        {text}
      </span>
    </>
  );
}
