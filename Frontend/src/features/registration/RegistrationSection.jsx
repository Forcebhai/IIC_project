 import React from 'react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/animations/Reveal';
import Button from '../../components/common/Button';
import { registrationData } from './data';
import { siteConfig } from '../../config/siteConfig';
import { Check, Sparkles, Calendar, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function RegistrationSection({ onSelectTier }) {
  return (
    <section id="register" className="relative py-24 sm:py-32 bg-[#050814] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F4B51B]/10 blur-[180px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="SECTION 08 // REGISTRATION & PASSES"
          title={registrationData.heading}
          subtitle={registrationData.title}
          description={registrationData.description}
        />

        {/* 3 Ticket Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {registrationData.tiers.map((tier, idx) => (
            <Reveal key={tier.id} delay={idx * 0.15}>
              <div
                className={cn(
                  'glass-card rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300',
                  tier.popular
                    ? 'border-[#F4B51B] bg-gradient-to-b from-[#101B38] to-[#080D1F] shadow-[0_12px_40px_rgba(244,181,27,0.2)] lg:-translate-y-3'
                    : 'border-white/10'
                )}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F4B51B] to-[#FFD84D] text-[#050814] font-bold text-[10px] font-mono tracking-widest uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#050814]" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#AEB3B8]">
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#AEB3B8] leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-display font-extrabold text-white">
                      {tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-sm font-mono text-[#AEB3B8] line-through">
                        {tier.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#D2D6DC]">
                        <Check className="w-4 h-4 text-[#F4B51B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={tier.popular ? 'primary' : 'secondary'}
                  size="md"
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  {tier.price === 'FREE' ? 'Claim Student Pass' : 'Register Pass'}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

