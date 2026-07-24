"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Calendar,
  Mail,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { submitLead, submitErrorMessage } from "@/lib/forms";
import {
  Reveal,
  SectionHeading,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import { BLOG_POSTS } from "@/lib/site-data";
import type { PageKey, BlogPost, BlogSection } from "@/lib/site-data";
import { BlogThumbnail } from "@/components/site/blog-thumbnails";
import { cn } from "@/lib/utils";

/* ---------------- Local data ---------------- */
const CATEGORIES = ["All", "SEO", "Conversion", "Industry", "Design", "Branding", "Growth"];

/* ---------------- Article content renderer (full page) ---------------- */
function ArticleContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {sections.map((section, i) => {
        if (section.callout) {
          return (
            <div
              key={i}
              className="relative my-8 overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-br from-slate-50 to-white p-5 sm:my-12 sm:rounded-2xl sm:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-navy" />
              <div className="pl-3 sm:pl-5">
                <div className="font-display text-sm font-bold uppercase tracking-wider text-navy sm:text-xs">
                  {section.callout.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-relaxed">
                  {section.callout.body}
                </p>
              </div>
            </div>
          );
        }

        return (
          <div key={i}>
            {section.heading && (
              <h3 className="font-display text-lg font-bold tracking-tight text-navy sm:mt-10 sm:text-2xl">
                {section.heading}
              </h3>
            )}
            {section.body && (
              <p
                className={cn(
                  "text-pretty leading-relaxed text-slate-700",
                  section.heading
                    ? "mt-3 text-[15px] sm:mt-4 sm:text-lg sm:leading-[1.75]"
                    : "text-[15px] sm:text-lg sm:leading-[1.75]"
                )}
              >
                {section.body}
              </p>
            )}
            {section.list && (
              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {section.list.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <span className="mt-2 grid h-1.5 w-1.5 shrink-0 place-items-center rounded-full bg-navy sm:h-2 sm:w-2" />
                    <span className="text-[15px] leading-relaxed text-slate-700 sm:text-lg sm:leading-[1.7]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {section.quote && (
              <blockquote className="my-6 border-l-2 border-navy pl-5 text-lg font-medium italic leading-relaxed text-navy sm:my-8 sm:pl-6 sm:text-xl">
                {section.quote}
              </blockquote>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Full-page article view ---------------- */
function ArticlePage({
  post,
  onBack,
  onSubscribe,
  onNavigate,
}: {
  post: BlogPost;
  onBack: () => void;
  onSubscribe: () => void;
  onNavigate: (p: PageKey) => void;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [post.slug]);

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await submitLead({ email: email.trim(), source: "newsletter-article", intent: "newsletter" });
      toast.success("You're subscribed! Check your inbox.");
      setEmail("");
    } catch (err) {
      toast.error(submitErrorMessage(err, "Couldn't subscribe just now — please try again in a moment."));
    }
  };

  // Find related articles (same category, excluding current)
  const related = BLOG_POSTS
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <PageShell>
      {/* ---------------- Back button ---------------- */}
      <section className="px-4 pt-4 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-navy sm:gap-2 sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            All articles
          </button>
        </div>
      </section>

      {/* ---------------- Article header ---------------- */}
      <article className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Category + meta */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:gap-4 sm:text-sm">
              <span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:mt-6 sm:text-4xl sm:leading-[1.15] lg:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          {/* Excerpt */}
          <Reveal delay={0.1}>
            <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-xl sm:leading-relaxed">
              {post.excerpt}
            </p>
          </Reveal>

          {/* Thumbnail */}
          <Reveal delay={0.12}>
            <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:mt-8">
              <BlogThumbnail thumbnail={post.thumbnail} />
            </div>
          </Reveal>

          {/* Author divider */}
          <Reveal delay={0.15}>
            <div className="mt-6 flex items-center gap-3 border-y border-slate-200 py-4 sm:mt-8 sm:gap-4 sm:py-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                R
              </div>
              <div>
                <div className="text-sm font-bold text-navy sm:text-base">
                  Revivo
                </div>
                <div className="text-xs text-slate-500 sm:text-sm">
                  Independent studio for local businesses
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Article body ---------------- */}
        <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
          <ArticleContent sections={post.content} />
        </div>

        {/* ---------------- Subscribe band ---------------- */}
        <div className="mx-auto mt-6 max-w-3xl sm:mt-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:rounded-2xl sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <div className="font-display text-base font-bold text-navy sm:text-lg">
                  Get the next article in your inbox
                </div>
                <p className="mt-1 text-sm text-slate-600 sm:text-[15px]">
                  One practical article every week. No spam, ever.
                </p>
              </div>
              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  aria-label="Email address"
                  className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10 sm:w-64"
                />
                <PremiumButton
                  variant="navy"
                  size="md"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Subscribe
                </PremiumButton>
              </form>
            </div>
          </div>
        </div>
      </article>

      {/* ---------------- Related articles ---------------- */}
      <section className="border-t border-slate-200 px-4 py-5 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-navy sm:h-5 sm:w-5" />
            <h2 className="font-display text-lg font-bold text-navy sm:text-2xl">
              Keep reading
            </h2>
          </div>
          <div className="mt-5 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            {relatedPosts.map((p, i) => (
              <motion.button
                key={p.slug}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "instant" });
                  onNavigate("blog");
                  // Use a custom event to set the active post
                  window.dispatchEvent(new CustomEvent("open-blog-post", { detail: p.slug }));
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group block w-full text-left"
              >
                <div className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-navy/20 hover:shadow-soft sm:rounded-2xl sm:p-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold leading-snug text-navy sm:text-base">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {p.excerpt}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy transition-colors group-hover:text-grape sm:gap-1.5 sm:text-sm">
                    Read article
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        onCTA={onSubscribe}
        cta="Get the audit"
        onSecondary={() => onNavigate("contact")}
        secondary="Talk to me"
        title="Want personalized insights for your business?"
        subtitle="Get a free 30-point audit of your current website — covering speed, SEO, design, and conversion. Delivered as a Loom video in 3–4 days."
      />
    </PageShell>
  );
}

/* ---------------- Featured post card ---------------- */
function FeaturedPost({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  return (
    <Reveal>
      <button
        onClick={onOpen}
        className="group block w-full text-left"
        aria-label={`Read featured article: ${post.title}`}
      >
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-navy/20 hover:shadow-soft sm:gap-8 sm:rounded-2xl sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
            <BlogThumbnail thumbnail={post.thumbnail} />
          </div>
          <div>
            <div className="inline-flex items-center rounded-full bg-navy px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white sm:px-3 sm:py-1 sm:text-xs">
              Featured
            </div>
            <h2 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-navy sm:mt-4 sm:text-2xl sm:leading-tight lg:text-3xl">
              {post.title}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base sm:leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 sm:mt-5 sm:gap-4 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-grape sm:gap-2 sm:text-base">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

/* ---------------- Post card ---------------- */
function PostCard({ post, onOpen, index }: { post: BlogPost; onOpen: () => void; index: number }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group block h-full w-full text-left"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-navy/20 hover:shadow-soft sm:rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <BlogThumbnail thumbnail={post.thumbnail} />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
            {post.category}
          </div>
          <h3 className="mt-2 font-display text-sm font-bold leading-snug text-navy sm:text-base">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-600 sm:mt-2.5 sm:text-sm sm:leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500 sm:text-xs">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ---------------- Page ---------------- */
export function BlogPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const featured = BLOG_POSTS[0];
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState("");

  const filtered =
    filter === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);

  const handleSubscribe = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email.trim()) return;
    try {
      await submitLead({ email: email.trim(), source: "newsletter-list", intent: "newsletter" });
      toast.success("You're subscribed! Check your inbox.");
      setEmail("");
    } catch (err) {
      toast.error(submitErrorMessage(err, "Couldn't subscribe just now — please try again in a moment."));
    }
  };

  // Listen for "open-blog-post" events from related article links
  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent).detail;
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        setActive(post);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    window.addEventListener("open-blog-post", handler);
    return () => window.removeEventListener("open-blog-post", handler);
  }, []);

  // If an article is active, show the full-page article view
  if (active) {
    return (
      <ArticlePage
        post={active}
        onBack={() => setActive(null)}
        onSubscribe={onCTA}
        onNavigate={onNavigate}
      />
    );
  }

  // Otherwise show the blog grid
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Ideas to <span className="text-gradient-purple">grow your business.</span>
          </>
        }
        subtitle="Practical, no-fluff articles on web design, SEO, conversion, and local marketing — written for business owners, not designers. New posts every week."
      />

      {/* ---------------- Featured post ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FeaturedPost post={featured} onOpen={() => setActive(featured)} />
        </div>
      </section>

      {/* ---------------- Category filter ---------------- */}
      <section className="px-4 py-2 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full px-3 py-2.5 text-[11px] font-semibold transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm",
                  filter === c
                    ? "bg-navy text-white shadow-soft"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-navy/20 hover:text-navy"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Posts grid ---------------- */}
      <section className="px-4 pb-8 pt-3 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <PostCard
                key={post.slug}
                post={post}
                onOpen={() => setActive(post)}
                index={i}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center sm:p-12">
              <p className="text-xs text-slate-500 sm:text-sm">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- Newsletter signup ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:rounded-2xl sm:p-10">
              <div className="mx-auto max-w-xl text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:px-3.5 sm:py-1.5 sm:text-xs">
                  <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Weekly insights
                </div>
                <h2 className="mt-4 text-balance font-display text-xl font-bold tracking-tight text-navy sm:mt-5 sm:text-2xl">
                  Get the next article in your inbox.
                </h2>
                <p className="mx-auto mt-2 max-w-md text-pretty text-sm text-slate-600 sm:mt-3 sm:text-base">
                  One practical article every week on web design, SEO, conversion, and
                  local marketing. No spam, no fluff. Unsubscribe anytime.
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="mx-auto mt-4 flex max-w-md flex-col gap-2 sm:mt-5 sm:flex-row sm:gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    aria-label="Email address"
                    className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
                  />
                  <PremiumButton
                    variant="navy"
                    size="md"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Subscribe
                  </PremiumButton>
                </form>
                <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-slate-500 sm:mt-4 sm:gap-1.5 sm:text-xs">
                  <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" />
                  Join 2,400+ business owners. No spam, ever.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        onCTA={onCTA}
        cta="Get the audit"
        onSecondary={() => onNavigate("audit")}
        secondary="Get free website audit"
        title="Want personalized insights for your business?"
        subtitle="Get a free 30-point audit of your current website — covering speed, SEO, design, and conversion. Delivered as a Loom video in 3–4 days."
      />
    </PageShell>
  );
}
