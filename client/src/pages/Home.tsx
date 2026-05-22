import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Quality Management System Buildout, Regulatory Compliance, and Submissions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Safely accelerate the delivery of medical innovations to patients through precise quality engineering and regulatory execution
              </p>
              <a href="/contact" className="button-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                Our Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At QRA Strategies LLC, we view quality and regulatory compliance as an achievable operational milestone rather than a burdensome administrative checklist designed solely to please regulators. Our core objective is to safely accelerate the delivery of medical innovations to patients by providing precise quality engineering and regulatory execution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We approach compliance with an absolute focus on execution and resource efficiency. Our team includes former notified body auditors and former FDA personnel, providing our partners with an asymmetric advantage and direct insight into actual regulatory expectations.
              </p>
            </div>
          </div>
        </section>

        {/* The Execution Gap Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              The Execution Gap
            </h2>

            <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 mb-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emerging and mid-tier MedTech companies frequently encounter a significant execution gap. Startups often lack the internal engineering bandwidth to support complex compliance requirements. Mismanaged compliance creates technical debt, burns capital, and directly impacts corporate valuation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We embed seamlessly with your team to build the operations required to manufacture your device, requiring minimal support from your core engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Former FDA Personnel</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Direct insight into actual regulatory expectations and inspection protocols.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Notified Body Auditors</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Deep expertise in CE Mark execution and international regulatory compliance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-yellow-500 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-bold text-blue-900">Execution Focused</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Absolute focus on resource efficiency and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              Core Technical Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Right Sized QMS Build and Certification
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  ISO 13485:2016 and MDSAP certification tailored to your organization's stage and complexity.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  CE Mark Execution
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Technical file creation and notified body coordination for European market entry.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Audit Preparation and FDA Inspection Response
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Form 483 remediation and comprehensive inspection readiness from former FDA personnel.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Risk Management Specialization
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Comprehensive risk analysis and mitigation strategies aligned with regulatory expectations.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Device History Record Operations
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Complete traceability from component procurement through final device distribution and production equipment qualification.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Configuration Management and Supplier Quality
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Change control procedures, design history file management, and supplier audits with quality agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why QRA Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                Why QRA Strategies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team includes former notified body auditors and former FDA personnel. This combination provides an asymmetric advantage. We understand not just what regulators require, but how they actually think about compliance and what they look for during inspections.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We embed seamlessly with your team to build the operations required to manufacture your device. Our approach minimizes the burden on your core engineering team while ensuring your compliance foundation is solid from day one.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mismanaged compliance creates technical debt that compounds over time. We prevent that by building right-sized systems that are proportionate to your organization and audit ready from inception.
              </p>
            </div>
          </div>
        </section>

        {/* Execution Focus Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">
                Execution and Resource Efficiency
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We approach compliance with an absolute focus on execution and resource efficiency. Our team embeds seamlessly with your organization to build the operations required to manufacture your device, requiring minimal support from your core engineers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Rather than hiring full-time regulatory staff or managing external consultants who lack continuity, you gain access to experienced professionals who understand your product, your market, and your business constraints. We work at your pace, scaling our engagement as your organization grows.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">The QRA Advantage</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Your engineers stay focused on product development and innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Avoid the cost and commitment of hiring full-time regulatory staff</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Your Quality Management System is built right from the start, preventing costly remediation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Maintain regulatory readiness throughout your development cycle</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700">Accelerate your path to market entry with confidence in your compliance posture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 text-center">
              Our Team's Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Former FDA Personnel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Direct insight into regulatory expectations, inspection protocols, and Form 483 remediation. We understand how FDA actually evaluates compliance systems and what they look for during inspections.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Former Notified Body Auditors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Deep expertise in CE Mark execution, technical file creation, and international regulatory compliance. We know what notified bodies evaluate and how to build systems that pass their audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Initial Compliance Assessment
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Let us help you understand your compliance requirements and build a roadmap to market entry.
            </p>
            <a href="/contact" className="button-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
