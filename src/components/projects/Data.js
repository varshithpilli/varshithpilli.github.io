import Constitutioner from "./img/constitutioner.png";
import Conversate from "./img/conversate.png";
import NerdHub from "./img/nerdhub.png";

export const projectsData = [
  {
    id: 1,
    type: "web",
    img: Constitutioner,
    alt: "Image of Constitutioner",
    title: "Constitutioner",
    description:
      "A legal assistant that processes and embeds the Indian Constitution for fast, similarity-based retrieval using Pinecone. Developed both GUI and CLI interfaces with real-time LLM responses via OpenRouter API. Implemented prompt engineering to improve accuracy and minimize hallucinations.",
    git: "https://github.com/varshithpilli/constitutioner",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "PineconeDB",
      },
      {
        id: 2,
        color: "blue",
        tech: "HuggingFace",
      },
      {
        id: 3,
        color: "purple",
        tech: "OpenRouter",
      },
      {
        id: 4,
        color: "purple",
        tech: "FastAPI",
      },
    ],
  },
  {
    id: 2,
    type: "web",
    img: Conversate,
    alt: "Image of Conversate",
    title: "Conversate",
    description: 
      "A PDF-based conversational assistant that allows users to upload documents, automatically extract and process their content, and engage in interactive, context-aware question-answering through a chat interface.",
    git: "https://github.com/varshithpilli/conversate",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "AWS Bedrock",
      },
      {
        id: 2,
        color: "blue",
        tech: "FastAPI",
      },
      {
        id: 3,
        color: "purple",
        tech: "PyTesseract",
      },
    ],
  },
  {
    id: 3,
    type: "web",
    img: NerdHub,
    alt: "Image of Nerdhub",
    title: "NerdHub",
    description: 
      "NerdHub is my personal playground for all things tech or therwise, a space where I showcase the side projects I build for fun",
    git: "https://github.com/varshithpilli/nerdhub",
    tech: [
      {
        id: 1,
        color: "green",
        tech: "React",
      },
      {
        id: 2,
        color: "blue",
        tech: "shadcn/ui",
      },
    ],
  },
];
