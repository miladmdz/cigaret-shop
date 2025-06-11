"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

import { CustomImage } from "@/components/shared/text-editor/CustomImage";
import MenuBar from "@/components/shared/text-editor/MenuBar.component";
import BaseButton from "@/components/shared/base-button/BaseButton.component";

const Tiptap = () => {
  const [contentTextEditor, setContentTextEditor] = useState("");

  const onChange = (newContent) => {
    console.log(newContent);
    setContentTextEditor(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,

      TextAlign.configure({ types: ["heading", "paragraph"] }),

      CustomImage.configure({
        inline: true,
      }),

      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3",
        },
      }),

      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3",
        },
      }),
    ],
    content: contentTextEditor,

    editorProps: {
      attributes: {
        class:
          "w-full min-h-[156px] border rounded-md bg-slate-50 py-2 px-3 outline-none",
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col w-full gap-4">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <BaseButton
        text="ثبت"
        varient="contained"
        color="bg-primaryOrange-light"
        textColor="text-white"
      />
    </div>
  );
};

export default Tiptap;
