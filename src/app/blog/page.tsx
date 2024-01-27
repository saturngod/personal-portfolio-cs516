import Link from "next/link";

export default function Page() {
  return (
      <>
          <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Blog</h1>
          </div>
          <div className="text-pretty text-sm font-mono text-muted-foreground">
              <ul>
              <li><Link href="/blog/site-infra">Infrasture of Current Static Site</Link></li>
              <li><Link href="/blog/site-aws">Why I am learning AWS?</Link></li>
              <li><Link href="/blog/site-swiftui">Why should use SwiftUI in 2024</Link></li>
              </ul>
          </div>
      </>
  )
}