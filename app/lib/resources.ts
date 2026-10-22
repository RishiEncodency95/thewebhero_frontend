import { ResourceItem, ResourceFilterState, ResourceType } from '../types/resource';

export const resourcesData: ResourceItem[] = [
    // -------------------------------------------------------------
    // BLOG ARTICLES
    // -------------------------------------------------------------
    {
        slug: 'nextjs-15-app-router-architecture-guide',
        type: 'blog',
        title: 'Architecting Scalable Web Applications with Next.js 15 App Router',
        subtitle: 'Best practices for Server Components, Data Caching, and Streaming UI',
        excerpt: 'Explore architectural patterns for building high-performance web applications using Next.js 15 App Router, React Server Components, and optimized server state.',
        description: 'Next.js 15 introduces powerful enhancements to Server Components, async request handling, and Turbopack bundler workflows. In this technical deep dive, we examine modern patterns for structuring Next.js App Router applications for enterprise scale.',
        coverImage: '/projects/citycalls.png',
        coverImageAlt: 'Next.js 15 App Router Architecture Diagram',
        category: 'Technology Insights',
        categorySlug: 'technology-insights',
        topics: ['Next.js', 'React', 'Web Development', 'Architecture'],
        featured: true,
        status: 'active',
        publishedAt: '2024-06-15',
        updatedAt: '2024-06-20',
        readingTime: '5 min read',
        author: {
            name: 'TheWebHero Engineering Team'
        },
        services: [
            { title: 'Web Development', slug: 'web-development' },
            { title: 'Full Stack Web Apps', slug: 'web-application-development' }
        ],
        technologies: [
            { name: 'Next.js', slug: 'nextjs-development' },
            { name: 'React', slug: 'react' },
            { name: 'TypeScript', slug: 'typescript-development' }
        ],
        tableOfContents: [
            { id: 'why-the-app-router-changes-how-you-architect-apps', title: 'Why the App Router changes how you architect apps', level: 2 },
            { id: 'server-components-by-default-client-components-at-the-edges', title: 'Server Components by default, Client Components at the edges', level: 2 },
            { id: 'data-fetching-and-caching-in-next-js-15', title: 'Data fetching and caching in Next.js 15', level: 2 },
            { id: 'structuring-routes-layouts-and-loading-states', title: 'Structuring routes, layouts and loading states', level: 2 },
            { id: 'performance-checklist-before-launch', title: 'Performance checklist before launch', level: 2 },
            { id: 'key-takeaways', title: 'Key takeaways', level: 2 }
        ],
        content: `
## Why the App Router changes how you architect apps

For years, React applications followed the same shape: ship a JavaScript bundle to the browser, render a loading spinner, fetch data from an API, then paint the real page. It works, but every byte of that bundle and every round trip shows up as slower first loads, weaker Core Web Vitals and pages that search engines struggle to index.

The Next.js App Router flips that default. Components render on the server unless you opt out, data is fetched where it lives, and HTML streams to the browser as soon as each part is ready. Next.js 15 builds on this with async request APIs, clearer caching defaults and React 19 support.

The practical result is that architecture decisions move earlier. Instead of asking "how do we fetch this on the client?", the question becomes "does this piece of UI need to run in the browser at all?" Getting that answer right is most of the work.

## Server Components by default, Client Components at the edges

Every component inside the \`app\` directory is a React Server Component unless the file starts with the \`'use client'\` directive. Server Components can read from a database or call internal services directly, and none of their code is sent to the browser.

\`\`\`tsx
// app/projects/[slug]/page.tsx — a Server Component
import { getProjectBySlug } from '@/lib/portfolio';
import { notFound } from 'next/navigation';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // async in Next.js 15
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </article>
  );
}
\`\`\`

Client Components are still essential, but they should sit at the leaves of the tree: a filter dropdown, a carousel, a form with live validation. A useful rule of thumb:

- **Keep on the server**: data fetching, layouts, navigation shells, markdown rendering, anything that touches secrets or the database.
- **Move to the client**: components that use state, effects, browser APIs or event handlers like \`onClick\`.
- **Pass data down, not functions**: a Server Component can render a Client Component and pass serialisable props to it, which keeps the interactive island small.

When a large page is marked \`'use client'\` just because one button needs a click handler, the whole subtree becomes client JavaScript. Extracting that button into its own small component is often the single biggest bundle-size win in an App Router project.

## Data fetching and caching in Next.js 15

Next.js 15 changed several caching defaults, and it is worth knowing them before you design your data layer:

- **fetch is not cached by default**: requests made with \`fetch\` are dynamic unless you opt in with \`cache: 'force-cache'\` or a \`revalidate\` value.
- **GET Route Handlers are dynamic by default**: they no longer cache automatically.
- **Request APIs are async**: \`params\`, \`searchParams\`, \`cookies()\` and \`headers()\` now return promises, so they must be awaited.

For content that changes on a schedule, time-based revalidation keeps pages fast while staying fresh:

\`\`\`tsx
// Revalidate this page at most once every 10 minutes
export const revalidate = 600;

export default async function BlogIndex() {
  const res = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] },
  });
  const posts = await res.json();
  return <PostList posts={posts} />;
}
\`\`\`

For content edited by people, on-demand revalidation is usually better. Tag the request, then call \`revalidateTag('posts')\` from a Server Action or webhook after an editor publishes. Visitors get cached pages, and editors see their change immediately.

A good data layer keeps these decisions in one place. Wrap each data source in a small function (for example \`getPosts()\` or \`getProjectBySlug()\`), set caching options inside it, and call that function from pages. Pages stay readable, and changing a cache policy becomes a one-line edit.

## Structuring routes, layouts and loading states

The App Router's file conventions are a large part of good architecture. Each segment can define its own UI for each state:

- **layout.tsx**: shared chrome that persists between navigations, such as a dashboard sidebar.
- **loading.tsx**: an instant skeleton shown while the segment streams in, powered by React Suspense.
- **error.tsx**: a boundary that catches errors in that segment without taking down the whole page.
- **not-found.tsx**: a friendly page when \`notFound()\` is called.

Route groups, written as folders in parentheses like \`(marketing)\` and \`(app)\`, let you give different sections different layouts without affecting the URL. A common structure is a marketing group with a public header and footer, and an app group with authenticated navigation.

For slow parts of a page, wrap them in their own Suspense boundary. The fast parts render immediately and the slow widget streams in when ready, instead of the whole page waiting for the slowest query.

## Performance checklist before launch

Before shipping an App Router application, these checks catch most performance problems:

- **Audit client boundaries**: search the codebase for \`'use client'\` and confirm each one is as low in the tree as possible.
- **Use next/image**: it serves correctly sized, modern-format images and prevents layout shift with explicit dimensions.
- **Use next/font**: fonts are self-hosted and preloaded, removing an extra network hop and font-swap flicker.
- **Generate static params**: for content pages, \`generateStaticParams\` lets Next.js pre-render every page at build time.
- **Measure, don't guess**: run Lighthouse and check Core Web Vitals in production, paying special attention to Largest Contentful Paint and Interaction to Next Paint.
- **Check the bundle**: the build output lists the JavaScript size of every route, so large numbers point straight at the problem.

## Key takeaways

The App Router rewards a server-first mindset. Render on the server by default, keep interactive pieces small and at the edges, make caching decisions deliberately in a single data layer, and use the built-in loading and error conventions so each part of the page can fail or load independently.

Teams that follow these patterns ship pages that load faster, rank better and are easier to maintain as the product grows, without giving up the rich interactivity users expect from a modern React application.
`,
        seoTitle: 'Next.js 15 App Router Architecture Guide | TheWebHero Insights',
        seoDescription: 'Learn proven architectural patterns for building scalable Next.js 15 App Router web applications with React Server Components.'
    },

    {
        slug: 'building-resilient-flutter-mobile-apps',
        type: 'blog',
        title: 'Building Resilient Cross-Platform Mobile Apps with Flutter & Node.js',
        subtitle: 'Cross-platform mobile state management, API integration, and offline caching',
        excerpt: 'How to build high-performance iOS and Android apps using Flutter frontend and Node.js REST API backend.',
        description: 'Flutter empowers teams to deliver native mobile user interfaces for both iOS and Android from a unified codebase. Discover strategies for state management, offline synchronization, and secure REST API communications.',
        coverImage: '/projects/citycalls-customer-app.png',
        coverImageAlt: 'Flutter Cross-Platform Mobile Application Development',
        category: 'Technology Insights',
        categorySlug: 'technology-insights',
        topics: ['Flutter', 'Mobile Apps', 'Node.js', 'Cross-Platform'],
        featured: false,
        status: 'active',
        publishedAt: '2024-05-20',
        readingTime: '5 min read',
        author: {
            name: 'TheWebHero Mobile Engineering Team'
        },
        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development' },
            { title: 'Flutter App Development', slug: 'flutter-app-development' }
        ],
        technologies: [
            { name: 'Flutter', slug: 'flutter' },
            { name: 'Node.js', slug: 'nodejs' }
        ],
        tableOfContents: [
            { id: 'why-flutter-and-node-js-work-well-together', title: 'Why Flutter and Node.js work well together', level: 2 },
            { id: 'designing-the-api-contract-first', title: 'Designing the API contract first', level: 2 },
            { id: 'state-management-that-scales', title: 'State management that scales', level: 2 },
            { id: 'offline-first-caching-and-sync', title: 'Offline-first caching and sync', level: 2 },
            { id: 'resilient-networking-retries-timeouts-and-token-refresh', title: 'Resilient networking: retries, timeouts and token refresh', level: 2 },
            { id: 'testing-and-release-checklist', title: 'Testing and release checklist', level: 2 },
            { id: 'key-takeaways', title: 'Key takeaways', level: 2 }
        ],
        content: `
## Why Flutter and Node.js work well together

Flutter lets one team ship native-feeling apps to both iOS and Android from a single Dart codebase, with its own rendering engine so the UI looks the same on every device. Node.js, paired with a framework like Express, is a fast way to build the REST APIs those apps depend on, and it shares JSON as a natural data format with the mobile client.

The combination is popular for on-demand services, booking platforms and marketplace apps, where a customer app, a partner app and an admin panel all talk to the same backend. But mobile apps live in a harsher environment than websites. Networks drop in lifts and basements, the operating system kills apps in the background, and users expect their data to still be there when they come back.

Resilience is the difference between an app people trust and one they uninstall. This article covers the patterns that make Flutter and Node.js apps hold up in the real world.

## Designing the API contract first

Most mobile bugs that look like "the app is broken" are really contract problems: a field that is sometimes null, an error returned as plain text, or a breaking change shipped while old app versions are still installed. Agree on the contract before writing screens.

- **Version the API**: prefix routes with \`/api/v1\`. Mobile users update slowly, so old versions must keep working while new ones roll out.
- **Use one error shape**: every error should return the same JSON structure, so the app can handle failures in one place.
- **Paginate every list**: return items with a cursor or page number, never an unbounded array.
- **Send timestamps in UTC**: format dates in ISO 8601 and let the app convert them to the user's local time.

A consistent error response from Express might look like this:

\`\`\`js
// Express error handler: one shape for every failure
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: {
      code: err.code || 'INTERNAL_ERROR',
      message: status < 500 ? err.message : 'Something went wrong',
    },
  });
});
\`\`\`

On the Flutter side, model responses with typed Dart classes generated from JSON. Packages like \`json_serializable\` or \`freezed\` catch missing or wrongly typed fields at compile time instead of in production.

## State management that scales

Small apps can get by with \`setState\`, but booking flows, carts and live order status quickly outgrow it. Choose a state management approach early and use it consistently across the app.

- **Riverpod**: compile-safe, testable providers with good support for async data and caching. A strong default for most new apps.
- **Bloc**: an event-driven pattern with very explicit state transitions, well suited to large teams and complex flows.
- **Provider**: simple and widely known, fine for smaller apps or teams new to Flutter.

Whatever you choose, keep three layers separate: the **UI** that renders widgets, the **state** that holds what the screen needs, and the **repository** that talks to the API and local storage. Screens should never call HTTP directly. When the repository owns data access, adding offline support or swapping an endpoint does not ripple through every widget.

## Offline-first caching and sync

An offline-first app reads from local storage first and treats the network as a way to update that storage. The user sees data instantly, even with no connection, and the screen refreshes quietly when fresh data arrives.

- **Local storage**: use a database such as \`sqflite\`, \`drift\` or \`isar\` for structured data, and a key-value store for small settings.
- **Show cached data immediately**: render what is on the device, then fetch from the API and update the cache in the background.
- **Queue writes**: when the user creates or edits something offline, save it locally with a pending status and send it when connectivity returns.
- **Make writes idempotent**: attach a unique request ID to each write so the Node.js API can ignore duplicates if a retry sends the same booking twice.

On the backend, idempotency can be as simple as storing the request ID with the record and returning the existing result if the same ID arrives again. This one pattern prevents double bookings and double charges, which are among the most damaging bugs a service app can have.

## Resilient networking: retries, timeouts and token refresh

Network calls fail far more often on mobile than on desktop. A central HTTP client, usually built on the \`dio\` package, is the place to handle that once rather than in every screen.

- **Set timeouts**: never wait forever. Connect and receive timeouts of 10 to 20 seconds keep the UI responsive.
- **Retry with backoff**: retry failed GET requests a few times with increasing delays. Do not blindly retry writes unless they are idempotent.
- **Refresh tokens automatically**: when the API returns 401, refresh the access token once, then replay the original request.
- **Store tokens securely**: keep tokens in \`flutter_secure_storage\`, which uses the iOS Keychain and Android Keystore, never in plain shared preferences.

A token-refresh interceptor with \`dio\` follows this shape:

\`\`\`dart
dio.interceptors.add(InterceptorsWrapper(
  onError: (error, handler) async {
    if (error.response?.statusCode == 401) {
      final refreshed = await auth.refreshToken();
      if (refreshed) {
        final retry = await dio.fetch(error.requestOptions);
        return handler.resolve(retry);
      }
      await auth.signOut();
    }
    handler.next(error);
  },
));
\`\`\`

Pair this with clear UI states. Every screen that loads data should have a designed loading state, an empty state and an error state with a retry button. Users forgive a slow network. They do not forgive a blank screen.

## Testing and release checklist

Flutter's testing tools make it practical to cover the parts that matter most:

- **Unit tests** for repositories, models and business rules, with the API mocked.
- **Widget tests** for key screens, checking loading, error and empty states render correctly.
- **Integration tests** for the critical journeys, such as sign in, book a service and pay.
- **Real devices and bad networks**: test on low-end Android phones and with network throttling, not only on a fast simulator.
- **Crash reporting**: add a tool such as Firebase Crashlytics or Sentry before launch, so problems surface from real users.
- **Staged rollouts**: release to a small percentage of users first on Google Play and use phased release on the App Store.

## Key takeaways

Resilient mobile apps are designed, not patched. Agree on a versioned API contract, keep UI, state and data access in separate layers, read from local storage first, make writes idempotent, and handle timeouts, retries and token refresh in one central client.

Flutter and Node.js give you a fast way to build for both platforms. These patterns make sure what you build keeps working when the network, the device and the real world do not cooperate.
`,
        seoTitle: 'Building Resilient Flutter Mobile Apps | TheWebHero Blog',
        seoDescription: 'Discover best practices for building cross-platform Flutter mobile applications integrated with Node.js REST API microservices.'
    },

    {
        slug: 'modern-web-security-best-practices',
        type: 'blog',
        title: 'Essential Security Best Practices for Web & API Applications',
        subtitle: 'Protecting user authentication, JWT tokens, and REST API endpoints',
        excerpt: 'A comprehensive checklist for securing web applications against OWASP Top 10 vulnerabilities, unauthorized API access, and data leaks.',
        description: 'Web security must be engineered into every layer of software development. Explore essential techniques for authentication token management, SQL/NoSQL injection protection, CORS configuration, and HTTPS security headers.',
        coverImage: '/projects/citycalls-admin.png',
        coverImageAlt: 'Web Security and API Authentication Best Practices',
        category: 'Industry Insights',
        categorySlug: 'industry-insights',
        topics: ['Security', 'API', 'Web Development', 'Backend'],
        featured: false,
        status: 'active',
        publishedAt: '2024-04-10',
        readingTime: '5 min read',
        author: {
            name: 'TheWebHero Security Group'
        },
        services: [
            { title: 'Custom Backend API', slug: 'api-development' }
        ],
        technologies: [
            { name: 'Node.js', slug: 'nodejs' },
            { name: 'Express.js', slug: 'expressjs' }
        ],
        tableOfContents: [
            { id: 'start-with-a-threat-model-not-a-tool', title: 'Start with a threat model, not a tool', level: 2 },
            { id: 'authentication-done-right', title: 'Authentication done right', level: 2 },
            { id: 'authorization-and-broken-access-control', title: 'Authorization and broken access control', level: 2 },
            { id: 'validating-input-and-preventing-injection', title: 'Validating input and preventing injection', level: 2 },
            { id: 'hardening-the-http-layer', title: 'Hardening the HTTP layer', level: 2 },
            { id: 'secrets-dependencies-and-logging', title: 'Secrets, dependencies and logging', level: 2 },
            { id: 'a-pre-launch-security-checklist', title: 'A pre-launch security checklist', level: 2 }
        ],
        content: `
## Start with a threat model, not a tool

Security problems in web applications are rarely exotic. Most breaches come from a small set of mistakes: a missing permission check, an unvalidated input, a leaked secret, an outdated dependency. The OWASP Top 10 lists them every few years, and broken access control has sat at the top of the list since 2021.

Before adding tools, spend an hour on a simple threat model. List what the application stores that someone would want (customer data, payment references, admin access), who might want it, and how they could reach it. That list tells you where to focus, and it usually points at the same places this article covers.

Security is also cheaper when it is built in. Fixing an access-control flaw during development takes minutes. Fixing it after a data leak takes weeks and costs customer trust.

## Authentication done right

Authentication answers "who is this user?" It is also where many teams roll their own solution and get the details wrong.

- **Hash passwords properly**: use \`bcrypt\` or \`argon2\` with a sensible cost factor. Never store plain text or use fast hashes like MD5 or SHA-256 for passwords.
- **Keep access tokens short-lived**: JWT access tokens should expire in minutes, not days. Use a separate refresh token to get a new one.
- **Rotate refresh tokens**: issue a new refresh token on every use and invalidate the old one, so a stolen token stops working quickly.
- **Store tokens in secure cookies on the web**: an \`HttpOnly\`, \`Secure\`, \`SameSite\` cookie cannot be read by JavaScript, which protects it from XSS. Avoid keeping tokens in \`localStorage\`.
- **Rate-limit login**: slow down repeated attempts on login, signup and password-reset endpoints to stop credential stuffing.
- **Offer multi-factor authentication**: at minimum for admin accounts.

Setting a secure session cookie in Express looks like this:

\`\`\`js
res.cookie('refresh_token', token, {
  httpOnly: true,   // not readable from JavaScript
  secure: true,     // only sent over HTTPS
  sameSite: 'strict',
  path: '/api/auth/refresh',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});
\`\`\`

## Authorization and broken access control

Authorization answers a different question: "is this user allowed to do this, to this record?" Most real breaches happen here, because the check is easy to forget on one endpoint out of a hundred.

The classic example is an insecure direct object reference. A user requests \`/api/orders/1042\`, changes the number to \`1043\`, and sees someone else's order because the API only checked that they were logged in.

- **Check ownership on every request**: always filter by the current user, for example find the order by both its ID and the user ID.
- **Deny by default**: new routes should require authentication and a role unless explicitly made public.
- **Centralise permission logic**: put role and ownership checks in middleware or a policy layer, not scattered through controllers.
- **Never trust the client**: hiding an admin button in the UI is not security. The API must enforce the rule.

\`\`\`js
// Only return the order if it belongs to the signed-in user
const order = await Order.findOne({
  _id: req.params.id,
  userId: req.user.id,
});
if (!order) return res.status(404).json({ error: 'Not found' });
\`\`\`

Returning 404 rather than 403 for records the user does not own also avoids confirming that the record exists.

## Validating input and preventing injection

Every value that reaches the server from outside, whether body, query string, headers or uploaded files, is untrusted. Validate it against a schema at the edge of the API, before it touches business logic or the database.

- **Validate with a schema**: libraries like \`zod\` or \`joi\` check types, lengths and formats, and reject anything unexpected.
- **Use parameterised queries**: in SQL databases, never build queries by joining strings. Use placeholders through your driver or ORM.
- **Guard against NoSQL injection**: in MongoDB, an attacker can send an object like \`{"$gt": ""}\` instead of a string. Schema validation that insists on strings blocks this.
- **Escape output**: frameworks like React escape text by default. Avoid \`dangerouslySetInnerHTML\` unless the HTML has been sanitised.
- **Limit uploads**: restrict file types and sizes, rename stored files, and never serve uploads from the same origin as the app without checks.

\`\`\`js
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(8).max(128),
});

const body = LoginSchema.parse(req.body); // throws if invalid
\`\`\`

## Hardening the HTTP layer

A few headers and settings close entire classes of attacks with very little effort.

- **Enforce HTTPS everywhere**: redirect HTTP to HTTPS and send a \`Strict-Transport-Security\` header so browsers never downgrade.
- **Add security headers**: the \`helmet\` middleware for Express sets sensible defaults, including protections against clickjacking and MIME sniffing.
- **Write a Content Security Policy**: a CSP limits which scripts can run, which greatly reduces the impact of XSS.
- **Configure CORS with an allowlist**: list the exact origins that may call the API. Never combine a wildcard origin with credentials.
- **Rate-limit the whole API**: a global limit plus stricter limits on sensitive routes protects against abuse and scraping.
- **Hide stack traces**: production errors should return a generic message and log the details server-side.

## Secrets, dependencies and logging

Some of the most damaging incidents come from outside your own code.

- **Keep secrets out of the repository**: load API keys and database passwords from environment variables or a secrets manager, and add \`.env\` files to \`.gitignore\`.
- **Rotate secrets**: if a key might have been exposed, rotate it immediately. Prefer keys scoped to the minimum permissions they need.
- **Audit dependencies**: run \`npm audit\` in CI, enable automated dependency updates, and remove packages you no longer use.
- **Log security events**: record logins, failed logins, permission denials and password changes, without logging passwords, tokens or full card numbers.
- **Alert on anomalies**: a spike in failed logins or 403 responses is often the first sign of an attack.
- **Back up and test restores**: backups only count if you have restored from one recently.

## A pre-launch security checklist

Before an application goes live, walk through this list:

- **Passwords** are hashed with bcrypt or argon2, and login endpoints are rate-limited.
- **Tokens** are short-lived, refresh tokens rotate, and web tokens live in HttpOnly cookies.
- **Every endpoint** checks authentication, role and record ownership, with deny-by-default routing.
- **All input** is validated with a schema, and database queries are parameterised.
- **HTTPS, HSTS, helmet, CSP and a strict CORS allowlist** are in place.
- **Secrets** are outside the codebase, and dependencies have no known critical vulnerabilities.
- **Security events** are logged and someone is alerted when something looks wrong.

None of these steps is complicated on its own. Applied together and from the start, they protect users, keep data private, and stop the most common attacks long before they become incidents.
`,
        seoTitle: 'Web Application Security Best Practices | TheWebHero',
        seoDescription: 'Explore key web and REST API security practices to protect software applications from vulnerabilities and unauthorized access.'
    },

    // -------------------------------------------------------------
    // GUIDES
    // -------------------------------------------------------------
    {
        slug: 'web-development-buyers-guide-2025',
        type: 'guide',
        title: 'The Enterprise Web Development Buyer Guide',
        subtitle: 'How to evaluate tech stacks, scoping, timeline estimation, and developer selection',
        excerpt: 'A comprehensive guide for decision-makers planning custom web application development, platform modernization, or digital portal builds.',
        description: 'Planning a major web development project requires understanding tech choices, architecture tradeoffs, security standards, and implementation methodologies. This guide helps business leaders evaluate technology choices and select optimal development paths.',
        coverImage: '/projects/helpnow.png',
        coverImageAlt: 'Web Development Buyer Guide',
        category: 'Web Development',
        categorySlug: 'web-development',
        topics: ['Web Development', 'Enterprise Software', 'Technology Planning'],
        difficulty: 'Intermediate',
        readingTime: '12 min read',
        status: 'active',
        publishedAt: '2024-05-01',
        services: [
            { title: 'Web Development', slug: 'web-development' },
            { title: 'Full Stack Web Apps', slug: 'web-application-development' }
        ],
        tableOfContents: [
            { id: 'scoping', title: '1. Scoping & Requirement Gathering', level: 2 },
            { id: 'tech-stack', title: '2. Selecting the Right Tech Stack', level: 2 },
            { id: 'architecture', title: '3. Monolith vs Microservices vs Serverless', level: 2 },
            { id: 'budgeting', title: '4. Estimating Budgets & Timeline Milestones', level: 2 }
        ],
        seoTitle: 'Enterprise Web Development Buyers Guide | TheWebHero Guides',
        seoDescription: 'Learn how to plan, scope, and select technology stacks for custom web development and enterprise web applications.'
    },

    {
        slug: 'mobile-app-development-frameworks-comparison',
        type: 'guide',
        title: 'Cross-Platform vs Native Mobile App Development Guide',
        subtitle: 'Comparing Flutter, React Native, iOS Swift, and Android Kotlin',
        excerpt: 'An objective guide to choosing between Flutter, React Native, and native mobile development for iOS and Android apps.',
        description: 'Selecting the right mobile development framework impacts time-to-market, budget, maintenance, and app performance. This guide compares native iOS/Android development with Flutter and React Native cross-platform frameworks.',
        coverImage: '/projects/citycalls-vendor-app.png',
        category: 'Mobile App Development',
        categorySlug: 'mobile-app-development',
        topics: ['Mobile Apps', 'Flutter', 'React Native', 'iOS', 'Android'],
        difficulty: 'Beginner',
        readingTime: '10 min read',
        status: 'active',
        publishedAt: '2024-04-15',
        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development' },
            { title: 'Flutter App Development', slug: 'flutter-app-development' }
        ],
        seoTitle: 'Cross-Platform vs Native Mobile App Development Guide | TheWebHero',
        seoDescription: 'Compare Flutter, React Native, and native mobile development to make informed choices for your mobile app project.'
    },

    // -------------------------------------------------------------
    // TUTORIALS
    // -------------------------------------------------------------
    {
        slug: 'nextjs-typescript-tailwind-setup-tutorial',
        type: 'tutorial',
        title: 'Setting Up a Next.js 15 Project with TypeScript & Tailwind CSS',
        subtitle: 'Step-by-step setup tutorial for modern web projects',
        excerpt: 'Learn how to create a production-ready Next.js 15 project with TypeScript, Tailwind CSS, ESLint, and Lucide React icons.',
        description: 'Follow this step-by-step tutorial to configure a new Next.js 15 web application with strict TypeScript type checking, Tailwind CSS utility styling, and clean component structure.',
        category: 'Next.js',
        categorySlug: 'nextjs',
        topics: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        difficulty: 'Beginner',
        estimatedTime: '15 minutes',
        status: 'active',
        publishedAt: '2024-06-01',
        technologies: [
            { name: 'Next.js', slug: 'nextjs-development' },
            { name: 'React', slug: 'react' },
            { name: 'TypeScript', slug: 'typescript-development' }
        ],
        prerequisites: ['Node.js v18.17 or higher installed', 'Basic familiarity with Terminal and React'],
        steps: [
            {
                number: 1,
                title: 'Initialize Next.js Project',
                description: 'Run create-next-app with TypeScript and Tailwind CSS enabled in non-interactive mode.',
                code: {
                    language: 'bash',
                    code: 'npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir=false --use-npm'
                }
            },
            {
                number: 2,
                title: 'Install Lucide React Icons',
                description: 'Add icon dependencies for clean UI icon rendering.',
                code: {
                    language: 'bash',
                    code: 'npm install lucide-react'
                }
            },
            {
                number: 3,
                title: 'Configure Tailwind & Run Development Server',
                description: 'Start your development server and verify hot module reloading.',
                code: {
                    language: 'bash',
                    code: 'npm run dev'
                }
            }
        ],
        seoTitle: 'Next.js 15 + TypeScript + Tailwind Setup Tutorial | TheWebHero',
        seoDescription: 'Step-by-step tutorial to quickly set up a production Next.js 15 application with TypeScript and Tailwind CSS.'
    },

    {
        slug: 'express-mongodb-rest-api-tutorial',
        type: 'tutorial',
        title: 'Building a Secure REST API with Node.js, Express, and MongoDB',
        subtitle: 'Creating CRUD endpoints, Mongoose models, and JWT authentication',
        excerpt: 'Learn how to build, structure, and secure a RESTful API backend using Node.js, Express.js, and MongoDB Mongoose ORM.',
        description: 'Step-by-step guide to building a modular REST API backend with user authentication, route handlers, error handling middleware, and MongoDB database models.',
        category: 'Node.js',
        categorySlug: 'nodejs',
        topics: ['Node.js', 'Express', 'MongoDB', 'REST API'],
        difficulty: 'Intermediate',
        estimatedTime: '30 minutes',
        status: 'active',
        publishedAt: '2024-05-10',
        technologies: [
            { name: 'Node.js', slug: 'nodejs' },
            { name: 'Express.js', slug: 'expressjs' },
            { name: 'MongoDB', slug: 'mongodb' }
        ],
        seoTitle: 'Build a REST API with Node.js & MongoDB Tutorial | TheWebHero',
        seoDescription: 'Learn how to build a production REST API with Node.js, Express, and MongoDB Mongoose step by step.'
    },

    // -------------------------------------------------------------
    // FAQS
    // -------------------------------------------------------------
    {
        slug: 'what-services-does-thewebhero-provide',
        type: 'faq',
        title: 'What software development services does TheWebHero provide?',
        category: 'Services FAQs',
        categorySlug: 'services',
        question: 'What software development services does TheWebHero provide?',
        answer: 'TheWebHero delivers end-to-end IT software services including Web Development (React, Next.js, Node.js), Mobile App Development (Flutter, React Native), Custom Software Engineering, UI/UX Design, Cloud & DevOps Infrastructure, and Backend REST API Development.',
        topics: ['Services', 'Web Development', 'Mobile Apps'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What Services Does TheWebHero Provide? | FAQ',
        seoDescription: 'Learn about the full-stack web, mobile, custom software, and API services provided by TheWebHero.'
    },

    {
        slug: 'what-technologies-do-you-use-for-web-development',
        type: 'faq',
        title: 'What technology stack does TheWebHero use for web projects?',
        category: 'Technology FAQs',
        categorySlug: 'technology',
        question: 'What technology stack does TheWebHero use for web projects?',
        answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. We pick the optimal stack based on performance, scalability, security, and project requirements.',
        topics: ['Technology', 'React', 'Next.js', 'Node.js'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'Technology Stack FAQ | TheWebHero',
        seoDescription: 'Discover the tech stack and frameworks used by TheWebHero for web and mobile development projects.'
    },

    {
        slug: 'how-long-does-it-take-to-build-a-custom-web-application',
        type: 'faq',
        title: 'How long does custom web application development take?',
        category: 'General FAQs',
        categorySlug: 'general',
        question: 'How long does custom web application development take?',
        answer: 'Project timelines vary depending on scope and complexity. Standard web MVP applications typically require 4 to 8 weeks, while complex multi-role platforms or mobile ecosystems range from 10 to 16 weeks with clear sprint milestones.',
        topics: ['General', 'Timeline', 'Web Development'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'Development Timeline FAQ | TheWebHero',
        seoDescription: 'Find out how long custom web and mobile software development projects take from scoping to deployment.'
    },

    // -------------------------------------------------------------
    // WHITEPAPERS & EBOOKS
    // -------------------------------------------------------------
    {
        slug: 'modern-web-architecture-whitepaper',
        type: 'whitepaper',
        title: 'Modernizing Legacy Web Applications for High Scalability',
        subtitle: 'Architectural blueprints for transitioning monolithic web code bases to modular Next.js and REST microservices',
        excerpt: 'A technical whitepaper examining migration pathways, performance benchmarks, and API architecture for enterprise web modernization.',
        description: 'This whitepaper provides an engineering blueprint for technical leaders planning to modernize monolithic web applications using Next.js App Router, microservices, and modern database architectures.',
        category: 'Whitepapers',
        categorySlug: 'whitepapers',
        topics: ['Architecture', 'Web Modernization', 'Next.js', 'Microservices'],
        fileSize: '2.4 MB',
        pageCount: 16,
        status: 'active',
        publishedAt: '2024-05-15',
        seoTitle: 'Modernizing Legacy Web Applications Whitepaper | TheWebHero',
        seoDescription: 'Download our technical whitepaper on modernizing legacy web codebases with Next.js and REST microservices.'
    },

    {
        slug: 'cross-platform-mobile-development-ebook',
        type: 'ebook',
        title: 'The Ultimate Guide to Cross-Platform Mobile Architecture',
        subtitle: 'Building iOS and Android apps with Flutter and Node.js',
        excerpt: 'An actionable eBook covering Flutter UI patterns, state management, API design, and app store deployment workflows.',
        description: 'Learn how to build and maintain cross-platform mobile apps for iOS and Android using Flutter, Node.js backend services, and scalable state management.',
        category: 'eBooks',
        categorySlug: 'ebooks',
        topics: ['Mobile Apps', 'Flutter', 'iOS', 'Android'],
        fileSize: '3.8 MB',
        pageCount: 24,
        status: 'active',
        publishedAt: '2024-04-20',
        seoTitle: 'Cross-Platform Mobile Development eBook | TheWebHero',
        seoDescription: 'Download our comprehensive eBook guide to building cross-platform mobile apps with Flutter.'
    },

    // -------------------------------------------------------------
    // WEBINARS
    // -------------------------------------------------------------
    {
        slug: 'nextjs-15-performance-optimization-webinar',
        type: 'webinar',
        title: 'Mastering Next.js 15 App Router & Server Performance',
        subtitle: 'Live engineering webinar and technical Q&A',
        excerpt: 'Watch our recorded engineering session on tuning Next.js 15 App Router performance, Server Components, and bundle optimization.',
        description: 'In this technical webinar recording, our lead engineers walk through real-world Next.js 15 performance optimization techniques, React Server Component patterns, and streaming server responses.',
        category: 'Webinar Recordings',
        categorySlug: 'recordings',
        topics: ['Next.js', 'React', 'Performance', 'Web Development'],
        duration: '45 mins',
        isUpcoming: false,
        eventDate: '2024-06-10',
        recordingUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        status: 'active',
        publishedAt: '2024-06-10',
        seoTitle: 'Next.js 15 Performance Webinar Recording | TheWebHero',
        seoDescription: 'Watch our technical engineering webinar recording on optimizing Next.js 15 App Router performance.'
    },

    // -------------------------------------------------------------
    // GLOSSARY TERMS
    // -------------------------------------------------------------
    {
        slug: 'react-server-components-rsc',
        type: 'glossary',
        title: 'React Server Components (RSC)',
        term: 'React Server Components (RSC)',
        letter: 'R',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'React components rendered exclusively on the server, outputting HTML without bundling JavaScript to the browser.',
        description: 'React Server Components (RSC) are a feature in React 18+ and Next.js App Router that allows developers to write components that execute exclusively on the server. Because their code does not run on the client, RSCs do not increase the JavaScript bundle size shipped to user devices.',
        definition: 'React Server Components (RSC) are React components that render exclusively on the server side, allowing direct database access and zero client-side JavaScript bundle overhead for data rendering.',
        relatedTerms: ['Next.js App Router', 'Server-Side Rendering (SSR)', 'Hydration'],
        topics: ['React', 'Next.js', 'Web Development'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What are React Server Components (RSC)? | Glossary',
        seoDescription: 'Learn what React Server Components (RSC) are, how they work in Next.js, and why they improve web app performance.'
    },

    {
        slug: 'rest-api',
        type: 'glossary',
        title: 'REST API (Representational State Transfer)',
        term: 'REST API',
        letter: 'R',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'An architectural style for network applications using HTTP requests to GET, POST, PUT, and DELETE data.',
        description: 'A REST API (Representational State Transfer Application Programming Interface) is an architectural style for network communication between client applications (web/mobile) and server backend databases using standard HTTP methods.',
        definition: 'A REST API is a standardized HTTP-based architectural pattern allowing web and mobile applications to exchange structured JSON data with server backends safely and efficiently.',
        relatedTerms: ['Node.js', 'Express.js', 'JSON', 'Endpoints'],
        topics: ['Backend', 'API', 'Node.js'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What is a REST API? | Software Glossary - TheWebHero',
        seoDescription: 'Understand the definition and function of REST APIs in modern web and mobile software development.'
    },

    {
        slug: 'cross-platform-development',
        type: 'glossary',
        title: 'Cross-Platform App Development',
        term: 'Cross-Platform Development',
        letter: 'C',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'The process of writing software applications that run on multiple operating systems (iOS & Android) from a single shared codebase.',
        description: 'Cross-platform app development allows engineers to build mobile applications for iOS and Android using unified frameworks like Flutter or React Native, reducing duplicate codebase maintenance.',
        definition: 'Cross-platform development is the practice of building software applications that target multiple operating systems (such as iOS, Android, and Web) using a single codebase.',
        relatedTerms: ['Flutter', 'React Native', 'Mobile App Development'],
        topics: ['Mobile Apps', 'Flutter', 'Cross-Platform'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What is Cross-Platform App Development? | Glossary',
        seoDescription: 'Definition and benefits of cross-platform mobile application development using frameworks like Flutter.'
    }
];

// Helper Query Functions

export function getAllResources(): ResourceItem[] {
    return resourcesData
        .filter((res) => res.status === 'active')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getResourcesByType(type: ResourceType): ResourceItem[] {
    return getAllResources().filter((res) => res.type === type);
}

export function getFeaturedResources(): ResourceItem[] {
    return getAllResources().filter((res) => res.featured);
}

export function getResourceBySlug(slug: string): ResourceItem | undefined {
    return resourcesData.find((res) => res.slug === slug);
}

export function getAllResourceSlugs(): string[] {
    return resourcesData.map((res) => res.slug);
}

export function getFAQs(categorySlug?: string): ResourceItem[] {
    const faqs = getResourcesByType('faq');
    if (!categorySlug || categorySlug === 'all') return faqs;
    return faqs.filter((faq) => faq.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

export function getGlossaryTerms(letter?: string): ResourceItem[] {
    const terms = getResourcesByType('glossary');
    if (!letter || letter === 'All') return terms;
    return terms.filter((item) => (item.letter || item.term?.[0])?.toUpperCase() === letter.toUpperCase());
}

export function searchResources(filters: ResourceFilterState): ResourceItem[] {
    let list = getAllResources();

    // 1. Text Search Query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        list = list.filter((res) => {
            const matchTitle = res.title.toLowerCase().includes(query);
            const matchExcerpt = res.excerpt ? res.excerpt.toLowerCase().includes(query) : false;
            const matchDesc = res.description ? res.description.toLowerCase().includes(query) : false;
            const matchTopics = res.topics.some((t) => t.toLowerCase().includes(query));
            const matchCat = res.category.toLowerCase().includes(query);

            return matchTitle || matchExcerpt || matchDesc || matchTopics || matchCat;
        });
    }

    // 2. Type Filter
    if (filters.type && filters.type !== 'All') {
        const targetType = filters.type.toLowerCase();
        list = list.filter((res) => res.type.toLowerCase() === targetType);
    }

    // 3. Topic Filter
    if (filters.topic && filters.topic !== 'All') {
        const targetTopic = filters.topic.toLowerCase();
        list = list.filter((res) => res.topics.some((t) => t.toLowerCase() === targetTopic));
    }

    // 4. Technology Filter
    if (filters.technology && filters.technology !== 'All') {
        const targetTech = filters.technology.toLowerCase();
        list = list.filter((res) =>
            res.technologies?.some((t) => t.name.toLowerCase() === targetTech || t.slug.toLowerCase() === targetTech)
        );
    }

    // 5. Industry Filter
    if (filters.industry && filters.industry !== 'All') {
        const targetInd = filters.industry.toLowerCase();
        list = list.filter((res) =>
            res.industries?.some((ind) => ind.title.toLowerCase() === targetInd || ind.slug.toLowerCase() === targetInd)
        );
    }

    return list;
}
