"use client";
// make skinier
//flip datacenter down to below image on all images
//
//make bullet point text size same

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            {/* Header Section */}
            <div className="pt-8 w-full">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold leading-tight mb-4 md:mb-8 max-w-3xl text-[#212e21]  drop-shadow-[0_6px_6px_rgba(0,0,0,0.35)]">
              Solutions
              </h1>
            </div>
          
            {/* Colocation Section */}
            <div className="py-1 w-full">
              <div className="max-w-5xl space-y-8">
                <Image
                  src="/sokorro-homepage.png"
                  alt="Data Center"
                  width={1200}
                  height={600}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full"
                />
                <div className="ml-[10%] mr-[10%]">
                  <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Data Center</h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    The data center industry has experienced unprecedented demand in recent years, fueling widespread capacity shortages and rising prices. Unfortunately, these trends have shifted the balance of power into providers' hands, making it difficult to source the right colocation space and negotiate a favorable contract.
                    </p>
                    <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">

Thanks to our unique institutional knowledge, Sokorro can quickly identify the providers that support your needs and then guide you to the optimal contract terms at the best price. Our platform provides access to a global portfolio of providers delivering a range of services from bare metal to colocation, wholesale and even build to suit data centers. 

                    </p>
                
                  </div>

              
                  {/* Expertise List */}
                  <div className="mt-10">
                    {/* Mobile Bullet Points */}
                    <div className="md:hidden">
                      <h4 className="text-xl font-avantgarde-bold text-[#212e21] mb-6">Data center technical expertise includes:</h4>
                      <ul className="list-disc pl-6 space-y-4 text-[#212e21] text-lg md:text-lg">
                        <li>Strategic risk analysis of mission-critical operations</li>
                        <li>Developing audit-compliant processes and procedures</li>
                        <li>Operational expertise for site selection, greenfield & brownfield builds</li>
                        <li>Executing Level 5 IST commissioning protocols</li>
                        <li>Developing staffing and technical training plans</li>
                        <li>Creating site-specific operating procedures to minimize human error</li>
                      </ul>
                    </div>

                    {/* Desktop Accordion Version */}
                    <details className="hidden md:block bg-[#ebfc72] rounded-lg overflow-hidden">
                      <summary className="text-xl font-avantgarde-bold text-[#212e21] p-6 cursor-pointer hover:bg-[#d9e865] transition-colors duration-200">
                        Data center technical expertise includes:
                      </summary>
                      <div className="p-6 bg-[#ebfc72] border-t-2 border-[#212e21]">
                        <ul className="list-disc pl-6 space-y-4 text-[#212e21] text-lg md:text-lg">
                          <li>Strategic risk analysis of mission-critical operations</li>
                          <li>Developing audit-compliant processes and procedures</li>
                          <li>Operational expertise for site selection, greenfield & brownfield builds</li>
                          <li>Executing Level 5 IST commissioning protocols</li>
                          <li>Developing staffing and technical training plans</li>
                          <li>Creating site-specific operating procedures to minimize human error</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud Section */}
            <div className="py-8 md:py-12 w-full">
              <div className="max-w-5xl space-y-8">
               
                <div className="ml-[10%] mr-[10%]">
                  <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Cloud</h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Cloud computing today encompasses a broad array of IT infrastructure services and software available on demand, over the Internet. Organizations of any size and across industries are leveraging the cloud to increase efficiency, improve performance, and reduce costs.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Network Section */}
            <div className="py-2 md:py-2 w-full">
              <div className="max-w-5xl space-y-8">
               
                <div className="ml-[10%] mr-[10%]">
                  <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Network</h3>
                  <div className="">
                    <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Understanding the market for network technologies and picking the right provider can be a frustrating and time-consuming affair. Sokorro simplifies the procurement of network services, taking on vendor sales engagement and optimizing outcomes.
                    
                    </p>
                    <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21] pb-10">
                    Our competencies include IP transit, private line, SD-WAN, and cloud connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}