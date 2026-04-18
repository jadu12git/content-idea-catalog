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

const searchInput = document.getElementById("search-input");
const filtersForm = document.querySelector(".filters");
const formatFilter = document.getElementById("format-filter");
const effortFilter = document.getElementById("effort-filter");
const audienceFilter = document.getElementById("audience-filter");
const cardGrid = document.getElementById("card-grid");
const resultsCopy = document.getElementById("results-copy");

const visibleCount = document.getElementById("visible-count");
const shortFormCount = document.getElementById("short-form-count");
const lowEffortCount = document.getElementById("low-effort-count");
const audienceFocus = document.getElementById("audience-focus");

let nicheFilter;
let sortSelect;
let resetButton;

function matchesFilter(value, selectedValue) {
  return selectedValue === "all" || value === selectedValue;
}

function createSelectField(id, labelText, options) {
  const wrapper = document.createElement("label");
  wrapper.className = "select-field";

  const label = document.createElement("span");
  label.className = "field-label";
  label.textContent = labelText;

  const select = document.createElement("select");
  select.id = id;

  options.forEach((optionConfig) => {
    const option = document.createElement("option");
    option.value = optionConfig.value;
    option.textContent = optionConfig.label;
    select.appendChild(option);
  });

  wrapper.append(label, select);
  return { wrapper, select };
}

function createResetControl() {
  const wrapper = document.createElement("div");
  wrapper.className = "select-field";

  const label = document.createElement("span");
  label.className = "field-label";
  label.textContent = "Reset";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-secondary";
  button.textContent = "Reset Filters";

  wrapper.append(label, button);
  return { wrapper, button };
}

function buildDynamicControls() {
  const nicheOptions = [
    { value: "all", label: "All niches" },
    ...[...new Set(ideas.map((idea) => idea.niche))]
      .sort((left, right) => left.localeCompare(right))
      .map((niche) => ({ value: niche, label: niche })),
  ];

  const { wrapper: nicheWrapper, select: nicheSelect } = createSelectField(
    "niche-filter",
    "Niche",
    nicheOptions,
  );
  const { wrapper: sortWrapper, select } = createSelectField("sort-select", "Sort", [
    { value: "title-asc", label: "Title A-Z" },
    { value: "title-desc", label: "Title Z-A" },
    { value: "engagement-desc", label: "Engagement High-Low" },
    { value: "engagement-asc", label: "Engagement Low-High" },
    { value: "filming-asc", label: "Filming Time Short-Long" },
    { value: "filming-desc", label: "Filming Time Long-Short" },
  ]);
  const { wrapper: resetWrapper, button } = createResetControl();

  filtersForm.append(nicheWrapper, sortWrapper, resetWrapper);

  nicheFilter = nicheSelect;
  sortSelect = select;
  resetButton = button;
}

function engagementRank(value) {
  return {
    Low: 1,
    Medium: 2,
    High: 3,
  }[value] ?? 0;
}

function filmingMinutes(value) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function sortIdeas(filteredIdeas) {
  const sortedIdeas = [...filteredIdeas];

  switch (sortSelect.value) {
    case "title-desc":
      sortedIdeas.sort((left, right) => right.title.localeCompare(left.title));
      break;
    case "engagement-desc":
      sortedIdeas.sort(
        (left, right) =>
          engagementRank(right.engagementPotential) -
            engagementRank(left.engagementPotential) ||
          left.title.localeCompare(right.title),
      );
      break;
    case "engagement-asc":
      sortedIdeas.sort(
        (left, right) =>
          engagementRank(left.engagementPotential) -
            engagementRank(right.engagementPotential) ||
          left.title.localeCompare(right.title),
      );
      break;
    case "filming-asc":
      sortedIdeas.sort(
        (left, right) =>
          filmingMinutes(left.filmingTime) - filmingMinutes(right.filmingTime) ||
          left.title.localeCompare(right.title),
      );
      break;
    case "filming-desc":
      sortedIdeas.sort(
        (left, right) =>
          filmingMinutes(right.filmingTime) - filmingMinutes(left.filmingTime) ||
          left.title.localeCompare(right.title),
      );
      break;
    case "title-asc":
    default:
      sortedIdeas.sort((left, right) => left.title.localeCompare(right.title));
      break;
  }

  return sortedIdeas;
}

function filterIdeas() {
  const query = searchInput.value.trim().toLowerCase();

  return ideas.filter((idea) => {
    const matchesQuery =
      query === "" ||
      idea.title.toLowerCase().includes(query) ||
      idea.niche.toLowerCase().includes(query) ||
      idea.description.toLowerCase().includes(query) ||
      idea.tags.join(" ").toLowerCase().includes(query);

    return (
      matchesQuery &&
      matchesFilter(idea.niche, nicheFilter.value) &&
      matchesFilter(idea.format, formatFilter.value) &&
      matchesFilter(idea.difficulty, effortFilter.value) &&
      matchesFilter(idea.audience, audienceFilter.value)
    );
  });
}

function renderCards(filteredIdeas) {
  cardGrid.innerHTML = "";

  if (filteredIdeas.length === 0) {
    cardGrid.innerHTML =
      '<div class="empty-state">No ideas match this filter set. Try widening the format or effort selection.</div>';
    return;
  }

  filteredIdeas.forEach((idea) => {
    const article = document.createElement("article");
    article.className = "idea-card";

    article.innerHTML = `
      <div class="card-top">
        <span class="tag">${idea.format}</span>
        <div class="pill-group">
          <span class="pill">${idea.difficulty} difficulty</span>
          <span class="pill">${idea.audience}</span>
        </div>
      </div>
      <div>
        <h3 class="idea-title">${idea.title}</h3>
        <p class="idea-description">${idea.description}</p>
      </div>
      <p class="card-footer">${idea.niche} • ${idea.filmingTime} filming • ${idea.editingEffort} edit • ${idea.engagementPotential} engagement</p>
    `;

    cardGrid.appendChild(article);
  });
}

function updateStats(filteredIdeas) {
  visibleCount.textContent = filteredIdeas.length;
  shortFormCount.textContent = filteredIdeas.filter(
    (idea) => idea.format === "Shorts",
  ).length;
  lowEffortCount.textContent = filteredIdeas.filter(
    (idea) => idea.difficulty === "Low",
  ).length;
  audienceFocus.textContent = new Set(filteredIdeas.map((idea) => idea.audience)).size;
  resultsCopy.textContent = `Showing ${filteredIdeas.length} idea${
    filteredIdeas.length === 1 ? "" : "s"
  }`;
}

function syncCatalog() {
  const filteredIdeas = sortIdeas(filterIdeas());
  renderCards(filteredIdeas);
  updateStats(filteredIdeas);
}

function resetFilters() {
  searchInput.value = "";
  formatFilter.value = "all";
  effortFilter.value = "all";
  audienceFilter.value = "all";
  nicheFilter.value = "all";
  sortSelect.value = "title-asc";
  syncCatalog();
}

function bindControls() {
  [
    searchInput,
    nicheFilter,
    formatFilter,
    effortFilter,
    audienceFilter,
    sortSelect,
  ].forEach((control) => {
    control.addEventListener("input", syncCatalog);
    control.addEventListener("change", syncCatalog);
  });

  resetButton.addEventListener("click", resetFilters);
}

document.addEventListener("DOMContentLoaded", () => {
  buildDynamicControls();
  bindControls();
  syncCatalog();
});
