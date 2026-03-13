import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col pt-[88px]">
      {/* Reusing the transparent header */}
      <Header />

      {/* Dark Hero Banner */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6 flex justify-center w-full mt-[-88px] pt-[128px]">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Terms of Service
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
            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            By accessing or using the piowsee website, consulting with our engineers, or utilizing our software platforms (including but not limited to pocv and Pesan AI), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            piowsee is a software house providing custom digital product development, AI integrations, web applications, and proprietary internal platforms designed to automate complexity. Our specific deliverables and services are subject to separate master service agreements (MSAs) or statements of work (SOWs) established with clients.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            The piowsee website and its original content, features, and functionality are and will remain the exclusive property of piowsee and its licensors. Unless explicitly stated in a custom software development contract, piowsee retains the underlying intellectual property rights to our proprietary codebases, AI models, and internal tools.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. User Obligations</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            When interacting with our website or platforms, you agree not to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 mb-6 space-y-2">
            <li>Use the services for any illegal or unauthorized purpose.</li>
            <li>Attempt to reverse engineer, decompile, or otherwise extract the source code of the software provided by piowsee.</li>
            <li>Interfere with or disrupt the integrity or performance of the services or the data contained therein.</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            In no event shall piowsee, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">6. Governing Law</h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
