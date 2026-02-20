/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  BarChart3, 
  Database, 
  Cpu, 
  Network, 
  Globe, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Search, 
  Layers, 
  Zap, 
  FileCheck,
  Building2,
  Users,
  Scale,
  Briefcase
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Badge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-6 border border-emerald-200 uppercase tracking-wider">
    {children}
  </span>
);

const Card = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">SIP</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-emerald-600 transition-colors">Problem</a>
            <a href="#solution" className="hover:text-emerald-600 transition-colors">Solution</a>
            <a href="#capabilities" className="hover:text-emerald-600 transition-colors">Capabilities</a>
            <a href="#outcomes" className="hover:text-emerald-600 transition-colors">Outcomes</a>
            <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent -z-10" />
        
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>Sovereign Intelligence Platform</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Measure, Understand, and Strengthen Your <span className="text-emerald-600">Digital Sovereignty</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
              The system of record for Data maturity, AI capability, and Technology Sovereignty across organisations, sectors, and nations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
                Request a Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                View Platform Overview
              </button>
            </div>
            <p className="mt-12 text-sm font-medium text-slate-500 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Identify systemic risk, quantify economic opportunity, and build resilient infrastructure.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Trust Section */}
      <div className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 font-medium text-sm uppercase tracking-widest max-w-xs">
            Trusted by governments, regulators, and infrastructure operators
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale invert">
            {/* Placeholder logos */}
            <div className="h-8 w-32 bg-slate-400 rounded-sm" />
            <div className="h-8 w-24 bg-slate-400 rounded-sm" />
            <div className="h-8 w-40 bg-slate-400 rounded-sm" />
            <div className="h-8 w-28 bg-slate-400 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <Section id="problem" className="bg-white border-y border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              You cannot manage what you cannot measure
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Modern organisations and economies depend on complex digital infrastructure controlled by external vendors, distributed across jurisdictions, and embedded deeply into operational workflows.
              </p>
              <p className="serif-italic border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50/30">
                Yet most leaders lack clear answers to critical questions.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <ul className="space-y-4">
              {[
                "How sovereign is our technology stack?",
                "How mature is our data and AI capability?",
                "Where are our systemic vendor dependencies?",
                "What is our exposure to foreign infrastructure and jurisdiction?",
                "What is the economic upside of improving our digital capability?"
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">?</span>
                  </div>
                  <span className="font-medium text-slate-800">{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500 text-center font-medium">
              Without objective measurement, organisations operate with hidden risk.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge>The Solution</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A unified platform for Data, AI, and Technology Sovereignty
          </h2>
          <p className="text-xl text-slate-600">
            SIP provides continuous, evidence-based assessment of digital capability across organisations, sectors, cities, and entire countries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            icon={BarChart3}
            title="Data Maturity Scoring"
            description="Continuous assessment of data governance, quality, and accessibility across the enterprise."
          />
          <Card 
            icon={Cpu}
            title="AI Maturity Scoring"
            description="Measure readiness and capability to deploy and scale artificial intelligence safely."
          />
          <Card 
            icon={Shield}
            title="Technology Sovereignty"
            description="Quantify independence from external vendors and foreign jurisdictions."
          />
          <Card 
            icon={Network}
            title="Vendor Dependency"
            description="Map and analyze critical dependencies across infrastructure and application layers."
          />
          <Card 
            icon={Globe}
            title="National Intelligence"
            description="Aggregate data to provide sector-level and national digital sovereignty indices."
          />
          <Card 
            icon={TrendingUp}
            title="Economic Modelling"
            description="Model the economic upside of improving digital capability and sovereignty."
          />
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <div className="h-1 w-20 bg-emerald-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Automatically map technology stacks, data platforms, and vendor dependencies.",
              icon: Search
            },
            {
              step: "02",
              title: "Assess",
              desc: "Objectively score organisations across maturity and sovereignty metrics.",
              icon: FileCheck
            },
            {
              step: "03",
              title: "Aggregate",
              desc: "Provide sector-level resilience and national sovereignty intelligence.",
              icon: Layers
            },
            {
              step: "04",
              title: "Optimise",
              desc: "Receive strategic recommendations to reduce lock-in and unlock value.",
              icon: Zap
            }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-slate-200 mb-6 data-value">{item.step}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <item.icon className="w-5 h-5 text-emerald-600" />
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Platform Modules */}
      <Section id="capabilities">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Core Platform Modules</h2>
            <p className="text-lg text-slate-600 mb-8">
              Specialized intelligence engines designed for specific domains of digital sovereignty.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wider mb-1">System of Record</p>
                <p className="text-emerald-700">Audit-grade intelligence for strategic decision making.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Data & AI Maturity",
                desc: "Understand your position from basic reporting to fully intelligent enterprise operations.",
                icon: Database
              },
              {
                title: "Technology Sovereignty",
                desc: "Measure independence from external vendors and foreign jurisdictions.",
                icon: Shield
              },
              {
                title: "Vendor Dependency",
                desc: "Visualize critical dependencies across infrastructure, identity, and data layers.",
                icon: Network
              },
              {
                title: "Content & Data Sovereignty",
                desc: "Track ownership, control, and portability of critical digital assets and IP.",
                icon: Lock
              }
            ].map((module, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-2xl hover:border-emerald-200 transition-colors">
                <module.icon className="w-8 h-8 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                <p className="text-slate-600">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Strategic Outcomes */}
      <Section id="outcomes" className="bg-slate-900 text-white rounded-[3rem] mx-6 my-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge>Strategic Outcomes</Badge>
            <h2 className="text-4xl font-bold mb-8">Built for leaders responsible for digital capability</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Complete visibility",
                "Reduced vendor lock-in",
                "Safer AI adoption",
                "Operational resilience",
                "Increased productivity",
                "Stronger control",
                "National independence"
              ].map((outcome, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-emerald-400">Economic Impact</h3>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-bold mb-2 data-value">10–40%</div>
                <p className="text-slate-400">Productivity improvement potential</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="text-4xl font-bold mb-2 data-value">5–30%</div>
                <p className="text-slate-400">Operating margin improvement potential</p>
              </div>
              <div className="h-px bg-white/10" />
              <p className="text-sm text-slate-500 italic">
                Improving Data, AI, and Technology Sovereignty maturity enables measurable economic value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Built for leaders</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { label: "Government", icon: Building2 },
            { label: "Infrastructure", icon: Shield },
            { label: "Regulators", icon: Scale },
            { label: "Enterprise", icon: Briefcase },
            { label: "Security", icon: Lock },
            { label: "Strategy", icon: Users }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-slate-400" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiation Section */}
      <Section className="bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Built for auditability, accuracy, and strategic decision-making</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white/10 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">Objective Scoring</h3>
              <p className="text-emerald-50">Evidence-based analysis that moves beyond subjective surveys to real technical measurement.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">Multi-level Intelligence</h3>
              <p className="text-emerald-50">Seamlessly aggregate data from individual teams to entire national sectors.</p>
            </div>
          </div>
          <p className="mt-12 text-xl font-medium text-emerald-100">
            It becomes the authoritative system of record for digital capability and sovereignty.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Build sovereign, resilient, intelligent digital capability
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Understand your current position. Identify your risks. Unlock your potential.
          </p>
          <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:scale-[1.02]">
            Request a Demo
          </button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
              <Shield className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">SIP</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Sovereign Intelligence Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
