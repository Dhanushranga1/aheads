import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can you deploy an IT infrastructure solution?",
    answer: "Our rapid deployment protocols allow us to assess, plan, and initiate infrastructure setup within 48-72 hours for standard requirements. For complex enterprise migrations, we provide a detailed phased roadmap."
  },
  {
    question: "Do you offer post-implementation support?",
    answer: "Yes, we operate on an 'Advisory + Execution + AMC' model. We don't just build and leave; our 24/7 SOC and Helpdesk teams ensure your systems remain operational, secure, and updated."
  },
  {
    question: "Is your cloud migration process secure?",
    answer: "Security is our primary architectural pillar. We follow a Zero Trust approach during migration, utilizing encrypted channels, strict IAM policies, and continuous compliance monitoring (GDPR/HIPAA/ISO)."
  },
  {
    question: "Can you integrate with our existing legacy systems?",
    answer: "Absolutely. We specialize in hybrid ecosystems. Our integration team uses custom middleware and APIs to bridge your legacy hardware with modern cloud applications, extending the life of your current investments."
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we are industry-agnostic, we have deep vertical expertise in BFSI (Banking & Finance), Healthcare, Manufacturing, and Retail/E-commerce."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-blue border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header Side */}
          <div className="lg:w-1/3">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6 border border-brand-orange/20">
               <HelpCircle size={14} /> Common Queries
             </div>
             <h2 className="text-4xl font-bold text-white mb-6">Got Questions? <br/> We have answers.</h2>
             <p className="text-slate-400 text-lg leading-relaxed mb-8">
               Understanding enterprise technology shouldn't be a mystery. Here are answers to the most frequent questions we get from CTOs and IT Managers.
             </p>
             <button className="text-brand-orange font-bold hover:text-white transition-colors underline underline-offset-4 decoration-brand-orange">
               Contact support for more details
             </button>
          </div>

          {/* Accordion Side */}
          <div className="lg:w-2/3">
             <div className="space-y-4">
               {faqs.map((faq, index) => (
                 <div 
                   key={index} 
                   className={`rounded-xl border transition-all duration-300 ${openIndex === index ? 'bg-slate-800/50 border-brand-orange/50 shadow-lg shadow-brand-orange/5' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                 >
                   <button 
                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
                     className="w-full flex items-center justify-between p-6 text-left"
                   >
                     <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                       {faq.question}
                     </span>
                     <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-orange text-white' : 'bg-slate-800 text-slate-400'}`}>
                       {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                     </span>
                   </button>
                   
                   <div 
                     className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                   >
                     <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                       {faq.answer}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;