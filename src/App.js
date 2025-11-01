import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Zap, Brain, FileText, Target, AlertTriangle, Lightbulb, Eye, Wrench } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // SECTION 1: FOUNDATION
    {
      title: "Using Generative AI in Development Teams",
      subtitle: "Managing Claude Code Techniques in Professional Settings",
      type: "title",
      icon: Code
    },
    {
      title: "What is Claude Code?",
      subtitle: "An autonomous AI coding assistant",
      type: "content",
      icon: Code,
      bullets: [
        "CLI tool for agentic coding - AI that can autonomously plan, write, and execute code",
        "Works directly in your terminal with full access to your development environment",
        "Can read files, execute commands, make edits, and run tests",
        "Similar to: GitHub Copilot, Cursor, but with autonomous agent capabilities"
      ]
    },
    {
      title: "Vibe Coding",
      subtitle: "A scary reputation",
      type: "content",
      icon: Zap,
      definition: "Assigning the responsibility of designing and building systems to the LLMs",
      bullets: [
        "Sitting down and prompting your way to building a system",
        "Great for POCs and isolated changes",
        "But not sustainable for production teams..."
      ]
    },
    {
      title: "Less Code Writing, More Engineering",
      subtitle: "The fundamental shift in mindset",
      type: "emphasis",
      icon: Brain,
      keyPoint: "Your role evolves from writing code to designing solutions",
      bullets: [
        "Understand the problem deeply",
        "Define the solution architecture",
        "Plan the implementation strategy",
        "Let Claude Code handle the mechanical execution"
      ]
    },
    {
      title: "Moving Beyond Vibe Coding",
      subtitle: "The path to production-ready AI workflows",
      type: "content",
      icon: Target,
      bullets: [
        "From chaotic experimentation → Structured workflows",
        "From prompt-and-pray → Context engineering",
        "From reactive fixes → Proactive planning",
        "From single sessions → Persistent knowledge"
      ]
    },

    // SECTION 2: CORE TECHNIQUES
    {
      title: "Core Techniques",
      subtitle: "Building the foundation",
      type: "section",
      icon: Wrench
    },
    {
      title: "Prompting: Right Context, Right Time",
      subtitle: "Specificity drives success",
      type: "content",
      icon: Target,
      bullets: [
        "Be very specific - reference files, methods, variables, data models",
        "Don't assume Claude knows what you mean",
        "Bad: 'Write tests for my login controller'",
        "Good: 'Write integration tests for UserAuthController.login() in src/auth/controller.ts covering success, invalid credentials, and rate limiting'"
      ]
    },
    {
      title: "Prompting: Positive vs Negative",
      subtitle: "How you phrase instructions matters",
      type: "comparison",
      icon: AlertTriangle,
      bad: {
        title: "❌ Negative Statements",
        content: ["'Do not add inline comments'", "'Never write unit tests'"]
      },
      good: {
        title: "✅ Positive Statements",
        content: ["'Write self-documenting code with verbose naming'", "'We test this project through manual QA only'"]
      },
      explanation: "Negative statements put concepts INTO context, causing Claude to accidentally implement what you told it NOT to do."
    },
    {
      title: "Context Pollution",
      subtitle: "When conversations go wrong",
      type: "visual",
      icon: AlertTriangle,
      visual: "pollution",
      description: "Claude Code keeps full conversation history in memory. Going down a wrong path and correcting it still keeps that wrong direction in context, influencing future responses."
    },
    {
      title: "CLAUDE.md",
      subtitle: "The context you always want to include",
      type: "content",
      icon: FileText,
      bullets: [
        "Automatically loaded when you launch Claude Code in a folder",
        "Include: Important details, gotchas, quirks of your system",
        "Write precise and clear statements",
        "Hierarchy: Enterprise → Project → User → Local"
      ]
    },
    {
      title: "CLAUDE.md: Context Pollution Prevention",
      subtitle: "Keep the conversation clean from the start",
      type: "content",
      icon: FileText,
      bullets: [
        "Clear instructions prevent context pollution",
        "Document 'why' decisions were made",
        "Include anti-patterns to avoid",
        "Use positive phrasing to guide behavior",
        "Remember: This stays in context for EVERY message"
      ]
    },
    {
      title: "CLAUDE.md: Best Practices",
      subtitle: "Write once, benefit every session",
      type: "content",
      icon: Lightbulb,
      bullets: [
        "Be specific: '2-space indentation' not 'format properly'",
        "Use structure: Organize with markdown headings",
        "Include common commands: build, test, lint shortcuts",
        "Document architecture: Key patterns and decisions",
        "Import additional files: @path/to/file.md"
      ]
    },
    {
      title: "Gearing Agents for Success",
      subtitle: "Build context before asking for implementation",
      type: "comparison",
      icon: Zap,
      bad: {
        title: "❌ Cold Prompt",
        content: "Add OAuth to the login system"
      },
      good: {
        title: "✅ Geared Approach",
        steps: [
          "1. Explain how authentication currently works in /auth",
          "2. Review our existing token refresh pattern in TokenService.ts",
          "3. Use Plan Mode: Create a detailed implementation plan",
          "4. Iterate on plan: Discuss approach, identify risks",
          "5. Execute: Now add OAuth support following the agreed plan"
        ]
      }
    },
    {
      title: "Plan Mode",
      subtitle: "Safe exploration before implementation",
      type: "content",
      icon: FileText,
      bullets: [
        "Read-only analysis of your codebase - no accidental changes",
        "Perfect for: Multi-step features, code exploration, planning complex changes",
        "Activate: Press Shift+Tab twice or use --permission-mode plan flag",
        "Claude analyzes, creates detailed plans, suggests approaches",
        "Iterate on the plan before ANY code is written"
      ]
    },
    {
      title: "Plan Mode: Example Scenario",
      subtitle: "Real-world workflow walkthrough",
      type: "scenario",
      icon: FileText,
      scenario: {
        task: "Add payment processing to e-commerce platform",
        steps: [
          "1. Start Plan Mode: 'Analyze our current order processing flow'",
          "2. Claude explores codebase, identifies integration points",
          "3. You: 'Create a plan for adding Stripe payments'",
          "4. Claude presents detailed plan with steps, risks, file changes",
          "5. Iterate: 'What about handling webhooks for async updates?'",
          "6. Claude updates plan with webhook strategy",
          "7. Exit Plan Mode, execute the agreed plan with confidence"
        ]
      }
    },
    {
      title: "Extended Thinking",
      subtitle: "When problems need deeper reasoning",
      type: "content",
      icon: Brain,
      bullets: [
        "Toggle with Tab during session",
        "Trigger phrases for increasing depth:",
        "  'think' < 'think hard' < 'think harder' < 'ultrathink'",
        "Best for: Complex architecture, debugging intricate issues, evaluating tradeoffs",
        "Claude spends more time reasoning before responding",
        "Use when quality > speed"
      ]
    },

    // SECTION 3: ADVANCED CONTEXT MANAGEMENT
    {
      title: "Advanced Context Management",
      subtitle: "Mastering the limited window",
      type: "section",
      icon: Brain
    },
    {
      title: "Context Engineering: The Limited Window",
      subtitle: "What's consuming your 200K tokens?",
      type: "visual",
      icon: Brain,
      visual: "contextWindow",
      description: "Understanding what fills your context and how to manage it"
    },
    {
      title: "Compacting vs Fresh Start",
      subtitle: "When context fills up",
      type: "content",
      icon: Target,
      bullets: [
        "Warning appears at <5% context remaining",
        "Two strategies:",
        "1. Fresh Start: Exit and begin new session (often better!)",
        "2. Checkpoint Rollback: Esc+Esc to rewind to earlier state",
        "Claude 4.5 excels at rediscovering state from filesystem/git",
        "Work toward completing current task before hitting limit"
      ]
    },
    {
      title: "Checkpointing & Rewind",
      subtitle: "Your safety net",
      type: "content",
      icon: Target,
      bullets: [
        "Every prompt creates automatic checkpoint",
        "Press Esc + Esc (double escape) to open rewind menu",
        "Options: Rewind conversation only, code only, or both",
        "Persists across sessions",
        "Perfect for: Recovering from wrong paths, trying alternatives",
        "Not a Git replacement - use for session-level recovery"
      ]
    },
    {
      title: "Persisting Knowledge Between Sessions",
      subtitle: "Build institutional memory",
      type: "content",
      icon: FileText,
      bullets: [
        "Have Claude write plans in markdown files (progress.txt, plan.md)",
        "Maintain LLM-managed changelog documenting decisions and progress",
        "Claude can read these files in future sessions to understand:",
        "  • What's been built and why",
        "  • Decisions made and their rationale",
        "  • Current progress and next steps",
        "Git logs also serve as persistent memory"
      ]
    },

    // SECTION 4: SPECIALIZATION
    {
      title: "Specialization",
      subtitle: "Subagents, Skills & Commands",
      type: "section",
      icon: Wrench
    },
    {
      title: "Subagents: Specialized Sessions",
      subtitle: "Divide and conquer with dedicated AI workers",
      type: "content",
      icon: Brain,
      bullets: [
        "Independent AI assistants with own context windows",
        "Each has specific expertise (code review, testing, debugging)",
        "Automatically invoked based on task, or explicitly requested",
        "Prevents context pollution in main conversation",
        "Can parallelize work across different concerns"
      ]
    },
    {
      title: "Subagents: Benefits & Use Cases",
      subtitle: "Real-world applications",
      type: "content",
      icon: Target,
      bullets: [
        "Parallelization: Test runner while you plan next feature",
        "Clean context: Security auditor doesn't muddy main thread",
        "Specialized tools: Limit powerful operations to specific agents",
        "Team sharing: Check into .claude/agents/ for consistency",
        "Example: code-reviewer agent analyzes changes while debugger agent investigates failures"
      ]
    },
    {
      title: "Slash Commands: Quick Shortcuts",
      subtitle: "Reusable prompts at your fingertips",
      type: "content",
      icon: Zap,
      bullets: [
        "Simple markdown files that execute frequently-used prompts",
        "Syntax: /command-name [arguments]",
        "Two types:",
        "  • Built-in: /help, /review, /compact, /mcp, /agents",
        "  • Custom: Project (.claude/commands/) or Personal (~/.claude/commands/)",
        "Support arguments via $ARGUMENTS placeholder",
        "Perfect for team-wide shortcuts and consistent workflows"
      ]
    },
    {
      title: "Progressive Disclosure",
      subtitle: "Skills: Loading only what's needed",
      type: "content",
      icon: Zap,
      bullets: [
        "Each Skill uses only 30-50 tokens until loaded",
        "Full content loads only when relevant to the task",
        "Core principle: Start with table of contents, load chapters on demand",
        "Allows effectively unbounded context in Skills",
        "Keeps main conversation lean and focused"
      ]
    },
    {
      title: "Skills vs Commands",
      subtitle: "When to use each approach",
      type: "comparison",
      icon: Zap,
      skills: {
        title: "Skills (Model-Invoked)",
        content: [
          "Claude decides when to use them",
          "30-50 tokens until loaded",
          "Folder with SKILL.md + resources",
          "Example: Code review standards skill",
          "Progressive disclosure principle"
        ]
      },
      commands: {
        title: "Commands (User-Invoked)",
        content: [
          "You explicitly type /command",
          "Immediate execution",
          "Simple markdown file",
          "Example: /refactor, /review",
          "Quick shortcuts"
        ]
      }
    },
    {
      title: "MCPs: Connect External Tools",
      subtitle: "But prefer CLI tools first!",
      type: "content",
      icon: Wrench,
      bullets: [
        "Model Context Protocol connects Claude to external services",
        "Context efficiency matters: Always prefer standard CLI tools",
        "Why? CLI tools like 'gh', 'docker', 'playwright' are in training data",
        "MCPs include verbose tool descriptions → consume your context budget",
        "Use MCPs when:",
        "  • Service is a web api without CLI",
        "  • No CLI exists for the tool",
        "  • Proprietary internal tools or your own APIs",
        "Side note: I have still had better success using the Playwright MCP over CLI for browser interactions"
      ]
    },

    // SECTION 5: SCALING & BEST PRACTICES
    {
      title: "Scaling & Best Practices",
      subtitle: "Production-ready workflows",
      type: "section",
      icon: Target
    },
    {
      title: "Giving the Agent Eyes",
      subtitle: "Playwright MCP for browser access",
      type: "content",
      icon: Eye,
      bullets: [
        "Problem: Claude Code is blind to frontend results",
        "It sees HTML, CSS, TS but not the rendered output",
        "Solution: Playwright MCP gives it browser access",
        "Agent can navigate its own UI, take screenshots, inspect DOM",
        "Catches visual bugs, layout issues, interaction problems",
        "Transforms frontend development experience"
      ]
    },
    {
      title: "Giving the Agent More Senses",
      subtitle: "Extend Claude beyond code",
      type: "content",
      icon: Wrench,
      bullets: [
        "Create Skills for reading backend logs (Docker, Grafana, etc.)",
        "Database access: Query production data directly",
        "Project launch: Skills for starting services, running migrations",
        "Linters & automated tests guide 'good results'",
        "The more tools and senses → the more valuable the agent",
        "Make it capable of YOUR daily tasks"
      ]
    },
    {
      title: "Worktrees: Multiple Parallel Sessions",
      subtitle: "Run multiple Claude instances safely",
      type: "content",
      icon: Code,
      bullets: [
        "Git worktrees = separate working directories, same repository",
        "Run Claude Code in different worktrees simultaneously",
        "Use cases:",
        "  • One session implements feature A, another handles bug fix B",
        "  • Try multiple approaches to same problem, compare results",
        "  • Long-running task in one worktree, you work elsewhere",
        "Complete isolation, no interference between sessions"
      ]
    },
    {
      title: "Pitfalls: Common Mistakes",
      subtitle: "Learn from these failures",
      type: "content",
      icon: AlertTriangle,
      bullets: [
        "LLMs trained to produce code, not remove it - be explicit about deletions",
        "Don't fight bad context - kill session and start fresh",
        "Nothing is implied - be specific in every prompt",
        "Bad: 'Implement audit logs across settings endpoints'",
        "Good: 'Add audit logging to POST /api/settings/* endpoints in SettingsController.ts, log user ID, timestamp, changed fields'",
        "Vague prompts = unpredictable results"
      ]
    },
    {
      title: "Surprising Discoveries",
      subtitle: "Unexpected use cases that work brilliantly",
      type: "content",
      icon: Lightbulb,
      bullets: [
        "Surprisingly great at solving merge conflicts",
        "'Review git history of authentication module to understand why 2FA stopped working recently'",
        "Understanding how domains evolved over time",
        "Can do a lot more than code, maybe try asking it to create a presentation based on your talking points?",
        "Experiment! You'll find your own surprising wins"
      ]
    },
    {
      title: "Key Takeaways",
      subtitle: "Remember these core principles",
      type: "takeaways",
      icon: Target,
      points: [
        {
          title: "Shift to Engineering",
          content: "Focus on understanding problems and designing solutions, not writing code"
        },
        {
          title: "Accept the Chaos Machine",
          content: "It runs on randomness. Bad context? Start fresh. Embrace different approaches - if it solves the problem and meets standards, ship it."
        },
        {
          title: "Context is Everything",
          content: "Gear agents, use Plan Mode, manage pollution, persist knowledge"
        },
        {
          title: "Specialize & Scale",
          content: "Subagents, Skills, worktrees - build systematic workflows"
        },
        {
          title: "Give it Senses",
          content: "Browser access, logs, databases - the more tools, the more valuable"
        }
      ]
    },
    {
      title: "Resources",
      subtitle: "Continue learning",
      type: "content",
      icon: FileText,
      bullets: [
        "📚 docs.claude.com - Official documentation",
        "🔧 docs.claude.com/claude-code - Claude Code specific",
        "💡 anthropic.com/engineering/claude-code-best-practices",
        "🎯 anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
        "📊 Presentation: https://github.com/CavaleriDK/claude-presentation",
        "",
        "Questions?"
      ]
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="max-w-5xl w-full">
          {slide.type === "title" && (
            <div className="text-center space-y-8">
              <Icon className="w-24 h-24 mx-auto text-blue-400" />
              <h1 className="text-6xl font-bold">{slide.title}</h1>
              <p className="text-2xl text-slate-300">{slide.subtitle}</p>
            </div>
          )}

          {slide.type === "section" && (
            <div className="text-center space-y-8">
              <Icon className="w-20 h-20 mx-auto text-blue-400" />
              <h1 className="text-5xl font-bold">{slide.title}</h1>
              <p className="text-2xl text-slate-300">{slide.subtitle}</p>
            </div>
          )}

          {slide.type === "content" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>
              
              {slide.definition && (
                <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                  <p className="text-xl italic text-slate-300">{slide.definition}</p>
                </div>
              )}
              
              <ul className="space-y-4 text-xl">
                {slide.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-blue-400 font-bold">•</span>
                    <span className={bullet.startsWith('  ') ? 'ml-6 text-slate-300' : ''}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.type === "emphasis" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
                <p className="text-3xl font-bold text-center">{slide.keyPoint}</p>
              </div>
              
              <ul className="space-y-4 text-xl mt-8">
                {slide.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.type === "comparison" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>

              {slide.bad && slide.good && (
                <>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-red-900/30 p-6 rounded-lg border-2 border-red-500">
                      <h3 className="text-2xl font-bold mb-4 text-red-400">{slide.bad.title}</h3>
                      {Array.isArray(slide.bad.content) ? (
                        <ul className="space-y-2">
                          {slide.bad.content.map((item, i) => (
                            <li key={i} className="text-lg">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg">{slide.bad.content}</p>
                      )}
                    </div>

                    <div className="bg-green-900/30 p-6 rounded-lg border-2 border-green-500">
                      <h3 className="text-2xl font-bold mb-4 text-green-400">{slide.good.title}</h3>
                      {slide.good.steps ? (
                        <ul className="space-y-2">
                          {slide.good.steps.map((step, i) => (
                            <li key={i} className="text-lg">{step}</li>
                          ))}
                        </ul>
                      ) : Array.isArray(slide.good.content) ? (
                        <ul className="space-y-2">
                          {slide.good.content.map((item, i) => (
                            <li key={i} className="text-lg">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg">{slide.good.content}</p>
                      )}
                    </div>
                  </div>

                  {slide.explanation && (
                    <div className="bg-slate-800 p-4 rounded-lg mt-4">
                      <p className="text-lg text-slate-300">{slide.explanation}</p>
                    </div>
                  )}
                </>
              )}

              {slide.skills && slide.commands && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-900/30 p-6 rounded-lg border-2 border-blue-500">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{slide.skills.title}</h3>
                    <ul className="space-y-2">
                      {slide.skills.content.map((item, i) => (
                        <li key={i} className="text-lg flex gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-900/30 p-6 rounded-lg border-2 border-purple-500">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">{slide.commands.title}</h3>
                    <ul className="space-y-2">
                      {slide.commands.content.map((item, i) => (
                        <li key={i} className="text-lg flex gap-2">
                          <span className="text-purple-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {slide.type === "visual" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>

              {slide.visual === "pollution" && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-red-400">❌ Polluted Context</h3>
                    <div className="bg-slate-800 p-4 rounded space-y-2 text-sm">
                      <div className="text-green-400">User: Add OAuth login</div>
                      <div className="text-slate-400">Claude: [Implements wrong approach]</div>
                      <div className="text-green-400">User: No, that's not right...</div>
                      <div className="text-slate-400">Claude: [Tries to fix but still references wrong approach]</div>
                      <div className="text-green-400">User: Still wrong...</div>
                      <div className="bg-red-900/30 p-2 rounded mt-2">
                        <p className="text-red-300">Context now polluted with failed attempts</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-green-400">✅ Clean Start</h3>
                    <div className="bg-slate-800 p-4 rounded space-y-2 text-sm">
                      <div className="text-green-400">Kill session, start fresh</div>
                      <div className="text-green-400">User: Review how our auth system works in /auth</div>
                      <div className="text-slate-400">Claude: [Analyzes existing patterns]</div>
                      <div className="text-green-400">User: Use Plan Mode to design OAuth integration</div>
                      <div className="text-slate-400">Claude: [Creates clear plan]</div>
                      <div className="bg-green-900/30 p-2 rounded mt-2">
                        <p className="text-green-300">Clean context, better results</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slide.visual === "contextWindow" && (
                <div className="bg-slate-800 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="bg-blue-900/50 p-3 rounded">
                      <span className="font-bold">System Prompt</span> <span className="text-slate-400 text-sm">(~2K tokens)</span>
                    </div>
                    <div className="bg-purple-900/50 p-3 rounded">
                      <span className="font-bold">CLAUDE.md Files</span> <span className="text-slate-400 text-sm">(varies)</span>
                    </div>
                    <div className="bg-green-900/50 p-3 rounded">
                      <span className="font-bold">Skills Metadata</span> <span className="text-slate-400 text-sm">(30-50 tokens each)</span>
                    </div>
                    <div className="bg-yellow-900/50 p-3 rounded">
                      <span className="font-bold">Conversation History</span> <span className="text-slate-400 text-sm">(grows over time)</span>
                    </div>
                    <div className="bg-red-900/50 p-3 rounded">
                      <span className="font-bold">File Reads & Tool Outputs</span> <span className="text-slate-400 text-sm">(can be large!)</span>
                    </div>
                    <div className="bg-orange-900/50 p-3 rounded">
                      <span className="font-bold">User Prompt</span> <span className="text-slate-400 text-sm">(current message)</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-slate-400">
                    ⚠️ Total available: ~200K tokens • Compaction warning at &lt;5%
                  </div>
                </div>
              )}

              <p className="text-lg text-slate-300 mt-4">{slide.description}</p>
            </div>
          )}

          {slide.type === "scenario" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg mb-6">
                <p className="text-2xl font-bold">Task: {slide.scenario.task}</p>
              </div>

              <div className="space-y-3">
                {slide.scenario.steps.map((step, i) => (
                  <div key={i} className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-400">
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "demo" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <div>
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  {slide.subtitle && <p className="text-xl text-slate-400 mt-2">{slide.subtitle}</p>}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-8 rounded-lg border-2 border-green-500">
                <p className="text-3xl font-bold text-center mb-6">🎬 Live Demo Time!</p>
                <ul className="space-y-4 text-xl">
                  {slide.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-green-400 font-bold">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {slide.type === "takeaways" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-400" />
                <h2 className="text-4xl font-bold">{slide.title}</h2>
              </div>

              <div className="space-y-4">
                {slide.points.map((point, i) => (
                  <div key={i} className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg border-l-4 border-blue-400">
                    <h3 className="text-2xl font-bold mb-2 text-blue-300">{point.title}</h3>
                    <p className="text-lg text-slate-300">{point.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 border-t border-slate-700 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 rounded-lg disabled:opacity-30 hover:bg-slate-600 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        
        <div className="text-slate-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 rounded-lg disabled:opacity-30 hover:bg-slate-600 transition"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;