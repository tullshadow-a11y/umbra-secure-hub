## Project rules

- Temporary inboxes come from the public Guerrilla Mail API, called directly from the browser (`src/lib/tempmail.ts`): it allows any origin and keeps rate limits per visitor instead of on one shared server IP.
- The active inbox session (address + sid token) persists in localStorage so a reload resumes the same address.
