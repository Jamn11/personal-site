---
title: "Welcome to My Writing"
description: "An example blog post to demonstrate the new content system"
date: 2025-01-31
draft: false
tags: ["meta", "welcome"]
---

# Welcome to My Writing

This is an example blog post to demonstrate how the new content collection system works. 

## How It Works

When you drop a markdown file into the `src/content/posts/` directory, it automatically:

1. Gets validated against the schema defined in `config.ts`
2. Appears as a link on the writing page
3. Gets its own URL at `/posts/[slug]/`

## Writing New Posts

To add a new post, just create a new `.md` file with frontmatter like this:

```yaml
---
title: "Your Post Title"
description: "A brief description"
date: 2025-01-31
draft: false
tags: ["tag1", "tag2"]
---
```

Then write your content in markdown below the frontmatter!

## Next Steps

You can delete this example post and start adding your own writing.