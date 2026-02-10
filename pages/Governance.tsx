import React from 'react';
import { ShieldCheck, FileText, Scale, Gavel, PenTool, CheckCircle, Scroll, Calendar, Network } from 'lucide-react';

const Governance: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#0F172A]">
      {/* Header */}
      <div className="bg-[#0F172A] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Governance & Bylaws
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            The foundational framework ensuring integrity, transparency, and professional excellence within The Executive.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* DOCUMENT 0: CHARTER */}
        <div className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <div className="flex justify-center mb-4 text-[#C5A059]">
              <Scroll className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">The Charter of The Executive</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">A Private Social Club for Distinguished Diaspora's</p>
          </div>

          <div className="space-y-12">
             {/* Preamble */}
             <section>
                <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                  Preamble
                </h3>
                <p className="text-slate-600 leading-relaxed font-light italic mb-4">
                  Under the auspices of the Almighty, we, the diaspora of the United States, hereby unite to establish THE EXECUTIVE. We are a private fellowship dedicated to the cultivation of friendship, the celebration of our shared cultural heritage, and the advancement of our members' collective social and professional interests.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  This Club is ordained as a non-political, non-partisan, and private social entity. Our purpose is to provide a sanctuary for elite collaboration, where tradition meets modern excellence, and where the bonds of brotherhood are strengthened through shared experience.
                </p>
             </section>

             {/* Article I */}
             <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">I.</span> Identity and Jurisdiction
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Name.</strong> The official title of this society is THE EXECUTIVE (hereinafter referred to as “the Club”).</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: The Club Seat.</strong> The principal operations and social gatherings shall be centered within the Dallas–Fort Worth Metroplex, Texas.</li>
              </ul>
            </section>

            {/* Article II */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">II.</span> The Pillars of the Club
              </h3>
              <p className="text-slate-600 mb-4 font-light">THE EXECUTIVE is dedicated to the following social mandates:</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li className="flex items-start"><span className="text-[#C5A059] mr-2">•</span> <span><strong className="text-[#0F172A] font-medium">Fellowship & Solidarity:</strong> Creating an exclusive social environment for networking and mutual support.</span></li>
                <li className="flex items-start"><span className="text-[#C5A059] mr-2">•</span> <span><strong className="text-[#0F172A] font-medium">Cultural Preservation:</strong> Hosting curated events that honor customs, gastronomy, and the arts.</span></li>
                <li className="flex items-start"><span className="text-[#C5A059] mr-2">•</span> <span><strong className="text-[#0F172A] font-medium">Economic Empowerment:</strong> Facilitating a private network for the exchange of business insights and investment opportunities among members.</span></li>
                <li className="flex items-start"><span className="text-[#C5A059] mr-2">•</span> <span><strong className="text-[#0F172A] font-medium">Community Presence:</strong> Representing the pinnacle of social life within the Dallas–Fort Worth area.</span></li>
              </ul>
            </section>

            {/* Article III */}
             <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">III.</span> Membership
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Private Membership.</strong> Membership is a privilege, not a right. It is open to individuals who demonstrate high character and professional standing.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Social Chapters.</strong> The Club shall maintain the North Dallas and Fort Worth Chapters to facilitate localized social engagements.</li>
              </ul>
            </section>

             {/* Article IV */}
             <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">IV.</span> The Founding Council
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                The Founding Members are the life-long patrons of THE EXECUTIVE. They shall remain as permanent advisors to the Club, ensuring the original social vision is maintained for future generations of members.
              </p>
            </section>
          </div>
        </div>

        {/* DOCUMENT 1: BYLAWS */}
        <div className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">Bylaws of The Executive</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">Adopted 2024</p>
          </div>

          <div className="space-y-12">
            
            {/* Article I */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">I.</span> Operational Structure
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Chapter Governance.</strong> Each established chapter (North Dallas and Fort Worth) shall operate under the oversight of the Executive Directorate but may maintain local sub-committees for regional events. Each chapter must report quarterly to the Council of Representatives (COR).</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Principal Office.</strong> The Directorate shall designate a principal office for the receipt of legal documents and official correspondence.</li>
              </ul>
            </section>

            {/* Article II */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">II.</span> Admission & Protocol
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Application Process.</strong> Prospective members or organizations must submit a formal Letter of Intent to the General Secretary. The Directorate will review the applicant's alignment with THE EXECUTIVE’s values before presenting the candidate to the COR for a confirmation vote.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Induction.</strong> New members shall undergo a formal induction ceremony to be held during a General Meeting, signifying their commitment to the Charter.</li>
              </ul>
            </section>

            {/* Article III */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">III.</span> Meeting Protocols
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: General Assembly.</strong> The General Assembly shall meet once per Quarter. Notice of the meeting must be dispatched via electronic communication at least seven (7) days prior.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Emergency Sessions.</strong> The President or a simple majority of the COR may convene an Emergency Session. Notice must be provided at least forty-eight (48) hours in advance.</li>
                <li>
                  <strong className="text-[#0F172A] font-medium">Section 3: Voting Power.</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2 text-sm">
                    <li>Each organization represented in the COR holds one (1) vote.</li>
                    <li>Individual members in good standing hold one (1) vote.</li>
                    <li>In the event of a stalemate, the President shall cast the deciding vote.</li>
                  </ul>
                </li>
                <li><strong className="text-[#0F172A] font-medium">Section 4: Virtual Quorum.</strong> Recognizing the modern professional landscape, attendance via secure video conferencing shall be considered "present" for the purposes of establishing a two-thirds (2/3) quorum.</li>
              </ul>
            </section>

            {/* Article IV - REVISED */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">IV.</span> Fiscal Architecture
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li>
                    <strong className="text-[#0F172A] font-medium">Section 1: The Ad Hoc Contribution Model.</strong>
                    THE EXECUTIVE does not require mandatory monthly dues. Instead, the Club operates on a need-based contribution system to ensure that capital is only raised for specific, high-value purposes.
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-sm">
                        <li><strong className="text-[#0F172A]">Strategic Project Contributions ($100):</strong> For "Big Projects" (e.g., Galas, investments, or major civic events). These are triggered by a formal proposal and a Council vote.</li>
                        <li><strong className="text-[#0F172A]">Operational Contributions ($50):</strong> For "Minor Needs" (e.g., specific meeting costs, venue rentals, or administrative tools). These are requested by the Treasurer only as the operational account requires replenishment.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-[#0F172A] font-medium">Section 2: The "Need-Based" Trigger.</strong>
                    The Treasurer shall monitor the Club’s liquidity. When funds for recurring social expenses are low, a "Notice of Need" shall be issued to all members for a $50 contribution. Members are expected to fulfill these contributions within seven (7) days of the notice to ensure the Club remains agile and debt-free.
                </li>
              </ul>
            </section>

            {/* Article V */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">V.</span> Protocol of Excellence & Conduct
              </h3>
              <ul className="space-y-6 text-slate-600 leading-relaxed pl-4 font-light">
                <li>
                  <strong className="text-[#0F172A] font-medium block mb-2">Section 1: The Executive Decorum.</strong>
                  Members shall conduct themselves with the highest level of sophistication. In all Club gatherings, discourse should be characterized by mutual respect, intellectual depth, and the "Ubuntu" spirit. Hostility or behavior that disrupts the harmony of the fellowship is grounds for immediate review by the Board.
                </li>
                <li>
                  <strong className="text-[#0F172A] font-medium block mb-2">Section 2: The Dress Code (Standard of Appearance).</strong>
                  To maintain the prestige of THE EXECUTIVE, the following dress codes apply to official functions:
                  <ul className="list-disc ml-6 mt-2 space-y-2 text-sm">
                    <li><strong className="text-[#0F172A]">The Signature Gala:</strong> Black Tie or Regal African Formal (Traditional attire of the highest quality).</li>
                    <li><strong className="text-[#0F172A]">General Assembly:</strong> Business Professional or "Executive Casual" (No athletic wear, distressed denim, or flip-flops).</li>
                    <li><strong className="text-[#0F172A]">Social Mixers:</strong> Smart Casual.</li>
                    <li><strong className="text-[#0F172A]">Enforcement:</strong> The Sergeant-at-Arms or Public Relations Officer reserves the right to deny entry to any member not adhering to the event-specific dress code.</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-[#0F172A] font-medium block mb-2">Section 3: Disciplinary Procedure.</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-2 text-sm">
                    <li><strong className="text-[#0F172A]">Inquiry:</strong> The Directorate shall appoint an ad hoc Ethics Commission to investigate allegations.</li>
                    <li><strong className="text-[#0F172A]">Hearing:</strong> The accused party shall have the right to present a defense.</li>
                    <li><strong className="text-[#0F172A]">Sanction:</strong> The COR may issue a private reprimand, a suspension of voting rights, or a permanent expulsion by a two-thirds (2/3) majority.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Article VI */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">VI.</span> Elections
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Nominations.</strong> A Nominating Committee shall be formed three (3) months prior to the expiration of a two-year term. Only members in "Good Standing" for at least one (1) year are eligible for office.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Transition Period.</strong> Outgoing officers shall provide a thirty (30) day transition period to incoming officers, ensuring the transfer of all digital assets, financial records, and institutional knowledge.</li>
              </ul>
            </section>

             {/* Article VII */}
             <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">VII.</span> Amendments to Bylaws
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li>These Bylaws may be amended, repealed, or altered, in whole or in part, by a simple majority vote of the Council of Representatives, provided the amendment does not conflict with the Charter.</li>
              </ul>
            </section>

            {/* Article VIII */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">VIII.</span> Membership Structure
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Section 1: Premium Membership.</strong> Full access to all events, voting rights in the Council, and eligibility for the Directorate.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 2: Corporate/Group Membership.</strong> For African-owned businesses or organizations looking to align with the Club’s network.</li>
                <li><strong className="text-[#0F172A] font-medium">Section 3: Honorary Membership.</strong> Reserved for distinguished elders or community leaders at the discretion of the Founding Council.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* DOCUMENT 2: SOCIAL CALENDAR */}
        <div className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
             <div className="flex justify-center mb-4 text-[#C5A059]">
              <Calendar className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">The Inaugural Social Calendar</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">A 12-Month Roadmap for The Executive</p>
          </div>

          <div className="overflow-hidden border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#0F172A]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider w-24">Month</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Event Title</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider hidden md:table-cell">Event Type</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Objective</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">The Founder’s Investiture</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Formal Gala</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">Official swearing-in of the Council and founding members.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">Executive Roundtable</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Business Mixer</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">Networking and investment opportunity exchange.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">The Heritage Brunch</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Cultural Social</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">Celebrating African gastronomy and tradition (Family-friendly).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">Summer White Party</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Luxury Social</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">A high-end outdoor networking event for the DFW diaspora.</td>
                </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 9</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">The Youth Legacy Forum</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Mentorship</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">Connecting Executive members with rising African students/pros.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#C5A059]">Month 11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#0F172A]">The DFW Unity Ball</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 uppercase tracking-wide hidden md:table-cell">Annual Formal</td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-light">The premiere year-end celebration for both chapters.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DOCUMENT 3: NETWORKING PROTOCOLS */}
        <div id="networking" className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <div className="flex justify-center mb-4 text-[#C5A059]">
              <Network className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">Strategic Networking Framework</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">Protocols of Connection</p>
          </div>

          <div className="space-y-12">
            {/* 1. Horizontal vs Vertical */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">I.</span> The "Horizontal" vs. "Vertical" Network
              </h3>
              <p className="text-slate-600 mb-4 font-light">We categorize networking into two distinct flows to maximize utility for members:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 border-l-2 border-[#C5A059]">
                    <h4 className="font-bold text-[#0F172A] mb-2">Vertical Networking (Mentorship & Legacy)</h4>
                    <p className="text-sm text-slate-600">Connecting established industry titans (Founding Members/Advisors) with rising high-performers within the chapters. This ensures the "Executive" standard is passed down.</p>
                </div>
                <div className="bg-slate-50 p-6 border-l-2 border-[#C5A059]">
                    <h4 className="font-bold text-[#0F172A] mb-2">Horizontal Networking (Peer-to-Peer Synergy)</h4>
                    <p className="text-sm text-slate-600">Connecting a surgeon in Texas with a healthcare tech CEO in Georgia. This is where "Big Projects" are born.</p>
                </div>
              </div>
            </section>

            {/* 2. Executive Introduction Protocol */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">II.</span> The "Executive Introduction" Protocol
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">The Warm Referral:</strong> A member in Texas shouldn't "cold call" a member in New York. They should ask their State Chair for a formal introduction, or reference the National Directory.</li>
                <li><strong className="text-[#0F172A] font-medium">The Value-First Rule:</strong> Before asking for a favor, a member is encouraged to offer a resource, an insight, or a connection of their own.</li>
              </ul>
            </section>

            {/* 3. Networking Environments */}
            <section>
                <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">III.</span> Networking Environments
              </h3>
              <div className="overflow-hidden border border-slate-200 mt-6">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-[#0F172A]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Environment</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Format</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Outcome</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                        <td className="px-6 py-4 text-sm font-bold text-[#0F172A]">The Closed Door</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Private Boardroom Sessions</td>
                        <td className="px-6 py-4 text-sm text-slate-600">High-stakes investment and sensitive business strategy.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 text-sm font-bold text-[#0F172A]">The Gala Floor</td>
                        <td className="px-6 py-4 text-sm text-slate-600">High-End Socials / Balls</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Brand building, cultural celebration, and "Social Capital."</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 text-sm font-bold text-[#0F172A]">The Digital Hub</td>
                        <td className="px-6 py-4 text-sm text-slate-600">National Directory & Secure Chat</td>
                        <td className="px-6 py-4 text-sm text-slate-600">Instant national access for urgent professional needs.</td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </section>

            {/* 4. Strategic Socializing */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">IV.</span> Strategic Socializing
              </h3>
              <p className="text-slate-600 mb-4 font-light">
                  We don't just "hang out." Every mixer has a <strong>Director of Connections</strong> (often the Public Relations Officer) whose job is to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-600 text-sm">
                  <li>Identify members with complementary goals.</li>
                  <li>Perform "Active Introductions" (e.g., "John, meet Sarah—she’s scaling her firm in Atlanta, and I know you’re looking to expand your legal footprint there.").</li>
                  <li>Ensure no member is left on the periphery.</li>
              </ul>
            </section>

            {/* 5. Golden Passport */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">V.</span> The "Golden Passport" Benefit
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                The true power of THE EXECUTIVE’s networking is the National Reciprocity. If a Texas member travels to New York for business, they can notify the New York State Chair. The New York chapter may then host a "Visiting Executive Dinner," instantly plugging the traveler into a high-level local network.
              </p>
            </section>
          </div>
        </div>

        {/* DOCUMENT: NEW MEMBER ORIENTATION */}
        <div id="orientation" className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <div className="flex justify-center mb-4 text-[#C5A059]">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">New Member Orientation</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">Welcome to the Inner Circle</p>
          </div>

          <div className="space-y-12">
            <p className="text-slate-600 italic text-center max-w-2xl mx-auto">
              Congratulations on your induction into THE EXECUTIVE. Your admission signifies that you have been recognized as a leader of character and influence within the African diaspora. This packet outlines the standards and systems that maintain the excellence of our society.
            </p>

            {/* Added Image */}
            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg border border-slate-200 relative group">
               <img 
                 src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
                 alt="Members Networking" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#0F172A]/30 mix-blend-multiply group-hover:bg-[#0F172A]/10 transition-all duration-500"></div>
            </div>

            {/* 1. Code of Decorum */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">1.</span> The Code of Decorum
              </h3>
              <p className="text-slate-600 mb-4 font-light">As a member, you represent the brand of THE EXECUTIVE at all times.</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">Punctuality:</strong> "Executive Time" means arriving 5 minutes early. We respect the busy schedules of our peers by starting and ending meetings precisely on time.</li>
                <li><strong className="text-[#0F172A] font-medium">The "Ubuntu" Protocol:</strong> We debate ideas, not individuals. High-level discourse is encouraged; personal hostility is not tolerated.</li>
                <li><strong className="text-[#0F172A] font-medium">Confidentiality:</strong> What is discussed within the Council stays within the Council. This is a safe space for strategic and financial planning.</li>
              </ul>
            </section>

            {/* 2. Dress Code */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">2.</span> Dress Code Requirements
              </h3>
              <p className="text-slate-600 mb-4 font-light">Members must adhere to the standard of the event. Entry may be restricted for non-compliance.</p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-50 p-4 border border-slate-100">
                   <span className="block text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-2">Formal Events</span>
                   <span className="text-slate-700 text-sm">Black Tie or Regal Traditional African attire.</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-100">
                   <span className="block text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-2">General Meetings</span>
                   <span className="text-slate-700 text-sm">Business Professional (Suit/Tie) or "Executive Casual."</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-100">
                   <span className="block text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-2">Social Mixers</span>
                   <span className="text-slate-700 text-sm">Smart Casual (No athletic wear).</span>
                </div>
              </div>
            </section>

            {/* 3. Financial Commitment - REVISED */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">3.</span> Your Financial Commitment
              </h3>
              <p className="text-slate-600 mb-4 font-light">THE EXECUTIVE is designed for efficiency. Unlike traditional clubs with static fees, we utilize a Need-Based Contribution Model:</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">No Monthly Dues:</strong> You will never be billed a recurring monthly fee.</li>
                <li><strong className="text-[#0F172A] font-medium">Operational Contributions ($50):</strong> Requested only as the need arises to cover specific social or administrative costs.</li>
                <li><strong className="text-[#0F172A] font-medium">Strategic Project Fund ($100):</strong> Contributed only when the Council approves a major initiative or "Big Project" that requires a capital call.</li>
              </ul>

              {/* Notice of Need Email Template Reference */}
              <div className="mt-8 bg-slate-50 p-6 border-l-4 border-[#0F172A]">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-4">Reference: The "Notice of Need" Email</h4>
                <p className="text-xs text-slate-500 mb-4">You will receive this official communication when a contribution is triggered:</p>
                <div className="bg-white p-4 border border-slate-200 shadow-sm text-sm font-light text-slate-600 font-serif">
                  <p className="mb-2"><strong className="font-sans text-[#0F172A]">Subject:</strong> ACTION REQUIRED: Notice of Operational Need – THE EXECUTIVE</p>
                  <p className="mb-2">Distinguished Members,</p>
                  <p className="mb-2">To maintain the high standard of our upcoming [Meeting/Social Event] and to cover our current administrative overhead, the Treasurer is officially triggering a Minor Operational Contribution of $50.</p>
                  <p className="mb-2">As per our Bylaws, THE EXECUTIVE does not charge monthly dues; we contribute only as the need arises to keep our society prestigious and operational.</p>
                  <p className="mb-2 font-bold text-[#0F172A]">Contribution Details:</p>
                  <ul className="list-disc ml-6 mb-2">
                    <li>Amount: $50.00</li>
                    <li>Purpose: [e.g., Venue Rental / Infrastructure]</li>
                    <li>Deadline: [Date]</li>
                  </ul>
                  <p>Please submit your contribution via [Payment Method]. Thank you for your continued commitment to the excellence of our fellowship.</p>
                  <p className="mt-4 italic">In Solidarity,<br/>The Treasurer</p>
                </div>
              </div>
            </section>

            {/* 4. Navigating Meetings */}
            <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">4.</span> Navigating the Meetings
              </h3>
              <p className="text-slate-600 mb-4 font-light">We follow a streamlined version of parliamentary procedure to ensure efficiency.</p>
              <ul className="space-y-4 text-slate-600 leading-relaxed pl-4 font-light">
                <li><strong className="text-[#0F172A] font-medium">The Floor:</strong> To speak, please catch the eye of the President or Secretary.</li>
                <li><strong className="text-[#0F172A] font-medium">Motions:</strong> If you wish to propose a change or action, state: "I move that we [Action]."</li>
                <li><strong className="text-[#0F172A] font-medium">Voting:</strong> Decisions are made by a simple majority, unless they involve Charter amendments (2/3 majority).</li>
              </ul>
            </section>

             {/* 5. Accessing Network */}
             <section>
              <h3 className="flex items-center text-lg font-bold text-[#0F172A] mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span className="text-[#C5A059] mr-3">5.</span> Accessing the Network
              </h3>
              <p className="text-slate-600 mb-4 font-light">You are now part of a premiere directory. We encourage you to:</p>
              <div className="grid md:grid-cols-3 gap-6">
                 <div className="bg-[#0F172A] text-white p-6 text-center">
                    <h4 className="font-serif font-bold text-xl mb-2 text-[#C5A059]">Mentor</h4>
                    <p className="text-xs text-slate-300">Support the younger professionals in the diaspora.</p>
                 </div>
                 <div className="bg-[#0F172A] text-white p-6 text-center">
                    <h4 className="font-serif font-bold text-xl mb-2 text-[#C5A059]">Invest</h4>
                    <p className="text-xs text-slate-300">Share business opportunities first with your fellow members.</p>
                 </div>
                 <div className="bg-[#0F172A] text-white p-6 text-center">
                    <h4 className="font-serif font-bold text-xl mb-2 text-[#C5A059]">Lead</h4>
                    <p className="text-xs text-slate-300">Join a Special Commission to shape the Club's future.</p>
                 </div>
              </div>
            </section>

            {/* Checklist */}
            <div className="bg-[#f0f9ff] border-l-4 border-[#C5A059] p-6">
                <h4 className="text-[#0F172A] font-bold uppercase tracking-wider mb-4 flex items-center">
                   <PenTool className="w-5 h-5 mr-2" /> Member Checklist for the First Meeting
                </h4>
                <ul className="space-y-3">
                   <li className="flex items-center text-slate-700 text-sm">
                      <div className="w-5 h-5 border-2 border-[#C5A059] rounded mr-3 flex items-center justify-center"></div>
                      Review the Charter and Bylaws.
                   </li>
                   <li className="flex items-center text-slate-700 text-sm">
                      <div className="w-5 h-5 border-2 border-[#C5A059] rounded mr-3 flex items-center justify-center"></div>
                      Prepare your $50 Initial Operational Contribution.
                   </li>
                   <li className="flex items-center text-slate-700 text-sm">
                      <div className="w-5 h-5 border-2 border-[#C5A059] rounded mr-3 flex items-center justify-center"></div>
                      Have a 30-second "Executive Introduction" ready for the floor.
                   </li>
                </ul>
            </div>
          </div>
        </div>

        {/* DOCUMENT 4: MEMBERSHIP ADMISSION PETITION */}
        <div id="application" className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">Membership Admission Petition</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">Official Document • Form 1-A</p>
          </div>

          <div className="bg-[#f8fafc] p-8 border border-slate-200">
            <p className="text-slate-500 italic mb-8 text-center text-sm">
              Prospective members should complete this form to initiate the formal review process by the Council of Representatives.
            </p>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Section A */}
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest mb-6 border-b border-slate-300 pb-2">Section A: Candidate Profile</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Legal Name / Organization Name</label>
                    <input type="text" className="w-full bg-white border-b-2 border-slate-200 focus:border-[#C5A059] outline-none py-2 px-1 transition-colors" placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Professional Designation / Industry</label>
                    <input type="text" className="w-full bg-white border-b-2 border-slate-200 focus:border-[#C5A059] outline-none py-2 px-1 transition-colors" placeholder="e.g. CEO, Technology" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Contact (Email & Phone)</label>
                    <input type="text" className="w-full bg-white border-b-2 border-slate-200 focus:border-[#C5A059] outline-none py-2 px-1 transition-colors" placeholder="email@example.com | (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Chapter Affiliation</label>
                    <div className="flex gap-8">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="chapter" className="text-[#C5A059] focus:ring-[#C5A059]" />
                        <span className="text-slate-700">North Dallas</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="chapter" className="text-[#C5A059] focus:ring-[#C5A059]" />
                        <span className="text-slate-700">Fort Worth</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section B */}
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest mb-6 border-b border-slate-300 pb-2">Section B: Statement of Intent</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Alignment</label>
                    <p className="text-xs text-slate-400 mb-2">Briefly describe how your professional or organizational goals align with the mission of THE EXECUTIVE.</p>
                    <textarea rows={3} className="w-full bg-white border border-slate-200 focus:border-[#C5A059] outline-none p-3 transition-colors"></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contribution</label>
                    <p className="text-xs text-slate-400 mb-2">What specific expertise, resource, or cultural value do you intend to bring to the Council?</p>
                    <textarea rows={3} className="w-full bg-white border border-slate-200 focus:border-[#C5A059] outline-none p-3 transition-colors"></textarea>
                  </div>
                </div>
              </div>

              {/* Section C */}
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest mb-6 border-b border-slate-300 pb-2">Section C: Attestation</h3>
                <p className="text-slate-600 italic mb-6 leading-relaxed text-sm">
                  I, the undersigned, hereby petition for membership in THE EXECUTIVE. I attest that I have read the Charter and Bylaws and agree to abide by the sovereign authority of the Council of Representatives. I understand that admission is subject to a formal vote of the assembly.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Signature</label>
                    <div className="font-serif text-2xl text-[#0F172A] border-b-2 border-slate-300 py-2 italic font-bold opacity-50">
                       [Digital Signature]
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Date</label>
                    <input type="date" className="w-full bg-white border-b-2 border-slate-200 focus:border-[#C5A059] outline-none py-2 px-1 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="pt-6 text-center">
                 <button className="bg-[#0F172A] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A059] transition-all duration-300 flex items-center mx-auto">
                    <PenTool className="w-4 h-4 mr-2" /> Submit Petition
                 </button>
              </div>

            </form>
          </div>
        </div>

        {/* DOCUMENT 5: CODE OF ETHICS */}
        <div id="ethics" className="bg-white shadow-xl border-t-4 border-[#C5A059] p-8 md:p-16">
          <div className="mb-12 border-b border-slate-100 pb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0F172A] mb-3">Code of Ethics & Professional Conduct</h2>
            <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-bold">Standards of Excellence</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 italic text-center mb-10">
              This document serves as the moral compass for all members, ensuring the prestige of the Organization remains untarnished.
            </p>

            <div className="space-y-10">
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-serif">1</div>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-2">Institutional Integrity</h3>
                   <p className="text-slate-600 font-light leading-relaxed">
                     Members shall act as ambassadors of THE EXECUTIVE. Any public statement, social media engagement, or professional conduct must reflect the organization's commitment to excellence and African heritage.
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-serif">2</div>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-2">Fiduciary Responsibility</h3>
                   <p className="text-slate-600 font-light leading-relaxed">
                     Any member entrusted with the Organization's capital or assets must exercise the highest degree of transparency. Personal gain through the misuse of THE EXECUTIVE's resources is strictly prohibited and grounds for immediate expulsion.
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-serif">3</div>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-2">Collaborative Excellence (The "Ubuntu" Clause)</h3>
                   <p className="text-slate-600 font-light leading-relaxed">
                     While members may represent different professional interests, the spirit of "The Executive" is one of collective advancement. Intellectual property shared within closed sessions must be treated with absolute confidentiality.
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-serif">4</div>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-2">Conflict Resolution</h3>
                   <p className="text-slate-600 font-light leading-relaxed">
                     Internal disputes shall be handled with executive decorum. Members agree to utilize the internal Ethics Commission for mediation before seeking external or legal remedies, preserving the sanctity of the organization.
                   </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold font-serif">5</div>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-2">Civic Leadership</h3>
                   <p className="text-slate-600 font-light leading-relaxed">
                     Members are expected to actively participate in the organization’s civic initiatives, including youth development and community integration, as part of their duty to the Dallas–Fort Worth Metroplex.
                   </p>
                </div>
              </div>

            </div>

            <div className="mt-12 bg-[#f0f9ff] border-l-4 border-[#0F172A] p-6 flex items-start">
               <CheckCircle className="w-6 h-6 text-[#0F172A] mr-4 mt-1" />
               <p className="text-sm text-[#0F172A] font-medium">
                 By maintaining active membership status, all members implicitly agree to adhere to this Code of Ethics. Violations are subject to review by the Ethics Commission.
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Governance;