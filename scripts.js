// 50 content ideas for creators in the this dataset.
const ideas = [
  {
    title: "30-Day Reels Challenge Blueprint",
    niche: "Creator Education",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Break down a month-long short-form challenge into daily prompts creators can save and follow.",
    tags: ["challenge", "reels", "consistency", "planning"],
  },
  {
    title: "My 3-Step Thumbnail Fix",
    niche: "YouTube Growth",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "15 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Show the fast visual checks you use to improve click-through without redesigning every thumbnail from scratch.",
    tags: ["thumbnails", "ctr", "youtube", "design"],
  },
  {
    title: "What I’d Do With My First 1,000 Subscribers",
    niche: "YouTube Growth",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "45 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Attract",
    description:
      "Outline the systems, experiments, and content priorities you would focus on with an early-stage audience.",
    tags: ["subscribers", "growth", "beginner", "strategy"],
  },
  {
    title: "Weekly Creator CEO Note",
    niche: "Newsletter Growth",
    format: "Newsletter",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Share one experiment, one lesson, and one next move to build trust through visible iteration.",
    tags: ["newsletter", "reflection", "systems", "trust"],
  },
  {
    title: "Live Channel Audit for a Subscriber",
    niche: "Creator Education",
    format: "Live",
    difficulty: "High",
    filmingTime: "60 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Review a real creator profile in public and explain the exact changes that would improve clarity and conversion.",
    tags: ["audit", "live", "channel", "conversion"],
  },
  {
    title: "Five Hooks for One Topic",
    niche: "Short-Form Strategy",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Teach creators how to extract multiple strong openings from a single idea instead of chasing more ideas.",
    tags: ["hooks", "copywriting", "carousel", "shorts"],
  },
  {
    title: "The B-Roll I Reuse Every Week",
    niche: "Video Workflow",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "20 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: true,
    audience: "Nurture",
    description:
      "Show a repeatable library of shots that makes short-form content faster to produce.",
    tags: ["b-roll", "workflow", "batching", "efficiency"],
  },
  {
    title: "Behind the Scenes of a Sponsorship Deck",
    niche: "Monetization",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "40 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Walk through the slides, positioning, and proof points that make a sponsorship pitch credible.",
    tags: ["sponsorship", "deck", "brand deals", "income"],
  },
  {
    title: "Content Calendar in 15 Minutes",
    niche: "Productivity for Creators",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "15 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Demonstrate a lightweight planning workflow for mapping a week of posts without overcomplicating the process.",
    tags: ["calendar", "planning", "productivity", "content"],
  },
  {
    title: "Creator Burnout Warning Signs",
    niche: "Creator Mindset",
    format: "Newsletter",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Write a candid note on the patterns that signal overproduction and how to reset before momentum breaks.",
    tags: ["burnout", "mindset", "sustainability", "creator life"],
  },
  {
    title: "Before vs After: Editing One Talking Head Clip",
    niche: "Video Editing",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "35 min",
    editingEffort: "High",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Use a real clip to demonstrate pacing, captions, cut points, and visual emphasis choices.",
    tags: ["editing", "before after", "talking head", "tutorial"],
  },
  {
    title: "Three CTAs That Don’t Sound Desperate",
    niche: "Audience Conversion",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Convert",
    description:
      "Teach subtle call-to-action structures that feel helpful while still moving viewers toward the next step.",
    tags: ["cta", "conversion", "copywriting", "sales"],
  },
  {
    title: "How I Research Trends Without Copying Them",
    niche: "Trend Strategy",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "30 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Explain your process for spotting patterns, extracting principles, and remixing them into original content.",
    tags: ["trends", "research", "originality", "strategy"],
  },
  {
    title: "The Creator Dashboard I Check Every Monday",
    niche: "Analytics",
    format: "Carousel",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Turn your weekly metrics review into a clean framework your audience can borrow.",
    tags: ["analytics", "dashboard", "metrics", "systems"],
  },
  {
    title: "Hot Take: Most Creators Post Too Randomly",
    niche: "Content Strategy",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "10 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Lead with a strong opinion, then back it up with a simple framework for thematic consistency.",
    tags: ["opinion", "strategy", "consistency", "hooks"],
  },
  {
    title: "Anatomy of a High-Converting Welcome Email",
    niche: "Email Marketing",
    format: "Newsletter",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Break down the sections of a welcome email that sets expectations and nudges readers toward your offer.",
    tags: ["email", "welcome sequence", "conversion", "copy"],
  },
  {
    title: "One Comment Turned Into Four Posts",
    niche: "Community Building",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "10 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Nurture",
    description:
      "Show how audience questions can become a repeatable source of practical content ideas.",
    tags: ["comments", "community", "repurposing", "ideas"],
  },
  {
    title: "Pricing Mistakes New Creators Make",
    niche: "Monetization",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "40 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Cover the common ways creators underprice services, retainers, and brand collaborations.",
    tags: ["pricing", "offers", "freelance", "revenue"],
  },
  {
    title: "My Script Template for Educational Reels",
    niche: "Short-Form Strategy",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Share a swipeable scripting formula for building concise, useful short-form posts.",
    tags: ["script", "template", "reels", "education"],
  },
  {
    title: "Film With Me: Batch 7 Videos in One Hour",
    niche: "Video Workflow",
    format: "Live",
    difficulty: "High",
    filmingTime: "60 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Nurture",
    description:
      "Take viewers through a real batching session to demystify efficient content production.",
    tags: ["batching", "filming", "live", "workflow"],
  },
  {
    title: "The First Offer I’d Sell to a Small Audience",
    niche: "Offer Creation",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "35 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Explain how to choose a simple, credible starter offer before building a complex product stack.",
    tags: ["offer", "beginner business", "product", "sales"],
  },
  {
    title: "Three Ways to Reuse a Long Video",
    niche: "Repurposing",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "12 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Show creators how one long-form asset can become clips, carousels, and email content.",
    tags: ["repurpose", "long-form", "clips", "efficiency"],
  },
  {
    title: "The KPI I Ignore on Purpose",
    niche: "Analytics",
    format: "Newsletter",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Challenge a popular metric and explain why it does not help you make better content decisions.",
    tags: ["kpi", "analytics", "focus", "decision making"],
  },
  {
    title: "From Trend Audio to Original Angle",
    niche: "Trend Strategy",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "15 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Use a current short-form pattern to show how to add commentary and originality instead of mimicry.",
    tags: ["trend audio", "original angle", "reels", "hooks"],
  },
  {
    title: "What a Brand Looks for Before Saying Yes",
    niche: "Brand Deals",
    format: "Carousel",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Outline the signals that make creators easier to trust from a sponsor’s perspective.",
    tags: ["brand deals", "trust", "sponsorship", "pitching"],
  },
  {
    title: "My Home Studio Under $300",
    niche: "Creator Gear",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "50 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Attract",
    description:
      "Show a budget-conscious recording setup and explain what matters more than expensive equipment.",
    tags: ["gear", "studio", "budget", "setup"],
  },
  {
    title: "The One-Sentence Positioning Test",
    niche: "Personal Branding",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Help creators tighten their profile and bio messaging with a simple clarity test.",
    tags: ["positioning", "branding", "bio", "clarity"],
  },
  {
    title: "Editing Shortcuts I Wish I Learned Earlier",
    niche: "Video Editing",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "10 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Package a few concrete editing moves into a quick win format that feels instantly useful.",
    tags: ["editing shortcuts", "premiere", "final cut", "speed"],
  },
  {
    title: "Monthly Creator Reset Checklist",
    niche: "Productivity for Creators",
    format: "Newsletter",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Send a structured end-of-month review that helps your audience clean up projects and plan ahead.",
    tags: ["checklist", "monthly reset", "planning", "workflow"],
  },
  {
    title: "Breakdown of a Viral Hook That Actually Teaches",
    niche: "Short-Form Strategy",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "30 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Analyze why a strong opening works and connect it to instructional content, not just entertainment.",
    tags: ["viral hook", "analysis", "education", "retention"],
  },
  {
    title: "How I Turn Testimonials Into Content",
    niche: "Audience Conversion",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Transform client or student results into proof-based content that still feels useful.",
    tags: ["testimonials", "social proof", "conversion", "case study"],
  },
  {
    title: "The Creator Skill Stack for 2026",
    niche: "Creator Education",
    format: "YouTube",
    difficulty: "High",
    filmingTime: "55 min",
    editingEffort: "High",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Attract",
    description:
      "Map the skills creators need now across storytelling, packaging, audience building, and monetization.",
    tags: ["skills", "future of creators", "career", "education"],
  },
  {
    title: "A Better Way to Ask for Comments",
    niche: "Community Building",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "10 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Nurture",
    description:
      "Replace weak engagement bait with prompts that generate useful, natural discussion.",
    tags: ["comments", "engagement", "community", "prompts"],
  },
  {
    title: "My Creator CRM in Notion",
    niche: "Systems",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "45 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Walk through the simple database you use to track sponsors, collaborators, and content follow-ups.",
    tags: ["notion", "crm", "systems", "operations"],
  },
  {
    title: "Content Ideas Hidden in Your Analytics",
    niche: "Analytics",
    format: "Carousel",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Show how high-retention topics and repeated search queries can guide your next batch of posts.",
    tags: ["analytics", "ideation", "content planning", "retention"],
  },
  {
    title: "How I Prep for a Collab Call",
    niche: "Networking",
    format: "Newsletter",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Share the agenda, prep notes, and follow-up structure that turns casual creator calls into real opportunities.",
    tags: ["collab", "networking", "relationships", "prep"],
  },
  {
    title: "Three Formats I’d Stop Using This Year",
    niche: "Content Strategy",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "15 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Use a strong opinion to discuss stale content patterns and what to replace them with.",
    tags: ["content formats", "opinion", "strategy", "refresh"],
  },
  {
    title: "Creator Q&A: Ask Me Anything About Growth",
    niche: "Creator Education",
    format: "Live",
    difficulty: "Medium",
    filmingTime: "45 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Run an interactive session that surfaces real audience pain points and doubles as an idea mine.",
    tags: ["q&a", "live", "growth", "community"],
  },
  {
    title: "Why Your Best Content Sometimes Flops",
    niche: "Creator Mindset",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "30 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Explain the difference between quality, packaging, timing, and distribution so creators interpret results better.",
    tags: ["mindset", "distribution", "flops", "analysis"],
  },
  {
    title: "Three Lead Magnet Ideas for Experts",
    niche: "Email Marketing",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Offer practical lead magnet formats that align with expert businesses, not generic freebies.",
    tags: ["lead magnet", "experts", "email", "growth"],
  },
  {
    title: "Repurpose a Podcast Into a Week of Content",
    niche: "Repurposing",
    format: "YouTube",
    difficulty: "High",
    filmingTime: "45 min",
    editingEffort: "High",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Turn one long conversation into clips, quotes, carousels, and emails with a structured system.",
    tags: ["podcast", "repurposing", "systems", "distribution"],
  },
  {
    title: "The Fastest Way to Brief a Video Editor",
    niche: "Operations",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "12 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Convert",
    description:
      "Show the exact asset package and notes that reduce back-and-forth when delegating editing.",
    tags: ["editor brief", "delegation", "ops", "workflow"],
  },
  {
    title: "What I’d Track Before Hiring Help",
    niche: "Operations",
    format: "Newsletter",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Explain the workload, revenue, and process signals that make a first contractor hire less risky.",
    tags: ["hiring", "operations", "freelancer", "scale"],
  },
  {
    title: "A Better Content Series Than Daily Vlogs",
    niche: "Content Strategy",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "10 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Pitch a more strategic recurring series model that still feels personal but teaches something specific.",
    tags: ["series", "vlogs", "strategy", "repeatable"],
  },
  {
    title: "How I Turn DMs Into Product Research",
    niche: "Audience Research",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Medium",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Show how recurring direct messages can shape content, offers, and messaging with less guessing.",
    tags: ["dms", "research", "offers", "messaging"],
  },
  {
    title: "The Creator Tech Stack I’d Keep in a Recession",
    niche: "Creator Gear",
    format: "Newsletter",
    difficulty: "Medium",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "Medium",
    trendFriendly: false,
    audience: "Nurture",
    description:
      "Share a lean stack that protects output quality while trimming unnecessary software spend.",
    tags: ["tech stack", "budget", "tools", "creator business"],
  },
  {
    title: "How to Teach Without Sounding Generic",
    niche: "Creator Education",
    format: "YouTube",
    difficulty: "High",
    filmingTime: "50 min",
    editingEffort: "High",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Attract",
    description:
      "Explain how experience, specificity, and opinion combine to make educational content more memorable.",
    tags: ["teaching", "specificity", "voice", "education"],
  },
  {
    title: "Short-Form Content Scorecard",
    niche: "Short-Form Strategy",
    format: "Carousel",
    difficulty: "Low",
    filmingTime: "0 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Nurture",
    description:
      "Give your audience a checklist they can use to evaluate hooks, clarity, pacing, and replay value.",
    tags: ["scorecard", "short-form", "checklist", "retention"],
  },
  {
    title: "Three Ways to Warm Up an Offer Before Launch",
    niche: "Offer Creation",
    format: "YouTube",
    difficulty: "Medium",
    filmingTime: "35 min",
    editingEffort: "Medium",
    engagementPotential: "High",
    trendFriendly: false,
    audience: "Convert",
    description:
      "Walk through pre-launch content that builds demand before the sales page goes live.",
    tags: ["launch", "offer", "warmup", "sales"],
  },
  {
    title: "My Creator Week in Four Blocks",
    niche: "Productivity for Creators",
    format: "Shorts",
    difficulty: "Low",
    filmingTime: "15 min",
    editingEffort: "Low",
    engagementPotential: "High",
    trendFriendly: true,
    audience: "Attract",
    description:
      "Show a simple weekly rhythm for planning, filming, editing, and distribution that feels realistic.",
    tags: ["weekly plan", "time management", "creator workflow", "systems"],
  },
];

const dom = {
  form: document.getElementById("questionnaire-form"),
  resultsSection: document.getElementById("results-section"),
  resultsGrid: document.getElementById("results-grid"),
  resultsSummary: document.getElementById("results-summary"),
  resultsFilter: document.getElementById("results-filter"),
  matchedTotal: document.getElementById("matched-total"),
  selectedNiche: document.getElementById("selected-niche"),
  averageEngagement: document.getElementById("average-engagement"),
  trendFriendlyCount: document.getElementById("trend-friendly-count"),
  clearButton: document.getElementById("clear-questionnaire"),
  startOverButton: document.getElementById("start-over-button"),
  fields: {
    skillLevel: document.getElementById("skillLevel"),
    filmingTime: document.getElementById("filmingTime"),
    editingEffort: document.getElementById("editingEffort"),
  },
};

const NICHE_LABELS = {
  "creator-education": "Creator Education",
  "youtube-growth": "YouTube Growth",
  "short-form-strategy": "Short-Form Strategy",
  "video-editing": "Video Editing",
  "email-marketing": "Email Marketing",
  monetization: "Monetization",
};

const MATCH_SCORE_VALUES = {
  niche: 4,
  skillLevel: 3,
  filmingTime: 2,
  editingEffort: 2,
  goal: 3,
  trendFriendly: 1,
};

const ENGAGEMENT_SCORES = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const GOAL_LABELS = {
  "grow-audience": "Grow Audience",
  "increase-engagement": "Increase Engagement",
  "improve-consistency": "Improve Consistency",
  "sell-offer": "Sell an Offer",
  "build-authority": "Build Authority",
};

const SKILL_LEVEL_BY_DIFFICULTY = {
  Low: "beginner",
  Medium: "intermediate",
  High: "advanced",
};

const SKILL_LEVEL_LABELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const EMPTY_RESULTS_MESSAGE =
  "No matching ideas were found for that niche yet. Try a different niche or reset the questionnaire and answer again.";

const MISSING_NICHE_MESSAGE =
  "Choose a niche first so the app can narrow the idea list.";

const FILTER_EMPTY_MESSAGE =
  "No suggested ideas match the filter you selected. Try a different filter option.";

const resultsViewState = {
  answers: null,
  displayedResults: [],
};

function readFormAnswers() {
  const selectedTrendPreference = dom.form.querySelector(
    'input[name="trendFriendly"]:checked',
  );
  const selectedNiches = Array.from(
    dom.form.querySelectorAll('input[name="niches"]:checked'),
    (input) => input.value,
  );
  const selectedGoals = Array.from(
    dom.form.querySelectorAll('input[name="goals"]:checked'),
    (input) => input.value,
  );

  return {
    niches: selectedNiches,
    skillLevel: dom.fields.skillLevel.value,
    filmingTime: dom.fields.filmingTime.value,
    editingEffort: dom.fields.editingEffort.value,
    goals: selectedGoals,
    trendFriendly: selectedTrendPreference
      ? selectedTrendPreference.value === "yes"
      : false,
  };
}

function getIdeaSkillLevelId(idea) {
  return SKILL_LEVEL_BY_DIFFICULTY[idea.difficulty] || "";
}

function getSkillLevelLabel(idea) {
  return SKILL_LEVEL_LABELS[getIdeaSkillLevelId(idea)] || idea.difficulty;
}

function getIdeaFilmingTimeId(idea) {
  const minutes = Number.parseInt(idea.filmingTime, 10);

  if (minutes <= 15) {
    return "low";
  }

  if (minutes <= 45) {
    return "medium";
  }

  return "high";
}

function getIdeaGoalIds(idea) {
  const goalIds = [];

  if (idea.audience === "Attract") {
    goalIds.push("grow-audience", "build-authority");
  }

  if (idea.audience === "Nurture") {
    goalIds.push("increase-engagement", "improve-consistency", "build-authority");
  }

  if (idea.audience === "Convert") {
    goalIds.push("sell-offer", "build-authority");
  }

  if (idea.tags.includes("consistency") || idea.tags.includes("planning")) {
    goalIds.push("improve-consistency");
  }

  if (idea.engagementPotential === "High") {
    goalIds.push("increase-engagement");
  }

  return goalIds;
}

function getNicheLabel(nicheId) {
  return NICHE_LABELS[nicheId] || "";
}

function getNicheLabels(nicheIds) {
  return nicheIds.map((nicheId) => getNicheLabel(nicheId)).filter(Boolean);
}

function filterIdeasForSelectedNiches(nicheIds) {
  const selectedNicheLabels = getNicheLabels(nicheIds);

  return ideas.filter((idea) => selectedNicheLabels.includes(idea.niche));
}

function calculateMatchScore(idea, answers) {
  let score = 0;
  const selectedNicheLabels = getNicheLabels(answers.niches);

  // Every idea that survives the first niche filter gets the niche points.
  if (selectedNicheLabels.includes(idea.niche)) {
    score += MATCH_SCORE_VALUES.niche;
  }

  if (getIdeaSkillLevelId(idea) === answers.skillLevel) {
    score += MATCH_SCORE_VALUES.skillLevel;
  }

  if (getIdeaFilmingTimeId(idea) === answers.filmingTime) {
    score += MATCH_SCORE_VALUES.filmingTime;
  }

  if (idea.editingEffort.toLowerCase() === answers.editingEffort) {
    score += MATCH_SCORE_VALUES.editingEffort;
  }

  if (answers.goals.some((goalId) => getIdeaGoalIds(idea).includes(goalId))) {
    score += MATCH_SCORE_VALUES.goal;
  }

  if (answers.trendFriendly && idea.trendFriendly) {
    score += MATCH_SCORE_VALUES.trendFriendly;
  }

  return score;
}

function buildRankedResults(answers) {
  const nicheMatchedIdeas = filterIdeasForSelectedNiches(answers.niches);
  const displayedIdeas = nicheMatchedIdeas
    .map((idea) => ({
      ...idea,
      matchScore: calculateMatchScore(idea, answers),
    }))
    .sort((left, right) => {
      if (right.matchScore !== left.matchScore) {
        return right.matchScore - left.matchScore;
      }

      return left.title.localeCompare(right.title);
    })
    .slice(0, 6);

  return {
    totalMatchedIdeas: nicheMatchedIdeas.length,
    displayedResults: displayedIdeas,
  };
}

function getGoalLabel(goalId) {
  return GOAL_LABELS[goalId] || "";
}

function getResultsFilterOptions(answers) {
  const nicheOptions = answers.niches.map((nicheId) => ({
    value: `niche:${nicheId}`,
    label: `Niche: ${getNicheLabel(nicheId)}`,
  }));
  const goalOptions = answers.goals.map((goalId) => ({
    value: `goal:${goalId}`,
    label: `Goal: ${getGoalLabel(goalId)}`,
  }));

  return [
    { value: "all", label: "All suggested ideas" },
    { groupLabel: "Niche", options: nicheOptions },
    { groupLabel: "Goal", options: goalOptions },
  ];
}

function populateResultsFilter(answers) {
  const filterOptions = getResultsFilterOptions(answers);

  dom.resultsFilter.innerHTML = "";

  filterOptions.forEach((item) => {
    if (item.value) {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      dom.resultsFilter.appendChild(option);
      return;
    }

    if (item.options.length === 0) {
      return;
    }

    const optionGroup = document.createElement("optgroup");
    optionGroup.label = item.groupLabel;

    item.options.forEach((optionConfig) => {
      const option = document.createElement("option");
      option.value = optionConfig.value;
      option.textContent = optionConfig.label.replace(`${item.groupLabel}: `, "");
      optionGroup.appendChild(option);
    });

    dom.resultsFilter.appendChild(optionGroup);
  });

  dom.resultsFilter.value = "all";
}

function filterDisplayedResultsBySelection(results, filterValue) {
  if (filterValue === "all") {
    return results;
  }

  const [filterType, filterId] = filterValue.split(":");

  if (filterType === "niche") {
    return results.filter((idea) => idea.niche === getNicheLabel(filterId));
  }

  if (filterType === "goal") {
    return results.filter((idea) => getIdeaGoalIds(idea).includes(filterId));
  }

  return results;
}

function getMatchedGoalLabel(idea, selectedGoalIds) {
  const matchingGoalId = selectedGoalIds.find((goalId) =>
    getIdeaGoalIds(idea).includes(goalId),
  );

  if (matchingGoalId) {
    return getGoalLabel(matchingGoalId);
  }

  return getGoalLabel(selectedGoalIds[0]) || "Not specified";
}

function createResultCard(idea, answers) {
  const card = document.createElement("article");
  card.className = "idea-card";

  const trendBadgeMarkup = idea.trendFriendly
    ? '<span class="status-badge status-badge-trend">Trend-Friendly</span>'
    : '<span class="status-badge status-badge-evergreen">Evergreen</span>';
  const matchedGoalLabel = getMatchedGoalLabel(idea, answers.goals);

  card.innerHTML = `
    <div class="card-head">
      <div class="card-top">
        <span class="tag">${idea.niche}</span>
        ${trendBadgeMarkup}
      </div>
      <div class="pill-group">
        <span class="pill">Score ${idea.matchScore}</span>
        <span class="pill">${idea.engagementPotential} engagement</span>
      </div>
    </div>

    <div>
      <h3 class="idea-title">${idea.title}</h3>
      <p class="idea-description">${idea.description}</p>
    </div>
    <dl class="idea-meta">
      <div class="meta-item">
        <dt>Format</dt>
        <dd>${idea.format}</dd>
      </div>
      <div class="meta-item">
        <dt>Skill Level</dt>
        <dd>${getSkillLevelLabel(idea)}</dd>
      </div>
      <div class="meta-item">
        <dt>Filming Time</dt>
        <dd>${idea.filmingTime}</dd>
      </div>
      <div class="meta-item">
        <dt>Editing</dt>
        <dd>${idea.editingEffort}</dd>
      </div>
      <div class="meta-item">
        <dt>Goal</dt>
        <dd>${matchedGoalLabel}</dd>
      </div>
      <div class="meta-item">
        <dt>Match Score</dt>
        <dd>${idea.matchScore}</dd>
      </div>
    </dl>
    <p class="card-footer">${idea.tags.slice(0, 3).join(" • ")}</p>
  `;

  return card;
}

function renderEmptyState(message) {
  dom.resultsGrid.innerHTML = `<div class="empty-state">${message}</div>`;
}

function renderResults(results, answers, emptyMessage = EMPTY_RESULTS_MESSAGE) {
  dom.resultsGrid.innerHTML = "";

  if (results.length === 0) {
    renderEmptyState(emptyMessage);
    return;
  }

  results.forEach((idea) => {
    dom.resultsGrid.appendChild(createResultCard(idea, answers));
  });
}

function updateResultsSummary(results) {
  if (results.length === 0) {
    dom.resultsSummary.textContent = "No results found for those answers.";
    return;
  }

  dom.resultsSummary.textContent = `Showing the top ${results.length} ideas ranked for your current answers.`;
}

function getAverageEngagement(results) {
  if (results.length === 0) {
    return "-";
  }

  const totalScore = results.reduce(
    (sum, idea) => sum + (ENGAGEMENT_SCORES[idea.engagementPotential] || 0),
    0,
  );
  const averageScore = totalScore / results.length;

  return `${averageScore.toFixed(1)}/3`;
}

function getTrendFriendlyCount(results) {
  return results.filter((idea) => idea.trendFriendly).length;
}

function updateStats(results, answers, totalMatchedIdeas) {
  dom.matchedTotal.textContent = totalMatchedIdeas;
  dom.selectedNiche.textContent = getNicheLabels(answers.niches).join(", ") || "-";
  dom.averageEngagement.textContent = getAverageEngagement(results);
  dom.trendFriendlyCount.textContent = getTrendFriendlyCount(results);
}

function resetSummaryStats() {
  dom.matchedTotal.textContent = "0";
  dom.selectedNiche.textContent = "-";
  dom.averageEngagement.textContent = "-";
  dom.trendFriendlyCount.textContent = "0";
}

function showResults() {
  dom.resultsSection.hidden = false;
}

function hideResults() {
  dom.resultsSection.hidden = true;
  dom.resultsGrid.innerHTML = "";
  dom.resultsSummary.textContent = "No results generated yet.";
  resetSummaryStats();
  dom.resultsFilter.innerHTML = '<option value="all">All suggested ideas</option>';
  resultsViewState.answers = null;
  resultsViewState.displayedResults = [];
}

function showMissingNicheState(answers) {
  showResults();
  updateResultsSummary([]);
  updateStats([], answers, 0);
  renderEmptyState(MISSING_NICHE_MESSAGE);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const answers = readFormAnswers();

  if (answers.niches.length === 0) {
    showMissingNicheState(answers);
    return;
  }

  // The app filters by niche first, then scores the remaining ideas.
  const { totalMatchedIdeas, displayedResults } = buildRankedResults(answers);
  resultsViewState.answers = answers;
  resultsViewState.displayedResults = displayedResults;
  populateResultsFilter(answers);

  showResults();
  updateResultsSummary(displayedResults);
  updateStats(displayedResults, answers, totalMatchedIdeas);
  renderResults(displayedResults, answers);
}

function handleResultsFilterChange() {
  if (!resultsViewState.answers) {
    return;
  }

  const filteredResults = filterDisplayedResultsBySelection(
    resultsViewState.displayedResults,
    dom.resultsFilter.value,
  );

  renderResults(filteredResults, resultsViewState.answers, FILTER_EMPTY_MESSAGE);
}

function clearResultsOnly() {
  hideResults();
}

function resetFormAndResults() {
  dom.form.reset();
  hideResults();
}

function bindEventListeners() {
  dom.form.addEventListener("submit", handleFormSubmit);
  dom.form.addEventListener("reset", () => {
    window.setTimeout(hideResults, 0);
  });
  dom.resultsFilter.addEventListener("change", handleResultsFilterChange);
  dom.startOverButton.addEventListener("click", resetFormAndResults);
  dom.clearButton.addEventListener("click", clearResultsOnly);
}

document.addEventListener("DOMContentLoaded", () => {
  hideResults();
  bindEventListeners();
});
