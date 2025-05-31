export const projects = [
  {
    title: 'Lead Scoring & Customer Insights Engine',
    description: 'Developed a Retrieval-Augmented Generation (RAG) pipeline using GPT-3.5-turbo and FAISS to analyze 1000+ financial documents, extracting insights for lead prioritization. Reduced query latency by 35% via custom indexing strategies and deployed the system on AWS Lambda for cost-effective scalability. Created an interactive Streamlit dashboard to visualize insights including trend analysis, risk summaries, etc.',
    techUsed: 'Python, RAG, FAISS, GPT-3.5, LangChain, Streamlit, AWS Lambda',
    image: process.env.PUBLIC_URL + '/projects/lead-scoring-engine.png',
  },
  {
    title: 'AI Design Generator (Wunderhub)',
    description: 'Spearheaded a PoC, trained a vision transformer model using PyTorch & Hugging Face, with 85% semantic alignment in graphics generated from text prompts. Incorporated NLP-based prompt engineering to refine user inputs, improving output relevance for 10+ test users and presented PoC to Managing Director.',
    techUsed: 'Proof of Concept Development, PyTorch, Hugging Face, Flask APIs, NLP, Stakeholder Presentation, Cross-Functional Collaboration',
    image: process.env.PUBLIC_URL + '/projects/AI-Design-Generator.png',
  },
  {
    title: 'Dolimo – Dolphin Health Monitoring App (Tiergarten)',
    description: 'Built a multi-category dashboard (7 domains: health, behaviour, etc.) using Ionic Vue, with 30+ dynamic features for real-time animal monitoring. Engineered RESTful APIs to sync frontend with backend, enabling data-driven health insights and reducing manual reporting by 40%.',
    techUsed: 'Ionic Vue, FastAPI, Cross-Functional Collaboration, Data Analysis, Agile Workflows',
    image: process.env.PUBLIC_URL + '/projects/Dolimo.png',
  },
]; 