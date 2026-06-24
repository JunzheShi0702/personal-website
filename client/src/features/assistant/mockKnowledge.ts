const normalizedContains = (text: string, value: string) =>
  text.toLowerCase().includes(value.toLowerCase())

export function getMockAssistantAnswer(prompt: string): string {
  if (normalizedContains(prompt, 'atlas')) {
    return 'Atlas is an AI-assisted academic planning platform: it combines course discovery, schedule building, and constraint-aware recommendation logic. The system uses PostgreSQL for structured course and user data, pgvector for semantic retrieval, and OpenAI-powered advising to produce rationale-rich planning options rather than one-click schedules.'
  }

  if (normalizedContains(prompt, 'pdr') || normalizedContains(prompt, 'launchstack')) {
    return 'PDR AI / LaunchStack focuses on human-in-the-loop document revision. Instead of one-shot rewriting, the workflow supports staged edits, preview and diff review, regeneration, selective acceptance, and DOCX handling so users can keep editorial control while still benefiting from AI acceleration.'
  }

  if (normalizedContains(prompt, 'research')) {
    return 'Junzhe\'s research journey spans exoplanet transit modeling, perovskite solar cells, subatomic physics simulation, and healthcare AI research support. A recurring pattern is combining quantitative modeling with practical decision-support contexts.'
  }

  if (normalizedContains(prompt, 'technolog') || normalizedContains(prompt, 'stack')) {
    return 'Frequently used technologies include TypeScript, React, Node.js, PostgreSQL, pgvector, OpenAI APIs, Python, Go, Docker, and Kubernetes. The emphasis is on systems that are measurable, explainable, and useful in real user workflows.'
  }

  return 'This assistant is portfolio-specific. Try asking about Atlas, PDR AI, research background, publications, or engineering stack. The backend is designed to connect to a future RAG pipeline over public project materials.'
}
