import React, { useCallback } from "react";
import IconLoader from "../../../../public/Icon/Icon-Loader";

function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url, class: "mx-auto" }).run();
    }
  }, [editor]);

  const setAlignmentSmart = (type) => {
    const { state, dispatch } = editor.view;
    const { selection } = state;

    if (selection.node?.type.name === "image") {
      const currentAttrs = selection.node.attrs;
      const currentClass = currentAttrs.class || "";

      const cleanClass = currentClass
        .replace(/ml-auto|mr-auto|mx-auto/g, "")
        .trim();

      let alignClass = "";
      if (type === "left") alignClass = "mr-auto";
      if (type === "center") alignClass = "mx-auto";
      if (type === "right") alignClass = "ml-auto";

      const newAttrs = {
        ...currentAttrs,
        class: `${cleanClass} ${alignClass}`.trim(),
      };

      const transaction = state.tr.setNodeMarkup(
        selection.from,
        undefined,
        newAttrs
      );

      dispatch(transaction);
    } else {
      editor.chain().focus().setTextAlign(type).run();
    }
  };

  const options = [
    {
      iconName: "h1text-outline",
      onclick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }) ? "is-active" : "",
    },
    {
      iconName: "h2text-outline",
      onclick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }) ? "is-active" : "",
    },
    {
      iconName: "h3text-outline",
      onclick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }) ? "is-active" : "",
    },
    {
      iconName: "bold-outline",
      onclick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold") ? "is-active" : "",
    },
    {
      iconName: "italic-outline",
      onclick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic") ? "is-active" : "",
    },
    {
      iconName: "strick-outline",
      onclick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike") ? "is-active" : "",
    },
    {
      iconName: "textright-outline",
      onclick: () => setAlignmentSmart("right"),
      pressed: editor.isActive({ textAlign: "right" }) ? "is-active" : "",
    },
    {
      iconName: "menu-outline",
      onclick: () => setAlignmentSmart("center"),
      pressed: editor.isActive({ textAlign: "center" }) ? "is-active" : "",
    },
    {
      iconName: "textleft-outline",
      onclick: () => setAlignmentSmart("left"),
      pressed: editor.isActive({ textAlign: "left" }) ? "is-active" : "",
    },
    {
      iconName: "listbullet-outline",
      onclick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList") ? "is-active" : "",
    },
    {
      iconName: "listnumber-outline",
      onclick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList") ? "is-active" : "",
    },
    {
      iconName: "pen-outline",
      onclick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight") ? "is-active" : "",
    },
    {
      iconName: "image-outline",
      onclick: () => addImage(),
    },
  ];

  return (
    <div className="border rounded-md px-2 py-2 bg-slate-50 space-x-4 z-50">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={item.onclick}
          className={`${item.pressed} cursor-pointer hover:opacity-50 transition-opacity`}
        >
          <IconLoader name={item.iconName} size={18} />
        </button>
      ))}
    </div>
  );
}

export default MenuBar;
