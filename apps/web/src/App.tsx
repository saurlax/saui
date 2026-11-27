import { useState } from "react"
import {
  ArrowDownIcon,
  SearchIcon,
  SunMoonIcon,
} from "lucide-react"
import { Button, Input, Toaster, TooltipProvider } from "@saurlax/saui"

import { useTheme } from "./components/theme-provider"
import { componentGroups, groups, type Group } from "./component-index"
import { samples } from "./showcase-examples"
import "./showcase.css"

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "")
}

export function App() {
  const [group, setGroup] = useState<Group | "All">("All")
  const [query, setQuery] = useState("")
  const { setTheme } = useTheme()
  const search = normalize(query)
  const matches = (text: string) => normalize(text).includes(search)
  const activeGroups = group === "All" ? groups : [group]
  const visibleSamples = samples.filter(
    (sample) =>
      activeGroups.includes(sample.group) &&
      [sample.name, ...(sample.includes ?? [])].some(matches)
  )
  const catalog = activeGroups
    .map((name) => ({
      name,
      components: componentGroups[name].filter(matches),
    }))
    .filter(({ components }) => components.length)

  const componentCount = catalog.reduce(
    (total, section) => total + section.components.length,
    0
  )

  return (
    <TooltipProvider>
      <Toaster>
        <header className="showcase-header">
          <div className="showcase-shell showcase-header-inner">
            <a className="showcase-brand" href="#" aria-label="SAUI home">
              <img
                className="showcase-mark"
                src={`${import.meta.env.BASE_URL}favicon.svg`}
                width={32}
                height={32}
                alt=""
              />
              SAUI
            </a>
            <nav className="showcase-nav" aria-label="Site navigation">
              <a href="#examples">Examples</a>
              <a href="#index">Index</a>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle color theme"
              onClick={() =>
                setTheme(
                  document.documentElement.classList.contains("dark")
                    ? "light"
                    : "dark"
                )
              }
            >
              <SunMoonIcon />
            </Button>
          </div>
        </header>
        <main className="showcase-shell">
          <section className="showcase-intro">
            <h1>Component library</h1>
            <p>
              React components for web and desktop apps, built with Base UI and
              shadcn/ui.
            </p>
          </section>
          <section id="examples" aria-labelledby="examples-title">
            <div className="showcase-controls">
              <h2 id="examples-title">Examples</h2>
              <div className="showcase-search">
                <SearchIcon aria-hidden="true" />
                <Input
                  type="search"
                  aria-label="Find a component"
                  placeholder="Find a component…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>
            <div
              className="showcase-filters"
              role="group"
              aria-label="Filter by category"
            >
              {(["All", ...groups] as const).map((name) => (
                <Button
                  key={name}
                  variant={group === name ? "default" : "ghost"}
                  size="sm"
                  aria-pressed={group === name}
                  onClick={() => setGroup(name)}
                >
                  {name}
                </Button>
              ))}
            </div>
            {visibleSamples.length ? (
              <div className="showcase-grid">
                {visibleSamples.map(({ name, demo }) => (
                  <article className="showcase-card" key={name}>
                    <h3>{name}</h3>
                    <div className="showcase-demo">{demo}</div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="showcase-empty">
                {catalog.length ? (
                  <a href="#index">
                    View matching components in the index <ArrowDownIcon />
                  </a>
                ) : (
                  <p>No matching components.</p>
                )}
              </div>
            )}
          </section>
          <section
            id="index"
            className="showcase-index"
            aria-labelledby="index-title"
          >
            <h2 id="index-title">
              Component index <span>{componentCount}</span>
            </h2>
            {catalog.length > 0 && (
              <div className="showcase-index-grid">
                {catalog.map(({ name, components }) => (
                  <div key={name}>
                    <h3>{name}</h3>
                    <ul>
                      {components.map((component) => (
                        <li key={component}>{component}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </Toaster>
    </TooltipProvider>
  )
}
