export const projects = [
  {
    title: 'RAG + Text2SQL Hybrid Agent',
    description: 'Built an intelligent query-routing agent that classifies natural language questions and dispatches them to either a Text2SQL engine (structured data) or a RAG pipeline (unstructured documents). Engineered schema-aware Text2SQL with few-shot prompting, entity normalization, and SQL dialect hinting over a FEMA NFIP star-schema database. Implemented multi-format document ingestion (PDF/DOCX/PPTX) using Docling, BGE embeddings, and vector search via Milvus/FAISS with file-hash caching. Integrated Cleanlab Codex trust scoring for RAG answer validation and designed a custom LlamaIndex Workflow agent with tool timeouts, fallback handling, and full SQL auditability in the UI.',
    techUsed: 'Python, LlamaIndex, Streamlit, Milvus, FAISS, BGE Embeddings, Cleanlab',
    image: process.env.PUBLIC_URL + '/projects/rag-text2sql-agent.png',
  },
  {
    title: 'Lead Scoring & Customer Insights Engine',
    description: 'Developed a RAG pipeline with GPT-3.5-turbo and FAISS to analyse 1 000+ financial documents, automatically extracting key insights for lead prioritisation. Reduced query latency by 35 % through custom indexing strategies. Deployed the full system on AWS Lambda for cost-effective serverless scaling and built a Streamlit dashboard for trend analysis and risk summaries.',
    techUsed: 'Python, RAG, FAISS, GPT-3.5, LangChain, Streamlit, AWS Lambda',
    image: process.env.PUBLIC_URL + '/projects/lead-scoring-engine.png',
  },
  {
    title: 'AI Design Generator (Wunderhub)',
    description: 'Spearheaded a proof-of-concept training a Vision Transformer model with PyTorch and Hugging Face, achieving 85 % semantic alignment between text prompts and generated graphics. Incorporated NLP-based prompt refinement to improve output relevance across 10+ user tests and presented the PoC to the Managing Director.',
    techUsed: 'PyTorch, Hugging Face, Flask, NLP, Prompt Engineering',
    image: process.env.PUBLIC_URL + '/projects/AI-Design-Generator.png',
  },
  {
    title: 'Dolimo – Dolphin Health Monitoring (Tiergarten)',
    description: 'Built a multi-category monitoring dashboard with 7 health domains and 30+ dynamic features for real-time animal welfare tracking at Tiergarten Nürnberg. Engineered RESTful APIs to synchronise frontend and backend, enabling data-driven veterinary insights and reducing manual reporting effort by 40 %.',
    techUsed: 'Ionic Vue, FastAPI, Data Analysis, Agile',
    image: process.env.PUBLIC_URL + '/projects/Dolimo.png',
  },
];