import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full relative z-0 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p><strong>Last Updated: March 2026</strong></p>
            
            <p>Welcome to piowsee. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from using our services in any way that could damage, disable, overburden, or impair our servers or networks.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Intellectual Property</h2>
            <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to our website or services are protected under applicable copyrights, trademarks, and other proprietary rights. All content is the exclusive property of piowsee.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Limitation of Liability</h2>
            <p>In no event shall piowsee, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.</p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at: <strong>poc.helpteam@gmail.com</strong></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
