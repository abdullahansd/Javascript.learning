# AI Engineering Academy

A local single-page dashboard for the 30-week AI-native full-stack + agentic AI curriculum.

## Features
- Exact 8-phase, 30-week roadmap and deliverables
- Weekly mastery checkboxes and topic assignment view
- Daily 8-hour tracker, reflection and weekly review
- JavaScript playground with sandboxed iframe execution
- AI learning coach modes: explain, hint, quiz, review, project and debug
- Four portfolio project milestones
- Browser-local persistence with localStorage

## Run locally
1. Install Node.js LTS.
2. Extract this folder and open a terminal here.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your API key to `.env` (keep it private; never commit it).
6. Run `npm start`.
7. Open http://localhost:3000

Without an API key, tracker, roadmap, topics, projects, code editor and local practice prompts work. The coach will not generate real AI answers until the backend is configured.

## Notes
- Progress is saved in this browser on this device; it does not sync across devices.
- The code playground runs JavaScript in a sandboxed iframe and is for learning.
- The API key stays on the server, not in browser code.
- This is a local starter app, not a hosted multi-user service.
