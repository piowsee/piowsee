import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col pt-[88px]">
      {/* Reusing the transparent header */}
      <Header />

      {/* Dark Hero Banner */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6 flex justify-center w-full mt-[-88px] pt-[128px]">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 bg-white py-16 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 flex justify-center">
          <div className="max-w-3xl w-full prose prose-zinc lg:prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Welcome to piowsee (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are an Indonesian software house specializing in intelligent digital products, including but not limited to AI integrations, custom web applications, and data systems like pocv and Pesan AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or use our services.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. The Data We Collect</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            We may collect, use, store, and transfer different kinds of personal data about you. When you consult with our engineers or use our platforms, we may collect:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
            <li><strong>Identity and Contact Data:</strong> Includes your first name, last name, username, email address, telephone numbers, and company name.</li>
            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system, and platform.</li>
            <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services (e.g., interactions with our AI agents like Pesan AI).</li>
            <li><strong>Candidate Data (via pocv):</strong> If utilizing our AI Resume Builder, we temporarily process resume data for the explicit purpose of ATS optimization and rewriting, which is not used for generalized AI training.</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
            <li>To provide and deliver our software development services and digital products.</li>
            <li>To manage our relationship with you, including consulting and platform support.</li>
            <li>To improve our platforms (pocv, Pesan AI) and ensure our AI integrations function efficiently and securely.</li>
            <li>To comply with a legal or regulatory obligation in Indonesia.</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">5. Contact Details</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            If you have any questions about this privacy policy or our privacy practices, please contact us. piowsee is engineered and headquartered in Indonesia.
          </p>
          
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
