import Markdown from "marked-react";
import Editor from "@monaco-editor/react";
import {
  useRef,
  useEffect,
  type MutableRefObject,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useMessage } from "~/contexts/message-context";

interface TextEditorProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const TextEditor = ({ message, setMessage }: TextEditorProps) => {
  const { setMessageContent } = useMessage();
  const messageRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      const content = messageRef.current.innerHTML;
      setMessageContent(content);
    }
  }, [message, setMessageContent]);

  function handleEditorChange(value: string | undefined) {
    setMessage(value ?? "");
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <Editor
          className="h-[300px]"
          defaultLanguage="markdown"
          theme="vs-dark"
          onChange={handleEditorChange}
          value={message}
        />
      </div>
      <div className="relative max-h-[500px] w-full md:w-1/2">
        <h3 className="sticky top-1">Email Preview</h3>
        <div
          ref={messageRef}
          id="markdown"
          className="h-full w-full overflow-y-auto text-sm"
        >
          <Markdown value={message} />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
