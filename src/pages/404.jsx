import React from "react"
import { SEO } from "../components/Seo"

export default function NotFound() {
  return (
    <div class="container center flex">
      <h1 class="not-found">404 Not Found</h1>
    </div>
  )
}

export const Head = () => (
  <SEO />
)
