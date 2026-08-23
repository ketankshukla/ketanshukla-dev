# MCP + RAG in Plain English

> **One project, one story, no jargon.**
>
> For a styled, dark/gold slide version with large fonts, open `public/mcp-rag.html` in a browser or visit `https://ketanshukla.dev/mcp-rag.html` after deployment.

Imagine you have a room full of documents — PDFs, notes, manuals, research papers — and you want to ask them questions like they are a person.

> *"What does our refund policy say about international orders?"*
> *"Which paper mentioned the 47% improvement?"*
> *"Summarize the safety section of the user manual."*

The AI by itself cannot open the filing cabinet. It can talk about documents in general, but it cannot look inside *your* documents.

This is the problem MCP + RAG solves.

---

## 1. RAG — the smart librarian

**RAG** stands for **Retrieval-Augmented Generation**, but you can forget that.

Think of it as a **librarian**.

### What the librarian does

1. **Reads every book once.**
   - Each document is cut into small chunks, like pages or paragraphs.
2. **Turns each chunk into a number.**
   - The AI converts the words into a long list of numbers called an **embedding**. Similar ideas get similar numbers.
3. **Stores the numbers in a vector database.**
   - This is like a card catalog that sorts ideas by meaning, not by title.

### When you ask a question

1. Your question is also turned into a number.
2. The vector database finds the chunks whose numbers are closest to your question.
3. Those chunks are handed to the AI.

So instead of the AI guessing from everything it learned in training, it **reads only the relevant pages right before answering**.

That is RAG.

---

## 2. MCP — the front desk

**MCP** is the **front desk** between the AI and the library.

It is the agreed shape of the message that lets the AI say:

> *"Please run the `query_documents` tool with the question: 'What is our refund policy?'"*

And the librarian (RAG system) replies:

> *"Here are the three most relevant paragraphs."*

### Why MCP matters

Without MCP, every AI app would need a custom integration for every tool you build.

With MCP, you build the tool once, describe it once, and any MCP-speaking host can use it.

It is like USB-C: one plug, many devices.

---

## 3. How they work together

Here is the whole flow in one breath:

1. **User asks a question.**
2. **The host (AI) sees the `query_documents` tool** in the MCP server.
3. **The host calls the tool.**
4. **The MCP server asks the RAG system** to find the most relevant document chunks.
5. **The RAG system returns the chunks.**
6. **The host reads the chunks and answers the question** in plain English.

The AI never had to read your whole filing cabinet. It asked the tool, got the right pages, and answered like an expert.

---

## 4. What you would build

A single Next.js project with one API route.

### Parts

- **Documents** — PDFs, text files, or notes you upload.
- **Chunker** — splits the documents into small pieces.
- **Embedding model** — turns chunks and questions into numbers.
- **Vector database** — stores the numbers and finds the closest matches.
- **MCP server** — exposes a `query_documents` tool.
- **Host / UI** — a simple page where you type a question and see the answer.

### The tool description

This is the only sales pitch the AI reads:

```
query_documents

Description: Search the uploaded documents and return the most relevant
paragraphs for a given question.

Inputs:
- question (string): the question you want answered from the documents.
```

If that description is clear, the AI will call it every time a user asks something the documents could answer.

---

## 5. The demo line that lands

> "I built a tool that lets an AI ask my documents questions. The AI does not know my documents by heart. It asks a RAG librarian, gets the right pages, and answers like it read them just now."

---

## 6. Why this is a real skill

- It combines **retrieval, embeddings, and LLM orchestration**.
- It is the architecture behind almost every modern AI assistant that reads your private data.
- It is simple enough to explain in three minutes and deep enough to impress a technical interviewer.

---

## Quick-recap one-liners

- **RAG** = *show the AI only the pages that matter.*
- **MCP** = *the agreed way for the AI to ask for those pages.*
- **The project** = *one MCP server, one RAG librarian, endless documents that can finally be questioned.*
