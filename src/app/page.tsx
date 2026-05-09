"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Heart, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Message", id: "about" },
        { name: "Memories", id: "features" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Mom's Special Day"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-static" }}
      title="Happy Mother's Day"
      description="To the woman who gave me everything. Thank you for your endless love, patience, and kindness. This site is just a small token of my appreciation."
      buttons={[{ text: "Open My Special Message", href: "/about" }]}
      carouselItems={[
        { id: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=1", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=2", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=3", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=4", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=5", imageAlt: "happy mother holding bouquet of flowers" },
        { id: "6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=6", imageAlt: "happy mother holding bouquet of flowers" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="To My Dearest Mom"
      description="Mom, your presence has been the foundation of my life. You've taught me how to be kind, strong, and brave. On this special day, I want to celebrate you and everything you do."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=7"
      imageAlt="caring mother portrait warm smile"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Endless Patience",          description: "You always knew how to stay calm and guide me.",          icon: Sparkles,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=8", imageAlt: "heart icon" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=9", imageAlt: "flower icon" },
          ]
        },
        {
          title: "Unconditional Love",          description: "Your love is the safest place I know.",          icon: Heart,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=10", imageAlt: "star icon" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=11", imageAlt: "gift box icon" },
          ]
        },
        {
          title: "Incredible Wisdom",          description: "Your advice has shaped who I am today.",          icon: Award,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=12", imageAlt: "ribbon icon" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=13", imageAlt: "sparkle icon" },
          ]
        },
      ]}
      title="Why You're Simply Amazing"
      description="The little things you do make the biggest difference."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Always kind", handle: "From Ming", testimonial: "You taught me to see the best in everyone.", rating: 5 },
        { id: "2", name: "Constant support", handle: "From Ming", testimonial: "You believed in me when I didn't.", rating: 5 },
        { id: "3", name: "Unmatched warmth", handle: "From Ming", testimonial: "Your smile lights up my whole world.", rating: 5 },
        { id: "4", name: "Selfless giver", handle: "From Ming", testimonial: "You sacrifice so much just to make me smile.", rating: 5 },
        { id: "5", name: "Always listening", handle: "From Ming", testimonial: "I can talk to you about absolutely anything.", rating: 5 },
        { id: "6", name: "Simply you", handle: "From Ming", testimonial: "You are exactly who I aspire to be.", rating: 5 },
      ]}
      showRating={true}
      title="What Makes You Special"
      description="A collection of reasons why you are the best mom ever."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you know how much I love you?", content: "More than the stars in the sky." },
        { id: "q2", title: "Who is my favorite person?", content: "You, always and forever." },
        { id: "q3", title: "What is the best part of my day?", content: "Talking to you." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DUYbUzAEZ28pYmrBdh12s27HWh/uploaded-1778346246033-ct5zekqz.jpg?_wi=14"
      mediaAnimation="slide-up"
      faqsAnimation="slide-up"
      title="Sweet Notes for You"
      description="Answers to the most important things on my mind."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={["Love", "Kindness", "Patience", "Grace", "Strength", "Wisdom", "Joy"]}
      title="The Pillars of Our Bond"
      description="Values you've instilled in me every single day."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Let's Celebrate"
      title="Sending You All My Love"
      description="I hope you have the most beautiful day, Mom. You deserve all the happiness in the world."
      buttons={[{ text: "Send Virtual Hug" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="With Love from Ming"
      copyrightText="© 2025 | Mother's Day Celebration"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}