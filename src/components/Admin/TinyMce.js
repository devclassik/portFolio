import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor() {
  const editorRef = useRef(null);

  const logContent = () => {
    if (editorRef.current) {
      const data = editorRef.current.getContent();
      console.log(editorRef.current.getContent());
      JSON.stringify({ data });
    }
  };

  return (
    <div>
      <Editor
        apiKey="wccutbru3ay8u1naq81748wlcgxcqhx7diigyf6rv6epva56" // You can get a free key from TinyMCE or use without for dev
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start editing here...</p>"
        init={{
          height: 400,
          menubar: true,
        //   plugins: [
        //     "advlist autolink lists link image charmap preview anchor",
        //     "searchreplace visualblocks code fullscreen",
        //     "insertdatetime media table code help wordcount",
        //   ],
        //   toolbar:
        //     "undo redo | formatselect | bold italic backcolor | \
        //      alignleft aligncenter alignright alignjustify | \
        //      bullist numlist outdent indent | removeformat | help",
        // }}
         plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={logContent}>Log Editor Content</button>
    </div>
  );
}
