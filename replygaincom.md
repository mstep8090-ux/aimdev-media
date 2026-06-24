html code
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Basic Meta Tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content">
        <meta name="description" content="Find buyers asking for tools like yours on Reddit, Hacker News, Bluesky &#38; X. AI scores posts by purchase intent and writes your reply in seconds. Start free.">
        <title>AI Lead Gen Tool for Reddit, HN, Bluesky &amp;X | ReplyGain</title>
        <!-- SEO Meta Tags -->
        <meta name="keywords" content="reddit lead generation tool, find leads on reddit, reddit prospecting tool, hacker news lead generation, bluesky lead generation, AI lead generation tool, reddit monitoring tool, find customers on reddit, saas lead generation, reddit customer acquisition, social listening tool, reddit marketing tool, reddit b2b leads, lead generation for founders, reddit intent monitoring">
        <meta name="author" content="ReplyGain">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://replygain.com">
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://replygain.com">
        <meta property="og:title" content="AI Lead Gen Tool for Reddit, HN, Bluesky &#38; X | ReplyGain">
        <meta property="og:description" content="Find buyers asking for tools like yours on Reddit, Hacker News, Bluesky &#38; X. AI scores posts by purchase intent and writes your reply in seconds. Start free.">
        <meta property="og:image" content="https://replygain.com/images/Replygain-OG-new.webp">
        <meta property="og:site_name" content="ReplyGain">
        <meta property="og:locale" content="en_US">
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="https://replygain.com">
        <meta name="twitter:title" content="AI Lead Gen Tool for Reddit, HN, Bluesky &#38; X | ReplyGain">
        <meta name="twitter:description" content="Find buyers asking for tools like yours on Reddit, Hacker News, Bluesky &#38; X. AI scores posts by purchase intent and writes your reply in seconds. Start free.">
        <meta name="twitter:image" content="https://replygain.com/images/Replygain-OG-new.webp">
        <meta name="twitter:creator" content="@replygain">
        <!-- Favicon and Icons -->
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/images/logo.svg">
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/images/logo.svg">
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.svg">
        <link rel="manifest" href="/site.webmanifest">
        <!-- LLMs.txt — AI model discovery -->
        <link rel="help" type="text/plain" href="/llms.txt" title="LLMs.txt">
        <link rel="help" type="text/plain" href="/llms-full.txt" title="LLMs Full Context">
        <meta name="theme-color" content="#0a0a0e">
        <meta name="msapplication-TileColor" content="#0a0a0e">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <!-- Theme init - runs before paint to prevent flash of wrong theme -->
        <script>
            (function() {
                var saved = localStorage.getItem("rg_theme") || "system";
                var mq = window.matchMedia("(prefers-color-scheme: dark)");

                function apply(val) {
                    var isDark = val === "dark" || (val === "system" && mq.matches);
                    if (isDark) {
                        document.documentElement.setAttribute("data-theme", "dark");
                        document.documentElement.style.backgroundColor = "#141414";
                    } else {
                        document.documentElement.removeAttribute("data-theme");
                        document.documentElement.style.backgroundColor = "#F4F4F5";
                    }
                }

                apply(saved);

                // React to OS theme changes in real-time (only matters when set to system)
                mq.addEventListener("change", function() {
                    if ((localStorage.getItem("rg_theme") || "system") === "system") {
                        apply("system");
                    }
                });
            }
            )();

            // Circular reveal transition for theme switching
            window.__themeTransition = function(applyFn) {
                if (!document.startViewTransition) {
                    applyFn();
                    return;
                }
                var transition = document.startViewTransition(applyFn);
                transition.ready.then(function() {
                    var endRadius = Math.hypot(window.innerWidth, window.innerHeight);
                    // Multi-keyframe: slow start, fast sweep, elastic overshoot, settle
                    var r = endRadius;
                    document.documentElement.animate({
                        clipPath: ["circle(0% at 0px 100%)", "circle(" + r * 0.03 + "px at 0px 100%)", "circle(" + r * 0.08 + "px at 0px 100%)", "circle(" + r * 0.15 + "px at 0px 100%)", "circle(" + r * 0.55 + "px at 0px 100%)", "circle(" + r * 0.88 + "px at 0px 100%)", "circle(" + r * 1.06 + "px at 0px 100%)", "circle(" + r * 0.99 + "px at 0px 100%)", "circle(" + r + "px at 0px 100%)", ],
                        offset: [0, 0.15, 0.3, 0.45, 0.62, 0.76, 0.86, 0.94, 1],
                    }, {
                        duration: 700,
                        easing: "linear",
                        pseudoElement: "::view-transition-new(root)",
                    }, );
                });
            }
            ;
        </script>
        <!-- canvas-confetti (self-hosted to avoid CDN issues in local dev) -->
        <script src="/confetti.min.js"></script>
        <script src="/icons.js" type="module"></script>
        <script src="/utils.js"></script>
        <!-- Stylesheets imported in frontmatter for minification -->
        <!-- JSON-LD Schema Markup -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "ReplyGain",
                "url": "https://replygain.com",
                "description": "AI lead generation tool that monitors Reddit, Hacker News, Bluesky and X for buyers asking for your product. AI scores every post by purchase intent and auto-drafts replies.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "7-Day Pass",
                        "description": "One-time full-access pass, no subscription",
                        "price": "12",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Starter",
                        "price": "29",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Pro",
                        "price": "79",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Business",
                        "price": "199",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    }
                ],
                "featureList": [
                    "Reddit lead generation and prospecting",
                    "Hacker News buyer intent monitoring",
                    "X (Twitter) social listening for leads",
                    "Bluesky community lead generation",
                    "AI purchase intent scoring (0–100)",
                    "Automated reply drafting with AI",
                    "Keyword and competitor mention tracking",
                    "Multi-platform lead feed dashboard",
                    "Find customers asking for your product",
                    "SaaS founder lead generation tool"
                ],
                "screenshot": "https://replygain.com/images/Replygain-OG-new.webp",
                "softwareVersion": "1.0",
                "author": {
                    "@type": "Organization",
                    "name": "ReplyGain",
                    "url": "https://replygain.com"
                }
            }</script>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ReplyGain",
                "url": "https://replygain.com",
                "logo": "https://replygain.com/images/logo.png",
                "sameAs": [
                    "https://x.com/replygain"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support"
                }
            }</script>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ReplyGain",
                "alternateName": [
                    "ReplyGain",
                    "Reply Gain",
                    "Reddit Lead Generation Tool"
                ],
                "description": "AI-powered lead generation tool for SaaS founders. Monitors Reddit, Hacker News, Bluesky and X for buyers asking for your product. Scores purchase intent and drafts replies automatically.",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "Lead Generation",
                "operatingSystem": "Web",
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "12",
                    "highPrice": "199",
                    "priceCurrency": "USD",
                    "offerCount": 4
                },
                "keywords": "reddit lead generation, find customers on reddit, hacker news leads, bluesky lead generation, AI lead generation tool, saas lead generation",
                "publisher": {
                    "@type": "Organization",
                    "name": "ReplyGain",
                    "url": "https://replygain.com"
                }
            }</script>
        <!-- Additional Head Content -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is ReplyGain?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ReplyGain is an AI lead generation tool that monitors Reddit, Hacker News, X, and Bluesky 24/7 for people actively looking for a product like yours. It scores every post by purchase intent and surfaces high-intent leads so you spend time converting, not searching."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who is ReplyGain built for?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Founders, indie makers, and small teams selling SaaS, tools, or online services. If you have a website and your customers discuss their problems publicly, ReplyGain finds those conversations for you."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does intent scoring work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Every post is matched using AI to find purchase intent. We just filter posts so you only see the most relevant leads."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I customize what I'm monitoring?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. For each website you add, you can define keywords (direct intent, competitor mentions, or custom terms) and pick which communities to monitor. ReplyGain suggests a starter set based on your site automatically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's the difference between AI Leads and AI Replies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AI Leads is your monthly quota for scoring and qualifying posts. AI Replies is your quota for generating suggested replies to those leads. Both refill each billing cycle, and add-on packs are available if you need more."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ReplyGain post for me?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Never. ReplyGain drafts a reply for each lead, but you review it and post it yourself. Your accounts stay safe and your voice stays authentic. Full control, always."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What platforms does ReplyGain monitor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Currently Reddit, Hacker News, X, and Bluesky. Reddit alone covers tens of thousands of active communities. That is more than enough to surface buyers for most products. We are expanding to more platforms based on where your customers actually spend time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How quickly will new leads appear?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most leads appear within the hour. Scans run automatically on a schedule tied to your plan. Higher plans scan more frequently."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I control which communities are monitored?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. You can add, remove, or pause specific subreddits from your website settings at any time. ReplyGain suggests relevant ones when you first connect your site, but the final list is always yours to manage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I try ReplyGain before paying?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Grab a 7-day pass ($12 one-time, no subscription) for full access to lead scoring, your lead feed, and reply generation, then upgrade to a monthly or yearly plan any time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I upgrade or downgrade my plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, any time from your account settings. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I cancel anytime?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. One click from your account settings. No retention flows, no questions asked. You keep access until the end of your current period."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you offer refunds?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we offer a full refund within 7 days of your first payment if ReplyGain doesn't meet your needs. For annual plans, we offer prorated refunds for unused months within the first 30 days."
                        }
                    }
                ]
            }</script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <script>
            if (typeof IntersectionObserver !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.documentElement.classList.add("js-anim");
            }
        </script>
        <!-- Analytics -->
        <script src="https://v.jeeiee.com/js/script.js" data-host="https://v.jeeiee.com" data-dnt="false" id="ZwSg9rf6GA" async defer></script>
        <!-- Microsoft Clarity -->
        <script type="text/javascript">
            (function(c, l, a, r, i, t, y) {
                c[a] = c[a] || function() {
                    (c[a].q = c[a].q || []).push(arguments);
                }
                ;
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            }
            )(window, document, "clarity", "script", "wr0o10vv7o");
        </script>
        <!-- Crisp Chat (Only loaded for authenticated users) -->
        <script type="text/javascript">
            window.ReplyGainSupportChat = window.ReplyGainSupportChat || {
                pendingOpen: false,
                isReady: false,
                unreadCount: 0,
                unreadBadges: [],
                resolveBadge: function() {
                    var sidebarBadge = document.getElementById("sidebar-support-badge");
                    if (sidebarBadge) {
                        this.registerBadge(sidebarBadge);
                    }
                    return this.unreadBadges;
                },
                registerBadge: function(badge) {
                    if (!badge)
                        return;
                    if (!this.unreadBadges.includes(badge)) {
                        this.unreadBadges.push(badge);
                    }
                },
                showWidget: function() {
                    if (!window.$crisp)
                        return;
                    window.$crisp.push(["do", "chat:show"]);
                },
                hideWidget: function() {
                    if (!window.$crisp)
                        return;
                    window.$crisp.push(["do", "chat:hide"]);
                },
                resetSession: function() {
                    this.pendingOpen = false;
                    this.isReady = false;
                    this.unreadCount = 0;
                    window.CRISP_TOKEN_ID = null;
                    this.resolveBadge();
                    this.unreadBadges.forEach(function(badge) {
                        badge.classList.add("hidden");
                        badge.textContent = "";
                    });
                    if (window.$crisp) {
                        this.hideWidget();
                        window.$crisp.push(["do", "session:reset"]);
                    }
                },
                syncUnreadButton: function() {
                    this.resolveBadge();
                    if (!this.unreadBadges.length || !this.isReady || !window.$crisp)
                        return;

                    var unread = 0;
                    var isOpened = false;

                    try {
                        unread = Number(window.$crisp.get("chat:unread:count")) || 0;
                        isOpened = !!window.$crisp.is("chat:opened");
                    } catch (_) {
                        return;
                    }

                    this.unreadCount = unread;
                    var shouldShow = unread > 0 && !isOpened;
                    this.unreadBadges.forEach(function(badge) {
                        badge.classList.toggle("hidden", !shouldShow);
                        badge.textContent = unread > 9 ? "9+" : String(unread);
                        badge.setAttribute("aria-label", unread === 1 ? "1 unread support reply" : unread + " unread support replies", );
                    });
                },
                open: function() {
                    this.pendingOpen = true;
                    if (!window.$crisp)
                        return;
                    this.showWidget();
                    window.$crisp.push(["do", "chat:open"]);
                    this.pendingOpen = false;
                    var self = this;
                    window.setTimeout(function() {
                        self.syncUnreadButton();
                    }, 300);
                },
            };

            window.fetchAuthMe().then(function(data) {
                if (data && data.user) {
                    window.$crisp = window.$crisp || [];
                    window.CRISP_WEBSITE_ID = "0f8586f1-e92b-4b6f-9e1f-44e02f2dcf5a";
                    window.CRISP_TOKEN_ID = data.user.crispTokenId || null;

                    // Tell Crisp who this user is so it doesn't ask for their email
                    if (data && data.user) {
                        if (data.user.email) {
                            window.$crisp.push(["set", "user:email", [data.user.email]]);
                        }
                        if (data.user.name || data.user.given_name) {
                            window.$crisp.push(["set", "user:nickname", [data.user.name || data.user.given_name], ]);
                        }
                        var avatarUrl = data.user.avatar_url || data.user.picture;
                        if (avatarUrl) {
                            window.$crisp.push(["set", "user:avatar", [avatarUrl]]);
                        }

                        // Pass the plan type to Crisp sidebar (e.g. 'free', 'starter_monthly')
                        var currentPlan = data.user.planType || "free";
                        window.$crisp.push(["set", "session:data", [[["Plan", currentPlan.toUpperCase()]]], ]);

                        // Hide default chat icon since we launch it from the sidebar
                        window.$crisp.push(["config", "hide:on:mobile", true]);
                        window.$crisp.push(["config", "hide:on:desktop", true]);
                        window.ReplyGainSupportChat.hideWidget();

                        window.$crisp.push(["on", "session:loaded", function() {
                            window.ReplyGainSupportChat.isReady = true;
                            window.ReplyGainSupportChat.hideWidget();
                            if (window.ReplyGainSupportChat.pendingOpen) {
                                window.ReplyGainSupportChat.open();
                            }
                            window.ReplyGainSupportChat.syncUnreadButton();
                        }
                        , ]);

                        window.$crisp.push(["on", "message:received", function() {
                            if (!window.$crisp.is("chat:opened")) {
                                window.ReplyGainSupportChat.hideWidget();
                            }
                            window.ReplyGainSupportChat.syncUnreadButton();
                        }
                        , ]);

                        window.$crisp.push(["on", "chat:opened", function() {
                            window.ReplyGainSupportChat.showWidget();
                            window.setTimeout(function() {
                                window.ReplyGainSupportChat.syncUnreadButton();
                            }, 200);
                        }
                        , ]);

                        window.$crisp.push(["on", "chat:closed", function() {
                            window.ReplyGainSupportChat.hideWidget();
                            window.setTimeout(function() {
                                window.ReplyGainSupportChat.syncUnreadButton();
                            }, 200);
                        }
                        , ]);
                    }

                    (function() {
                        if (document.querySelector('script[data-crisp-loader="true"]'))
                            return;
                        var d = document
                          , s = d.createElement("script");
                        s.src = "https://client.crisp.chat/l.js";
                        s.async = 1;
                        s.setAttribute("data-crisp-loader", "true");
                        d.getElementsByTagName("head")[0].appendChild(s);
                    }
                    )();
                }
            }).catch(function() {});
        </script>
        <link rel="stylesheet" href="/styles/account-1.css">
        <style>
            .rotating-text-wrapper[data-astro-cid-fyjn4kyr] {
                position: relative;
                display: inline-block;
                white-space: nowrap
            }

            .rotating-text[data-astro-cid-fyjn4kyr] {
                display: inline-block;
                position: relative;
                z-index: 2
            }

            .brush-underline[data-astro-cid-fyjn4kyr] {
                position: absolute;
                bottom: -4px;
                left: -4%;
                width: 108%;
                height: 14px;
                z-index: 1;
                opacity: .85;
                pointer-events: none
            }
        </style>
    </head>
    <body class="landing-page">
        <nav class="nav">
            <div class="nav-container">
                <a href="/" style="text-decoration: none; display: flex; align-items: center;" data-astro-cid-orl6cwil="true" class="logo-component nav-logo">
                    <img src="/images/logo.svg" alt="ReplyGain Logo" class="logo-icon nav-logo-icon" width="24" height="24" data-astro-cid-orl6cwil>
                    <span class="logo-text nav-logo-text" data-astro-cid-orl6cwil>ReplyGain.com</span>
                </a>
                <div class="nav-links">
                    <a href="/#how-it-works" class="nav-link">How it works</a>
                    <a href="/#platforms" class="nav-link">Platforms</a>
                    <a href="/#features" class="nav-link">Features</a>
                    <a href="/pricing" class="nav-link">Pricing</a>
                </div>
                <div class="nav-actions">
                    <div id="nav-actions-guest" style="display: flex; align-items: center; gap: 0.75rem">
                        <button id="theme-toggle-header" class="theme-cycle-btn" aria-label="Toggle theme">
                            <span class="theme-cycle-icon-el"></span>
                        </button>
                        <a href="/login" class="btn btn-ghost btn-sm">Log in</a>
                        <a href="/login" class="btn btn-primary btn-sm">Find now</a>
                    </div>
                    <div id="nav-actions-user" class="nav-user-desktop" style="display: none; align-items: center; gap: 1rem">
                        <button id="theme-toggle-header-user" class="theme-cycle-btn" aria-label="Toggle theme">
                            <span class="theme-cycle-icon-el"></span>
                        </button>
                        <a href="/app" class="btn btn-secondary btn-sm">Dashboard</a>
                        <a href="/account" title="Account Settings" style="display: flex">
                            <img id="nav-user-avatar" src="" alt="Profile" style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              object-fit: cover;
              border: 1px solid var(--color-border);
              transition: transform 0.2s;
            ">
                        </a>
                    </div>
                </div>
                <div class="nav-mobile-right">
                    <div id="nav-mobile-user" class="nav-user-mobile">
                        <a href="/account" title="Account Settings" style="display: flex">
                            <img id="nav-user-avatar-mobile" src="" alt="Profile" style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              object-fit: cover;
              border: 1px solid var(--color-border);
            ">
                        </a>
                    </div>
                    <button id="theme-toggle-mobile" class="theme-cycle-btn nav-mobile-theme-btn" aria-label="Toggle theme">
                        <span class="theme-cycle-icon-el"></span>
                    </button>
                    <button class="nav-mobile-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="24" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" class="lucide lucide-menu menu-icon">
                            <path d="M4 5h16"></path>
                            <path d="M4 12h16"></path>
                            <path d="M4 19h16"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="24" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" class="lucide lucide-x close-icon">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <a href="/#how-it-works" class="mobile-menu-link">How it works</a>
            <a href="/#platforms" class="mobile-menu-link">Platforms</a>
            <a href="/#features" class="mobile-menu-link">Features</a>
            <a href="/pricing" class="mobile-menu-link">Pricing</a>
            <div class="mobile-menu-actions" id="mobile-actions-guest" style="flex-direction: row; align-items: center; gap: var(--space-3);">
                <a href="/login" class="btn btn-ghost" style="flex: 1; text-align: center;">Log in</a>
                <a href="/login" class="btn btn-primary" style="flex: 1.2;">Find now</a>
            </div>
            <div class="mobile-menu-actions" id="mobile-actions-user" style="display: none; flex-direction: column; gap: 0.5rem">
                <a href="/app" class="btn btn-primary btn-full">Dashboard</a>
                <a href="/account" class="btn btn-ghost btn-full">Account Settings</a>
            </div>
        </div>
        <script>
            // Mobile menu toggle
            const mobileToggle = document.getElementById("mobileMenuToggle");
            const mobileMenu = document.getElementById("mobileMenu");

            mobileToggle?.addEventListener("click", () => {
                mobileToggle.classList.toggle("active");
                mobileMenu?.classList.toggle("active");
            }
            );

            // Close mobile menu when clicking a link
            document.querySelectorAll(".mobile-menu-link").forEach( (link) => {
                link.addEventListener("click", () => {
                    mobileToggle?.classList.remove("active");
                    mobileMenu?.classList.remove("active");
                }
                );
            }
            );

            // Navbar background on scroll
            const nav = document.querySelector(".nav");
            window.addEventListener("scroll", () => {
                nav?.classList.toggle("scrolled", window.scrollY > 50);
            }
            );

            // Revert all nav elements to guest state
            function revertToGuestState() {
                localStorage.removeItem("rg_nav_user");
                const guestActions = document.getElementById("nav-actions-guest");
                const userActions = document.getElementById("nav-actions-user");
                const mobileGuestActions = document.getElementById("mobile-actions-guest");
                const mobileUserActions = document.getElementById("mobile-actions-user");
                const mobileUserNav = document.getElementById("nav-mobile-user");

                if (guestActions)
                    guestActions.style.display = "";
                if (userActions)
                    userActions.style.display = "none";
                if (mobileGuestActions)
                    mobileGuestActions.style.display = "";
                if (mobileUserActions)
                    mobileUserActions.style.display = "none";
                if (mobileUserNav)
                    mobileUserNav.style.display = "none";
            }

            // Apply user state to nav elements
            function applyNavUserState(user) {
                const guestActions = document.getElementById("nav-actions-guest");
                const userActions = document.getElementById("nav-actions-user");
                const mobileGuestActions = document.getElementById("mobile-actions-guest");
                const mobileUserActions = document.getElementById("mobile-actions-user");
                const mobileUserNav = document.getElementById("nav-mobile-user");

                if (guestActions)
                    guestActions.style.display = "none";
                if (userActions)
                    userActions.style.display = "flex";
                if (mobileGuestActions)
                    mobileGuestActions.style.display = "none";
                if (mobileUserActions)
                    mobileUserActions.style.display = "flex";
                if (mobileUserNav)
                    mobileUserNav.style.display = "flex";

                // Set avatar: prefer cached base64 blob, fall back to URL
                const avatarSrc = (user.email && localStorage.getItem("avatar_cache_" + user.email)) || user.avatar_url || user.picture || "";
                if (avatarSrc) {
                    const da = document.getElementById("nav-user-avatar");
                    const ma = document.getElementById("nav-user-avatar-mobile");
                    if (da)
                        da.src = avatarSrc;
                    if (ma)
                        ma.src = avatarSrc;
                }
            }

            // SYNC: read cache and apply user state immediately — no FOUC
            (function() {
                try {
                    const raw = localStorage.getItem("rg_nav_user");
                    if (raw)
                        applyNavUserState(JSON.parse(raw));
                } catch (_) {}
            }
            )();

            // ASYNC: verify with server, refresh cache, or revert on any auth failure
            async function checkAuth() {
                try {
                    const data = await window.fetchAuthMe();
                    if (data?.user) {
                        const user = data.user;

                        // Persist minimal user info for instant load on next page visit
                        localStorage.setItem("rg_nav_user", JSON.stringify({
                            email: user.email,
                            name: user.name,
                            avatar_url: user.avatar_url,
                            picture: user.picture,
                        }), );

                        applyNavUserState(user);

                        // Upgrade avatars via loadAvatar (handles base64 caching) if available
                        const desktopAvatar = document.getElementById("nav-user-avatar");
                        const mobileAvatar = document.getElementById("nav-user-avatar-mobile");
                        if (typeof window.loadAvatar === "function") {
                            if (desktopAvatar)
                                await window.loadAvatar(desktopAvatar, null, user);
                            if (mobileAvatar)
                                await window.loadAvatar(mobileAvatar, null, user);
                        }
                    } else {
                        // 401 = session expired/invalid, 404 = account deleted
                        // Either way: clear cache and show guest nav immediately
                        revertToGuestState();
                    }
                } catch (_) {// Network error: keep whatever state sync-check applied, don't flash back
                }
            }

            checkAuth();
        </script>
        <script>
            // Theme toggle — lives in header, controls all theme-cycle-btn instances
            (function initThemeToggle() {
                const ICONS = {
                    light: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
                    dark: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
                };

                const mq = window.matchMedia("(prefers-color-scheme: dark)");

                function applyTheme(val) {
                    if (val === "dark" || (val === "system" && mq.matches)) {
                        document.documentElement.setAttribute("data-theme", "dark");
                    } else {
                        document.documentElement.removeAttribute("data-theme");
                    }
                }

                function syncAllIcons(val) {
                    const resolved = val === "system" ? (mq.matches ? "dark" : "light") : val;
                    document.querySelectorAll(".theme-cycle-icon-el").forEach(function(el) {
                        el.innerHTML = ICONS[resolved];
                    });
                }

                var current = localStorage.getItem("rg_theme") || "system";
                syncAllIcons(current);
                applyTheme(current);

                function handleToggle(e) {
                    var icon = e.currentTarget.querySelector(".theme-cycle-icon-el");
                    if (icon) {
                        icon.classList.add("theme-spin");
                        icon.addEventListener("animationend", function() {
                            icon.classList.remove("theme-spin");
                        }, {
                            once: true
                        });
                    }
                    var currentTheme = localStorage.getItem("rg_theme") || "system";
                    var next;
                    if (currentTheme === "system") {
                        next = mq.matches ? "light" : "dark";
                    } else {
                        next = currentTheme === "light" ? "dark" : "light";
                    }
                    var doSwitch = function() {
                        localStorage.setItem("rg_theme", next);
                        applyTheme(next);
                        syncAllIcons(next);
                    };
                    if (window.__themeTransition) {
                        window.__themeTransition(doSwitch);
                    } else {
                        doSwitch();
                    }
                }

                document.querySelectorAll(".theme-cycle-btn").forEach(function(btn) {
                    btn.addEventListener("click", handleToggle);
                });

                window.addEventListener("storage", function(e) {
                    if (e.key === "rg_theme") {
                        syncAllIcons(e.newValue);
                        applyTheme(e.newValue);
                    }
                });

                mq.addEventListener("change", function() {
                    if (localStorage.getItem("rg_theme") === "system") {
                        applyTheme("system");
                    }
                });
            }
            )();
        </script>
        <section class="hero" data-astro-cid-fyjn4kyr>
            <div class="hero-container" data-astro-cid-fyjn4kyr>
                <div class="hero-content" data-astro-cid-fyjn4kyr>
                    <!-- Headline -->
                    <h1 class="hero-kw-label" data-anim data-anim-i="0" data-astro-cid-fyjn4kyr>
                        <span class="kw-label-icons" aria-hidden="true" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="16" height="16" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:16px;height:16px;">
                                    <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                        <rect width="256" height="256" fill="#FF4500"/>
                                        <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="platform-icon-wrap" style="width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="16" height="16" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:16px;height:16px;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <rect width="24" height="24" rx="4" fill="#f26522"/>
                                        <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                    </svg>
                                </div>
                            </div>
                            <div class="platform-icon-wrap" style="width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="16" height="16" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:16px;height:16px;">
                                    <svg width="16" height="16" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                        <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="platform-icon-wrap" style="width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/x.com.ico" width="16" height="16" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:16px;height:16px;">
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                            </div>
                        </span>
                        AI Lead Generation Tool

                    </h1>
                    <h2 class="hero-title" data-anim data-anim-i="1" data-astro-cid-fyjn4kyr>
                        Find

                        <span class="rotating-text-wrapper" data-astro-cid-fyjn4kyr>
                            <span class="rotating-text" data-astro-cid-fyjn4kyr>customers</span>
                            <svg class="brush-underline" viewBox="0 0 100 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-fyjn4kyr>
                                <path d="M 2,16 Q 30,22 60,15 T 98,8" stroke="var(--color-accent)" stroke-width="4" stroke-linecap="round" fill="none" data-astro-cid-fyjn4kyr></path>
                            </svg>
                        </span>
                        already asking for your product

                    </h2>
                    <!-- Subtitle -->
                    <p class="hero-subtitle" data-anim data-anim-i="2" data-astro-cid-fyjn4kyr>Monitor Reddit, X, Hacker News, and Bluesky for posts asking for tools
        like yours. Get AI-scored leads, reply and win customers in minutes.
</p>
                    <!-- CTA Form -->
                    <div class="hero-cta" data-anim data-anim-i="3" data-astro-cid-fyjn4kyr>
                        <form id="hero-url-form" class="hero-url-form" data-astro-cid-fyjn4kyr>
                            <div class="hero-url-input-wrapper" data-astro-cid-fyjn4kyr>
                                <div class="hero-favicon-icon" id="hero-favicon-wrapper" data-astro-cid-fyjn4kyr>
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="20" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" id="hero-favicon-globe" color="var(--color-text-secondary)" data-astro-cid-fyjn4kyr="true" class="lucide lucide-globe hero-favicon-globe">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                    <img id="hero-favicon" class="hero-favicon" src="" alt="" width="20" height="20" style="display:none" data-astro-cid-fyjn4kyr>
                                </div>
                                <span class="hero-input-sep" aria-hidden="true" data-astro-cid-fyjn4kyr></span>
                                <div class="hero-url-field hero-url-field-blinker" data-astro-cid-fyjn4kyr>
                                    <input type="text" id="hero-url-input" class="hero-url-input" placeholder="" required autocomplete="url" data-astro-cid-fyjn4kyr>
                                    <span class="hero-url-placeholder" aria-hidden="true" data-astro-cid-fyjn4kyr>
                                        <span class="hero-url-placeholder-text" data-astro-cid-fyjn4kyr>yourwebsite.com</span>
                                        <span class="hero-url-placeholder-caret" data-astro-cid-fyjn4kyr></span>
                                    </span>
                                </div>
                                <button type="submit" class="btn btn-primary hero-url-btn" data-astro-cid-fyjn4kyr>
                                    Find now
<span class="btn-arrow" data-astro-cid-fyjn4kyr>&rarr;</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="social-proof-wrap">
                        <div class="avatar-stack social-proof-avatars">
                            <div class="founder-avatar sp-skeleton"></div>
                            <div class="founder-avatar sp-skeleton"></div>
                            <div class="founder-avatar sp-skeleton"></div>
                            <div class="founder-avatar sp-skeleton"></div>
                            <div class="founder-avatar sp-skeleton"></div>
                        </div>
                        <p class="social-proof-text">
                            <strong class="social-proof-count">...</strong>
                            + founders already finding leads 
                        </p>
                    </div>
                    <script type="module">
                        (function() {
                            const c = "rg_social_proof";
                            function a() {
                                try {
                                    const t = localStorage.getItem(c);
                                    return t ? JSON.parse(t) : null
                                } catch {
                                    return null
                                }
                            }
                            function l(t) {
                                try {
                                    localStorage.setItem(c, JSON.stringify(t))
                                } catch {}
                            }
                            function r(t, e) {
                                document.querySelectorAll(".social-proof-count").forEach(o => {
                                    o.textContent = String(t)
                                }
                                ),
                                !(!e || e.length === 0) && document.querySelectorAll(".social-proof-avatars").forEach(o => {
                                    o.innerHTML = e.slice(0, 8).map( (n, s) => n.url ? `<div class="founder-avatar" style="z-index:${s + 1}"><img src="${n.url}" alt="${n.name || ""}" loading="lazy" onerror="this.parentElement.style.display='none'" /></div>` : "").join("")
                                }
                                )
                            }
                            async function i() {
                                const t = a();
                                t && r(t.count, t.avatars);
                                const e = Date.now();
                                if (!(t && e - t.cachedAt < 36e5))
                                    try {
                                        const o = await fetch("/api/social-proof");
                                        if (!o.ok)
                                            throw new Error(`${o.status}`);
                                        const n = await o.json();
                                        if (!n || typeof n.count != "number")
                                            return;
                                        l({
                                            count: n.count,
                                            avatars: n.avatars ?? [],
                                            cachedAt: e
                                        }),
                                        r(n.count, n.avatars ?? [])
                                    } catch {
                                        t || document.querySelectorAll(".social-proof-count").forEach(o => {
                                            o.textContent === "..." && (o.textContent = "53")
                                        }
                                        )
                                    }
                            }
                            i()
                        }
                        )();
                    </script>
                    <!-- ── Live Feed ── -->
                    <div class="hero-live-feed" data-anim data-anim-i="4" aria-label="Live lead examples" data-astro-cid-fyjn4kyr>
                        <div class="hero-notif-viewport" data-astro-cid-fyjn4kyr>
                            <div id="hero-notif-stack" class="hero-notif-stack" data-astro-cid-fyjn4kyr></div>
                        </div>
                    </div>
                </div>
                <!-- /hero-content -->
                <!-- ── Dashboard Screenshot ── -->
                <div class="hero-screenshot" aria-hidden="true" data-astro-cid-fyjn4kyr>
                    <div class="demo-inner" data-astro-cid-fyjn4kyr>
                        <img src="/images/dash-light.webp" alt="ReplyGain dashboard" class="ss-img ss-img-light" width="860" loading="eager" decoding="async" data-astro-cid-fyjn4kyr>
                        <img src="/images/dash-dark.webp" alt="ReplyGain dashboard" class="ss-img ss-img-dark" width="860" loading="eager" decoding="async" data-astro-cid-fyjn4kyr>
                    </div>
                </div>
            </div>
        </section>
        <section class="before-after" id="before-after" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="section-header animate-on-scroll" data-astro-cid-fyjn4kyr>
                    <span class="section-badge" data-astro-cid-fyjn4kyr>WHY IT MATTERS</span>
                    <h2 class="section-title" data-astro-cid-fyjn4kyr>Stop missing buyers who are asking right now</h2>
                    <p class="section-subtitle" data-astro-cid-fyjn4kyr>You built it. We bring the customers who are already asking for it.
</p>
                </div>
                <div class="ba-grid animate-on-scroll" data-astro-cid-fyjn4kyr>
                    <!-- Before card -->
                    <div class="ba-card ba-card--before" data-astro-cid-fyjn4kyr>
                        <div class="ba-card-label" data-astro-cid-fyjn4kyr>On your own
</div>
                        <ul class="ba-list" data-astro-cid-fyjn4kyr>
                            <li class="ba-item ba-item--bad" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--bad" data-astro-cid-fyjn4kyr>✕</span>
                                No idea how to find customers

                            </li>
                            <li class="ba-item ba-item--bad" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--bad" data-astro-cid-fyjn4kyr>✕</span>
                                Not a marketer, ads feel scary

                            </li>
                            <li class="ba-item ba-item--bad" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--bad" data-astro-cid-fyjn4kyr>✕</span>
                                You launch to crickets

                            </li>
                            <li class="ba-item ba-item--bad" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--bad" data-astro-cid-fyjn4kyr>✕</span>
                                Writing good replies takes forever

                            </li>
                            <li class="ba-item ba-item--bad" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--bad" data-astro-cid-fyjn4kyr>✕</span>
                                Buyers exist, you can't reach them

                            </li>
                        </ul>
                        <div class="ba-summary ba-summary--bad" data-astro-cid-fyjn4kyr>= A product nobody finds</div>
                    </div>
                    <!-- After card -->
                    <div class="ba-card ba-card--after" data-astro-cid-fyjn4kyr>
                        <div class="ba-card-label" data-astro-cid-fyjn4kyr>
                            With
<img src="/images/logo.svg" alt="" class="ba-label-logo" width="20" height="20" data-astro-cid-fyjn4kyr>ReplyGain

                        </div>
                        <ul class="ba-list" data-astro-cid-fyjn4kyr>
                            <li class="ba-item ba-item--good" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--good" data-astro-cid-fyjn4kyr>✓</span>
                                People ask for your product online, daily

                            </li>
                            <li class="ba-item ba-item--good" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--good" data-astro-cid-fyjn4kyr>✓</span>
                                We find them for you

                            </li>
                            <li class="ba-item ba-item--good" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--good" data-astro-cid-fyjn4kyr>✓</span>
                                AI filters out the noise

                            </li>
                            <li class="ba-item ba-item--good" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--good" data-astro-cid-fyjn4kyr>✓</span>
                                One-click reply: edit, post, done

                            </li>
                            <li class="ba-item ba-item--good" data-astro-cid-fyjn4kyr>
                                <span class="ba-icon ba-icon--good" data-astro-cid-fyjn4kyr>✓</span>
                                Indexed for free Google &amp;AI traffic

                            </li>
                        </ul>
                        <div class="ba-summary ba-summary--good" data-astro-cid-fyjn4kyr>= Customers, zero marketing skills</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="how-it-works" id="how-it-works">
            <div class="section-container">
                <div class="section-header">
                    <span class="section-badge">SETUP</span>
                    <h2 class="section-title">Live in Under 5 minutes</h2>
                    <p class="section-subtitle">No platform expertise needed. Enter your URL and we &#39;ll do the heavy lifting.</p>
                </div>
                <div class="how-it-works-rows">
                    <div class="how-it-works-row" style="--hiw-z: 1;">
                        <div class="hiw-text">
                            <div class="hiw-step-num">01</div>
                            <h3 class="hiw-title">Add Your Website</h3>
                            <p class="hiw-desc">Enter your URL. AI reads your site in seconds and auto-generates the right keywords and communities to monitor. Zero manual setup.</p>
                        </div>
                        <div class="hiw-illus">
                            <div class="step-illus step-illus-1">
                                <div class="step-illus-frame">
                                    <div class="step-illus-input-row">
                                        <svg class="step-illus-globe-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                        <div class="step-illus-sep"></div>
                                        <span class="step-illus-input-text">datafa.st</span>
                                        <div class="step-illus-btn">Find now →</div>
                                    </div>
                                    <div class="step-illus-hint">AI is analyzing your website...
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="how-it-works-row" style="--hiw-z: 2;">
                        <div class="hiw-text">
                            <div class="hiw-step-num">02</div>
                            <h3 class="hiw-title">Review Details</h3>
                            <p class="hiw-desc">Browse AI-suggested keywords and pick your platforms. Reddit, Hacker News, X, and Bluesky. Tweak, confirm, and go live in one click.</p>
                        </div>
                        <div class="hiw-illus">
                            <div class="step-illus step-illus-2">
                                <div class="step-illus-frame step-illus-frame-padded step-illus-frame-clip">
                                    <div class="step-kw-section">
                                        <div class="step-kw-header">
                                            <span class="step-kw-label">DIRECT INTENT KEYWORDS</span>
                                            <span class="step-kw-count">6/10</span>
                                        </div>
                                        <div class="step-kw-chips">
                                            <span class="step-kw-chip">
                                                revenue analytics <span class="step-chip-x">×</span>
                                            </span>
                                            <span class="step-kw-chip">
                                                marketing attribution <span class="step-chip-x">×</span>
                                            </span>
                                            <span class="step-kw-chip">
                                                e-commerce analytics <span class="step-chip-x">×</span>
                                            </span>
                                            <span class="step-kw-chip">
                                                saas analytics <span class="step-chip-x">×</span>
                                            </span>
                                            <span class="step-kw-chip">
                                                conversion tracking <span class="step-chip-x">×</span>
                                            </span>
                                            <span class="step-kw-chip step-kw-chip-accent">
                                                datafast <span class="step-chip-x">×</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="step-divider"></div>
                                    <div class="step-platform-block">
                                        <div class="step-platform-row">
                                            <div class="platform-icon-wrap" style="width:13px;height:13px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="13" height="13" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:13px;height:13px;">
                                                    <svg width="13" height="13" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                                        <rect width="256" height="256" fill="#FF4500"/>
                                                        <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span class="step-platform-name">Reddit</span>
                                            <div class="step-toggle step-toggle-on"></div>
                                        </div>
                                        <div class="step-sub-chips">
                                            <span class="step-sub-chip">r/Entrepreneur</span>
                                            <span class="step-sub-chip">r/SaaS</span>
                                            <span class="step-sub-chip">r/marketing</span>
                                            <span class="step-sub-chip">r/analytics</span>
                                            <span class="step-sub-chip">r/smallbusiness</span>
                                            <span class="step-sub-chip">r/webdev</span>
                                            <span class="step-sub-chip">r/ecommerce</span>
                                            <span class="step-sub-chip">r/SideProject</span>
                                        </div>
                                        <div class="step-add-sub-row">
                                            <span class="step-add-sub-input">Add subreddit...</span>
                                            <span class="step-add-btn">Add</span>
                                        </div>
                                    </div>
                                    <div class="step-divider"></div>
                                    <div class="step-platforms-2col">
                                        <div class="step-platform-row">
                                            <div class="platform-icon-wrap" style="width:13px;height:13px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="13" height="13" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:13px;height:13px;">
                                                    <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                                        <rect width="24" height="24" rx="4" fill="#f26522"/>
                                                        <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span class="step-platform-name">Hacker News</span>
                                            <div class="step-toggle step-toggle-on"></div>
                                        </div>
                                        <div class="step-platform-row">
                                            <div class="platform-icon-wrap" style="width:13px;height:13px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="13" height="13" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:13px;height:13px;">
                                                    <svg width="13" height="13" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                                        <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span class="step-platform-name">Bluesky</span>
                                            <div class="step-toggle step-toggle-on"></div>
                                        </div>
                                        <div class="step-platform-row step-platform-soon-row">
                                            <span class="step-platform-icon-ph">𝕏</span>
                                            <span class="step-platform-name step-platform-muted">X (Twitter)
</span>
                                            <span class="step-soon-badge">soon</span>
                                        </div>
                                        <div class="step-platform-row step-platform-soon-row">
                                            <span class="step-platform-icon-ph step-li-icon">in</span>
                                            <span class="step-platform-name step-platform-muted">LinkedIn
</span>
                                            <span class="step-soon-badge">soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="how-it-works-row" style="--hiw-z: 3;">
                        <div class="hiw-text">
                            <div class="hiw-step-num">03</div>
                            <h3 class="hiw-title">Get Your Lead Feed</h3>
                            <p class="hiw-desc">ReplyGain monitors 24/7, scores every post by purchase intent, and surfaces warm leads in your dashboard automatically.</p>
                        </div>
                        <div class="hiw-illus">
                            <div class="step-illus step-illus-3">
                                <div class="step-illus-frame step-illus-frame-noPad step-illus-frame-clip">
                                    <div class="step-lead-row">
                                        <div class="step-lead-icon">
                                            <div class="platform-icon-wrap" style="width:15px;height:15px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="15" height="15" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:15px;height:15px;">
                                                    <svg width="15" height="15" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                                        <rect width="256" height="256" fill="#FF4500"/>
                                                        <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-lead-body">
                                            <div class="step-lead-title">Creating a $100 MRR SaaS is h...
</div>
                                            <div class="step-lead-meta">
                                                <span>↑ 3</span>
                                                <span>💬 11</span>
                                                <span class="step-lead-sub">r/SaaS</span>
                                            </div>
                                        </div>
                                        <div class="step-lead-right">
                                            <span class="step-lead-time">2h ago</span>
                                            <span class="step-lead-star">☆</span>
                                        </div>
                                    </div>
                                    <div class="step-lead-row">
                                        <div class="step-lead-icon">
                                            <div class="platform-icon-wrap" style="width:15px;height:15px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="15" height="15" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:15px;height:15px;">
                                                    <svg width="15" height="15" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                                        <rect width="256" height="256" fill="#FF4500"/>
                                                        <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-lead-body">
                                            <div class="step-lead-title">Privacy friendly Google Ana...
</div>
                                            <div class="step-lead-meta">
                                                <span>↑ 19</span>
                                                <span>💬 17</span>
                                                <span class="step-lead-sub">r/SaaS</span>
                                            </div>
                                        </div>
                                        <div class="step-lead-right">
                                            <span class="step-lead-time">5h ago</span>
                                            <span class="step-lead-star">☆</span>
                                        </div>
                                    </div>
                                    <div class="step-lead-row">
                                        <div class="step-lead-icon">
                                            <div class="platform-icon-wrap" style="width:15px;height:15px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="15" height="15" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:15px;height:15px;">
                                                    <svg width="15" height="15" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                                        <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-lead-body">
                                            <div class="step-lead-title">Marketing Attribution Problems...
</div>
                                            <div class="step-lead-meta">
                                                <span>↑ 0</span>
                                                <span>💬 0</span>
                                            </div>
                                        </div>
                                        <div class="step-lead-right">
                                            <span class="step-lead-time">Mar 22</span>
                                            <span class="step-lead-star">☆</span>
                                        </div>
                                    </div>
                                    <div class="step-lead-row">
                                        <div class="step-lead-icon">
                                            <div class="platform-icon-wrap" style="width:15px;height:15px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="15" height="15" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:15px;height:15px;">
                                                    <svg width="15" height="15" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                                        <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-lead-body">
                                            <div class="step-lead-title">Historically, we've used Google...
</div>
                                            <div class="step-lead-meta">
                                                <span>↑ 1</span>
                                                <span>💬 0</span>
                                            </div>
                                        </div>
                                        <div class="step-lead-right">
                                            <span class="step-lead-time">Mar 25</span>
                                            <span class="step-lead-star">☆</span>
                                        </div>
                                    </div>
                                    <div class="step-lead-row step-lead-row-partial">
                                        <div class="step-lead-icon">
                                            <div class="platform-icon-wrap" style="width:15px;height:15px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                                <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="15" height="15" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                                <div style="display:none;width:15px;height:15px;">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                                        <rect width="24" height="24" rx="4" fill="#f26522"/>
                                                        <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-lead-body">
                                            <div class="step-lead-title">Show HN: Grandma Knows – co...
</div>
                                            <div class="step-lead-meta">
                                                <span>↑ 12</span>
                                                <span>💬 4</span>
                                            </div>
                                        </div>
                                        <div class="step-lead-right">
                                            <span class="step-lead-time">Mar 26</span>
                                            <span class="step-lead-star">☆</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="how-it-works-row" style="--hiw-z: 4;">
                        <div class="hiw-text">
                            <div class="hiw-step-num">04</div>
                            <h3 class="hiw-title">Reply &amp;Convert</h3>
                            <p class="hiw-desc">Open a lead, review the suggested reply, edit if needed, copy, and post directly in the community. Done in under 60 seconds.</p>
                        </div>
                        <div class="hiw-illus">
                            <div class="step-illus step-illus-4">
                                <div class="step-illus-frame step-illus-frame-padded">
                                    <div class="step-reply-nav">
                                        <span class="step-reply-nav-arrow">‹</span>
                                        <span class="step-reply-nav-label">Helpful</span>
                                        <span class="step-reply-nav-page">2/2</span>
                                        <span class="step-reply-nav-arrow">›</span>
                                    </div>
                                    <div class="step-reply-body">We were getting tons of traffic, but we had no idea
                    which channel was bringing actual paid users. Then we started
                    using DataFast and now we can see which channel works and
                    double down on it.
</div>
                                    <div class="step-reply-actions">
                                        <button class="step-reply-action">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="23 4 23 10 17 10"></polyline>
                                                <polyline points="1 20 1 14 7 14"></polyline>
                                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                            </svg>
                                            Regenerate

                                        </button>
                                        <button class="step-reply-action">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg>
                                            Edit

                                        </button>
                                        <button class="step-reply-action">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                            Copy

                                        </button>
                                    </div>
                                    <div class="step-reply-footer">
                                        <button class="step-reply-submit">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                            Copy &amp;Reply

                                        </button>
                                        <button class="step-reply-check">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </button>
                                        <button class="step-reply-dismiss">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="platforms" id="platforms" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="section-header" data-astro-cid-fyjn4kyr>
                    <span class="section-badge" data-astro-cid-fyjn4kyr>PLATFORMS</span>
                    <h2 class="section-title" data-astro-cid-fyjn4kyr>Monitor Where Your Buyers Are</h2>
                    <p class="section-subtitle" data-astro-cid-fyjn4kyr>We cover the communities where founders, indie hackers, and
          decision-makers ask for recommendations every day.
</p>
                </div>
                <div class="platforms-grid" data-astro-cid-fyjn4kyr>
                    <!-- Reddit -->
                    <a href="/platforms/reddit" class="platform-card platform-active" style="text-decoration: none; color: inherit;" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="32" height="32" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:32px;height:32px;">
                                    <svg width="32" height="32" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                        <rect width="256" height="256" fill="#FF4500"/>
                                        <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>Reddit</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Millions of niche communities, 24/7</div>
                    </a>
                    <!-- Hacker News -->
                    <a href="/platforms/hacker-news" class="platform-card platform-active" style="text-decoration: none; color: inherit;" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="32" height="32" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:32px;height:32px;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <rect width="24" height="24" rx="4" fill="#f26522"/>
                                        <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>Hacker News</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Ask HN threads full of buyers</div>
                    </a>
                    <!-- Bluesky -->
                    <a href="/platforms/bluesky" class="platform-card platform-active" style="text-decoration: none; color: inherit;" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="32" height="32" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:32px;height:32px;">
                                    <svg width="32" height="32" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                        <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>Bluesky</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Fast-growing tech community</div>
                    </a>
                    <!-- Twitter/X -->
                    <a href="/platforms/x" class="platform-card platform-active" style="text-decoration: none; color: inherit;" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/x.com.ico" width="32" height="32" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:32px;height:32px;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>X / Twitter</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>High-signal founder discussions</div>
                    </a>
                    <!-- LinkedIn -->
                    <div class="platform-card hidden" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/linkedin.com.ico" width="32" height="32" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:32px;height:32px;">
                                    <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>LinkedIn</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>B2B buyers & decision makers</div>
                        <span class="platform-status-badge platform-coming" data-astro-cid-fyjn4kyr>Soon</span>
                    </div>
                    <!-- Product Hunt -->
                    <div class="platform-card hidden" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/producthunt.com.ico" width="24" height="24" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:24px;height:24px;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <path fill="currentColor" d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>Product Hunt</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Early adopters & makers</div>
                        <span class="platform-status-badge platform-coming" data-astro-cid-fyjn4kyr>Soon</span>
                    </div>
                    <!-- IndieHackers -->
                    <div class="platform-card hidden" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/indiehackers.com.ico" width="24" height="24" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:24px;height:24px;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <polyline points="16 18 22 12 16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                                        <polyline points="8 6 2 12 8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>IndieHackers</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Bootstrapped founder community</div>
                        <span class="platform-status-badge platform-coming" data-astro-cid-fyjn4kyr>Soon</span>
                    </div>
                    <!-- Dev.to -->
                    <div class="platform-card hidden" data-astro-cid-fyjn4kyr>
                        <div class="platform-icon-wrap" data-astro-cid-fyjn4kyr>
                            <div class="platform-icon-wrap" style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                <img src="https://icons.duckduckgo.com/ip3/dev.to.ico" width="24" height="24" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                <div style="display:none;width:24px;height:24px;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                        <path fill="currentColor" d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.28zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="platform-name" data-astro-cid-fyjn4kyr>Dev.to</div>
                        <div class="platform-desc" data-astro-cid-fyjn4kyr>Developer audience & discussions</div>
                        <span class="platform-status-badge platform-coming" data-astro-cid-fyjn4kyr>Soon</span>
                    </div>
                </div>
            </div>
        </section>
        <div class="stats-bar hidden" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="stats-bar-row" data-astro-cid-fyjn4kyr>
                    <div class="stats-bar-item" data-astro-cid-fyjn4kyr>
                        <span class="stats-bar-num" data-astro-cid-fyjn4kyr>4</span>
                        <span class="stats-bar-label" data-astro-cid-fyjn4kyr>platforms monitored</span>
                    </div>
                    <div class="stats-bar-divider" data-astro-cid-fyjn4kyr></div>
                    <div class="stats-bar-item" data-astro-cid-fyjn4kyr>
                        <span class="stats-bar-num" data-astro-cid-fyjn4kyr>5,000+</span>
                        <span class="stats-bar-label" data-astro-cid-fyjn4kyr>posts analyzed per scan</span>
                    </div>
                    <div class="stats-bar-divider" data-astro-cid-fyjn4kyr></div>
                    <div class="stats-bar-item" data-astro-cid-fyjn4kyr>
                        <span class="stats-bar-num" data-astro-cid-fyjn4kyr>5 min</span>
                        <span class="stats-bar-label" data-astro-cid-fyjn4kyr>to your first leads</span>
                    </div>
                </div>
            </div>
        </div>
        <section class="bento-section" id="features" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="section-header" data-astro-cid-fyjn4kyr>
                    <span class="section-badge" data-astro-cid-fyjn4kyr>WHY REPLYGAIN</span>
                    <h2 class="section-title" data-astro-cid-fyjn4kyr>Built for founders who can't waste time</h2>
                    <p class="section-subtitle" data-astro-cid-fyjn4kyr>Every feature exists to close the gap between "someone needs what I
          built" and "they're now my customer."
</p>
                </div>
                <div class="bento-grid" data-astro-cid-fyjn4kyr>
                    <!-- 1: Save time (Large) -->
                    <div class="bento-card bento-large bento-time-card" data-astro-cid-fyjn4kyr>
                        <div class="bento-time-content" data-astro-cid-fyjn4kyr>
                            <div class="bento-stat" data-astro-cid-fyjn4kyr>2+ hrs</div>
                            <h3 class="bento-title" data-astro-cid-fyjn4kyr>Daily time saved</h3>
                            <p class="bento-desc" data-astro-cid-fyjn4kyr>Stop manually scrolling social media for mentions. We monitor 24/7
              and surface only the leads worth your time.
</p>
                        </div>
                        <div class="bento-time-illus" aria-hidden="true" data-astro-cid-fyjn4kyr>
                            <!-- Clock face -->
                            <svg class="bento-clock" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                <circle cx="60" cy="60" r="54" stroke="var(--color-border)" stroke-width="2" data-astro-cid-fyjn4kyr></circle>
                                <circle cx="60" cy="60" r="54" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="339.3" stroke-dashoffset="254.5" stroke-linecap="round" transform="rotate(-90 60 60)" opacity="0.9" data-astro-cid-fyjn4kyr></circle>
                                <!-- Tick marks -->
                                <line x1="60" y1="10" x2="60" y2="18" stroke="var(--color-border)" stroke-width="2" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <line x1="60" y1="102" x2="60" y2="110" stroke="var(--color-border)" stroke-width="2" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <line x1="10" y1="60" x2="18" y2="60" stroke="var(--color-border)" stroke-width="2" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <line x1="102" y1="60" x2="110" y2="60" stroke="var(--color-border)" stroke-width="2" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <!-- Hour hand (pointing ~10 o'clock = 2h saved) -->
                                <line x1="60" y1="60" x2="34" y2="30" stroke="var(--color-text-primary)" stroke-width="3" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <!-- Minute hand -->
                                <line x1="60" y1="60" x2="60" y2="24" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" data-astro-cid-fyjn4kyr></line>
                                <!-- Center dot -->
                                <circle cx="60" cy="60" r="4" fill="var(--color-accent)" data-astro-cid-fyjn4kyr></circle>
                            </svg>
                            <!-- Before / After bars -->
                            <div class="bento-time-bars" data-astro-cid-fyjn4kyr>
                                <div class="bento-time-bar-row" data-astro-cid-fyjn4kyr>
                                    <span class="bento-time-bar-label" data-astro-cid-fyjn4kyr>Before</span>
                                    <div class="bento-time-bar-track" data-astro-cid-fyjn4kyr>
                                        <div class="bento-time-bar bento-time-bar-before" data-astro-cid-fyjn4kyr></div>
                                    </div>
                                    <span class="bento-time-bar-val" data-astro-cid-fyjn4kyr>2h</span>
                                </div>
                                <div class="bento-time-bar-row" data-astro-cid-fyjn4kyr>
                                    <span class="bento-time-bar-label" data-astro-cid-fyjn4kyr>With ReplyGain</span>
                                    <div class="bento-time-bar-track" data-astro-cid-fyjn4kyr>
                                        <div class="bento-time-bar bento-time-bar-after" data-astro-cid-fyjn4kyr></div>
                                    </div>
                                    <span class="bento-time-bar-val" style="color:var(--color-accent)" data-astro-cid-fyjn4kyr>10m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2: Stop doom scrolling -->
                    <div class="bento-card" data-astro-cid-fyjn4kyr>
                        <div class="bento-feed-preview" data-astro-cid-fyjn4kyr>
                            <div class="bento-fp-row bento-fp-ghost" data-astro-cid-fyjn4kyr>
                                <div class="bento-fp-icon" data-astro-cid-fyjn4kyr>
                                    <div class="platform-icon-wrap" style="width:11px;height:11px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                        <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="11" height="11" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                        <div style="display:none;width:11px;height:11px;">
                                            <svg class="platform-icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                                <rect width="24" height="24" rx="4" fill="#f26522"/>
                                                <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="bento-fp-lines" data-astro-cid-fyjn4kyr>
                                    <div class="bento-fp-line bento-fp-line-long" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-fp-line bento-fp-line-short" data-astro-cid-fyjn4kyr></div>
                                </div>
                            </div>
                            <div class="bento-fp-row bento-fp-active" data-astro-cid-fyjn4kyr>
                                <div class="bento-fp-icon" data-astro-cid-fyjn4kyr>
                                    <div class="platform-icon-wrap" style="width:11px;height:11px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                        <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="11" height="11" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                        <div style="display:none;width:11px;height:11px;">
                                            <svg class="platform-icon" width="11" height="11" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                                <rect width="256" height="256" fill="#FF4500"/>
                                                <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="bento-fp-lines" data-astro-cid-fyjn4kyr>
                                    <div class="bento-fp-line bento-fp-line-accent" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-fp-line bento-fp-line-med" data-astro-cid-fyjn4kyr></div>
                                </div>
                                <div class="bento-fp-score" data-astro-cid-fyjn4kyr>94</div>
                            </div>
                            <div class="bento-fp-row bento-fp-ghost" data-astro-cid-fyjn4kyr>
                                <div class="bento-fp-icon" data-astro-cid-fyjn4kyr>
                                    <div class="platform-icon-wrap" style="width:11px;height:11px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                        <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="11" height="11" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                        <div style="display:none;width:11px;height:11px;">
                                            <svg class="platform-icon" width="11" height="11" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                                <rect width="256" height="256" fill="#FF4500"/>
                                                <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="bento-fp-lines" data-astro-cid-fyjn4kyr>
                                    <div class="bento-fp-line bento-fp-line-long" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-fp-line bento-fp-line-short" data-astro-cid-fyjn4kyr></div>
                                </div>
                            </div>
                            <div class="bento-fp-row bento-fp-ghost" data-astro-cid-fyjn4kyr>
                                <div class="bento-fp-icon" data-astro-cid-fyjn4kyr>
                                    <div class="platform-icon-wrap" style="width:11px;height:11px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                        <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="11" height="11" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                        <div style="display:none;width:11px;height:11px;">
                                            <svg class="platform-icon" width="11" height="11" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                                <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="bento-fp-lines" data-astro-cid-fyjn4kyr>
                                    <div class="bento-fp-line bento-fp-line-med" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-fp-line bento-fp-line-short" data-astro-cid-fyjn4kyr></div>
                                </div>
                            </div>
                        </div>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Stop doom scrolling</h3>
                        <p class="bento-desc" data-astro-cid-fyjn4kyr>Turn hours of passive scrolling into a 10-minute review.
</p>
                    </div>
                    <!-- 5: Quality over Quantity -->
                    <div class="bento-card" data-astro-cid-fyjn4kyr>
                        <div class="bento-funnel-v2" data-astro-cid-fyjn4kyr>
                            <div class="bento-fv2-row" data-astro-cid-fyjn4kyr>
                                <div class="bento-fv2-bar" style="width:70%;opacity:0.12" data-astro-cid-fyjn4kyr></div>
                                <span class="bento-fv2-label" data-astro-cid-fyjn4kyr>All mentions</span>
                                <span class="bento-fv2-count" data-astro-cid-fyjn4kyr>10k</span>
                            </div>
                            <div class="bento-fv2-row" data-astro-cid-fyjn4kyr>
                                <div class="bento-fv2-bar" style="width:58%;opacity:0.3" data-astro-cid-fyjn4kyr></div>
                                <span class="bento-fv2-label" data-astro-cid-fyjn4kyr>Keyword match</span>
                                <span class="bento-fv2-count" data-astro-cid-fyjn4kyr>1.2k</span>
                            </div>
                            <div class="bento-fv2-row" data-astro-cid-fyjn4kyr>
                                <div class="bento-fv2-bar" style="width:26%;opacity:0.6" data-astro-cid-fyjn4kyr></div>
                                <span class="bento-fv2-label" data-astro-cid-fyjn4kyr>High intent</span>
                                <span class="bento-fv2-count" data-astro-cid-fyjn4kyr>86</span>
                            </div>
                            <div class="bento-fv2-row bento-fv2-active" data-astro-cid-fyjn4kyr>
                                <div class="bento-fv2-bar" style="width:10%;opacity:1" data-astro-cid-fyjn4kyr></div>
                                <span class="bento-fv2-label" data-astro-cid-fyjn4kyr>Your leads</span>
                                <span class="bento-fv2-count bento-fv2-accent" data-astro-cid-fyjn4kyr>
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="9" height="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="currentColor" viewBox="0 0 24 24" style="display:inline" data-astro-cid-fyjn4kyr="true" class="lucide lucide-zap">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                    12

                                </span>
                            </div>
                        </div>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Quality over Quantity</h3>
                        <p class="bento-desc" data-astro-cid-fyjn4kyr>Others send 1,000s of mentions. We surface high-intent leads, like
            someone looking for an "AI tool" rather than just a "camera."
</p>
                    </div>
                    <!-- 4: CENTER URL INPUT -->
                    <div class="bento-card bento-center-cta" data-astro-cid-fyjn4kyr>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Ready to find leads?</h3>
                        <form class="hero-url-form" id="bento-url-form" data-astro-cid-fyjn4kyr>
                            <div class="hero-url-input-wrapper" data-astro-cid-fyjn4kyr>
                                <div class="hero-favicon-icon" id="bento-favicon-wrapper" data-astro-cid-fyjn4kyr>
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="20" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" id="bento-favicon-globe" color="var(--color-text-secondary)" data-astro-cid-fyjn4kyr="true" class="lucide lucide-globe hero-favicon-globe">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                        <path d="M2 12h20"></path>
                                    </svg>
                                    <img id="bento-favicon" class="hero-favicon" src="" alt="" width="20" height="20" style="display:none; border-radius: 3px;" data-astro-cid-fyjn4kyr>
                                </div>
                                <span class="hero-input-sep" aria-hidden="true" data-astro-cid-fyjn4kyr></span>
                                <div class="hero-url-field hero-url-field-blinker" data-astro-cid-fyjn4kyr>
                                    <input type="text" id="bento-url-input" class="hero-url-input" placeholder="" required data-astro-cid-fyjn4kyr>
                                    <span class="hero-url-placeholder" aria-hidden="true" data-astro-cid-fyjn4kyr>
                                        <span class="hero-url-placeholder-text" data-astro-cid-fyjn4kyr>yourwebsite.com</span>
                                        <span class="hero-url-placeholder-caret" data-astro-cid-fyjn4kyr></span>
                                    </span>
                                </div>
                                <button type="submit" class="btn btn-primary hero-url-btn" data-astro-cid-fyjn4kyr>Find now
</button>
                            </div>
                        </form>
                        <p class="hero-cta-hint" data-astro-cid-fyjn4kyr>Start finding in 5 minutes</p>
                    </div>
                    <script>
                        (function() {
                            const input = document.getElementById("bento-url-input");
                            const favicon = document.getElementById("bento-favicon");
                            const globe = document.getElementById("bento-favicon-globe");
                            const placeholder = document.querySelector(".bento-center-cta .hero-url-field-blinker", );

                            if (!input || !favicon || !globe)
                                return;

                            function syncPlaceholder() {
                                placeholder?.classList.toggle("is-typing", document.activeElement === input || input.value.trim().length > 0, );
                            }

                            input.addEventListener("input", (e) => {
                                syncPlaceholder();
                                const val = e.target.value.trim();
                                if (val.length > 3 && val.includes(".")) {
                                    let domain = val;
                                    if (domain.startsWith("http")) {
                                        try {
                                            domain = new URL(domain).hostname;
                                        } catch (e) {}
                                    }
                                    const iconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
                                    favicon.src = iconUrl;
                                    favicon.style.display = "block";
                                    globe.style.display = "none";

                                    favicon.onerror = () => {
                                        favicon.style.display = "none";
                                        globe.style.display = "block";
                                    }
                                    ;
                                } else {
                                    favicon.style.display = "none";
                                    globe.style.display = "block";
                                }
                            }
                            );

                            input.addEventListener("focus", syncPlaceholder);
                            input.addEventListener("blur", syncPlaceholder);
                            syncPlaceholder();

                            const form = document.getElementById("bento-url-form");
                            form && form.addEventListener("submit", async function(e) {
                                e.preventDefault();
                                var url = input.value.trim();
                                if (!url)
                                    return;
                                if (!url.startsWith("http"))
                                    url = "https://" + url;
                                try {
                                    new URL(url);
                                } catch (e) {
                                    return;
                                }
                                localStorage.setItem("pendingWebsiteUrl", url);
                                try {
                                    const data = await window.fetchAuthMe();
                                    if (data?.user?.hasCompletedOnboarding) {
                                        window.location.href = "/app";
                                        return;
                                    }
                                    if (data?.user) {
                                        window.location.href = "/setup";
                                        return;
                                    }
                                } catch (e) {}
                                window.location.href = "/api/auth/google";
                            });
                        }
                        )();
                    </script>
                    <!-- 6: Community presence -->
                    <div class="bento-card" data-astro-cid-fyjn4kyr>
                        <div class="bento-reply-preview" data-astro-cid-fyjn4kyr>
                            <div class="bento-rp-header" data-astro-cid-fyjn4kyr>
                                <div class="bento-rp-avatar" data-astro-cid-fyjn4kyr>Y</div>
                                <div class="bento-rp-meta" data-astro-cid-fyjn4kyr>
                                    <div class="bento-rp-name" data-astro-cid-fyjn4kyr>your_startup</div>
                                    <div class="bento-rp-sub" data-astro-cid-fyjn4kyr>r/SaaS · just now</div>
                                </div>
                                <div class="bento-rp-karma" data-astro-cid-fyjn4kyr>
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fyjn4kyr>
                                        <polyline points="18 15 12 9 6 15" data-astro-cid-fyjn4kyr></polyline>
                                    </svg>
                                    47

                                </div>
                            </div>
                            <div class="bento-rp-body" data-astro-cid-fyjn4kyr>
                                <div class="bento-rp-line bento-rp-line-full" data-astro-cid-fyjn4kyr></div>
                                <div class="bento-rp-line bento-rp-line-long" data-astro-cid-fyjn4kyr></div>
                                <div class="bento-rp-line bento-rp-line-med" data-astro-cid-fyjn4kyr></div>
                            </div>
                        </div>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Community Trust</h3>
                        <p class="bento-desc" data-astro-cid-fyjn4kyr>Every genuine reply builds your reputation.</p>
                    </div>
                    <!-- 7: Platform Monitoring -->
                    <div class="bento-card" data-astro-cid-fyjn4kyr>
                        <div class="bento-platforms-row" data-astro-cid-fyjn4kyr>
                            <div class="bento-platform-box" data-astro-cid-fyjn4kyr>
                                <div class="platform-icon-wrap" style="width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                    <img src="https://icons.duckduckgo.com/ip3/reddit.com.ico" width="18" height="18" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                    <div style="display:none;width:18px;height:18px;">
                                        <svg width="18" height="18" viewBox="0 0 256 256" aria-hidden="true" style="display:block;">
                                            <rect width="256" height="256" fill="#FF4500"/>
                                            <path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="bento-platform-box" data-astro-cid-fyjn4kyr>
                                <div class="platform-icon-wrap" style="width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                    <img src="https://icons.duckduckgo.com/ip3/news.ycombinator.com.ico" width="18" height="18" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                    <div style="display:none;width:18px;height:18px;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                            <rect width="24" height="24" rx="4" fill="#f26522"/>
                                            <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="bento-platform-box" data-astro-cid-fyjn4kyr>
                                <div class="platform-icon-wrap" style="width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                    <img src="https://icons.duckduckgo.com/ip3/bsky.app.ico" width="18" height="18" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                    <div style="display:none;width:18px;height:18px;">
                                        <svg width="18" height="18" viewBox="0 0 320 286" aria-hidden="true" style="display:block;">
                                            <path fill="#0085ff" d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="bento-platform-box" data-astro-cid-fyjn4kyr>
                                <div class="platform-icon-wrap" style="width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;position:relative;">
                                    <img src="https://icons.duckduckgo.com/ip3/x.com.ico" width="18" height="18" style="display:block;border-radius:2px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"/>
                                    <div style="display:none;width:18px;height:18px;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style="display:block;">
                                            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Omni-channel Monitoring</h3>
                        <p class="bento-desc" data-astro-cid-fyjn4kyr>Reddit, HN, X, and Bluesky. All monitored 24/7 in one place.
</p>
                    </div>
                    <!-- 8: Multi-search Visibility -->
                    <div class="bento-card bento-large" data-astro-cid-fyjn4kyr>
                        <div class="bsf-flow" data-astro-cid-fyjn4kyr>
                            <!-- Step 1: Reply -->
                            <div class="bsf-step" data-astro-cid-fyjn4kyr>
                                <div class="bsf-badge-row" data-astro-cid-fyjn4kyr>
                                    <div class="bsf-badge" title="Reply" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                </div>
                                <span class="bsf-label" data-astro-cid-fyjn4kyr>You Reply</span>
                            </div>
                            <div class="bsf-arrow" data-astro-cid-fyjn4kyr>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" data-astro-cid-fyjn4kyr>
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--color-text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fyjn4kyr></path>
                                </svg>
                            </div>
                            <!-- Step 2: Search Engines -->
                            <div class="bsf-step" data-astro-cid-fyjn4kyr>
                                <div class="bsf-badge-row" data-astro-cid-fyjn4kyr>
                                    <div class="bsf-badge" title="Google" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" data-astro-cid-fyjn4kyr></path>
                                            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" data-astro-cid-fyjn4kyr></path>
                                            <path fill="#FBBC05" d="M11.68 28.18A13.9 13.9 0 0 1 11 24c0-1.45.25-2.86.68-4.18v-5.7H4.34A23.932 23.932 0 0 0 0 24c0 3.86.93 7.5 2.56 10.74l7.34-5.56z" data-astro-cid-fyjn4kyr></path>
                                            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7C13.42 14.62 18.27 10.75 24 10.75z" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                </div>
                                <span class="bsf-label" data-astro-cid-fyjn4kyr>Indexed & ranked</span>
                            </div>
                            <div class="bsf-arrow" data-astro-cid-fyjn4kyr>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" data-astro-cid-fyjn4kyr>
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--color-text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fyjn4kyr></path>
                                </svg>
                            </div>
                            <!-- Step 3: AI engines -->
                            <div class="bsf-step" data-astro-cid-fyjn4kyr>
                                <div class="bsf-badge-row" data-astro-cid-fyjn4kyr>
                                    <div class="bsf-badge" title="ChatGPT" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 256 260" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434z" fill="var(--color-text-primary)" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                    <div class="bsf-badge" title="Claude" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065z" fill="#D97757" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                    <div class="bsf-badge" title="Perplexity" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" fill="#22B8CD" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                    <div class="bsf-badge" title="Gemini" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="M14 2C13.1 7.7 7.7 13.1 2 14c5.7.9 11.1 6.3 12 12 .9-5.7 6.3-11.1 12-12C20.3 13.1 14.9 7.7 14 2z" fill="url(#bsf-gem2)" data-astro-cid-fyjn4kyr></path>
                                            <defs data-astro-cid-fyjn4kyr>
                                                <linearGradient id="bsf-gem2" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                                    <stop stop-color="#4285F4" data-astro-cid-fyjn4kyr></stop>
                                                    <stop offset="1" stop-color="#A8C7FA" data-astro-cid-fyjn4kyr></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="bsf-badge" title="Grok" data-astro-cid-fyjn4kyr>
                                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                                            <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" fill="var(--color-text-primary)" fill-rule="evenodd" data-astro-cid-fyjn4kyr></path>
                                        </svg>
                                    </div>
                                </div>
                                <span class="bsf-label" data-astro-cid-fyjn4kyr>AI surfaces it</span>
                            </div>
                        </div>
                        <h3 class="bento-title" data-astro-cid-fyjn4kyr>Search Visibility</h3>
                        <p class="bento-desc" data-astro-cid-fyjn4kyr>Replies get indexed, rank on Google, and feed into AI Search results
            for viral organic growth.
</p>
                    </div>
                    <!-- 9: Custom Prompt / Brand Tone (full width) -->
                    <div class="bento-card bento-prompt-feature" data-astro-cid-fyjn4kyr>
                        <div class="bento-prompt-feature-text" data-astro-cid-fyjn4kyr>
                            <h3 class="bento-title" data-astro-cid-fyjn4kyr>Your voice, your brand</h3>
                            <p class="bento-desc" data-astro-cid-fyjn4kyr>Custom prompt templates guide the AI to reply in your exact tone,
              helpful, direct, casual, or whatever converts. Available on Pro
              and above.
</p>
                        </div>
                        <div class="bento-prompt-feature-viz" data-astro-cid-fyjn4kyr>
                            <div class="bento-prompt-editor" data-astro-cid-fyjn4kyr>
                                <div class="bento-prompt-editor-bar" data-astro-cid-fyjn4kyr>
                                    <span class="bento-prompt-dot" data-astro-cid-fyjn4kyr></span>
                                    <span class="bento-prompt-dot" data-astro-cid-fyjn4kyr></span>
                                    <span class="bento-prompt-dot" data-astro-cid-fyjn4kyr></span>
                                    <span class="bento-prompt-editor-label" data-astro-cid-fyjn4kyr>Custom Prompt</span>
                                </div>
                                <div class="bento-prompt-editor-body" data-astro-cid-fyjn4kyr>
                                    <div class="bento-prompt-editor-line bento-prompt-line-full" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-prompt-editor-line bento-prompt-line-med" data-astro-cid-fyjn4kyr></div>
                                    <div class="bento-prompt-editor-line bento-prompt-line-short" data-astro-cid-fyjn4kyr></div>
                                </div>
                            </div>
                            <div class="bento-tone-chips" data-astro-cid-fyjn4kyr>
                                <span class="bento-tone-chip bento-tone-active" data-astro-cid-fyjn4kyr>Helpful</span>
                                <span class="bento-tone-chip" data-astro-cid-fyjn4kyr>Direct</span>
                                <span class="bento-tone-chip" data-astro-cid-fyjn4kyr>Casual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div style="display: none;" data-astro-cid-fyjn4kyr>
            <section class="testimonials" id="testimonials">
                <div class="section-container">
                    <div class="section-header">
                        <span class="section-badge">SOCIAL PROOF</span>
                        <h2 class="section-title">Founders Are Finding Real Customers</h2>
                        <p class="section-subtitle">Don &#39;t take our word for it, here &#39;s what early users say</p>
                    </div>
                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <div class="testimonial-rating">⭐⭐⭐⭐⭐ </div>
                            <p class="testimonial-text">"I found 3 paying customers in the first week. People literally asking for exactly what I built. ReplyGain is the highest ROI tool in my stack."</p>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">MK</div>
                                <div class="testimonial-info">
                                    <span class="testimonial-name">Marcus K.</span>
                                    <span class="testimonial-role">Founder @ Clipnote.io</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-rating">⭐⭐⭐⭐⭐ </div>
                            <p class="testimonial-text">"Replaced 2 hours of daily manual hunting with 10 minutes reviewing scored leads. The intent scoring is scary accurate."</p>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">PR</div>
                                <div class="testimonial-info">
                                    <span class="testimonial-name">Priya R.</span>
                                    <span class="testimonial-role">Solo Founder</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-rating">⭐⭐⭐⭐⭐ </div>
                            <p class="testimonial-text">"The AI-generated replies feel genuinely helpful, not spammy. My conversion rate from warm lead to paying customer is 12%."</p>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">JL</div>
                                <div class="testimonial-info">
                                    <span class="testimonial-name">James L.</span>
                                    <span class="testimonial-role">Founder @ DevTools SaaS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="founder" id="about" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="founder-content" data-astro-cid-fyjn4kyr>
                    <div class="founder-image" data-astro-cid-fyjn4kyr>
                        <div class="founder-photo" data-astro-cid-fyjn4kyr>
                            <img src="/images/jitesh.png" alt="Jitesh, maker of ReplyGain" data-astro-cid-fyjn4kyr>
                        </div>
                    </div>
                    <div class="founder-text" data-astro-cid-fyjn4kyr>
                        <div class="founder-greeting" data-astro-cid-fyjn4kyr>Hey, I'm Jitesh</div>
                        <p class="founder-role" data-astro-cid-fyjn4kyr>I build tools I actually need. ReplyGain is one of them.
</p>
                        <p class="founder-story" data-astro-cid-fyjn4kyr>I was wasting 2-3 hours every morning doom scrolling Reddit, HN, X,
            and Bluesky looking for potential users. By the time I gave up I'd
            found nothing, my focus was gone, and I still had a full day of
            building and marketing ahead of me. It was the worst way to start.
</p>
                        <p class="founder-story" data-astro-cid-fyjn4kyr>
                            The thing is, people on these platforms already post exactly what
            they need. "What's a good alternative to X?" "Anyone built something
            for Y problem?"
<strong class="highlight" data-astro-cid-fyjn4kyr>The warm leads were there the whole time.</strong>
                            Finding them manually was just a full-time job I couldn't afford to
            have.

                        </p>
                        <p class="founder-story" data-astro-cid-fyjn4kyr>So I built ReplyGain. I started using it for TapRefer, my own
            product, and got more paid users than I ever did running Meta ads.
            No ad spend. Just showing up in the right conversations, replying
            helpfully, and letting that compound. It ranks on Google and in AI
            search results now too.
</p>
                        <p class="founder-story" data-astro-cid-fyjn4kyr>I'm solo and self-funded. I build products to scratch my own itch,
            ship them, and figure out distribution myself. No agency, no growth
            team, no budget for ads that don't work. If you're in that same
            position, this tool was built for you.
</p>
                        <p class="founder-story" data-astro-cid-fyjn4kyr>
                            <strong class="highlight" data-astro-cid-fyjn4kyr>Right now, someone in your niche is asking for a tool like yours.
              Whoever replies first gets the customer.</strong>
                        </p>
                        <div class="founder-cta" data-astro-cid-fyjn4kyr>
                            <form class="hero-url-form" id="founder-url-form" data-astro-cid-fyjn4kyr>
                                <div class="hero-url-input-wrapper" data-astro-cid-fyjn4kyr>
                                    <div class="hero-favicon-icon" id="founder-favicon-wrapper" data-astro-cid-fyjn4kyr>
                                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="20" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" id="founder-favicon-globe" color="var(--color-text-secondary)" data-astro-cid-fyjn4kyr="true" class="lucide lucide-globe hero-favicon-globe">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        <img id="founder-favicon" class="hero-favicon" src="" alt="" width="20" height="20" style="display:none" data-astro-cid-fyjn4kyr>
                                    </div>
                                    <span class="hero-input-sep" aria-hidden="true" data-astro-cid-fyjn4kyr></span>
                                    <div class="hero-url-field" data-astro-cid-fyjn4kyr>
                                        <input type="text" id="founder-url-input" class="hero-url-input" placeholder="yourwebsite.com" required autocomplete="url" data-astro-cid-fyjn4kyr>
                                    </div>
                                    <button type="submit" class="btn btn-primary hero-url-btn" data-astro-cid-fyjn4kyr>
                                        Find leads
<span class="btn-arrow" data-astro-cid-fyjn4kyr>&rarr;</span>
                                    </button>
                                </div>
                            </form>
                            <script>
                                (function() {
                                    const form = document.getElementById("founder-url-form");
                                    const input = document.getElementById("founder-url-input");
                                    const favicon = document.getElementById("founder-favicon");
                                    const globe = document.getElementById("founder-favicon-globe");
                                    if (!form || !input || !favicon || !globe)
                                        return;

                                    input.addEventListener("input", function() {
                                        const val = input.value.trim();
                                        if (val.length > 3 && val.includes(".")) {
                                            let domain = val;
                                            if (domain.startsWith("http")) {
                                                try {
                                                    domain = new URL(domain).hostname;
                                                } catch (e) {}
                                            }
                                            favicon.src = "https://icons.duckduckgo.com/ip3/" + domain + ".ico";
                                            favicon.style.display = "block";
                                            globe.style.display = "none";
                                            favicon.onerror = function() {
                                                favicon.style.display = "none";
                                                globe.style.display = "block";
                                            }
                                            ;
                                        } else {
                                            favicon.style.display = "none";
                                            globe.style.display = "block";
                                        }
                                    });

                                    form.addEventListener("submit", async function(e) {
                                        e.preventDefault();
                                        var url = input.value.trim();
                                        if (!url)
                                            return;
                                        if (!url.startsWith("http"))
                                            url = "https://" + url;
                                        try {
                                            new URL(url);
                                        } catch (e) {
                                            return;
                                        }
                                        localStorage.setItem("pendingWebsiteUrl", url);
                                        try {
                                            var data = await window.fetchAuthMe();
                                            if (data?.user?.hasCompletedOnboarding) {
                                                window.location.href = "/app";
                                                return;
                                            }
                                            if (data?.user) {
                                                window.location.href = "/setup";
                                                return;
                                            }
                                        } catch (e) {}
                                        window.location.href = "/api/auth/google";
                                    });
                                }
                                )();
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ask-ai-section hidden" data-astro-cid-fyjn4kyr>
            <div class="section-container" data-astro-cid-fyjn4kyr>
                <div class="ask-ai-header" data-astro-cid-fyjn4kyr>
                    <span class="section-badge" data-astro-cid-fyjn4kyr>RESEARCH MODE</span>
                    <h2 class="ask-ai-title" data-astro-cid-fyjn4kyr>Don't just take our word</h2>
                    <p class="ask-ai-subtitle" data-astro-cid-fyjn4kyr>Ask your favorite AI how ReplyGain finds warm leads, get unbiased
          answers in seconds.
</p>
                </div>
                <div class="ask-ai-pills" data-astro-cid-fyjn4kyr>
                    <a href="https://chatgpt.com/?prompt=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-pill" title="Ask ChatGPT" data-astro-cid-fyjn4kyr>
                        <svg width="18" height="18" viewBox="0 0 256 260" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                            <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434z" fill="var(--color-text-primary)" data-astro-cid-fyjn4kyr></path>
                        </svg>
                        <span data-astro-cid-fyjn4kyr>Ask ChatGPT</span>
                    </a>
                    <a href="https://claude.ai/new?q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-pill" title="Ask Claude" data-astro-cid-fyjn4kyr>
                        <svg width="18" height="18" viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                            <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065z" fill="#D97757" data-astro-cid-fyjn4kyr></path>
                        </svg>
                        <span data-astro-cid-fyjn4kyr>Ask Claude</span>
                    </a>
                    <a href="https://www.perplexity.ai/search/new?q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-pill" title="Ask Perplexity" data-astro-cid-fyjn4kyr>
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                            <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" fill="#22B8CD" fill-rule="nonzero" data-astro-cid-fyjn4kyr></path>
                        </svg>
                        <span data-astro-cid-fyjn4kyr>Ask Perplexity</span>
                    </a>
                    <a href="https://www.google.com/search?udm=50&q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-pill" title="Ask Gemini" data-astro-cid-fyjn4kyr>
                        <svg width="18" height="18" viewBox="0 0 296 298" xmlns="http://www.w3.org/2000/svg" fill="none" data-astro-cid-fyjn4kyr>
                            <mask id="ai-sec-gemini" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha" data-astro-cid-fyjn4kyr>
                                <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394z" data-astro-cid-fyjn4kyr></path>
                            </mask>
                            <g mask="url(#ai-sec-gemini)" data-astro-cid-fyjn4kyr>
                                <g filter="url(#ai-sec-gb)" data-astro-cid-fyjn4kyr>
                                    <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159" data-astro-cid-fyjn4kyr></ellipse>
                                </g>
                                <g filter="url(#ai-sec-gc)" data-astro-cid-fyjn4kyr>
                                    <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5" data-astro-cid-fyjn4kyr></ellipse>
                                </g>
                                <g filter="url(#ai-sec-gd)" data-astro-cid-fyjn4kyr>
                                    <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5" data-astro-cid-fyjn4kyr></ellipse>
                                </g>
                                <g filter="url(#ai-sec-ge)" data-astro-cid-fyjn4kyr>
                                    <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5z" data-astro-cid-fyjn4kyr></path>
                                </g>
                                <g filter="url(#ai-sec-gf)" data-astro-cid-fyjn4kyr>
                                    <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5z" data-astro-cid-fyjn4kyr></path>
                                </g>
                                <g filter="url(#ai-sec-gg)" data-astro-cid-fyjn4kyr>
                                    <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5z" data-astro-cid-fyjn4kyr></path>
                                </g>
                                <g filter="url(#ai-sec-gh)" data-astro-cid-fyjn4kyr>
                                    <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5z" data-astro-cid-fyjn4kyr></path>
                                </g>
                            </g>
                            <defs data-astro-cid-fyjn4kyr>
                                <filter id="ai-sec-gb" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="18" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-gc" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-gd" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-ge" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-gf" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-gg" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                                <filter id="ai-sec-gh" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" data-astro-cid-fyjn4kyr>
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-fyjn4kyr></feFlood>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-fyjn4kyr></feBlend>
                                    <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32" data-astro-cid-fyjn4kyr></feGaussianBlur>
                                </filter>
                            </defs>
                        </svg>
                        <span data-astro-cid-fyjn4kyr>Ask Gemini</span>
                    </a>
                    <a href="https://x.com/i/grok?text=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-pill" title="Ask Grok" data-astro-cid-fyjn4kyr>
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fyjn4kyr>
                            <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" fill="var(--color-text-primary)" fill-rule="evenodd" data-astro-cid-fyjn4kyr></path>
                        </svg>
                        <span data-astro-cid-fyjn4kyr>Ask Grok</span>
                    </a>
                </div>
            </div>
        </section>
        <section class="faq" id="faq">
            <div class="section-container">
                <div class="section-header">
                    <span class="section-badge">FAQ</span>
                    <h2 class="section-title">Common Questions</h2>
                    <p class="section-subtitle">Everything you need to know about finding warm leads across platforms</p>
                </div>
                <div class="faq-tabs-wrapper">
                    <div class="faq-tab-nav">
                        <button class="faq-tab-btn active" data-tab="general">General </button>
                        <button class="faq-tab-btn" data-tab="product">Product </button>
                        <button class="faq-tab-btn" data-tab="platforms">Platforms </button>
                        <button class="faq-tab-btn" data-tab="billing">Pricing &amp;Billing </button>
                    </div>
                    <div class="faq-tab-panel active" data-panel="general">
                        <div class="faq-list" style="max-width: 680px; margin: 0 auto;">
                            <div class="faq-item">
                                <div class="faq-header">
                                    What is ReplyGain? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>ReplyGain is an AI lead generation tool that monitors Reddit, Hacker News, X, and Bluesky 24/7 for people actively looking for a product like yours. It scores every post by purchase intent and surfaces high-intent leads so you spend time converting, not searching.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Who is ReplyGain built for? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Founders, indie makers, and small teams selling SaaS, tools, or online services. If you have a website and your customers discuss their problems publicly, ReplyGain finds those conversations for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-tab-panel" data-panel="product">
                        <div class="faq-list" style="max-width: 680px; margin: 0 auto;">
                            <div class="faq-item">
                                <div class="faq-header">
                                    How does intent scoring work? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Every post is matched using AI to find purchase intent. We just filter posts so you only see the most relevant leads.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Can I customize what I &#39;m monitoring? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes. For each website you add, you can define keywords (direct intent, competitor mentions, or custom terms) and pick which communities to monitor. ReplyGain suggests a starter set based on your site automatically.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    What &#39;s the difference between AI Leads and AI Replies? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>AI Leads is your monthly quota for scoring and qualifying posts. AI Replies is your quota for generating suggested replies to those leads. Both refill each billing cycle, and add-on packs are available if you need more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Does ReplyGain post for me? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Never. ReplyGain drafts a reply for each lead, but you review it and post it yourself. Your accounts stay safe and your voice stays authentic. Full control, always.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-tab-panel" data-panel="platforms">
                        <div class="faq-list" style="max-width: 680px; margin: 0 auto;">
                            <div class="faq-item">
                                <div class="faq-header">
                                    What platforms does ReplyGain monitor? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Currently Reddit, Hacker News, X, and Bluesky. Reddit alone covers tens of thousands of active communities. That is more than enough to surface buyers for most products. We are expanding to more platforms based on where your customers actually spend time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    How quickly will new leads appear? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Most leads appear within the hour. Scans run automatically on a schedule tied to your plan. Higher plans scan more frequently.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Can I control which communities are monitored? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes. You can add, remove, or pause specific subreddits from your website settings at any time. ReplyGain suggests relevant ones when you first connect your site, but the final list is always yours to manage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-tab-panel" data-panel="billing">
                        <div class="faq-list" style="max-width: 680px; margin: 0 auto;">
                            <div class="faq-item">
                                <div class="faq-header">
                                    Can I try ReplyGain before paying? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes. Grab a 7-day pass ($12 one-time, no subscription) for full access to lead scoring, your lead feed, and reply generation, then upgrade to a monthly or yearly plan any time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Can I upgrade or downgrade my plan? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes, any time from your account settings. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Can I cancel anytime? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes. One click from your account settings. No retention flows, no questions asked. You keep access until the end of your current period.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-header">
                                    Do you offer refunds? 
                                    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div class="faq-body">
                                    <div class="faq-content-wrapper">
                                        <div class="faq-content">
                                            <p>Yes, we offer a full refund within 7 days of your first payment if ReplyGain doesn't meet your needs. For annual plans, we offer prorated refunds for unused months within the first 30 days.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script>
            // Tab switching
            document.querySelectorAll(".faq-tab-btn").forEach( (btn) => {
                btn.addEventListener("click", () => {
                    const tab = btn.dataset.tab;
                    const wrapper = btn.closest(".faq-tabs-wrapper");

                    wrapper.querySelectorAll(".faq-tab-btn").forEach( (b) => b.classList.remove("active"));
                    wrapper.querySelectorAll(".faq-tab-panel").forEach( (p) => p.classList.remove("active"));

                    btn.classList.add("active");
                    wrapper.querySelector(`.faq-tab-panel[data-panel="${tab}"]`).classList.add("active");

                    // Close all accordions when switching tabs
                    wrapper.querySelectorAll(".faq-item").forEach( (el) => el.classList.remove("active"));
                }
                );
            }
            );

            // FAQ exclusive accordion
            document.querySelectorAll(".faq-header").forEach( (header) => {
                header.addEventListener("click", () => {
                    const item = header.parentElement;
                    const panel = item.closest(".faq-tab-panel, .faq-list");
                    const isOpen = item.classList.contains("active");

                    // Close all others in same panel/list
                    (panel || document).querySelectorAll(".faq-item").forEach( (el) => {
                        if (el !== item)
                            el.classList.remove("active");
                    }
                    );

                    item.classList.toggle("active");
                }
                );
            }
            );
        </script>
        <section class="final-cta">
            <div class="section-container">
                <div class="final-cta-content hero">
                    <div class="final-cta-text">
                        <h2 class="final-cta-title">Never miss a high-intent lead</h2>
                        <p class="final-cta-subtitle">Drop your website. We find the people already looking for what you made, no marketing skills needed.</p>
                        <div class="final-cta-actions">
                            <form id="final-cta-url-form" class="hero-url-form">
                                <div class="hero-url-input-wrapper">
                                    <div class="hero-favicon-icon" id="final-cta-favicon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="24" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" id="final-cta-favicon-globe" strokeWidth="1.5" class="lucide lucide-globe hero-favicon-globe w-5 h-5">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        <img id="final-cta-favicon" class="hero-favicon" src="" alt="" width="20" height="20" style="display:none">
                                    </div>
                                    <span class="hero-input-sep" aria-hidden="true"></span>
                                    <div class="hero-url-field hero-url-field-blinker">
                                        <input type="text" id="final-cta-url-input" class="hero-url-input" placeholder="" required autocomplete="url">
                                        <span class="hero-url-placeholder" aria-hidden="true">
                                            <span class="hero-url-placeholder-text">yourwebsite.com</span>
                                            <span class="hero-url-placeholder-caret"></span>
                                        </span>
                                    </div>
                                    <button type="submit" class="btn btn-primary hero-url-btn">
                                        Find now <span class="btn-arrow">&rarr;</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="final-cta-visual" aria-hidden="true">
                        <img src="/images/mag.png" alt="" class="final-cta-mag" width="480" height="480" loading="lazy">
                    </div>
                </div>
            </div>
        </section>
        <script>
            const finalCtaForm = document.getElementById("final-cta-url-form");
            const finalCtaInput = document.getElementById("final-cta-url-input");
            const finalCtaPlaceholder = document.querySelector(".final-cta .hero-url-field-blinker", );
            const finalCtaFavicon = document.getElementById("final-cta-favicon");
            const finalCtaFaviconGlobe = document.getElementById("final-cta-favicon-globe", );

            function _fcSyncPlaceholder() {
                if (!finalCtaInput || !finalCtaPlaceholder)
                    return;
                finalCtaPlaceholder.classList.toggle("is-typing", document.activeElement === finalCtaInput || finalCtaInput.value.trim().length > 0, );
            }

            function _fcShowGlobe() {
                if (finalCtaFaviconGlobe)
                    finalCtaFaviconGlobe.style.display = "";
                if (finalCtaFavicon) {
                    finalCtaFavicon.style.display = "none";
                    finalCtaFavicon.src = "";
                }
            }

            function _fcShowSiteFavicon(domain) {
                const cached = typeof getFaviconCached === "function" ? getFaviconCached(domain) : null;
                if (cached) {
                    finalCtaFavicon.src = cached;
                    finalCtaFavicon.style.display = "block";
                    finalCtaFaviconGlobe.style.display = "none";
                    return;
                }

                function _swap() {
                    finalCtaFavicon.style.display = "block";
                    finalCtaFaviconGlobe.style.display = "none";
                    if (typeof getFavicon === "function")
                        getFavicon(domain);
                }

                finalCtaFavicon.onload = _swap;
                finalCtaFavicon.onerror = () => {
                    finalCtaFavicon.onload = _swap;
                    finalCtaFavicon.onerror = () => {}
                    ;
                    finalCtaFavicon.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;
                }
                ;
                finalCtaFavicon.src = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
            }

            let finalCtaFaviconTimeout;
            finalCtaInput?.addEventListener("input", () => {
                _fcSyncPlaceholder();
                clearTimeout(finalCtaFaviconTimeout);
                finalCtaFaviconTimeout = setTimeout( () => {
                    try {
                        let val = finalCtaInput.value.trim();
                        if (!val) {
                            _fcShowGlobe();
                            return;
                        }
                        if (!val.startsWith("http"))
                            val = "https://" + val;
                        const domain = new URL(val).hostname;
                        if (domain && domain.includes(".")) {
                            _fcShowSiteFavicon(domain);
                        } else {
                            _fcShowGlobe();
                        }
                    } catch {
                        _fcShowGlobe();
                    }
                }
                , 300);
            }
            );
            finalCtaInput?.addEventListener("focus", _fcSyncPlaceholder);
            finalCtaInput?.addEventListener("blur", _fcSyncPlaceholder);
            _fcSyncPlaceholder();

            finalCtaForm?.addEventListener("submit", async (e) => {
                e.preventDefault();
                let url = finalCtaInput?.value.trim();
                if (!url)
                    return;
                if (!url.startsWith("http"))
                    url = "https://" + url;

                try {
                    new URL(url);
                } catch {
                    return;
                }

                localStorage.setItem("pendingWebsiteUrl", url);

                try {
                    const domain = new URL(url).hostname;
                    if (domain) {
                        await Promise.race([typeof getFavicon === "function" ? getFavicon(domain) : Promise.resolve(), new Promise( (resolve) => setTimeout(resolve, 2000)), ]);
                    }
                } catch {}

                const authUrl = finalCtaForm.querySelector("button")?.getAttribute("data-auth-url") || "/api/auth/google";

                try {
                    const data = await window.fetchAuthMe();
                    if (data?.user?.hasCompletedOnboarding) {
                        window.location.href = "/app";
                    } else if (data?.user) {
                        window.location.href = "/setup";
                    }
                    if (data?.user)
                        return;
                } catch {}
                window.location.href = authUrl;
            }
            );
        </script>
        <footer class="lp-footer">
            <div class="section-container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                            <a href="/" style="text-decoration: none; display: flex; align-items: center;" data-astro-cid-orl6cwil="true" class="logo-component footer-logo">
                                <img src="/images/logo.svg" alt="ReplyGain Logo" class="logo-icon" width="24" height="24" data-astro-cid-orl6cwil>
                                <span class="logo-text footer-logo-text" data-astro-cid-orl6cwil>ReplyGain.com</span>
                            </a>
                        </div>
                        <p class="footer-tagline">Spot warm leads in real-time on Reddit, HN & more.
</p>
                        <p class="footer-tagline">
                            Built by <a style="color: var(--color-text-primary); font-weight: bold;" href="https://jeeiee.com?r=rg" target="_blank">JEEiEE</a>
                        </p>
                        <div class="footer-social">
                            <a href="https://x.com/replygain" class="footer-social-link" rel="noopener nofollow" aria-label="Twitter" style="padding-top: 2px;">
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="18" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" class="lucide lucide-twitter">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/replygain" class="footer-social-link" rel="noopener nofollow" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="18" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24" class="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                        <div class="footer-ai-ask">
                            <span class="ai-ask-title">Ask AI about ReplyGain</span>
                            <div class="ai-btn-group">
                                <a href="https://chatgpt.com/?prompt=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-btn" title="Ask ChatGPT">
                                    <svg viewBox="0 0 256 260" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434z" fill="var(--color-text-primary)"></path>
                                    </svg>
                                </a>
                                <a href="https://claude.ai/new?q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-btn" title="Ask Claude">
                                    <svg viewBox="0 0 256 257" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065z" fill="#D97757"></path>
                                    </svg>
                                </a>
                                <a href="https://www.perplexity.ai/search/new?q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-btn" title="Ask Perplexity">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" fill="#22B8CD" fill-rule="nonzero"></path>
                                    </svg>
                                </a>
                                <a href="https://www.google.com/search?udm=50&q=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-btn" title="Ask Gemini">
                                    <svg viewBox="0 0 296 298" xmlns="http://www.w3.org/2000/svg" fill="none">
                                        <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha">
                                            <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394z"></path>
                                        </mask>
                                        <g mask="url(#gemini-a)">
                                            <g filter="url(#gemini-b)">
                                                <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                            </g>
                                            <g filter="url(#gemini-c)">
                                                <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                            </g>
                                            <g filter="url(#gemini-d)">
                                                <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                            </g>
                                            <g filter="url(#gemini-e)">
                                                <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5z"></path>
                                            </g>
                                            <g filter="url(#gemini-f)">
                                                <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5z"></path>
                                            </g>
                                            <g filter="url(#gemini-g)">
                                                <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5z"></path>
                                            </g>
                                            <g filter="url(#gemini-h)">
                                                <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5z"></path>
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                            <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></feGaussianBlur>
                                            </filter>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="https://x.com/i/grok?text=How%20is%20ReplyGain%20better%20than%20other%20social%20listening%20tools%20%28like%20Syften%2C%20F5Bot%2C%20Mention%2C%20Brand24%29%20for%20finding%20B2B%20buyer%20intent%20signals%20from%20Reddit%2C%20X%2C%20and%20other%20platforms%3F%20" target="_blank" rel="noopener nofollow" class="ai-btn" title="Ask Grok">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" fill="var(--color-text-primary)" fill-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-links-group">
                        <h4 class="footer-links-title">Product</h4>
                        <ul class="footer-links">
                            <li>
                                <a href="/#features">Features</a>
                            </li>
                            <li>
                                <a href="/platforms">Platforms</a>
                            </li>
                            <li>
                                <a href="/#how-it-works">How it works</a>
                            </li>
                            <li>
                                <a href="/pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="/alternatives">Alternatives</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4 class="footer-links-title">Compare</h4>
                        <ul class="footer-links">
                            <li>
                                <a href="/compare">ReplyGain vs every tool</a>
                            </li>
                            <li>
                                <a href="/alternatives">Tool alternatives</a>
                            </li>
                            <li>
                                <a href="/reddit-tool">Tool reviews</a>
                            </li>
                            <li>
                                <a href="/platforms">Platforms we monitor</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4 class="footer-links-title">Company</h4>
                        <ul class="footer-links">
                            <li style="display: none;">
                                <a href="/blog">Blog</a>
                            </li>
                            <li style="display: none;">
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="/login" id="footer-support-link">Chat with us</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/llms.txt">llms.txt</a>
                            </li>
                            <li>
                                <a href="/affiliate">Affiliate Program (20%)</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-links-group">
                        <h4 class="footer-links-title">More</h4>
                        <ul class="footer-links">
                            <li>
                                <a href="https://taprefer.com?r=rg" target="_blank">TapRefer</a>
                            </li>
                            <li>
                                <a href="https://pitchcold.com?r=rg" target="_blank">PitchCold</a>
                            </li>
                            <li>
                                <a href="https://victrays.com?r=rg" target="_blank">Victrays</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-row">
                        <div class="footer-copyright">© 2026 ReplyGain.com</div>
                        <div class="footer-legal">
                            <a href="/terms">TERMS OF SERVICE</a>
                            <a href="/privacy">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div class="footer-brand-huge">
                        <span>R</span>
                        <span>e</span>
                        <span>p</span>
                        <span>l</span>
                        <span>y</span>
                        <span>G</span>
                        <span>a</span>
                        <span>i</span>
                        <span>n</span>
                    </div>
                </div>
            </div>
        </footer>
        <script>
            function openSupportChat(event) {
                if (event)
                    event.preventDefault();

                // If the ReplyGain support chat is ready (authenticated / Crisp loaded), open it.
                var chatReady = false;
                try {
                    chatReady = !!((window.ReplyGainSupportChat && window.ReplyGainSupportChat.isReady) || (window.$crisp && typeof window.$crisp.push === "function"));
                } catch (e) {
                    chatReady = false;
                }

                if (chatReady) {
                    if (window.ReplyGainSupportChat && typeof window.ReplyGainSupportChat.open === "function") {
                        window.ReplyGainSupportChat.open();
                        return;
                    }
                    if (window.$crisp && typeof window.$crisp.push === "function") {
                        window.$crisp.push(["do", "chat:show"]);
                        window.$crisp.push(["do", "chat:open"]);
                        return;
                    }
                }

                // Fallback: not authenticated / chat not ready → go to login page
                window.location.href = "/login?ref=chat-footer";
            }

            document.addEventListener("DOMContentLoaded", function() {
                var footerLink = document.getElementById("footer-support-link");
                if (!footerLink)
                    return;
                footerLink.addEventListener("click", openSupportChat);
            });
        </script>
        <script>
            // ── Referrer capture (first-touch attribution) ──
            (function() {
                // Query string → affiliate/referral param (any param, as-is)
                if (!localStorage.getItem("rg_ref_param") && window.location.search.length > 1) {
                    localStorage.setItem("rg_ref_param", window.location.search.slice(1, 101), );
                    // strip leading ?
                }
                // document.referrer → which platform sent them
                if (!localStorage.getItem("rg_referrer")) {
                    try {
                        var host = new URL(document.referrer).hostname.replace(/^www\./, "");
                        if (host && host !== window.location.hostname)
                            localStorage.setItem("rg_referrer", host.slice(0, 100));
                    } catch (e) {}
                }
            }
            )();

            // ── Smooth scroll ──
            document.querySelectorAll('a[href^="#"]').forEach( (anchor) => {
                anchor.addEventListener("click", function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute("href"));
                    if (target)
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                });
            }
            );

            // ── Scroll-triggered animations (IntersectionObserver) ──
            (function() {
                if (!document.documentElement.classList.contains("js-anim"))
                    return;

                // 1. Hero elements animate in on load
                function kickHero() {
                    document.querySelectorAll(".hero [data-anim]").forEach( (el) => {
                        el.classList.add("in-view");
                    }
                    );
                }
                document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", kickHero) : kickHero();

                // 2. Section elements animate on scroll
                var io = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("in-view");
                            io.unobserve(entry.target);
                        }
                    });
                }
                ,{
                    threshold: 0.08,
                    rootMargin: "0px 0px -48px 0px"
                },);

                // Observe: section headers
                document.querySelectorAll(".section-header").forEach( (el) => io.observe(el));

                // Observe: card grids (stagger via CSS nth-child)
                document.querySelectorAll(".features-grid, .pricing-grid, .testimonials-grid, .use-cases-grid, .bento-grid, .platforms-grid", ).forEach( (el) => io.observe(el));

                // Observe: other blocks
                document.querySelectorAll(".founder-content, .faq-list, .final-cta-content").forEach( (el) => io.observe(el));
            }
            )();

            // ── Hero screenshot 3D tilt on scroll ──
            (function() {
                var screenshot = document.querySelector(".hero-screenshot");
                if (!screenshot)
                    return;
                var maxTilt = 10;
                var tiltZone = 1000;
                function updateTilt() {
                    var scrollY = window.scrollY;
                    var progress = Math.min(scrollY / tiltZone, 1);
                    var tilt = maxTilt * (1 - progress);
                    screenshot.style.transform = "perspective(1200px) rotateX(" + tilt + "deg)";
                }
                updateTilt();
                window.addEventListener("scroll", updateTilt, {
                    passive: true
                });
            }
            )();

            // ── Auth state ──
            async function checkAuth() {
                try {
                    const data = await window.fetchAuthMe();
                    if (data?.user) {
                        const guestNav = document.getElementById("nav-actions-guest");
                        const userNav = document.getElementById("nav-actions-user");
                        const userNavMobile = document.getElementById("nav-mobile-user");
                        const userAvatar = document.getElementById("nav-user-avatar");
                        const userAvatarMobile = document.getElementById("nav-user-avatar-mobile", );

                        if (guestNav)
                            guestNav.style.display = "none";

                        const mobileGuestActions = document.getElementById("mobile-actions-guest", );
                        const mobileUserActions = document.getElementById("mobile-actions-user", );
                        if (mobileGuestActions)
                            mobileGuestActions.style.display = "none";
                        if (mobileUserActions)
                            mobileUserActions.style.display = "flex";

                        if (userNav) {
                            userNav.style.display = "flex";
                            await loadAvatar(userAvatar, null, data.user);
                        }
                        if (userNavMobile) {
                            userNavMobile.style.display = "flex";
                            await loadAvatar(userAvatarMobile, null, data.user);
                        }
                    }
                } catch (e) {
                    console.log("User not logged in");
                }
            }

            checkAuth();

            // ── Hero URL form ──
            const heroForm = document.getElementById("hero-url-form");
            const heroInput = document.getElementById("hero-url-input");
            const heroPlaceholder = document.querySelector(".hero-url-field-blinker");
            const heroFavicon = document.getElementById("hero-favicon");
            const heroFaviconGlobe = document.getElementById("hero-favicon-globe");

            function _syncHeroPlaceholder() {
                if (!heroInput || !heroPlaceholder)
                    return;
                heroPlaceholder.classList.toggle("is-typing", document.activeElement === heroInput || heroInput.value.trim().length > 0, );
            }

            function _showGlobe() {
                heroFaviconGlobe.style.display = "";
                heroFavicon.style.display = "none";
                heroFavicon.src = "";
            }

            function _showSiteFavicon(domain) {
                const cached = typeof getFaviconCached === "function" ? getFaviconCached(domain) : null;
                if (cached) {
                    heroFavicon.src = cached;
                    heroFavicon.style.display = "block";
                    heroFaviconGlobe.style.display = "none";
                    return;
                }

                function _swap() {
                    heroFavicon.style.display = "block";
                    heroFaviconGlobe.style.display = "none";
                    if (typeof getFavicon === "function")
                        getFavicon(domain);
                }

                heroFavicon.onload = _swap;
                heroFavicon.onerror = () => {
                    heroFavicon.onload = _swap;
                    heroFavicon.onerror = () => {}
                    ;
                    heroFavicon.src = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;
                }
                ;
                heroFavicon.src = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
            }

            let faviconTimeout;
            heroInput?.addEventListener("input", () => {
                _syncHeroPlaceholder();
                clearTimeout(faviconTimeout);
                faviconTimeout = setTimeout( () => {
                    try {
                        let val = heroInput.value.trim();
                        if (!val) {
                            _showGlobe();
                            return;
                        }
                        if (!val.startsWith("http"))
                            val = "https://" + val;
                        const domain = new URL(val).hostname;
                        if (domain && domain.includes(".")) {
                            _showSiteFavicon(domain);
                        } else {
                            _showGlobe();
                        }
                    } catch {
                        _showGlobe();
                    }
                }
                , 300);
            }
            );
            heroInput?.addEventListener("focus", _syncHeroPlaceholder);
            heroInput?.addEventListener("blur", _syncHeroPlaceholder);
            _syncHeroPlaceholder();

            heroForm?.addEventListener("submit", async (e) => {
                e.preventDefault();
                let url = heroInput?.value.trim();
                if (!url)
                    return;
                if (!url.startsWith("http"))
                    url = "https://" + url;

                try {
                    new URL(url);
                } catch {
                    return;
                }

                localStorage.setItem("pendingWebsiteUrl", url);

                try {
                    const domain = new URL(url).hostname;
                    if (domain) {
                        await Promise.race([getFavicon(domain), new Promise( (resolve) => setTimeout(resolve, 2000)), ]);
                    }
                } catch {}

                try {
                    const data = await window.fetchAuthMe();
                    if (data?.user?.hasCompletedOnboarding) {
                        window.location.href = "/app";
                    } else if (data?.user) {
                        window.location.href = "/setup";
                    }
                    if (data?.user)
                        return;
                } catch {}
                window.location.href = "/api/auth/google";
            }
            );
        </script>
        <script>
            (function() {
                var HERO_LEADS = [{
                    platform: "reddit",
                    source: "r/SideProject",
                    upvotes: 142,
                    comments: 23,
                    time: "2m ago",
                    score: 96,
                    starred: true,
                    title: "Tired of Ahrefs pricing, need an affordable rank tracker for my bootstrapped SaaS",
                }, {
                    platform: "hackernews",
                    source: "Hacker News",
                    upvotes: 89,
                    comments: 41,
                    time: "5m ago",
                    score: 93,
                    starred: false,
                    title: "Ask HN: Best AI tool to auto-edit long videos into YouTube Shorts?",
                }, {
                    platform: "bluesky",
                    source: "Bluesky",
                    upvotes: 34,
                    comments: 8,
                    time: "11m ago",
                    score: 91,
                    starred: true,
                    title: "Anyone found a podcast-to-short-video tool that actually looks polished?",
                }, {
                    platform: "twitter",
                    source: "@levelsio",
                    upvotes: 312,
                    comments: 47,
                    time: "13m ago",
                    score: 93,
                    starred: true,
                    title: "anyone know a good tool to monitor Reddit for mentions of your product? tired of doing it manually",
                }, {
                    platform: "reddit",
                    source: "r/Entrepreneur",
                    upvotes: 67,
                    comments: 19,
                    time: "14m ago",
                    score: 88,
                    starred: false,
                    title: "Managing 15 clients' social media by hand, what scheduling tool saves time?",
                }, {
                    platform: "reddit",
                    source: "r/webdev",
                    upvotes: 211,
                    comments: 47,
                    time: "22m ago",
                    score: 94,
                    starred: false,
                    title: "Our Vercel bill hit $800 last month, any cheaper edge hosting alternatives?",
                }, {
                    platform: "hackernews",
                    source: "Hacker News",
                    upvotes: 156,
                    comments: 62,
                    time: "31m ago",
                    score: 90,
                    starred: true,
                    title: "Show HN: Built a SaaS and can't figure out why users churn after 2 weeks",
                }, {
                    platform: "reddit",
                    source: "r/SEO",
                    upvotes: 78,
                    comments: 14,
                    time: "38m ago",
                    score: 87,
                    starred: false,
                    title: "Cold email open rates dropped to 8%, what outreach tool are you using?",
                }, {
                    platform: "bluesky",
                    source: "Bluesky",
                    upvotes: 28,
                    comments: 6,
                    time: "45m ago",
                    score: 89,
                    starred: true,
                    title: "Looking for a Notion alternative with actually good mobile support",
                }, {
                    platform: "twitter",
                    source: "@marc_louvion",
                    upvotes: 189,
                    comments: 28,
                    time: "49m ago",
                    score: 91,
                    starred: false,
                    title: "what's the best way to find people on Twitter asking for tools like yours? feels like there should be a product for this",
                }, {
                    platform: "reddit",
                    source: "r/indiehackers",
                    upvotes: 94,
                    comments: 31,
                    time: "52m ago",
                    score: 92,
                    starred: false,
                    title: "Just launched my SaaS, how do you find first 10 paying customers without ads?",
                }, {
                    platform: "hackernews",
                    source: "Hacker News",
                    upvotes: 203,
                    comments: 78,
                    time: "1h ago",
                    score: 95,
                    starred: true,
                    title: "Ask HN: Slack costs are exploding, what are teams using instead?",
                }, {
                    platform: "reddit",
                    source: "r/marketing",
                    upvotes: 55,
                    comments: 12,
                    time: "1h ago",
                    score: 86,
                    starred: false,
                    title: "Looking for Mailchimp alternative that doesn't charge by contact count",
                }, {
                    platform: "bluesky",
                    source: "Bluesky",
                    upvotes: 41,
                    comments: 9,
                    time: "2h ago",
                    score: 90,
                    starred: true,
                    title: "Is there a good Figma alternative for solo founders? Way too expensive now",
                }, {
                    platform: "twitter",
                    source: "@dannypostmaa",
                    upvotes: 97,
                    comments: 19,
                    time: "2h ago",
                    score: 88,
                    starred: false,
                    title: "looking for an affordable Intercom alternative for my indie SaaS, don't need enterprise features, just good live chat",
                }, ];

                var leadIdx = Math.floor(Math.random() * HERO_LEADS.length);
                var MAX = 3;
                var stack;

                function esc(s) {
                    var d = document.createElement("div");
                    d.textContent = s;
                    return d.innerHTML;
                }

                function buildHeroCard(lead) {
                    var card = document.createElement("div");
                    card.className = "hero-notif-card";
                    card.dataset.status = "new";

                    var r = 16
                      , sw = 3.5;
                    var c = 2 * Math.PI * r;
                    var offset = (1 - Math.min(lead.score, 100) / 100) * c;

                    var scoreRing = '<div class="score-ring-wrap" style="width:40px;height:40px">' + '<svg class="score-circle" width="40" height="40" viewBox="0 0 40 40" aria-label="Intent score: ' + lead.score + '">' + '<circle cx="20" cy="20" r="' + r + '" fill="none" stroke="var(--color-border)" stroke-width="' + sw + '"/>' + '<circle cx="20" cy="20" r="' + r + '" fill="none" stroke="var(--color-accent)" stroke-width="' + sw + '"' + ' stroke-dasharray="' + c.toFixed(2) + '" stroke-dashoffset="' + offset.toFixed(2) + '"' + ' stroke-linecap="round" transform="rotate(-90 20 20)"/>' + "</svg>" + '<div class="score-ring-icon">' + window.getPlatformIcon(lead.platform, 16) + "</div>" + "</div>";

                    var upSvg = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>';
                    var cmtSvg = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
                    var sf = lead.starred ? "var(--color-accent)" : "none";
                    var ss = lead.starred ? "var(--color-accent)" : "currentColor";
                    var starSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + sf + '" stroke="' + ss + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

                    card.innerHTML = scoreRing + '<div class="lead-info">' + '<div class="lead-title">' + esc(lead.title) + "</div>" + '<div class="lead-meta-row">' + '<span class="lead-stat">' + upSvg + " " + lead.upvotes + "</span>" + '<span class="lead-stat">' + cmtSvg + " " + lead.comments + "</span>" + '<span class="lead-subreddit">' + esc(lead.source) + "</span>" + "</div>" + "</div>" + '<div class="lead-right">' + '<span class="lead-time">' + lead.time + "</span>" + '<span class="lead-star-btn' + (lead.starred ? " starred" : "") + '" aria-hidden="true">' + starSvg + "</span>" + "</div>";

                    return card;
                }

                // Depth levels — newest (0) is on top, oldest (MAX-1) peeks at the bottom
                var LEVELS = [{
                    y: 0,
                    scale: 1.0,
                    opacity: 1,
                    z: 30
                }, {
                    y: 10,
                    scale: 0.96,
                    opacity: 1,
                    z: 20
                }, {
                    y: 18,
                    scale: 0.92,
                    opacity: 0.88,
                    z: 10
                }, ];
                var TR = "transform 0.52s cubic-bezier(0.34,1.0,0.64,1), opacity 0.42s ease";

                function applyLevel(card, level, animate) {
                    var L = LEVELS[level];
                    card.style.transition = animate ? TR : "none";
                    card.style.transform = "translateY(" + L.y + "px) scale(" + L.scale + ")";
                    card.style.opacity = L.opacity;
                    card.style.zIndex = L.z;
                }

                var cards = [];
                // [newest … oldest]

                function addCard(instant) {
                    if (!stack)
                        return;
                    var data = HERO_LEADS[leadIdx % HERO_LEADS.length];
                    leadIdx++;
                    var card = buildHeroCard(data);
                    stack.appendChild(card);

                    if (instant) {
                        // Place immediately at its natural depth position
                        applyLevel(card, cards.length, false);
                        cards.push(card);
                        return;
                    }

                    // New card enters from above, invisible
                    card.style.transition = "none";
                    card.style.transform = "translateY(-110%) scale(0.92)";
                    card.style.opacity = "0";
                    card.style.zIndex = "35";

                    // Exit the oldest if at max depth
                    if (cards.length >= MAX) {
                        var oldest = cards.pop();
                        oldest.style.transition = "transform 0.42s ease, opacity 0.35s ease";
                        oldest.style.transform = "translateY(36px) scale(0.88)";
                        oldest.style.opacity = "0";
                        setTimeout(function() {
                            if (oldest.parentNode)
                                oldest.parentNode.removeChild(oldest);
                        }, 460);
                    }

                    // Shift existing cards one level deeper
                    for (var i = cards.length - 1; i >= 0; i--) {
                        applyLevel(cards[i], i + 1, true);
                    }

                    // Register new card as the newest
                    cards.unshift(card);

                    // Animate new card into level-0 position
                    requestAnimationFrame(function() {
                        requestAnimationFrame(function() {
                            applyLevel(card, 0, true);
                        });
                    });
                }

                function init() {
                    if (typeof window.getPlatformIcon !== "function") {
                        setTimeout(init, 50);
                        return;
                    }
                    stack = document.getElementById("hero-notif-stack");
                    if (!stack)
                        return;
                    // Seed initial stack instantly (oldest first so newest ends up at index 0)
                    for (var i = 0; i < MAX; i++)
                        addCard(true);
                    setTimeout(function() {
                        setInterval(addCard, 2800);
                    }, 1600);
                }

                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", init);
                } else {
                    init();
                }
            }
            )();
        </script>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447" integrity="sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==" data-cf-beacon='{"version":"2024.11.0","token":"cd8fafdfe57549a394d3ef91f691dcc3","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
    </body>
</html>


css code
::view-transition-old(root),::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal
}

::view-transition-old(root) {
    z-index: 1
}

::view-transition-new(root) {
    z-index: 9999
}

:root {
    --blue-50: #EFF6FF;
    --blue-100: #DBEAFE;
    --blue-200: #BFDBFE;
    --blue-300: #93C5FD;
    --blue-400: #60A5FA;
    --blue-500: #3B82F6;
    --blue-600: #2563EB;
    --blue-700: #1D4ED8;
    --blue-800: #1E40AF;
    --blue-900: #1E3A8A;
    --slate-0: #FFFFFF;
    --slate-50: #F7F9FC;
    --slate-100: #EFF3F8;
    --slate-200: #E1E7EF;
    --slate-300: #C8D3DF;
    --slate-400: #8D9EAD;
    --slate-500: #64748B;
    --slate-600: #475569;
    --slate-700: #334155;
    --slate-800: #1E293B;
    --slate-900: #0D1421;
    --color-bg-base: #f5f5f7;
    --color-bg-primary: #f6f7f9;
    --color-bg-secondary: var(--slate-100);
    --color-bg-card: var(--slate-0);
    --color-bg-card-rgb: 255, 255, 255;
    --color-bg-card-hover: var(--slate-50);
    --color-bg-modal: var(--slate-0);
    --color-bg-popup: var(--slate-0);
    --color-bg-sidebar: var(--slate-0);
    --color-bg-subtle: var(--slate-100);
    --color-border: var(--slate-200);
    --color-border-strong: var(--slate-300);
    --color-border-focus: var(--blue-300);
    --color-badge-bg: var(--blue-100);
    --color-text-primary: #32404f;
    --color-text-secondary: var(--slate-500);
    --color-text-tertiary: var(--slate-400);
    --color-text-disabled: var(--slate-300);
    --color-text-on-accent: #FFFFFF;
    --color-accent: #2563eb;
    --color-accent-hover: #1d4ed8;
    --color-accent-light: rgba(37, 99, 235, .07);
    --color-accent-glow: rgba(37, 99, 235, .12);
    --color-warning-text: #b45309;
    --color-success: #059669;
    --color-success-bg: #ECFDF5;
    --color-success-border: #A7F3D0;
    --color-error: #DC2626;
    --color-error-bg: #FEF2F2;
    --color-error-border: #FECACA;
    --color-warning: #D97706;
    --color-warning-bg: #FFFBEB;
    --gradient-primary: var(--color-accent);
    --gradient-blue-subtle: linear-gradient(135deg, var(--blue-50) 0%, var(--slate-0) 100%);
    --gradient-glow: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, .07) 0%, transparent 100%);
    --font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-size-xs: .6875rem;
    --font-size-sm: .8125rem;
    --font-size-base: .9375rem;
    --font-size-lg: 1.0625rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;
    --space-1: .25rem;
    --space-2: .5rem;
    --space-3: .75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --radius-sm: .375rem;
    --radius-md: .5rem;
    --radius-lg: .625rem;
    --radius-xl: .875rem;
    --radius-2xl: 1.25rem;
    --radius-full: 9999px;
    --shadow-sm: 0 1px 3px rgba(13, 20, 33, .06), 0 1px 2px rgba(13, 20, 33, .04);
    --shadow-md: 0 4px 8px rgba(13, 20, 33, .07), 0 2px 4px rgba(13, 20, 33, .04);
    --shadow-lg: 0 10px 24px rgba(13, 20, 33, .08), 0 4px 8px rgba(13, 20, 33, .04);
    --shadow-xl: 0 20px 40px rgba(13, 20, 33, .09), 0 8px 16px rgba(13, 20, 33, .04);
    --shadow-focus: 0 0 0 1px rgba(96, 165, 250, .45), 0 8px 20px rgba(37, 99, 235, .08);
    --shadow-blue: 0 4px 14px rgba(37, 99, 235, .22);
    --shadow-glow: 0 0 40px rgba(37, 99, 235, .08);
    --sidebar-width: 240px;
    --sidebar-collapsed-width: 64px;
    --header-height-mobile: 56px;
    --transition-fast: .1s ease;
    --transition-base: .18s ease;
    --transition-slow: .28s ease;
    * {
        scrollbar-width: thin
    }
}

input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--color-text-primary);
    transition: background-color 5000s ease-in-out 0s
}

[data-theme=dark] input:-webkit-autofill,[data-theme=dark] input:-webkit-autofill:hover,[data-theme=dark] input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-bg-base) inset
}

[data-theme=dark] {
    color-scheme: dark;
    --color-bg-base: #141414;
    --color-bg-primary: #0c0c0f;
    --color-bg-secondary: #161619;
    --color-bg-card: #1a1a1a;
    --color-bg-card-rgb: 26, 26, 26;
    --color-bg-card-hover: #252529;
    --color-bg-modal: #161619;
    --color-bg-popup: #161619;
    --color-bg-sidebar: #0c0c0f;
    --color-bg-subtle: #161619;
    --color-border: #2a2a30;
    --color-border-strong: #3a3a42;
    --color-badge-bg: rgba(37, 99, 235, .2);
    --color-text-primary: #e5e7eb;
    --color-text-secondary: #9ca3af;
    --color-text-tertiary: #6b7280;
    --color-text-disabled: #3a3a42;
    --color-accent: #2563eb;
    --color-accent-hover: #1d4ed8;
    --color-accent-light: rgba(37, 99, 235, .2);
    --color-accent-glow: rgba(37, 99, 235, .2);
    --color-warning-text: #fbbf24;
    --color-success-bg: rgba(5, 150, 105, .15);
    --color-success-border: rgba(5, 150, 105, .25);
    --color-error-bg: rgba(220, 38, 38, .15);
    --color-error-border: rgba(220, 38, 38, .25);
    --color-warning-bg: rgba(217, 119, 6, .15);
    --gradient-blue-subtle: linear-gradient(135deg, rgba(37, 99, 235, .12) 0%, #161619 100%);
    --gradient-glow: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, .1) 0%, transparent 100%);
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, .4), 0 1px 2px rgba(0, 0, 0, .3);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, .4), 0 2px 4px rgba(0, 0, 0, .3);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, .5), 0 4px 8px rgba(0, 0, 0, .3);
    --shadow-xl: 0 16px 40px rgba(0, 0, 0, .5), 0 8px 16px rgba(0, 0, 0, .3);
    --shadow-focus: 0 0 0 1px rgba(147, 197, 253, .55), 0 10px 24px rgba(37, 99, 235, .18);
    --shadow-blue: 0 4px 14px rgba(37, 99, 235, .35);
    --shadow-glow: 0 0 40px rgba(37, 99, 235, .12)
}

[data-theme=dark] .badge-verified {
    background: #05966933;
    color: #34d399
}

[data-theme=dark] .pp-save-badge {
    background: #22c55e26;
    color: #4ade80
}

[data-theme=dark] .pp-coupon-left {
    background: #22c55e26
}

[data-theme=dark] .pp-coupon-right {
    background: #22c55e33
}

[data-theme=dark] .pp-coupon-right:before {
    border-color: #4ade8040
}

[data-theme=dark] .pp-coupon-amount,[data-theme=dark] .pp-coupon-detail,[data-theme=dark] .pp-coupon-label,[data-theme=dark] .pp-coupon-code {
    color: #4ade80
}

[data-theme=dark] .lead-card[data-status=new] {
    background: var(--color-bg-card)
}

[data-theme=dark] .lead-card[data-status=new] .lead-title {
    color: #e5e7eb
}

[data-theme=dark] .lead-card[data-status=new] .lead-meta-row {
    color: #9ca3af
}

td {
    border-bottom: 1px solid var(--color-border)
}

.tt {
    position: relative;
    display: inline-flex;
    align-items: center
}

.tt-block {
    display: block
}

.tt:not([data-tip]):after,.tt:not([data-tip]):before,.tt[data-tip=""]:after,.tt[data-tip=""]:before {
    display: none
}

.tt:after {
    content: attr(data-tip);
    position: absolute;
    background: var(--color-bg-card-hover);
    color: var(--color-text-secondary);
    padding: 5px 10px;
    border-radius: var(--radius-md);
    font-size: 12px;
    font-family: var(--font-family);
    font-weight: 500;
    line-height: 1.4;
    white-space: normal;
    max-width: 200px;
    text-align: center;
    text-transform: none;
    pointer-events: none;
    opacity: 0;
    z-index: 2500;
    box-shadow: 0 2px 8px #0000002e;
    transition: opacity .08s ease 0s,transform .08s ease 0s
}

.tt.tt-active:after,.tt.tt-active:before {
    opacity: 1;
    transition: none
}

.tt-top.tt-active:after {
    transform: translate(-50%) translateY(0)
}

.tt-bottom.tt-active:after {
    transform: translate(-50%) translateY(0)
}

.tt-right.tt-active:after {
    transform: translateY(-50%) translate(0)
}

.tt-left.tt-active:after {
    transform: translateY(-50%) translate(0)
}

.tt:hover:after {
    opacity: 1;
    transition: opacity .22s cubic-bezier(.16,1,.3,1) .4s,transform .22s cubic-bezier(.16,1,.3,1) .4s
}

.tt-top:after {
    bottom: calc(100% + 7px);
    left: 50%;
    transform: translate(-50%) translateY(4px)
}

.tt-bottom:after {
    top: calc(100% + 7px);
    left: 50%;
    transform: translate(-50%) translateY(-4px)
}

.tt-right:after {
    left: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%) translate(-4px)
}

.tt-left:after {
    right: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%) translate(4px)
}

.tt-top:hover:after {
    transform: translate(-50%) translateY(0)
}

.tt-bottom:hover:after {
    transform: translate(-50%) translateY(0)
}

.tt-right:hover:after {
    transform: translateY(-50%) translate(0)
}

.tt-left:hover:after {
    transform: translateY(-50%) translate(0)
}

.tt:before {
    content: "";
    position: absolute;
    border: 5px solid transparent;
    pointer-events: none;
    opacity: 0;
    z-index: 2501;
    transition: opacity .08s ease 0s,transform .08s ease 0s
}

.tt:hover:before {
    opacity: 1;
    transition: opacity .22s cubic-bezier(.16,1,.3,1) .4s,transform .22s cubic-bezier(.16,1,.3,1) .4s
}

.tt-top:before {
    bottom: 100%;
    left: 50%;
    transform: translate(-50%) translateY(4px);
    border-top-color: var(--color-bg-card-hover);
    border-bottom-width: 2px
}

.tt-bottom:before {
    top: 100%;
    left: 50%;
    transform: translate(-50%) translateY(-4px);
    border-bottom-color: var(--color-bg-card-hover);
    border-top-width: 2px
}

.tt-right:before {
    left: 100%;
    top: 50%;
    transform: translateY(-50%) translate(1px);
    border-right-color: var(--color-bg-card-hover);
    border-left-width: 5px
}

.tt-left:before {
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translate(4px);
    border-left-color: var(--color-bg-card-hover);
    border-right-width: 2px
}

.tt-top:hover:before {
    transform: translate(-50%) translateY(0)
}

.tt-bottom:hover:before {
    transform: translate(-50%) translateY(0)
}

.tt-right:hover:before {
    transform: translateY(-50%) translate(0)
}

.tt-left:hover:before {
    transform: translateY(-50%) translate(0)
}

.tt-nav {
    overflow: visible;
    z-index: 5
}

.sidebar:not(.collapsed) .tt-nav:after,.sidebar:not(.collapsed) .tt-nav:before {
    display: none
}

.sidebar.collapsed {
    overflow: visible;
    position: relative;
    z-index: 200
}

.sidebar.collapsed .sidebar-header,.sidebar.collapsed .sidebar-content,.sidebar.collapsed .sidebar-nav,.sidebar.collapsed .nav-section,.sidebar.collapsed .sidebar-footer,.sidebar.collapsed .sidebar-user-menu {
    overflow: visible
}

*,*:before,*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color-scheme: light;
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) var(--color-bg-base);
    background-color: none
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px
}

::-webkit-scrollbar-track {
    background: var(--color-bg-base)
}

::-webkit-scrollbar-corner {
    background: var(--color-bg-base)
}

::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 5px;
    border: 2px solid var(--color-bg-base)
}

::-webkit-scrollbar-thumb:hover {
    background: var(--color-border-strong)
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--color-text-primary);
    min-height: 100vh;
    overflow-x: hidden;
    overscroll-behavior-x: none;
    background: var(--color-bg-base)
}

html.dashboard-shell,body.dashboard-shell {
    height: 100%;
    overflow: hidden;
    overscroll-behavior: none
}

body.mobile-sidebar-open {
    overflow: hidden;
    touch-action: none
}

.auth-page {
    background: var(--color-bg-base)
}

.app-container {
    display: flex;
    visibility: hidden;
    min-height: 100vh;
    height: 100vh;
    min-height: 100dvh;
    height: 100dvh;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    background: var(--color-bg-card)
}

.app-container.auth-ready {
    visibility: visible
}

@media(max-width: 768px) {
    .app-container {
        flex-direction:column
    }
}

.app-main-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden
}

.app-topbar {
    display: flex;
    align-items: center;
    padding: 0 16px 0 0;
    height: 48px;
    flex-shrink: 0;
    background: var(--color-bg-card);
    gap: 10px
}

.topbar-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--color-text-secondary);
    cursor: pointer;
    flex-shrink: 0;
    transition: background .15s ease,color .15s ease
}

.topbar-icon-btn:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.topbar-divider {
    width: 1px;
    height: 18px;
    background: var(--color-border);
    flex-shrink: 0
}

.topbar-breadcrumb {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    white-space: nowrap
}

.pseo-breadcrumb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin-bottom: 1rem
}

.pseo-breadcrumb a {
    color: var(--color-accent);
    text-decoration: none
}

.pseo-breadcrumb a:hover {
    text-decoration: underline
}

.topbar-spacer {
    flex: 1
}

.topbar-filter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all .15s ease
}

.topbar-filter-btn:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.topbar-filter-btn.active {
    background: var(--color-badge-bg);
    border-color: var(--color-accent);
    color: var(--color-accent)
}

.leads-controls {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    flex-shrink: 0
}

.leads-controls-end {
    display: flex;
    align-items: center;
    gap: 2px
}

.leads-search-inline {
    flex: 1;
    min-width: 0
}

.leads-control-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: none;
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    cursor: pointer;
    font-family: var(--font-family);
    transition: color .15s,background .15s
}

.leads-control-btn:hover,.leads-control-btn.active {
    color: var(--color-text-primary);
    background: var(--color-bg-base)
}

.sort-group {
    display: flex;
    align-items: center;
    gap: 6px
}

.sort-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: .04em;
    white-space: nowrap
}

.sort-toggle {
    display: flex;
    align-items: center;
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 3px;
    gap: 2px
}

.sort-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all .15s ease
}

.sort-btn:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    box-shadow: 0 1px 3px #0000001a
}

[data-theme=dark] .sort-btn:hover,[data-theme=dark] .sort-btn.active,[data-theme=dark] .leads-control-btn:hover,[data-theme=dark] .leads-control-btn.active,[data-theme=dark] .filter-chip.active,[data-theme=dark] .filter-chip:hover,[data-theme=dark] .panel-nav-icon-btn:hover:not(:disabled),[data-theme=dark] .panel-back-btn:hover,[data-theme=dark] .time-pill.active,[data-theme=dark] .time-pill:hover {
    background: var(--color-bg-card-hover);
    box-shadow: 0 1px 3px #0000001a
}

.sort-btn.active {
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    box-shadow: 0 1px 3px #0000001a
}

.sort-btn.active svg {
    stroke: var(--color-text-primary)
}

.sidebar {
    transition: width .25s ease
}

.sidebar.collapsed {
    width: 60px;
    min-width: 60px
}

.sidebar.collapsed .logo-text,.sidebar.collapsed .badge,.sidebar.collapsed .nav-section-title,.sidebar.collapsed .nav-label,.sidebar.collapsed .nav-external-icon,.sidebar.collapsed .user-details,.sidebar.collapsed #logout-btn-sidebar {
    display: none
}

.sidebar.collapsed .sidebar-header {
    justify-content: center;
    padding: 16px 0
}

.sidebar.collapsed .sidebar-logo-container {
    justify-content: center
}

.sidebar.collapsed .nav-item {
    justify-content: center;
    padding: 10px 0;
    border-radius: var(--radius-md);
    position: relative
}

.sidebar.collapsed .nav-icon {
    margin: 0
}

.sidebar.collapsed .nav-badge:not(.hidden) {
    display: inline-flex;
    position: absolute;
    top: 2px;
    right: 1px;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 999px;
    background: var(--color-accent);
    color: #fff;
    box-shadow: 0 0 0 2px var(--color-bg-card);
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    z-index: 2;
    border: none
}

[data-theme=dark] .sidebar.collapsed .nav-badge:not(.hidden) {
    background: var(--color-accent);
    color: #fff;
    border: none;
    box-shadow: 0 0 0 2px var(--color-bg-card)
}

.sidebar.collapsed .user-profile-mini {
    justify-content: center;
    padding: 12px 0
}

.sidebar.collapsed .user-avatar-img,.sidebar.collapsed .user-avatar-placeholder {
    cursor: pointer
}

.sidebar.collapsed .sdd-chevron {
    display: none
}

.sidebar.collapsed .sidebar-user-dropdown {
    left: calc(100% + 8px);
    bottom: 0;
    right: auto;
    min-width: 220px
}

.sidebar.collapsed .sidebar-content,.sidebar.collapsed .sidebar-nav,.sidebar.collapsed .nav-section {
    overflow: visible;
    padding: var(--space-1)
}

@media(max-width: 768px) {
    .topbar-icon-btn,.topbar-divider {
        display:none
    }
}

.page-header {
    margin-bottom: var(--space-6)
}

.page-header-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 4px
}

.page-header-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.settings-tabs {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: var(--space-8)
}

.settings-tab {
    padding: 8px 16px;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    transition: all .15s ease;
    margin-bottom: -1px
}

.settings-tab:hover {
    color: var(--color-text-primary)
}

.settings-tab.active {
    color: var(--color-text-primary);
    border-bottom-color: var(--color-text-primary)
}

.settings-section {
    margin-bottom: var(--space-8)
}

.settings-section-header {
    margin-bottom: var(--space-3)
}

.settings-section-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 2px
}

.settings-section-desc {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.settings-rows-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden
}

.settings-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    gap: var(--space-4);
    border-bottom: 1px solid var(--color-border)
}

.settings-row:last-child {
    border-bottom: none
}

.settings-row-info {
    flex: 1;
    min-width: 0
}

.settings-row-label {
    font-size: var(--font-size-base);
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 2px
}

.settings-row-subdesc {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.settings-row-value-group {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    flex-direction: row
}

.settings-row-value {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.badge-verified {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    background: #dcfce7;
    color: #166534;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 600
}

.pro-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    background: var(--color-accent-light);
    color: var(--color-accent);
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .05em;
    line-height: 1
}

.upgrade-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    color: var(--color-accent);
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .05em;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .15s ease;
    text-transform: uppercase
}

.upgrade-badge:not(.tt):hover {
    opacity: .8
}

.plan-gate-wrapper {
    position: relative;
    width: 100%
}

.plan-gate-wrapper.plan-locked {
    cursor: pointer
}

.plan-gate-wrapper.plan-locked .settings-rows-card,.plan-gate-wrapper.plan-locked .detail-section-hint,.plan-gate-wrapper.plan-locked .prompt-list {
    opacity: .5;
    filter: grayscale(.8);
    pointer-events: none;
    user-select: none;
    transition: all .3s ease
}

.toggle-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 45px;
    height: 23px;
    flex-shrink: 0
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute
}

.toggle-slider {
    position: absolute;
    inset: 0;
    background: var(--color-bg-base);
    border-radius: 99px;
    transition: background .2s ease;
    border: 1px solid var(--color-border)
}

.toggle-slider:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 17px;
    left: 2px;
    top: 2px;
    background: #fff;
    border-radius: var(--radius-md);
    transition: transform .2s ease;
    box-shadow: 0 1px 3px #0003
}

.toggle-input:checked+.toggle-slider {
    background: var(--color-accent )
}

.toggle-input:checked+.toggle-slider:before {
    transform: translate(18px)
}

.toggle-input:focus-visible+.toggle-slider {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px
}

.website-status-toggle {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--color-text-secondary)
}

.filter-bar {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 10px 12px;
    flex-shrink: 0;
    background: var(--color-bg-base)
}

.filter-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: .04em;
    white-space: nowrap;
    min-width: 64px;
    flex-shrink: 0
}

.content-split {
    flex: 1;
    display: flex;
    overflow: hidden;
    margin: 0 var(--space-4) var(--space-4) 0
}

.content-split.panel-closed .leads-pane {
    width: 100%;
    min-width: 0
}

.content-split.panel-closed .detail-pane {
    display: none
}

.sidebar {
    width: var(--sidebar-width);
    background: var(--color-bg-card);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    z-index: 50;
    flex-shrink: 0
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-4)
}

.sidebar-header {
    padding: var(--space-6);
    border-bottom: 1px solid transparent
}

.sidebar-content {
    flex: 1;
    min-height: 0;
    padding: var(--space-4);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    justify-content: space-between
}

.sidebar-footer {
    padding: var(--space-4);
    background: var( --color-bg-tertiary );
    overflow: visible;
    padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom,0px))
}

.nav-section-title {
    font-size: var(--font-size-xs);
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-2);
    padding-left: var(--space-3);
    letter-spacing: .05em
}

.nav-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-2) var(--space-3);
    color: var(--color-text-secondary);
    text-decoration: none;
    border-radius: var(--radius-lg);
    transition: all var(--transition-fast);
    font-weight: 500;
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-1)
}

.nav-item-button {
    width: 100%;
    border: none;
    background: transparent;
    font-family: inherit;
    text-align: left;
    cursor: pointer
}

.nav-item:hover,.nav-item.active {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.nav-item.active svg {
    stroke: var(--color-accent)
}

.nav-icon {
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: .8;
    stroke: var(--color-text-primary)
}

.nav-badge {
    margin-left: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--color-accent);
    color: #fff;
    border-radius: 99px;
    font-size: 11px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: none
}

[data-theme=dark] .nav-badge {
    background: var(--color-accent);
    color: #fff;
    border: none
}

.nav-external-icon {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    opacity: 0;
    transition: opacity .2s ease;
    color: var(--color-text-tertiary)
}

.nav-item:hover .nav-external-icon {
    opacity: .6
}

.sidebar-user-menu {
    position: relative
}

.sidebar-user-dropdown {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    right: 0;
    border: 1px solid var(--color-border);
    background: var(--color-bg-card);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg, 0 8px 24px rgba(0,0,0,.12));
    z-index: 300;
    overflow: hidden;
    min-width: 200px;
    padding: var(--space-3)
}

.sdd-header {
    padding: 12px 14px 10px;
    display: flex;
    flex-direction: column;
    gap: 2px
}

.sdd-name {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary)
}

.sdd-email {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    word-break: break-all
}

.sdd-item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 14px;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-family);
    transition: background var(--transition-fast),color var(--transition-fast)
}

.sdd-item:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary);
    border-radius: var(--radius-lg)
}

.sdd-chevron {
    margin-left: auto;
    flex-shrink: 0;
    opacity: .5;
    transition: transform .2s ease
}

@keyframes theme-spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.sdd-theme-icon {
    display: flex;
    align-items: center;
    flex-shrink: 0
}

.sdd-theme-icon.spin {
    animation: theme-spin .35s ease-out
}

.user-profile-mini {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: 100%;
    padding: 6px 8px;
    border: none;
    border-radius: var(--radius-lg);
    background: transparent;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: background var(--transition-fast)
}

.user-profile-mini:hover,.user-profile-mini.is-open {
    background: var(--color-bg-card-hover)
}

.user-profile-mini.is-open .sdd-chevron {
    transform: rotate(180deg)
}

.user-avatar-placeholder {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--color-accent);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: .9rem
}

.user-avatar-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover
}

.user-details {
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
    align-items: flex-start;
    gap: 2px
}

.user-name {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.user-email-mini {
    display: block;
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.plan-badge {
    display: inline;
    color: var(--color-accent);
    font-size: 11px;
    font-weight: 600;
    font-family: var(--font-family);
    text-decoration: none;
    white-space: nowrap
}

.plan-badge--sm {
    font-size: 10px
}

.plan-badge--lg {
    font-size: 12px
}

.plan-badge--trial,.plan-badge--admin {
    color: var(--color-accent)
}

.plan-badge--free {
    color: var(--color-text-tertiary)
}

.sidebar-trial-info {
    transition: opacity .2s ease
}

.sidebar-trial-upgrade:hover {
    text-decoration: underline
}

.sidebar.collapsed .sidebar-usage {
    display: none
}

.mobile-header {
    display: none;
    height: var(--header-height-mobile);
    padding: 0 var(--space-4);
    align-items: center;
    justify-content: space-between;
    background: #0a0a0f00;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    backdrop-filter: blur(20px);
    box-sizing: border-box;
    flex-shrink: 0
}

.mobile-header .logo {
    display: flex;
    align-items: center;
    gap: var(--space-2)
}

.mobile-header .logo-text {
    font-size: 1.25rem
}

#mobile-menu-btn .icon-close {
    display: none
}

#mobile-menu-btn .icon-menu,#mobile-menu-btn.open .icon-close {
    display: block
}

#mobile-menu-btn.open .icon-menu {
    display: none
}

@media(max-width: 768px) {
    .sidebar {
        display:flex;
        position: fixed;
        top: 0;
        left: 0;
        width: min(var(--sidebar-width),calc(100vw - 28px));
        max-width: calc(100vw - 28px);
        height: 100svh;
        height: 100dvh;
        z-index: 1001;
        transform: translate(-100%);
        transition: transform var(--transition-base),visibility var(--transition-base);
        visibility: hidden
    }

    .sidebar.open {
        transform: translate(0);
        visibility: visible;
        box-shadow: var(--shadow-xl);
        background: rgba(var(--color-bg-card-rgb),.7);
        backdrop-filter: blur(20px) saturate(1.8);
        -webkit-backdrop-filter: blur(20px) saturate(1.8)
    }

    .mobile-header {
        display: flex;
        height: calc(var(--header-height-mobile) + env(safe-area-inset-top,0px));
        padding-top: env(safe-area-inset-top,0px)
    }
}

.header {
    display: none
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--space-2)
}

.logo-icon {
    font-size: var(--font-size-2xl)
}

.logo-icon.large {
    font-size: 3rem
}

.logo-text {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary)
}

.user-info {
    display: flex;
    align-items: center;
    gap: var(--space-4)
}

.user-email {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden
}

.main-content-body {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: clip;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    overscroll-behavior-x: none;
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    background: var(--color-bg-base);
    margin: 0 var(--space-4) var(--space-4) 0
}

.content-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto
}

.todo-container,.settings-card,.stat-card,.auth-card,.modal-content,.dropdown-menu {
    background: var(--color-bg-card)!important;
    box-shadow: var(--shadow-lg);
    backdrop-filter: none
}

.todo-container {
    border-radius: var(--radius-2xl);
    padding: var(--space-8)
}

.add-todo-form {
    margin-bottom: var(--space-6)
}

.input-wrapper {
    display: flex;
    gap: var(--space-3)
}

.todo-input {
    flex: 1;
    padding: var(--space-4) var(--space-5);
    font-size: var(--font-size-base);
    font-family: var(--font-family);
    color: var(--color-text-primary);
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    outline: none;
    transition: all var(--transition-base)
}

.todo-input::placeholder {
    color: var(--color-text-tertiary)
}

.todo-input:focus {
    border-color: var(--blue-400);
    box-shadow: var(--shadow-focus)
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: .5rem 1rem;
    font-size: var(--font-size-sm);
    font-weight: 500;
    font-family: var(--font-family);
    border-radius: var(--radius-lg);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all var(--transition-base);
    white-space: nowrap;
    text-decoration: none;
    line-height: normal
}

.btn-sm {
    padding: .3125rem .75rem;
    font-size: var(--font-size-xs)
}

.btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--font-size-base);
    gap: var(--space-3)
}

.btn-xs {
    padding: 4px 8px;
    font-size: 11px;
    gap: 4px;
    height: 26px
}

.btn-primary {
    background: var(--color-accent);
    color: #fff;
    border-color: transparent;
    font-weight: 600;
    letter-spacing: -.01em
}

.btn-primary:hover:not(:disabled) {
    background: var(--color-accent-hover)
}

.btn-primary:active:not(:disabled) {
    background: var(--blue-800);
    box-shadow: var(--shadow-sm);
    transform: translateY(1px)
}

.btn-secondary {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-weight: 500;
    box-shadow: 0 1px 3px #0000001a
}

.btn-secondary:hover:not(:disabled) {
    background: var(--color-bg-base)
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--color-border-strong);
    color: var(--color-text-primary);
    font-weight: 500
}

.btn-outline:hover:not(:disabled) {
    background: var(--color-bg-card-hover);
    border-color: var(--color-text-tertiary)
}

.btn-ghost {
    background: transparent;
    border: 1px solid transparent;
    color: var(--color-text-secondary);
    font-weight: 500
}

.btn-ghost:hover:not(:disabled) {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.btn-danger {
    background: var(--color-error-bg);
    color: var(--color-error);
    border-color: var(--color-error-border)
}

.btn-danger:hover:not(:disabled) {
    background: var(--color-error);
    color: #fff;
    border-color: var(--color-error)
}

.btn-google {
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    font-weight: 500;
    gap: 10px;
    background: none
}

.btn-google:hover:not(:disabled) {
    background: var(--color-bg-card-hover);
    border-color: var(--color-border-strong)
}

.btn-icon {
    font-size: var(--font-size-lg);
    line-height: 1;
    background: none;
    border: none;
    padding: 0
}

.btn-full {
    width: 100%
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-fast)
}

a.btn,a.btn:hover {
    text-decoration: none!important
}

.logo-link:hover,.nav-item:hover {
    text-decoration: none
}

.add-btn {
    padding: var(--space-4) var(--space-6)
}

.detail-add-btn,.detail-add-sub-btn {
    border: 1px solid var(--color-border)
}

.todo-stats {
    display: flex;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-border)
}

.stat {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.stat.secondary {
    color: var(--color-text-tertiary)
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3)
}

.todo-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    animation: slideIn var(--transition-slow) ease-out
}

@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.todo-item:hover {
    background: var(--color-bg-card-hover)
}

.todo-item.completed {
    opacity: .6
}

.todo-item.completed .todo-title {
    text-decoration: line-through;
    color: var(--color-text-tertiary)
}

.todo-checkbox {
    position: relative;
    width: 22px;
    height: 22px;
    flex-shrink: 0
}

.todo-checkbox input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1
}

.todo-checkbox .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    background: transparent;
    transition: all var(--transition-base)
}

.todo-checkbox input:checked+.checkmark {
    background: var(--gradient-primary);
    border-color: transparent
}

.todo-checkbox .checkmark:after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    font-size: 12px;
    color: #fff;
    transition: all var(--transition-base)
}

.todo-checkbox input:checked+.checkmark:after {
    transform: translate(-50%,-50%) scale(1)
}

.todo-title {
    flex: 1;
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
    word-break: break-word
}

.todo-actions {
    display: flex;
    gap: var(--space-2);
    opacity: 0;
    transition: opacity var(--transition-base)
}

.todo-item:hover .todo-actions {
    opacity: 1
}

.todo-delete-btn {
    padding: var(--space-2);
    font-size: var(--font-size-lg);
    background: transparent;
    border: none;
    color: var(--color-text-tertiary);
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all var(--transition-base)
}

.todo-delete-btn:hover {
    background: var(--color-error-bg);
    color: var(--color-error)
}

.empty-state {
    text-align: center;
    padding: var(--space-12) var(--space-6);
    color: var(--color-text-tertiary);
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl)
}

.loading-state {
    color: var(--color-text-tertiary);
    border-radius: var(--radius-2xl);
    overflow: clip
}

.empty-icon {
    font-size: 4rem;
    margin-bottom: var(--space-4);
    opacity: .5
}

.empty-state h3 {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-2)
}

.hidden {
    display: none!important
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    margin: 0 auto var(--space-4);
    animation: spin .8s linear infinite
}

.skeleton {
    background: linear-gradient(90deg,var(--color-bg-base) 0%,var(--color-bg-card-hover) 50%,var(--color-bg-primary) 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    border-radius: var(--radius-full)
}

@keyframes shimmer {
    0% {
        background-position: 200% 0
    }

    to {
        background-position: -200% 0
    }
}

.skeleton-todo-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-3)
}

.skeleton-checkbox {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: var(--radius-md)
}

.skeleton-text {
    height: 16px;
    border-radius: var(--radius-sm)
}

.skeleton-text.short {
    max-width: 60%
}

.skeleton-text.medium {
    max-width: 40%
}

.skeleton-text.long {
    max-width: 80%
}

.skeleton-stat-card {
    background: var(--slate-50);
    border: 1px solid var(--slate-200);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: var(--space-3)
}

.skeleton-stat-label {
    height: 14px;
    width: 80px;
    border-radius: var(--radius-sm)
}

.skeleton-stat-value {
    height: 32px;
    width: 60%;
    border-radius: var(--radius-md)
}

.skeleton-table-cell {
    padding: .25rem 0
}

.skeleton-table-cell-content {
    height: 16px;
    width: 80%;
    border-radius: var(--radius-sm)
}

.skeleton-table-cell-content.small {
    width: 50px
}

.skeleton-table-cell-content.medium {
    width: 120px
}

.skeleton-table-cell-content.large {
    width: 150px
}

.skeleton-profile {
    display: flex;
    align-items: center;
    gap: 12px
}

.skeleton-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0
}

.skeleton-profile-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    flex: 1
}

.skeleton-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 0
}

.skeleton-info-label {
    height: 14px;
    width: 80px;
    border-radius: var(--radius-sm)
}

.skeleton-info-value {
    height: 14px;
    width: 120px;
    border-radius: var(--radius-sm)
}

.footer {
    text-align: center;
    padding: var(--space-6);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm);
    border-top: 1px solid var(--color-border)
}

.cf-logo {
    color: var(--color-accent)
}

.auth-container {
    min-height: 89vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-6);
    position: relative;
    overflow: hidden;
    flex-direction: column
}

.auth-card {
    width: 100%;
    max-width: 400px;
    box-shadow: none;
    border-radius: var(--radius-2xl);
    padding: var(--space-10);
    position: relative;
    z-index: 1
}

.auth-logo {
    text-align: center;
    margin-bottom: var(--space-6);
    z-index: 2
}

.auth-tagline {
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm);
    margin-top: var(--space-2)
}

.auth-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-5)
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2)
}

.form-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    text-align: left
}

.form-input {
    padding: var(--space-2);
    font-size: var(--font-size-sm);
    font-family: var(--font-family);
    color: var(--color-text-primary);
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    outline: none;
    transition: all var(--transition-base)
}

.form-input::placeholder {
    color: var(--color-text-tertiary)
}

.form-input:focus {
    border-color: var(--color-border-focus);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-focus)
}

.form-hint {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.error-message {
    padding: var(--space-3) var(--space-4);
    background: var(--color-error-bg);
    border: 1px solid var(--color-error);
    border-radius: var(--radius-md);
    color: var(--color-error);
    font-size: var(--font-size-sm);
    text-align: center
}

.auth-footer {
    text-align: center;
    margin-top: var(--space-6);
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm)
}

.auth-link {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--transition-base)
}

.auth-link:hover {
    color: var(--color-accent-hover)
}

.auth-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0
}

.auth-bg-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle,rgba(37,99,235,.14) 1px,transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)
}

.btn-loader {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,.3);
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin .6s linear infinite;
    flex-shrink: 0
}

.btn .btn-loader {
    margin-left: 8px
}

.btn:disabled .btn-loader {
    opacity: .8
}

@media(max-width: 640px) {
    .header-content {
        padding:var(--space-3) var(--space-4)
    }

    .reply-composer-body {
        max-height: 220px
    }

    .reply-composer-toolbar {
        flex-direction: column-reverse;
        align-items: flex-start!important;
        padding: 12px!important
    }

    .reply-composer.reply-empty .reply-composer-toolbar {
        flex-direction: row;
        align-items: center!important
    }

    .reply-composer.reply-empty .reply-composer-toolbar-left {
        margin-bottom: 0
    }

    .reply-composer-body {
        scrollbar-width: thin;
        padding: 16px 16px 0!important
    }

    .reply-composer-toolbar-left {
        margin-bottom: 16px
    }

    .panel-action-bar {
        padding: 8px!important
    }

    .reply-composer-toolbar-right {
        width: 100%;
        flex-wrap: nowrap!important
    }

    .action-status-toggle {
        width: 100%
    }

    .action-status-toggle .action-status-btn {
        flex: 1
    }

    .action-status-btn {
        padding: .5rem .625rem
    }

    .action-status-label {
        display: none
    }

    .leads-pane {
        padding: 8px!important
    }

    .settings-row-value-group {
        flex-direction: column
    }

    .panel-title-row {
        display: grid!important;
        grid-template-areas: "score meta" "actions meta";
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 14px;
        row-gap: 8px;
        align-items: start
    }

    .panel-title-row #panel-score-badge {
        grid-area: score
    }

    .panel-title-row .panel-title-meta {
        grid-area: meta
    }

    .panel-title-row .panel-title-actions {
        grid-area: actions;
        align-items: center;
        align-self: start
    }

    .user-email {
        display: none
    }

    .main-content-body {
        padding: var(--space-4);
        margin: var(--space-2)
    }

    .settings-tab {
        padding: var(--space-2) var(--space-3)
    }

    .app-topbar {
        display: none
    }

    .todo-container {
        padding: var(--space-5);
        border-radius: var(--radius-xl)
    }

    .input-wrapper {
        flex-direction: column
    }

    .add-btn {
        width: 100%
    }

    .todo-actions {
        opacity: 1
    }

    .auth-card {
        padding: var(--space-6)
    }

    .filter-row {
        align-items: flex-start!important;
        flex-direction: column
    }
}

@media(prefers-reduced-motion:reduce) {
    *,*:before,*:after {
        transition-duration: .01ms!important
    }
}

.pp-modal {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4)
}

.pp-modal.hidden {
    display: none
}

.pp-backdrop {
    position: absolute;
    inset: 0;
    background: #00000059;
    backdrop-filter: blur(15px)
}

.pp-dialog {
    position: relative;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    padding: var(--space-6);
    max-width: 950px;
    width: 100%;
    max-height: 100vh;
    overflow-y: auto;
    animation: modalIn .3s ease-out
}

.pp-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-border);
    cursor: pointer;
    z-index: 1;
    line-height: 1;
    transition: color var(--transition-base)
}

.pp-close:hover {
    color: var(--color-text-primary)
}

.pp-header {
    text-align: center;
    margin-bottom: var(--space-6);
    margin-top: var(--space-6)
}

.pp-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-1)
}

.pp-subtitle {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4)
}

.pp-card-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-5)
}

.pp-toggle-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-weight: 500
}

.pp-switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 20px
}

.pp-switch input {
    opacity: 0;
    width: 0;
    height: 0
}

.pp-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: var(--color-border-strong);
    transition: .4s;
    border-radius: 20px
}

.pp-slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: #fff;
    transition: .4s;
    border-radius: 50%
}

input:checked+.pp-slider {
    background-color: var(--color-accent)
}

input:checked+.pp-slider:before {
    transform: translate(18px)
}

.pp-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-4);
    padding-top: var(--space-4)
}

.pp-card {
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all .3s cubic-bezier(.16,1,.3,1)
}

.pp-card-container {
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    padding: var(--space-8) var(--space-6);
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: all .3s ease
}

.pp-card.pp-popular {
    border: 2px solid var(--color-accent);
    border-radius: var(--radius-2xl)
}

.pp-card.pp-popular .pp-card-container {
    border: none
}

.pp-card.pp-current .pp-plan-btn {
    opacity: .6
}

.pp-badge-mini {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    background: var(--color-accent);
    padding: 4px 8px;
    border-radius: var(--radius-full);
    margin-left: 8px;
    text-transform: uppercase;
    vertical-align: middle;
    line-height: normal;
    margin-bottom: 3px
}

.pp-card-head {
    margin-bottom: var(--space-3)
}

.pp-plan-name {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-text-primary)
}

.pp-plan-desc {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    margin-top: 2px
}

.pp-price {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-5)
}

.pp-amount {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    color: var(--color-text-primary);
    line-height: 1;
    letter-spacing: -.04em
}

.pp-price-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: var(--space-12)
}

.pp-save-badge {
    font-size: 11px;
    color: #1a7a2e;
    font-weight: 600;
    background: #d4f5d9;
    border-radius: 999px;
    padding: 2px 10px;
    white-space: nowrap;
    line-height: 1.4
}

.pp-coupon {
    position: relative;
    display: flex;
    margin-bottom: var(--space-4);
    border-radius: 8px;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(circle 5px at 0 50%,transparent 5px,black 5.5px),radial-gradient(circle 5px at 100% 50%,transparent 5px,black 5.5px);
    -webkit-mask-composite: source-in;
    mask-image: radial-gradient(circle 5px at 0 50%,transparent 5px,black 5.5px),radial-gradient(circle 5px at 100% 50%,transparent 5px,black 5.5px);
    mask-composite: intersect
}

.pp-coupon-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
    padding: 10px 12px 10px 16px;
    background: #d4f5d9;
    border-radius: 8px 0 0 8px
}

.pp-coupon-amount {
    font-size: 16px;
    font-weight: 800;
    color: #1a7a2e;
    line-height: 1.2;
    letter-spacing: -.01em
}

.pp-coupon-detail {
    font-size: 9px;
    font-weight: 700;
    color: #1a7a2e;
    text-transform: uppercase;
    letter-spacing: .04em;
    opacity: .75
}

.pp-coupon-right {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 10px 16px 10px 14px;
    background: #c6eece;
    border-radius: 0 8px 8px 0;
    min-width: 90px
}

.pp-coupon-right:before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 0;
    border-left: 2px dashed #1a7a2e40
}

.pp-coupon-label {
    font-size: 9px;
    font-weight: 700;
    color: #1a7a2e;
    text-transform: uppercase;
    letter-spacing: .12em;
    line-height: 1;
    opacity: .7
}

.pp-coupon-code {
    font-family: var(--font-mono, "SF Mono", "Fira Code", monospace);
    font-size: 14px;
    font-weight: 800;
    color: #1a7a2e;
    letter-spacing: .06em;
    line-height: 1
}

.pp-period {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.pp-billing-note {
    display: none
}

.pp-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-4);
    flex: 1
}

.pp-features li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.pp-features li:last-child {
    border-bottom: none
}

.pp-features li.disabled {
    opacity: .45
}

.pp-features .check {
    color: var(--color-text-tertiary);
    flex-shrink: 0;
    display: flex;
    align-items: center
}

.pp-features .x {
    color: var(--color-text-disabled);
    flex-shrink: 0;
    display: flex;
    align-items: center
}

.pp-plan-btn {
    margin-top: auto
}

.pp-trial-note {
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-top: 8px;
    font-weight: 500
}

@media(max-width: 768px) {
    .pp-grid {
        grid-template-columns:1fr;
        max-width: 360px;
        margin: 0 auto
    }

    .pp-dialog {
        padding: var(--space-4)
    }

    .pp-dialog {
        max-height: 80vh
    }
}

.pp-confirm-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0000008c;
    backdrop-filter: blur(2px)
}

.pp-confirm-overlay.hidden {
    display: none
}

.pp-confirm-dialog {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 28px 28px 24px;
    max-width: 400px;
    width: calc(100vw - 32px);
    box-shadow: 0 20px 60px #00000059
}

.pp-confirm-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px
}

.pp-confirm-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0
}

.pp-confirm-desc {
    font-size: 13px;
    color: var(--color-text-secondary);
    margin: 0 0 20px;
    line-height: 1.5
}

.pp-confirm-rows {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
    padding: 16px;
    background: var(--color-bg-base);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border)
}

.pp-confirm-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: var(--color-text-secondary)
}

.pp-confirm-val {
    color: var(--color-text-primary);
    font-weight: 600
}

.pp-confirm-note {
    font-size: 12px;
    color: var(--color-text-tertiary);
    margin: 0 0 20px
}

.pp-confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px
}

.pp-dialog.pp-dialog-v2 {
    padding: 0;
    overflow-x: clip;
    overflow-y: auto;
    max-width: 960px
}

.ppv2-layout {
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    min-height: 700px
}

.ppv2-left {
    padding: 28px 28px 20px;
    display: flex;
    flex-direction: column
}

.ppv2-right {
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-2xl);
    margin: var(--space-6);
    background: var(--color-bg-base)
}

.ppv2-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.02em;
    margin: 0 0 18px
}

.ppv2-cycle-wrap {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 18px;
    transition: opacity .15s
}

.ppv2-cycle-disabled {
    opacity: .45;
    pointer-events: none
}

.ppv2-cycle-toggle {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 3px;
    background: var(--color-bg-base);
    border-radius: 999px;
    border: 1px solid var(--color-border)
}

.ppv2-cycle-btn {
    appearance: none;
    border: 0;
    cursor: pointer;
    padding: 6px 14px;
    border-radius: 999px;
    background: transparent;
    color: var(--color-text-secondary);
    font-weight: 500;
    font-size: 13px;
    font-family: inherit;
    transition: all .15s ease;
    white-space: nowrap
}

.ppv2-cycle-btn.active {
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    box-shadow: 0 1px 2px #0f172a14,0 0 0 1px #0f172a0a
}

.ppv2-3mo-badge {
    padding: 4px 9px;
    border-radius: 999px;
    background: #dcfce7;
    color: #166534;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap
}

[data-theme=dark] .ppv2-3mo-badge {
    background: #10b98126;
    color: #6ee7b7
}

.ppv2-plan-list {
    display: flex;
    flex-direction: column;
    gap: 10px
}

.ppv2-row {
    appearance: none;
    text-align: left;
    cursor: pointer;
    width: 100%;
    background: var(--color-bg-card);
    border: 1.5px solid var(--color-border);
    border-radius: 12px;
    padding: 14px 18px;
    display: grid;
    grid-template-columns: 20px 1fr auto;
    gap: 12px;
    align-items: center;
    position: relative;
    transition: border-color .15s ease,box-shadow .15s ease,background .15s ease;
    font-family: inherit;
    color: var(--color-text-primary)
}

.ppv2-row:hover:not(.ppv2-row-selected) {
    border-color: var(--color-border-strong)
}

.ppv2-row-selected {
    background: #2563eb0a;
    border-color: var(--color-accent)!important;
    box-shadow: 0 0 0 4px #2563eb14
}

.ppv2-radio {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--color-border-strong);
    background: var(--color-bg-card);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    transition: border-color .15s,background .15s;
    box-sizing: border-box
}

.ppv2-radio-selected {
    border-color: var(--color-accent);
    background: var(--color-accent)
}

.ppv2-radio-selected:after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    display: block
}

.ppv2-row-body {
    min-width: 0
}

.ppv2-row-name {
    font-weight: 600;
    font-size: 15px;
    color: var(--color-text-primary);
    letter-spacing: -.01em;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap
}

.ppv2-row-sub {
    font-size: 12px;
    color: var(--color-text-secondary);
    margin-top: 2px
}

.ppv2-row-price {
    text-align: right;
    white-space: nowrap
}

.ppv2-row-price-main {
    font-weight: 700;
    color: var(--color-text-primary);
    font-size: 15px
}

.ppv2-row-price-unit {
    font-weight: 500;
    font-size: 12px;
    color: var(--color-text-secondary)
}

.ppv2-row-price-sub {
    font-size: 11px;
    color: var(--color-text-tertiary);
    margin-top: 1px
}

.ppv2-badge-onetime {
    padding: 2px 7px;
    border-radius: 4px;
    background: var(--blue-50);
    color: var(--color-accent);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0
}

[data-theme=dark] .ppv2-badge-onetime {
    background: #2563eb2e;
    color: var(--blue-300)
}

.ppv2-badge-popular {
    position: absolute;
    top: -10px;
    right: 18px;
    padding: 3px 10px;
    border-radius: 6px;
    background: var(--color-accent);
    color: #fff;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    box-shadow: 0 2px 6px #2563eb4d;
    white-space: nowrap
}

.ppv2-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 32px 0;
    flex: 1;
    justify-content: flex-end
}

.ppv2-view-all {
    font-size: 13.5px;
    color: var(--color-accent);
    font-weight: 500;
    text-decoration: none
}

.ppv2-view-all:hover {
    text-decoration: underline
}

.ppv2-avatars {
    display: flex;
    align-items: center;
    gap: 10px
}

.ppv2-avatar-stack {
    display: flex
}

.ppv2-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 11px;
    font-weight: 700;
    border: 2px solid var(--color-bg-card);
    margin-left: -8px;
    box-shadow: 0 1px 3px #0f172a1f;
    flex-shrink: 0
}

.ppv2-avatar:first-child {
    margin-left: 0
}

.ppv2-social-proof {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
    color: var(--color-text-secondary)
}

.ppv2-green-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 0 3px #10b9812e;
    flex-shrink: 0
}

.ppv2-cta-wrap {
    margin-top: auto;
    width: 100%
}

.ppv2-cta {
    height: 45px
}

.pp-plan-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 16px;
    background: var(--color-bg-card);
    overflow: visible
}

.pp-plan-card-top {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 24px 20px;
    text-align: center;
    gap: 3px
}

.pp-plan-card-name {
    font-size: 22px;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.02em;
    margin-top: 2px
}

.pp-plan-card-original {
    font-size: 15px;
    color: var(--color-text-secondary);
    opacity: .55;
    margin-right: 4px
}

.pp-plan-card-price {
    display: flex;
    align-items: baseline;
    gap: 2px;
    margin-top: 6px
}

.pp-plan-card-price-big {
    font-size: 3.2rem;
    font-weight: 800;
    color: var(--color-accent);
    letter-spacing: -.04em;
    line-height: 1
}

.pp-plan-card-price-unit {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-secondary)
}

.pp-plan-card-price-cycle {
    font-size: 12px;
    color: var(--color-text-secondary);
    margin-top: 3px
}

.pp-plan-card-blurb {
    font-size: 13px;
    color: var(--color-text-secondary);
    margin-top: 8px
}

.pp-plan-card-bottom {
    padding: 18px 22px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.pp-perk-excluded {
    opacity: .38
}

.pp-plan-card-fine {
    font-size: 11.5px;
    color: var(--color-text-tertiary);
    margin-top: 8px;
    text-align: center;
    line-height: 1.5
}

@media(max-width: 680px) {
    .ppv2-layout {
        grid-template-columns:1fr
    }

    .ppv2-cta-wrap {
        margin-top: 32px
    }

    .pp-dialog.pp-dialog-v2 {
        max-height: 80vh;
        overflow-y: auto
    }

    .ppv2-bottom {
        margin: 28px 0
    }
}

.modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4)
}

.modal-backdrop {
    position: absolute;
    inset: 0;
    background: #0d14218c;
    backdrop-filter: blur(4px)
}

.modal-content {
    position: relative;
    background: var(--slate-0);
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-2xl);
    padding: var(--space-8);
    max-width: 420px;
    width: 100%;
    box-shadow: var(--shadow-xl);
    animation: modalIn .3s ease-out
}

@keyframes modalIn {
    0% {
        opacity: 0;
        transform: scale(.95) translateY(20px)
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0)
    }
}

.modal-close {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-text-tertiary);
    cursor: pointer;
    transition: color var(--transition-base)
}

.dropdown-container {
    position: relative;
    display: inline-block
}

.dropdown-trigger {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: 1.25rem;
    padding: var(--space-1) var(--space-2);
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    line-height: 1
}

.dropdown-trigger:hover,.dropdown-trigger.active {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 160px;
    background: var(--slate-0);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    padding: var(--space-1);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-5px);
    transition: all var(--transition-fast);
    margin-top: var(--space-2)
}

.dropdown-menu.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0)
}

.dropdown-item {
    display: block;
    width: 100%;
    text-align: left;
    padding: var(--space-2) var(--space-3);
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast)
}

.dropdown-item:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.dropdown-item.danger {
    color: var(--color-error)
}

.dropdown-item.danger:hover {
    background: var(--color-error-bg)
}

.modal-content h2 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--space-2)
}

.modal-subtitle {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-6)
}

.feature-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-6);
    font-size: var(--font-size-sm)
}

.feature-table th,.feature-table td {
    padding: var(--space-3);
    text-align: left;
    border-bottom: 1px solid var(--color-border)
}

.feature-table th {
    color: var(--color-text-tertiary);
    font-weight: 500;
    font-size: var(--font-size-xs);
    text-transform: uppercase
}

.btn-logout {
    background: var(--color-bg-card-hover)
}

.pricing-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-bottom: var(--space-6)
}

.pricing-option {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-base);
    position: relative
}

.pricing-option input {
    position: absolute;
    opacity: 0
}

.pricing-option.selected {
    background: linear-gradient(422deg,var(--color-accent) -39%,var(--color-bg-card) 34%);
    border: 1px solid var(--color-accent)
}

.pricing-option .badge {
    background: none;
    color: var(--color-accent);
    font-size: var(--font-size-xs);
    font-weight: 700;
    padding: 0;
    border-radius: 0
}

.pricing-option .price {
    font-size: var(--font-size-xl);
    font-weight: 700
}

.pricing-option .price small {
    font-size: var(--font-size-sm);
    font-weight: 400;
    color: var(--color-text-secondary)
}

.pricing-option .billing {
    margin-left: auto;
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.badge {
    padding: .25rem .625rem;
    border-radius: 9999px;
    font-size: .6875rem;
    font-weight: 600;
    letter-spacing: .01em;
    background: var(--color-bg-card);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border)
}

.badge.active {
    background: #dcfce7;
    color: #166534;
    border-color: #bbf7d0
}

.badge.trial {
    background: #fef3c7;
    color: #92400e;
    border-color: #fde68a
}

.badge.pass {
    background: #dbeafe;
    color: #1e40af;
    border-color: #bfdbfe
}

.badge.canceled {
    background: #fee2e2;
    color: #991b1b;
    border-color: #fecaca
}

.badge.expired {
    background: #fff7ed;
    color: #9a3412;
    border-color: #fed7aa
}

.badge.free {
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
    background: var(--color-bg-card)
}

.badge.starter {
    background: #eff6ff;
    color: #1d4ed8;
    border-color: #bfdbfe
}

.badge.pro {
    background: #ede9fe;
    color: #5b21b6;
    border-color: #ddd6fe
}

.badge.business {
    background: #f0fdf4;
    color: #166534;
    border-color: #bbf7d0
}

.badge.monthly {
    background: var(--blue-100);
    color: var(--blue-700);
    border-color: var(--blue-200)
}

.modal .btn-full {
    margin-bottom: var(--space-2)
}

.modal .btn-ghost {
    border: none
}

.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-bg-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity .3s ease,visibility .3s ease
}

.loader {
    width: 48px;
    height: 48px;
    border: 4px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: var(--space-4)
}

.loader-text {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    letter-spacing: .05em;
    animation: pulse 2s infinite ease-in-out
}

@keyframes pulse {
    0%,to {
        opacity: .6
    }

    50% {
        opacity: 1
    }
}

@media(max-width: 768px) {
    .nav-user-mobile-img {
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right: .5rem
    }

    .app-topbar {
        display: none
    }
}

.nav-user-mobile-img img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--color-border)
}

.welcome-banner {
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 47px;
    background: var(--color-accent-glow);
    border-radius: var(--radius-2xl);
    margin-bottom: -39px;
    font-size: var(--font-size-sm);
    color: var(--color-text-primary)
}

.banner-dismiss {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0 4px;
    line-height: 1
}

.usage-limit-banner {
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 14px;
    margin-bottom: 10px;
    font-size: var(--font-size-sm);
    color: var(--color-warning-text)
}

.usage-limit-banner:not(.hidden) {
    display: flex
}

.usage-limit-banner .btn {
    flex-shrink: 0
}

.leads-header {
    margin-bottom: var(--space-4)
}

.leads-header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-3)
}

.leads-page-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary)
}

.leads-header-actions {
    display: flex;
    align-items: center;
    gap: 8px
}

.scan-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: var(--font-size-xs);
    color: var(--color-accent);
    font-weight: 500;
    width: 28px;
    height: 28px;
    align-content: center;
    justify-content: center
}

.scan-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin .8s linear infinite
}

@keyframes spin {
    to {
        transform: rotate(360deg)
    }
}

.website-meta-scanning {
    color: var(--color-accent);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    gap: 8px
}

.website-meta-scanning .scan-spinner {
    width: 12px;
    height: 12px;
    border-width: 2px
}

.website-card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .25rem .75rem
}

.website-card-meta-item {
    display: inline-flex;
    min-width: 0;
    flex-direction: row
}

.filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 6px 0;
    align-items: center
}

.lead-search {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-width: 0;
    padding: 0 6px 0 12px;
    border: 1px solid var(--color-border);
    border-radius: 14px;
    background: var(--color-bg-card);
    color: var(--color-text-tertiary)
}

.lead-search-actions {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 8px;
    border-left: 1px solid var(--color-border)
}

.lead-search-filter-btn,.lead-search-clear-btn {
    flex-shrink: 0
}

.lead-search:has(.lead-search-input:focus),.lead-search:has(.lead-search-input:focus-visible) {
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 1px #60a5fa73;
    color: var(--color-text-secondary)
}

.lead-search-input {
    width: 100%;
    min-width: 0;
    height: 38px;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
    appearance: none;
    -webkit-appearance: none
}

.lead-search-input::placeholder {
    color: var(--color-text-tertiary)
}

.lead-search-input::-webkit-search-decoration,.lead-search-input::-webkit-search-cancel-button,.lead-search-input::-webkit-search-results-button,.lead-search-input::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
    display: none
}

.filter-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px
}

.filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    background: var(--color-bg-base);
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all .15s ease;
    white-space: nowrap
}

.filter-chip:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-card)
}

.filter-chip.active {
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    box-shadow: 0 1px 3px #0000001a
}

.filter-chip img {
    flex-shrink: 0
}

.leads-meta {
    margin-bottom: var(--space-2)
}

.lead-count {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.lead-feed {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-2xl);
    overflow: hidden
}

.lead-feed.is-empty,.website-list.is-empty {
    border: none
}

.lead-card {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 14px 16px;
    background: var(--color-bg-card);
    border-left: 3px solid transparent;
    border-bottom: 1px solid var(--color-border);
    cursor: pointer;
    touch-action: manipulation;
    transition: background .15s ease,border-color .15s ease
}

@media(hover: hover) {
    .lead-card:hover {
        background:var(--color-bg-card-hover)
    }
}

.score-ring-wrap {
    position: relative;
    flex-shrink: 0
}

.score-circle {
    flex-shrink: 0;
    display: block
}

.score-ring-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center
}

.score-ring-favicon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    object-fit: cover
}

.lead-info {
    flex: 1;
    min-width: 0;
    max-height: 40px
}

.lead-title {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left
}

.lead-meta-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.platform-icon {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
    margin-top: -1px
}

.lead-subreddit {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
    width: 130px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis
}

.lead-match-chip {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 600;
    color: var(--color-accent)
}

.lead-website-badge {
    padding: 1px 6px;
    font-size: 11px
}

.lead-unverified-badge {
    display: inline-flex;
    align-items: center;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .02em;
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    background: var(--color-bg-tertiary, rgba(120, 120, 120, .12));
    white-space: nowrap
}

.lead-stat {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
    color: var(--color-text-tertiary);
    white-space: nowrap;
    min-width: 34px
}

.lead-status-icon {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    margin-left: auto;
    color: var(--color-text-tertiary)
}

.lead-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    gap: 2px;
    min-width: 48px
}

.lead-right .lead-time {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .03em;
    color: var(--color-text-tertiary);
    white-space: nowrap
}

.lead-star-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    color: var(--color-text-tertiary);
    opacity: 1;
    transition: color .15s;
    padding: 0
}

.lead-star-btn.starred {
    opacity: 1
}

.lead-star-btn:hover {
    background: var(--color-accent-light);
    color: var(--color-accent)
}

.lead-star-btn.starred {
    color: var(--color-accent)
}

.filter-chip-starred.active svg {
    stroke: var(--color-text-primary)
}

.filter-chip svg {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0
}

.lead-card[data-status=new] {
    background: var(--slate-0)
}

.lead-card[data-status=new] .lead-title {
    font-weight: 500;
    color: var(--slate-900)
}

.lead-card[data-status=new] .lead-meta-row {
    color: var(--slate-500)
}

.lead-card[data-status=reviewed] .lead-title,.lead-card[data-status=replied] .lead-title,.lead-card[data-status=dismissed] .lead-title {
    font-weight: 400;
    color: var(--color-text-secondary)
}

@media(hover: hover) {
    .lead-card[data-status]:hover {
        background:var(--color-bg-card-hover)
    }
}

.load-more-sentinel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-5) 0
}

.load-more-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-border);
    border-top-color: var(--blue-500);
    border-radius: 50%;
    animation: spin .7s linear infinite
}

.empty-state {
    text-align: center;
    padding: var(--space-12) var(--space-4);
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.empty-icon-lg {
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-4)
}

.empty-state h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2)
}

.empty-state p {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-6)
}

.skeleton-lead {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 14px 16px;
    background: var(--color-bg-card);
    border-left: 3px solid transparent;
    margin-bottom: 1px
}

.skeleton-score {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    max-height: 40px
}

.skeleton-lead-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.panel-loading {
    padding: 20px 20px 0;
    display: flex;
    flex-direction: column;
    gap: 0
}

.panel-skeleton-title-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px
}

.panel-skeleton-score {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: var(--radius-full)
}

.panel-skeleton-title-meta {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.panel-skeleton-title-line {
    height: 18px;
    border-radius: var(--radius-sm);
    width: 85%
}

.panel-skeleton-meta-row {
    display: flex;
    gap: 8px;
    align-items: center
}

.panel-skeleton-meta-chip {
    height: 12px;
    border-radius: var(--radius-sm);
    width: 60px
}

.panel-skeleton-meta-chip.medium {
    width: 80px
}

.panel-skeleton-meta-chip.short {
    width: 45px
}

.panel-skeleton-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 4px
}

.panel-skeleton-line {
    height: 13px;
    border-radius: var(--radius-sm);
    width: 100%
}

.panel-skeleton-line.medium {
    width: 80%
}

.panel-skeleton-line.long {
    width: 92%
}

.panel-skeleton-line.short {
    width: 55%
}

.leads-pane {
    width: 40%;
    min-width: 350px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow: visible;
    background: var(--color-bg-base);
    border-radius: var(--radius-2xl);
    margin: 0 var(--space-2) 0 0;
    padding: 12px
}

.leads-list-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    border-radius: var(--radius-2xl);
    clip-path: inset(0 round var(--radius-2xl));
    background: var(--color-bg-base);
    border: 1px solid var(--color-border)
}

.detail-pane {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--color-bg-base);
    border-radius: var(--radius-2xl)
}

.detail-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: var(--color-text-tertiary)
}

.detail-empty svg {
    opacity: .4
}

.detail-empty p {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.detail-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden
}

.lead-card.active {
    background: var(--color-bg-card-hover);
    border-left-color: var(--color-accent)
}

.panel-header-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px 0 8px;
    height: 44px;
    flex-shrink: 0;
    justify-content: space-between
}

.panel-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--color-text-secondary);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: var(--radius-md);
    transition: color .15s,background .15s;
    flex-shrink: 0
}

.panel-back-btn:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    box-shadow: 0 1px 3px #0000001a
}

.panel-header-right {
    display: flex;
    align-items: center;
    flex-shrink: 0
}

.panel-nav-count {
    font-size: 12px;
    color: var(--color-text-tertiary);
    padding: 0 6px;
    white-space: nowrap
}

.panel-nav-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: color .15s,background .15s,border-color .15s
}

.panel-nav-icon-btn:hover:not(:disabled) {
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    border-color: var(--color-border);
    box-shadow: 0 1px 3px #0000001a
}

.panel-nav-icon-btn:disabled {
    opacity: .3;
    cursor: default
}

.panel-nav-icon-btn+.panel-nav-icon-btn {
    border-left: none;
    border-radius: 0 var(--radius-md) var(--radius-md) 0
}

.panel-nav-icon-btn:first-of-type {
    border-radius: var(--radius-md) 0 0 var(--radius-md)
}

.panel-open-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: 2px 6px;
    border-radius: var(--radius-md);
    transition: color .15s,background .15s
}

.panel-open-btn:hover {
    color: var(--color-accent);
    background: var(--color-badge-bg)
}

.panel-title-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0
}

.panel-star-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 24px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: var(--radius-md);
    color: var(--color-text-tertiary);
    transition: color .15s,background .15s;
    padding: 0;
    align-self: center
}

.panel-star-btn:hover {
    background: var(--color-accent-light);
    color: var(--color-accent)
}

.panel-star-btn.starred {
    color: var(--color-accent)
}

.panel-action-bar {
    flex-shrink: 0;
    padding: 12px
}

.reply-composer {
    border-radius: var(--radius-2xl);
    background: var(--color-bg-card);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    height: auto;
    border: 1px solid var(--color-border)
}

.reply-composer.reply-empty .reply-composer-body {
    display: none
}

.reply-composer-body {
    overflow-y: auto;
    padding: 16px 20px 12px;
    max-height: 280px
}

.reply-placeholder {
    display: flex;
    align-items: flex-start;
    gap: 7px;
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm);
    height: 100%;
    cursor: default;
    user-select: none
}

.reply-skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 2px
}

.reply-skeleton-line {
    height: 13px;
    border-radius: var(--radius-sm);
    width: 100%
}

.reply-skeleton-line.long {
    width: 92%
}

.reply-skeleton-line.medium {
    width: 75%
}

.reply-skeleton-line.short {
    width: 50%
}

.reply-history-nav {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px
}

.reply-hist-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    padding: 0;
    background: var(--color-bg-card-hover);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: background .1s,color .1s
}

.reply-hist-btn:hover:not(:disabled) {
    background: var(--color-border);
    color: var(--color-text-primary)
}

.reply-hist-btn:disabled {
    opacity: .35;
    cursor: default
}

.reply-hist-label {
    font-size: 11px;
    font-family: var(--font-family);
    color: var(--color-text-tertiary);
    user-select: none;
    white-space: nowrap
}

.reply-composer .reply-display {
    background: none;
    border: none;
    border-radius: 0;
    padding: 0
}

.reply-composer .reply-textarea {
    border: none;
    background: none;
    padding: 0;
    width: 100%;
    min-height: 80px;
    outline: none;
    resize: none;
    overflow: hidden;
    font-size: var(--font-size-sm);
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--color-text-primary);
    box-shadow: none
}

.reply-composer .reply-textarea:focus {
    border: none!important;
    box-shadow: none!important
}

.reply-composer:has(#reply-textarea:focus) {
    border-color: var(--blue-400);
    box-shadow: var(--shadow-focus)
}

.reply-composer-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 16px;
    flex-wrap: wrap
}

.reply-composer-toolbar-left,.panel-reply-btns {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-wrap: nowrap;
    white-space: nowrap
}

.reply-composer-toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap
}

.action-status-toggle {
    display: flex;
    align-items: center;
    gap: 4px
}

.action-status-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    width: auto;
    padding: .5rem .875rem;
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    cursor: pointer;
    font-size: var(--font-size-sm);
    font-weight: 500;
    font-family: var(--font-family);
    line-height: normal;
    white-space: nowrap;
    transition: color .15s ease,background .15s ease;
    border: 1px solid var(--color-border)
}

.action-status-toggle .action-status-btn {
    border-radius: var(--radius-lg)
}

.action-status-btn:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.action-status-btn[data-status=replied].active {
    color: var(--color-success);
    background: color-mix(in srgb,var(--color-success) 8%,transparent)
}

.action-status-btn[data-status=dismissed].active {
    color: var(--color-error);
    background: var(--color-error-bg)
}

.action-status-btn.active {
    cursor: not-allowed;
    opacity: .65;
    pointer-events: none
}

.detail-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    margin: 0 12px;
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    overflow-x: clip;
    border: 1px solid var(--color-border);
    scrollbar-width: thin
}

@keyframes panel-from-right {
    0% {
        transform: translate(28px);
        opacity: 0
    }

    to {
        transform: translate(0);
        opacity: 1
    }
}

@keyframes panel-from-left {
    0% {
        transform: translate(-28px);
        opacity: 0
    }

    to {
        transform: translate(0);
        opacity: 1
    }
}

.panel-slide-next {
    animation: panel-from-right .22s ease forwards
}

.panel-slide-prev {
    animation: panel-from-left .22s ease forwards
}

.panel-content-wrap {
    position: relative
}

.panel-content.collapsed {
    max-height: 310px;
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto
}

.panel-content.collapsed:after {
    content: "";
    position: absolute;
    bottom: 19px;
    left: 0;
    right: 0;
    height: 96px;
    background: linear-gradient(to bottom,#a4333300,var(--color-bg-card));
    pointer-events: none
}

.panel-see-more {
    display: block;
    min-width: 600px;
    padding: 6px 0 2px;
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-text-secondary);
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    margin: 0 auto
}

.panel-see-more:hover {
    text-decoration: underline
}

.panel-stats {
    display: inline-flex;
    align-items: center;
    gap: 8px
}

.panel-stat {
    display: inline-flex;
    align-items: center;
    gap: 3px
}

.panel-title-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 16px
}

.panel-title-meta {
    flex: 1;
    min-width: 0
}

.panel-title-line {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 4px;
    justify-content: space-between
}

.panel-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    line-height: 1.4
}

.panel-meta {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.panel-meta-row {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 5px;
    min-width: 0
}

.panel-author {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.lead-meta-favicon,.panel-meta-favicon {
    border-radius: 2px;
    vertical-align: middle;
    flex-shrink: 0
}

.panel-meta-dot {
    opacity: .4
}

.panel-subreddit {
    display: inline-flex;
    align-items: center;
    gap: 3px
}

.panel-website-meta {
    display: inline-flex;
    align-items: center;
    gap: 4px
}

.panel-website-favicon {
    border-radius: 2px;
    vertical-align: middle;
    flex-shrink: 0
}

.panel-website-domain {
    font-weight: 500;
    color: var(--color-text-secondary)
}

.panel-score-badge {
    flex-shrink: 0
}

.panel-divider {
    height: 1px;
    margin: 8px 0
}

.panel-section-label {
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: .5px;
    display: block;
    margin-bottom: 8px
}

.panel-section {
    margin-bottom: 0
}

.panel-content {
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    line-height: 1.6;
    word-break: break-word;
    max-width: 600px;
    margin: 0 auto
}

.panel-content p,.reply-md-body p {
    margin: 0 0 .6em
}

.panel-content p:last-child,.reply-md-body p:last-child {
    margin-bottom: 0
}

.panel-content h1,.panel-content h2,.panel-content h3,.reply-md-body h1,.reply-md-body h2,.reply-md-body h3 {
    font-weight: 600;
    margin: .8em 0 .3em;
    line-height: 1.3
}

.panel-content ul,.panel-content ol,.reply-md-body ul,.reply-md-body ol {
    margin: .4em 0 .6em 1.2em;
    padding: 0
}

.panel-content li,.reply-md-body li {
    margin-bottom: 2px
}

.panel-content code,.reply-md-body code {
    font-family: SF Mono,Monaco,Consolas,monospace;
    font-size: .85em;
    background: var(--color-bg-subtle);
    border-radius: 3px;
    padding: 1px 5px
}

.panel-content pre,.reply-md-body pre {
    background: var(--color-bg-subtle);
    border-radius: 6px;
    padding: 10px 12px;
    overflow-x: auto;
    margin: .5em 0
}

.panel-content pre code,.reply-md-body pre code {
    background: none;
    padding: 0
}

.panel-content blockquote,.reply-md-body blockquote {
    border-left: 3px solid var(--color-border);
    margin: .5em 0;
    padding: 2px 12px;
    color: var(--color-text-secondary)
}

.panel-content a,.reply-md-body a {
    color: var(--color-accent);
    text-decoration: underline
}

.panel-content hr,.reply-md-body hr {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: .8em 0
}

.panel-content strong,.reply-md-body strong {
    font-weight: 600
}

.panel-content em,.reply-md-body em {
    font-style: italic
}

.panel-keywords-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    max-width: 600px;
    margin: 0 auto;
    padding-top: var(--space-4)
}

.panel-keywords-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: var(--color-text-tertiary);
    flex-shrink: 0;
    white-space: nowrap
}

.panel-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 6px
}

.panel-keyword-chip {
    padding: 3px 8px;
    background: #adadad17;
    color: var(--color-text-primary);
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500
}

mark.keyword-highlight {
    background: #c0dafd;
    color: inherit;
    border-radius: 2px;
    padding: 0 2px
}

[data-theme=dark] mark.keyword-highlight {
    background: #203d65
}

.competitor-tag {
    display: inline-flex;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: var(--color-text-tertiary);
    white-space: nowrap;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: .04em
}

.reply-post-controls {
    display: flex;
    align-items: center;
    gap: 4px
}

.reply-text-content {
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0
}

.reply-textarea {
    width: 100%;
    min-height: 120px;
    padding: 12px 14px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-family: var(--font-family);
    line-height: 1.5;
    color: var(--color-text-primary);
    background: var(--color-bg-base);
    resize: vertical;
    outline: none
}

.reply-textarea:focus {
    border-color: var(--blue-400);
    box-shadow: var(--shadow-focus)
}

.status-btn.active {
    background: var(--color-accent);
    color: #fff
}

@media(max-width: 768px) {
    .main-content-body {
        margin:var(--space-2);
        padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom,0px));
        overflow-x: clip
    }

    .app-main-area {
        min-width: 0
    }

    .content-split {
        position: relative;
        overflow: hidden;
        overflow-x: clip;
        margin: var(--space-2)
    }

    .leads-pane {
        width: 100%;
        min-width: 0;
        flex-shrink: 0;
        border-right: none;
        border-bottom: none;
        overflow: hidden;
        margin: 0;
        transition: transform var(--transition-slow)
    }

    .leads-list-scroll {
        width: 100%;
        margin-right: 0;
        border-radius: var(--radius-2xl);
        clip-path: inset(0 round var(--radius-2xl))
    }

    .detail-pane,.content-split.panel-closed .detail-pane {
        display: flex;
        position: absolute;
        inset: 0;
        width: 100%;
        background: var(--color-bg-base);
        border-radius: var(--radius-2xl);
        transform: translate(100%);
        transition: transform var(--transition-slow);
        visibility: hidden
    }

    .content-split:not(.panel-closed) .leads-pane {
        transform: translate(-100%)
    }

    .detail-pane.mobile-open {
        transform: translate(0);
        visibility: visible
    }

    .detail-body {
        padding: 16px;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        margin: 0 8px
    }

    .panel-actions-bar {
        flex-wrap: wrap;
        margin: 0 8px 8px
    }
}

.websites-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-6)
}

.website-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    border-radius: var(--radius-2xl)
}

.website-card:first-child {
    border-radius: var(--radius-2xl) var(--radius-2xl) 0 0
}

.website-card:last-child {
    border-radius: 0 0 var(--radius-2xl) var(--radius-2xl)
}

.website-card:only-child {
    border-radius: var(--radius-2xl)
}

.website-card {
    background: var(--color-bg-card);
    transition: border-color .15s ease,opacity .25s ease,transform .25s ease
}

.website-card.is-deleting {
    opacity: 0;
    transform: scale(.97);
    pointer-events: none
}

.website-card-main {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    cursor: pointer
}

.website-favicon {
    border-radius: 6px;
    flex-shrink: 0
}

.website-card-info {
    flex: 1;
    min-width: 0;
    max-height: 40px
}

.website-card-title {
    font-size: var(--font-size-base);
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.website-card-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px 6px;
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.website-domain {
    color: var(--color-text-secondary)
}

.website-meta-dot {
    opacity: .4
}

.website-card-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0
}

.website-scan-btn {
    width: 28px;
    height: 28px;
    padding: 0!important
}

.expand-btn {
    transition: transform .2s ease;
    width: 28px;
    height: 28px;
    padding: 0!important
}

.website-card-detail {
    border: 1px solid var(--color-border);
    margin: 0 8px 8px;
    border-radius: var(--radius-2xl);
    background: var(--color-bg-base)
}

@media(max-width: 768px) {
    .detail-tabs {
        flex-wrap:wrap
    }

    .detail-tab {
        padding: 6px 10px;
        font-size: var(--font-size-xs);
        margin-bottom: 8px!important
    }

    .detail-tabs-actions {
        width: 100%;
        justify-content: flex-end;
        margin-left: 0;
        padding: 8px 0 0;
        gap: 6px;
        margin-top: 24px
    }
}

.website-detail-loading {
    padding: 16px 0;
    text-align: center;
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm)
}

.detail-section {
    padding: 16px;
    border-top: 1px solid var(--color-border)
}

.detail-section-title {
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: .5px;
    margin-bottom: 8px
}

.detail-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px
}

.keyword-chip,.subreddit-chip,.subreddit-item,.detail-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    background: var(--color-bg-card);
    color: var(--color-text-primary)
}

.keyword-chip .chip-remove,.subreddit-chip .chip-remove,.subreddit-item .chip-remove {
    cursor: pointer;
    opacity: .5;
    transition: opacity .2s;
    background: none;
    border: none;
    color: inherit;
    font-size: 14px;
    padding: 0;
    line-height: 1
}

.keyword-chip .chip-remove:hover,.subreddit-chip .chip-remove:hover,.subreddit-item .chip-remove:hover,.detail-chip .chip-remove:hover {
    opacity: 1;
    color: var(--color-error)
}

.detail-subreddits {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    min-height: 24px
}

.detail-add-row {
    display: flex;
    gap: 8px;
    margin-top: 8px
}

.setup-keywords-body {
    margin-top: 24px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    background: var(--color-bg-base)
}

.setup-keywords-body>.review-section:last-child {
    border-bottom: none
}

.setup-platforms-panel {
    margin-top: 24px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    background: var(--color-bg-base)
}

.setup-platforms-panel>.platform-section:first-child {
    border-top: none
}

.aw-step-body>.platform-section:first-child {
    border-top: none
}

.aw-step-body>.review-section:last-child {
    border-bottom: none
}

.platform-section {
    padding: 16px;
    border-top: 1px solid var(--color-border)
}

.platform-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px
}

.platform-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--color-text-primary)
}

.platform-label>svg {
    flex-shrink: 0
}

.platform-hint {
    font-size: 12px;
    color: var(--color-text-tertiary);
    margin: 0;
    line-height: 1.5
}

.platform-body.is-paused {
    opacity: .4;
    pointer-events: none
}

.platform-section.is-coming-soon .platform-label,.platform-section.is-coming-soon .toggle-switch,.platform-section.is-plan-locked .toggle-switch {
    opacity: .4
}

.platform-badge-soon {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .5px;
    padding: 2px 7px;
    border-radius: 10px;
    background: var(--color-bg-card-hover);
    color: var(--color-text-tertiary);
    border: 1px solid var(--color-border);
    line-height: 1.4
}

.platform-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--color-border);
    border-top: 1px solid var(--color-border);
    border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
    overflow: visible
}

.platform-grid>.platform-section {
    border-top: none;
    background: var(--color-bg-base)
}

.platform-grid>.platform-section:nth-last-child(1) {
    border-bottom-right-radius: var(--radius-2xl)
}

.platform-grid>.platform-section:nth-last-child(2) {
    border-bottom-left-radius: var(--radius-2xl)
}

.platform-grid>.platform-section .platform-header {
    margin-bottom: 0
}

@media(max-width: 480px) {
    .platform-grid {
        grid-template-columns:1fr
    }

    .platform-grid>.platform-section:nth-last-child(2) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }
}

.inline-input {
    flex: 1;
    width: 100%;
    min-width: 0;
    padding: 8px 12px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 13px;
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    outline: none;
    transition: border-color var(--transition-fast),box-shadow var(--transition-fast);
    height: stretch
}

.inline-input:focus {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus)
}

.inline-input::placeholder {
    color: var(--color-text-tertiary)
}

.rg-autocomplete {
    position: relative;
    flex: 1;
    min-width: 0
}

.rg-autocomplete.is-loading .inline-input {
    padding-right: 36px
}

.rg-autocomplete-spinner {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
    border: 2px solid rgba(37,99,235,.18);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin .8s linear infinite;
    opacity: 0;
    pointer-events: none;
    transition: opacity .15s ease
}

.rg-autocomplete.is-loading .rg-autocomplete-spinner {
    opacity: 1
}

.rg-autocomplete-panel {
    display: none;
    position: fixed;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: 0 8px 24px #0000001f;
    z-index: 9999;
    overflow: hidden
}

.rg-autocomplete-item {
    padding: 10px 14px;
    font-size: 13px;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: background var(--transition-fast)
}

.rg-autocomplete-item:hover {
    background: var(--color-bg-card-hover)
}

.detail-description-textarea {
    width: 100%;
    min-height: 80px;
    padding: 10px 12px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    font-size: 13px;
    line-height: 1.5;
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    font-family: inherit;
    resize: none;
    outline: none;
    field-sizing: content
}

.detail-description-textarea:focus {
    border-color: var(--color-border-focus);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-focus)
}

.detail-actions {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center
}

.detail-tabs {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 16px
}

.detail-tab {
    padding: 8px 14px;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    transition: all .15s ease
}

.detail-tab:hover {
    color: var(--color-text-primary)
}

.detail-tab.active {
    color: var(--color-text-primary);
    border-bottom-color: var(--color-text-primary)
}

.detail-tabs-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 6px
}

.detail-tab-panel {
    display: none
}

.detail-tab-panel.active {
    display: block
}

.detail-tab-danger {
    color: var(--color-text-tertiary)
}

.detail-tab-danger:hover {
    color: #ef4444
}

.detail-tab-danger.active {
    color: #ef4444;
    border-bottom-color: #ef4444
}

.detail-section-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px
}

.detail-section-cap {
    font-size: 11px;
    color: var(--color-text-tertiary);
    font-weight: 400;
    margin-left: 4px
}

.detail-section-hint {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    margin-bottom: 10px;
    line-height: 1.4
}

.danger-zone-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px
}

.danger-zone-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 4px
}

.danger-zone-desc {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    line-height: 1.4;
    max-width: 300px
}

.prompt-field-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 6px
}

.prompt-field-header .form-label {
    margin-bottom: 0
}

.prompt-char-count {
    font-size: 11px;
    font-family: var(--font-family);
    color: var(--color-text-tertiary);
    font-variant-numeric: tabular-nums
}

.prompt-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px
}

.prompt-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: var(--radius-md);
    background: var(--color-bg-card)
}

.prompt-item-info {
    flex: 1;
    min-width: 0
}

.prompt-item-name {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 2px
}

.prompt-item-text {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 360px
}

.prompt-item-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0
}

.prompt-item-edit,.prompt-item-delete {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--font-size-xs);
    font-family: var(--font-family);
    font-weight: 500;
    padding: 3px 6px;
    border-radius: var(--radius-sm);
    transition: background .1s,color .1s
}

.prompt-item-edit {
    color: var(--color-text-secondary)
}

.prompt-item-edit:hover {
    background: var(--color-bg-card-hover);
    color: var(--color-text-primary)
}

.prompt-item-delete {
    color: var(--color-text-tertiary)
}

.prompt-item-delete:hover {
    background: #ef444414;
    color: #ef4444
}

.form-textarea {
    resize: vertical;
    min-height: 80px
}

.generate-reply-split {
    position: static;
    display: flex;
    align-items: stretch;
    gap: 0
}

.generate-reply-main {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none
}

.generate-reply-arrow {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0 9px;
    min-width: 32px;
    border-left: 1px solid rgba(255,255,255,.22)!important
}

.generate-reply-dropdown {
    position: fixed;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 24px #00000024,0 2px 6px #00000014;
    min-width: 180px;
    max-width: calc(100vw - 16px);
    z-index: 1000;
    overflow: hidden;
    padding: 4px
}

.generate-reply-dropdown-item {
    display: block;
    width: 100%;
    padding: 8px 12px;
    text-align: left;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    background: none;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background .1s
}

.generate-reply-dropdown-item:hover {
    background: var(--color-bg-card-hover)
}

.generate-reply-dropdown-item .prompt-item-label {
    flex: 1
}

.generate-reply-dropdown-item.prompt-item-used {
    display: flex;
    align-items: center;
    gap: 8px
}

.prompt-used-badge {
    font-size: 10px;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--color-text-tertiary);
    background: var(--color-bg-card-hover);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 1px 5px;
    flex-shrink: 0;
    letter-spacing: .02em
}

.generate-reply-dropdown-divider {
    height: 1px;
    background: var(--color-border);
    margin: 4px 0
}

.generate-reply-dropdown-add {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--color-text-secondary);
    font-weight: 500
}

.generate-reply-dropdown-item-locked {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: .55;
    cursor: pointer
}

.generate-reply-dropdown-item-locked:hover {
    opacity: .75
}

.generate-reply-dropdown-add:hover {
    color: var(--color-text-primary)
}

.panel-exclude-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 11px;
    font-family: var(--font-family);
    color: var(--color-accent);
    text-decoration: underline;
    text-decoration-color: transparent;
    padding: 0 2px;
    transition: color .15s;
    vertical-align: middle
}

.panel-exclude-btn:hover {
    color: #ef4444;
    text-decoration-color: #ef4444
}

.rg-toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: var(--radius-lg);
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
    max-width: 340px;
    pointer-events: none;
    opacity: 0;
    transform: translate(calc(100% + 24px));
    transition: opacity .3s ease,transform .3s cubic-bezier(.34,1.2,.64,1);
    background: rgba(var(--color-bg-card-rgb),.7);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    box-shadow: 0 8px 24px #0d14211f,0 2px 6px #0d142112
}

.rg-toast-visible {
    opacity: 1;
    transform: translate(0)
}

.rg-toast-success .rg-toast-icon {
    color: var(--color-accent)
}

.rg-toast-error .rg-toast-icon {
    color: var(--color-error)
}

.rg-toast-info .rg-toast-icon {
    color: var(--color-accent)
}

.rg-toast-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center
}

.rg-toast-msg {
    flex: 1
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: #00000059;
    backdrop-filter: blur(15px);
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px
}

.modal-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    padding: 24px;
    max-width: 560px;
    width: 100%
}

.modal-title {
    font-size: var(--font-size-lg);
    font-weight: 600
}

.modal-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin-bottom: 20px
}

.modal-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end
}

#add-website-modal .modal-card {
    max-height: min(90vh,700px);
    display: flex;
    flex-direction: column
}

.aw-step {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0
}

.aw-step-scroll-wrap {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow: auto
}

.aw-step-scroll-wrap:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: linear-gradient(to bottom,transparent,var(--color-bg-card));
    pointer-events: none;
    transition: opacity .2s
}

.aw-step-scroll-wrap.at-bottom:after {
    opacity: 0
}

.aw-step-body {
    height: 100%;
    overflow-y: auto;
    border-radius: var(--radius-2xl);
    background: var(--color-bg-base)
}

.aw-step-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding-top: 16px;
    flex-shrink: 0
}

.delete-site-preview {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 0;
    border-radius: var(--radius-lg);
    margin-bottom: 14px
}

.delete-site-domain {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary)
}

.delete-type-hint {
    font-family: ui-monospace,SFMono-Regular,Menlo,monospace;
    font-size: 12px;
    background: var(--color-bg-base);
    color: var(--color-text-primary);
    padding: 1px 5px;
    border-radius: 4px;
    border: 1px solid var(--color-border)
}

.setup-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    max-width: 640px;
    margin: 0 auto;
    justify-content: center
}

.setup-logo {
    margin-bottom: 32px
}

.step-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px
}

.step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-border);
    transition: all .3s ease
}

.step-dot.active {
    background: var(--color-accent);
    box-shadow: 0 0 0 3px #0584ec33
}

.step-dot.completed {
    background: var(--color-accent)
}

.step-line {
    width: 40px;
    height: 2px;
    background: var(--color-border);
    transition: background .3s ease
}

.step-line.completed {
    background: var(--color-accent)
}

.setup-card {
    width: 100%;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    padding: 32px
}

@media(max-width: 480px) {
    .setup-container {
        padding:40px 12px
    }

    .setup-card {
        padding: 20px 16px
    }
}

.setup-step {
    display: none
}

.setup-step.active {
    display: block
}

.setup-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--color-text-primary);
    text-align: center
}

.setup-subtitle {
    color: var(--color-text-secondary);
    font-size: 14px;
    text-align: center;
    margin-bottom: 24px
}

.analyze-progress {
    text-align: center;
    margin-bottom: 32px
}

.favicon-spinner-wrap {
    position: relative;
    width: 48px;
    height: 48px;
    margin: 0 auto 12px
}

.favicon-spinner {
    width: 48px;
    height: 48px;
    color: var(--color-accent);
    animation: spin 1s linear infinite
}

.favicon-spinner svg {
    width: 100%;
    height: 100%
}

.favicon-spinner-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover
}

.analyze-domain {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 16px;
    word-break: break-all
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.analyze-status {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 4px;
    transition: opacity .2s ease
}

.analyze-substatus {
    font-size: 13px;
    color: var(--color-text-tertiary);
    transition: opacity .2s ease
}

.analyze-error {
    color: var(--color-danger, #ef4444);
    font-size: 14px;
    margin-top: 16px;
    text-align: center
}

.retry-btn {
    margin-top: 12px
}

.review-section {
    border-bottom: 1px solid var(--color-border);
    padding: 16px
}

.review-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px
}

.review-section-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-primary)
}

.review-section-subtitle {
    font-size: 12px;
    color: var(--color-text-tertiary)
}

.keyword-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px
}

.chip-remove {
    cursor: pointer;
    opacity: .5;
    transition: opacity .2s;
    line-height: 1;
    background: none;
    border: none;
    color: inherit;
    font-size: 14px;
    padding: 0
}

.chip-remove:hover {
    opacity: 1
}

.add-keyword-row {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    position: relative
}

.add-keyword-btn {
    white-space: nowrap;
    flex-shrink: 0;
    box-shadow: 0 1px 3px #0000001a
}

.subreddit-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px
}

.subreddit-name {
    font-size: 13px;
    font-weight: 500;
    color: inherit
}

.description-textarea {
    width: 100%;
    min-height: 200px;
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    font-size: 15px;
    line-height: 1.5;
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    outline: none;
    resize: vertical;
    margin-bottom: 24px;
    font-family: inherit
}

.description-textarea:focus {
    border-color: var(--color-border-focus);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-focus)
}

.setup-actions {
    margin-top: 24px;
    display: flex;
    justify-content: center
}

.setup-actions .btn {
    width: 100%
}

.setup-divider {
    height: 1px;
    background: var(--color-border);
    margin: 24px 0
}

.setup-footer {
    text-align: center;
    margin-top: var(--space-4);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-xs);
    opacity: .55
}

.setup-footer-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2)
}

.setup-footer-dot {
    opacity: .5
}

.setup-footer-logout {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    text-decoration: none
}

.setup-footer-logout:hover {
    color: var(--color-text-primary)
}

.paywall-success-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px
}

.paywall-success-icon svg {
    color: var(--color-accent);
    width: 48px;
    height: 48px
}

.paywall-site-pill {
    align-items: center;
    gap: 7px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary);
    display: flex;
    justify-content: center
}

.paywall-favicon {
    width: 16px;
    height: 16px;
    border-radius: 3px;
    object-fit: contain
}

#paywall-trial-btn {
    position: relative;
    overflow: hidden
}

#paywall-trial-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(to right,#fff0,#ffffff59,#fff0);
    transform: translate(-120%) skew(-20deg);
    animation: btn-shine 2.4s ease-in-out infinite;
    animation-delay: 1s;
    pointer-events: none
}

@keyframes btn-shine {
    0% {
        transform: translate(-120%) skew(-20deg)
    }

    to {
        transform: translate(300%) skew(-20deg)
    }
}

.paywall-billing-note {
    font-size: 12px;
    color: var(--color-text-tertiary);
    margin: 8px 0 0;
    text-align: center
}

.paywall-view-plans {
    display: block;
    margin-top: 16px;
    font-size: 13px;
    color: var(--color-text-secondary);
    text-decoration: none;
    text-align: center;
    transition: color .15s ease
}

.paywall-view-plans:hover {
    color: var(--color-accent);
    text-decoration: underline
}

.paywall-loader {
    display: none;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin .7s linear infinite;
    margin: 0 auto
}

.faq-list {
    background: var(--color-bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    display: flex;
    flex-direction: column
}

.faq-item {
    background: transparent;
    border: none;
    border-radius: 0;
    overflow: hidden;
    transition: background-color .2s ease
}

.faq-item:last-child {
    border-bottom: none
}

.faq-item.active {
    background-color: #ffffff04
}

.faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    cursor: pointer;
    user-select: none;
    transition: color .2s ease
}

.faq-icon {
    width: 18px;
    height: 18px;
    color: var(--color-text-secondary);
    transition: transform .3s cubic-bezier(.4,0,.2,1);
    flex-shrink: 0;
    margin-left: 12px
}

.faq-item.active .faq-icon {
    transform: rotate(180deg);
    color: var(--color-text-primary)
}

.faq-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .3s cubic-bezier(.4,0,.2,1)
}

.faq-item.active .faq-body {
    grid-template-rows: 1fr
}

.faq-content-wrapper {
    overflow: hidden
}

.faq-content {
    padding: 0 20px 20px;
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-text-secondary)
}

.faq-content a {
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 500
}

.faq-content a:hover {
    text-decoration: underline
}

.faq-content p {
    margin: 0 0 12px
}

.faq-content p:last-child {
    margin-bottom: 0
}

.topbar-select {
    height: 28px;
    padding: 0 8px;
    font-size: var(--font-size-xs);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    cursor: pointer;
    outline: none;
    transition: border-color .15s ease
}

.topbar-select:focus {
    border-color: var(--color-border-focus)
}

.analytics-time-pills {
    display: flex;
    gap: 2px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 2px
}

.time-pill {
    height: 24px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: 500;
    border: none;
    border-radius: calc(var(--radius-md) - 2px);
    background: transparent;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: background .15s ease,color .15s ease
}

.time-pill:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-card)
}

.time-pill.active {
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    font-weight: 600;
    box-shadow: 0 1px 3px #00000014
}

.analytics-filter-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px
}

.analytics-filter-select {
    height: 32px;
    padding: 0 10px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    cursor: pointer;
    outline: none;
    transition: border-color .15s ease;
    appearance: auto
}

.analytics-filter-select:focus {
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 3px #2563eb14
}

.analytics-stat-cards {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 16px;
    margin-bottom: 20px
}

.analytics-chart-card {
    margin-bottom: 20px
}

.analytics-bottom-row .analytics-chart-card {
    margin-bottom: 0
}

@media(max-width: 1100px) {
    .analytics-stat-cards {
        grid-template-columns:repeat(2,1fr)
    }
}

@media(max-width: 600px) {
    .analytics-stat-cards {
        grid-template-columns:1fr
    }
}

.analytics-stat-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    padding: 16px 18px;
    display: flex;
    align-items: flex-start;
    gap: 12px
}

.analytics-stat-card.skeleton-card {
    padding: 20px 18px;
    gap: 0;
    flex-direction: column;
    min-height: 105px
}

.analytics-stat-icon {
    color: var(--color-accent);
    flex-shrink: 0;
    margin-top: 2px
}

.analytics-stat-body {
    min-width: 0
}

.analytics-stat-label {
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 4px
}

.analytics-stat-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.analytics-stat-sub {
    font-size: 11px;
    color: var(--color-text-tertiary);
    margin-top: 2px
}

.analytics-skeleton-label {
    height: 10px;
    width: 60%;
    border-radius: 4px;
    margin-bottom: 10px
}

.analytics-skeleton-value {
    height: 28px;
    width: 40%;
    border-radius: 4px
}

.analytics-chart-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    padding: 18px 20px
}

.analytics-card-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 16px;
    justify-content: space-between
}

.analytics-card-title {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0
}

.analytics-card-subtitle {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.analytics-charts-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px
}

.analytics-chart-wide {
    grid-column: 1 / -1
}

.analytics-chart-container {
    position: relative;
    height: 200px
}

.analytics-chart-container canvas {
    width: 100%!important;
    height: 100%!important
}

.analytics-chart-empty {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm)
}

.analytics-bottom-row {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 12px
}

@media(max-width: 1000px) {
    .analytics-bottom-row {
        grid-template-columns:1fr 1fr
    }

    .analytics-bottom-row>:first-child {
        grid-column: 1 / -1
    }
}

@media(max-width: 640px) {
    .analytics-bottom-row {
        grid-template-columns:1fr
    }

    .analytics-bottom-row>:first-child {
        grid-column: auto
    }
}

.analytics-funnel,.analytics-funnel-skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px
}

.analytics-skeleton-bar {
    height: 32px;
    border-radius: var(--radius-md)
}

.analytics-funnel-row {
    display: flex;
    flex-direction: column;
    gap: 4px
}

.analytics-funnel-meta {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.analytics-funnel-label {
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--color-text-secondary)
}

.analytics-funnel-count {
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-text-primary);
    font-variant-numeric: tabular-nums
}

.analytics-funnel-track {
    height: 8px;
    background: var(--color-border);
    border-radius: 99px;
    overflow: hidden
}

.analytics-funnel-bar {
    height: 100%;
    border-radius: 99px;
    transition: width .5s cubic-bezier(.4,0,.2,1)
}

.funnel-new {
    background: var(--color-accent)
}

.funnel-reviewed {
    background: var(--color-warning)
}

.funnel-replied {
    background: var(--color-success)
}

.funnel-dismissed {
    background: var(--color-text-tertiary)
}

.analytics-ranked-list,.analytics-ranked-skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px
}

.analytics-skeleton-row {
    height: 36px;
    border-radius: var(--radius-md)
}

.analytics-ranked-item {
    display: flex;
    align-items: flex-start;
    gap: 10px
}

.analytics-ranked-rank {
    font-size: 11px;
    font-weight: 700;
    color: var(--color-text-tertiary);
    width: 16px;
    text-align: center;
    flex-shrink: 0;
    margin-top: 2px
}

.analytics-ranked-body {
    flex: 1;
    min-width: 0
}

.analytics-ranked-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px
}

.analytics-ranked-name {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.analytics-ranked-count {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    flex-shrink: 0
}

.analytics-ranked-sub {
    font-size: 11px;
    color: var(--color-text-tertiary);
    margin-bottom: 3px
}

.analytics-ranked-bar-track {
    height: 4px;
    background: var(--color-border);
    border-radius: 99px;
    overflow: hidden;
    margin-top: 4px
}

.analytics-ranked-bar-fill {
    height: 100%;
    background: var(--color-accent);
    border-radius: 99px;
    transition: width .5s cubic-bezier(.4,0,.2,1)
}

.analytics-empty-small {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    padding: 12px 0;
    text-align: center
}

#pp-addon-container {
    margin: 0 0 24px
}

.pp-addon-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: var(--color-accent-light);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-xl);
    gap: 20px;
    animation: slideDown .3s ease-out
}

.pp-addon-info {
    flex: 1
}

.pp-addon-title {
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 2px
}

.pp-addon-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.pp-addon-desc strong {
    color: var(--color-text-primary)
}

.pp-addon-buy-btn {
    white-space: nowrap;
    padding: 10px 20px
}

@keyframes slideDown {
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.pp-pass-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 20px;
    padding: 14px 18px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    background: var(--color-bg-elevated)
}

.pp-pass-strip-info {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 0
}

.pp-pass-strip-title {
    font-size: var(--font-size-sm);
    font-weight: 700;
    color: var(--color-text-primary)
}

.pp-pass-strip-desc {
    font-size: 12px;
    color: var(--color-text-secondary);
    line-height: 1.4;
    margin-top: 2px
}

.pp-pass-strip-btn {
    white-space: nowrap;
    flex-shrink: 0;
    padding: 9px 18px;
    font-size: var(--font-size-sm)
}

@media(max-width: 480px) {
    .pp-pass-strip {
        flex-direction:column;
        align-items: flex-start
    }

    .pp-pass-strip-btn {
        width: 100%
    }
}

@media(max-width: 640px) {
    .pp-addon-card {
        flex-direction:column;
        gap: 16px
    }

    .pp-addon-buy-btn {
        width: 100%
    }
}

.limit-reached-banner {
    background: var(--color-badge-bg);
    border-radius: var(--radius-2xl);
    padding: 16px 20px;
    margin-bottom: 16px;
    animation: limitBannerSlide .3s ease-out
}

.limit-reached-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap
}

.limit-reached-text {
    color: var(--color-text-primary);
    font-size: .875rem;
    line-height: 1.4
}

.limit-reached-text strong {
    color: var(--color-accent)
}

.limit-reached-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0
}

.btn-ghost {
    background: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: .8125rem
}

.btn-ghost:hover {
    background: var(--color-surface-hover, rgba(255,255,255,.05))
}

@keyframes limitBannerSlide {
    0% {
        opacity: 0;
        transform: translateY(-8px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@media(max-width: 640px) {
    .limit-reached-content {
        flex-direction:column;
        align-items: stretch
    }

    .limit-reached-actions {
        justify-content: stretch
    }

    .limit-reached-actions .btn {
        flex: 1
    }
}

.js-anim [data-anim] {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity .55s ease,transform .55s ease
}

.js-anim [data-anim-i="1"] {
    transition-delay: .05s
}

.js-anim [data-anim-i="2"] {
    transition-delay: .12s
}

.js-anim [data-anim-i="3"] {
    transition-delay: .2s
}

.js-anim [data-anim-i="4"] {
    transition-delay: .3s
}

.js-anim [data-anim-i="5"] {
    transition-delay: .4s
}

.js-anim [data-anim].in-view {
    opacity: 1;
    transform: none
}

.landing-page {
    position: relative
}

.nav {
    position: fixed;
    top: 0;
    left: 50%;
    right: auto;
    transform: translate(-50%);
    width: 100%;
    z-index: 1000;
    background: transparent;
    border: 1px solid transparent;
    margin-top: 0;
    transition: width .4s cubic-bezier(.16,1,.3,1),margin-top .4s cubic-bezier(.16,1,.3,1),background 0s,backdrop-filter 0s,border 0s,box-shadow 0s,border-radius .4s cubic-bezier(.16,1,.3,1)
}

.nav.scrolled {
    box-shadow: 0 1px 3px #0000000a,0 0 0 .5px #0000000f;
    width: calc(100% - (var(--space-6) * 2));
    max-width: calc(1240px - (var(--space-6) * 2));
    background: rgba(var(--color-bg-card-rgb),.7);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    border: 1px solid rgba(var(--color-bg-card-rgb),.5);
    border-radius: var(--radius-2xl);
    margin-top: var(--space-4);
    transition: width .4s cubic-bezier(.16,1,.3,1),margin-top .4s cubic-bezier(.16,1,.3,1),background .4s cubic-bezier(.16,1,.3,1),backdrop-filter .4s cubic-bezier(.16,1,.3,1),border .4s cubic-bezier(.16,1,.3,1),box-shadow .4s cubic-bezier(.16,1,.3,1),border-radius .4s cubic-bezier(.16,1,.3,1)
}

.nav-container {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height-mobile);
    padding: 0 var(--space-3) 0 var(--space-4)
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none
}

.nav-logo-icon {
    font-size: 1.5rem
}

.nav-logo-text {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary)
}

.nav-links {
    display: flex;
    gap: var(--space-8)
}

.nav-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    font-weight: 500;
    transition: color var(--transition-base)
}

.nav-link:hover {
    color: var(--color-text-primary);
    text-decoration: none
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-4)
}

#nav-actions-guest {
    display: flex;
    align-items: center;
    gap: var(--space-3)
}

.nav-mobile-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
    color: var(--color-text-primary)
}

.nav-mobile-toggle .close-icon,.nav-mobile-toggle.active .menu-icon {
    display: none
}

.nav-mobile-toggle.active .close-icon {
    display: flex
}

.mobile-menu {
    position: fixed;
    top: 72px;
    width: calc(100% - (var(--space-3) * 2));
    left: 50%;
    transform: translate(-50%) translateY(-10px);
    background: rgba(var(--color-bg-card-rgb),.7);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    padding: var(--space-6);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity .4s cubic-bezier(.16,1,.3,1),transform .4s cubic-bezier(.16,1,.3,1),visibility .4s
}

.mobile-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%) translateY(0)
}

.mobile-menu-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-base);
    font-weight: 500;
    padding: var(--space-3) var(--space-1);
    transition: all var(--transition-base)
}

.mobile-menu-link:last-of-type {
    border-bottom: none
}

.mobile-menu-link:hover {
    color: var(--color-text-primary)
}

.mobile-menu-actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-top: var(--space-4)
}

.nav-mobile-right,.nav-user-mobile {
    display: none
}

@media(min-width: 769px) {
    .nav-user-mobile {
        display:none!important
    }
}

.nav-mobile-theme-btn {
    display: none!important
}

.hero {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 140px 0 96px;
    overflow: hidden;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    border-bottom-left-radius: var(--radius-2xl);
    border-bottom-right-radius: var(--radius-2xl);
    background: linear-gradient(180deg,#cce7ff 0%,var(--color-bg-base) 100%)
}

[data-theme=dark] .hero,[data-theme=dark] .pricing {
    background: linear-gradient(360deg,#141414,#0c1d4e)
}

.hero:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle,var(--color-text-tertiary) 1px,transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 0%,black 0%,transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 0%,black 0%,transparent 100%);
    pointer-events: none;
    z-index: 0;
    opacity: .25
}

.hero-container {
    position: relative;
    max-width: 1240px;
    padding: 0 var(--space-6);
    text-align: center;
    z-index: 1;
    width: 100%
}

.hero-content {
    max-width: 860px;
    margin: 0 auto
}

.social-proof-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0 auto var(--space-8)
}

.avatar-stack {
    display: flex;
    align-items: center
}

.founder-avatar {
    width: 38px;
    height: 38px;
    min-width: 38px;
    min-height: 38px;
    border-radius: 50%;
    border: 2.5px solid var(--color-bg-primary);
    margin-left: -11px;
    overflow: hidden;
    background: var(--color-bg-subtle);
    flex-shrink: 0;
    box-shadow: 0 1px 3px #00000040;
    position: relative;
    transition: transform .18s ease
}

.founder-avatar.sp-skeleton {
    animation: pulse 1.5s infinite
}

.founder-avatar:first-child {
    margin-left: 0
}

.founder-avatar:hover {
    transform: translateY(-2px);
    z-index: 20!important
}

.founder-avatar img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%
}

.social-proof-text {
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-secondary);
    letter-spacing: -.01em;
    margin: 0
}

.social-proof-text strong {
    color: var(--color-text-primary);
    font-weight: 700
}

.hero-title {
    font-family: "Geist",var(--font-family);
    font-size: clamp(2.6rem,6.5vw,4.25rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -.03em;
    color: var(--color-text-primary);
    margin-bottom: var(--space-5)
}

.gradient-text {
    background: var(--color-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text
}

.text-accent {
    color: var(--color-accent)
}

.hero-subtitle {
    font-size: clamp(var(--font-size-base),2.2vw,var(--font-size-lg));
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto var(--space-8);
    line-height: 1.7
}

.hero-kw-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .07em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin: 0 auto var(--space-5);
    padding: 8px 20px;
    background: rgba(var(--color-bg-card-rgb),.7);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border)
}

.kw-label-icons {
    display: inline-flex;
    align-items: center;
    gap: 8px
}

.hero-cta {
    margin-bottom: var(--space-8)
}

.btn-arrow {
    transition: transform var(--transition-base)
}

.btn:hover .btn-arrow {
    transform: translate(4px)
}

.hero-cta-hint {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    margin-top: var(--space-2)
}

.hero-url-form {
    max-width: 460px;
    margin: 0 auto;
    width: 100%
}

.hero-url-input-wrapper {
    display: flex;
    align-items: center;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 4px 4px 4px 14px;
    gap: 10px;
    transition: border-color .2s
}

.hero-url-input-wrapper:focus-within {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent-light)
}

.hero-favicon-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative
}

.hero-favicon-globe {
    display: block;
    width: 20px;
    height: 20px;
    color: var(--color-text-tertiary)
}

.hero-favicon {
    display: none;
    position: absolute;
    inset: 0;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    object-fit: cover
}

.hero-input-sep {
    width: 1px;
    align-self: stretch;
    background: var(--color-bg-subtle);
    flex-shrink: 0;
    margin: 8px 0
}

.hero-url-input {
    flex: 1;
    border: none;
    background: transparent;
    color: #0a0a0b;
    font-size: var(--font-size-base);
    padding: 12px 0;
    outline: none;
    min-width: 0
}

.hero-url-input::placeholder {
    color: var(--color-text-tertiary)
}

.hero-url-field {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center
}

.hero-url-field .hero-url-input {
    width: 100%
}

.hero-url-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    gap: 1px;
    color: var(--color-text-tertiary);
    pointer-events: none;
    transition: opacity .15s ease
}

.hero-url-field-blinker.is-typing .hero-url-placeholder {
    opacity: 0
}

.hero-url-placeholder-caret {
    width: 1px;
    height: 1.15em;
    background: currentColor;
    animation: hero-placeholder-caret-blink 1s steps(1,end) infinite
}

@keyframes hero-placeholder-caret-blink {
    0%,49% {
        opacity: 1
    }

    50%,to {
        opacity: 0
    }
}

@keyframes hero-btn-shine {
    0% {
        transform: translate(-120%) skew(-20deg)
    }

    to {
        transform: translate(300%) skew(-20deg)
    }
}

.hero-url-btn {
    flex-shrink: 0;
    padding: 12px 22px;
    font-size: var(--font-size-sm);
    font-weight: 600;
    border-radius: var(--radius-md);
    white-space: nowrap;
    position: relative;
    overflow: hidden
}

.hero-url-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(to right,#fff0,#ffffff59,#fff0);
    transform: translate(-120%) skew(-20deg);
    animation: hero-btn-shine 2.4s ease-in-out infinite;
    animation-delay: 1s;
    pointer-events: none
}

@media(max-width: 640px) {
    .hero-url-input-wrapper {
        flex-direction:row!important;
        padding: 6px 6px 6px 14px!important;
        gap: 10px!important;
        border-radius: 14px!important
    }

    .stats-bar-row {
        flex-direction: column
    }

    .hero-url-input {
        font-size: 15px!important;
        padding: 12px 0!important
    }

    .hero-url-btn {
        padding: 10px 16px!important;
        font-size: 14px!important;
        border-radius: 10px!important
    }

    .hero-favicon-icon,.hero-input-sep {
        display: block!important
    }

    .hero-cta .btn-arrow,.final-cta .btn-arrow {
        display: none
    }
}

.hero-mockup {
    position: relative;
    max-width: 720px;
    margin: 0 auto var(--space-12)
}

.mockup-window {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    overflow: hidden
}

.mockup-chrome {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 4px 8px;
    border-bottom: 1px solid var(--color-border);
    background: rgba(var(--color-bg-card-rgb),.7);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0
}

.mockup-dots {
    display: flex;
    gap: 6px;
    flex-shrink: 0
}

.mockup-dots span {
    width: 11px;
    height: 11px;
    border-radius: 50%
}

.mockup-dots span:nth-child(1) {
    background: #ff5f57
}

.mockup-dots span:nth-child(2) {
    background: #febc2e
}

.mockup-dots span:nth-child(3) {
    background: #28c840
}

.mockup-chrome-title {
    flex: 1;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--color-text-tertiary);
    text-align: center
}

.mockup-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border-bottom: 1px solid var(--color-bg-subtle);
    gap: var(--space-3)
}

.mockup-chips {
    display: flex;
    gap: 6px
}

.mockup-chip {
    font-size: 11.5px;
    font-weight: 500;
    color: var(--color-text-secondary);
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 3px 10px;
    cursor: default
}

.mockup-chip.active {
    background: #2563eb12;
    border-color: #2563eb33;
    color: var(--color-accent)
}

.mockup-lead-count {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--color-text-primary);
    background: var(--color-badge-bg);
    padding: 3px 9px;
    border-radius: var(--radius-full)
}

.hero-notifications {
    position: relative;
    width: 100%;
    height: 72px;
    overflow: hidden
}

.notif-card {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 12px 16px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
    transition: opacity .35s ease,transform .35s ease
}

.notif-card+.notif-card {
    border-top: 1px solid var(--color-bg-subtle)
}

.notif-card.notif-active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto
}

.notif-card.notif-entering {
    opacity: 1;
    transform: translateY(0)
}

.notif-card.notif-exiting {
    opacity: 0;
    transform: translateY(-10px)
}

.notif-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #ffffffeb;
    letter-spacing: -.01em
}

.notif-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left
}

.notif-meta {
    font-size: 11px;
    color: var(--color-text-tertiary)
}

.notif-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-primary);
    line-height: 1.35;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.notif-badge {
    flex-shrink: 0;
    min-width: 34px;
    height: 26px;
    padding: 0 8px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700
}

.notif-badge.high {
    background: #05966917;
    color: #059669;
    border: 1px solid rgba(5,150,105,.18)
}

.notif-badge.medium {
    background: #d9770614;
    color: #d97706;
    border: 1px solid rgba(217,119,6,.16)
}

.notif-title-icon {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-right: 5px;
    margin-top: -1px;
    opacity: .55;
    flex-shrink: 0
}

.notif-tag {
    display: inline-block;
    margin-top: -4px;
    font-size: 10px;
    font-weight: 600;
    color: var(--color-accent)
}

.hero-notifications .notif-title {
    white-space: normal;
    text-overflow: unset;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden
}

.hero-notifications .notif-card {
    align-items: flex-start;
    padding: 11px 14px
}

.hero-float {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 12px 16px;
    font-size: 20px;
    z-index: 2;
    pointer-events: none
}

.hero-float-left {
    left: -100px;
    top: 35%
}

.hero-float-right {
    right: -100px;
    top: 55%
}

.hero-float-num {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1
}

.hero-float-label {
    font-size: 11px;
    color: var(--color-text-tertiary);
    line-height: 1;
    margin-top: 2px
}

.trust-logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 0
}

.trust-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 0 var(--space-8)
}

.trust-stat-number {
    font-family: "Geist",var(--font-family);
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.025em;
    line-height: 1
}

.trust-stat-label {
    font-size: 11px;
    color: var(--color-text-tertiary);
    white-space: nowrap
}

.trust-divider {
    width: 1px;
    height: 28px;
    background: var(--color-border-strong)
}

.section-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 var(--space-6)
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-6)
}

.section-badge {
    display: inline-block;
    font-size: 11px;
    color: var(--color-accent);
    font-weight: 700;
    letter-spacing: .1em;
    padding: 4px 12px
}

.section-title {
    font-family: "Geist",var(--font-family);
    font-size: clamp(1.875rem,4vw,2.625rem);
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.025em;
    line-height: 1.2
}

.section-subtitle {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.7
}

.features {
    padding: 108px 0
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-6)
}

.feature-card {
    padding: var(--space-8);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    transition: transform .25s cubic-bezier(.16,1,.3,1),border-color .25s
}

.feature-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-accent)
}

.feature-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
    letter-spacing: -.01em
}

.feature-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.7
}

.features-cta {
    text-align: center;
    margin-top: var(--space-10)
}

.pricing {
    padding: 108px 0;
    background: linear-gradient(180deg,#cce7ff 0%,var(--color-bg-base) 100%)
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-5);
    margin-top: var(--space-8);
    align-items: start
}

.pricing-card {
    position: relative;
    padding: var(--space-8);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    transition: transform .25s cubic-bezier(.16,1,.3,1)
}

.pricing-card.popular {
    transform: scale(1.03);
    background: var(--color-bg-card);
    border: 1.5px solid var(--color-border-strong)
}

.pricing-popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translate(-50%);
    padding: var(--space-1) var(--space-4);
    background: var(--color-badge-bg);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 700;
    color: var(--color-accent);
    white-space: nowrap;
    letter-spacing: .03em
}

.pricing-card-header {
    margin-bottom: var(--space-5)
}

.pricing-plan-name {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-1)
}

.pricing-plan-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.pricing-price {
    margin-bottom: var(--space-6)
}

.pricing-amount {
    font-size: 2.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.04em;
    font-family: "Geist",var(--font-family)
}

.pricing-period {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.pricing-billing-note {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    margin-top: var(--space-1)
}

.pricing-features {
    list-style: none;
    margin-bottom: var(--space-6)
}

.pricing-features li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-border-strong)
}

.pricing-features li:last-child {
    border-bottom: none
}

.pricing-features li.disabled {
    color: var(--color-text-tertiary);
    opacity: .55
}

.check {
    color: var(--color-text-tertiary);
    font-weight: 600;
    flex-shrink: 0
}

.x {
    color: var(--color-text-disabled);
    flex-shrink: 0
}

.pricing-trust {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-6);
    margin-top: var(--space-10);
    padding-top: var(--space-8);
    border-top: 1px solid var(--color-border-strong)
}

.pricing-trust-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary)
}

.pricing-trust-icon {
    font-size: 1.125rem
}

.compare-plans {
    padding: 0 0 108px
}

.compare-plans-header {
    text-align: center;
    margin-bottom: var(--space-10)
}

.compare-plans-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2)
}

.compare-plans-subtitle {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.compare-plans-scroll {
    overflow: clip;
    border-radius: var(--radius-2xl)
}

.compare-grid {
    display: grid;
    grid-template-columns: 35% 1fr 1fr 1fr;
    background: var(--color-bg-card)
}

.cp-head-cell {
    padding: var(--space-5) var(--space-6);
    text-align: center;
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-text-primary);
    background: var(--color-bg-card);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 72px;
    z-index: 10
}

.cp-head-cell:first-child {
    text-align: left;
    color: var(--color-text-secondary);
    font-weight: 500
}

.cp-head-cell.cp-popular {
    background: color-mix(in srgb,var(--color-accent) 8%,var(--color-bg-card));
    color: var(--color-accent)
}

.cp-cell {
    padding: var(--space-4) var(--space-6);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center
}

.cp-cell.cp-label {
    justify-content: flex-start
}

.cp-cell.cp-last {
    border-bottom: none
}

.cp-cell.cp-popular-col {
    background: color-mix(in srgb,var(--color-accent) 4%,transparent)
}

.cp-soon {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    font-style: italic
}

.cp-val {
    font-weight: 600;
    color: var(--color-text-primary)
}

.cp-feat-tip {
    cursor: help
}

.cp-feat-tip:after {
    width: 160px;
    text-align: left
}

.cp-tip-q {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid currentColor;
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    margin-left: 5px;
    opacity: .4;
    flex-shrink: 0
}

@media(max-width: 768px) {
    .compare-plans-title {
        font-size:var(--font-size-2xl)
    }

    .compare-grid {
        grid-template-columns: 42% 1fr 1fr 1fr
    }

    .cp-head-cell,.cp-cell {
        padding-left: var(--space-2);
        padding-right: var(--space-2);
        font-size: var(--font-size-xs)
    }

    .cp-tip-q {
        display: none
    }
}

.roi-calc {
    padding: 0 0 108px
}

.roi-calc-inner {
    max-width: 720px;
    margin: 0 auto
}

.roi-calc-header {
    text-align: center;
    margin-bottom: var(--space-8)
}

.roi-calc-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2)
}

.roi-calc-subtitle {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.roi-input-row {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    background: var(--color-bg-card);
    border-radius: 12px;
    padding: var(--space-5) var(--space-6);
    margin-bottom: var(--space-4)
}

.roi-input-label {
    flex: 1;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-text-secondary);
    white-space: nowrap
}

.roi-input-wrap {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--space-2) var(--space-4);
    transition: border-color .15s
}

.roi-input-wrap:focus-within {
    border-color: var(--color-accent)
}

.roi-input-prefix {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-tertiary)
}

.roi-input {
    width: 110px;
    background: transparent;
    border: none;
    outline: none;
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-text-primary);
    text-align: right
}

.roi-input::placeholder {
    color: var(--color-text-tertiary);
    font-weight: 400
}

.roi-plan-tabs {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-6)
}

.roi-plan-tab {
    flex: 1;
    padding: var(--space-3) var(--space-4);
    border: none;
    border-radius: 8px;
    background: var(--color-bg-card);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    transition: border-color .15s,color .15s,background .15s;
    text-align: center
}

.roi-plan-tab:hover {
    border-color: var(--color-accent);
    color: var(--color-text-primary)
}

.roi-plan-tab.active {
    border-color: var(--color-accent);
    background: color-mix(in srgb,var(--color-accent) 10%,var(--color-bg-card));
    color: var(--color-accent)
}

.roi-plan-tab .roi-tab-price {
    display: block;
    font-size: var(--font-size-xs);
    font-weight: 400;
    color: var(--color-text-tertiary);
    margin-top: 2px
}

.roi-plan-tab.active .roi-tab-price {
    color: color-mix(in srgb,var(--color-accent) 70%,white)
}

.roi-result {
    background: var(--color-bg-card);
    border-radius: 12px;
    overflow: hidden
}

.roi-result-main {
    padding: var(--space-8) var(--space-6);
    text-align: center;
    border-bottom: 1px solid var(--color-border)
}

.roi-result-label {
    font-size: var(--font-size-xs);
    text-transform: uppercase;
    letter-spacing: .08em;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-2)
}

.roi-result-amount {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--color-accent);
    line-height: 1;
    margin-bottom: var(--space-2);
    transition: opacity .2s
}

.roi-result-multiplier {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.roi-result-multiplier strong {
    color: var(--color-accent);
    font-weight: 700
}

.roi-stats {
    display: grid;
    grid-template-columns: repeat(3,1fr)
}

.roi-stat {
    padding: var(--space-5) var(--space-5);
    text-align: center;
    border-right: 1px solid var(--color-border)
}

.roi-stat:last-child {
    border-right: none
}

.roi-stat-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-1)
}

.roi-stat-val {
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-text-primary)
}

.roi-empty {
    padding: var(--space-10);
    text-align: center;
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm)
}

.roi-cherries {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-top: var(--space-5);
    justify-content: center
}

.roi-cherry {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    padding: var(--space-1) var(--space-3)
}

.roi-cherry-plus {
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1;
    color: var(--color-accent);
    flex-shrink: 0
}

@media(max-width: 768px) {
    .roi-calc-title {
        font-size:var(--font-size-2xl)
    }

    .roi-input-row {
        flex-direction: column;
        align-items: stretch;
        gap: var(--space-3)
    }

    .roi-input-wrap {
        justify-content: space-between
    }

    .roi-input {
        width: 100%
    }

    .roi-result-amount {
        font-size: 2.5rem
    }

    .roi-stats {
        grid-template-columns: 1fr
    }

    .roi-stat {
        border-right: none;
        border-bottom: 1px solid var(--color-border)
    }

    .roi-stat:last-child {
        border-bottom: none
    }
}

.testimonials {
    padding: 108px 0
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-6)
}

.testimonial-card {
    padding: var(--space-8);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    transition: transform .25s cubic-bezier(.16,1,.3,1)
}

.testimonial-rating {
    margin-bottom: var(--space-4);
    font-size: 14px;
    letter-spacing: 1px
}

.testimonial-text {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.75;
    margin-bottom: var(--space-5)
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: var(--space-3)
}

.testimonial-avatar {
    width: 40px;
    height: 40px;
    background: var(--color-bg-card-hover);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    flex-shrink: 0
}

.testimonial-info {
    display: flex;
    flex-direction: column
}

.testimonial-name {
    font-weight: 600;
    font-size: var(--font-size-sm);
    color: var(--color-text-primary)
}

.testimonial-role {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary)
}

.ask-ai-section {
    padding: 100px 0;
    text-align: center
}

.ask-ai-header {
    margin-bottom: 2.5rem
}

.ask-ai-title {
    font-size: clamp(2rem,5vw,2.75rem);
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.025em;
    line-height: 1.15;
    margin: var(--space-4) 0 var(--space-3)
}

.ask-ai-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.6
}

.ask-ai-pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    justify-content: center;
    align-items: center
}

.ai-pill {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 11px 20px;
    border-radius: var(--radius-2xl);
    background: var(--color-bg-card);
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    text-decoration: none;
    transition: border-color var(--transition-base),background var(--transition-base),box-shadow var(--transition-base),transform var(--transition-base);
    white-space: nowrap;
    cursor: pointer
}

.ai-pill svg {
    flex-shrink: 0
}

.ai-pill:hover {
    border-color: var(--color-border-strong);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px)
}

@media(max-width: 600px) {
    .ask-ai-section {
        padding:72px 0
    }

    .ask-ai-pills {
        gap: var(--space-2)
    }

    .ai-pill {
        padding: 10px 16px;
        font-size: var(--font-size-xs)
    }
}

.faq {
    padding: 108px 0
}

.faq-tabs-wrapper {
    max-width: 680px;
    margin: 0 auto
}

.faq-tab-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: var(--space-10)
}

.faq-tab-btn {
    padding: 7px 16px;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all .15s ease;
    font-family: inherit
}

.faq-tab-btn:hover,.faq-tab-btn.active {
    color: var(--color-text-primary);
    background: var(--color-bg-card)
}

.faq-tab-panel {
    display: none
}

.faq-tab-panel.active {
    display: block
}

.faq-cta {
    text-align: center;
    margin-top: var(--space-10)
}

.faq-cta p {
    color: var(--color-text-secondary)
}

.final-cta {
    padding: 108px 0;
    position: relative
}

.final-cta-content {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    border-radius: 32px;
    padding: 26px 73px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: clamp(24px,4vw,64px);
    text-align: left;
    align-content: space-around
}

.final-cta-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

.final-cta-visual {
    flex-shrink: 0;
    display: flex;
    justify-content: center
}

.final-cta-mag {
    display: block;
    width: clamp(220px,26vw,360px);
    height: auto
}

.final-cta-content .final-cta-subtitle {
    color: var(--color-text-secondary)
}

.final-cta-content .final-cta-trust {
    color: var(--color-text-tertiary)
}

.final-cta-content .social-proof-wrap {
    margin-top: var(--space-8);
    margin-bottom: 0
}

.final-cta-content .hero-url-form {
    max-width: 460px;
    width: 100%
}

.final-cta-content .hero-cta-hint {
    text-align: center
}

.final-cta-content .hero-url-input-wrapper:focus-within {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent-light);
    background: var(--color-bg-primary)
}

.final-cta-content .hero-url-input {
    color: var(--color-text-primary)
}

.final-cta-content .hero-url-input::placeholder {
    color: var(--color-text-tertiary)
}

.final-cta-content .hero-favicon-globe {
    color: var(--color-text-tertiary)
}

.final-cta-content .hero-input-sep {
    background: var(--color-bg-subtle)
}

.final-cta-title {
    font-family: "Geist",var(--font-family);
    font-size: clamp(1.875rem,4vw,2.75rem);
    font-weight: 700;
    letter-spacing: -.025em;
    max-width: 800px;
    margin-inline:0;color: var(--color-text-primary);
    line-height: 46px;
    margin-bottom: var(--space-3)
}

.final-cta-subtitle {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-8)
}

.final-cta-actions {
    margin-bottom: var(--space-2)
}

.final-cta-trust {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-6);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm)
}

.lp-footer {
    padding: var(--space-12) 0 var(--space-8);
    overflow: hidden
}

.footer-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--space-8);
    padding-top: var(--space-12)
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none
}

.footer-logo-icon {
    font-size: 1.375rem
}

.footer-logo-text {
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-text-primary)
}

.footer-tagline {
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm);
    line-height: 1.6;
    margin-bottom: var(--space-4)
}

.footer-social {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-6)
}

.theme-cycle-btn {
    background: none;
    border: none;
    padding: var(--space-1);
    color: var(--color-text-tertiary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--transition-base);
    width: 34px;
    height: 34px;
    border-radius: var(--radius-md)
}

.theme-cycle-btn:hover {
    color: var(--color-text-primary);
    background-color: var(--color-bg-card)
}

.theme-cycle-btn span {
    display: flex;
    align-items: center;
    justify-content: center
}

.footer-ai-ask {
    margin-top: var(--space-8)
}

.ai-ask-title {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4)
}

.ai-btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3)
}

.ai-btn {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--color-text-secondary);
    transition: all .4s cubic-bezier(.16,1,.3,1);
    padding: 10px
}

.ai-btn:hover {
    background: var(--color-bg-card);
    border-color: var(--color-accent-glow);
    box-shadow: var(--shadow-sm)
}

.ai-btn svg {
    width: 85%;
    height: 85%;
    transition: transform .3s ease
}

.ai-btn:hover svg {
    transform: scale(1.05)
}

.ai-btn svg {
    width: 100%;
    height: 100%
}

.footer-social-link {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    color: var(--color-text-tertiary);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: all var(--transition-base)
}

.footer-social-link:hover {
    background: var(--color-bg-card);
    border-color: var(--color-accent-glow);
    box-shadow: var(--shadow-sm)
}

.footer-links-title {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4)
}

.footer-links {
    list-style: none
}

.footer-links li {
    margin-bottom: var(--space-3)
}

.footer-links a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: color var(--transition-base)
}

.footer-links a:hover {
    color: var(--color-text-primary)
}

.footer-bottom {
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-12);
    padding-bottom: var(--space-8);
    margin-top: var(--space-12);
    position: relative;
    overflow: visible
}

.footer-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-xs);
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase
}

.footer-legal {
    display: flex;
    gap: var(--space-8)
}

.footer-legal a {
    color: var(--color-text-tertiary);
    text-decoration: none;
    transition: color var(--transition-base);
    font-size: var(--font-size-xs)
}

.footer-legal a:hover {
    color: var(--color-text-primary)
}

.footer-brand-huge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    font-size: clamp(6rem,14vw,30rem);
    font-weight: 900;
    color: var(--color-text-primary);
    line-height: 1.1;
    margin-top: var(--space-10);
    margin-bottom: -4vw;
    letter-spacing: -.05em;
    user-select: none;
    pointer-events: auto;
    white-space: nowrap
}

.footer-brand-huge span {
    display: inline-block;
    transition: all .5s cubic-bezier(.16,1,.3,1);
    cursor: default;
    opacity: .04;
    background: linear-gradient(0deg,var(--color-bg-card) 22%,var(--color-text-primary) 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text
}

.footer-brand-huge span:hover {
    opacity: 1;
    color: var(--color-accent);
    -webkit-text-fill-color: var(--color-accent);
    text-shadow: 0 0 15px var(--color-accent);
    transform: translateY(-30px) scale(1.1);
    z-index: 10
}

[data-theme=dark] .footer-brand-huge span {
    opacity: .08
}

[data-theme=dark] .footer-brand-huge span:hover {
    opacity: 1
}

@media(max-width: 768px) {
    .footer-bottom-row {
        flex-direction:column-reverse;
        text-align: center;
        gap: var(--space-6)
    }

    .footer-legal {
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--space-4)
    }

    .footer-brand-huge {
        font-size: 4.5rem;
        line-height: 1;
        margin-top: var(--space-10);
        margin-bottom: 0
    }
}

.use-cases {
    padding: 108px 0
}

.use-cases-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-6)
}

.use-case-card {
    padding: var(--space-8);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    transition: transform .25s cubic-bezier(.16,1,.3,1);
    text-align: left
}

.use-case-icon {
    width: 44px;
    height: 44px;
    border-radius: 11px;
    margin-bottom: var(--space-5);
    display: flex;
    align-items: center;
    justify-content: center
}

.use-case-title {
    font-size: var(--font-size-base);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
    letter-spacing: -.01em
}

.use-case-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.7
}

.how-it-works {
    padding: 108px 0
}

.how-it-works-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-5)
}

.how-it-works-grid-4 {
    grid-template-columns: repeat(4,1fr)
}

@media(max-width: 1024px) {
    .how-it-works-grid-4 {
        grid-template-columns:repeat(2,1fr)
    }
}

@media(max-width: 768px) {
    .how-it-works-grid-4 {
        grid-template-columns:1fr
    }
}

.step-card {
    padding: var(--space-2);
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    text-align: left;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 0
}

.step-card-header {
    margin-bottom: var(--space-4);
    padding: var(--space-4)
}

.step-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-1);
    line-height: 1.3
}

.step-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.6
}

.how-it-works-cta {
    text-align: center;
    margin-top: var(--space-10)
}

.how-it-works {
    background: var(--color-bg-base)
}

.how-it-works .section-header {
    position: sticky;
    top: 270px;
    z-index: 0;
    background: var(--color-bg-base);
    padding-bottom: var(--space-8);
    margin-bottom: 0
}

@media(max-width: 900px) {
    .how-it-works .section-header {
        position:static;
        padding-bottom: 0;
        margin-bottom: var(--space-16)
    }
}

.how-it-works-rows {
    display: flex;
    flex-direction: column
}

.how-it-works-row {
    position: sticky;
    top: 421px;
    z-index: var(--hiw-z, 1);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 64px;
    padding: 48px 56px;
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    width: 100%;
    box-sizing: border-box
}

.hiw-text {
    flex: 0 0 42%;
    min-width: 0
}

.hiw-illus {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column
}

.hiw-illus .step-illus {
    min-height: 260px
}

.hiw-step-num {
    font-size: 4rem;
    font-weight: 800;
    color: var(--color-border);
    line-height: 1;
    margin-bottom: var(--space-3);
    font-variant-numeric: tabular-nums;
    letter-spacing: -2px
}

.hiw-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
    line-height: 1.3
}

.hiw-desc {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    line-height: 1.75;
    max-width: 400px
}

@media(max-width: 900px) {
    .how-it-works-rows {
        gap:16px;
        padding-bottom: 0
    }

    .how-it-works-row {
        position: static;
        top: auto;
        margin-bottom: 0;
        flex-direction: column;
        gap: 32px;
        padding: 36px 24px
    }

    .hiw-text {
        flex: none;
        width: 100%
    }

    .hiw-illus {
        width: 100%
    }

    .hiw-step-num {
        font-size: 3rem
    }

    .hiw-illus .step-illus {
        min-height: 280px
    }
}

@media(min-width: 901px)and (max-height:880px) {
    .how-it-works .section-header {
        top:150px;
        padding-bottom: var(--space-6);
        margin-bottom: var(--space-8)
    }

    .how-it-works-row {
        top: 325px;
        padding: 32px 44px
    }
}

.step-illus {
    flex: 1;
    border-radius: var(--radius-xl);
    overflow: hidden;
    background: var(--color-bg-subtle);
    min-height: 220px;
    position: relative;
    display: flex;
    flex-direction: column
}

.step-illus-frame {
    background: var(--color-bg-base);
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative
}

.step-illus-frame-padded {
    padding: 12px
}

.step-illus-frame-noPad {
    padding: 0
}

.step-illus-1 .step-illus-frame {
    justify-content: center;
    padding: 16px;
    gap: 10px
}

.step-illus-input-row {
    display: flex;
    align-items: center;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 7px 10px;
    gap: 8px
}

.step-illus-globe-icon {
    color: var(--color-text-tertiary);
    flex-shrink: 0
}

.step-illus-sep {
    width: 1px;
    height: 14px;
    background: var(--color-border);
    flex-shrink: 0
}

.step-illus-input-text {
    flex: 1;
    font-size: 12px;
    color: var(--color-text-primary);
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.step-illus-btn {
    font-size: 11px;
    font-weight: 600;
    color: #fff;
    background: var(--color-accent);
    padding: 4px 10px;
    border-radius: 6px;
    white-space: nowrap;
    flex-shrink: 0
}

.step-illus-hint {
    font-size: 11px;
    color: var(--color-text-tertiary);
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center
}

.step-illus-hint:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-accent);
    flex-shrink: 0;
    animation: pulse-dot 1.5s ease-in-out infinite
}

@keyframes pulse-dot {
    0%,to {
        opacity: 1;
        transform: scale(1)
    }

    50% {
        opacity: .5;
        transform: scale(.85)
    }
}

.step-kw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px
}

.step-kw-label {
    font-size: 9px;
    font-weight: 700;
    color: var(--color-text-tertiary);
    letter-spacing: .06em;
    text-transform: uppercase
}

.step-kw-count {
    font-size: 9px;
    font-weight: 600;
    color: var(--color-text-tertiary)
}

.step-kw-section {
    margin-bottom: 6px
}

.step-kw-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 3px
}

.step-kw-chip {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 6px;
    border-radius: 20px;
    font-size: 9px;
    font-weight: 500;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    white-space: nowrap
}

.step-chip-x {
    opacity: .5;
    font-size: 9px
}

.step-divider {
    height: 1px;
    background: var(--color-border);
    margin: 6px 0
}

.step-platform-block {
    display: flex;
    flex-direction: column;
    gap: 4px
}

.step-platform-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px
}

.step-platform-name {
    font-size: 10px;
    font-weight: 500;
    color: var(--color-text-primary)
}

.step-platform-muted {
    color: var(--color-text-tertiary)
}

.step-platform-icon-ph {
    font-size: 10px;
    font-weight: 700;
    color: var(--color-text-tertiary);
    width: 13px;
    text-align: center
}

.step-li-icon {
    font-family: serif;
    font-size: 9px;
    font-weight: 900;
    background: #0a66c2;
    color: #fff;
    border-radius: 2px;
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center
}

.step-toggle {
    width: 26px;
    height: 14px;
    border-radius: 7px;
    background: var(--color-border);
    position: relative;
    flex-shrink: 0;
    margin-left: auto
}

.step-toggle:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    top: 2px;
    left: 2px
}

.step-toggle-on {
    background: var(--color-accent)
}

.step-toggle-on:after {
    transform: translate(12px)
}

.step-soon-badge {
    font-size: 9px;
    font-weight: 600;
    color: var(--color-text-tertiary);
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 1px 5px;
    margin-left: auto
}

.step-platform-soon-row {
    opacity: .5
}

.step-sub-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    margin-left: 19px
}

.step-sub-chip {
    font-size: 9px;
    font-weight: 500;
    color: var(--color-text-secondary);
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    padding: 1px 6px;
    white-space: nowrap
}

.step-add-sub-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 19px;
    margin-top: 2px
}

.step-add-sub-input {
    flex: 1;
    font-size: 9px;
    color: var(--color-text-tertiary);
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: 3px 6px
}

.step-add-btn {
    font-size: 9px;
    font-weight: 600;
    color: var(--color-accent);
    background: var(--color-accent-light);
    border: 1px solid var(--color-accent-glow);
    border-radius: 5px;
    padding: 2px 7px;
    white-space: nowrap;
    flex-shrink: 0
}

.step-platforms-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 8px
}

.step-lead-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--color-border)
}

.step-lead-row:last-child {
    border-bottom: none
}

.step-lead-row-partial {
    opacity: .4
}

.step-lead-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center
}

.step-lead-body {
    flex: 1;
    min-width: 0
}

.step-lead-title {
    font-size: 10px;
    font-weight: 500;
    color: var(--color-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px
}

.step-lead-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 9px;
    color: var(--color-text-tertiary)
}

.step-lead-sub {
    font-size: 9px;
    font-weight: 600
}

.step-lead-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0
}

.step-lead-time {
    font-size: 9px;
    color: var(--color-text-tertiary);
    white-space: nowrap
}

.step-lead-star {
    font-size: 11px;
    color: var(--color-text-tertiary);
    opacity: .35
}

.step-illus-3 .step-illus-frame:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    background: linear-gradient(to bottom,transparent,var(--color-bg-base));
    pointer-events: none
}

.step-illus-4 .step-illus-frame {
    gap: 0
}

.step-reply-nav {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    font-size: 10px;
    color: var(--color-text-secondary);
    flex-shrink: 0
}

.step-reply-nav-arrow {
    color: var(--color-text-tertiary);
    font-size: 14px
}

.step-reply-nav-label {
    font-weight: 600;
    color: var(--color-text-primary)
}

.step-reply-nav-page {
    font-size: 9px;
    color: var(--color-text-tertiary)
}

.step-reply-body {
    flex: 1;
    font-size: 10px;
    line-height: 1.6;
    color: var(--color-text-secondary);
    padding: 10px 12px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical
}

.step-reply-actions {
    display: flex;
    gap: 4px;
    padding: 6px 12px;
    flex-shrink: 0
}

.step-reply-action {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 6px;
    background: none;
    border: none;
    font-size: 10px;
    font-weight: 500;
    color: var(--color-text-secondary);
    cursor: default;
    white-space: nowrap
}

.step-reply-footer {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    flex-shrink: 0
}

.step-reply-submit {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 8px;
    background: var(--color-accent);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    cursor: default;
    white-space: nowrap;
    flex: 1;
    justify-content: center;
    border: none
}

.step-reply-check,.step-reply-dismiss {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    color: var(--color-text-secondary);
    flex-shrink: 0
}

.stats-bar {
    padding: var(--space-16) 0;
    background: var(--color-bg-card)
}

.stats-bar-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-8);
    flex-wrap: wrap
}

.stats-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1)
}

.stats-bar-num {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-text-primary);
    letter-spacing: -.02em;
    line-height: 1
}

.stats-bar-label {
    font-size: var(--font-size-xs);
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: .05em
}

.stats-bar-divider {
    width: 1px;
    height: 36px;
    background: var(--color-border-strong);
    flex-shrink: 0
}

[data-theme=dark] .stats-bar {
    background: var(--color-bg-card)
}

[data-theme=dark] .stats-bar-divider {
    background: var(--color-border)
}

.founder {
    padding: 108px 0;
    position: relative;
    overflow: hidden
}

.founder-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 660px;
    margin: 0 auto;
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    padding: var(--space-12) var(--space-10);
    position: relative;
    z-index: 1
}

.founder-image {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-8)
}

.founder-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--color-bg-subtle);
    flex-shrink: 0
}

.founder-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover
}

.founder-emoji {
    font-size: 4.5rem
}

.founder-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.status-dot {
    width: 7px;
    height: 7px;
    background: var(--color-success);
    border-radius: 50%;
    animation: status-pulse 2s ease-in-out infinite
}

@keyframes status-pulse {
    0%,to {
        opacity: 1;
        transform: scale(1)
    }

    50% {
        opacity: .4;
        transform: scale(1.25)
    }
}

.founder-text {
    max-width: 100%;
    width: 100%
}

.founder-greeting {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    text-align: center;
    width: 100%;
    margin-bottom: var(--space-1)
}

.founder-role {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary);
    text-align: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: var(--space-8)
}

.wave {
    font-size: 1.375rem;
    animation: wave-hand 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
    display: inline-block
}

@keyframes wave-hand {
    0%,to {
        transform: rotate(0)
    }

    10%,30% {
        transform: rotate(14deg)
    }

    20% {
        transform: rotate(-8deg)
    }

    40% {
        transform: rotate(-4deg)
    }

    50%,to {
        transform: rotate(0)
    }
}

.founder-story {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.85;
    margin-bottom: var(--space-5)
}

.founder-story .highlight {
    color: var(--color-text-primary);
    font-weight: 600
}

.founder-cta {
    margin-top: var(--space-8);
    width: 100%
}

.hero-live-feed {
    max-width: 740px;
    margin: 0 auto var(--space-8);
    width: 100%
}

.hero-live-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 11.5px;
    font-weight: 600;
    color: var(--color-success);
    margin-bottom: var(--space-4);
    letter-spacing: .02em
}

.hero-notif-viewport {
    position: relative;
    height: 90px;
    overflow: hidden;
    border-radius: var(--radius-xl)
}

.hero-notif-stack {
    position: relative;
    height: 100%
}

.hero-notif-card {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: 14px 16px;
    background: rgba(var(--color-bg-card-rgb),.7);
    border-radius: var(--radius-xl);
    cursor: default;
    transform-origin: top center;
    will-change: transform,opacity;
    border: 1px solid var(--color-border);
    backdrop-filter: blur(20px) saturate(1.8);
    -webkit-backdrop-filter: blur(20px) saturate(1.8);
    box-shadow: var(--shadow-sm)
}

.hero-notif-card .lead-info {
    height: 40px
}

.hero-notif-card .lead-meta-row {
    color: var(--slate-500, var(--color-text-tertiary))
}

.hero-screenshot {
    width: 100%;
    margin: 0 auto var(--space-10);
    transform: perspective(1200px) rotateX(10deg);
    transform-origin: center top;
    will-change: transform;
    animation: hero-screenshot-fadein .7s ease .3s both;
    max-width: 1000px
}

@keyframes hero-screenshot-fadein {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.demo-outer {
    background: #0000000a;
    border-radius: var(--radius-2xl);
    padding: 20px;
    border: 1px solid var(--color-border)
}

[data-theme=dark] .demo-outer {
    background: #ffffff0a
}

.demo-inner {
    background: var(--color-bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: 0 12px 48px #0000001f
}

@media(max-width: 768px) {
    .demo-outer {
        padding:10px
    }
}

.screenshot-url-bar {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text-tertiary);
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    max-width: 260px;
    margin: 0 auto
}

.screenshot-url-bar svg {
    flex-shrink: 0;
    opacity: .5
}

.ss-img {
    display: block;
    width: 100%;
    height: auto
}

.ss-img-dark,[data-theme=dark] .ss-img-light {
    display: none
}

[data-theme=dark] .ss-img-dark {
    display: block
}

.platforms {
    padding: 108px 0
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2px;
    border-radius: var(--radius-2xl);
    overflow: hidden;
    min-height: 300px
}

.platform-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--space-6) var(--space-4);
    background: var(--color-bg-card);
    gap: var(--space-3);
    position: relative;
    justify-content: center
}

.platform-icon-wrap {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0
}

.platform-label-badge {
    font-size: 13px;
    font-weight: 800
}

.platform-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text-primary)
}

.platform-desc {
    font-size: 12.5px;
    font-weight: 400;
    color: var(--color-text-tertiary);
    line-height: 1.5;
    max-width: 180px
}

.hero-trust {
    margin-top: var(--space-4)
}

.platform-status-badge {
    position: absolute;
    top: 10px;
    display: inline-flex;
    align-items: center;
    padding: 2px 7px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .5px;
    line-height: 1.4
}

.platform-coming {
    background: var(--color-bg-card);
    color: var(--color-text-tertiary);
    border: 1px solid var(--color-border)
}

.bento-section {
    padding: 108px 0;
    overflow: hidden
}

.bento-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: var(--space-5);
    overflow: hidden
}

.bento-card {
    padding: var(--space-10);
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl)
}

.bento-large {
    grid-column: span 2
}

.bento-time-card {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    flex-direction: row-reverse
}

.bento-time-content {
    flex: 1 1 0;
    min-width: 0
}

.bento-time-illus {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-5);
    width: 160px
}

.bento-clock {
    width: 90px;
    height: 90px;
    flex-shrink: 0
}

.bento-time-bars {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-2)
}

.bento-time-bar-row {
    display: flex;
    align-items: center;
    gap: var(--space-2)
}

.bento-time-bar-label {
    font-size: 10px;
    color: var(--color-text-secondary);
    white-space: nowrap;
    width: 72px;
    flex-shrink: 0
}

.bento-time-bar-track {
    flex: 1 1 0;
    height: 6px;
    background: var(--color-bg-primary);
    border-radius: 99px;
    overflow: hidden
}

.bento-time-bar {
    height: 100%;
    border-radius: 99px
}

.bento-time-bar-before {
    width: 100%;
    background: var(--color-border)
}

.bento-time-bar-after {
    width: 14%;
    background: var(--color-accent)
}

.bento-time-bar-val {
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-secondary);
    width: 22px;
    text-align: right;
    flex-shrink: 0
}

.bento-stat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-8) var(--space-6)
}

.bento-stat-num {
    font-family: "Geist",var(--font-family);
    font-size: 3rem;
    font-weight: 800;
    color: var(--color-text-primary);
    letter-spacing: -.04em;
    line-height: 1;
    margin-bottom: var(--space-2)
}

.bento-stat-label {
    font-size: 12px;
    color: var(--color-text-tertiary);
    line-height: 1.5
}

.bento-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-accent);
    margin-bottom: var(--space-5)
}

.bento-stat {
    font-family: "Geist",var(--font-family);
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--color-accent);
    letter-spacing: -.04em;
    line-height: 1;
    margin-bottom: var(--space-2)
}

.bento-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
    letter-spacing: -.015em;
    line-height: 1.3
}

.gauge-timer {
    width: 140px;
    height: 60px;
    background: linear-gradient(90deg,#2563eb,#1d4ed8);
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 4px 12px #2563eb40;
    margin-top: 10px
}

.bento-center-cta {
    display: flex;
    flex-direction: column;
    justify-content: center
}

.bento-search-form {
    width: 100%
}

@media(max-width: 1024px) {
    .bento-grid {
        flex-direction:column;
        display: flex
    }

    .bento-center-cta {
        grid-column: span 2;
        order: -1
    }

    .bento-prompt-feature {
        grid-column: span 2;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px
    }

    .bento-prompt-feature-viz {
        width: 100%
    }
}

@media(max-width: 768px) {
    .bento-grid {
        grid-template-columns:1fr
    }

    .bento-center-cta {
        grid-column: span 1
    }
}

.gauge-timer:after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);
    animation: sweep 3s infinite
}

@keyframes sweep {
    0% {
        left: -100%
    }

    50%,to {
        left: 100%
    }
}

.score-radial {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 4px solid var(--color-border);
    border-top-color: #2563eb;
    border-left-color: #2563eb;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative
}

.score-radial span {
    transform: rotate(-45deg);
    font-size: 18px;
    font-weight: 800;
    color: var(--color-text-primary)
}

.bento-platforms-row {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 40px;
    margin-bottom: 20px
}

.bento-platform-box {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease,border-color .2s
}

.bento-platform-box:hover {
    transform: translateY(-2px);
    border-color: var(--color-accent)
}

.bento-trust-row {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
    margin-bottom: 20px
}

.bento-user-avatar {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center
}

.bento-check-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 14px;
    height: 14px;
    background: var(--color-success);
    border-radius: 50%;
    border: 2px solid var(--color-bg-card);
    display: flex;
    align-items: center;
    justify-content: center
}

.bento-trust-lines {
    flex: 1
}

.bento-line {
    height: 6px;
    background: var(--color-border);
    border-radius: 3px
}

.bento-line-long {
    width: 80%;
    margin-bottom: 6px;
    opacity: .5
}

.bento-line-short {
    width: 50%;
    opacity: .3
}

.bento-feed-preview {
    display: flex;
    flex-direction: column;
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: var(--space-4)
}

.bento-fp-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border-bottom: 1px solid var(--color-border)
}

.bento-fp-row:last-child {
    border-bottom: none
}

.bento-fp-ghost {
    opacity: .32
}

.bento-fp-active {
    background: var(--color-bg-card)
}

.bento-fp-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center
}

.bento-fp-lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0
}

.bento-fp-line {
    height: 5px;
    border-radius: 3px;
    background: var(--color-border)
}

.bento-fp-line-long {
    width: 85%
}

.bento-fp-line-med {
    width: 60%
}

.bento-fp-line-short {
    width: 42%
}

.bento-fp-line-accent {
    width: 88%;
    background: var(--color-accent);
    opacity: .6
}

.bento-fp-score {
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    background: var(--color-accent);
    border-radius: 5px;
    padding: 1px 6px;
    flex-shrink: 0
}

.bento-funnel-v2 {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: var(--space-4)
}

.bento-fv2-row {
    display: flex;
    align-items: center;
    gap: 8px
}

.bento-fv2-bar {
    height: 8px;
    border-radius: 4px;
    background: var(--color-accent);
    flex-shrink: 0
}

.bento-fv2-label {
    flex: 1;
    font-size: 10px;
    color: var(--color-text-tertiary);
    white-space: nowrap
}

.bento-fv2-count {
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-tertiary);
    white-space: nowrap;
    flex-shrink: 0
}

.bento-fv2-active .bento-fv2-bar {
    box-shadow: 0 0 8px var(--color-accent-glow)
}

.bento-fv2-active .bento-fv2-label {
    color: var(--color-text-primary);
    font-weight: 500
}

.bento-fv2-accent {
    display: flex;
    align-items: center;
    gap: 3px;
    color: var(--color-accent)
}

.bento-quality-viz {
    margin-bottom: var(--space-4)
}

.bento-dot-grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 8px
}

.bento-dot {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color-border);
    opacity: .22
}

.bento-dot-lead {
    background: var(--color-accent);
    opacity: 1;
    box-shadow: 0 0 10px var(--color-accent-glow);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center
}

.bento-dot-score {
    font-size: 8px;
    font-weight: 800;
    color: #fff;
    line-height: 1
}

.bento-reply-preview {
    background: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: var(--space-4)
}

.bento-rp-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-bg-card)
}

.bento-rp-avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-accent);
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0
}

.bento-rp-meta {
    flex: 1;
    min-width: 0
}

.bento-rp-name {
    font-size: 10px;
    font-weight: 600;
    color: var(--color-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.bento-rp-sub {
    font-size: 9px;
    color: var(--color-text-tertiary)
}

.bento-rp-karma {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 10px;
    font-weight: 600;
    color: var(--color-accent);
    flex-shrink: 0
}

.bento-rp-body {
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px
}

.bento-rp-line {
    height: 5px;
    border-radius: 3px;
    background: var(--color-border);
    opacity: .5
}

.bento-rp-line-full {
    width: 95%
}

.bento-rp-line-long {
    width: 78%
}

.bento-rp-line-med {
    width: 55%
}

.bento-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.75
}

.bento-tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-4)
}

.bento-pill {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    background: var(--color-accent-light);
    border: 1px solid var(--color-accent-glow);
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 600;
    color: var(--color-accent)
}

[data-theme=dark] .demo-inner {
    box-shadow: 0 12px 48px #0006
}

[data-theme=dark] .platform-icon-muted {
    background: var(--color-bg-primary);
    border-color: var(--color-border)
}

[data-theme=dark] .platform-name {
    color: var(--color-text-primary)
}

[data-theme=dark] .platform-desc {
    color: var(--color-text-tertiary)
}

[data-theme=dark] .bento-accent {
    background: linear-gradient(135deg,rgba(37,99,235,.08) 0%,var(--color-bg-card) 60%);
    border-color: #2563eb33
}

[data-theme=dark] .bento-dark,[data-theme=dark] .bento-stat-card {
    background: var(--color-bg-base)
}

[data-theme=dark] .bento-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .bento-desc {
    color: var(--color-text-secondary)
}

[data-theme=dark] .bento-stat-num {
    color: var(--color-text-primary)
}

[data-theme=dark] .bento-stat-label {
    color: var(--color-text-tertiary)
}

[data-theme=dark] .hero-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .hero-subtitle {
    color: var(--color-text-secondary)
}

[data-theme=dark] .hero-cta-hint {
    color: var(--color-text-tertiary)
}

[data-theme=dark] .trust-stat-number {
    color: var(--color-text-primary)
}

[data-theme=dark] .trust-stat-label {
    color: var(--color-text-secondary)
}

[data-theme=dark] .hero-badge {
    background: var(--color-accent-light);
    border-color: var(--color-accent-glow)
}

[data-theme=dark] .hero-url-input-wrapper {
    background: var(--color-bg-base);
    border-color: var(--color-border)
}

[data-theme=dark] .hero-url-input-wrapper:focus-within {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus)
}

[data-theme=dark] .hero-url-input {
    color: var(--color-text-primary)
}

[data-theme=dark] .hero-url-input::placeholder {
    color: var(--color-text-secondary)
}

[data-theme=dark] .hero-url-placeholder {
    color: var(--color-text-tertiary)
}

[data-theme=dark] .hero-input-sep {
    background: var(--color-border)
}

[data-theme=dark] .hero-favicon-globe {
    color: var(--color-text-secondary)
}

[data-theme=dark] .mockup-window,[data-theme=dark] .mockup-chrome {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .mockup-chrome-title {
    color: var(--color-text-secondary)
}

[data-theme=dark] .mockup-toolbar {
    border-color: var(--color-border)
}

[data-theme=dark] .mockup-chip {
    background: var(--color-bg-card);
    border-color: var(--color-border);
    color: var(--color-text-secondary)
}

[data-theme=dark] .mockup-chip.active {
    background: var(--color-accent-light);
    border-color: var(--color-accent-glow)
}

[data-theme=dark] .mockup-lead-count {
    background: var(--color-accent-light)
}

[data-theme=dark] .notif-card {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .notif-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .notif-meta {
    color: var(--color-text-secondary)
}

[data-theme=dark] .notif-tag {
    color: var(--color-accent)
}

[data-theme=dark] .hero-float {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .hero-float-num {
    color: var(--color-text-primary)
}

[data-theme=dark] .hero-float-label {
    color: var(--color-text-secondary)
}

[data-theme=dark] .nav-logo-text {
    color: var(--color-text-primary)
}

[data-theme=dark] .nav-link {
    color: var(--color-text-secondary)
}

[data-theme=dark] .nav-link:hover {
    color: var(--color-text-primary)
}

[data-theme=dark] .nav-mobile-toggle span {
    background: var(--color-text-primary)
}

[data-theme=dark] .nav.scrolled {
    box-shadow: 0 1px 4px #0000004d,0 0 0 .5px #ffffff0f;
    border: 1px solid rgba(255,255,255,.08)
}

[data-theme=dark] .mobile-menu {
    background: #1a1a1ad9;
    border-color: var(--color-border-strong)
}

[data-theme=dark] .feature-card {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .feature-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .feature-desc {
    color: var(--color-text-secondary)
}

[data-theme=dark] .testimonial-name {
    color: var(--color-text-primary)
}

[data-theme=dark] .testimonial-text {
    color: var(--color-text-secondary)
}

[data-theme=dark] .use-case-card {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .use-case-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .use-case-desc {
    color: var(--color-text-secondary)
}

[data-theme=dark] .step-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .step-desc {
    color: var(--color-text-secondary)
}

[data-theme=dark] .founder-content {
    background: var(--color-bg-card);
    border-color: var(--color-border)
}

[data-theme=dark] .founder-photo {
    background: var(--color-bg-subtle);
    border-color: var(--color-border)
}

[data-theme=dark] .founder-greeting {
    color: var(--color-text-primary)
}

[data-theme=dark] .founder-story {
    color: var(--color-text-secondary)
}

[data-theme=dark] .founder-signature,[data-theme=dark] .faq-cta {
    border-color: var(--color-border)
}

[data-theme=dark] .faq-cta p {
    color: var(--color-text-tertiary)
}

[data-theme=dark] .faq-tab-btn {
    color: var(--color-text-secondary)
}

[data-theme=dark] .faq-tab-btn:hover {
    color: var(--color-text-primary)
}

[data-theme=dark] .faq-tab-btn.active {
    color: var(--color-text-primary);
    background: var(--color-bg-card)
}

[data-theme=dark] .footer-logo-text,[data-theme=dark] .footer-links-title {
    color: var(--color-text-primary)
}

[data-theme=dark] .pricing-card.popular {
    background: var(--color-bg-card)
}

[data-theme=dark] .trust-divider {
    background: var(--color-border)
}

[data-theme=dark] .founder-signature {
    border-color: var(--color-border)
}

@media(max-width: 1200px) {
    .nav.scrolled {
        width:calc(100% - (var(--space-6) * 2))
    }

    .hero-float-left {
        left: -60px
    }

    .hero-float-right {
        right: -60px
    }
}

@media(max-width: 1024px) {
    .features-grid,.pricing-grid,.testimonials-grid,.use-cases-grid {
        grid-template-columns:repeat(2,1fr)
    }

    .pricing-card.popular {
        transform: none
    }

    .footer-grid {
        grid-template-columns: repeat(2,1fr)
    }

    .trust-logos {
        gap: 0
    }

    .trust-stat {
        padding: 0 var(--space-6)
    }

    .hero-float {
        display: none
    }

    .platforms-grid {
        grid-template-columns: repeat(4,1fr)
    }

    .bento-grid {
        grid-template-columns: repeat(2,1fr);
        border-radius: var(--radius-xl)
    }

    .bento-large,.bento-wide {
        grid-column: span 2
    }
}

@media(max-width: 768px) {
    .nav.scrolled {
        width:calc(100% - (var(--space-2) * 2));
        margin-top: var(--space-2)
    }

    .nav-container {
        padding: 0 var(--space-4)
    }

    .nav-links,.nav-actions {
        display: none
    }

    .nav-mobile-right {
        display: flex;
        align-items: center;
        margin-left: auto
    }

    .nav-mobile-toggle {
        display: flex
    }

    .nav-mobile-theme-btn {
        display: flex!important
    }

    .nav-user-desktop {
        display: none!important
    }

    .nav-user-mobile {
        display: none;
        margin-right: var(--space-2)
    }

    .hero {
        padding: 108px var(--space-4) 64px
    }

    .hero-title {
        font-size: 2.25rem
    }

    .features-grid,.pricing-grid,.testimonials-grid,.use-cases-grid,.platforms-grid {
        grid-template-columns: 1fr
    }

    .bento-section {
        padding: 64px 0
    }

    .bento-grid {
        grid-template-columns: 1fr;
        border-radius: var(--radius-lg)
    }

    .bento-large {
        grid-column: span 1
    }

    .bento-card {
        padding: var(--space-6);
        overflow: hidden
    }

    .bento-center-cta {
        order: -1
    }

    .bento-time-card {
        align-items: flex-start;
        flex-direction: column-reverse
    }

    .bento-time-illus {
        width: 100%;
        flex-direction: row;
        align-items: center;
        gap: var(--space-5)
    }

    .bento-time-bars {
        flex: 1 1 0
    }

    .footer-grid {
        flex-direction: column
    }

    .final-cta-trust {
        display: flex;
        gap: var(--space-2)
    }

    .founder-content {
        padding: var(--space-8) var(--space-6)
    }

    .founder-image {
        margin-bottom: var(--space-6)
    }

    .trust-logos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-6);
        justify-items: center
    }

    .trust-divider {
        display: none
    }

    .trust-stat {
        padding: 0
    }

    .hero-notifications {
        height: 88px
    }

    .notif-title {
        white-space: normal;
        font-size: 12px;
        line-height: 1.4
    }

    .notif-icon {
        width: 36px;
        height: 36px;
        font-size: 11px
    }

    .section-badge {
        font-size: 10px
    }

    .final-cta-content {
        grid-template-columns: 1fr;
        padding: var(--space-10);
        text-align: center
    }

    .final-cta-text {
        max-width: 100%;
        order: 2;
        align-items: center
    }

    .final-cta-visual {
        order: 1
    }

    .final-cta-title,.final-cta-content .hero-url-form {
        margin-inline:auto}

    .final-cta-mag {
        width: clamp(200px,60vw,280px)
    }
}

.bento-stat {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 4px
}

.bento-title {
    font-size: 1rem!important;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 8px
}

.bento-desc {
    font-size: .8125rem!important;
    color: var(--color-text-secondary);
    line-height: 1.5
}

.bento-pill {
    padding: 4px 12px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-text-secondary);
    display: inline-flex;
    align-items: center;
    justify-content: center
}

.bento-pill-v1 {
    opacity: .8
}

.bento-pill-v2 {
    opacity: 1;
    color: var(--color-text-primary);
    border-color: var(--color-accent)
}

.bento-pill-v3 {
    opacity: .6
}

.bento-quality-viz {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    margin-bottom: 20px
}

.bento-dot-grid {
    display: flex;
    gap: 6px;
    align-items: center
}

.bento-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-border);
    opacity: .2
}

.bento-dot-lead {
    width: 10px;
    height: 10px;
    background: var(--color-accent);
    opacity: 1;
    box-shadow: 0 0 12px var(--color-accent-glow);
    animation: lead-pulse 1.5s infinite alternate
}

@keyframes lead-pulse {
    0% {
        transform: scale(1);
        opacity: .8
    }

    to {
        transform: scale(1.3);
        opacity: 1
    }
}

.bento-center-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px
}

.bento-icon-mr {
    margin-right: 10px
}

.bsf-flow {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-5);
    flex-wrap: wrap
}

.bsf-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2)
}

.bsf-badge-row {
    display: flex;
    gap: 4px;
    align-items: center
}

.bsf-badge {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0
}

.bsf-label {
    font-size: 10px;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-align: center;
    white-space: nowrap
}

.bsf-arrow {
    flex-shrink: 0;
    opacity: .45;
    margin-bottom: var(--space-4)
}

.bento-prompt-feature {
    grid-column: span 3;
    display: flex;
    align-items: center;
    gap: 48px
}

.bento-prompt-feature-text {
    flex: 1
}

.bento-prompt-feature-viz {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0
}

.bento-prompt-editor {
    background: var(--color-bg-base);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    width: 220px
}

.bento-prompt-editor-bar {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-bg-card)
}

.bento-prompt-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-border)
}

.bento-prompt-editor-label {
    font-size: 10px;
    color: var(--color-text-tertiary);
    margin-left: 4px;
    font-weight: 500
}

.bento-prompt-editor-body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px
}

.bento-prompt-editor-line {
    height: 7px;
    border-radius: 4px;
    background: var(--color-border);
    opacity: .45
}

.bento-prompt-line-full {
    width: 92%
}

.bento-prompt-line-med {
    width: 68%
}

.bento-prompt-line-short {
    width: 42%
}

@keyframes blink {
    0%,to {
        opacity: 1
    }

    50% {
        opacity: 0
    }
}

.bento-tone-chips {
    display: flex;
    flex-direction: column;
    gap: 8px
}

.bento-tone-chip {
    padding: 6px 14px;
    border-radius: var(--radius-full);
    font-size: 12px;
    font-weight: 500;
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    background: var(--color-bg-card);
    white-space: nowrap
}

.bento-tone-active {
    background: var(--color-accent-light)
}

@media(max-width: 768px) {
    .bento-prompt-feature {
        grid-column:span 1;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px
    }

    .bento-prompt-feature-viz {
        width: 100%
    }

    .bento-prompt-editor {
        width: 180px;
        max-width: 100%
    }
}

.before-after {
    padding: 108px 0
}

.ba-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
    max-width: 1008px;
    margin: 0 auto
}

.ba-card {
    background: var(--color-bg-card);
    border-radius: var(--radius-2xl);
    padding: var(--space-8)
}

.ba-label-logo {
    width: 20px;
    height: 20px;
    flex-shrink: 0
}

.ba-card-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-6);
    color: var(--color-text-primary)
}

.ba-label-icon-svg {
    color: var(--color-accent);
    flex-shrink: 0
}

.ba-label-icon {
    font-size: 14px;
    font-weight: 900
}

.ba-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3)
}

.ba-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-text-secondary)
}

.ba-icon {
    flex-shrink: 0;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600
}

.ba-icon--bad {
    color: #64748b
}

.ba-icon--good {
    color: var(--color-text-primary)
}

.ba-summary {
    margin-top: var(--space-6);
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4
}

.ba-summary--bad {
    color: #64748b
}

.ba-summary--good {
    color: var(--color-accent)
}

.ba-mockup {
    margin-top: var(--space-6);
    background: var(--color-bg-page, #0a0a0a);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    overflow: hidden;
    font-size: 12px
}

.ba-mockup-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    border-bottom: 1px solid var(--color-border);
    background: #ffffff08
}

.ba-mockup-title {
    font-weight: 700;
    font-size: 11px;
    color: var(--color-text-primary);
    letter-spacing: .03em
}

.ba-mockup-badge {
    font-size: 10px;
    font-weight: 600;
    color: #16a34a;
    background: #22c55e26;
    border-radius: 20px;
    padding: 2px 8px
}

.ba-mockup-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    border-bottom: 1px solid rgba(255,255,255,.04)
}

.ba-mockup-row:last-child {
    border-bottom: none
}

.ba-mockup-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0
}

.ba-mockup-dot--high {
    background: #16a34a;
    box-shadow: 0 0 6px #22c55e99
}

.ba-mockup-dot--med {
    background: #ca8a04;
    box-shadow: 0 0 6px #ca8a0480
}

.ba-mockup-text {
    flex: 1;
    color: var(--color-text-secondary);
    font-size: 11px;
    line-height: 1.4
}

.ba-mockup-text strong {
    color: var(--color-text-primary)
}

.ba-mockup-score {
    font-weight: 700;
    font-size: 11px;
    color: var(--color-accent);
    flex-shrink: 0
}

@media(max-width: 640px) {
    .ba-grid {
        grid-template-columns:1fr
    }

    .before-after {
        padding: 72px 0
    }
}

.legal-content {
    padding-top: 100px;
    min-height: calc(100vh - 100px)
}

.legal-container {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-8) var(--space-6) var(--space-12)
}

.legal-header {
    text-align: center;
    margin-bottom: var(--space-10);
    padding-bottom: var(--space-8)
}

.legal-header h1 {
    font-size: clamp(2rem,4vw,2.75rem);
    font-weight: 700;
    margin-bottom: var(--space-4);
    color: var(--color-text-primary)
}

.legal-updated {
    font-size: var(--font-size-sm);
    color: var(--color-text-tertiary)
}

.legal-body {
    color: var(--color-text-secondary);
    line-height: 1.8
}

.legal-body section {
    margin-bottom: var(--space-10)
}

.legal-body h2 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    border-bottom: 1px solid var(--color-border)
}

.legal-body h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-top: var(--space-6);
    margin-bottom: var(--space-3)
}

.legal-body p {
    margin-bottom: var(--space-4)
}

.legal-body ul {
    margin: var(--space-4) 0;
    padding-left: var(--space-6)
}

.legal-body li {
    margin-bottom: var(--space-2);
    position: relative
}

.legal-body strong {
    color: var(--color-text-primary);
    font-weight: 600
}

.legal-body a {
    color: var(--color-text-tertiary);
    text-decoration: underline;
    transition: color var(--transition-base)
}

.legal-body a:hover {
    color: var(--color-text-primary)
}

.legal-body code {
    background: var(--color-bg-tertiary);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-family: SF Mono,Monaco,Consolas,monospace;
    font-size: var(--font-size-sm);
    color: var(--color-accent)
}

.cookie-table {
    overflow-x: auto;
    margin: var(--space-6) 0
}

.cookie-table table {
    width: 100%;
    border-collapse: collapse;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden
}

.cookie-table th,.cookie-table td {
    padding: var(--space-4);
    text-align: left;
    border-bottom: 1px solid var(--color-border)
}

.cookie-table th {
    background: var(--color-bg-tertiary);
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: .05em
}

.cookie-table td {
    font-size: var(--font-size-sm)
}

.cookie-table tr:last-child td {
    border-bottom: none
}

.cookie-table tr:hover td {
    background: var(--color-bg-card-hover)
}

.legal-footer {
    margin-top: var(--space-12);
    padding-top: var(--space-8);
    text-align: center
}

@media(max-width: 768px) {
    .legal-container {
        padding:var(--space-6) var(--space-4)
    }

    .cookie-table {
        font-size: var(--font-size-sm)
    }

    .cookie-table th,.cookie-table td {
        padding: var(--space-3)
    }
}

.logo-component[data-astro-cid-orl6cwil] {
    gap: .5rem;
    transition: opacity .2s ease
}

.logo-component[data-astro-cid-orl6cwil]:hover {
    opacity: .9
}

.logo-icon[data-astro-cid-orl6cwil] {
    display: block;
    margin-bottom: -.25rem
}

.logo-text[data-astro-cid-orl6cwil] {
    font-size: 1rem;
    letter-spacing: -.02em;
    font-weight: 700;
    color: var(--color-text-primary)
}




/* cyrillic-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwRGFWfOw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwYGFWfOw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwTGFWfOw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwSGFWfOw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwcGFU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwRGFWfOw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwYGFWfOw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwTGFWfOw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwSGFWfOw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwcGFU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwRGFWfOw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwYGFWfOw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwTGFWfOw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwSGFWfOw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwcGFU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwRGFWfOw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwYGFWfOw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwTGFWfOw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwSGFWfOw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwcGFU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwRGFWfOw.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwYGFWfOw.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwTGFWfOw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwSGFWfOw.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Geist';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/geist/v5/gyByhwUxId8gMEwcGFU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


js code

// your code goes here
/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/canvas-confetti@1.9.3/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t, e) {
    !function t(e, a, n, r) {
        var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL)
          , i = "function" == typeof Path2D && "function" == typeof DOMMatrix
          , l = function() {
            if (!e.OffscreenCanvas)
                return !1;
            var t = new OffscreenCanvas(1,1)
              , a = t.getContext("2d");
            a.fillRect(0, 0, 1, 1);
            var n = t.transferToImageBitmap();
            try {
                a.createPattern(n, "no-repeat")
            } catch (t) {
                return !1
            }
            return !0
        }();
        function s() {}
        function c(t) {
            var n = a.exports.Promise
              , r = void 0 !== n ? n : e.Promise;
            return "function" == typeof r ? new r(t) : (t(s, s),
            null)
        }
        var h, f, u, d, m, g, p, b, M, v, y, w = (h = l,
        f = new Map,
        {
            transform: function(t) {
                if (h)
                    return t;
                if (f.has(t))
                    return f.get(t);
                var e = new OffscreenCanvas(t.width,t.height);
                return e.getContext("2d").drawImage(t, 0, 0),
                f.set(t, e),
                e
            },
            clear: function() {
                f.clear()
            }
        }), x = (m = Math.floor(1e3 / 60),
        g = {},
        p = 0,
        "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (u = function(t) {
            var e = Math.random();
            return g[e] = requestAnimationFrame((function a(n) {
                p === n || p + m - 1 < n ? (p = n,
                delete g[e],
                t()) : g[e] = requestAnimationFrame(a)
            }
            )),
            e
        }
        ,
        d = function(t) {
            g[t] && cancelAnimationFrame(g[t])
        }
        ) : (u = function(t) {
            return setTimeout(t, m)
        }
        ,
        d = function(t) {
            return clearTimeout(t)
        }
        ),
        {
            frame: u,
            cancel: d
        }), C = (v = {},
        function() {
            if (b)
                return b;
            if (!n && o) {
                var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                try {
                    b = new Worker(URL.createObjectURL(new Blob([e])))
                } catch (t) {
                    return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t),
                    null
                }
                !function(t) {
                    function e(e, a) {
                        t.postMessage({
                            options: e || {},
                            callback: a
                        })
                    }
                    t.init = function(e) {
                        var a = e.transferControlToOffscreen();
                        t.postMessage({
                            canvas: a
                        }, [a])
                    }
                    ,
                    t.fire = function(a, n, r) {
                        if (M)
                            return e(a, null),
                            M;
                        var o = Math.random().toString(36).slice(2);
                        return M = c((function(n) {
                            function i(e) {
                                e.data.callback === o && (delete v[o],
                                t.removeEventListener("message", i),
                                M = null,
                                w.clear(),
                                r(),
                                n())
                            }
                            t.addEventListener("message", i),
                            e(a, o),
                            v[o] = i.bind(null, {
                                data: {
                                    callback: o
                                }
                            })
                        }
                        ))
                    }
                    ,
                    t.reset = function() {
                        for (var e in t.postMessage({
                            reset: !0
                        }),
                        v)
                            v[e](),
                            delete v[e]
                    }
                }(b)
            }
            return b
        }
        ), I = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: .9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: .5,
            y: .5,
            shapes: ["square", "circle"],
            zIndex: 100,
            colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
            disableForReducedMotion: !1,
            scalar: 1
        };
        function T(t, e, a) {
            return function(t, e) {
                return e ? e(t) : t
            }(t && null != t[e] ? t[e] : I[e], a)
        }
        function E(t) {
            return t < 0 ? 0 : Math.floor(t)
        }
        function P(t) {
            return parseInt(t, 16)
        }
        function S(t) {
            return t.map(O)
        }
        function O(t) {
            var e = String(t).replace(/[^0-9a-f]/gi, "");
            return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            {
                r: P(e.substring(0, 2)),
                g: P(e.substring(2, 4)),
                b: P(e.substring(4, 6))
            }
        }
        function k(t) {
            t.width = document.documentElement.clientWidth,
            t.height = document.documentElement.clientHeight
        }
        function B(t) {
            var e = t.getBoundingClientRect();
            t.width = e.width,
            t.height = e.height
        }
        function F(t, e) {
            e.x += Math.cos(e.angle2D) * e.velocity + e.drift,
            e.y += Math.sin(e.angle2D) * e.velocity + e.gravity,
            e.velocity *= e.decay,
            e.flat ? (e.wobble = 0,
            e.wobbleX = e.x + 10 * e.scalar,
            e.wobbleY = e.y + 10 * e.scalar,
            e.tiltSin = 0,
            e.tiltCos = 0,
            e.random = 1) : (e.wobble += e.wobbleSpeed,
            e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble),
            e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble),
            e.tiltAngle += .1,
            e.tiltSin = Math.sin(e.tiltAngle),
            e.tiltCos = Math.cos(e.tiltAngle),
            e.random = Math.random() + 2);
            var a = e.tick++ / e.totalTicks
              , n = e.x + e.random * e.tiltCos
              , r = e.y + e.random * e.tiltSin
              , o = e.wobbleX + e.random * e.tiltCos
              , l = e.wobbleY + e.random * e.tiltSin;
            if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - a) + ")",
            t.beginPath(),
            i && "path" === e.shape.type && "string" == typeof e.shape.path && Array.isArray(e.shape.matrix))
                t.fill(function(t, e, a, n, r, o, i) {
                    var l = new Path2D(t)
                      , s = new Path2D;
                    s.addPath(l, new DOMMatrix(e));
                    var c = new Path2D;
                    return c.addPath(s, new DOMMatrix([Math.cos(i) * r, Math.sin(i) * r, -Math.sin(i) * o, Math.cos(i) * o, a, n])),
                    c
                }(e.shape.path, e.shape.matrix, e.x, e.y, .1 * Math.abs(o - n), .1 * Math.abs(l - r), Math.PI / 10 * e.wobble));
            else if ("bitmap" === e.shape.type) {
                var s = Math.PI / 10 * e.wobble
                  , c = .1 * Math.abs(o - n)
                  , h = .1 * Math.abs(l - r)
                  , f = e.shape.bitmap.width * e.scalar
                  , u = e.shape.bitmap.height * e.scalar
                  , d = new DOMMatrix([Math.cos(s) * c, Math.sin(s) * c, -Math.sin(s) * h, Math.cos(s) * h, e.x, e.y]);
                d.multiplySelf(new DOMMatrix(e.shape.matrix));
                var m = t.createPattern(w.transform(e.shape.bitmap), "no-repeat");
                m.setTransform(d),
                t.globalAlpha = 1 - a,
                t.fillStyle = m,
                t.fillRect(e.x - f / 2, e.y - u / 2, f, u),
                t.globalAlpha = 1
            } else if ("circle" === e.shape)
                t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - n) * e.ovalScalar, Math.abs(l - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function(t, e, a, n, r, o, i, l, s) {
                    t.save(),
                    t.translate(e, a),
                    t.rotate(o),
                    t.scale(n, r),
                    t.arc(0, 0, 1, i, l, s),
                    t.restore()
                }(t, e.x, e.y, Math.abs(o - n) * e.ovalScalar, Math.abs(l - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
            else if ("star" === e.shape)
                for (var g = Math.PI / 2 * 3, p = 4 * e.scalar, b = 8 * e.scalar, M = e.x, v = e.y, y = 5, x = Math.PI / y; y--; )
                    M = e.x + Math.cos(g) * b,
                    v = e.y + Math.sin(g) * b,
                    t.lineTo(M, v),
                    g += x,
                    M = e.x + Math.cos(g) * p,
                    v = e.y + Math.sin(g) * p,
                    t.lineTo(M, v),
                    g += x;
            else
                t.moveTo(Math.floor(e.x), Math.floor(e.y)),
                t.lineTo(Math.floor(e.wobbleX), Math.floor(r)),
                t.lineTo(Math.floor(o), Math.floor(l)),
                t.lineTo(Math.floor(n), Math.floor(e.wobbleY));
            return t.closePath(),
            t.fill(),
            e.tick < e.totalTicks
        }
        function A(t, a) {
            var i, l = !t, s = !!T(a || {}, "resize"), h = !1, f = T(a, "disableForReducedMotion", Boolean), u = o && !!T(a || {}, "useWorker") ? C() : null, d = l ? k : B, m = !(!t || !u) && !!t.__confetti_initialized, g = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;
            function p(e, a, o) {
                for (var l, s, h, f, u, m = T(e, "particleCount", E), g = T(e, "angle", Number), p = T(e, "spread", Number), b = T(e, "startVelocity", Number), M = T(e, "decay", Number), v = T(e, "gravity", Number), y = T(e, "drift", Number), C = T(e, "colors", S), I = T(e, "ticks", Number), P = T(e, "shapes"), O = T(e, "scalar"), k = !!T(e, "flat"), B = function(t) {
                    var e = T(t, "origin", Object);
                    return e.x = T(e, "x", Number),
                    e.y = T(e, "y", Number),
                    e
                }(e), A = m, R = [], N = t.width * B.x, z = t.height * B.y; A--; )
                    R.push((l = {
                        x: N,
                        y: z,
                        angle: g,
                        spread: p,
                        startVelocity: b,
                        color: C[A % C.length],
                        shape: P[(f = 0,
                        u = P.length,
                        Math.floor(Math.random() * (u - f)) + f)],
                        ticks: I,
                        decay: M,
                        gravity: v,
                        drift: y,
                        scalar: O,
                        flat: k
                    },
                    s = void 0,
                    h = void 0,
                    s = l.angle * (Math.PI / 180),
                    h = l.spread * (Math.PI / 180),
                    {
                        x: l.x,
                        y: l.y,
                        wobble: 10 * Math.random(),
                        wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                        velocity: .5 * l.startVelocity + Math.random() * l.startVelocity,
                        angle2D: -s + (.5 * h - Math.random() * h),
                        tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                        color: l.color,
                        shape: l.shape,
                        tick: 0,
                        totalTicks: l.ticks,
                        decay: l.decay,
                        drift: l.drift,
                        random: Math.random() + 2,
                        tiltSin: 0,
                        tiltCos: 0,
                        wobbleX: 0,
                        wobbleY: 0,
                        gravity: 3 * l.gravity,
                        ovalScalar: .6,
                        scalar: l.scalar,
                        flat: l.flat
                    }));
                return i ? i.addFettis(R) : (i = function(t, e, a, o, i) {
                    var l, s, h = e.slice(), f = t.getContext("2d"), u = c((function(e) {
                        function c() {
                            l = s = null,
                            f.clearRect(0, 0, o.width, o.height),
                            w.clear(),
                            i(),
                            e()
                        }
                        l = x.frame((function e() {
                            !n || o.width === r.width && o.height === r.height || (o.width = t.width = r.width,
                            o.height = t.height = r.height),
                            o.width || o.height || (a(t),
                            o.width = t.width,
                            o.height = t.height),
                            f.clearRect(0, 0, o.width, o.height),
                            (h = h.filter((function(t) {
                                return F(f, t)
                            }
                            ))).length ? l = x.frame(e) : c()
                        }
                        )),
                        s = c
                    }
                    ));
                    return {
                        addFettis: function(t) {
                            return h = h.concat(t),
                            u
                        },
                        canvas: t,
                        promise: u,
                        reset: function() {
                            l && x.cancel(l),
                            s && s()
                        }
                    }
                }(t, R, d, a, o),
                i.promise)
            }
            function b(a) {
                var n = f || T(a, "disableForReducedMotion", Boolean)
                  , r = T(a, "zIndex", Number);
                if (n && g)
                    return c((function(t) {
                        t()
                    }
                    ));
                l && i ? t = i.canvas : l && !t && (t = function(t) {
                    var e = document.createElement("canvas");
                    return e.style.position = "fixed",
                    e.style.top = "0px",
                    e.style.left = "0px",
                    e.style.pointerEvents = "none",
                    e.style.zIndex = t,
                    e
                }(r),
                document.body.appendChild(t)),
                s && !m && d(t);
                var o = {
                    width: t.width,
                    height: t.height
                };
                function b() {
                    if (u) {
                        var e = {
                            getBoundingClientRect: function() {
                                if (!l)
                                    return t.getBoundingClientRect()
                            }
                        };
                        return d(e),
                        void u.postMessage({
                            resize: {
                                width: e.width,
                                height: e.height
                            }
                        })
                    }
                    o.width = o.height = null
                }
                function M() {
                    i = null,
                    s && (h = !1,
                    e.removeEventListener("resize", b)),
                    l && t && (document.body.contains(t) && document.body.removeChild(t),
                    t = null,
                    m = !1)
                }
                return u && !m && u.init(t),
                m = !0,
                u && (t.__confetti_initialized = !0),
                s && !h && (h = !0,
                e.addEventListener("resize", b, !1)),
                u ? u.fire(a, o, M) : p(a, o, M)
            }
            return b.reset = function() {
                u && u.reset(),
                i && i.reset()
            }
            ,
            b
        }
        function R() {
            return y || (y = A(null, {
                useWorker: !0,
                resize: !0
            })),
            y
        }
        a.exports = function() {
            return R().apply(this, arguments)
        }
        ,
        a.exports.reset = function() {
            R().reset()
        }
        ,
        a.exports.create = A,
        a.exports.shapeFromPath = function(t) {
            if (!i)
                throw new Error("path confetti are not supported in this browser");
            var e, a;
            "string" == typeof t ? e = t : (e = t.path,
            a = t.matrix);
            var n = new Path2D(e)
              , r = document.createElement("canvas").getContext("2d");
            if (!a) {
                for (var o, l, s = 1e3, c = s, h = s, f = 0, u = 0, d = 0; d < s; d += 2)
                    for (var m = 0; m < s; m += 2)
                        r.isPointInPath(n, d, m, "nonzero") && (c = Math.min(c, d),
                        h = Math.min(h, m),
                        f = Math.max(f, d),
                        u = Math.max(u, m));
                o = f - c,
                l = u - h;
                var g = Math.min(10 / o, 10 / l);
                a = [g, 0, 0, g, -Math.round(o / 2 + c) * g, -Math.round(l / 2 + h) * g]
            }
            return {
                type: "path",
                path: e,
                matrix: a
            }
        }
        ,
        a.exports.shapeFromText = function(t) {
            var e, a = 1, n = "#000000", r = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
            "string" == typeof t ? e = t : (e = t.text,
            a = "scalar"in t ? t.scalar : a,
            r = "fontFamily"in t ? t.fontFamily : r,
            n = "color"in t ? t.color : n);
            var o = 10 * a
              , i = o + "px " + r
              , l = new OffscreenCanvas(o,o)
              , s = l.getContext("2d");
            s.font = i;
            var c = s.measureText(e)
              , h = Math.ceil(c.actualBoundingBoxRight + c.actualBoundingBoxLeft)
              , f = Math.ceil(c.actualBoundingBoxAscent + c.actualBoundingBoxDescent)
              , u = c.actualBoundingBoxLeft + 2
              , d = c.actualBoundingBoxAscent + 2;
            h += 4,
            f += 4,
            (s = (l = new OffscreenCanvas(h,f)).getContext("2d")).font = i,
            s.fillStyle = n,
            s.fillText(e, u, d);
            var m = 1 / a;
            return {
                type: "bitmap",
                bitmap: l.transferToImageBitmap(),
                matrix: [m, 0, 0, m, -h * m / 2, -f * m / 2]
            }
        }
    }(function() {
        return void 0 !== t ? t : "undefined" != typeof self ? self : this || {}
    }(), e, !1),
    t.confetti = e.exports
}(window, {});
//# sourceMappingURL=/sm/0e9ac22f62a550282b886b288da51d7892173a94bbd286c2ffc6e7b881509c88.map


/**
 * Platform Icons Data & Helper
 * Shared between Astro components (SSR) and Browser scripts (Client)
 */

export const PLATFORM_SVG_PATHS = {
    reddit: {
        domain: "reddit.com",
        viewBox: "0 0 256 256",
        path: '<rect width="256" height="256" fill="#ff4500"/><path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>',
        color: "#FF4500"
    },
    hackernews: {
        domain: "news.ycombinator.com",
        viewBox: "0 0 24 24",
        path: '<rect width="24" height="24" rx="4"/><text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>',
        color: "#f26522"
    },
    bluesky: {
        domain: "bsky.app",
        viewBox: "0 0 320 286",
        path: '<path d="M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z"/>',
        color: "#0085ff"
    },
    twitter: {
        domain: "x.com",
        viewBox: "0 0 24 24",
        path: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
        color: "#000000"
    },
    linkedin: {
        domain: "linkedin.com",
        viewBox: "0 0 24 24",
        path: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
        color: "#0A66C2"
    },
    producthunt: {
        domain: "producthunt.com",
        viewBox: "0 0 24 24",
        path: '<path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>',
        color: "#DA552F"
    },
    youtube: {
        domain: "youtube.com",
        viewBox: "0 0 24 24",
        path: '<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        color: "#FF0000"
    },
    indiehackers: {
        domain: "indiehackers.com",
        viewBox: "0 0 24 24",
        path: '<polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline><polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>',
        color: "#192437"
    },
    devto: {
        domain: "dev.to",
        viewBox: "0 0 24 24",
        path: '<path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.28zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"></path>',
        color: "#000000"
    },
};

/**
 * Get a platform icon (favicons with SVG fallback).
 * @param {string} platform - Platform key (reddit, hackernews, bluesky, etc.)
 * @param {number} [size=16] - Icon width/height in px
 * @param {string} [fillOverride] - Override the fill color (for monochrome/themed uses)
 * @returns {string} HTML markup (img + fallback svg)
 */
export function getPlatformIcon(platform, size, fillOverride) {
    size = size || 16;
    var def = PLATFORM_SVG_PATHS[platform] || PLATFORM_SVG_PATHS.reddit;
    var fill = fillOverride || def.color;
    var cls = size <= 12 ? ' class="platform-icon"' : '';

    // Base SVG rendering
    var inner = def.path.replace(/fill="[^"]*"/g, "").replace(/<(path|rect)/g, '<$1 fill="' + fill + '"');
    if (platform === "reddit") {
        inner = '<rect width="256" height="256" fill="' + fill + '"/><path fill="#fff" d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"/>';
    } else if (platform === "hackernews") {
        inner = '<rect width="24" height="24" rx="4" fill="' + fill + '"/><text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Verdana,sans-serif">Y</text>';
    }
    var svg = '<svg' + cls + ' width="' + size + '" height="' + size + '" viewBox="' + def.viewBox + '" aria-hidden="true" style="display:block;">' + inner + '</svg>';

    // Favicon wrap
    var faviconUrl = 'https://icons.duckduckgo.com/ip3/' + def.domain + '.ico';

    return '<div class="platform-icon-wrap" style="width:' + size + 'px;height:' + size + 'px;display:inline-flex;align-items:center;justify-content:center;position:relative;">' + '<img src="' + faviconUrl + '" width="' + size + '" height="' + size + '" style="display:block;border-radius:2px;" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';"/>' + '<div style="display:none;width:' + size + 'px;height:' + size + 'px;">' + svg + '</div>' + '</div>';
}

// Global fallback for vanilla JS environments (e.g. app.js)
if (typeof window !== "undefined") {
    window.getPlatformIcon = getPlatformIcon;
}




/**
 * ReplyGain Shared Utilities
 */

(function () {
  let authMePromise = null;

  window.fetchAuthMe = function fetchAuthMe() {
    if (!authMePromise) {
      authMePromise = fetch("/api/auth/me")
        .then(async (res) => {
          if (res.status === 401 || res.status === 404) {
            return null;
          }
          if (!res.ok) {
            throw new Error(`Failed to fetch auth user: ${res.status}`);
          }
          const data = await res.json();
          return data?.user ? { user: data.user } : null;
        })
        .finally(() => {
          authMePromise = null;
        });
    }

    return authMePromise;
  };
})();

// Platform icon logic moved to icons.js


// ============================================================
// Unified Plan Badge
// ============================================================

/**
 * Returns the short label for a user's plan tier.
 * @param {Object} user - from /api/auth/me or /api/usage/sidebar
 */
function getPlanLabel(user) {
  if (!user) return 'Free';
  if (user.isAdmin) return 'Admin';
  const status = user.subscription_status || user.subscriptionStatus || 'free';
  const planType = user.planType;
  const tierMap = {
    starter_monthly: 'Starter', starter_yearly: 'Starter',
    pro_monthly: 'Pro', pro_yearly: 'Pro',
    business_monthly: 'Business', business_yearly: 'Business',
    '7day_pass': '7-Day Pass',
  };
  if (status === 'trial') {
    const tierName = tierMap[planType] || 'Pro';
    return `${tierName} Trial`;
  }
  if (status === 'pass') {
    const expires = user.subscription_expires_at || user.subscriptionExpiresAt;
    if (expires && new Date(expires) > new Date()) return '7-Day Pass';
    return 'Free';
  }
  const stillActive =
    status === 'active' ||
    (status === 'canceled' && user.subscription_expires_at && new Date(user.subscription_expires_at) > new Date());
  if (stillActive) {
    return tierMap[planType] || 'Pro';
  }
  return 'Free';
}

/**
 * Applies the unified plan badge to an element.
 * @param {HTMLElement} el
 * @param {Object} user
 * @param {'sm'|''|'lg'} size  - '' = default (account row), 'sm' = sidebar, 'lg' = billing card
 */
function applyPlanBadge(el, user, size) {
  if (!el) return;
  const label = getPlanLabel(user);
  const tierClass = label === 'Admin' ? 'plan-badge--admin'
    : label === 'Free'  ? 'plan-badge--free'
    : (label.includes('Trial') || label === '7-Day Pass') ? 'plan-badge--trial'
    : '';
  const sizeClass = size === 'sm' ? 'plan-badge--sm' : size === 'lg' ? 'plan-badge--lg' : '';
  el.className = ['plan-badge', sizeClass, tierClass].filter(Boolean).join(' ');
  el.textContent = label;
}

// ============================================================
// Sidebar new-lead badge
// ============================================================

let _newLeadsCount = 0;

function updateLeadsBadge(count) {
  _newLeadsCount = Math.max(0, count);
  const badge = document.getElementById("nav-leads-count");
  if (!badge) return;
  if (_newLeadsCount > 0) {
    badge.textContent = String(_newLeadsCount);
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function decrementLeadsBadge() {
  updateLeadsBadge(_newLeadsCount - 1);
}

/**
 * Loads an avatar into an image element, using LocalStorage caching for reliability.
 * @param {HTMLImageElement} imgEl - The image element to populate
 * @param {HTMLElement} placeholderEl - The placeholder div to hide/show
 * @param {Object} user - User object containing avatar_url or picture
 */
async function loadAvatar(imgEl, placeholderEl, user) {
  if (!user) return;

  // Normalize user ID or email for caching
  const cacheKey = `avatar_cache_${user.email}`;
  const timestampKey = `${cacheKey}_ts`;
  const avatarUrl = user.avatar_url || user.picture;

  // 1. Try to load from cache first for instant display
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTs = localStorage.getItem(timestampKey);
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  if (cachedData) {
    imgEl.src = cachedData;
    imgEl.classList.remove("hidden");
    imgEl.style.display = "block"; // Ensure visibility if hidden via inline style
    if (placeholderEl) {
      placeholderEl.style.display = "none";
      placeholderEl.classList.remove("skeleton");
    }

    // EXPERT OPTIMIZATION: If cache is fresh (< 24h), skip the network request entirely
    if (cachedTs && now - parseInt(cachedTs) < oneDay) {
      console.log("Avatar loaded from fresh cache, skipping background fetch.");
      return;
    }
  }

  // 2. If no URL available, show placeholder and stop
  if (!avatarUrl) {
    if (!cachedData) {
      imgEl.classList.add("hidden");
      if (placeholderEl) {
        placeholderEl.style.display = "flex";
        placeholderEl.textContent = (user.name || user.email)[0].toUpperCase();
        placeholderEl.classList.remove("skeleton");
      }
    }
    return;
  }

  // 3. Update cache in the background (or if first time)
  try {
    console.log("Updating avatar cache from proxy...");
    const proxyUrl = `/api/auth/proxy-avatar?url=${encodeURIComponent(avatarUrl)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) {
      throw new Error(`Proxy fetch failed: ${response.status}`);
    }

    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;

      // Only update DOM if the image is different to avoid flickering
      if (imgEl.src !== base64data) {
        imgEl.src = base64data;
        imgEl.classList.remove("hidden");
        imgEl.style.display = "block"; // Ensure visibility if hidden via inline style
        if (placeholderEl) {
          placeholderEl.style.display = "none";
          placeholderEl.classList.remove("skeleton");
        }

        // Save to cache
        try {
          localStorage.setItem(cacheKey, base64data);
          localStorage.setItem(timestampKey, now.toString());
        } catch (e) {
          console.warn("LocalStorage quota exceeded, could not cache avatar.");
        }
      } else {
        // Image is same, just refresh the timestamp
        localStorage.setItem(timestampKey, now.toString());
      }
    };
    reader.readAsDataURL(blob);
  } catch (error) {
    console.warn(
      "Avatar fetch/cache via proxy failed. Falling back to direct URL.",
      error,
    );

    // Final Fallback: Direct <img> load (might still work even if fetch fails)
    if (!cachedData) {
      imgEl.src = avatarUrl;
      imgEl.classList.remove("hidden");
      if (placeholderEl) {
        placeholderEl.style.display = "none";
        placeholderEl.classList.remove("skeleton");
      }

      if (placeholderEl && !imgEl.complete) {
        // If direct load also fails, show placeholder
        imgEl.onerror = () => {
          imgEl.classList.add("hidden");
          placeholderEl.style.display = "flex";
          placeholderEl.textContent = (user.name ||
            user.email)[0].toUpperCase();
          placeholderEl.classList.remove("skeleton");
        };
      }
    }
  }
}

// ============================================================
// Favicon cache (localStorage as URL string)
// ============================================================

const _FAV_DDG    = (d) => `https://icons.duckduckgo.com/ip3/${d}.ico`;
const _FAV_GOOGLE = (d) => `https://www.google.com/s2/favicons?sz=64&domain_url=${d}`;

// Returns cached favicon URL from localStorage, or null if not yet cached.
function getFaviconCached(domain) {
  return localStorage.getItem(`rg_fav_${domain}`);
}

// Test if a favicon URL actually loads using an img element (no CORS needed).
// fetch() is CORS-restricted for favicon services; img src loading is not.
function _testFaviconUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload  = () => resolve(url);
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

// Resolve a working favicon URL for the domain and cache it in localStorage.
// Tries DuckDuckGo first, falls back to Google.
async function getFavicon(domain) {
  const key = `rg_fav_${domain}`;
  const cached = localStorage.getItem(key);
  if (cached) return cached;

  const url =
    (await _testFaviconUrl(_FAV_DDG(domain))) ??
    (await _testFaviconUrl(_FAV_GOOGLE(domain)));

  if (url) {
    try { localStorage.setItem(key, url); } catch {}
  }
  return url ?? null;
}

// Set a favicon img element.
// 1. Instant: shows cached URL from localStorage if available.
// 2. Otherwise: resolves via getFavicon (DDG → Google) and sets src once confirmed.
function loadFaviconInto(imgEl, domain) {
  if (!domain || !imgEl) return;
  const cached = getFaviconCached(domain);
  if (cached) {
    imgEl.src = cached;
    imgEl.style.display = "";
    return;
  }
  // Keep hidden while resolving. Only show when we have a real favicon.
  getFavicon(domain).then((url) => {
    if (url) {
      imgEl.src = url;
      imgEl.style.display = "";
    }
  });
}

// ============================================================
// Subreddit NSFW filter (client-side, B2B tool)
// ============================================================

// Fallback keyword guard (catches anything Reddit's over18 flag misses)
const NSFW_PATTERNS = /nsfw|porn|xxx|hentai|erotic|onlyfan|nud(?:e|ist|ism|ity)|naked|fetish|bdsm|kink|lewd|rule34|gore|scat|bodily|hardcore|sex|cum/i;

/**
 * Fetch safe subreddit suggestions using Reddit's subreddits/search endpoint,
 * which returns an over18 flag per subreddit. Falls back to keyword filter.
 * @param {string} query
 * @returns {Promise<Array<{label: string, value: string}>>}
 */
async function fetchSafeSubreddits(query) {
  const q = query.replace(/^r\//, "").trim();
  if (q.length < 2) return [];
  try {
    const res = await fetch(`/api/reddit/suggest?q=${encodeURIComponent(q)}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

// ============================================================
// Autocomplete
// ============================================================

/**
 * Wires up async autocomplete behaviour on a .rg-autocomplete wrapper.
 *
 * @param {HTMLElement} wrapper    - The .rg-autocomplete div
 * @param {Function}    fetchFn   - async (query: string) => Array<{ label: string; value: string }>
 * @param {Function}    onSelectFn - ({ label, value }) => void - fired after item is picked
 */
function initAutocomplete(wrapper, fetchFn, onSelectFn) {
  if (!wrapper) return;
  const input = wrapper.querySelector("input");
  const panel = wrapper.querySelector(".rg-autocomplete-panel");
  if (!input || !panel) return;

  let _timer;
  let _requestId = 0;
  let spinner = wrapper.querySelector(".rg-autocomplete-spinner");
  if (!spinner) {
    spinner = document.createElement("span");
    spinner.className = "rg-autocomplete-spinner";
    spinner.setAttribute("aria-hidden", "true");
    wrapper.appendChild(spinner);
  }

  // Move panel to <body> so it's never clipped by overflow:hidden/auto ancestors.
  // Remove any stale panels left behind from previous initAutocomplete calls on the same input.
  document.querySelectorAll(".rg-autocomplete-panel").forEach((el) => {
    if (el !== panel && el.parentElement === document.body) el.remove();
  });
  document.body.appendChild(panel);

  function _esc(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function _reposition() {
    const rect = input.getBoundingClientRect();
    // Use visualViewport height when available (accounts for mobile on-screen keyboard)
    const vpHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const spaceBelow = vpHeight - rect.bottom - 4;
    const panelHeight = Math.min(panel.scrollHeight || 200, 220);

    panel.style.position = "fixed";
    panel.style.width = rect.width + "px";
    panel.style.left = rect.left + "px";
    panel.style.right = "auto";

    if (spaceBelow >= panelHeight || spaceBelow >= rect.top) {
      // Open downward
      panel.style.top = (rect.bottom + 4) + "px";
      panel.style.bottom = "auto";
    } else {
      // Flip upward
      panel.style.bottom = (vpHeight - rect.top + 4) + "px";
      panel.style.top = "auto";
    }
  }

  function _close() {
    panel.innerHTML = "";
    panel.style.display = "none";
    panel._items = null;
  }

  function _setLoading(isLoading) {
    wrapper.classList.toggle("is-loading", isLoading);
    input.setAttribute("aria-busy", isLoading ? "true" : "false");
  }

  function _open(items) {
    if (!items || !items.length) { _close(); return; }
    panel.innerHTML = items
      .map((item, i) => `<div class="rg-autocomplete-item" data-idx="${i}" role="option">${_esc(item.label)}</div>`)
      .join("");
    panel._items = items;
    _reposition();
    panel.style.display = "block";
  }

  input.addEventListener("input", () => {
    clearTimeout(_timer);
    const query = input.value.trim();
    _requestId += 1;
    if (query.length < 2) {
      _setLoading(false);
      _close();
      return;
    }

    const requestId = _requestId;
    _timer = setTimeout(async () => {
      _setLoading(true);
      try {
        const items = await fetchFn(query);
        if (requestId !== _requestId) return;
        _open(items);
      } catch {
        if (requestId !== _requestId) return;
        _close();
      } finally {
        if (requestId === _requestId) _setLoading(false);
      }
    }, 300);
  });

  // Reposition on scroll or resize so the panel tracks the input
  window.addEventListener("scroll", () => { if (panel.style.display === "block") _reposition(); }, true);
  window.addEventListener("resize", () => { if (panel.style.display === "block") _reposition(); });
  // visualViewport fires when the mobile keyboard appears/disappears
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => { if (panel.style.display === "block") _reposition(); });
  }

  panel.addEventListener("pointerdown", (e) => {
    const el = e.target.closest(".rg-autocomplete-item");
    if (!el) return;
    e.preventDefault(); // prevent blur before value is read
    const item = panel._items?.[parseInt(el.dataset.idx, 10)];
    if (!item) return;
    input.value = item.value;
    _close();
    onSelectFn?.(item);
  });

  input.addEventListener("blur", () => setTimeout(_close, 250));
}

/**
 * Populates all user-related elements in the sidebar and mobile header.
 * Call this after a successful /api/auth/me fetch on any authenticated page.
 * Handles: sidebar name, sidebar email, sidebar avatar, topbar initials, mobile avatar.
 * @param {Object} user - User object from /api/auth/me
 */
async function renderSidebarUser(user) {
  if (!user) return;

  const displayName = user.name || user.email.split("@")[0];

  // Sidebar: name + plan
  const nameEl = document.getElementById("sidebar-user-name");
  const planEl = document.getElementById("sidebar-user-plan");
  if (nameEl) nameEl.textContent = displayName;

  // Sidebar dropdown header
  const sddName = document.getElementById("sdd-name");
  const sddEmail = document.getElementById("sdd-email");
  if (sddName) sddName.textContent = displayName;
  if (sddEmail) sddEmail.textContent = user.email || "";

  applyPlanBadge(planEl, user, 'sm');

  // Sidebar: avatar (desktop)
  const avatarImg = document.getElementById("sidebar-avatar-img");
  const avatarPlaceholder = document.getElementById("sidebar-avatar");
  if (avatarImg && avatarPlaceholder) {
    await loadAvatar(avatarImg, avatarPlaceholder, user);
  }

  // Topbar: profile picture or initials fallback (app/leads page)
  const topbarAvatarImg = document.getElementById("topbar-avatar-img");
  const topbarInitials = document.getElementById("topbar-avatar-initials");
  if (topbarInitials) {
    topbarInitials.textContent = (user.name || user.email).charAt(0).toUpperCase();
  }
  if (topbarAvatarImg && topbarInitials) {
    await loadAvatar(topbarAvatarImg, topbarInitials, user);
  }

  // Mobile header: avatar image
  const mobileAvatarImg = document.getElementById("sidebar-avatar-img-mobile");
  const mobileAvatarLink = document.getElementById("nav-user-mobile-link");
  if (mobileAvatarImg && mobileAvatarLink) {
    await loadAvatar(mobileAvatarImg, null, user);
    mobileAvatarLink.style.display = "";
  }

  // Sidebar new-lead count badge (count-only endpoint, no post content exposed)
  try {
    const res = await fetch("/api/posts/count?status=new");
    if (res.ok) {
      const data = await res.json();
      updateLeadsBadge(data.count || 0);
    }
  } catch {}

  // Admin: show admin nav link, hide usage section, stop
  if (user.isAdmin) {
    const adminNavItem = document.getElementById('admin-nav-item');
    if (adminNavItem) adminNavItem.classList.remove('hidden');
    const usageEl = document.querySelector('.sidebar-usage');
    if (usageEl) usageEl.style.display = 'none';
    return;
  }

  // Sidebar: trial bar for trial users, upgrade CTA for free, nothing for paid
  try {
    const usageRes = await fetch("/api/usage/sidebar");
    if (!usageRes.ok) return;
    const u = await usageRes.json();
    const sidebarUsage = document.querySelector('.sidebar-usage');
    if (!sidebarUsage) return;

    if (u.isTrial && (u.trialDaysLeft ?? 0) > 0) {
      const daysLeft = u.trialDaysLeft ?? 3;
      const pct = u.trialPercent ?? 100;
      const showUpgrade = u.plan !== 'business';

      sidebarUsage.innerHTML = `
        <div class="sidebar-trial-compact" style="padding: 0 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-tertiary);">
            <span>Trial</span>
            ${showUpgrade ? `<a href="/pricing" onclick="event.preventDefault(); if(typeof window.openPricingPopup === 'function') window.openPricingPopup(); else window.location.href='/pricing';" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">Upgrade</a>` : ''}
          </div>
          <div style="height: 2px; background: var(--color-border); border-radius: 99px; overflow: hidden; margin-bottom: 6px;">
            <div style="height: 100%; width: ${pct}%; background: var(--color-accent); border-radius: 99px;"></div>
          </div>
          <div style="font-size: 10px; color: var(--color-text-tertiary); opacity: 0.8;">
            ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left
          </div>
        </div>`;
    } else if (u.isPass && (u.passDaysLeft ?? 0) >= 0) {
      const daysLeft = u.passDaysLeft ?? 0;
      const pct = u.passPercent ?? 0;
      sidebarUsage.innerHTML = `
        <div class="sidebar-trial-compact" style="padding: 0 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-tertiary);">
            <span>7-Day Pass</span>
            <a href="/pricing" onclick="event.preventDefault(); if(typeof window.openPricingPopup === 'function') window.openPricingPopup(); else window.location.href='/pricing';" style="color: var(--color-accent); text-decoration: none; font-weight: 600;">Upgrade</a>
          </div>
          <div style="height: 2px; background: var(--color-border); border-radius: 99px; overflow: hidden; margin-bottom: 6px;">
            <div style="height: 100%; width: ${pct}%; background: var(--color-accent); border-radius: 99px;"></div>
          </div>
          <div style="font-size: 10px; color: var(--color-text-tertiary); opacity: 0.8;">
            ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left
          </div>
        </div>`;
    } else {
      sidebarUsage.innerHTML = '';
    }
    // Paid/Free plans: sidebar stays clean, no usage meters or CTAs as requested
  } catch {}
}

// ============================================================
// Toast notifications
// ============================================================

/**
 * Shows a non-blocking toast notification.
 * @param {string} message
 * @param {"success"|"error"|"info"} [type="success"]
 * @param {number} [duration=3500] ms before auto-dismiss
 */
function showToast(message, type = "success", duration = 3500) {
  const toast = document.createElement("div");
  toast.className = `rg-toast rg-toast-${type}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");

  const icons = {
    success: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    error:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    info:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
  };

  toast.innerHTML = `<span class="rg-toast-icon">${icons[type] ?? icons.info}</span><span class="rg-toast-msg">${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add("rg-toast-visible"));
  });

  setTimeout(() => {
    toast.classList.remove("rg-toast-visible");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, duration);
}

// ============================================================
// Sidebar collapse (desktop)
// ============================================================

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    let mobileScrollY = 0;

    function setBodyScrollLock(locked) {
      if (!document.body) return;
      if (locked) {
        mobileScrollY = window.scrollY || window.pageYOffset || 0;
        document.body.classList.add("mobile-sidebar-open");
        document.body.style.top = `-${mobileScrollY}px`;
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.classList.remove("mobile-sidebar-open");
        document.body.style.top = "";
        document.body.style.position = "";
        document.body.style.width = "";
        window.scrollTo(0, mobileScrollY);
      }
    }

    function setMobileSidebarOpen(isOpen) {
      if (!sidebar) return;
      sidebar.classList.toggle("open", isOpen);
      mobileMenuBtn?.classList.toggle("open", isOpen);
      if (window.innerWidth <= 768) {
        setBodyScrollLock(isOpen);
      } else {
        setBodyScrollLock(false);
      }
    }

    window.rgSetMobileSidebarOpen = setMobileSidebarOpen;

    // ── Desktop: collapse/expand ──
    const collapseBtn = document.getElementById("sidebar-collapse-btn");
    if (collapseBtn && sidebar) {
      // Restore persisted state
      if (localStorage.getItem("rg_sidebar_collapsed") === "1") {
        sidebar.classList.add("collapsed");
      }

      collapseBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        localStorage.setItem(
          "rg_sidebar_collapsed",
          sidebar.classList.contains("collapsed") ? "1" : "0"
        );
      });
    }

    // ── Mobile: hamburger open/close ──
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener("click", () => {
        setMobileSidebarOpen(!sidebar.classList.contains("open"));
      });

      // Close sidebar when clicking outside on mobile
      document.addEventListener("click", (e) => {
        if (
          window.innerWidth <= 768 &&
          sidebar.classList.contains("open") &&
          !sidebar.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)
        ) {
          setMobileSidebarOpen(false);
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setMobileSidebarOpen(false);
        }
      });
    }
  });
}

// Export for common use if in a module environment, though we use global for simplicity in vanilla
if (typeof module !== "undefined" && module.exports) {
  module.exports = { loadAvatar, renderSidebarUser, getPlatformIcon, PLATFORM_SVG_PATHS };
}


/* clarity-js v0.8.66: https://github.com/microsoft/clarity (License: MIT) */
!function() {
    "use strict";
    var t, e, n, a, i, r, o, u, c, l, s, d, f, h, p, g, v, m, y, b, w, k, S, E, T, N, M, _, O, x, I, D, C, A, P, R, L, Y, j, X, W, H, q, U, z, F, V, B, J, K, G, Z, Q, $, tt, et, nt, at, it, rt, ot, ut, ct, lt, st, dt, ft, ht, pt, gt, vt, mt, yt, bt, wt, kt, St, Et, Tt, Nt, Mt, _t, Ot, xt, It, Dt, Ct, At, Pt, Rt, Lt, Yt, jt, Xt, Wt, Ht, qt, Ut, zt, Ft, Vt, Bt, Jt, Kt, Gt, Zt, Qt, $t, te, ee, ne, ae, ie, re, oe, ue, ce, le, se, de, fe, he, pe, ge, ve, me, ye, be, we, ke, Se, Ee, Te, Ne, Me, _e, Oe, xe, Ie, De, Ce, Ae, Pe, Re, Le, Ye, je, Xe, We, He, qe, Ue, ze, Fe, Ve, Be, Je, Ke, Ge, Ze, Qe, $e, tn, en, nn, an, rn, on, un, cn, ln, sn, dn, fn, hn, pn, gn, vn, mn, yn, bn, wn, kn, Sn, En, Tn, Nn, Mn, _n, On, xn = {
        projectId: null,
        delay: 1e3,
        lean: !1,
        lite: !1,
        track: !0,
        content: !0,
        drop: [],
        mask: [],
        unmask: [],
        regions: [],
        cookies: [],
        fraud: !0,
        checksum: [],
        report: null,
        upload: null,
        fallback: null,
        upgrade: null,
        action: null,
        dob: null,
        delayDom: !1,
        throttleDom: !0,
        conversions: !1,
        includeSubdomains: !0,
        modules: [],
        diagnostics: !1
    };
    function In(t) {
        return window.Zone && "__symbol__"in window.Zone ? window.Zone.__symbol__(t) : t
    }
    function Dn() {
        return performance.now() + performance.timeOrigin
    }
    function Cn(e) {
        var n, a, i;
        return void 0 === e && (e = null),
        n = 0 === t ? Dn() : t,
        a = e && e.timeStamp > 0 ? e.timeStamp : performance.now(),
        i = e && e.view ? e.view.performance.timeOrigin : performance.timeOrigin,
        Math.max(Math.round(a + i - n), 0)
    }
    function An(t, e) {
        var n, a, i, r;
        for (void 0 === e && (e = null),
        i = a = 5381,
        r = 0; r < t.length; r += 2)
            a = (a << 5) + a ^ t.charCodeAt(r),
            r + 1 < t.length && (i = (i << 5) + i ^ t.charCodeAt(r + 1));
        return n = Math.abs(a + 11579 * i),
        (e ? n % Math.pow(2, e) : n).toString(36)
    }
    function Pn(t, e, n, a, r) {
        if (void 0 === a && (a = !1),
        t) {
            if ("input" == e && ("checkbox" === r || "radio" === r))
                return t;
            switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                case "*T":
                case "value":
                case "placeholder":
                case "click":
                    return function(t) {
                        var e, n, a, r = -1, o = 0, c = !1, l = !1, s = !1, d = null;
                        for (Wn(),
                        e = 0; e < t.length; e++)
                            n = t.charCodeAt(e),
                            c = c || n >= 48 && n <= 57,
                            l = l || 64 === n,
                            s = 9 === n || 10 === n || 13 === n || 32 === n,
                            (0 === e || e === t.length - 1 || s) && ((c || l) && (null === d && (d = t.split("")),
                            a = t.substring(r + 1, s ? e : e + 1),
                            a = i && null !== u ? a.match(u) ? a : jn(a, "▪", "▫") : Yn(a),
                            d.splice(r + 1 - o, a.length, a),
                            o += a.length - 1),
                            s && (c = !1,
                            l = !1,
                            r = e));
                        return d ? d.join("") : t
                    }(t);
                case "input":
                case "change":
                    return Xn(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                case "*T":
                case "data-":
                    return a ? Ln(t) : Yn(t);
                case "src":
                case "srcset":
                case "title":
                case "alt":
                case "href":
                case "xlink:href":
                    return 3 === n ? (null == t ? void 0 : t.startsWith("blob:")) ? "blob:" : "" : t;
                case "value":
                case "click":
                case "input":
                case "change":
                    return Xn(t);
                case "placeholder":
                    return Yn(t)
                }
                break;
            case 4:
                switch (e) {
                case "*T":
                case "data-":
                    return a ? Ln(t) : Yn(t);
                case "value":
                case "input":
                case "click":
                case "change":
                    return Array(5).join("•");
                case "checksum":
                    return ""
                }
                break;
            case 5:
                switch (e) {
                case "*T":
                case "data-":
                    return jn(t, "▪", "▫");
                case "value":
                case "input":
                case "click":
                case "change":
                    return Array(5).join("•");
                case "checksum":
                case "src":
                case "srcset":
                case "alt":
                case "title":
                    return ""
                }
            }
        }
        return t
    }
    function Rn(t, e, n) {
        var i, r, o;
        return void 0 === e && (e = !1),
        void 0 === n && (n = !1),
        i = t,
        e ? i = "https://Electron" : (r = xn.drop) && r.length > 0 && t && t.indexOf("?") > 0 && (i = (o = t.split("?"))[0] + "?" + o[1].split("&").map((function(t) {
            return r.some((function(e) {
                return 0 === t.indexOf(e + "=")
            }
            )) ? t.split("=")[0] + "=*na*" : t
        }
        )).join("&")),
        n && (i = i.substring(0, a)),
        i
    }
    function Ln(t) {
        var e, n, a, i, r = t.trim();
        return r.length > 0 ? (e = r[0],
        n = t.indexOf(e),
        a = t.substr(0, n),
        i = t.substr(n + r.length),
        a + r.length.toString(36) + i) : t
    }
    function Yn(t) {
        return t.replace(n, "•")
    }
    function jn(t, e, n) {
        return Wn(),
        t ? t.replace(o, e).replace(r, n) : t
    }
    function Xn(t) {
        var e, n = 5 * (Math.floor(t.length / 5) + 1), a = "";
        for (e = 0; e < n; e++)
            a += e > 0 && e % 5 == 0 ? " " : "•";
        return a
    }
    function Wn() {
        if (i && null === r)
            try {
                r = new RegExp("\\p{N}","gu"),
                o = new RegExp("\\p{L}","gu"),
                u = new RegExp("\\p{Sc}","gu")
            } catch (t) {
                i = !1
            }
    }
    function Hn() {
        s && (c = {
            time: Cn(),
            event: 4,
            data: Object.assign({}, l)
        }),
        l = l || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0,
            pointerTime: void 0,
            moveX: void 0,
            moveY: void 0,
            moveTime: void 0,
            downX: void 0,
            downY: void 0,
            downTime: void 0,
            upX: void 0,
            upY: void 0,
            upTime: void 0,
            pointerPrevX: void 0,
            pointerPrevY: void 0,
            pointerPrevTime: void 0,
            modules: null
        }
    }
    function qn(t, e, n, a) {
        switch (t) {
        case 8:
            l.docWidth = e,
            l.docHeight = n;
            break;
        case 11:
            l.screenWidth = e,
            l.screenHeight = n;
            break;
        case 10:
            l.scrollX = e,
            l.scrollY = n,
            l.scrollTime = a;
            break;
        case 12:
            l.moveX = e,
            l.moveY = n,
            l.moveTime = a,
            Un(e, n, a);
            break;
        case 13:
            l.downX = e,
            l.downY = n,
            l.downTime = a,
            Un(e, n, a);
            break;
        case 14:
            l.upX = e,
            l.upY = n,
            l.upTime = a,
            Un(e, n, a);
            break;
        default:
            Un(e, n, a)
        }
        s = !0
    }
    function Un(t, e, n) {
        l.pointerPrevX = l.pointerX,
        l.pointerPrevY = l.pointerY,
        l.pointerPrevTime = l.pointerTime,
        l.pointerX = t,
        l.pointerY = e,
        l.pointerTime = n
    }
    function zn(t) {
        l.activityTime = t
    }
    function Fn(t, e) {
        yo() && t && "string" == typeof t && t.length < 255 && (d = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        },
        Wr(24))
    }
    function Vn(t) {
        t in f || (f[t] = 0),
        t in h || (h[t] = 0)
    }
    function Bn(t) {
        Vn(t),
        f[t]++,
        h[t]++
    }
    function Jn(t, e) {
        null !== e && (Vn(t),
        f[t] += e,
        h[t] += e)
    }
    function Kn(t, e) {
        null !== e && !1 === isNaN(e) && (t in f || (f[t] = 0),
        (e > f[t] || 0 === f[t]) && (h[t] = e,
        f[t] = e))
    }
    function Gn(t, e, n) {
        return window.setTimeout(uo(t), e, n)
    }
    function Zn(t) {
        return window.clearTimeout(t)
    }
    function Qn() {
        var t = Cn();
        p = {
            gap: t - g
        },
        Wr(25),
        p.gap < 3e5 ? m = Gn(Qn, v) : cn && (Fn("clarity", "suspend"),
        Mo(),
        ["mousemove", "touchstart"].forEach((function(t) {
            return co(document, t, bo)
        }
        )),
        ["resize", "scroll", "pageshow"].forEach((function(t) {
            return co(window, t, bo)
        }
        )))
    }
    function $n(t, e, n, a) {
        return new (n || (n = Promise))((function(i, r) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    r(t)
                }
            }
            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    r(t)
                }
            }
            function c(t) {
                var e;
                t.done ? i(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }
        ))
    }
    function ta(t, e) {
        var n, a, i, r, o = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function u(u) {
            return function(c) {
                return function(u) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; r && (r = 0,
                    u[0] && (o = 0)),
                    o; )
                        try {
                            if (n = 1,
                            a && (i = 2 & u[0] ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a),
                            0) : a.next) && !(i = i.call(a, u[1])).done)
                                return i;
                            switch (a = 0,
                            i && (u = [2 & u[0], i.value]),
                            u[0]) {
                            case 0:
                            case 1:
                                i = u;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                a = u[1],
                                u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < i[1]) {
                                    o.label = i[1],
                                    i = u;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2],
                                    o.ops.push(u);
                                    break
                                }
                                i[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            u = e.call(t, o)
                        } catch (t) {
                            u = [6, t],
                            a = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & u[0])
                        throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    function ea(t) {
        return $n(this, void 0, void 0, (function() {
            var e, n;
            return ta(this, (function(a) {
                switch (a.label) {
                case 0:
                    return a.trys.push([0, 3, , 4]),
                    b ? (e = new ReadableStream({
                        start: function(e) {
                            return $n(this, void 0, void 0, (function() {
                                return ta(this, (function(n) {
                                    return e.enqueue(t),
                                    e.close(),
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                    }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")),
                    n = Uint8Array.bind,
                    [4, new Response(e).arrayBuffer()]) : [3, 2];
                case 1:
                    return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))];
                case 2:
                    return [3, 4];
                case 3:
                    return a.sent(),
                    [3, 4];
                case 4:
                    return [2, null]
                }
            }
            ))
        }
        ))
    }
    function na(t, e) {
        aa(t, "string" == typeof e ? [e] : e)
    }
    function aa(t, e) {
        var n, a;
        if (yo() && t && e && "string" == typeof t && t.length < 255) {
            n = t in w ? w[t] : [];
            for (a = 0; a < e.length; a++)
                "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            w[t] = n
        }
    }
    function ia() {
        w = {}
    }
    function ra(t) {
        return $n(this, void 0, void 0, (function() {
            var e;
            return ta(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 4, , 5]),
                    crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                case 1:
                    return e = n.sent(),
                    [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                        return ("00" + t.toString(16)).slice(-2)
                    }
                    )).join("")];
                case 2:
                    return [2, ""];
                case 3:
                    return [3, 5];
                case 4:
                    return n.sent(),
                    [2, ""];
                case 5:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function oa(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    function ua(t) {
        var e, n, a, i, r, o, u, c, l, s, d;
        try {
            for (o in n = (e = t && t.length > 0 ? t.split(/ (.*)/) : [""])[0].split(/\|(.*)/),
            a = parseInt(n[0]),
            i = n.length > 1 ? n[1] : "",
            r = e.length > 1 ? JSON.parse(e[1]) : {},
            E[a] = {},
            T[a] = {},
            N[a] = {},
            M[a] = i,
            r)
                switch (u = parseInt(o),
                c = r[o],
                l = 2,
                c.startsWith("~") ? l = 0 : c.startsWith("!") && (l = 4),
                l) {
                case 0:
                    s = c.slice(1),
                    E[a][u] = da(s);
                    break;
                case 2:
                    T[a][u] = c;
                    break;
                case 4:
                    d = c.slice(1),
                    N[a][u] = d
                }
        } catch (t) {
            _r(8, 1, t ? t.name : null)
        }
    }
    function ca(t) {
        return JSON.parse(JSON.stringify(t))
    }
    function la() {
        S.clear()
    }
    function sa(t, e, n) {
        var a, i = !1;
        t in k || (k[t] = {},
        i = !0),
        a = N[t],
        0 == Object.keys(a).length || e in k[t] && k[t][e] == n || (i = !0),
        k[t][e] = n,
        i && S.add(t)
    }
    function da(t) {
        for (var e, n, a, i, r = [], o = t.split("."); o.length > 0; )
            n = (e = o.shift()).indexOf("["),
            a = e.indexOf("{"),
            i = e.indexOf("}"),
            r.push({
                name: n > 0 ? e.slice(0, n) : a > 0 ? e.slice(0, a) : e,
                type: n > 0 ? 1 : a > 0 ? 2 : 3,
                condition: a > 0 ? e.slice(a + 1, i) : null
            });
        return r
    }
    function fa(t, e) {
        var n, a, i, r, o, u, c, l;
        if (void 0 === e && (e = window),
        0 == t.length)
            return e;
        if (n = t.shift(),
        e && e[n.name]) {
            if (i = e[n.name],
            1 !== n.type && ha(i, n.condition))
                a = fa(t, i);
            else if (Array.isArray(i)) {
                for (r = [],
                o = 0,
                u = i; o < u.length; o++)
                    ha(c = u[o], n.condition) && (l = fa(t, c)) && r.push(l);
                a = r
            }
            return a
        }
        return null
    }
    function ha(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }
    function pa(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }
    function ga(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }
    function va(t, e) {
        var n, a, i, r, o, u, c;
        if (void 0 === e && (e = !1),
        pa(document, "cookie") && (a = document.cookie.split(";")))
            for (i = 0; i < a.length; i++)
                if ((r = a[i].split("=")).length > 1 && r[0] && r[0].trim() === t) {
                    for (u = (o = ga(r[1]))[0],
                    c = o[1]; u; )
                        u = (n = ga(c))[0],
                        c = n[1];
                    return e ? c.endsWith("~1") ? c.substring(0, c.length - 2) : null : c
                }
        return null
    }
    function ma(t, e, n) {
        var a, i, r, o, u;
        if ((xn.track || "" == e) && (navigator && navigator.cookieEnabled || pa(document, "cookie"))) {
            a = function(t) {
                return encodeURIComponent(t)
            }(e),
            (i = new Date).setDate(i.getDate() + n),
            r = t + "=" + a + ";" + (i ? "expires=" + i.toUTCString() : "") + ";path=/";
            try {
                if (null === _) {
                    for (u = (o = location.hostname ? location.hostname.split(".") : []).length - 1; u >= 0; u--)
                        if (_ = "." + o[u] + (_ || ""),
                        u < o.length - 1 && (document.cookie = r + ";domain=" + _,
                        va(t) === e))
                            return;
                    _ = ""
                }
            } catch (t) {
                _ = ""
            }
            document.cookie = _ ? r + ";domain=" + _ : r
        }
    }
    function ya(t) {
        try {
            x && JSON.parse(t).forEach((function(t) {
                return x(t)
            }
            ))
        } catch (t) {}
    }
    function ba(t, e, n) {
        xn.fraud && null !== t && n && n.length >= 5 && (C = {
            id: t,
            target: e,
            checksum: An(n, 28)
        },
        D.includes(C.checksum) || (D.push(C.checksum),
        Mr(41)))
    }
    function wa(t) {
        var e, n, a = dr(t);
        a && (n = (e = a.value) && e.length >= 5 && xn.fraud && !R.includes(a.type) ? An(e, 28) : "",
        j.push({
            time: Cn(t),
            event: 42,
            data: {
                target: dr(t),
                type: a.type,
                value: e,
                checksum: n
            }
        }),
        xr(hr.bind(this, 42)))
    }
    function ka() {
        j = []
    }
    function Sa(t) {
        var e, n, a = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                n = null === (e = t.offsetParent) ? Ji(t.ownerDocument) : null,
                a.x += t.offsetLeft,
                a.y += t.offsetTop,
                t = n || e
            } while (t);
        return a
    }
    function Ea(t, e, n) {
        var a, i, r, o, u, c, l, s, d, f, h = Ji(e), p = h && h.contentDocument ? h.contentDocument.documentElement : document.documentElement, g = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + p.scrollLeft) : null, v = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + p.scrollTop) : null;
        h && (a = Sa(h),
        g = g ? g + Math.round(a.x) : g,
        v = v ? v + Math.round(a.y) : v),
        r = function(t) {
            for (; t && t !== document; ) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                    var e = t;
                    if ("A" === e.tagName)
                        return e
                }
                t = t.parentNode
            }
            return null
        }(i = dr(n)),
        o = Na(i),
        0 === n.detail && o && (g = Math.round(o.x + o.w / 2),
        v = Math.round(o.y + o.h / 2)),
        u = function(t, e, n, a) {
            if (!a)
                return {
                    eX: 0,
                    eY: 0
                };
            for (var i = a, r = t, o = Math.max(Math.floor((e - i.x) / i.w * 32767), 0), u = Math.max(Math.floor((n - i.y) / i.h * 32767), 0), c = 0; (o > 32767 || u > 32767) && r.parentElement && c < 10; )
                c++,
                (i = Na(r = r.parentElement)) && (o = Math.max(Math.floor((e - i.x) / i.w * 32767), 0),
                u = Math.max(Math.floor((n - i.y) / i.h * 32767), 0));
            return {
                eX: o,
                eY: u
            }
        }(i, g, v, o),
        c = u.eX,
        l = u.eY,
        null !== g && null !== v && (s = function(t) {
            var e, n, a = null, i = !1;
            return t && (e = t.textContent || String(t.value || "") || t.alt) && (i = (a = (n = e.replace(/\s+/g, " ").trim()).substring(0, 25)).length === n.length),
            {
                text: a,
                isFullText: i ? 1 : 0
            }
        }(i),
        H.push({
            time: Cn(n),
            event: t,
            data: {
                target: i,
                x: g,
                y: v,
                eX: c,
                eY: l,
                button: n.button,
                reaction: (d = i,
                f = Ta(d, "tagName"),
                X.includes(f) ? 0 : 1),
                context: Ma(r),
                text: s.text,
                link: r ? r.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0,
                isFullText: s.isFullText,
                w: o ? o.w : 0,
                h: o ? o.h : 0,
                tag: Ta(i, "tagName").substring(0, 10),
                class: Ta(i, "className").substring(0, 50),
                id: Ta(i, "id").substring(0, 25),
                source: xn.diagnostics && !n.isTrusted ? _a() : 0
            }
        }),
        xr(hr.bind(this, t)))
    }
    function Ta(t, e) {
        var n;
        return t.nodeType === Node.ELEMENT_NODE && "string" == typeof (n = null == t ? void 0 : t[e]) ? null == n ? void 0 : n.toLowerCase() : ""
    }
    function Na(t) {
        var e, n, a, i, r, o = null, u = t.ownerDocument || document, c = u.documentElement, l = u.defaultView || window;
        return "function" == typeof t.getBoundingClientRect && (e = t.getBoundingClientRect()) && e.width > 0 && e.height > 0 && (n = "pageXOffset"in l ? l.pageXOffset : c.scrollLeft,
        a = "pageYOffset"in l ? l.pageYOffset : c.scrollTop,
        o = {
            x: Math.floor(e.left + n),
            y: Math.floor(e.top + a),
            w: Math.floor(e.width),
            h: Math.floor(e.height)
        },
        (i = Ji(u)) && (r = Sa(i),
        o.x += Math.round(r.x),
        o.y += Math.round(r.y))),
        o
    }
    function Ma(t) {
        if (t && t.hasAttribute("target"))
            switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
            }
        return 0
    }
    function _a() {
        var t, e, n, a, i, r;
        _a.dn = 1;
        try {
            for (t = (new Error).stack || "",
            e = location.origin,
            n = 4,
            a = 0,
            i = t.split("\n"); a < i.length; a++)
                (r = i[a]).includes("://") ? n = !r.includes("extension") && r.includes(e) ? 1 : 2 : (r.includes("eval") || r.includes("Function") || r.includes("<a") || W.test(r)) && (n = 3);
            return n
        } catch (t) {
            return 4
        }
    }
    function Oa() {
        H = []
    }
    function xa(t, e) {
        q.push({
            time: Cn(e),
            event: 38,
            data: {
                target: dr(e),
                action: t
            }
        }),
        xr(hr.bind(this, 38))
    }
    function Ia() {
        q = []
    }
    function Da(t) {
        var e, n, a, i = dr(t), r = $i(i);
        if (i && i.type && r) {
            switch (e = i.value,
            n = i.type,
            i.type) {
            case "radio":
            case "checkbox":
                e = i.checked ? "true" : "false"
            }
            a = {
                target: i,
                value: e,
                type: n,
                trust: t.isTrusted ? 1 : 0
            },
            z.length > 0 && z[z.length - 1].data.target === a.target && z.pop(),
            z.push({
                time: Cn(t),
                event: 27,
                data: a
            }),
            Zn(U),
            U = Gn(Aa, 750, 27)
        }
    }
    function Ca(t) {
        "Enter" === t.key && !t.repeat && z.length > 0 && (Zn(U),
        Aa(27))
    }
    function Aa(t) {
        xr(hr.bind(this, t))
    }
    function Pa() {
        z = []
    }
    function Ra(t, e, n) {
        var a, i = Ji(e), r = i && i.contentDocument ? i.contentDocument.documentElement : document.documentElement, o = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + r.scrollLeft) : null, u = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + r.scrollTop) : null;
        i && (a = Sa(i),
        o = o ? o + Math.round(a.x) : o,
        u = u ? u + Math.round(a.y) : u),
        null !== o && null !== u && Ya({
            time: Cn(n),
            event: t,
            data: {
                target: dr(n),
                x: o,
                y: u
            }
        })
    }
    function La(t, e, n) {
        var a, i, r, o, u, c, l = Ji(e), s = l && l.contentDocument ? l.contentDocument.documentElement : document.documentElement, d = n.changedTouches, f = Cn(n);
        if (d)
            for (a = 0; a < d.length; a++) {
                switch (r = "clientX"in (i = d[a]) ? Math.round(i.clientX + s.scrollLeft) : null,
                o = "clientY"in i ? Math.round(i.clientY + s.scrollTop) : null,
                r = r && l ? r + Math.round(l.offsetLeft) : r,
                o = o && l ? o + Math.round(l.offsetTop) : o,
                u = "identifier"in i ? i.identifier : void 0,
                t) {
                case 17:
                    0 === K.size && (B = !0,
                    J = u),
                    K.add(u);
                    break;
                case 18:
                case 20:
                    K.delete(u)
                }
                c = B && J === u,
                null !== r && null !== o && Ya({
                    time: f,
                    event: t,
                    data: {
                        target: dr(n),
                        x: r,
                        y: o,
                        id: u,
                        isPrimary: c
                    }
                }),
                20 !== t && 18 !== t || J === u && (B = !1)
            }
    }
    function Ya(t) {
        var e, n;
        switch (t.event) {
        case 12:
        case 15:
        case 19:
            (n = (e = F.length) > 1 ? F[e - 2] : null) && function(t, e) {
                var n = t.data.x - e.data.x
                  , a = t.data.y - e.data.y
                  , i = Math.sqrt(n * n + a * a)
                  , r = e.time - t.time
                  , o = e.data.target === t.data.target
                  , u = void 0 === e.data.id || e.data.id === t.data.id;
                return e.event === t.event && o && i < 20 && r < 25 && u
            }(n, t) && F.pop(),
            F.push(t),
            Zn(V),
            V = Gn(ja, 500, t.event);
            break;
        default:
            F.push(t),
            ja(t.event)
        }
    }
    function ja(t) {
        xr(hr.bind(this, t))
    }
    function Xa() {
        F = []
    }
    function Wa(t, e) {
        var n = 0
          , a = null
          , i = null;
        function r() {
            var r, o, u, c = this, l = [];
            for (r = 0; r < arguments.length; r++)
                l[r] = arguments[r];
            if (u = (o = performance.now()) - n,
            0 !== n && u < e) {
                if (i = l,
                a)
                    return;
                a = setTimeout((function() {
                    n = performance.now(),
                    t.apply(c, i),
                    i = null,
                    a = null
                }
                ), e - u)
            } else
                n = o,
                t.apply(this, l)
        }
        return r.cleanup = function() {
            a && (clearTimeout(a),
            a = null,
            i = null)
        }
        ,
        r
    }
    function Ha() {
        var t = document.documentElement;
        G = {
            width: t && "clientWidth"in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight"in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        },
        Q ? (Zn(Z),
        Z = Gn(qa, 500, 11)) : (hr(11),
        Q = !0)
    }
    function qa(t) {
        xr(hr.bind(this, t))
    }
    function Ua() {
        G = null,
        Zn(Z),
        $.cleanup()
    }
    function za(t) {
        var e, n, a, i, r, o, u, c, l, s, d, f, h, p, g, v, m;
        if (void 0 === t && (t = null),
        e = window,
        n = document.documentElement,
        a = t ? dr(t) : n) {
            if (a && a.nodeType === Node.DOCUMENT_NODE && (e = (i = Ji(a)) ? i.contentWindow : e,
            a = n = a.documentElement),
            r = a === n && "pageXOffset"in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset"in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            d = (c = window.innerHeight) - (s = u > c ? .15 * c : .2 * c),
            f = Fa(l = u / 3, s),
            h = Fa(l, d),
            p = t && t.isTrusted ? 1 : 0,
            g = {
                time: Cn(t),
                event: 10,
                data: {
                    target: a,
                    x: r,
                    y: o,
                    top: f,
                    bottom: h,
                    trust: p
                }
            },
            null === t && 0 === r && 0 === o || null === r || null === o)
                return et = f,
                void (nt = h);
            (m = (v = tt.length) > 1 ? tt[v - 2] : null) && function(t, e) {
                var n = t.data.x - e.data.x
                  , a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 50
            }(m, g) && tt.pop(),
            tt.push(g),
            Zn(at),
            at = Gn(Va, 500, 10)
        }
    }
    function Fa(t, e) {
        var n, a, i;
        return "caretPositionFromPoint"in document ? i = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint"in document && (i = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer),
        i || (i = document.elementFromPoint(t, e)),
        i && i.nodeType === Node.TEXT_NODE && (i = i.parentNode),
        i
    }
    function Va(t) {
        xr(hr.bind(this, t))
    }
    function Ba() {
        var t, e, n, a;
        et && qr(31, null === (t = null == (n = fr(et, null)) ? void 0 : n.hash) || void 0 === t ? void 0 : t.join(".")),
        nt && qr(32, null === (e = null == (a = fr(nt, null)) ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
    }
    function Ja(t) {
        var e, n = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        null !== n && (null === n.anchorNode && null === n.focusNode || n.anchorNode === n.focusNode && n.anchorOffset === n.focusOffset || (e = rt.start ? rt.start : null,
        null !== ot && null !== rt.start && e !== n.anchorNode && (Zn(ut),
        Ka(21)),
        rt = {
            start: n.anchorNode,
            startOffset: n.anchorOffset,
            end: n.focusNode,
            endOffset: n.focusOffset
        },
        ot = n,
        Zn(ut),
        ut = Gn(Ka, 500, 21)))
    }
    function Ka(t) {
        xr(hr.bind(this, t))
    }
    function Ga() {
        ot = null,
        rt = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    function Za(t) {
        ct.push({
            time: Cn(t),
            event: 39,
            data: {
                target: dr(t)
            }
        }),
        xr(hr.bind(this, 39))
    }
    function Qa() {
        ct = []
    }
    function $a(t) {
        lt = {
            name: t.type,
            persisted: t.persisted ? 1 : 0
        },
        hr(26, Cn(t)),
        Mo()
    }
    function ti() {
        lt = null
    }
    function ei(t) {
        if (void 0 === t && (t = null),
        "visibilityState"in document) {
            var e = "visible" === document.visibilityState ? 1 : 0;
            st = {
                visible: e
            },
            hr(28, Cn(t))
        }
    }
    function ni() {
        st = null
    }
    function ai() {
        dt = null
    }
    function ii(t) {
        dt = {
            focused: t
        },
        hr(50)
    }
    function ri(t) {
        t && t.persisted && (No(),
        _r(11, 0))
    }
    function oi(t) {
        var e, n, a, i = [], r = {}, o = 0, u = null;
        for (e = 0; e < t.length; e++)
            "string" == typeof t[e] ? (a = r[n = t[e]] || -1) >= 0 ? u ? u.push(a) : (u = [a],
            i.push(u),
            o++) : (u = null,
            i.push(n),
            r[n] = o++) : (u = null,
            i.push(t[e]),
            o++);
        return i
    }
    function ui(t) {
        xn.lean && xn.lite || null == t || (t.__clr = t.__clr || {},
        t.CSSStyleSheet && t.CSSStyleSheet.prototype && (ci(t, "replace", 1),
        ci(t, "replaceSync", 2)))
    }
    function ci(t, e, n) {
        void 0 === t.__clr[e] && (t.__clr[e] = t.CSSStyleSheet.prototype[e],
        t.CSSStyleSheet.prototype[e] = function() {
            return yo() && bt.includes(this[gt]) && fi(Cn(), this[gt], n, arguments[0]),
            t.__clr[e].apply(this, arguments)
        }
        )
    }
    function li() {
        ui(window)
    }
    function si(t, e) {
        var n, a, i, r, o, u, c;
        if ((!xn.lean || !xn.lite) && (yt.includes(t) || (yt.push(t),
        t.defaultView && ui(t.defaultView)),
        e = e || Cn(),
        null == t ? void 0 : t.adoptedStyleSheets)) {
            for (n = [],
            a = 0,
            i = t.adoptedStyleSheets; a < i.length; a++)
                (r = i[a])[gt] && bt.includes(r[gt]) || (r[gt] = no(),
                bt.push(r[gt]),
                fi(e, r[gt], 0),
                fi(e, r[gt], 2, Wi(r))),
                n.push(r[gt]);
            o = Fi(t, !0),
            vt[o] || (vt[o] = []),
            u = n,
            c = vt[o],
            u.length === c.length && u.every((function(t, e) {
                return t === c[e]
            }
            )) || (function(t, e, n, a) {
                pt.push({
                    time: t,
                    event: 45,
                    data: {
                        id: e,
                        operation: 3,
                        newIds: a
                    }
                }),
                bi(45)
            }(e, t == document ? -1 : Fi(t), 0, n),
            vt[o] = n,
            mt[o] = e)
        }
    }
    function di() {
        pt = [],
        ht = []
    }
    function fi(t, e, n, a) {
        ht.push({
            time: t,
            event: 46,
            data: {
                id: e,
                operation: n,
                cssRules: a
            }
        }),
        bi(46)
    }
    function hi() {
        wt = []
    }
    function pi(t, e, n, a, i, r, o) {
        wt.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: i,
                targetId: r,
                timeline: o
            }
        }),
        bi(44)
    }
    function gi(t) {
        var e = Animation.prototype[t];
        "function" == typeof e && (Animation.prototype[t] = function() {
            return vi(this, t),
            e.apply(this, arguments)
        }
        )
    }
    function vi(t, e) {
        var n, a, i, r, o;
        if (yo() && null !== (a = (null == (n = t.effect) ? void 0 : n.target) ? Fi(n.target) : null) && n.getKeyframes && n.getTiming && (t[Et] || (t[Et] = no(),
        t[Tt] = 0,
        i = n.getKeyframes(),
        r = n.getTiming(),
        pi(Cn(), t[Et], 0, JSON.stringify(i), JSON.stringify(r), a)),
        t[Tt]++ < Nt)) {
            switch (o = null,
            e) {
            case "play":
                o = 1;
                break;
            case "pause":
                o = 2;
                break;
            case "cancel":
                o = 3;
                break;
            case "finish":
                o = 4;
                break;
            case "commitStyles":
                o = 5
            }
            o && pi(Cn(), t[Et], o)
        }
    }
    function mi(t) {
        _t.has(t) || (_t.add(t),
        Mt.push(t),
        xr(bi.bind(this, 51)))
    }
    function yi() {
        Mt.length = 0
    }
    function bi(t, e, n) {
        return void 0 === e && (e = null),
        void 0 === n && (n = null),
        $n(this, void 0, void 0, (function() {
            var a, i, r, o, u, c, l, s, d, f, h, p, g, v, m, y, b, w, k, S, E, T, N, M, _, O, x, I, D, C, A, P;
            return ta(this, (function(R) {
                switch (R.label) {
                case 0:
                    switch (a = n || Cn(),
                    i = [a, t],
                    t) {
                    case 8:
                        return [3, 1];
                    case 7:
                        return [3, 2];
                    case 45:
                    case 46:
                        return [3, 3];
                    case 44:
                        return [3, 4];
                    case 5:
                    case 6:
                        return [3, 5];
                    case 51:
                        return [3, 12]
                    }
                    return [3, 13];
                case 1:
                    return r = Ot,
                    i.push(r.width, r.height),
                    qn(t, r.width, r.height),
                    wr(i),
                    [3, 13];
                case 2:
                    for (o = 0,
                    u = oe; o < u.length; o++)
                        c = u[o],
                        (i = [c.time, 7]).push(c.data.id, c.data.interaction, c.data.visibility, c.data.name),
                        wr(i, !1);
                    return sr(),
                    [3, 13];
                case 3:
                    for (l = 0,
                    s = pt; l < s.length; l++)
                        g = s[l],
                        (i = [g.time, g.event]).push(g.data.id, g.data.operation, g.data.newIds),
                        wr(i);
                    for (d = 0,
                    f = ht; d < f.length; d++)
                        g = f[d],
                        (i = [g.time, g.event]).push(g.data.id, g.data.operation, g.data.cssRules),
                        wr(i, !1);
                    return di(),
                    [3, 13];
                case 4:
                    for (h = 0,
                    p = wt; h < p.length; h++)
                        g = p[h],
                        (i = [g.time, g.event]).push(g.data.id, g.data.operation, g.data.keyFrames, g.data.timing, g.data.timeline, g.data.targetId),
                        wr(i);
                    return hi(),
                    [3, 13];
                case 5:
                    if (2 === Dr(e))
                        return [3, 13];
                    if (v = function() {
                        var t, e, n, a;
                        for (t = [],
                        e = 0,
                        n = Bt; e < n.length; e++)
                            (a = n[e])in Vt && t.push(Vt[a]);
                        return Bt = [],
                        t
                    }(),
                    !(v.length > 0))
                        return [3, 11];
                    m = 0,
                    y = v,
                    R.label = 6;
                case 6:
                    return m < y.length ? (b = y[m],
                    0 !== (w = Dr(e)) ? [3, 8] : [4, Pr(e)]) : [3, 10];
                case 7:
                    w = R.sent(),
                    R.label = 8;
                case 8:
                    if (2 === w)
                        return [3, 10];
                    for (k = b.data,
                    S = b.metadata.active,
                    E = b.metadata.suspend,
                    T = b.metadata.privacy,
                    N = function(t) {
                        var e = t.metadata.privacy;
                        return "*T" === t.data.tag && !(0 === e || 1 === e)
                    }(b),
                    M = 0,
                    _ = S ? ["tag", "attributes", "value"] : ["tag"]; M < _.length; M++)
                        if (k[O = _[M]] || "" === k[O])
                            switch (O) {
                            case "tag":
                                x = wi(b),
                                I = N ? -1 : 1,
                                i.push(b.id * I),
                                b.parent && S && (i.push(b.parent),
                                b.previous && i.push(b.previous)),
                                i.push(E ? "*M" : k[O]),
                                x && 2 === x.length && i.push("#" + x[0].toString(36) + "." + x[1].toString(36));
                                break;
                            case "attributes":
                                for (D in k[O])
                                    void 0 !== k[O][D] && i.push(ki(D, k[O][D], T, k.tag));
                                break;
                            case "value":
                                ba(b.metadata.fraud, b.id, k[O]),
                                i.push(Pn(k[O], k.tag, T, N))
                            }
                    R.label = 9;
                case 9:
                    return m++,
                    [3, 6];
                case 10:
                    6 === t && zn(a),
                    wr(oi(i), !xn.lean),
                    R.label = 11;
                case 11:
                    return [3, 13];
                case 12:
                    for (C = 0,
                    A = Mt; C < A.length; C++)
                        P = A[C],
                        wr([a, 51, P]);
                    return yi(),
                    [3, 13];
                case 13:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function wi(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = Qi(t.id);
            if (e)
                return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }
    function ki(t, e, n, a) {
        return "href" === t && "LINK" === a ? t + "=" + e : t + "=" + Pn(e, 0 === t.indexOf("data-") ? "data-" : t, n)
    }
    function Si() {
        Ot = null
    }
    function Ei() {
        var t = document.body
          , e = document.documentElement
          , n = t ? t.clientWidth : null
          , a = t ? t.scrollWidth : null
          , i = t ? t.offsetWidth : null
          , r = e ? e.clientWidth : null
          , o = e ? e.scrollWidth : null
          , u = e ? e.offsetWidth : null
          , c = Math.max(n, a, i, r, o, u)
          , l = t ? t.clientHeight : null
          , s = t ? t.scrollHeight : null
          , d = t ? t.offsetHeight : null
          , f = e ? e.clientHeight : null
          , h = e ? e.scrollHeight : null
          , p = e ? e.offsetHeight : null
          , g = Math.max(l, s, d, f, h, p);
        null !== Ot && c === Ot.width && g === Ot.height || null === c || null === g || (Ot = {
            width: c,
            height: g
        },
        bi(8))
    }
    function Ti(t, e, n, a) {
        return $n(this, void 0, void 0, (function() {
            var i, r, o, u, c;
            return ta(this, (function(l) {
                switch (l.label) {
                case 0:
                    i = [t],
                    l.label = 1;
                case 1:
                    if (!(i.length > 0))
                        return [3, 4];
                    for (r = i.shift(),
                    o = r.firstChild; o; )
                        i.push(o),
                        o = o.nextSibling;
                    return 0 !== (u = Dr(e)) ? [3, 3] : [4, Pr(e)];
                case 2:
                    u = l.sent(),
                    l.label = 3;
                case 3:
                    return 2 === u ? [3, 4] : ((c = Yi(r, n, a)) && i.push(c),
                    [3, 1]);
                case 4:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function Ni() {
        xt = new Set,
        Ct = [],
        At = null,
        Rt = 0,
        Lt = {},
        Yt = new WeakMap,
        Ai(window)
    }
    function Mi(t) {
        var e = Cn();
        !function(t, e) {
            var n, a;
            6 in y ? e - (a = (n = y[6])[n.length - 1])[0] > 100 ? y[6].push([e, 0]) : a[1] = e - a[0] : y[6] = [[e, 0]]
        }(0, e),
        It.push({
            time: e,
            mutations: t
        }),
        xr(Oi, 1).then((function() {
            Gn(Ei),
            uo(or)()
        }
        ))
    }
    function _i(t, e, n, a) {
        return $n(this, void 0, void 0, (function() {
            var i, r, o;
            return ta(this, (function(u) {
                switch (u.label) {
                case 0:
                    return 0 !== (i = Dr(t)) ? [3, 2] : [4, Pr(t)];
                case 1:
                    i = u.sent(),
                    u.label = 2;
                case 2:
                    if (2 === i)
                        return [2];
                    switch (r = e.target,
                    o = xn.throttleDom ? function(t, e, n, a) {
                        var i, r, o, u, c, l = t.target ? $i(t.target.parentNode) : null;
                        return l && "HTML" !== l.data.tag && (i = a > Rt,
                        o = (r = $i(t.target)) && r.selector ? r.selector.join() : t.target.nodeName,
                        u = [l.selector ? l.selector.join() : "", o, t.attributeName, xi(t.addedNodes), xi(t.removedNodes)].join(),
                        Lt[u] = u in Lt ? Lt[u] : [0, n],
                        c = Lt[u],
                        !1 === i && c[0] >= 10 && Ii(c[2], 2, e, a),
                        c[0] = i ? c[1] === n ? c[0] : c[0] + 1 : 1,
                        c[1] = n,
                        c[0] >= 10) ? (c[2] = t.removedNodes,
                        n > a + 3e3 ? t.type : (Dt[u] = {
                            mutation: t,
                            timestamp: a
                        },
                        "throttle")) : t.type
                    }(e, t, n, a) : e.type,
                    o && r && r.ownerDocument && zi(r.ownerDocument),
                    o && r && r.nodeType == Node.DOCUMENT_FRAGMENT_NODE && r.host && zi(r),
                    o) {
                    case "attributes":
                        jt.includes(e.attributeName) || Yi(r, 3, a);
                        break;
                    case "characterData":
                        Yi(r, 4, a);
                        break;
                    case "childList":
                        Ii(e.addedNodes, 1, t, a),
                        Ii(e.removedNodes, 2, t, a)
                    }
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function Oi() {
        return $n(this, void 0, void 0, (function() {
            var t, e, n, a, i, r, o, u, c, l, s;
            return ta(this, (function(d) {
                switch (d.label) {
                case 0:
                    Cr(t = {
                        id: Jr(),
                        cost: 3
                    }),
                    d.label = 1;
                case 1:
                    if (!(It.length > 0))
                        return [3, 7];
                    e = It.shift(),
                    n = Cn(),
                    a = 0,
                    i = e.mutations,
                    d.label = 2;
                case 2:
                    return a < i.length ? (r = i[a],
                    [4, _i(t, r, n, e.time)]) : [3, 5];
                case 3:
                    d.sent(),
                    d.label = 4;
                case 4:
                    return a++,
                    [3, 2];
                case 5:
                    return [4, bi(6, t, e.time)];
                case 6:
                    return d.sent(),
                    [3, 1];
                case 7:
                    o = !1,
                    u = 0,
                    c = Object.keys(Dt),
                    d.label = 8;
                case 8:
                    return u < c.length ? (l = c[u],
                    s = Dt[l],
                    delete Dt[l],
                    [4, _i(t, s.mutation, Cn(), s.timestamp)]) : [3, 11];
                case 9:
                    d.sent(),
                    o = !0,
                    d.label = 10;
                case 10:
                    return u++,
                    [3, 8];
                case 11:
                    return Object.keys(Dt).length > 0 && (Pt && Zn(Pt),
                    Pt = Gn((function() {
                        xr(Oi, 1)
                    }
                    ), 33)),
                    0 === Object.keys(Dt).length && o ? [4, bi(6, t, Cn())] : [3, 13];
                case 12:
                    d.sent(),
                    d.label = 13;
                case 13:
                    return function() {
                        var t, e, n, a = Cn();
                        for (Object.keys(Lt).length > 1e4 && (Lt = {},
                        Bn(38)),
                        t = 0,
                        e = Object.keys(Lt); t < e.length; t++)
                            n = e[t],
                            a > Lt[n][1] + 3e4 && delete Lt[n]
                    }(),
                    Ar(t),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function xi(t) {
        var e, n = [];
        for (e = 0; t && e < t.length; e++)
            n.push(t[e].nodeName);
        return n.join()
    }
    function Ii(t, e, n, a) {
        return $n(this, void 0, void 0, (function() {
            var i, r, o, u;
            return ta(this, (function(c) {
                switch (c.label) {
                case 0:
                    i = t ? t.length : 0,
                    r = 0,
                    c.label = 1;
                case 1:
                    return r < i ? (o = t[r],
                    1 !== e ? [3, 2] : (Ti(o, n, e, a),
                    [3, 5])) : [3, 6];
                case 2:
                    return 0 !== (u = Dr(n)) ? [3, 4] : [4, Pr(n)];
                case 3:
                    u = c.sent(),
                    c.label = 4;
                case 4:
                    if (2 === u)
                        return [3, 6];
                    Yi(o, e, a),
                    c.label = 5;
                case 5:
                    return r++,
                    [3, 1];
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function Di(t) {
        return Ct.includes(t) || Ct.push(t),
        At && Zn(At),
        At = Gn((function() {
            !function() {
                var t, e, n, a;
                for (t = 0,
                e = Ct; t < e.length; t++)
                    if (n = e[t]) {
                        if ((a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) && tr(n))
                            continue;
                        Ci(n, a ? "childList" : "characterData")
                    }
                Ct = []
            }()
        }
        ), 33),
        t
    }
    function Ci(t, e) {
        uo(Mi)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    function Ai(t) {
        if (null != t && (t.__clr = t.__clr || {},
        Pi(t, "CSSStyleSheet", "InsertRule", "insertRule", (function() {
            return this.ownerNode
        }
        )),
        Pi(t, "CSSStyleSheet", "DeleteRule", "deleteRule", (function() {
            return this.ownerNode
        }
        )),
        Pi(t, "CSSMediaRule", "MediaInsertRule", "insertRule", (function() {
            return this.parentStyleSheet.ownerNode
        }
        )),
        Pi(t, "CSSMediaRule", "MediaDeleteRule", "deleteRule", (function() {
            return this.parentStyleSheet.ownerNode
        }
        )),
        "Element"in t && t.Element && t.Element.prototype && void 0 === t.__clr.AttachShadow)) {
            t.__clr.AttachShadow = t.Element.prototype.attachShadow;
            try {
                t.Element.prototype.attachShadow = function() {
                    return yo() ? Di(t.__clr.AttachShadow.apply(this, arguments)) : t.__clr.AttachShadow.apply(this, arguments)
                }
            } catch (e) {
                t.__clr.AttachShadow = null
            }
        }
    }
    function Pi(t, e, n, a, i) {
        e in t && t[e] && t[e].prototype && void 0 === t.__clr[n] && (t.__clr[n] = t[e].prototype[a],
        t[e].prototype[a] = function() {
            return yo() && Di(i.call(this)),
            t.__clr[n].apply(this, arguments)
        }
        )
    }
    function Ri(t) {
        var e, n, a, i;
        for (e = 0,
        n = Object.keys(t); e < n.length; e++) {
            if (i = t[a = n[e]],
            "@type" === a && "string" == typeof i)
                switch (i = (i = i.toLowerCase()).includes("article") || i.includes("posting") ? "article" : i) {
                case "article":
                case "recipe":
                    qr(5, t[a]),
                    qr(8, t.creator),
                    qr(18, t.headline);
                    break;
                case "product":
                    qr(5, t[a]),
                    qr(10, t.name),
                    qr(12, t.sku),
                    t.brand && qr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (Kn(11, Li(t.ratingValue, 100)),
                    Kn(18, Li(t.bestRating)),
                    Kn(19, Li(t.worstRating))),
                    Kn(12, Li(t.ratingCount)),
                    Kn(17, Li(t.reviewCount));
                    break;
                case "offer":
                    qr(7, t.availability),
                    qr(14, t.itemCondition),
                    qr(13, t.priceCurrency),
                    qr(12, t.sku),
                    Kn(13, Li(t.price));
                    break;
                case "brand":
                    qr(6, t.name)
                }
            null !== i && "object" == typeof i && Ri(i)
        }
    }
    function Li(t, e) {
        if (void 0 === e && (e = 1),
        null !== t)
            switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Xt, "")) * e)
            }
        return null
    }
    function Yi(t, e, n) {
        var a, i, r, o, u, c, l, s, d, f, h, p, g, v, m, y, b, w, k, S, E, T, N, M, _ = null;
        if (2 === e && !1 === tr(t))
            return _;
        switch (0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode),
        i = tr(t) ? Bi : Vi,
        r = t.parentElement ? t.parentElement : null,
        o = t.ownerDocument !== document,
        t.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
            i(t, r = o && t.parentNode ? Ji(t.parentNode) : r, {
                tag: (o ? "iframe:" : "") + "*D",
                attributes: {
                    name: (u = t).name ? u.name : "HTML",
                    publicId: u.publicId,
                    systemId: u.systemId
                }
            }, e);
            break;
        case Node.DOCUMENT_NODE:
            t === document && zi(document),
            si(t, n),
            ji(t);
            break;
        case Node.DOCUMENT_FRAGMENT_NODE:
            (c = t).host && (zi(c),
            "function" == typeof c.constructor && c.constructor.toString().includes("[native code]") ? (ji(c),
            l = {
                tag: "*S",
                attributes: {
                    style: ""
                }
            },
            i(t, c.host, l, e)) : i(t, c.host, {
                tag: "*P",
                attributes: {}
            }, e),
            si(t, n));
            break;
        case Node.TEXT_NODE:
            r = r || t.parentNode,
            (i === Bi || r && tr(r) && "STYLE" !== r.tagName && "NOSCRIPT" !== r.tagName) && i(t, r, {
                tag: "*T",
                value: t.nodeValue
            }, e);
            break;
        case Node.ELEMENT_NODE:
            switch (d = (s = t).tagName,
            f = function(t) {
                var e, n, a = {}, i = t.attributes;
                if (i && i.length > 0)
                    for (e = 0; e < i.length; e++)
                        n = i[e].name,
                        Wt.includes(n) || (a[n] = i[e].value);
                return "INPUT" === t.tagName && !("value"in a) && t.value && (a.value = t.value),
                a
            }(s),
            r = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null,
            "http://www.w3.org/2000/svg" === s.namespaceURI && (d = "svg:" + d),
            d) {
            case "HTML":
                i(t, r = o && r ? Ji(r) : r, {
                    tag: (o ? "iframe:" : "") + d,
                    attributes: f
                }, e);
                break;
            case "SCRIPT":
                if ("type"in f && "application/ld+json" === f.type)
                    try {
                        Ri(JSON.parse(s.text.replace(Ht, "")))
                    } catch (t) {}
                break;
            case "NOSCRIPT":
                i(t, r, {
                    tag: d,
                    attributes: {},
                    value: ""
                }, e);
                break;
            case "META":
                if ((h = "property"in f ? "property" : "name"in f ? "name" : null) && "content"in f)
                    switch (p = f.content,
                    f[h]) {
                    case "og:title":
                        qr(20, p);
                        break;
                    case "og:type":
                        qr(19, p);
                        break;
                    case "generator":
                        qr(21, p)
                    }
                break;
            case "HEAD":
                g = {
                    tag: d,
                    attributes: f
                },
                v = o && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location,
                g.attributes["*B"] = v.protocol + "//" + v.host + v.pathname,
                i(t, r, g, e);
                break;
            case "BASE":
                (m = $i(t.parentElement)) && ((y = document.createElement("a")).href = f.href,
                m.data.attributes["*B"] = y.protocol + "//" + y.host + y.pathname);
                break;
            case "STYLE":
                i(t, r, {
                    tag: d,
                    attributes: f,
                    value: (T = s,
                    N = T.textContent ? T.textContent.trim() : "",
                    M = T.dataset ? Object.keys(T.dataset).length : 0,
                    (0 === N.length || M > 0 || T.id.length > 0) && (N = Wi(T.sheet)),
                    N)
                }, e);
                break;
            case "IFRAME":
                w = {
                    tag: d,
                    attributes: f
                },
                function(t) {
                    var e, n = !1;
                    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
                        e = t;
                        try {
                            e.contentDocument && (ne.set(e.contentDocument, e),
                            ae.set(e, {
                                doc: e.contentDocument,
                                win: e.contentWindow
                            }),
                            n = !0)
                        } catch (t) {}
                    }
                    return n
                }(b = t) && (function(t) {
                    !1 === tr(t) && co(t, "load", Ci.bind(this, t, "childList"), !0)
                }(b),
                w.attributes["*O"] = "true",
                b.contentDocument && b.contentWindow && "loading" !== b.contentDocument.readyState && (_ = b.contentDocument)),
                2 === e && Xi(b),
                i(t, r, w, e);
                break;
            case "LINK":
                if (Ge && "stylesheet" === f.rel) {
                    for (k in Object.keys(document.styleSheets))
                        if ((S = document.styleSheets[k]).ownerNode == s) {
                            i(t, r, {
                                tag: "STYLE",
                                attributes: f,
                                value: Wi(S)
                            }, e);
                            break
                        }
                    break
                }
                i(t, r, {
                    tag: d,
                    attributes: f
                }, e);
                break;
            case "VIDEO":
            case "AUDIO":
            case "SOURCE":
                "src"in f && f.src.startsWith("data:") && (f.src = ""),
                i(t, r, {
                    tag: d,
                    attributes: f
                }, e);
                break;
            default:
                !function(t) {
                    var e;
                    (null === (e = window.customElements) || void 0 === e ? void 0 : e.get) && window.customElements.get(t) && mi(t)
                }(s.localName),
                E = {
                    tag: d,
                    attributes: f
                },
                s.shadowRoot && (_ = s.shadowRoot),
                i(t, r, E, e)
            }
        }
        return _
    }
    function ji(t) {
        tr(t) || fo(t) || (function(t) {
            var e, n;
            try {
                (n = (e = In("MutationObserver"))in window ? new window[e](uo(Mi)) : null) && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }),
                Yt.set(t, n),
                xt.add(n)),
                t.defaultView && Ai(t.defaultView)
            } catch (t) {
                _r(2, 0, t ? t.name : null)
            }
        }(t),
        function(t) {
            !function(t) {
                var e = Ji(t);
                co(e ? e.contentWindow : t === document ? window : t, "scroll", it, !0)
            }(t),
            t.nodeType === Node.DOCUMENT_NODE && (function(t) {
                co(t, "click", Ea.bind(this, 9, t), !0),
                co(t, "contextmenu", Ea.bind(this, 48, t), !0)
            }(t),
            function(t) {
                co(t, "cut", xa.bind(this, 0), !0),
                co(t, "copy", xa.bind(this, 1), !0),
                co(t, "paste", xa.bind(this, 2), !0)
            }(t),
            function(t) {
                co(t, "mousedown", Ra.bind(this, 13, t), !0),
                co(t, "mouseup", Ra.bind(this, 14, t), !0),
                co(t, "mousemove", Ra.bind(this, 12, t), !0),
                co(t, "wheel", Ra.bind(this, 15, t), !0),
                co(t, "dblclick", Ra.bind(this, 16, t), !0),
                co(t, "touchstart", La.bind(this, 17, t), !0),
                co(t, "touchend", La.bind(this, 18, t), !0),
                co(t, "touchmove", La.bind(this, 19, t), !0),
                co(t, "touchcancel", La.bind(this, 20, t), !0)
            }(t),
            function(t) {
                co(t, "input", Da, !0),
                co(t, "keydown", Ca, !0)
            }(t),
            function(t) {
                co(t, "selectstart", Ja.bind(this, t), !0),
                co(t, "selectionchange", Ja.bind(this, t), !0)
            }(t),
            function(t) {
                co(t, "change", wa, !0)
            }(t),
            function(t) {
                co(t, "submit", Za, !0)
            }(t))
        }(t))
    }
    function Xi(t) {
        so(t);
        var e, n, a, i = (a = t,
        (ae.has(a) ? ae.get(a) : null) || {}), r = i.doc, o = void 0 === r ? null : r, u = i.win, c = void 0 === u ? null : u;
        c && so(c),
        o && (so(o),
        e = o,
        (n = Yt.get(e)) && (n.disconnect(),
        xt.delete(n),
        Yt.delete(e)),
        function(t, e) {
            ae.delete(t),
            ne.delete(e)
        }(t, o))
    }
    function Wi(t) {
        var e, n = "", a = null;
        try {
            a = t ? t.cssRules : []
        } catch (t) {
            if (_r(1, 1, t ? t.name : null),
            t && "SecurityError" !== t.name)
                throw t
        }
        if (null !== a)
            for (e = 0; e < a.length; e++)
                n += a[e].cssText;
        return n
    }
    function Hi(t, e) {
        var n, a, i, r, o = t.attributes, u = t.prefix ? t.prefix[e] : null, c = 0 === e ? "~" + (t.position - 1) : ":nth-of-type(" + t.position + ")";
        switch (t.tag) {
        case "STYLE":
        case "TITLE":
        case "LINK":
        case "META":
        case "*T":
        case "*D":
            return "";
        case "HTML":
            return "HTML";
        default:
            return null === u ? "" : (u += ">",
            t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag,
            n = u + t.tag + c,
            a = "id"in o && o.id.length > 0 ? o.id : null,
            i = "BODY" !== t.tag && "class"in o && o.class.length > 0 ? o.class.trim().split(/\s+/).filter((function(t) {
                return qi(t)
            }
            )).join(".") : null,
            i && i.length > 0 && (0 === e ? (r = function(t) {
                var e, n, a, i;
                for (e = t.split(">"),
                n = 0; n < e.length; n++)
                    a = e[n].indexOf("~"),
                    i = e[n].indexOf("."),
                    e[n] = e[n].substring(0, i > 0 ? i : a > 0 ? a : e[n].length);
                return e.join(">")
            }(u) + t.tag + "." + i,
            r in Ut || (Ut[r] = []),
            Ut[r].includes(t.id) || Ut[r].push(t.id),
            n = r + "~" + Ut[r].indexOf(t.id)) : n = u + t.tag + "." + i + c),
            n = a && qi(a) ? function(t) {
                var e = t.lastIndexOf("*S")
                  , n = t.lastIndexOf("iframe:HTML")
                  , a = Math.max(e, n);
                return a < 0 ? "" : t.substring(0, t.indexOf(">", a) + 1)
            }(u) + "#" + a : n,
            n)
        }
    }
    function qi(t) {
        var e, n;
        if (!t)
            return !1;
        if (qt.some((function(e) {
            return t.toLowerCase().includes(e)
        }
        )))
            return !1;
        for (e = 0; e < t.length; e++)
            if ((n = t.charCodeAt(e)) >= 48 && n <= 57)
                return !1;
        return !0
    }
    function Ui() {
        zt = 1,
        Vt = [],
        Bt = [],
        Jt = {},
        Kt = [],
        Gt = [],
        Zt = A,
        Qt = R,
        $t = P,
        te = L,
        Ft = new Map,
        ee = new WeakMap,
        ne = new WeakMap,
        ae = new WeakMap,
        ie = new WeakMap,
        re = new WeakMap,
        Ut = {}
    }
    function zi(t, e) {
        void 0 === e && (e = !1);
        try {
            e && xn.unmask.forEach((function(t) {
                return t.includes("!") ? Kt.push(t.substr(1)) : Gt.push(t)
            }
            )),
            "querySelectorAll"in t && (xn.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return ir(t, "" + e[0])
                }
                ))
            }
            )),
            xn.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return ie.set(t, 3)
                }
                ))
            }
            )),
            xn.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return re.set(t, e[0])
                }
                ))
            }
            )),
            Gt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return ie.set(t, 0)
                }
                ))
            }
            )))
        } catch (t) {
            _r(5, 1, t ? t.name : null)
        }
    }
    function Fi(t, e) {
        if (void 0 === e && (e = !1),
        null === t)
            return null;
        var n = ee.get(t);
        return !n && e && (n = zt++,
        ee.set(t, n)),
        n || null
    }
    function Vi(t, e, n, a) {
        var i, r, o, u, c, l, s = e ? Fi(e) : null;
        (e && s || null != t.host || t.nodeType === Node.DOCUMENT_TYPE_NODE) && (i = Fi(t, !0),
        r = nr(t),
        o = null,
        u = rr(t) ? i : null,
        c = re.has(t) ? re.get(t) : null,
        l = xn.content ? 1 : 3,
        s >= 0 && Vt[s] && ((o = Vt[s]).children.push(i),
        u = null === u ? o.region : u,
        c = null === c ? o.metadata.fraud : c,
        l = o.metadata.privacy),
        n.attributes && "data-clarity-region"in n.attributes && (ir(t, n.attributes["data-clarity-region"]),
        u = i),
        Ft.set(i, t),
        Vt[i] = {
            id: i,
            parent: s,
            previous: r,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: u,
            metadata: {
                active: !0,
                suspend: !1,
                privacy: l,
                position: null,
                fraud: c,
                size: null
            }
        },
        function(t, e, n) {
            var a, i, r, o, u, c, l, s, d = e.data, f = e.metadata, h = f.privacy, p = d.attributes || {}, g = d.tag.toUpperCase();
            switch (!0) {
            case te.includes(g):
                i = p.type,
                r = "",
                o = ["class", "style"],
                Object.keys(p).filter((function(t) {
                    return !o.includes(t)
                }
                )).forEach((function(t) {
                    return r += p[t].toLowerCase()
                }
                )),
                u = Qt.some((function(t) {
                    return r.includes(t)
                }
                )),
                f.privacy = "INPUT" === g && $t.includes(i) ? h : u ? 4 : 2;
                break;
            case "data-clarity-mask"in p:
                f.privacy = 3;
                break;
            case "data-clarity-unmask"in p:
                f.privacy = 0;
                break;
            case ie.has(t):
                f.privacy = ie.get(t);
                break;
            case re.has(t):
                f.privacy = 2;
                break;
            case "*T" === g:
                c = n && n.data ? n.data.tag : "",
                l = n && n.selector ? n.selector[1] : "",
                s = ["STYLE", "TITLE", "svg:style"],
                f.privacy = s.includes(c) || Kt.some((function(t) {
                    return l.includes(t)
                }
                )) ? 0 : h;
                break;
            case 1 === h:
                f.privacy = function(t, e, n) {
                    return t && e.some((function(e) {
                        return t.includes(e)
                    }
                    )) ? 2 : n.privacy
                }(p.class, Zt, f);
                break;
            case "IMG" === g:
                (null === (a = p.src) || void 0 === a ? void 0 : a.startsWith("blob:")) && (f.privacy = 3)
            }
        }(t, Vt[i], o),
        Gi(Vt[i]),
        function(t) {
            if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
                var e = Qi(t.id);
                !e || e.complete && 0 !== e.naturalWidth || co(e, "load", (function() {
                    e.setAttribute("data-clarity-loaded", "" + no())
                }
                )),
                t.metadata.size = []
            }
        }(Vt[i]),
        ar(i, a))
    }
    function Bi(t, e, n, a) {
        var i, r, o, u, c, l = Fi(t), s = e ? Fi(e) : null, d = nr(t), f = !1, h = !1;
        if (l in Vt) {
            for (c in (i = Vt[l]).metadata.active = !0,
            i.previous !== d && (f = !0,
            i.previous = d),
            i.parent !== s && (f = !0,
            r = i.parent,
            i.parent = s,
            null !== s && s >= 0 ? (o = null === d ? 0 : Vt[s].children.indexOf(d) + 1,
            Vt[s].children.splice(o, 0, l),
            i.region = rr(t) ? l : Vt[s].region) : function(t, e) {
                if (t in Vt) {
                    var n = Vt[t];
                    n.metadata.active = !1,
                    n.parent = null,
                    ar(t, e),
                    er(t)
                }
            }(l, a),
            null !== r && r >= 0 && (u = Vt[r].children.indexOf(l)) >= 0 && Vt[r].children.splice(u, 1),
            h = !0),
            n)
                Ki(i.data, n, c) && (f = !0,
                i.data[c] = n[c]);
            Gi(i),
            ar(l, a, f, h)
        }
    }
    function Ji(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && ne.has(e) ? ne.get(e) : null
    }
    function Ki(t, e, n) {
        var a;
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (a in t[n])
                if (t[n][a] !== e[n][a])
                    return !0;
            for (a in e[n])
                if (e[n][a] !== t[n][a])
                    return !0;
            return !1
        }
        return t[n] !== e[n]
    }
    function Gi(t) {
        var e = t.parent && t.parent in Vt ? Vt[t.parent] : null
          , n = e ? e.selector : null
          , a = t.data
          , i = function(t, e) {
            var n, a;
            for (e.metadata.position = 1,
            n = t ? t.children.indexOf(e.id) : -1; n-- > 0; )
                if (a = Vt[t.children[n]],
                e.data.tag === a.data.tag) {
                    e.metadata.position = a.metadata.position + 1;
                    break
                }
            return e.metadata.position
        }(e, t)
          , r = {
            id: t.id,
            tag: a.tag,
            prefix: n,
            position: i,
            attributes: a.attributes
        };
        t.selector = [Hi(r, 0), Hi(r, 1)],
        t.hash = t.selector.map((function(t) {
            return t ? An(t) : null
        }
        )),
        t.hash.forEach((function(e) {
            return Jt[e] = t.id
        }
        ))
    }
    function Zi(t) {
        var e = function(t) {
            return t in Jt ? Jt[t] : null
        }(t)
          , n = Qi(e);
        return null !== n && null !== n.textContent ? n.textContent.substr(0, 25) : ""
    }
    function Qi(t) {
        return Ft.has(t) ? Ft.get(t) : null
    }
    function $i(t) {
        var e = Fi(t);
        return e in Vt ? Vt[e] : null
    }
    function tr(t) {
        return Ft.has(Fi(t))
    }
    function er(t) {
        var e, n, a, i = Ft.get(t);
        if ((null == i ? void 0 : i.nodeType) !== Node.DOCUMENT_FRAGMENT_NODE && (i && (null == i ? void 0 : i.nodeType) === Node.ELEMENT_NODE && "IFRAME" === i.tagName && Xi(i),
        Ft.delete(t),
        (e = t in Vt ? Vt[t] : null) && e.children))
            for (n = 0,
            a = e.children; n < a.length; n++)
                er(a[n])
    }
    function nr(t) {
        for (var e = null; null === e && t.previousSibling; )
            e = Fi(t.previousSibling),
            t = t.previousSibling;
        return e
    }
    function ar(t, e, n, a) {
        if (void 0 === n && (n = !0),
        void 0 === a && (a = !1),
        !xn.lean || !xn.lite) {
            var i = Bt.indexOf(t);
            i >= 0 && 1 === e && a ? (Bt.splice(i, 1),
            Bt.push(t)) : -1 === i && n && Bt.push(t)
        }
    }
    function ir(t, e) {
        !1 === ue.has(t) && (ue.set(t, e),
        (de = null === de && se ? new IntersectionObserver(ur,{
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : de) && t && t.nodeType === Node.ELEMENT_NODE && de.observe(t))
    }
    function rr(t) {
        return ue && ue.has(t)
    }
    function or() {
        var t, e, n, a, i = [];
        for (t = 0,
        e = le; t < e.length; t++)
            (a = Fi((n = e[t]).node)) ? (n.state.data.id = a,
            ce[a] = n.state.data,
            oe.push(n.state)) : i.push(n);
        le = i,
        oe.length > 0 && bi(7)
    }
    function ur(t) {
        var e, n, a, i, r, o, u, c, l, s, d;
        for (e = 0,
        n = t; e < n.length; e++)
            i = (a = n[e]).target,
            r = a.boundingClientRect,
            o = a.intersectionRect,
            u = a.rootBounds,
            ue.has(i) && r.width + r.height > 0 && u && u.width > 0 && u.height > 0 && (l = (c = i ? Fi(i) : null)in ce ? ce[c] : {
                id: c,
                name: ue.get(i),
                interaction: 16,
                visibility: 0
            },
            d = ((s = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8) || 10 == l.visibility) && Math.abs(r.top) + u.height > r.height,
            cr(i, l, l.interaction, d ? 13 : s ? 10 : 0),
            l.visibility >= 13 && de && de.unobserve(i));
        oe.length > 0 && bi(7)
    }
    function cr(t, e, n, a) {
        var i = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction,
        e.visibility = a > e.visibility ? a : e.visibility,
        e.id ? (e.id in ce && i || !(e.id in ce)) && (ce[e.id] = e,
        oe.push(lr(e))) : le.push({
            node: t,
            state: lr(e)
        })
    }
    function lr(t) {
        return {
            time: Cn(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }
    function sr() {
        oe = []
    }
    function dr(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null
          , n = e && e.length > 0 ? e[0] : t.target;
        return Rt = Cn() + 3e3,
        n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }
    function fr(t, e, n) {
        var a, i, r;
        return void 0 === n && (n = null),
        a = {
            id: 0,
            hash: null,
            privacy: 2,
            region: ""
        },
        t && null !== (i = $i(t)) && (r = i.metadata,
        a.id = i.id,
        a.hash = i.hash,
        a.privacy = r.privacy,
        a.region = i.region ? function(t) {
            var e = Qi(t);
            return (e && ue ? ue.get(e) : "") || ""
        }(i.region) : "",
        i.region && function(t, e) {
            var n = Qi(t)
              , a = t in ce ? ce[t] : {
                id: t,
                visibility: 0,
                interaction: 16,
                name: ue.get(n)
            }
              , i = 16;
            switch (e) {
            case 9:
                i = 20;
                break;
            case 27:
                i = 30
            }
            cr(n, a, i, a.visibility)
        }(i.region, e),
        r.fraud && ba(r.fraud, i.id, n || i.data.value)),
        a
    }
    function hr(t, e) {
        return void 0 === e && (e = null),
        $n(this, void 0, void 0, (function() {
            var n, a, i, r, o, u, c, d, f, h, p, g, v, m, y, b, w, k, S, E, T, N, M, _, O, x, I, D, C, A, P, R, L, Y, X, W;
            return ta(this, (function(U) {
                switch (n = e || Cn(),
                a = [n, t],
                t) {
                case 13:
                case 14:
                case 12:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    for (i = 0,
                    r = F; i < r.length; i++)
                        Y = r[i],
                        (o = fr(Y.data.target, Y.event)).id > 0 && ((a = [Y.time, Y.event]).push(o.id),
                        a.push(Y.data.x),
                        a.push(Y.data.y),
                        a.push(void 0 !== Y.data.id ? Y.data.id : ""),
                        a.push(void 0 === Y.data.isPrimary ? "true" : "" + Y.data.isPrimary),
                        wr(a),
                        (void 0 === Y.data.isPrimary || Y.data.isPrimary) && qn(Y.event, Y.data.x, Y.data.y, Y.time));
                    Xa();
                    break;
                case 9:
                case 48:
                    for (u = 0,
                    c = H; u < c.length; u++)
                        Y = c[u],
                        d = fr(Y.data.target, Y.event, Y.data.text),
                        a = [Y.time, Y.event],
                        f = d.hash ? d.hash.join(".") : "",
                        a.push(d.id, Y.data.x, Y.data.y, Y.data.eX, Y.data.eY, Y.data.button, Y.data.reaction, Y.data.context, Pn(Y.data.text, "click", d.privacy), Rn(Y.data.link), f, Y.data.trust, Y.data.isFullText, Y.data.w, Y.data.h, Y.data.tag, Y.data.class, Y.data.id, Y.data.source),
                        wr(a),
                        gr(Y.time, Y.event, f, Y.data.x, Y.data.y, Y.data.reaction, Y.data.context);
                    Oa();
                    break;
                case 38:
                    for (h = 0,
                    p = q; h < p.length; h++)
                        Y = p[h],
                        a = [Y.time, Y.event],
                        (P = fr(Y.data.target, Y.event)).id > 0 && (a.push(P.id),
                        a.push(Y.data.action),
                        wr(a));
                    Ia();
                    break;
                case 11:
                    g = G,
                    a.push(g.width, g.height),
                    qn(t, g.width, g.height),
                    Ua(),
                    wr(a);
                    break;
                case 26:
                    v = lt,
                    a.push(v.name, v.persisted),
                    ti(),
                    wr(a);
                    break;
                case 27:
                    for (m = 0,
                    y = z; m < y.length; m++)
                        Y = y[m],
                        b = fr(Y.data.target, Y.event, Y.data.value),
                        (a = [Y.time, Y.event]).push(b.id),
                        a.push(Pn(Y.data.value, "input", b.privacy, !1, Y.data.type)),
                        a.push(Y.data.trust),
                        wr(a);
                    Pa();
                    break;
                case 21:
                    (w = rt) && (k = fr(w.start, t),
                    S = fr(w.end, t),
                    a.push(k.id, w.startOffset, S.id, w.endOffset),
                    Ga(),
                    wr(a));
                    break;
                case 10:
                    for (E = 0,
                    T = tt; E < T.length; E++)
                        Y = T[E],
                        N = fr(Y.data.target, Y.event),
                        M = fr(Y.data.top, Y.event),
                        _ = fr(Y.data.bottom, Y.event),
                        O = (null == M ? void 0 : M.hash) ? M.hash.join(".") : "",
                        x = (null == _ ? void 0 : _.hash) ? _.hash.join(".") : "",
                        N.id > 0 && ((a = [Y.time, Y.event]).push(N.id, Y.data.x, Y.data.y, O, x, Y.data.trust),
                        wr(a),
                        qn(Y.event, Y.data.x, Y.data.y, Y.time));
                    tt = [],
                    et = null,
                    nt = null;
                    break;
                case 42:
                    for (I = 0,
                    D = j; I < D.length; I++)
                        Y = D[I],
                        a = [Y.time, Y.event],
                        (P = fr(Y.data.target, Y.event)).id > 0 && ((a = [Y.time, Y.event]).push(P.id),
                        a.push(Y.data.type),
                        a.push(Pn(Y.data.value, "change", P.privacy)),
                        a.push(Pn(Y.data.checksum, "checksum", P.privacy)),
                        wr(a));
                    ka();
                    break;
                case 39:
                    for (C = 0,
                    A = ct; C < A.length; C++)
                        Y = A[C],
                        a = [Y.time, Y.event],
                        (P = fr(Y.data.target, Y.event)).id > 0 && (a.push(P.id),
                        wr(a));
                    Qa();
                    break;
                case 22:
                    for (R = 0,
                    L = he; R < L.length; R++)
                        Y = L[R],
                        (a = [Y.time, Y.event]).push(Y.data.type, Y.data.hash, Y.data.x, Y.data.y, Y.data.reaction, Y.data.context),
                        wr(a, !1);
                    pr();
                    break;
                case 28:
                    X = st,
                    a.push(X.visible),
                    wr(a),
                    function(t, e) {
                        l.visible = e,
                        l.visible || zn(t),
                        s = !0
                    }(n, X.visible),
                    ni();
                    break;
                case 50:
                    W = dt,
                    a.push(W.focused),
                    wr(a, !1),
                    ai()
                }
                return [2]
            }
            ))
        }
        ))
    }
    function pr() {
        he = []
    }
    function gr(t, e, n, a, i, r, o) {
        void 0 === r && (r = 1),
        void 0 === o && (o = 0),
        fe.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: i,
                reaction: r,
                context: o
            }
        }),
        qn(e, a, i, t)
    }
    function vr(t, e, n, a) {
        return "href" === t && "LINK" === a ? t + "=" + e : t + "=" + Pn(e, 0 === t.indexOf("data-") ? "data-" : t, n)
    }
    function mr(t) {
        var e, n = {}, a = t.attributes;
        if (a && a.length > 0)
            for (e = 0; e < a.length; e++)
                n[a[e].name] = a[e].value;
        return n
    }
    function yr(t, e, n) {
        var a, i, r, o;
        t && n && n.tag && (a = function(t) {
            return null === t ? null : ve.has(t) ? ve.get(t) : (ve.set(t, ge),
            ge++)
        }(t),
        i = e ? ve.get(e) : null,
        r = t.previousSibling ? ve.get(t.previousSibling) : null,
        o = {
            active: !0,
            suspend: !1,
            privacy: 5,
            position: null,
            fraud: null,
            size: null
        },
        pe.push({
            id: a,
            parent: i,
            previous: r,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: null,
            metadata: o
        }))
    }
    function br(t) {
        var e, n;
        ye && ((n = (e = t ? t.split(" ") : [""]).length > 1 ? parseInt(e[1], 10) : null) && be.has(n) || function(t, e) {
            try {
                var n = document.createElement("script");
                n.src = t,
                n.async = !0,
                n.onload = function() {
                    e && (be.add(e),
                    function(t) {
                        l.modules = Array.from(t),
                        s = !0
                    }(be))
                }
                ,
                n.onerror = function() {
                    oo(new Error("MODULE: " + t))
                }
                ,
                document.head.appendChild(n)
            } catch (t) {}
        }(e[0], n))
    }
    function wr(t, e) {
        var n, a, i, r;
        if (void 0 === e && (e = !0),
        Me) {
            switch (n = Cn(),
            a = t.length > 1 ? t[1] : null,
            i = JSON.stringify(t),
            xn.lean ? !Oe && ke + i.length > 10485760 && (_r(10, 0),
            Oe = !0) : Oe = !1,
            a) {
            case 5:
                if (Oe)
                    break;
                we += i.length;
            case 37:
            case 6:
            case 43:
            case 45:
            case 46:
            case 44:
            case 51:
                if (Oe)
                    break;
                ke += i.length,
                Se.push(i);
                break;
            default:
                Ee.push(i)
            }
            Bn(25),
            r = function() {
                var t = !1 === xn.lean && we > 0 ? 100 : tn.sequence * xn.delay;
                return "string" == typeof xn.upload ? Math.max(Math.min(t, 3e4), 100) : xn.delay
            }(),
            n - _e > 2 * r && (Zn(Te),
            Te = null),
            e && null === Te && (25 !== a && (m && Zn(m),
            m = Gn(Qn, v),
            g = Cn()),
            Te = Gn(kr, r),
            _e = n,
            function(t) {
                if (0 === qe.check) {
                    var e = qe.check;
                    e = tn.sequence >= 128 ? 1 : e,
                    e = tn.pageNum >= 128 ? 7 : e,
                    e = Cn() > 72e5 ? 2 : e,
                    (e = t > 10485760 ? 2 : e) !== qe.check && Hr(e)
                }
            }(ke))
        }
    }
    function kr(t) {
        return void 0 === t && (t = !1),
        $n(this, void 0, void 0, (function() {
            var e, n, a, i, r, o, u, c, l, d;
            return ta(this, (function(f) {
                switch (f.label) {
                case 0:
                    return Me ? (Te = null,
                    (e = !1 === xn.lean && ke > 0 && (ke < 1048576 || tn.sequence > 0)) && Kn(1, 1),
                    or(),
                    function() {
                        var t, e, n, a, i, r;
                        if (tn) {
                            for (t = [],
                            he = [],
                            e = (tn.start || 0) + (tn.duration || 0),
                            n = Math.max(e - 2e3, 0),
                            a = 0,
                            i = fe; a < i.length; a++)
                                (r = i[a]).time >= n && (r.time <= e && he.push(r),
                                t.push(r));
                            fe = t,
                            hr(22)
                        }
                    }(),
                    function() {
                        var t, e;
                        Wr(34),
                        s && Wr(4),
                        Wr(1),
                        Wr(0),
                        Wr(36),
                        0 !== qe.check && Wr(35),
                        function() {
                            var t, e, n, a, i, r, o, u, c, l, s, d, f, h, p, g, v;
                            try {
                                for (t in E)
                                    if (e = parseInt(t),
                                    "" == M[e] || document.querySelector(M[e])) {
                                        for (a in n = E[e])
                                            (r = (v = fa(ca(n[i = parseInt(a)]))) ? JSON.stringify(v).slice(0, 1e4) : v) && sa(e, i, r);
                                        for (u in o = T[e])
                                            c = !1,
                                            (s = o[l = parseInt(u)]).startsWith("@") && (c = !0,
                                            s = s.slice(1)),
                                            (d = document.querySelectorAll(s)) && (f = Array.from(d).map((function(t) {
                                                if ("IMG" === t.tagName) {
                                                    var e = t;
                                                    return e.src || e.currentSrc || ""
                                                }
                                                return t.textContent
                                            }
                                            )).join("<SEP>"),
                                            sa(e, l, (c ? An(f).trim() : f).slice(0, 1e4)));
                                        for (p in h = N[e])
                                            sa(e, g = parseInt(p), Zi(h[g]).trim().slice(0, 1e4))
                                    }
                                S.size > 0 && Wr(40)
                            } catch (t) {
                                _r(5, 1, t ? t.name : null)
                            }
                        }(),
                        Be && (Wr(47),
                        Be = !1,
                        xn.track || (null == (e = null === (t = window.google_tag_data) || void 0 === t ? void 0 : t.ics) ? void 0 : e.usedUpdate) && Ur())
                    }(),
                    function() {
                        var t, e, n, a;
                        for (t = 0,
                        e = yt; t < e.length; t++)
                            si(n = e[t], (a = n == document ? -1 : Fi(n))in mt ? mt[a] : null)
                    }(),
                    n = !0 === t,
                    tn ? (a = JSON.stringify(function(t) {
                        return tn.start = tn.start + tn.duration,
                        tn.duration = Cn() - tn.start,
                        tn.sequence++,
                        tn.upload = t && "sendBeacon"in navigator ? 1 : 0,
                        tn.end = t ? 1 : 0,
                        tn.applicationPlatform = 0,
                        tn.url = Rn(location.href, !1, !0),
                        [tn.version, tn.sequence, tn.start, tn.duration, tn.projectId, tn.userId, tn.sessionId, tn.pageNum, tn.upload, tn.end, tn.applicationPlatform, tn.url]
                    }(n)),
                    i = Ee,
                    Ee = [],
                    e && (r = Se,
                    Se = [],
                    ke = 0,
                    we = 0,
                    Oe = !1),
                    o = "[" + i.join() + "]",
                    u = e ? "[" + r.join() + "]" : "",
                    n && u.length > 0 && a.length + o.length + u.length > 65536 && (u = ""),
                    c = (h = {
                        e: a,
                        a: o,
                        p: u
                    }).p.length > 0 ? '{"e":' + h.e + ',"a":' + h.a + ',"p":' + h.p + "}" : '{"e":' + h.e + ',"a":' + h.a + "}",
                    n ? (d = null,
                    [3, 3]) : [3, 1]) : [2]) : [2];
                case 1:
                    return [4, ea(c)];
                case 2:
                    d = f.sent(),
                    f.label = 3;
                case 3:
                    return Jn(2, (l = d) ? l.length : c.length),
                    Sr(c, l, tn.sequence, n),
                    [2]
                }
                var h
            }
            ))
        }
        ))
    }
    function Sr(t, e, n, a) {
        var i, r, o;
        if (void 0 === a && (a = !1),
        "string" == typeof xn.upload) {
            if (i = xn.upload,
            r = !1,
            a && navigator && navigator.sendBeacon)
                try {
                    (r = navigator.sendBeacon.bind(navigator)(i, t)) && Tr(n)
                } catch (t) {}
            !1 === r && (n in Ne ? Ne[n].attempts++ : Ne[n] = {
                data: t,
                attempts: 1
            },
            (o = new XMLHttpRequest).open("POST", i, !0),
            o.timeout = 15e3,
            o.ontimeout = function() {
                oo(new Error("Timeout : " + i))
            }
            ,
            null !== n && (o.onreadystatechange = function() {
                uo(Er)(o, n)
            }
            ),
            o.withCredentials = !0,
            e ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"),
            o.send(e)) : o.send(t))
        } else
            xn.upload && ((0,
            xn.upload)(t),
            Tr(n))
    }
    function Er(t, e) {
        var n = Ne[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? Hr(6) : (0 === t.status && (xn.upload = xn.fallback ? xn.fallback : xn.upload),
        xe = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        },
        Wr(2),
        Sr(n.data, null, e)) : (xe = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        },
        n.attempts > 1 && Wr(2),
        200 === t.status && t.responseText && function(t) {
            var e, n, a, i;
            for (e = 0,
            n = t && t.length > 0 ? t.split("\n") : []; e < n.length; e++)
                switch ((i = (a = n[e]) && a.length > 0 ? a.split(/ (.*)/) : [""])[0]) {
                case "END":
                    Hr(6);
                    break;
                case "UPGRADE":
                    Xr("Auto");
                    break;
                case "ACTION":
                    xn.action && i.length > 1 && xn.action(i[1]);
                    break;
                case "EXTRACT":
                    i.length > 1 && ua(i[1]);
                    break;
                case "SIGNAL":
                    i.length > 1 && ya(i[1]);
                    break;
                case "MODULE":
                    i.length > 1 && br(i[1]);
                    break;
                case "SNAPSHOT":
                    xn.lean = !1,
                    pe = [],
                    function(t) {
                        for (var e, n, a, i, r, o, u, c, l = [document]; l.length > 0; ) {
                            for (e = null,
                            n = null,
                            a = null,
                            r = (i = l.shift()).firstChild,
                            o = i.parentElement ? i.parentElement : i.parentNode ? i.parentNode : null; r; )
                                l.push(r),
                                r = r.nextSibling;
                            switch (i.nodeType) {
                            case Node.DOCUMENT_TYPE_NODE:
                                n = "*D",
                                e = {
                                    name: (u = i).name,
                                    publicId: u.publicId,
                                    systemId: u.systemId
                                };
                                break;
                            case Node.TEXT_NODE:
                                a = i.nodeValue,
                                n = ve.get(o) ? "*T" : n;
                                break;
                            case Node.ELEMENT_NODE:
                                e = mr(c = i),
                                n = ["NOSCRIPT", "SCRIPT", "STYLE"].includes(c.tagName) ? n : c.tagName
                            }
                            yr(i, o, {
                                tag: n,
                                attributes: e,
                                value: a
                            })
                        }
                    }(),
                    function(t) {
                        $n(this, void 0, void 0, (function() {
                            var t, e, n, a, i, r, o, u, c, l, s, d;
                            return ta(this, (function(f) {
                                if (t = Cn(),
                                e = [t, 43],
                                (n = pe).length > 0) {
                                    for (a = 0,
                                    i = n; a < i.length; a++)
                                        for (r = i[a],
                                        o = r.metadata.privacy,
                                        u = r.data,
                                        c = 0,
                                        l = ["tag", "attributes", "value"]; c < l.length; c++)
                                            if (u[s = l[c]])
                                                switch (s) {
                                                case "tag":
                                                    e.push(r.id),
                                                    r.parent && e.push(r.parent),
                                                    r.previous && e.push(r.previous),
                                                    e.push(u[s]);
                                                    break;
                                                case "attributes":
                                                    for (d in u[s])
                                                        void 0 !== u[s][d] && e.push(vr(d, u[s][d], o, u.tag));
                                                    break;
                                                case "value":
                                                    e.push(Pn(u[s], u.tag, o))
                                                }
                                    wr(oi(e), !0)
                                }
                                return [2]
                            }
                            ))
                        }
                        ))
                    }()
                }
        }(t.responseText),
        0 === t.status && (Sr(n.data, null, e, !0),
        Hr(3)),
        t.status >= 200 && t.status <= 208 && Tr(e),
        delete Ne[e]))
    }
    function Tr(t) {
        1 === t && (to(),
        $r())
    }
    function Nr(t) {
        var e = t.error || t;
        return e.message in Ie || (Ie[e.message] = 0),
        Ie[e.message]++ >= 5 || e && e.message && (De = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        },
        Mr(31)),
        !0
    }
    function Mr(t) {
        return $n(this, void 0, void 0, (function() {
            var e;
            return ta(this, (function(n) {
                switch (e = [Cn(), t],
                t) {
                case 31:
                    e.push(De.message, De.line, De.column, De.stack, Rn(De.source)),
                    wr(e);
                    break;
                case 33:
                    Ae && (e.push(Ae.code, Ae.name, Ae.message, Ae.stack, Ae.severity),
                    wr(e, !1));
                    break;
                case 41:
                    C && (e.push(C.id, C.target, C.checksum),
                    wr(e, !1))
                }
                return [2]
            }
            ))
        }
        ))
    }
    function _r(t, e, n, a, i) {
        void 0 === n && (n = null),
        void 0 === a && (a = null),
        void 0 === i && (i = null);
        var r = n ? n + "|" + a : "";
        t in Ce && Ce[t].includes(r) || (Ae = {
            code: t,
            name: n,
            message: a,
            stack: i,
            severity: e
        },
        t in Ce ? Ce[t].push(r) : Ce[t] = [r],
        Mr(33))
    }
    function Or() {
        Re = {},
        Le = [],
        Ye = null,
        je = null
    }
    function xr(t, e) {
        return void 0 === e && (e = 0),
        $n(this, void 0, void 0, (function() {
            var n, a, i;
            return ta(this, (function(r) {
                for (n = 0,
                a = Le; n < a.length; n++)
                    if (a[n].task === t)
                        return [2];
                return i = new Promise((function(n) {
                    Le[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: Jr()
                    })
                }
                )),
                null === Ye && null === je && Ir(),
                [2, i]
            }
            ))
        }
        ))
    }
    function Ir() {
        var t = Le.shift();
        t && (Ye = t,
        t.task().then((function() {
            t.id !== Jr() || t.resolve(),
            Ye = null,
            Ir()
        }
        )).catch((function(e) {
            !(t.id !== Jr()) && e && _r(0, 1, e.name, e.message, e.stack),
            Ye = null,
            Ir()
        }
        )))
    }
    function Dr(t) {
        var e = Rr(t);
        return e in Re ? performance.now() - Re[e].start > Re[e].yield ? 0 : 1 : 2
    }
    function Cr(t) {
        Re[Rr(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }
    function Ar(t) {
        var e = performance.now()
          , n = Rr(t)
          , a = e - Re[n].start;
        Jn(t.cost, a),
        Bn(5),
        Re[n].calls > 0 && Jn(4, a)
    }
    function Pr(t) {
        var e;
        return $n(this, void 0, void 0, (function() {
            var n, a;
            return ta(this, (function(i) {
                switch (i.label) {
                case 0:
                    return (n = Rr(t))in Re ? (Ar(t),
                    a = Re[n],
                    [4, Lr()]) : [3, 2];
                case 1:
                    a.yield = (null === (e = i.sent()) || void 0 === e ? void 0 : e.timeRemaining()) || 30,
                    function(t) {
                        var e, n, a = Rr(t);
                        Re && Re[a] && (e = Re[a].calls,
                        n = Re[a].yield,
                        Cr(t),
                        Re[a].calls = e + 1,
                        Re[a].yield = n)
                    }(t),
                    i.label = 2;
                case 2:
                    return [2, n in Re ? 1 : 2]
                }
            }
            ))
        }
        ))
    }
    function Rr(t) {
        return t.id + "." + t.cost
    }
    function Lr() {
        return $n(this, void 0, void 0, (function() {
            return ta(this, (function(t) {
                switch (t.label) {
                case 0:
                    return je ? [4, je] : [3, 2];
                case 1:
                    t.sent(),
                    t.label = 2;
                case 2:
                    return [2, new Promise((function(t) {
                        We(t, {
                            timeout: Pe
                        })
                    }
                    ))]
                }
            }
            ))
        }
        ))
    }
    function Yr() {
        xr(jr, 1).then((function() {
            uo(Ei)(),
            uo(or)(),
            uo(Ba)()
        }
        ))
    }
    function jr() {
        return $n(this, void 0, void 0, (function() {
            var t, e;
            return ta(this, (function(n) {
                switch (n.label) {
                case 0:
                    return t = Cn(),
                    Cr(e = {
                        id: Jr(),
                        cost: 3
                    }),
                    [4, Ti(document, e, 0, t)];
                case 1:
                    return n.sent(),
                    si(document, t),
                    [4, bi(5, e, t)];
                case 2:
                    return n.sent(),
                    Ar(e),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function Xr(t) {
        yo() && xn.lean && (xn.lean = !1,
        He = {
            key: t
        },
        $r(),
        to(),
        xn.upgrade && xn.upgrade(t),
        Wr(3),
        xn.lite && (Yr(),
        li()))
    }
    function Wr(t) {
        var e, n, a, i, r, o, u, l, s, f, g, v, m, b, E, T, N, M, _ = [Cn(), t];
        switch (t) {
        case 4:
            (e = c) && e.data && (n = e.data,
            (_ = [e.time, e.event]).push(n.visible, n.docWidth, n.docHeight, n.screenWidth, n.screenHeight, n.scrollX, n.scrollY, n.pointerX, n.pointerY, n.activityTime, n.scrollTime, n.pointerTime, n.moveX, n.moveY, n.moveTime, n.downX, n.downY, n.downTime, n.upX, n.upY, n.upTime, n.pointerPrevX, n.pointerPrevY, n.pointerPrevTime, n.modules),
            wr(_, !1)),
            Hn();
            break;
        case 25:
            _.push(p.gap),
            wr(_);
            break;
        case 35:
            _.push(qe.check),
            wr(_, !1);
            break;
        case 3:
            _.push(He.key),
            wr(_);
            break;
        case 2:
            _.push(xe.sequence, xe.attempts, xe.status),
            wr(_, !1);
            break;
        case 24:
            d.key && _.push(d.key),
            _.push(d.value),
            wr(_);
            break;
        case 34:
            if ((a = Object.keys(w)).length > 0) {
                for (i = 0,
                r = a; i < r.length; i++)
                    o = r[i],
                    _.push(o),
                    _.push(w[o]);
                ia(),
                wr(_, !1)
            }
            break;
        case 0:
            if ((u = Object.keys(h)).length > 0) {
                for (l = 0,
                s = u; l < s.length; l++)
                    f = s[l],
                    g = parseInt(f, 10),
                    _.push(g),
                    _.push(Math.round(h[f]));
                h = {},
                wr(_, !1)
            }
            break;
        case 1:
            if ((v = Object.keys(ze)).length > 0) {
                for (m = 0,
                b = v; m < b.length; m++)
                    n = b[m],
                    g = parseInt(n, 10),
                    _.push(g),
                    _.push(ze[n]);
                ze = {},
                Fe = !1,
                wr(_, !1)
            }
            break;
        case 36:
            if ((E = Object.keys(y)).length > 0) {
                for (T = 0,
                N = E; T < N.length; T++)
                    M = N[T],
                    g = parseInt(M, 10),
                    _.push(g),
                    _.push([].concat.apply([], y[M]));
                y = {},
                wr(_, !1)
            }
            break;
        case 40:
            S.forEach((function(t) {
                var e, n, a;
                for (n in _.push(t),
                e = [],
                k[t])
                    a = parseInt(n, 10),
                    e.push(a),
                    e.push(k[t][n]);
                _.push(e)
            }
            )),
            la(),
            wr(_, !1);
            break;
        case 47:
            _.push(Ve.source, Ve.ad_Storage, Ve.analytics_Storage),
            wr(_, !1)
        }
    }
    function Hr(t) {
        qe.check = t,
        5 !== t && (Qr(),
        Mo())
    }
    function qr(t, e) {
        if (e && (e = "" + e,
        t in Ue || (Ue[t] = []),
        !Ue[t].includes(e))) {
            if (Ue[t].length > 128)
                return void (Fe || (Fe = !0,
                Hr(5)));
            Ue[t].push(e),
            t in ze || (ze[t] = []),
            ze[t].push(e)
        }
    }
    function Ur() {
        var t, e, n, a = null === (t = window.google_tag_data) || void 0 === t ? void 0 : t.ics;
        if (null == a ? void 0 : a.getConsentState)
            try {
                e = a.getConsentState("analytics_storage"),
                Kr({
                    source: 2,
                    ad_Storage: 1 === (n = {
                        ad_Storage: a.getConsentState("ad_storage"),
                        analytics_Storage: e
                    }).ad_Storage ? "granted" : "denied",
                    analytics_Storage: 1 === n.analytics_Storage ? "granted" : "denied"
                })
            } catch (t) {
                return
            }
    }
    function zr() {
        Fr(2)
    }
    function Fr(t) {
        qr(36, "" + t)
    }
    function Vr(t) {
        Ve = t,
        Wr(47)
    }
    function Br() {
        var t, e, n, a;
        if (!Qe && "granted" === (null == Ze ? void 0 : Ze.analytics_Storage) && "granted" === (null == Ze ? void 0 : Ze.ad_Storage)) {
            for (t = 0,
            e = xn.cookies; t < e.length; t++)
                (a = va(n = e[t])) && na(n, a);
            Qe = !0
        }
    }
    function Jr() {
        return Je ? [Je.userId, Je.sessionId, Je.pageNum].join(".") : ""
    }
    function Kr(t, e) {
        var n, a, i;
        if (void 0 === t && (t = $e),
        void 0 === e && (e = 5),
        yo()) {
            if (a = {
                source: null !== (n = t.source) && void 0 !== n ? n : e,
                ad_Storage: Zr(t.ad_Storage, null == Ze ? void 0 : Ze.ad_Storage),
                analytics_Storage: Zr(t.analytics_Storage, null == Ze ? void 0 : Ze.analytics_Storage)
            },
            Ze && a.ad_Storage === Ze.ad_Storage && a.analytics_Storage === Ze.analytics_Storage)
                return Ze.source = a.source,
                Vr(Gr(Ze)),
                void zr();
            if (Ze = a,
            $r(!0),
            !(i = Gr(Ze)).analytics_Storage && xn.track)
                return xn.track = !1,
                Qr(!0),
                Mo(),
                void window.setTimeout(No, 250);
            yo() && i.analytics_Storage && (xn.track = !0,
            eo(io(), 1),
            to()),
            Br(),
            Vr(i),
            zr()
        }
    }
    function Gr(t) {
        var e;
        return {
            source: null !== (e = t.source) && void 0 !== e ? e : 255,
            ad_Storage: "granted" === t.ad_Storage ? 1 : 0,
            analytics_Storage: "granted" === t.analytics_Storage ? 1 : 0
        }
    }
    function Zr(t, e) {
        return void 0 === e && (e = "denied"),
        "string" == typeof t ? t.toLowerCase() : e
    }
    function Qr(t) {
        void 0 === t && (t = !1),
        ma("_clsk", "", 0),
        t && ma("_clck", "", 0)
    }
    function $r(t) {
        void 0 === t && (t = !1),
        function(t, e) {
            var n, a;
            if (void 0 === e && (e = !1),
            Ke.length > 0)
                for (n = 0; n < Ke.length; n++)
                    (a = Ke[n]).callback && (!a.called && !e || a.consentInfo && e) && (!a.wait || t) && (a.callback(Je, !xn.lean, a.consentInfo ? Ze : void 0),
                    a.called = !0,
                    a.recall || (Ke.splice(n, 1),
                    n--))
        }(xn.lean ? 0 : 1, t)
    }
    function to() {
        var t, e, n;
        Je && xn.track && (t = Math.round(Date.now()),
        e = xn.upload && "string" == typeof xn.upload ? xn.upload.replace("https://", "") : "",
        n = xn.lean ? 0 : 1,
        ma("_clsk", [Je.sessionId, t, Je.pageNum, n, e].join(O), 1))
    }
    function eo(t, e) {
        var n, a;
        void 0 === e && (e = null),
        e = null === e ? t.consent : e,
        n = Math.ceil((Date.now() + 31536e6) / 864e5),
        a = 0 === t.dob ? null === xn.dob ? 0 : xn.dob : t.dob,
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && ma("_clck", [Je.userId, 2, n.toString(36), e, a].join(O), 365)
    }
    function no() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
        t.toString(36)
    }
    function ao(t, e) {
        return void 0 === e && (e = 10),
        parseInt(t, e)
    }
    function io() {
        var t, e = {
            id: no(),
            version: 0,
            expiry: null,
            consent: 0,
            dob: 0
        }, n = va("_clck", !xn.includeSubdomains);
        return n && n.length > 0 && ((t = n.includes("^") ? n.split("^") : n.split("|")).length > 1 && (e.version = ao(t[1])),
        t.length > 2 && (e.expiry = ao(t[2], 36)),
        t.length > 3 && 1 === ao(t[3]) && (e.consent = 1),
        t.length > 4 && ao(t[1]) > 1 && (e.dob = ao(t[4])),
        xn.track = xn.track || 1 === e.consent,
        e.id = xn.track ? t[0] : e.id),
        e
    }
    function ro() {
        en = []
    }
    function oo(t) {
        var e, n, a;
        return en && !en.includes(t.message) && (e = xn.report) && e.length > 0 && tn && (n = {
            v: tn.version,
            p: tn.projectId,
            u: tn.userId,
            s: tn.sessionId,
            n: tn.pageNum
        },
        t.message && (n.m = t.message),
        t.stack && (n.e = t.stack),
        (a = new XMLHttpRequest).open("POST", e, !0),
        a.send(JSON.stringify(n)),
        en.push(t.message)),
        t
    }
    function uo(t) {
        return function() {
            var e, n = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw oo(t)
            }
            Jn(4, e = performance.now() - n),
            e > 30 && (Bn(7),
            Kn(6, e),
            t.dn && _r(9, 0, t.dn + "-" + e))
        }
    }
    function co(t, e, n, a, i) {
        void 0 === a && (a = !1),
        void 0 === i && (i = !0),
        n = uo(n);
        try {
            t[In("addEventListener")](e, n, {
                capture: a,
                passive: i
            }),
            fo(t) || nn.set(t, []),
            nn.get(t).push({
                event: e,
                listener: n,
                options: {
                    capture: a,
                    passive: i
                }
            })
        } catch (t) {}
    }
    function lo() {
        nn.forEach((function(t, e) {
            ho(t, e)
        }
        )),
        nn = new Map
    }
    function so(t) {
        fo(t) && ho(nn.get(t), t)
    }
    function fo(t) {
        return nn.has(t)
    }
    function ho(t, e) {
        t.forEach((function(t) {
            try {
                e[In("removeEventListener")](t.event, t.listener, {
                    capture: t.options.capture,
                    passive: t.options.passive
                })
            } catch (t) {}
        }
        )),
        nn.delete(e)
    }
    function po(t, e) {
        if (null === t)
            try {
                t = history[e],
                history[e] = function() {
                    t.apply(this, arguments),
                    yo() && (!(un++ > 20) || (_r(4, 0),
                    0)) && go()
                }
            } catch (e) {
                t = null
            }
        return t
    }
    function go() {
        un = 0,
        on !== mo() && (Mo(),
        window.setTimeout(vo, 250))
    }
    function vo() {
        No(),
        Kn(29, 1)
    }
    function mo() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    function yo() {
        return cn
    }
    function bo() {
        No(),
        Fn("clarity", "restart")
    }
    function wo() {
        ln = null
    }
    function ko(t) {
        ln = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
        },
        function(t) {
            $n(this, void 0, void 0, (function() {
                var t, e;
                return ta(this, (function(n) {
                    return t = Cn(),
                    (e = [t, 29]).push(ln.fetchStart, ln.connectStart, ln.connectEnd, ln.requestStart, ln.responseStart, ln.responseEnd, ln.domInteractive, ln.domComplete, ln.loadEventStart, ln.loadEventEnd, ln.redirectCount, ln.size, ln.type, ln.protocol, ln.encodedSize, ln.decodedSize),
                    wo(),
                    wr(e),
                    [2]
                }
                ))
            }
            ))
        }()
    }
    function So() {
        var t, e, n;
        try {
            for (Sn && Sn.disconnect(),
            Sn = new PerformanceObserver(uo(Eo)),
            t = 0,
            e = En; t < e.length; t++)
                n = e[t],
                PerformanceObserver.supportedEntryTypes.includes(n) && ("layout-shift" === n && Jn(9, 0),
                Sn.observe({
                    type: n,
                    buffered: !0
                }))
        } catch (t) {
            _r(3, 1)
        }
    }
    function Eo(t) {
        !function(t) {
            var e, n, a, i;
            for ((e = !("visibilityState"in document) || "visible" === document.visibilityState,
            n = 0); n < t.length; n++)
                switch ((a = t[n]).entryType) {
                case "navigation":
                    ko(a);
                    break;
                case "resource":
                    qr(4, To(i = a.name)),
                    i !== xn.upload && i !== xn.fallback || Kn(28, a.duration);
                    break;
                case "longtask":
                    Bn(7);
                    break;
                case "first-input":
                    e && Kn(10, a.processingStart - a.startTime);
                    break;
                case "event":
                    e && "PerformanceEventTiming"in window && "interactionId"in PerformanceEventTiming.prototype && (kn(a),
                    qr(37, "" + bn()));
                    break;
                case "layout-shift":
                    e && !a.hadRecentInput && Jn(9, 1e3 * a.value);
                    break;
                case "largest-contentful-paint":
                    e && Kn(8, a.startTime)
                }
        }(t.getEntries())
    }
    function To(t) {
        return Tn || (Tn = document.createElement("a")),
        Tn.href = t,
        Tn.host
    }
    function No(e) {
        void 0 === e && (e = null),
        function(t) {
            void 0 === t && (t = null);
            try {
                var e = navigator && "globalPrivacyControl"in navigator && 1 == navigator.globalPrivacyControl;
                return !1 === cn && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now"in Date && "now"in performance && "undefined" != typeof WeakMap && (!e || t && t.diagnostics)
            } catch (t) {
                return !1
            }
        }(e) && (function(t) {
            if (null === t || cn)
                return !1;
            for (var e in t)
                e in xn && (xn[e] = t[e])
        }(e),
        cn = !0,
        t = Dn(),
        Or(),
        lo(),
        ro(),
        on = mo(),
        un = 0,
        co(window, "popstate", go),
        an = po(an, "pushState"),
        rn = po(rn, "replaceState"),
        f = {},
        h = {},
        Bn(5),
        I.forEach((function(t) {
            return uo(t.start)()
        }
        )),
        Nn.forEach((function(t) {
            return uo(t.start)()
        }
        )),
        null === e && _o())
    }
    function Mo() {
        yo() && (Nn.slice().reverse().forEach((function(t) {
            return uo(t.stop)()
        }
        )),
        I.slice().reverse().forEach((function(t) {
            return uo(t.stop)()
        }
        )),
        f = {},
        h = {},
        on = null,
        un = 0,
        ro(),
        lo(),
        Or(),
        t = 0,
        cn = !1,
        void 0 !== _n && (_n[On] = function() {
            (_n[On].q = _n[On].q || []).push(arguments),
            "start" === arguments[0] && _n[On].q.unshift(_n[On].q.pop()) && _o()
        }
        ))
    }
    function _o() {
        if (void 0 !== _n) {
            if (_n[On] && _n[On].v)
                return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = _n[On] && _n[On].q || [];
            for (_n[On] = function(t) {
                var e, n = [];
                for (e = 1; e < arguments.length; e++)
                    n[e - 1] = arguments[e];
                return Mn[t].apply(Mn, n)
            }
            ,
            _n[On].v = e; t.length > 0; )
                _n[On].apply(_n, t.shift())
        }
    }
    t = 0,
    e = "0.8.66",
    n = /\S/gi,
    a = 2048,
    i = !0,
    r = null,
    o = null,
    u = null,
    c = null,
    l = null,
    s = !1,
    d = null,
    f = null,
    h = null,
    g = 0,
    v = 0,
    m = null,
    y = null,
    b = "CompressionStream"in window,
    w = null,
    k = {},
    S = new Set,
    E = {},
    T = {},
    N = {},
    M = {},
    _ = null,
    O = "^",
    x = null,
    I = [{
        start: function() {
            s = !1,
            Hn()
        },
        stop: function() {
            Hn()
        }
    }, {
        start: function() {
            Ue = {},
            ze = {},
            Fe = !1
        },
        stop: function() {
            Ue = {},
            ze = {},
            Fe = !1
        }
    }, {
        start: function() {
            ia()
        },
        stop: function() {
            ia()
        }
    }, {
        start: function() {
            qe = {
                check: 0
            }
        },
        stop: function() {
            qe = null
        }
    }, {
        start: function() {
            y = {}
        },
        stop: function() {
            y = {}
        }
    }, {
        start: function() {
            _ = null
        },
        stop: function() {
            _ = null
        }
    }, {
        start: function() {
            var t, e = null === (t = window.google_tag_data) || void 0 === t ? void 0 : t.ics;
            Be = !0,
            (null == e ? void 0 : e.addListener) && e.addListener(["ad_storage", "analytics_storage"], Ur)
        },
        stop: function() {
            Be = !0
        }
    }, {
        start: function() {
            var t, e, n, a, i, r, o, u, c, l, s, d, f = navigator && "userAgent"in navigator ? navigator.userAgent : "", h = null !== (n = "undefined" != typeof Intl && (null === (e = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === t ? void 0 : t.resolvedOptions()) || void 0 === e ? void 0 : e.timeZone)) && void 0 !== n ? n : "", p = "" + (new Date).getTimezoneOffset(), g = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins).toString() : "", v = document && document.title ? document.title : "";
            Ge = f.indexOf("Electron") > 0 ? 1 : 0,
            l = {
                session: no(),
                ts: Math.round(Date.now()),
                count: 1,
                upgrade: null,
                upload: ""
            },
            (s = va("_clsk", !xn.includeSubdomains)) && (c = s.includes("^") ? s.split("^") : s.split("|")).length >= 5 && l.ts - ao(c[1]) < 18e5 && (l.session = c[0],
            l.count = ao(c[2]) + 1,
            l.upgrade = ao(c[3]),
            l.upload = c.length >= 6 ? "https://" + c[5] + "/" + c[4] : "/" === c[4][0] ? c[4] : "https://" + c[4]),
            a = l,
            i = io(),
            r = xn.projectId || An(location.host),
            Je = {
                projectId: r,
                userId: i.id,
                sessionId: a.session,
                pageNum: a.count
            },
            xn.lean = xn.track && null !== a.upgrade ? 0 === a.upgrade : xn.lean,
            xn.upload = xn.track && "string" == typeof xn.upload && a.upload && a.upload.length > "https://".length ? a.upload : xn.upload,
            qr(0, f),
            qr(3, v),
            qr(1, Rn(location.href, !!Ge)),
            qr(2, document.referrer),
            qr(15, function() {
                var t = no();
                return xn.track && pa(window, "sessionStorage") && (t = sessionStorage.getItem("_cltk") || t,
                sessionStorage.setItem("_cltk", t)),
                t
            }()),
            qr(16, document.documentElement.lang),
            qr(17, document.dir),
            qr(26, "" + window.devicePixelRatio),
            qr(28, "" + i.dob),
            qr(29, "" + i.version),
            qr(33, g),
            qr(34, h),
            qr(35, p),
            qr(38, "" + !(!navigator || !navigator.globalPrivacyControl)),
            Kn(0, a.ts),
            Kn(1, 0),
            Kn(35, Ge),
            (o = null === window || void 0 === window ? void 0 : window.Zone) && "__symbol__"in o && Kn(39, 1),
            navigator && (qr(9, navigator.language),
            Kn(33, navigator.hardwareConcurrency),
            Kn(32, navigator.maxTouchPoints),
            Kn(34, Math.round(navigator.deviceMemory)),
            (u = navigator.userAgentData) && u.getHighEntropyValues ? u.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
                var e;
                qr(22, t.platform),
                qr(23, t.platformVersion),
                null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                    qr(24, t.name + "~" + t.version)
                }
                )),
                qr(25, t.model),
                Kn(27, t.mobile ? 1 : 0)
            }
            )) : qr(22, navigator.platform)),
            screen && (Kn(14, Math.round(screen.width)),
            Kn(15, Math.round(screen.height)),
            Kn(16, Math.round(screen.colorDepth))),
            null === Ze && (Ze = {
                source: i.consent ? 6 : 0,
                ad_Storage: xn.track ? "granted" : "denied",
                analytics_Storage: xn.track ? "granted" : "denied"
            }),
            Br(),
            Fr((d = Gr(Ze)).analytics_Storage ? 1 : 0),
            Ve = d,
            eo(i)
        },
        stop: function() {
            Je = null,
            Qe = !1,
            Ke.forEach((function(t) {
                t.called = !1
            }
            ))
        }
    }, {
        start: function() {
            var t = Je;
            tn = {
                version: e,
                sequence: 0,
                start: 0,
                duration: 0,
                projectId: t.projectId,
                userId: t.userId,
                sessionId: t.sessionId,
                pageNum: t.pageNum,
                upload: 0,
                end: 0,
                applicationPlatform: 0,
                url: ""
            }
        },
        stop: function() {
            tn = null
        }
    }, {
        start: function() {
            Me = !0,
            we = 0,
            ke = 0,
            Oe = !1,
            _e = 0,
            Se = [],
            Ee = [],
            Ne = {},
            xe = null
        },
        stop: function() {
            Zn(Te),
            kr(!0),
            we = 0,
            ke = 0,
            Oe = !1,
            _e = 0,
            Se = [],
            Ee = [],
            Ne = {},
            xe = null,
            Me = !1
        }
    }, {
        start: function() {
            v = 6e4,
            g = 0
        },
        stop: function() {
            Zn(m),
            g = 0,
            v = 0
        }
    }, {
        start: function() {
            !xn.lean && xn.upgrade && xn.upgrade("Config"),
            He = null
        },
        stop: function() {
            He = null
        }
    }, {
        start: function() {
            la()
        },
        stop: function() {
            la()
        }
    }],
    D = [],
    A = ["address", "password", "contact"],
    P = ["radio", "checkbox", "range", "button", "reset", "submit"],
    R = ["password", "secret", "pass", "social", "ssn", "code", "hidden"],
    L = ["INPUT", "SELECT", "TEXTAREA"],
    Y = ["load", "active", "fixed", "visible", "focus", "show", "collaps", "animat"],
    j = [],
    X = ["input", "textarea", "radio", "button", "canvas", "select"],
    W = /VM\d/,
    H = [],
    q = [],
    U = null,
    z = [],
    F = [],
    V = null,
    B = !1,
    J = 0,
    K = new Set,
    Z = null,
    Q = !1,
    $ = Wa(Ha, 500),
    tt = [],
    et = null,
    nt = null,
    at = null,
    it = Wa(za, 25),
    rt = null,
    ot = null,
    ut = null,
    ct = [],
    ft = !1,
    ht = [],
    pt = [],
    gt = "__clrSId",
    vt = {},
    mt = {},
    yt = [],
    bt = [],
    wt = [],
    kt = null,
    St = !1,
    Et = "__clrAId",
    Tt = "__clrOCnt",
    Nt = 20,
    Mt = [],
    _t = new Set,
    xt = new Set,
    It = [],
    Dt = {},
    Ct = [],
    At = null,
    Pt = null,
    Rt = null,
    Lt = {},
    Yt = new WeakMap,
    jt = ["data-google-query-id", "data-load-complete", "data-google-container-id"],
    Xt = /[^0-9\.]/g,
    Wt = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label", "integrity", "crossorigin"],
    Ht = /[\r\n]+/g,
    qt = Y,
    Ut = {},
    zt = 1,
    Ft = null,
    Vt = [],
    Bt = [],
    Jt = {},
    Kt = [],
    Gt = [],
    Zt = [],
    Qt = [],
    $t = [],
    te = [],
    ee = null,
    ne = null,
    ae = null,
    ie = null,
    re = null,
    oe = [],
    ue = null,
    ce = {},
    le = [],
    se = !1,
    de = null,
    fe = [],
    he = [],
    pe = [],
    ge = 1,
    ve = null,
    me = [],
    ye = !1,
    be = null,
    we = 0,
    ke = 0,
    Te = null,
    _e = 0,
    Oe = !1,
    Ie = {},
    Ce = {},
    Pe = 5e3,
    Re = {},
    Le = [],
    Ye = null,
    je = null,
    Xe = null,
    We = window.requestIdleCallback || function(t, e) {
        var n = performance.now()
          , a = new MessageChannel
          , i = a.port1
          , r = a.port2;
        i.onmessage = function(a) {
            var i, o = performance.now(), u = o - n, c = o - a.data;
            c > 30 && u < e.timeout ? requestAnimationFrame((function() {
                r.postMessage(o)
            }
            )) : (i = u > e.timeout,
            t({
                didTimeout: i,
                timeRemaining: function() {
                    return i ? 30 : Math.max(0, 30 - c)
                }
            }))
        }
        ,
        requestAnimationFrame((function() {
            r.postMessage(performance.now())
        }
        ))
    }
    ,
    He = null,
    Ue = null,
    ze = null,
    Fe = !1,
    Ve = null,
    Be = !0,
    Je = null,
    Ke = [],
    Ge = 0,
    Ze = null,
    Qe = !1,
    $e = {
        source: 7,
        ad_Storage: "denied",
        analytics_Storage: "denied"
    },
    tn = null,
    nn = new Map,
    an = null,
    rn = null,
    on = null,
    un = 0,
    cn = !1,
    ln = null,
    sn = 0,
    dn = 1 / 0,
    fn = 0,
    hn = 0,
    pn = [],
    gn = new Map,
    vn = function(t) {
        "interactionCount"in performance ? sn = performance.interactionCount : t.interactionId && (dn = Math.min(dn, t.interactionId),
        fn = Math.max(fn, t.interactionId),
        sn = fn ? (fn - dn) / 7 + 1 : 0)
    }
    ,
    mn = function() {
        return sn || 0
    }
    ,
    yn = function() {
        return mn() - hn
    }
    ,
    bn = function() {
        if (!pn.length)
            return -1;
        var t = Math.min(pn.length - 1, Math.floor(yn() / 50));
        return pn[t].latency
    }
    ,
    wn = function() {
        hn = mn(),
        pn.length = 0,
        gn.clear()
    }
    ,
    kn = function(t) {
        var e, n, a;
        !t.interactionId || t.duration < 40 || (vn(t),
        e = pn[pn.length - 1],
        ((n = gn.get(t.interactionId)) || pn.length < 10 || t.duration > (null == e ? void 0 : e.latency)) && (n ? t.duration > n.latency && (n.latency = t.duration) : (a = {
            id: t.interactionId,
            latency: t.duration
        },
        gn.set(a.id, a),
        pn.push(a)),
        pn.sort((function(t, e) {
            return e.latency - t.latency
        }
        )),
        pn.length > 10 && pn.splice(10).forEach((function(t) {
            return gn.delete(t.id)
        }
        ))))
    }
    ,
    En = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint", "event"],
    Tn = null,
    Nn = [{
        start: function() {
            !function() {
                D = [],
                Kn(26, navigator.webdriver ? 1 : 0);
                try {
                    Kn(31, window.top == window.self || window.top == window ? 1 : 2)
                } catch (t) {
                    Kn(31, 0)
                }
            }(),
            co(window, "error", Nr),
            Ie = {},
            Ce = {}
        },
        stop: function() {
            Ce = {}
        }
    }, {
        start: function() {
            Si(),
            Ei(),
            sr(),
            de = null,
            ue = new WeakMap,
            ce = {},
            le = [],
            se = !!window.IntersectionObserver,
            Ui(),
            zi(document, !0),
            xn.delayDom ? co(window, "load", (function() {
                Ni()
            }
            )) : Ni(),
            function() {
                var t;
                try {
                    window.__clr = window.__clr || {},
                    (null === (t = window.customElements) || void 0 === t ? void 0 : t.define) && !window.__clr.define && (window.__clr.define = window.customElements.define,
                    window.customElements.define = function() {
                        return yo() && mi(arguments[0]),
                        window.__clr.define.apply(this, arguments)
                    }
                    )
                } catch (t) {}
            }(),
            Yr(),
            li(),
            function() {
                var t, e, n;
                if (window.Animation && window.Animation.prototype && window.KeyframeEffect && window.KeyframeEffect.prototype && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (hi(),
                St || (St = !0,
                ["play", "pause", "commitStyles", "cancel", "finish"].forEach(gi)),
                null === kt && (kt = Element.prototype.animate,
                Element.prototype.animate = function() {
                    var t = kt.apply(this, arguments);
                    return vi(t, "play"),
                    t
                }
                ),
                document.getAnimations))
                    for (t = 0,
                    e = document.getAnimations(); t < e.length; t++)
                        "finished" === (n = e[t]).playState ? vi(n, "finish") : "paused" === n.playState || "idle" === n.playState ? vi(n, "pause") : "running" === n.playState && vi(n, "play")
            }()
        },
        stop: function() {
            sr(),
            ue = null,
            ce = {},
            le = [],
            de && (de.disconnect(),
            de = null),
            se = !1,
            Ui(),
            function() {
                var t, e, n;
                for (t = 0,
                e = Array.from(xt); t < e.length; t++)
                    (n = e[t]) && n.disconnect();
                xt = new Set,
                Lt = {},
                It = [],
                Dt = {},
                Ct = [],
                Rt = 0,
                At = null,
                Yt = new WeakMap
            }(),
            Si(),
            vt = {},
            mt = {},
            yt = [],
            bt = [],
            di(),
            hi(),
            yi(),
            _t.clear()
        }
    }, {
        start: function() {
            fe = [],
            pr(),
            Oa(),
            Ia(),
            Xa(),
            Pa(),
            Q = !1,
            co(window, "resize", $),
            Ha(),
            co(document, "visibilitychange", ei),
            ei(),
            co(window, "focus", (function() {
                return ii(1)
            }
            )),
            co(window, "blur", (function() {
                return ii(0)
            }
            )),
            function() {
                if (!ft)
                    try {
                        window[In("addEventListener")]("pageshow", uo(ri), {
                            capture: !1,
                            passive: !0
                        }),
                        ft = !0
                    } catch (t) {}
            }(),
            tt = [],
            za(),
            Ga(),
            ka(),
            Qa(),
            co(window, "pagehide", $a)
        },
        stop: function() {
            fe = [],
            pr(),
            Oa(),
            Ia(),
            Zn(V),
            F.length > 0 && ja(F[F.length - 1].event),
            Zn(U),
            Pa(),
            Ua(),
            ni(),
            ai(),
            Zn(at),
            it.cleanup(),
            tt = [],
            et = null,
            nt = null,
            Ga(),
            Zn(ut),
            ka(),
            Qa(),
            ti()
        }
    }, {
        start: function() {
            wo(),
            function() {
                navigator && navigator.connection && qr(27, navigator.connection.effectiveType),
                window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? co(window, "load", Gn.bind(this, So, 0)) : So() : _r(3, 0)
            }()
        },
        stop: function() {
            Sn && Sn.disconnect(),
            Sn = null,
            wn(),
            Tn = null,
            wo()
        }
    }, {
        start: function() {
            ye = !0,
            be = new Set,
            xn.modules && xn.modules.length > 0 && xn.modules.forEach((function(t) {
                br(t)
            }
            ))
        },
        stop: function() {
            me.reverse().forEach((function(t) {
                try {
                    t()
                } catch (t) {}
            }
            )),
            me = [],
            ye = !1
        }
    }],
    Mn = {
        __proto__: null,
        consent: function(t) {
            void 0 === t && (t = !0),
            Kr(t ? {
                source: 4,
                ad_Storage: "granted",
                analytics_Storage: "granted"
            } : {
                source: 4,
                ad_Storage: "denied",
                analytics_Storage: "denied"
            })
        },
        consentv2: Kr,
        dlog: qr,
        event: Fn,
        hashText: Zi,
        identify: function(t, e, n, a) {
            return void 0 === e && (e = null),
            void 0 === n && (n = null),
            void 0 === a && (a = null),
            $n(this, void 0, void 0, (function() {
                var i, r;
                return ta(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return r = {},
                        [4, ra(t)];
                    case 1:
                        return r.userId = o.sent(),
                        r.userHint = a || ((u = t) && u.length >= 5 ? u.substring(0, 2) + jn(u.substring(2), "*", "*") : jn(u, "*", "*")),
                        aa("userId", [(i = r).userId]),
                        aa("userHint", [i.userHint]),
                        aa("userType", [oa(t)]),
                        e && (aa("sessionId", [e]),
                        i.sessionId = e),
                        n && (aa("pageId", [n]),
                        i.pageId = n),
                        [2, i]
                    }
                    var u
                }
                ))
            }
            ))
        },
        maxMetric: Kn,
        measure: uo,
        metadata: function(t, e, n, a) {
            var i, r;
            void 0 === e && (e = !0),
            void 0 === n && (n = !1),
            void 0 === a && (a = !1),
            i = xn.lean ? 0 : 1,
            r = !1,
            Je && (i || !1 === e) && (t(Je, !xn.lean, a ? Ze : void 0),
            r = !0),
            !n && r || Ke.push({
                callback: t,
                wait: e,
                recall: n,
                called: r,
                consentInfo: a
            })
        },
        pause: function() {
            yo() && (Fn("clarity", "pause"),
            null === je && (je = new Promise((function(t) {
                Xe = t
            }
            ))))
        },
        queue: wr,
        register: function(t) {
            ye && "function" == typeof t && me.push(t)
        },
        resume: function() {
            yo() && (je && (Xe(),
            je = null,
            null === Ye && Ir()),
            Fn("clarity", "resume"))
        },
        schedule: xr,
        set: na,
        signal: function(t) {
            x = t
        },
        start: No,
        stop: Mo,
        time: Cn,
        upgrade: Xr,
        version: e
    },
    _n = window,
    On = "clarity",
    _o()
}();

!function(e) {
    "use strict";
    function t(t, r) {
        var n = document.getElementById("ZwSg9rf6GA");
        if ("true" === n.getAttribute("data-dnt") && navigator.doNotTrack)
            return !1;
        var a = {};
        a.referrer = r || e.document.referrer,
        a.page = e.location.href.replace(/#.+$/, ""),
        a.screen_resolution = screen.width + "x" + screen.height,
        t && (a.event = t);
        var o = new XMLHttpRequest;
        o.open("POST", n.getAttribute("data-host") + "/api/event", !0),
        o.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
        o.send(JSON.stringify(a))
    }
    try {
        var r = history.pushState;
        history.pushState = function() {
            var n = e.location.href.replace(/#.+$/, "");
            r.apply(history, arguments),
            t(null, n)
        }
        ,
        e.onpopstate = function(e) {
            t(null)
        }
        ,
        e.pa = {},
        e.pa.track = t,
        t(null)
    } catch (e) {
        console.log(e.message)
    }
}(window);
