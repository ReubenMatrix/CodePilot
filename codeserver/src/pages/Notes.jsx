import React, { useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Notes() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-5 md:px-6">
      <div className="grid md:grid-cols-2 gap-10">
      <NoteForm/>
      <NoteList/>
      </div>
    </div>
  );
}
