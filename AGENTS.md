# Marenzia Architecture & Stone - Agent Instructions

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **CMS**: Hygraph (Headless GraphQL CMS)
- **Styling**: Tailwind CSS
- **Animations**: motion (framer-motion)
- **Package Manager**: npm

## Content Management (Hygraph)
All product, collection, and static page content is managed in Hygraph.
- **Queries**: Centralized in `lib/queries.ts`
- **Client**: Configured in `lib/hygraph.ts`
- **Models**:
    - `Product`: Main product model. Features `productCollection` (Relation) and `productMaterials` (Multi-relation).
    - `Collection`: Product groupings.
    - `Stone`: Materials archive.
    - `AboutPage`, `PhilosophyPage`, `ProcessPage`: Static content models.

## Key Patterns
- **Server Components**: Used for data fetching in `app/(frontend)/**/page.tsx`.
- **Client Components**: Used for interactivity and animations (e.g., `*Content.tsx`).
- **RTL**: The site is in Hebrew. Use `dir="rtl"` and logical properties.

## Development Commands
- `npm run dev`: Start development server
- `node scripts/migrate-content.js`: Run content migration (requires `.env`)
- `node scripts/verify-relations.js`: Verify schema relations

## AI Context: Hygraph MCP
To interact with Hygraph directly, you can use the Hygraph MCP server:
```json
{
  "mcpServers": {
    "hygraph": {
      "command": "npx",
      "args": ["-y", "@hygraph/mcp-server"],
      "env": {
        "HYGRAPH_CONTENT_API": "your_endpoint_here",
        "HYGRAPH_TOKEN": "your_token_here"
      }
    }
  }
}
```

## Commit Attribution
AI commits MUST include:
Co-Authored-By: Antigravity AI <antigravity@google.com>
