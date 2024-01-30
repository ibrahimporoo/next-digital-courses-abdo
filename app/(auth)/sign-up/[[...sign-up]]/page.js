import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
  <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Night"
          src="https://images.unsplash.com/photo-1523553374578-aba5fa21a345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw0MzcxMzQ3fHxlbnwwfHx8fHw%3D"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="hidden lg:relative lg:block lg:p-12">
          <Link className="block text-white" href="/">
            <span className="sr-only">Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
          </Link>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to Our Digital Courses 🦑
          </h2>

          <p className="mt-4 leading-relaxed text-white/90">
            Combine ideas to create something new. Crucial skill for learning.
          </p>
        </div>
      </section>

      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <Link
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span className="sr-only">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
            </Link>

            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Our Digital Courses 🦑
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Combine ideas to create something new. Crucial skill for learning.
            </p>
          </div>

          <SignUp />
        </div>
      </main>
    </div>
  </section>
  )
}