const ideas = Array.isArray(window.CONTENT_IDEAS) ? window.CONTENT_IDEAS : [];

const PAGE_SIZE = 8;

const FORMAT_ORDER = ["Shorts", "Carousel", "YouTube", "Newsletter", "Live"];

const ENGAGEMENT_SCORE = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const EFFORT_SCORE = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const NICHE_VISUALS = {
  "Creator Education": ["creator", "studio", "camera"],
  "YouTube Growth": ["analytics", "screen", "studio"],
  "Short-Form Strategy": ["phone", "creator", "reels"],
  "Video Editing": ["editing", "monitor", "cinematic"],
  Monetization: ["money", "business", "laptop"],
  "Email Marketing": ["email", "laptop", "desk"],
  "Brand Deals": ["meeting", "brand", "team"],
  Repurposing: ["planning", "notebook", "laptop"],
  "Creator Systems": ["workspace", "planner", "desk"],
  "Community Building": ["community", "team", "group"],
  "Audience Research": ["analytics", "data", "research"],
  "Personal Branding": ["portrait", "fashion", "office"],
};

const TAG_VISUALS = {
  analytics: "graphs",
  audit: "screen",
  banner: "branding",
  "before after": "cinematic",
  branding: "portrait",
  business: "meeting",
  camera: "camera",
  captions: "editing",
  challenge: "action",
  comments: "community",
  consistency: "planner",
  conversion: "business",
  copywriting: "laptop",
  creator: "studio",
  editing: "editing",
  education: "teacher",
  email: "email",
  engagement: "group",
  faq: "creator",
  future: "futuristic",
  hooks: "microphone",
  live: "streaming",
  monetization: "money",
  newsletter: "laptop",
  packaging: "creative",
  planning: "planner",
  portrait: "portrait",
  productivity: "workspace",
  reels: "phone",
  research: "research",
  storytelling: "camera",
  strategy: "planning",
  studio: "studio",
  thumbnail: "screen",
  tutorial: "workspace",
  workflow: "desk",
  youtube: "camera",
};

const GOAL_HOOKS = {
  "Grow Audience": [
    "I'd post this to restart from zero",
    "This could pull your next 1K viewers",
    "Steal this growth angle",
  ],
  "Increase Engagement": [
    "This one gets comments fast",
    "High-save concept",
    "Replay-trigger idea",
  ],
  "Build Authority": [
    "Teach this and people remember you",
    "Expert mode without sounding stiff",
    "Trust-building angle",
  ],
  "Improve Consistency": [
    "Easy enough to ship this week",
    "Repeatable without going stale",
    "Low-friction format",
  ],
  "Sell Offer": [
    "A clean trust-to-sale angle",
    "Warm up buyers without pitching",
    "Conversion-ready angle",
  ],
};

const state = {
  view: "explore",
  search: "",
  sort: "featured",
  niche: "all",
  format: "all",
  trend: "all",
  visibleCount: PAGE_SIZE,
  savedIds: loadSavedIds(),
};

const dom = {
  body: document.body,
  loadingScreen: document.getElementById("loading-screen"),
  loadingLine: document.getElementById("loading-line"),
  loadingSubline: document.getElementById("loading-subline"),
  totalIdeasCount: document.getElementById("total-ideas-count"),
  totalNichesCount: document.getElementById("total-niches-count"),
  visibleIdeasCount: document.getElementById("visible-ideas-count"),
  exploreCount: document.getElementById("explore-count"),
  savedCount: document.getElementById("saved-count"),
  viewButtons: [...document.querySelectorAll("[data-view-button]")],
  nicheNav: document.getElementById("niche-nav"),
  clearNicheButton: document.getElementById("clear-niche-button"),
  searchInput: document.getElementById("search-input"),
  sortSelect: document.getElementById("sort-select"),
  formatSelect: document.getElementById("format-select"),
  trendSelect: document.getElementById("trend-select"),
  clearFiltersButton: document.getElementById("clear-filters-button"),
  activeFilters: document.getElementById("active-filters"),
  resultsCount: document.getElementById("results-count"),
  spotlightGrid: document.getElementById("spotlight-grid"),
  catalogGrid: document.getElementById("catalog-grid"),
  loadMoreButton: document.getElementById("load-more-button"),
  exploreView: document.getElementById("explore-view"),
  savedView: document.getElementById("saved-view"),
  savedGrid: document.getElementById("saved-grid"),
  savedEmpty: document.getElementById("saved-empty"),
  clearShortlistButton: document.getElementById("clear-shortlist-button"),
};

const niches = [...new Set(ideas.map((idea) => idea.niche))].sort((left, right) =>
  left.localeCompare(right),
);

const formats = FORMAT_ORDER.filter((format) => ideas.some((idea) => idea.format === format));

function loadSavedIds() {
  try {
    const storedValue = localStorage.getItem("idea-atlas-saved");
    const parsedValue = JSON.parse(storedValue || "[]");
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

function saveSavedIds() {
  try {
    localStorage.setItem("idea-atlas-saved", JSON.stringify(state.savedIds));
  } catch (error) {
    return;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function typeText(element, text, speed) {
  return new Promise((resolve) => {
    element.textContent = "";
    let index = 0;
    const timer = window.setInterval(() => {
      element.textContent = text.slice(0, index + 1);
      index += 1;

      if (index >= text.length) {
        window.clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function deleteText(element, speed) {
  return new Promise((resolve) => {
    const currentText = element.textContent;
    let index = currentText.length;
    const timer = window.setInterval(() => {
      element.textContent = currentText.slice(0, Math.max(0, index - 1));
      index -= 1;

      if (index <= 0) {
        window.clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function startLoaderSequence() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    dom.loadingLine.textContent = "Welcome to Idea Atlas.";
    dom.loadingSubline.textContent = "Browse sharp content ideas.";
    await wait(650);
  } else {
    await typeText(dom.loadingLine, "Welcome to Idea Atlas.", 30);
    await wait(160);
    await deleteText(dom.loadingLine, 16);
    await Promise.all([
      typeText(dom.loadingLine, "Browse sharp content ideas.", 22),
      typeText(dom.loadingSubline, "Search, filter, save, and keep the strongest ones.", 11),
    ]);
    await wait(320);
  }

  dom.body.classList.remove("is-loading");
  dom.body.classList.add("is-loaded");

  window.setTimeout(() => {
    dom.loadingScreen.remove();
  }, 700);
}

function formatMinutes(minutes) {
  return minutes === 0 ? "0 min" : `${minutes} min`;
}

function getTrendLabel(idea) {
  return idea.trendFriendly ? "Trend ready" : "Evergreen";
}

function getFormatOptionsMarkup() {
  return formats
    .map((format) => `<option value="${escapeHtml(format)}">${escapeHtml(format)}</option>`)
    .join("");
}

function getSearchBlob(idea) {
  return [
    idea.title,
    idea.description,
    idea.niche,
    idea.audience,
    idea.format,
    idea.difficulty,
    idea.editingEffort,
    idea.engagementPotential,
    idea.goals.join(" "),
    idea.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function hashString(value) {
  return [...value].reduce((total, character) => total * 31 + character.charCodeAt(0), 7);
}

function getVisualKeywords(idea) {
  const nicheWords = NICHE_VISUALS[idea.niche] || ["creative", "studio", "workspace"];
  const mappedTags = idea.tags.map((tag) => TAG_VISUALS[tag]).filter(Boolean);
  const formatWord = TAG_VISUALS[idea.format.toLowerCase()] || idea.format.toLowerCase();

  return [...new Set([nicheWords[0], mappedTags[0] || nicheWords[1], formatWord || nicheWords[2]])]
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word.replace(/[^a-z0-9]+/gi, "").toLowerCase())
    .filter(Boolean);
}

function getImageForIdea(idea) {
  const promptParts = [
    "high-contrast cinematic editorial square photo",
    `"${idea.title}"`,
    idea.description,
    `for ${idea.niche}`,
    `format ${idea.format}`,
    `keywords ${getVisualKeywords(idea).join(", ") || "creative, studio, workspace"}`,
    "single clear subject",
    "distinct composition",
    "dramatic lighting",
    "realistic",
    "bold focal point",
    "no text",
    "no watermark",
    "no logo",
  ];
  const prompt = encodeURIComponent(promptParts.join(", "));

  return {
    src: `https://gen.pollinations.ai/image/${prompt}`,
    alt: `Photo matching ${idea.title}`,
  };
}

function getFallbackCardImage(idea) {
  const hash = Math.abs(hashString(idea.id));
  const hueA = hash % 360;
  const hueB = (hash + 92) % 360;
  const hueC = (hash + 184) % 360;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="hsl(${hueA} 78% 52%)" />
          <stop offset="50%" stop-color="hsl(${hueB} 74% 46%)" />
          <stop offset="100%" stop-color="hsl(${hueC} 68% 18%)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.42)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="panel" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(4,8,18,0.92)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.06)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="1200" fill="url(#bg)" />
      <circle cx="930" cy="240" r="220" fill="url(#glow)" />
      <circle cx="190" cy="920" r="290" fill="rgba(255,255,255,0.08)" />
      <circle cx="720" cy="720" r="180" fill="rgba(255,255,255,0.08)" />
      <rect x="90" y="88" width="1020" height="1020" rx="64" fill="rgba(8,12,24,0.12)" stroke="rgba(255,255,255,0.18)" />
      <rect x="132" y="126" width="936" height="936" rx="52" fill="rgba(255,255,255,0.04)" />
      <path d="M146 714C282 620 396 584 540 594C712 606 800 754 1054 690V1062H146Z" fill="url(#panel)" />
      <path d="M152 582C256 462 402 404 530 432C712 472 746 624 1048 544" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="18" stroke-linecap="round" />
      <path d="M162 500C298 350 476 294 652 330C838 368 914 500 1052 454" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="12" stroke-linecap="round" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCardHook(idea) {
  const primaryGoal = idea.goals[0] || "Grow Audience";
  const hooks = GOAL_HOOKS[primaryGoal] || ["Standout concept"];
  return idea.featured ? "Top pick" : hooks[Math.abs(hashString(idea.id)) % hooks.length];
}

function getCardSupportLine(idea) {
  const shortDescription = (idea.description.split(".")[0] || idea.description).trim();
  return shortDescription.length > 92 ? `${shortDescription.slice(0, 89).trim()}...` : shortDescription;
}

function getCardPalette(idea) {
  const base = Math.abs(hashString(idea.id));
  return {
    accentHue: base % 360,
    secondaryHue: (base * 7 + 96) % 360,
  };
}

function matchesFilters(idea) {
  const query = state.search.trim().toLowerCase();

  if (query && !getSearchBlob(idea).includes(query)) {
    return false;
  }

  if (state.niche !== "all" && idea.niche !== state.niche) {
    return false;
  }

  if (state.format !== "all" && idea.format !== state.format) {
    return false;
  }

  if (state.trend === "trend" && !idea.trendFriendly) {
    return false;
  }

  if (state.trend === "evergreen" && idea.trendFriendly) {
    return false;
  }

  return true;
}

function sortIdeas(results) {
  const sortedResults = [...results];

  sortedResults.sort((left, right) => {
    if (state.sort === "unique" && right.uniquenessScore !== left.uniquenessScore) {
      return right.uniquenessScore - left.uniquenessScore;
    }

    if (
      state.sort === "engagement" &&
      ENGAGEMENT_SCORE[right.engagementPotential] !== ENGAGEMENT_SCORE[left.engagementPotential]
    ) {
      return ENGAGEMENT_SCORE[right.engagementPotential] - ENGAGEMENT_SCORE[left.engagementPotential];
    }

    if (state.sort === "fastest" && left.filmingMinutes !== right.filmingMinutes) {
      return left.filmingMinutes - right.filmingMinutes;
    }

    if (state.sort === "easiest") {
      const leftEffortScore = EFFORT_SCORE[left.editingEffort] + EFFORT_SCORE[left.difficulty];
      const rightEffortScore = EFFORT_SCORE[right.editingEffort] + EFFORT_SCORE[right.difficulty];

      if (leftEffortScore !== rightEffortScore) {
        return leftEffortScore - rightEffortScore;
      }
    }

    if (state.sort === "alphabetical") {
      return left.title.localeCompare(right.title);
    }

    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    if (right.uniquenessScore !== left.uniquenessScore) {
      return right.uniquenessScore - left.uniquenessScore;
    }

    if (ENGAGEMENT_SCORE[right.engagementPotential] !== ENGAGEMENT_SCORE[left.engagementPotential]) {
      return ENGAGEMENT_SCORE[right.engagementPotential] - ENGAGEMENT_SCORE[left.engagementPotential];
    }

    return left.title.localeCompare(right.title);
  });

  return sortedResults;
}

function getFilteredIdeas(sourceIdeas = ideas) {
  return sortIdeas(sourceIdeas.filter((idea) => matchesFilters(idea)));
}

function getSavedIdeas() {
  const savedLookup = new Set(state.savedIds);
  return ideas.filter((idea) => savedLookup.has(idea.id));
}

function getSpotlightIdeas(results) {
  const featuredResults = results.filter((idea) => idea.featured).slice(0, 4);
  return featuredResults.length > 0 ? featuredResults : results.slice(0, 4);
}

function getVisibleCatalogIdeas(results, spotlightIdeas) {
  const spotlightIds = new Set(spotlightIdeas.map((idea) => idea.id));
  return results.filter((idea) => !spotlightIds.has(idea.id)).slice(0, state.visibleCount);
}

function toggleSavedId(ideaId) {
  if (state.savedIds.includes(ideaId)) {
    state.savedIds = state.savedIds.filter((savedId) => savedId !== ideaId);
  } else {
    state.savedIds = [ideaId, ...state.savedIds];
  }

  saveSavedIds();
  render();
}

function renderFormatOptions() {
  dom.formatSelect.insertAdjacentHTML("beforeend", getFormatOptionsMarkup());
}

function renderNicheNav() {
  const nicheButtons = [
    {
      label: "All ideas",
      value: "all",
      count: ideas.length,
    },
    ...niches.map((niche) => ({
      label: niche,
      value: niche,
      count: ideas.filter((idea) => idea.niche === niche).length,
    })),
  ];

  dom.nicheNav.innerHTML = nicheButtons
    .map(
      (item) => `
        <button
          class="niche-button${state.niche === item.value ? " is-active" : ""}"
          type="button"
          data-niche-value="${escapeHtml(item.value)}"
        >
          <span>${escapeHtml(item.label)}</span>
          <span>${item.count}</span>
        </button>
      `,
    )
    .join("");
}

function renderActiveFilters() {
  const chips = [];

  if (state.search.trim()) {
    chips.push(`Search: ${escapeHtml(state.search.trim())}`);
  }

  if (state.niche !== "all") {
    chips.push(`Niche: ${escapeHtml(state.niche)}`);
  }

  if (state.format !== "all") {
    chips.push(`Format: ${escapeHtml(state.format)}`);
  }

  if (state.trend !== "all") {
    chips.push(state.trend === "trend" ? "Style: Trend ready" : "Style: Evergreen");
  }

  dom.activeFilters.innerHTML = chips.map((chip) => `<span class="active-chip">${chip}</span>`).join("");
}

function createCardMarkup(idea) {
  const image = getImageForIdea(idea);
  const isSaved = state.savedIds.includes(idea.id);
  const palette = getCardPalette(idea);

  return `
    <article
      class="idea-card"
      tabindex="0"
      style="--card-accent-h:${palette.accentHue}; --card-accent-secondary-h:${palette.secondaryHue};"
    >
      <div class="card-media">
        <img
          src="${escapeHtml(image.src)}"
          alt="${escapeHtml(image.alt)}"
          loading="lazy"
          data-idea-id="${escapeHtml(idea.id)}"
        />
      </div>

      <div class="card-topbar">
        <div class="card-badges">
          <span class="card-badge">${escapeHtml(idea.niche)}</span>
        </div>
        <button
          class="save-button${isSaved ? " is-saved" : ""}"
          type="button"
          aria-label="${isSaved ? "Remove from saved ideas" : "Save idea"}"
          aria-pressed="${isSaved}"
          data-save-id="${escapeHtml(idea.id)}"
        >
          ${isSaved ? "★" : "☆"}
        </button>
      </div>

      <div class="card-body">
        <div class="card-copy">
          <h3>${escapeHtml(idea.title)}</h3>
          <p>${escapeHtml(getCardSupportLine(idea))}</p>
        </div>
        <div class="card-meta">
          <span class="card-meta-pill">${escapeHtml(idea.format)}</span>
          <span class="card-meta-pill">${escapeHtml(getTrendLabel(idea))}</span>
          <span class="card-meta-pill">${escapeHtml(formatMinutes(idea.filmingMinutes))}</span>
        </div>
      </div>
    </article>
  `;
}

function renderExploreView() {
  const results = getFilteredIdeas();
  const spotlightIdeas = getSpotlightIdeas(results);
  const catalogIdeas = getVisibleCatalogIdeas(results, spotlightIdeas);
  const currentVisibleCount = spotlightIdeas.length + catalogIdeas.length;

  dom.resultsCount.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
  dom.visibleIdeasCount.textContent = String(currentVisibleCount);

  if (spotlightIdeas.length === 0) {
    dom.spotlightGrid.innerHTML = '<div class="empty-state">No featured cards match this filter set.</div>';
  } else {
    dom.spotlightGrid.innerHTML = spotlightIdeas.map((idea) => createCardMarkup(idea)).join("");
  }

  if (catalogIdeas.length === 0) {
    dom.catalogGrid.innerHTML = '<div class="empty-state">No ideas match the current search and filters.</div>';
  } else {
    dom.catalogGrid.innerHTML = catalogIdeas.map((idea) => createCardMarkup(idea)).join("");
  }

  const hiddenCount =
    results.filter((idea) => !spotlightIdeas.some((spotlightIdea) => spotlightIdea.id === idea.id)).length -
    catalogIdeas.length;

  dom.loadMoreButton.hidden = hiddenCount <= 0;
  dom.loadMoreButton.textContent = hiddenCount > PAGE_SIZE ? `Load ${PAGE_SIZE} more` : "Load more";
}

function renderSavedView() {
  const savedIdeas = getFilteredIdeas(getSavedIdeas());
  const hasSavedIdeas = state.savedIds.length > 0;

  dom.savedGrid.innerHTML = savedIdeas.map((idea) => createCardMarkup(idea)).join("");
  dom.savedEmpty.classList.toggle("is-hidden", savedIdeas.length > 0);

  if (state.view === "saved") {
    dom.visibleIdeasCount.textContent = String(savedIdeas.length);
  }

  if (savedIdeas.length === 0) {
    dom.savedGrid.innerHTML = "";
    dom.savedEmpty.textContent = hasSavedIdeas
      ? "No saved ideas match the current search and filters."
      : "Save cards from Explore to keep your best ideas here.";
  }
}

function renderViewState() {
  const showExplore = state.view === "explore";

  dom.exploreView.classList.toggle("is-hidden", !showExplore);
  dom.savedView.classList.toggle("is-hidden", showExplore);

  dom.viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewButton === state.view);
  });
}

function renderCounts() {
  dom.totalIdeasCount.textContent = String(ideas.length);
  dom.totalNichesCount.textContent = String(niches.length);
  dom.exploreCount.textContent = String(ideas.length);
  dom.savedCount.textContent = String(state.savedIds.length);
}

function resetFilters() {
  state.search = "";
  state.niche = "all";
  state.format = "all";
  state.trend = "all";
  state.sort = "featured";
  state.visibleCount = PAGE_SIZE;

  dom.searchInput.value = "";
  dom.sortSelect.value = "featured";
  dom.formatSelect.value = "all";
  dom.trendSelect.value = "all";
}

function attachCardMotion() {
  const cards = [...document.querySelectorAll(".idea-card")];

  cards.forEach((card) => {
    const resetTilt = () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    };

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const horizontal = (event.clientX - rect.left) / rect.width;
      const vertical = (event.clientY - rect.top) / rect.height;
      const rotateY = (horizontal - 0.5) * 10;
      const rotateX = (0.5 - vertical) * 10;

      card.style.setProperty("--tilt-x", `${rotateX}deg`);
      card.style.setProperty("--tilt-y", `${rotateY}deg`);
      card.style.setProperty("--pointer-x", `${horizontal * 100}%`);
      card.style.setProperty("--pointer-y", `${vertical * 100}%`);
    });

    card.addEventListener("pointerleave", resetTilt);
    card.addEventListener("pointercancel", resetTilt);
    card.addEventListener("blur", resetTilt, true);
  });
}

function attachImageFallbacks() {
  const images = [...document.querySelectorAll(".card-media img")];

  images.forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";

    image.addEventListener(
      "error",
      () => {
        const ideaId = image.dataset.ideaId || "";
        const idea = ideas.find((entry) => entry.id === ideaId);

        if (!idea || image.dataset.fallbackApplied === "true") {
          return;
        }

        image.dataset.fallbackApplied = "true";
        image.src = getFallbackCardImage(idea);
      },
      { once: true },
    );
  });
}

function render() {
  renderCounts();
  renderNicheNav();
  renderActiveFilters();
  renderViewState();
  renderExploreView();
  renderSavedView();
  attachCardMotion();
  attachImageFallbacks();
}

function handleViewChange(nextView) {
  state.view = nextView;
  render();
}

function handleFilterChange() {
  state.visibleCount = PAGE_SIZE;
  render();
}

function bindEvents() {
  dom.viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleViewChange(button.dataset.viewButton || "explore");
    });
  });

  dom.clearNicheButton.addEventListener("click", () => {
    state.niche = "all";
    handleFilterChange();
  });

  dom.nicheNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-niche-value]");

    if (!button) {
      return;
    }

    state.niche = button.dataset.nicheValue || "all";
    handleFilterChange();
  });

  dom.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    handleFilterChange();
  });

  dom.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    handleFilterChange();
  });

  dom.formatSelect.addEventListener("change", (event) => {
    state.format = event.target.value;
    handleFilterChange();
  });

  dom.trendSelect.addEventListener("change", (event) => {
    state.trend = event.target.value;
    handleFilterChange();
  });

  dom.clearFiltersButton.addEventListener("click", () => {
    resetFilters();
    render();
  });

  dom.loadMoreButton.addEventListener("click", () => {
    state.visibleCount += PAGE_SIZE;
    render();
  });

  dom.clearShortlistButton.addEventListener("click", () => {
    state.savedIds = [];
    saveSavedIds();
    render();
  });

  document.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-id]");

    if (!saveButton) {
      return;
    }

    toggleSavedId(saveButton.dataset.saveId || "");
  });
}

function init() {
  renderFormatOptions();
  resetFilters();
  bindEvents();
  render();
  startLoaderSequence();
}

init();
